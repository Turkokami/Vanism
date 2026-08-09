import { NextResponse } from "next/server";

/**
 * Nightly refresh of the two materialized views. Vercel cron is configured in
 * vercel.json. Without this, verified_checkins on Ground pages goes stale even
 * though the underlying check_ins table is current.
 *
 * Requires the service role key -- this is the one place that legitimately
 * needs it, and it must never be exposed to the client bundle.
 */
export async function GET(req: Request) {
  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return NextResponse.json({ ok: false }, { status: 500 });

  // Both views carry a unique index, so CONCURRENTLY is available and the
  // refresh does not lock reads on Ground pages while it runs.
  const res = await fetch(`${url}/rest/v1/rpc/refresh_ground_views`, {
    method: "POST",
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: "{}",
  });

  return NextResponse.json({ ok: res.ok }, { status: res.ok ? 200 : 502 });
}
