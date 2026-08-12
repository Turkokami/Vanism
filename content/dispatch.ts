/**
 * DISPATCH -- PHASE 4.5.
 *
 * The topical layer. Six clusters, ordered by funnel position: commercial
 * intent first, then volume, then differentiation. Codex is doctrine;
 * Dispatch is the practical writing that ranks for what riders actually search.
 *
 * LAW II applies to body copy here as everywhere. Category terms belong in
 * the title and description, which the linter exempts.
 */

import type { Block } from "./blocks";
import { DISPERSED_RULES } from "./pillar-dispersed-rules";

export type ClusterId =
  | "legality"
  | "finding-ground"
  | "systems"
  | "seasons"
  | "cost"
  | "the-record";

export type Cluster = {
  id: ClusterId;
  name: string;
  intent: "commercial" | "volume" | "differentiation";
  blurb: string;
};

export const CLUSTERS: Cluster[] = [
  {
    id: "legality",
    name: "Where you can legally stop",
    intent: "commercial",
    blurb:
      "Public land rules, stay limits, permits and the difference between a legal boundary and a passable road.",
  },
  {
    id: "cost",
    name: "What it costs",
    intent: "commercial",
    blurb:
      "Real numbers on fuel, fees, repair and the apps people pay for, with the arithmetic shown.",
  },
  {
    id: "finding-ground",
    name: "Finding ground",
    intent: "volume",
    blurb:
      "How to locate dispersed sites, read a forest map, and tell a good pullout from one you will regret.",
  },
  {
    id: "systems",
    name: "Systems that hold",
    intent: "volume",
    blurb: "Water, power, waste and the boring infrastructure a long season depends on.",
  },
  {
    id: "seasons",
    name: "Seasons and weather",
    intent: "differentiation",
    blurb: "Timing a route, reading a closure window, and what changes when the ground freezes.",
  },
  {
    id: "the-record",
    name: "The record",
    intent: "differentiation",
    blurb: "Verification, rank, and what it means to keep an honest account of where you have been.",
  },
];

export type Post = {
  slug: string;
  cluster: ClusterId;
  title: string;
  description: string;
  published: string;
  answer: string;
  /** Legacy flat prose. Use `blocks` for pillar-length pieces. */
  body?: string[];
  /** Long-form structured document -- gives real H2/H3 hierarchy and a TOC. */
  blocks?: Block[];
  /** Pillar pieces anchor a cluster and are linked from every sibling. */
  pillar?: boolean;
  faq: { q: string; a: string }[];
};

export const POSTS: Post[] = [
  {
    slug: "dispersed-camping-rules-public-land",
    cluster: "legality",
    pillar: true,
    title: "Dispersed camping on public land: the complete rules",
    description:
      "Which agency governs what, how the 14-day limit is actually counted, reading a Motor Vehicle Use Map, fire restriction stages, and how to verify a specific site before you drive to it.",
    published: "2026-08-05",
    answer:
      "Dispersed camping is legal on most BLM and national forest land without a permit or fee, for a limited number of nights, in places that have already been used. Stay limits are commonly 14 days in a 28-day period with a 25-mile reset distance, but districts set their own and the district office rule overrides any national figure.",
    blocks: DISPERSED_RULES,
    faq: [
      {
        q: "Do you need a permit for dispersed camping",
        a: "Generally no on BLM and national forest land. National parks are the exception -- backcountry camping there requires a permit and roadside camping is prohibited nearly everywhere in the system.",
      },
      {
        q: "How long can you stay in one spot",
        a: "Commonly 14 days within a 28-day period, then you must move a set distance away, often 25 miles. Districts set their own limits and some are shorter, so check the field office rather than assuming the default.",
      },
      {
        q: "Does moving down the road reset the stay limit",
        a: "No. The limit generally applies to an area rather than a site, so relocating within the same district continues the same stay. The reset requires the full distance specified by that district.",
      },
      {
        q: "What is a Motor Vehicle Use Map",
        a: "The legally operative statement of which forest roads are open, to which vehicles, during which months. It is issued per forest, updated annually, free, and it overrides every navigation app and general forest map.",
      },
      {
        q: "Can you have a campfire while dispersed camping",
        a: "It depends entirely on current fire restrictions, which are issued at district level and change with a few days notice. A stove with a shutoff valve survives Stage 1 and often Stage 2 restrictions; a route built around campfires does not.",
      },
      {
        q: "How far from water do you have to camp",
        a: "Nearly every district requires at least 100 to 200 feet from any water source. It is among the more actively enforced rules because the damage is visible and immediate.",
      },
    ],
  },
  {
    slug: "how-long-can-you-stay-on-public-land",
    cluster: "legality",
    title: "How long you can stay in one spot on public land",
    description:
      "Stay limits on BLM and national forest land, how they are counted, and what moving on actually requires.",
    published: "2026-08-05",
    answer:
      "On most BLM and national forest land the dispersed stay limit is 14 days within a 28-day period, after which you must move a set distance -- commonly 25 miles -- away from the previous site. Districts set their own limits and some are shorter, so the posted rule at the district office governs over any general figure.",
    body: [
      "The fourteen-day figure is the one everybody quotes and it is usually right, but it is a default rather than a law. Individual BLM field offices and forest districts set their own limits, and in high-pressure areas they are shorter. Checking the district rather than assuming the default is the whole of the compliance work.",
      "How the clock is counted matters more than the number. The limit is generally per area, not per site, so moving half a mile down the same road does not reset anything. The reset distance is typically twenty-five miles, and it is measured from the site you left.",
      "Enforcement varies enormously and that is not an argument for ignoring it. Stay limits exist because dispersed camping is fragile as a permission -- it is withdrawn area by area when the ground gets worn, and the areas that lose it do not usually get it back.",
    ],
    faq: [
      {
        q: "Does moving to a different site nearby reset the clock",
        a: "Usually not. The limit is generally applied per area, with a reset distance of around twenty-five miles from the previous site.",
      },
      {
        q: "How do I find the limit for a specific area",
        a: "The district office is the authority. Objectives on Vanism carry the reported access status and any stay limit riders have confirmed on the ground.",
      },
    ],
  },
  {
    slug: "legal-boundary-vs-passable-road",
    cluster: "legality",
    title: "A legal boundary is not a passable road",
    description:
      "Why public land data tells you where you may camp and nothing at all about whether you can get there.",
    published: "2026-08-05",
    answer:
      "Public land layers show where dispersed camping is permitted. They do not show washouts, locked gates, seasonal closures, clearance requirements or fire restrictions, all of which determine whether a legal site is reachable. Those are conditions, and conditions only come from people who were recently on the road.",
    body: [
      "The boundary data is genuinely good and genuinely free. Anyone can put a public land layer on a map, which is why most apps in this category have one and why having one is not a differentiator.",
      "What the layer cannot tell you is the last two miles. A cell can be perfectly legal and end at a washout, a gate that opens in June, or a grade that wants clearance you do not have. Every one of those is invisible to the data and obvious to anyone who drove it last week.",
      "This is the reason the site record here carries an access status with a date attached, and the reason an objective with an unknown status does not publish at all. A confident page about a road nobody has confirmed is worse than no page.",
    ],
    faq: [
      {
        q: "Why does an objective show as unpublished",
        a: "It failed one of the four gate tests: fewer than three confirmed visits, missing coordinates, unknown access status, or no confirmation in the last eighteen months.",
      },
    ],
  },
  {
    slug: "what-a-season-on-the-road-costs",
    cluster: "cost",
    title: "What a season on the road actually costs",
    description:
      "Fuel, fees, repair, insurance and software, with the arithmetic shown rather than a monthly figure asserted.",
    published: "2026-08-05",
    answer:
      "The dominant costs of a long season are fuel and repair, and both scale with distance rather than time -- which means route design changes the budget far more than gear choice does. Subscriptions are a rounding error by comparison: apps in this category run roughly $30 to $65 a year, averaging near $60.",
    body: [
      "Most cost breakdowns in this space report a monthly figure, which is close to useless because it hides the variable that matters. Two people out for the same six months can differ by a factor of three, and almost all of the difference is miles driven.",
      "Fuel is the obvious half. The less obvious half is that repair frequency tracks distance and road surface, not calendar time, so a season built around fewer, longer stays costs less in both directions at once.",
      "Software is the cheapest line on the sheet and the one people agonise over most. For orientation: this category clusters between about thirty and sixty-five dollars a year, averaging around sixty as of July 2026.",
    ],
    faq: [
      {
        q: "Is a paid camping app worth it",
        a: "It is worth roughly one avoided bad decision a year. Whether that lands depends entirely on whether the data behind it is confirmed or asserted.",
      },
      {
        q: "What does Vanism cost",
        a: "Free to plan, with paid tiers for offline access, continuity and rider intel. See the pricing page for current figures.",
      },
    ],
  },
  {
    slug: "reading-a-forest-service-map",
    cluster: "finding-ground",
    title: "Reading a forest service map for dispersed sites",
    description:
      "Road classes, motor vehicle use maps, and how to find the pullouts that are not marked anywhere.",
    published: "2026-08-05",
    answer:
      "The motor vehicle use map is the document that matters: it shows which forest roads are open to which vehicles and when. Road class tells you what to expect underneath -- maintained gravel through to high-clearance track -- and dispersed pullouts are generally unmarked, found by following an open road of the right class and watching for established disturbed ground.",
    body: [
      "Start with the motor vehicle use map rather than a general forest map. It is the legally operative document for what is open, and it carries seasonal dates that a general map does not.",
      "Road class is the second read. A maintained gravel road and a high-clearance track can look identical on a general map and are entirely different decisions in a long-wheelbase vehicle.",
      "Established sites are the ones to use. Ground that has already been disturbed absorbs another vehicle without further damage; fresh ground does not, and dispersed permission gets withdrawn area by area when it is treated as unlimited.",
    ],
    faq: [
      {
        q: "How do I know a pullout is an established site",
        a: "Compacted ground, an existing fire ring, and no live vegetation being crushed. If you are creating the site, it is not one.",
      },
    ],
  },
  {
    slug: "water-planning-for-long-stays",
    cluster: "systems",
    title: "Water planning for long stays",
    description:
      "How much to carry, where refills actually are, and why the carry interval sets your maximum stay.",
    published: "2026-08-05",
    answer:
      "Water is the constraint that sets maximum stay length for most riders, because it is heavy, bulky and the only consumable with no substitute. Plan the refill interval first and the route second: a site is only usable for as long as your carry lasts, regardless of how good it is.",
    body: [
      "Everything else can be stretched. Power can be rationed, food can get boring, waste can be managed. Water sets a hard number and then the rest of the plan has to fit inside it.",
      "Which means the sequencing runs backwards from how most people plan. You establish the carry interval, then you build the route so refills land inside it, and only then do you choose between the sites that survive that filter.",
      "Refill points decay from the record faster than almost anything else. A spigot that was on in May is off in September and closed for the season in November, which is why water availability is a dated field on objectives here rather than a static attribute.",
    ],
    faq: [
      {
        q: "How much water per person per day",
        a: "Plan on more than you think for anything beyond drinking, and treat the number as a route constraint rather than a packing detail.",
      },
    ],
  },
  {
    slug: "why-we-date-everything",
    cluster: "the-record",
    title: "Why every number on this site carries a date",
    description:
      "Freshness gates, withheld pages, and the argument for showing nothing rather than showing an estimate.",
    published: "2026-08-05",
    answer:
      "Every figure on Vanism carries the date it was confirmed, and anything not confirmed within eighteen months drops out of search entirely. A site record without a date is an assertion; with a date it is evidence you can weigh yourself.",
    body: [
      "Listing age is invisible in most of this category. A site confirmed in 2019 renders identically to one confirmed last week, which quietly transfers all of the risk to the person driving.",
      "Putting the date on the page moves that judgement back where it belongs. An eighteen-month-old note is still useful; it is just useful as an eighteen-month-old note.",
      "The freshness gate is the harder half of the same idea. Past the window, a record does not get a caveat -- it leaves the index. We would rather have a smaller site that means something.",
    ],
    faq: [
      {
        q: "What happens to a site that goes stale",
        a: "It stays reachable at its URL and stops appearing in search until someone confirms it again.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function postsByCluster(cluster: ClusterId) {
  return POSTS.filter((p) => p.cluster === cluster);
}

export function getCluster(id: string) {
  return CLUSTERS.find((c) => c.id === id);
}
