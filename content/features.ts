/**
 * PHASE 2.4 -- CAPABILITY SPOKES.
 *
 * Grouped by the three positioning clauses. That grouping is not decorative:
 * it is the same structure the pricing feature table uses, so a visitor who
 * moves Evaluate -> Convert sees the same three ideas in the same order.
 *
 * LAW I: every clause: "progression" spoke states plainly that the capability
 * is not purchasable. If a spoke cannot say that honestly, it does not belong
 * in that clause.
 */

import type { Block } from "./blocks";
import { FEATURE_GPS_VERIFIED_CHECK_INS } from "./feature-gps-verified-check-ins";
import { FEATURE_ACCESS_STATUS } from "./feature-access-status";
import { FEATURE_CONDITION_REPORTS } from "./feature-condition-reports";
import { FEATURE_OFFLINE_MAPS } from "./feature-offline-maps";
import { FEATURE_SEASON_CONTINUITY } from "./feature-season-continuity";
import { FEATURE_SAVED_RUNS } from "./feature-saved-runs";
import { FEATURE_RANK } from "./feature-rank";
import { FEATURE_DRAGON } from "./feature-dragon";
import { FEATURE_THE_VILLAGE } from "./feature-the-village";

export type Clause = "verification" | "continuity" | "progression";

export type Feature = {
  slug: string;
  name: string;
  clause: Clause;
  /** The AEO answer. One paragraph, liftable whole, no preamble. */
  answer: string;
  /** Title tag target -- kept under 60 characters. */
  title: string;
  description: string;
  body: string[];
  /** Long-form structured document; when present, renders instead of body. */
  blocks?: Block[];
  faq: { q: string; a: string }[];
  /** Objectives/runs/codex this spoke links into. */
  related: { label: string; href: string }[];
};

export const CLAUSES: Record<Clause, { name: string; blurb: string }> = {
  verification: {
    name: "Verification",
    blurb:
      "A record is only worth what stands behind it. Everything in this group answers the same question: who confirmed this, and when.",
  },
  continuity: {
    name: "Continuity",
    blurb:
      "A season is not a series of unrelated trips. These carry what you learned in April into the decision you make in October.",
  },
  progression: {
    name: "Progression",
    blurb:
      "What you accumulate by going. None of it is for sale, in any tier, at any price.",
  },
};

export const FEATURES: Feature[] = [
  // ---------------------------------------------------------- VERIFICATION
  {
    slug: "gps-verified-check-ins",
    blocks: FEATURE_GPS_VERIFIED_CHECK_INS,
    name: "GPS-verified check-ins",
    clause: "verification",
    title: "GPS-verified check-ins",
    description:
      "How Vanism confirms a rider was physically present at a site, and why a review posted from home does not count.",
    answer:
      "A Vanism check-in is recorded only when the device reports a GPS fix inside the objective's geofence. It cannot be posted from home, backdated, or added from a photo. Every count shown on a site page is the number of riders whose position was confirmed on the ground, and every objective carries the date of the most recent one.",
    body: [
      "Reviews in this category are opinions, and an opinion can be written from anywhere. Somebody who drove past a turnoff can rate it. Somebody who read about a spot can describe it. The record cannot tell the difference, so neither can you.",
      "A check-in is a different kind of claim. The app takes a position fix inside the geofence around the objective and writes it against your record. There is no manual entry path and no way to add one after the fact, which is the point: the number on the page means the same thing every time you see it.",
      "This is also why some sites do not appear in search at all. An objective needs three independent verified check-ins before it enters the index. Below that, the page still exists and still answers if you follow a link, but it does not compete for a search result it has not earned.",
    ],
    faq: [
      {
        q: "Can I check in without cell service",
        a: "Yes. The fix is recorded on device and syncs when you next have a connection. The timestamp is the moment you were there, not the moment it uploaded.",
      },
      {
        q: "What stops someone checking in from the road without stopping",
        a: "The geofence is drawn to the usable area of the site rather than the nearest road. A pass-by does not land inside it.",
      },
      {
        q: "Do check-ins show my exact location to other riders",
        a: "No. Your check-ins are private unless you turn your profile on, and profiles are off by default.",
      },
    ],
    related: [
      { label: "Why sites are withheld from search", href: "/ground" },
      { label: "Earned, never given", href: "/codex/earned-never-given" },
    ],
  },
  {
    slug: "access-status",
    blocks: FEATURE_ACCESS_STATUS,
    name: "Access status",
    clause: "verification",
    title: "Access status on every site",
    description:
      "Open, seasonal, permit or closed -- recorded per objective and dated, so a legal boundary is never mistaken for a passable road.",
    answer:
      "Every Vanism objective carries an access status of open, seasonal, permit-required or closed, along with the date it was last confirmed. Access status is a rider-reported condition rather than a map layer, which is the difference between a cell that is legally open and a road you can actually drive.",
    body: [
      "Public land data will tell you where dispersed camping is permitted. It will not tell you that the forest road washed out in March, that the gate is locked until June, or that the district issued a fire closure last week. Those are conditions, and conditions come from people.",
      "An objective with an unknown access status does not publish. That is one of the four gate tests, and it is deliberately strict, because an unknown status presented confidently is worse than no page at all.",
      "Status changes are reported from the app by riders with recent check-ins at that objective. Those reports are actioned first, for the obvious reason: someone who was there last week knows something someone who was there in 2019 does not.",
    ],
    faq: [
      {
        q: "How current is the access status",
        a: "Every objective shows the date of its last confirmation. Anything not confirmed within eighteen months drops out of the index automatically.",
      },
      {
        q: "What does seasonal mean here",
        a: "The site is reachable for part of the year. The page carries the window riders have actually reported, not the published season, because they often differ.",
      },
    ],
    related: [
      { label: "Condition reports", href: "/features/condition-reports" },
      { label: "The Ground", href: "/ground" },
    ],
  },
  {
    slug: "condition-reports",
    blocks: FEATURE_CONDITION_REPORTS,
    name: "Condition reports",
    clause: "verification",
    title: "Recent conditions from riders",
    description:
      "What the road, water and surface were actually like, reported by riders who were there, with the date attached.",
    answer:
      "Condition reports are short field notes attached to an objective by riders at the moment they check in: road surface, clearance needed, water availability, noise, and anything that changed. Each one carries the reporter's verification record and the date, so you can weigh a note from last week differently from one from two summers ago.",
    body: [
      "The useful information about a site is rarely in the listing. It is whether the last two miles need clearance, whether the creek was running, whether the pullout takes a rig your length, and whether the place fills by four on a Friday.",
      "That information decays fast, which is why every report is dated on the page and why the freshness gate exists at all. An eighteen-month-old note is still shown; it is just shown as an eighteen-month-old note.",
      "Reports are attached to a check-in, not posted freely. You write one because you were standing there.",
    ],
    faq: [
      {
        q: "Can I report a site as bad",
        a: "You can report what you found. Conditions are facts with dates attached rather than ratings, so the record stays useful rather than becoming a scoreboard.",
      },
      {
        q: "Are condition reports behind the subscription",
        a: "Recent rider intel is a paid capability. The site record, coordinates and access status are free for everyone.",
      },
    ],
    related: [
      { label: "Access status", href: "/features/access-status" },
      { label: "Pricing", href: "/pricing" },
    ],
  },

  // ---------------------------------------------------------- CONTINUITY
  {
    slug: "offline-maps",
    blocks: FEATURE_OFFLINE_MAPS,
    name: "Offline maps",
    clause: "continuity",
    title: "Offline maps and access notes",
    description:
      "Download the ground before you lose service, including coordinates, access status and the notes you will actually need at the gate.",
    answer:
      "Vanism downloads map tiles, objective coordinates, access status and rider notes for any region you select, so the information is on the device before you lose service. Offline data is a paid capability; check-ins recorded offline sync when you reconnect and keep their original timestamp.",
    body: [
      "The places worth going are the places without coverage. Any planning tool that needs a connection at the moment of the decision has failed at the only moment that counted.",
      "Select a region and the tiles, the objectives inside it, their coordinates, their access status and the most recent rider notes come down together. There is no partial state where you have the map but not the gate code, or the pin but not the clearance note.",
      "Your own check-ins keep working while you are out. They queue on device with the timestamp of the moment you were there and reconcile when you come back into service.",
    ],
    faq: [
      {
        q: "How much storage does a region take",
        a: "It depends on the area and zoom depth you choose. The app shows the size before you download and lets you remove regions individually.",
      },
      {
        q: "Do offline check-ins still count toward rank",
        a: "Yes. They are verified by the GPS fix, not by the network, and they carry their original timestamp when they sync.",
      },
    ],
    related: [
      { label: "Season continuity", href: "/features/season-continuity" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    slug: "season-continuity",
    blocks: FEATURE_SEASON_CONTINUITY,
    name: "Season continuity",
    clause: "continuity",
    title: "One record across the season",
    description:
      "What you confirmed in spring is still on your record in autumn, on whatever device you are carrying.",
    answer:
      "Vanism keeps a single continuous record across devices and across the season. Objectives you reached, runs you started, and notes you wrote stay attached to your account rather than to a trip, so a half-finished run in May is still waiting for you in September.",
    body: [
      "Most planning tools treat a trip as a document. You make it, you take it, you file it, and the next one starts from nothing. That is a reasonable model for a holiday and a poor one for a way of travelling.",
      "Here the unit is the season, not the trip. The runs you have partly completed stay open. The ground you have confirmed stays confirmed. Change devices and the record follows the account.",
      "This is the capability that makes the rest of it compound. Verification without continuity is a series of receipts.",
    ],
    faq: [
      {
        q: "What happens to my record if I stop subscribing",
        a: "Your check-ins, rank and history remain. Continuity across devices and offline access are the paid parts; the record you earned is yours.",
      },
      {
        q: "Can I close a run I abandoned",
        a: "Yes. An abandoned run can be closed or left open. Nothing expires it for you.",
      },
    ],
    related: [
      { label: "The Runs", href: "/runs" },
      { label: "Rank", href: "/features/rank" },
    ],
  },
  {
    slug: "saved-runs",
    blocks: FEATURE_SAVED_RUNS,
    name: "Saved runs",
    clause: "continuity",
    title: "Build and save your own runs",
    description:
      "Join objectives into a named route, save it, and work through it across weeks or seasons.",
    answer:
      "A run is a named sequence of objectives you assemble yourself, saved to your account and worked through at your own pace. The free tier saves three; paid tiers are unlimited. Legs are marked complete by checking in on the ground, not by ticking a box.",
    body: [
      "The published runs are a starting point, not the catalogue. Most riders end up building their own out of ground they have found, ground they have been told about, and legs of other runs they liked.",
      "A saved run is a plan and a record at the same time. As you check in at each leg it fills in behind you, which means the run doubles as the answer to what you actually did last season.",
      "Legs cannot be marked complete manually. That is the same rule as everywhere else here: the record reflects where you were.",
    ],
    faq: [
      {
        q: "Can I share a run I built",
        a: "You can share a run without making your profile or your check-in history public. Those are separate settings and sharing a route does not expose your record.",
      },
      {
        q: "How many can I save on the free tier",
        a: "Three. Paid tiers are unlimited.",
      },
    ],
    related: [
      { label: "The Runs", href: "/runs" },
      { label: "Pricing", href: "/pricing" },
    ],
  },

  // ---------------------------------------------------------- PROGRESSION
  {
    slug: "rank",
    blocks: FEATURE_RANK,
    name: "Rank",
    clause: "progression",
    title: "How rank works in Vanism",
    description:
      "Standing earned by reaching objectives. It cannot be bought, is not included in any subscription, and no tier accelerates it.",
    answer:
      "Rank in Vanism is earned by reaching objectives and checking in with a verified GPS fix. It cannot be purchased, is not included in any subscription tier, and there is no paid path that accelerates it. A subscription buys planning tools; standing comes only from ground you covered.",
    body: [
      "Every app in this category that has tried a progression system has eventually sold it. It works for a quarter and then the board stops meaning anything, because everyone can see the top of it is a receipt rather than a record.",
      "The rule here is written into the database rather than the marketing. The ledger that records standing will only accept entries sourced from a check-in, a completed run, or a manual correction. There is no purchase source, and adding one would fail the schema constraint.",
      "What that buys you is simple and hard to copy: when you see a rider's standing, you know exactly what it cost them, because it cost them the same thing it would cost you.",
    ],
    faq: [
      {
        q: "Does the yearly tier give me more rank",
        a: "No. No tier affects rank in any direction. The pricing page says so and the build fails if a paid feature row implies otherwise.",
      },
      {
        q: "Can I lose rank",
        a: "No. Corrections exist for genuine data errors, but standing is not taken back for inactivity.",
      },
      {
        q: "Is rank public",
        a: "Only if you turn your profile on. Profiles are off by default.",
      },
    ],
    related: [
      { label: "Earned, never given", href: "/codex/earned-never-given" },
      { label: "Dragon", href: "/features/dragon" },
    ],
  },
  {
    slug: "dragon",
    blocks: FEATURE_DRAGON,
    name: "Dragon",
    clause: "progression",
    title: "Dragon, the earned currency",
    description:
      "Dragon is earned virtual currency. It is never sold for real money, and the name predates the app by a decade.",
    answer:
      "Dragon is Vanism's earned virtual currency. It is never sold for real money and never included in a subscription -- a rule that appears in the published privacy policy, not just in marketing. The name comes from Dragon Style, the LOKES ONE board sports lineage that has existed since 2015.",
    body: [
      "There is a sentence in the Vanism privacy policy that reads like a payments disclosure and is actually the entire philosophy of the product: Dragon is earned virtual currency; it is never sold for real money.",
      "That is unusual enough to be worth stating plainly. Virtually every earned currency in a consumer app has a purchase path, usually within a year of launch. This one does not and will not, because the currency is not a monetisation surface -- it is the accounting for having gone.",
      "The name is not decoration either. Dragon Style is the LOKES ONE board sports lineage, established 2015, and Via Draconis -- the Dragon path -- is the doctrine it produced. The currency is a lineage artifact that happens to be legible to a database.",
    ],
    faq: [
      {
        q: "Can I buy Dragon",
        a: "No, at any price, in any tier. It is earned only.",
      },
      {
        q: "What can I spend it on",
        a: "Dragon governs what you have access to inside the app and, over time, eligibility for LOKES ONE releases that are gated rather than sold openly.",
      },
      {
        q: "Where does the name come from",
        a: "Dragon Style, the LOKES ONE board sports lineage established in 2015, and the Via Draconis doctrine that came out of it.",
      },
    ],
    related: [
      { label: "Earned, never given", href: "/codex/earned-never-given" },
      { label: "Skater, Base Van, Climber", href: "/codex/the-skin-arc" },
    ],
  },
  {
    slug: "the-village",
    blocks: FEATURE_THE_VILLAGE,
    name: "The Village",
    clause: "progression",
    title: "Public rider profiles, off by default",
    description:
      "Make your record public if you want it seen. Nothing is shown unless you turn it on, and a private profile is invisible rather than hidden.",
    answer:
      "The Village is the set of rider profiles that have been made public. Profiles are off by default: until you opt in, no page on the site shows your position, history or standing. A private profile does not return a locked page -- it returns nothing at all, because the fact that an account exists is itself private.",
    body: [
      "Every social layer in this category is opt-out. Yours is opt-in, and the difference is not a settings screen -- it is enforced in the database, where the public flag defaults to false and the view that feeds public pages filters on it before application code ever sees a row.",
      "There is a second, quieter decision underneath it. A private profile returns the same response as a trailname nobody has ever registered. If it returned a locked page instead, anyone could confirm which riders exist by checking names one at a time.",
      "If you do turn it on, what shows is what you earned: objectives reached, runs completed, states on the record, and the date you last stood somewhere.",
    ],
    faq: [
      {
        q: "Is my profile public by default",
        a: "No. It is off until you turn it on, and turning it off again removes the page.",
      },
      {
        q: "Can someone tell whether I have an account",
        a: "No. A private trailname returns the same response as one that was never registered.",
      },
      {
        q: "Does a public profile show where I am now",
        a: "No. It shows counts and the date of your most recent check-in, not live position.",
      },
    ],
    related: [
      { label: "The Village", href: "/village" },
      { label: "Silence has weight", href: "/codex/silence-has-weight" },
    ],
  },
];

export function getFeature(slug: string) {
  return FEATURES.find((f) => f.slug === slug);
}

export function featuresByClause(clause: Clause) {
  return FEATURES.filter((f) => f.clause === clause);
}
