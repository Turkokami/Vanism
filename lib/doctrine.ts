// doctrine-lint-ignore-file -- this file DEFINES the banned list
/**
 * VIA DRACONIS AS BUILD CONSTRAINT
 * ---------------------------------------------------------------------------
 * The four laws are not copy. Each one is enforced somewhere a machine can
 * check it. This file is that machine. scripts/doctrine-lint.mjs runs it
 * against the tree on every build.
 */

export const LAWS = [
  {
    n: "I",
    title: "Earned, never given.",
    enforcedAt: "lib/schema.tsx :: Offer nodes; app/pricing; rank_ledger",
    rule: "The subscription buys tools. It never buys standing.",
  },
  {
    n: "II",
    title: "Transmute, don't escape.",
    enforcedAt: "scripts/doctrine-lint.mjs :: BANNED_PHRASES",
    rule: "Category terms live in metadata. Doctrine governs body copy.",
  },
  {
    n: "III",
    title: "Discipline is architecture.",
    enforcedAt: "lib/schema.tsx is the only JSON-LD source in the tree",
    rule: "One taxonomy, one Person id, no inline schema, gates are blocking.",
  },
  {
    n: "IV",
    title: "Silence has weight.",
    enforcedAt: "supabase/schema.sql :: riders.opt_in_public DEFAULT FALSE",
    rule: "A private rider is indistinguishable from one who does not exist.",
  },
] as const;

/**
 * LAW II. The whole category sells escape. We sell the opposite and must not
 * borrow the vocabulary. These are checked against rendered body copy only --
 * generateMetadata is exempt, because targeting is not voice.
 */
export const BANNED_PHRASES = [
  "escape the 9-5",
  "escape the 9 to 5",
  "escape the rat race",
  "live free",
  "the open road is calling",
  "wanderlust",
  "quit your job",
  "leave it all behind",
  "find yourself",
  "digital nomad dream",
];

/**
 * LAW I. Any feature row matching these on a paid tier is a build failure.
 * Standing is not a subscription benefit.
 */
export const UNSELLABLE = ["rank", "dragon", "standing", "tier", "leaderboard position"];

/** LAW I, asserted at the point a pricing table is authored. */
export function assertSellable(featureRows: string[], tier: "free" | "paid") {
  if (tier !== "paid") return;
  const violations = featureRows.filter((row) =>
    UNSELLABLE.some((term) => row.toLowerCase().includes(term))
  );
  if (violations.length) {
    throw new Error(
      `Law I violation -- paid tier implies purchasable standing: ${violations.join(" | ")}`
    );
  }
}
