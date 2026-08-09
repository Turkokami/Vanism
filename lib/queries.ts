import { db } from "./supabase";
import { isPublishable, type ObjectiveRow } from "./publishable";

/**
 * Every aggregate a page needs is precomputed in a materialized view. At 1,500
 * ISR routes the difference between reading a view and running an aggregate
 * per request is the difference between a build that scales and one that melts.
 *
 * FAIL-SOFT POLICY
 * ---------------------------------------------------------------------------
 * These are called from generateStaticParams and sitemap.ts, which run at BUILD
 * time. A missing table or unreachable database would therefore take down the
 * whole build -- including /pricing, /features and /support, none of which
 * touch Supabase at all.
 *
 * That coupling is wrong in both directions. An empty Ground estate is a
 * recoverable state; a deploy that cannot serve the support page Apple requires
 * is not. So read failures degrade to empty and log loudly in the build output.
 *
 * This does NOT weaken the publishability gate. Rows that exist are still
 * filtered by isPublishable() before reaching the sitemap. Fail-soft only
 * governs what happens when there are no rows to filter.
 */

/** Postgres/PostgREST codes worth degrading on rather than crashing a build. */
const SOFT_CODES = new Set([
  "42P01", // undefined_table -- schema.sql not loaded yet
  "42501", // insufficient_privilege -- RLS or grants not applied
  "PGRST205", // PostgREST: table not found in schema cache
  "PGRST116", // PostgREST: no rows where one was expected
]);

type QueryError = { code?: string; message: string } | null;

function report(label: string, error: QueryError): void {
  if (!error) return;
  const code = error.code ?? "";
  if (SOFT_CODES.has(code)) {
    console.warn(
      `[queries] ${label}: degrading to empty -- ${code} ${error.message}. ` +
        `Load supabase/schema.sql if this is a fresh project.`
    );
    return;
  }
  // Anything else is a real fault. Still no throw at build time, but make it
  // impossible to miss in the deploy log.
  console.error(`[queries] ${label}: unexpected error ${code} ${error.message}`);
}

export async function getStates(): Promise<string[]> {
  const { data, error } = await db.from("mv_ground_stats").select("state").order("state");
  report("getStates", error);
  const rows = (data ?? []) as { state: string }[];
  return Array.from(new Set(rows.map((r) => r.state)));
}

export async function getObjectivesByState(state: string): Promise<ObjectiveRow[]> {
  const { data, error } = await db.from("mv_ground_stats").select("*").eq("state", state);
  report("getObjectivesByState", error);
  return (data ?? []) as ObjectiveRow[];
}

export async function getObjective(state: string, slug: string) {
  const { data, error } = await db
    .from("mv_ground_stats")
    .select("*")
    .eq("state", state)
    .eq("slug", slug)
    .maybeSingle();
  report("getObjective", error);
  return (data ?? null) as (ObjectiveRow & { summary: string; body: string }) | null;
}

/** Sitemap source. Gate enforced here so it cannot be bypassed by a caller. */
export async function getPublishableObjectives(): Promise<ObjectiveRow[]> {
  const { data, error } = await db.from("mv_ground_stats").select("*");
  report("getPublishableObjectives", error);
  return ((data ?? []) as ObjectiveRow[]).filter(isPublishable);
}

export async function getRuns() {
  const { data, error } = await db.from("runs").select("slug, name, summary, updated_at");
  report("getRuns", error);
  return data ?? [];
}

export async function getRun(slug: string) {
  const { data, error } = await db
    .from("runs")
    .select("*, run_objectives(position, objectives(slug, state, name))")
    .eq("slug", slug)
    .maybeSingle();
  report("getRun", error);
  return data ?? null;
}

/**
 * LAW IV. Reads mv_village_standing, never the riders table. The view filters
 * opt_in_public in its own definition. A rider who has not opted in returns
 * null here and 404 at the route -- never 403, which would confirm they exist.
 *
 * Fail-soft matters especially here: if this threw, a database blip would turn
 * every private-rider 404 into a 500, and that difference is itself an oracle.
 */
export async function getPublicRider(trailname: string) {
  const { data, error } = await db
    .from("mv_village_standing")
    .select("*")
    .eq("trailname", trailname)
    .maybeSingle();
  report("getPublicRider", error);
  return data ?? null;
}

export async function getPublicRiderSlugs(): Promise<string[]> {
  const { data, error } = await db.from("mv_village_standing").select("trailname");
  report("getPublicRiderSlugs", error);
  return ((data ?? []) as { trailname: string }[]).map((r) => r.trailname);
}
