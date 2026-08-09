import { db } from "./supabase";
import { isPublishable, type ObjectiveRow } from "./publishable";

/**
 * Every aggregate a page needs is precomputed in a materialized view. At 1,500
 * ISR routes the difference between reading a view and running an aggregate
 * per request is the difference between a build that scales and one that melts.
 */

export async function getStates() {
  const { data } = await db.from("mv_ground_stats").select("state").order("state");
  return Array.from(new Set((data ?? []).map((r) => r.state as string)));
}

export async function getObjectivesByState(state: string): Promise<ObjectiveRow[]> {
  const { data } = await db.from("mv_ground_stats").select("*").eq("state", state);
  return (data ?? []) as ObjectiveRow[];
}

export async function getObjective(state: string, slug: string) {
  const { data } = await db
    .from("mv_ground_stats")
    .select("*")
    .eq("state", state)
    .eq("slug", slug)
    .maybeSingle();
  return data as (ObjectiveRow & { summary: string; body: string }) | null;
}

/** Sitemap source. Gate enforced here so it cannot be bypassed by a caller. */
export async function getPublishableObjectives(): Promise<ObjectiveRow[]> {
  const { data } = await db.from("mv_ground_stats").select("*");
  return ((data ?? []) as ObjectiveRow[]).filter(isPublishable);
}

export async function getRuns() {
  const { data } = await db.from("runs").select("slug, name, summary, updated_at");
  return data ?? [];
}

export async function getRun(slug: string) {
  const { data } = await db
    .from("runs")
    .select("*, run_objectives(position, objectives(slug, state, name))")
    .eq("slug", slug)
    .maybeSingle();
  return data;
}

/**
 * LAW IV. Reads mv_village_standing, never the riders table. The view filters
 * opt_in_public in its own definition. A rider who has not opted in returns
 * null here and 404 at the route -- never 403, which would confirm they exist.
 */
export async function getPublicRider(trailname: string) {
  const { data } = await db
    .from("mv_village_standing")
    .select("*")
    .eq("trailname", trailname)
    .maybeSingle();
  return data;
}

export async function getPublicRiderSlugs(): Promise<string[]> {
  const { data } = await db.from("mv_village_standing").select("trailname");
  return (data ?? []).map((r) => r.trailname as string);
}
