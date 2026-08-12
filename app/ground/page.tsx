import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { CtaBar } from "@/components/CtaBar";
import { getStates, getPublishableObjectives } from "@/lib/queries";
import { STATES, STATE_CODES } from "@/content/states";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "The Ground - verified camping and overland sites by state",
  description:
    "Every objective on Vanism is confirmed by riders who stood there. Browse by state for dispersed camping, water, dump stations and access notes.",
  alternates: { canonical: "/ground" },
};

export default async function GroundIndex() {
  const [dbStates, objectives] = await Promise.all([getStates(), getPublishableObjectives()]);
  const byState = new Map<string, number>();
  objectives.forEach((o) => byState.set(o.state, (byState.get(o.state) ?? 0) + 1));
  // Static state hubs plus any state that has objectives, deduped and sorted.
  const states = Array.from(new Set([...STATE_CODES, ...dbStates])).sort();

  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <p className="eyebrow">The Ground</p>
      <h1 className="display mt-4 text-5xl text-bone">Places, confirmed</h1>

      <div className="mt-10">
        <AnswerBox question="What makes an objective publishable">
          <p>
            An objective appears here only after three independent riders have
            checked in on site, the coordinates are recorded, the access status
            is known, and someone has confirmed it within the last eighteen
            months. Sites that fail any of those tests are still reachable by
            link, but they stay out of the index.
          </p>
        </AnswerBox>
      </div>

      <ul className="mt-12 grid gap-px border border-ink-raised bg-ink-raised sm:grid-cols-2 lg:grid-cols-4">
        {states.map((s) => (
          <li key={s}>
            <Link
              href={`/ground/${s}`}
              className="flex items-baseline justify-between bg-ink px-5 py-4 hover:bg-ink-deep"
            >
              <span className="display text-lg text-bone">{STATES[s]?.name ?? s.toUpperCase()}</span>
              <span className="data text-xs text-slate">{byState.get(s) ?? 0}</span>
            </Link>
          </li>
        ))}
      </ul>

      <CtaBar context="ground-index" />
    </div>
  );
}
