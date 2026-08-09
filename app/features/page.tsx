import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { CtaBar } from "@/components/CtaBar";
import { CLAUSES, FEATURES, type Clause } from "@/content/features";

export const metadata: Metadata = {
  title: "Features - what Vanism actually does",
  description:
    "Verified site records, offline maps, season continuity and earned rank. Nine capabilities grouped by what they are for.",
  alternates: { canonical: "/features" },
};

const ORDER: Clause[] = ["verification", "continuity", "progression"];

export default function FeaturesIndex() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <p className="eyebrow">Features</p>
      <h1 className="display mt-4 text-5xl text-bone">Three things,<br />nine ways</h1>

      <div className="mt-10">
        <AnswerBox question="What does Vanism do">
          <p>
            Vanism records where riders have physically been and turns that into
            three things: a site database nobody can post to from home, a
            continuous record across a whole season, and standing that is earned
            on the ground rather than sold. Planning tools are paid. Standing is
            not for sale in any tier.
          </p>
        </AnswerBox>
      </div>

      {ORDER.map((clause) => (
        <section key={clause} className="mt-16">
          <h2 className="display text-2xl text-bone">{CLAUSES[clause].name}</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate">{CLAUSES[clause].blurb}</p>

          <ul className="mt-6 grid gap-px border border-ink-raised bg-ink-raised md:grid-cols-3">
            {FEATURES.filter((f) => f.clause === clause).map((f) => (
              <li key={f.slug} className="bg-ink px-5 py-6">
                <h3 className="display text-lg text-bone">
                  <Link href={`/features/${f.slug}`} className="hover:text-brass">
                    {f.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{f.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <CtaBar context="features-index" />
    </div>
  );
}
