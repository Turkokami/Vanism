import { COPILOT_RENAME } from "@/lib/site";

/**
 * THE COMPARISON CLUSTER -- PHASE 2.5.
 *
 * BLOCKED ON REGISTRY #2. Sekr ships an AI feature called Copilot and so does
 * Vanism. Publishing this cluster before the rename reinforces a competitor's
 * trademark on every commercial-intent page we own. canPublishComparisons()
 * is checked by the route and by the lint script.
 *
 * Every figure carries a retrieval date. No competitor is disparaged -- the
 * wedge is verification and standing, which none of them can answer.
 */

export type Competitor = {
  slug: string;
  name: string;
  priceYearly: number | null;
  retrievedOn: string;
  positioning: string;
  /** What they do genuinely well. Stated plainly. */
  strength: string;
  /** The structural gap, not a slight. */
  gap: string;
};

export const COMPETITORS: Competitor[] = [
  {
    slug: "the-dyrt",
    name: "The Dyrt",
    priceYearly: 35.99,
    retrievedOn: "2026-07-30",
    positioning: "Largest campground database with user reviews and offline maps.",
    strength: "Coverage. Very few gaps in the developed-campground layer.",
    gap: "Reviews are opinions posted from anywhere. Nothing in the record proves the reviewer was on site.",
  },
  {
    slug: "harvest-hosts",
    name: "Harvest Hosts",
    priceYearly: 99.0,
    retrievedOn: "2026-07-30",
    positioning: "Membership network of host businesses offering overnight parking.",
    strength: "A genuinely distinct inventory nobody else has.",
    gap: "It is a membership directory. There is no progression and nothing to earn.",
  },
  {
    slug: "roadtrippers",
    name: "Roadtrippers",
    priceYearly: 49.99,
    retrievedOn: "2026-07-30",
    positioning: "Route planner built around waypoints and points of interest.",
    strength: "Planning ergonomics on long multi-stop routes.",
    gap: "Planning ends at departure. There is no record of what you actually reached.",
  },
  {
    slug: "campendium",
    name: "Campendium",
    priceYearly: null,
    retrievedOn: "2026-07-30",
    positioning: "Free-camping listings with cell-coverage reporting.",
    strength: "Cell data per site is genuinely useful and hard to assemble.",
    gap: "Listing age is invisible. A site confirmed in 2019 looks identical to one confirmed last week.",
  },
  {
    slug: "sekr",
    name: "Sekr",
    priceYearly: 29.99,
    retrievedOn: "2026-07-30",
    positioning: "Community-driven camping finder with an in-app AI assistant.",
    strength: "Community tone and a clean mobile experience.",
    gap: "Community contributions are unverified. Presence is asserted, not recorded.",
  },
  {
    slug: "ioverlander",
    name: "iOverlander",
    priceYearly: null,
    retrievedOn: "2026-07-30",
    positioning: "Free, volunteer-maintained global overlanding database.",
    strength: "International coverage and a genuine non-commercial ethic.",
    gap: "Data decays with no freshness gate. Everything publishes regardless of age.",
  },
  {
    slug: "dispersed",
    name: "Dispersed",
    priceYearly: 39.99,
    retrievedOn: "2026-07-30",
    positioning: "Dispersed-camping finder built on public land data.",
    strength: "Public-land boundary accuracy, and an active comparison content strategy.",
    gap: "Boundaries are not conditions. A legal cell says nothing about whether the road is passable.",
  },
];

export const CATEGORY_AVERAGE_YEARLY = 59.99;

/** Registry #2 gate. */
export function canPublishComparisons(): boolean {
  return COPILOT_RENAME !== null;
}
