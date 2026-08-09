import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { FaqBlock } from "@/components/FaqBlock";
import { offerNode, faqNode, appNode, fetchAggregateRating, graph } from "@/lib/schema";
import { PRICING, SITE_URL } from "@/lib/site";
import { assertSellable } from "@/lib/doctrine";

/**
 * PHASE 2.1 -- the only page that can take money. The old site had none, which
 * made every other page in the funnel unpaid inventory.
 *
 * REGISTRY #3 BLOCKING: PRICING.monthly and PRICING.yearly are null until the
 * real figures are confirmed from RevenueCat. The page renders the honest
 * state rather than an invented price.
 */

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Vanism subscription pricing. Free route planning, or a paid tier for offline maps, season continuity and rider intel. Rank is never included -- it is earned.",
  alternates: { canonical: "/pricing" },
};

const TIERS = [
  {
    id: "free",
    name: "Free",
    tagline: "Plan the season",
    tier: "free" as const,
    rows: [
      "Search every published objective",
      "Web route planner",
      "Three saved runs",
      "Check in and build your own record",
    ],
  },
  {
    id: "offer-monthly",
    name: "Monthly",
    tagline: "Take it month to month",
    tier: "paid" as const,
    price: PRICING.monthly,
    period: "P1M" as const,
    rows: [
      "Everything in Free",
      "Offline maps and access notes",
      "Unlimited saved runs",
      "Rider intel: recent conditions on every objective",
    ],
  },
  {
    id: "offer-yearly",
    name: "Yearly",
    tagline: "The season, paid once",
    tier: "paid" as const,
    price: PRICING.yearly,
    period: "P1Y" as const,
    featured: true,
    rows: [
      "Everything in Monthly",
      "Season continuity across devices",
      "Early access to new ground",
      "Priority on report review",
    ],
  },
];

const FAQ = [
  {
    q: "Does paying give me a higher rank",
    a: "No. Rank is earned by reaching objectives and checking in on the ground. It is not included in any tier and it is not for sale. A subscription buys planning tools.",
  },
  {
    q: "Can I buy Dragon",
    a: "No. Dragon is earned virtual currency and is never sold for real money. That has been the rule since before the app shipped.",
  },
  {
    q: "What does the free tier actually do",
    a: "It plans a real trip. You can search every published objective, build runs in the web planner, save three of them and record your own check-ins.",
  },
  {
    q: "How does this compare on price",
    a: `Apps in this category run about $${PRICING.categoryRange} a year, averaging around $${PRICING.categoryAverage} as of ${PRICING.categorySourcedOn}.`,
  },
  {
    q: "Can I cancel",
    a: "Yes, from Apple subscription settings. Billing stops at the end of the paid period. Rank you earned stays on your record.",
  },
];

export default async function Pricing() {
  // LAW I, asserted at build time. A paid row implying purchasable standing
  // throws rather than ships.
  TIERS.forEach((t) => assertSellable(t.rows, t.tier));

  const priced = TIERS.filter((t) => t.tier === "paid" && t.price != null);
  const validUntil = new Date(Date.now() + 365 * 864e5).toISOString().slice(0, 10);

  const offers = priced.map((t) =>
    offerNode({
      id: t.id,
      name: `Vanism ${t.name}`,
      price: t.price as number,
      currency: PRICING.currency,
      period: t.period as "P1M" | "P1Y",
      validUntil,
    })
  );

  const rating = await fetchAggregateRating();

  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <JsonLd data={graph(appNode(rating, offers), faqNode(FAQ, `${SITE_URL}/pricing`))} />

      <p className="eyebrow">Pricing</p>
      <h1 className="display mt-4 text-5xl text-bone">Tools are paid.<br />Standing is not.</h1>
      <p className="mt-5 max-w-xl text-slate">
        A subscription buys offline maps, continuity and rider intel. It does not
        buy rank, Dragon or position on any board. Those are earned on the
        ground, by you, or not at all.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {TIERS.map((t) => (
          <section
            key={t.id}
            className={`border p-6 ${
              t.featured ? "border-brass bg-ink-deep" : "border-ink-raised"
            }`}
          >
            {t.featured && <p className="eyebrow">Best value</p>}
            <h2 className="display mt-1 text-2xl text-bone">{t.name}</h2>
            <p className="data mt-1 text-xs uppercase tracking-[0.12em] text-slate">
              {t.tagline}
            </p>

            <p className="data mt-6 text-3xl font-bold text-bone">
              {t.tier === "free"
                ? "$0"
                : t.price != null
                ? `$${t.price}`
                : "PRICE PENDING"}
              {t.tier !== "free" && t.price != null && (
                <span className="text-sm text-slate">
                  {t.period === "P1Y" ? " / year" : " / month"}
                </span>
              )}
            </p>
            {t.tier !== "free" && t.price == null && (
              <p className="mt-1 text-xs text-brass-lit">
                Registry #3 -- confirm from RevenueCat before launch
              </p>
            )}

            <ul className="mt-6 space-y-3 text-sm text-slate">
              {t.rows.map((r) => (
                <li key={r} className="flex gap-3">
                  <span aria-hidden="true" className="text-brass">&mdash;</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="data mt-8 text-xs text-slate">
        Category comparison: apps in this space run ${PRICING.categoryRange} a
        year, averaging ${PRICING.categoryAverage}. Figures retrieved{" "}
        {PRICING.categorySourcedOn}.
      </p>

      <FaqBlock items={FAQ} />
    </div>
  );
}
