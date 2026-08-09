import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBox } from "@/components/AnswerBox";
import { CtaBar } from "@/components/CtaBar";
import {
  COMPETITORS,
  CATEGORY_AVERAGE_YEARLY,
  canPublishComparisons,
} from "@/content/competitors";

export const metadata: Metadata = {
  title: "Compare van life and overlanding apps",
  description:
    "How Vanism compares with the camping and overland apps in this category on verification, freshness, progression and privacy.",
  alternates: { canonical: "/compare" },
};

/**
 * REGISTRY #2 GATE. Sekr ships an AI feature called Copilot and so does
 * Vanism. Publishing this cluster before the rename reinforces their
 * trademark on the highest commercial-intent pages we own. The whole cluster
 * 404s until COPILOT_RENAME is set in lib/site.ts.
 */
export default function CompareIndex() {
  if (!canPublishComparisons()) notFound();

  return (
    <div className="mx-auto max-w-4xl px-5 py-20">
      <p className="eyebrow">Compare</p>
      <h1 className="display mt-4 text-5xl text-bone">Where we differ</h1>

      <div className="mt-10">
        <AnswerBox question="How is Vanism different from other camping apps">
          <p>
            Most apps in this category are databases of places with user
            reviews. Vanism records whether the person was physically present
            when they contributed, withholds any site not confirmed within
            eighteen months, and adds standing that is earned on the ground and
            never sold. The differences are structural rather than featural.
          </p>
        </AnswerBox>
      </div>

      <ul className="mt-12 divide-y divide-ink-raised border-y border-ink-raised">
        {COMPETITORS.map((c) => (
          <li key={c.slug} className="flex flex-wrap items-baseline gap-4 py-5">
            <Link
              href={`/compare/${c.slug}`}
              className="display text-xl text-bone hover:text-brass"
            >
              Vanism vs {c.name}
            </Link>
            <span className="data ml-auto text-xs text-slate">
              {c.priceYearly != null ? `$${c.priceYearly}/yr` : "Free"}
            </span>
          </li>
        ))}
      </ul>

      <p className="data mt-6 text-xs text-slate">
        Category average: ${CATEGORY_AVERAGE_YEARLY} a year. All figures retrieved
        on the date shown on each page.
      </p>

      <CtaBar context="compare-index" />
    </div>
  );
}
