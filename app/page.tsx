import Link from "next/link";
import { VerificationStamp } from "@/components/VerificationStamp";
import { AnswerBox } from "@/components/AnswerBox";
import { CtaBar } from "@/components/CtaBar";
import { getPublishableObjectives } from "@/lib/queries";

export const revalidate = 1800;

/**
 * The hero is the thesis. Every competitor opens with a map or a photograph of
 * a van at sunset. This opens with the one thing none of them can put on a
 * page: a count of people who actually stood there, struck as a benchmark.
 *
 * LAW II -- no escape vocabulary anywhere in this copy. The verbs are stand,
 * walk, confirm, earn.
 */
export default async function Home() {
  const objectives = await getPublishableObjectives();
  const totalCheckins = objectives.reduce((n, o) => n + o.verified_checkins, 0);
  const lastVerified = objectives
    .map((o) => o.last_verified_at)
    .filter(Boolean)
    .sort()
    .at(-1) as string | null;

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.35fr_1fr] md:items-center md:py-28">
        <div>
          <p className="eyebrow">Via Draconis &middot; the road as a discipline</p>
          <h1 className="display mt-5 text-[clamp(2.75rem,8vw,5.25rem)] text-bone">
            Ground that
            <br />
            someone
            <br />
            <span className="text-brass">stood on.</span>
          </h1>
          <p className="mt-7 max-w-lg text-[1.0625rem] leading-relaxed text-slate">
            Every other app hands you a database of places. Vanism records who
            walked in, what they found, and when they confirmed it. Position is
            earned on the ground and it is never for sale.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/ground"
              className="display bg-brass px-7 py-3.5 text-sm text-ink hover:bg-brass-lit"
            >
              Open the ground
            </Link>
            <Link
              href="/codex"
              className="display border border-ink-raised px-7 py-3.5 text-sm text-bone hover:border-brass"
            >
              Read the codex
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <VerificationStamp
            count={totalCheckins}
            lastVerified={lastVerified}
            size="large"
          />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5">
        <AnswerBox question="What is Vanism">
          <p>
            Vanism is a road-travel app for van life and overlanding where every
            site, water point and access note is confirmed by GPS-verified
            check-ins from riders who were physically present. Riders build rank
            by reaching objectives themselves. Rank cannot be purchased, and a
            subscription buys planning tools, never standing.
          </p>
        </AnswerBox>

        <section className="mt-20 grid gap-8 md:grid-cols-3">
          {[
            {
              k: "Verification",
              t: "Confirmed, or it does not publish",
              b: "A site needs three independent check-ins, coordinates, a known access status and a confirmation inside eighteen months before it enters the index at all.",
            },
            {
              k: "Continuity",
              t: "One record across the season",
              b: "Objectives join into named runs. What you confirmed in April is still on your record in October, and the run you half-finished is still waiting.",
            },
            {
              k: "Progression",
              t: "Standing you walked to",
              b: "Dragon is earned virtual currency. It is never sold for real money and it is not a subscription perk. That rule predates the app.",
            },
          ].map((c) => (
            <article key={c.k}>
              <p className="eyebrow">{c.k}</p>
              <h3 className="display mt-3 text-xl text-bone">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{c.b}</p>
            </article>
          ))}
        </section>

        <CtaBar context="home" />
      </div>
    </>
  );
}
