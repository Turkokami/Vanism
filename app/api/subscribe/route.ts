import { NextResponse } from "next/server";

/**
 * PHASE 2.3 -- double opt-in only. LAW IV: no pre-checked consent, no
 * re-engagement sequence, no sharing the list.
 *
 * WIRE THIS to the sending provider before launch. It currently validates and
 * accepts without storing, so the UI can be tested without collecting anyone's
 * address into a void.
 */
export async function POST(req: Request) {
  const { email, context } = (await req.json()) as { email?: string; context?: string };

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  // TODO(phase-2.3): send confirmation, store only on confirm.
  console.info("subscribe pending confirmation", { context });

  return NextResponse.json({ ok: true });
}
