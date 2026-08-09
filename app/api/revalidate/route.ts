import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import crypto from "node:crypto";

/**
 * PHASE 5.3 -- on-demand ISR fired by a Supabase webhook on rider profile
 * change. A rider who edits their trailname sees it immediately; everyone else
 * sees it inside the 300s window.
 *
 * Signed requests only. An unsigned revalidate endpoint is a cache-poisoning
 * primitive.
 */
export async function POST(req: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ ok: false }, { status: 500 });

  const raw = await req.text();
  const sent = req.headers.get("x-signature") ?? "";
  const expected = crypto.createHmac("sha256", secret).update(raw).digest("hex");

  const a = Buffer.from(sent);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const body = JSON.parse(raw) as { table?: string; record?: Record<string, unknown> };

  // LAW IV: only public riders are revalidated. Revalidating a private path
  // would leak existence through cache timing.
  if (body.table === "riders" && body.record?.opt_in_public === true) {
    revalidatePath(`/village/${body.record.trailname as string}`);
  }
  if (body.table === "objectives" && body.record?.state && body.record?.slug) {
    revalidatePath(`/ground/${body.record.state}/${body.record.slug}`);
    revalidatePath(`/ground/${body.record.state}`);
  }

  return NextResponse.json({ ok: true });
}
