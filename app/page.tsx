import Link from "next/link";
import Image from "next/image";
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
 * LAW II -- no escape vocabulary anywhere in this copy. The verbs are hunt,
 * stand, confirm, earn -- matching the live vanism.ai voice: turn the road into
 * something you earn; plan the season at the desk; hunt real places by GPS;
 * bring intel back to the Village.
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
            <span className="text-brass glow">stood on.</span>
          </h1>
          <p className="mt-7 max-w-lg text-[1.0625rem] leading-relaxed text-slate">
            Every other app hands you a database of places. Vanism records who
            hunted the site, what they found on the ground, and when they last
            confirmed it. Position is earned across the season, and it is never
            for sale.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/ground"
              className="display lift lit bg-brass px-7 py-3.5 text-sm text-ink hover:bg-brass-lit"
            >
              Open the ground
            </Link>
            <Link
              href="/codex"
              className="display hud lift border border-ink-raised px-7 py-3.5 text-sm text-bone hover:border-brass"
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
            check-ins from riders who were physically present. Riders plan the
            season at the desk, hunt real places by GPS, and bring confirmed
            intel back to the Village. Rank is earned by reaching objectives, it
            cannot be purchased, and a subscription buys planning tools, never
            standing.
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
            <article
              key={c.k}
              className="hud lift border border-ink-raised bg-ink-deep/40 p-6"
            >
              <p className="eyebrow">{c.k}</p>
              <h3 className="display mt-3 text-xl text-bone">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{c.b}</p>
            </article>
          ))}
        </section>

        <hr className="hud-rule mt-24" />

        <section className="hud mt-16 grid gap-12 border border-ink-raised bg-ink-raised/30 px-6 py-14 md:grid-cols-[1.1fr_1fr] md:items-center md:px-12">
          <div>
            <p className="eyebrow">The app &middot; C3I</p>
            <h2 className="display mt-3 text-[clamp(1.9rem,4vw,2.75rem)] text-bone">
              Plan at the desk.
              <br />
              Command it on the road.
            </h2>
            <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-slate">
              C3I is the calm travel OS at the center of Vanism. It gathers your
              file, helps you build the run, and keeps the record as you hunt real
              ground by GPS &mdash; one season, from the desk to the driver&rsquo;s
              seat.
            </p>
            <a
              href="https://apps.apple.com/us/app/vanism/id6786479632"
              className="display lit mt-8 inline-block bg-brass px-7 py-3.5 text-sm text-ink hover:bg-brass-lit"
            >
              Download on the App Store
            </a>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/app-c3i.png"
              alt="Vanism C3I home screen on iPhone: plan the season, build the run, command the road"
              width={680}
              height={1332}
              priority
              className="h-auto w-full max-w-[280px]"
            />
          </div>
        </section>

        <CtaBar context="home" />
      </div>
    </>
  );
}
