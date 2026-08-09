/**
 * THE CODEX -- authored, reviewed, bylined, in git.
 *
 * The only place in the portfolio where Via Draconis becomes discoverable. The
 * doctrine has lived on a Shopify blog behind a merch store while the product
 * that embodies it never mentioned it.
 *
 * Phase 4.2 target is 40 entries. Twelve are authored here across the four
 * laws plus the lineage. Each carries the founder Person @id as author.
 */

export type CodexEntry = {
  slug: string;
  title: string;
  summary: string;
  published: string;
  law?: "I" | "II" | "III" | "IV";
  body: string;
};

function j(...paras: string[]) {
  return paras.join("\n\n");
}

export const CODEX: CodexEntry[] = [
  // ------------------------------------------------------------------ LAW I
  {
    slug: "earned-never-given",
    title: "Earned, never given",
    summary:
      "Why rank in Vanism cannot be purchased, and why that rule was written before the app existed.",
    published: "2026-08-05",
    law: "I",
    body: j(
      "There is a line in the Vanism privacy policy that reads like a payments disclosure and is actually the whole philosophy: Dragon is earned virtual currency; it is never sold for real money.",
      "Most apps in this category will sell you position. Pay more, appear higher, unlock the tier. It works, briefly, and then the thing you were ranking in stops meaning anything, because everyone can see that the top of the board is a receipt.",
      "Rank here records where you have physically been. A check-in is a GPS fix at a place, made by a person who drove the road in, found the gate, and stood there. The subscription buys maps and continuity and other riders' recent notes. It does not buy a single point of standing, and there is no tier where it starts to.",
      "That constraint costs revenue. It is worth more than the revenue, because it is the only claim in this category that a competitor cannot copy by shipping a feature."
    ),
  },
  {
    slug: "what-a-receipt-cannot-buy",
    title: "What a receipt cannot buy",
    summary:
      "Every progression system in consumer software eventually gets a purchase path. Here is what happens the week after.",
    published: "2026-08-05",
    law: "I",
    body: j(
      "The pattern is reliable enough to set a watch by. A product ships a progression system because progression retains people. Retention is measured, it works, and then someone models the revenue from letting people skip ahead.",
      "The model is always correct in the short run. People will pay to skip. Revenue goes up in the quarter it launches.",
      "What the model does not price is the week after, when the board stops being information. Standing was worth having because it told you something about the person holding it. Once any part of it is purchasable, it tells you they had a card. The signal does not degrade gradually; it inverts.",
      "So the rule is not a growth constraint that we tolerate. It is the asset. Anyone can build a database of campsites in a quarter. Nobody can retroactively make their leaderboard mean something."
    ),
  },
  {
    slug: "the-gate-is-the-product",
    title: "The gate is the product",
    summary:
      "Three check-ins, known access, eighteen months. Why we deliberately withhold pages we could publish.",
    published: "2026-08-05",
    law: "I",
    body: j(
      "There is a version of this site with five times as many pages. Every objective in the database, published on the day it is created, competing for search results immediately.",
      "That version would rank faster and be worth less. A site record with no confirmed visits is a guess with a coordinate attached, and a directory of guesses is what this category already has too much of.",
      "So an objective publishes only after three independent riders have checked in on site, the coordinates are recorded, the access status is known, and someone has confirmed it within eighteen months. Everything else exists at its URL and answers if you follow a link, but stays out of the index.",
      "The withheld count is reported on every state page, deliberately. A number we are not showing you is itself information."
    ),
  },

  // ----------------------------------------------------------------- LAW II
  {
    slug: "transmute-dont-escape",
    title: "Transmute, don't escape",
    summary:
      "The category sells flight from obligation. The road is better understood as a discipline you take up.",
    published: "2026-08-05",
    law: "II",
    body: j(
      "Search this category and the vocabulary is uniform. Break free. Leave it behind. The open road. Every one of those phrases frames the road as an exit from something.",
      "That framing does not survive contact with the road. A season out is logistics, weather, water, repair, and the same person you were when you left, now with fewer places to put them.",
      "The alternative is older than any app. You do not leave the thing behind; you put it through something. Streets to peaks is not a change of address. It is the same discipline applied to harder ground.",
      "This is why the site does not use escape language anywhere in its body copy, and why a build script checks for it. A doctrine that only appears in the manifesto is decoration. One that fails a build is a rule."
    ),
  },
  {
    slug: "the-second-week",
    title: "The second week",
    summary:
      "The first week out is a holiday. The second week is the one that tells you what you actually signed up for.",
    published: "2026-08-05",
    law: "II",
    body: j(
      "The first week is easy to romanticise because it is genuinely good. Everything is new, the novelty carries the discomfort, and the photographs are all from the first week.",
      "The second week is when the water runs out at an inconvenient hour, the road you planned around is closed, and the thing you were not thinking about at home turns out to have come along.",
      "Nobody sells the second week, which is a shame, because it is where the actual value is. It is the week that requires a system: knowing where the water is, knowing whether the road is passable, knowing what you did last time.",
      "Most of this product exists for the second week. That is not a marketing angle. It is the design brief."
    ),
  },
  {
    slug: "planning-is-not-fantasy",
    title: "Planning is not fantasy",
    summary:
      "A route you will never drive is a form of entertainment. A run you can finish is a commitment with legs.",
    published: "2026-08-05",
    law: "II",
    body: j(
      "It is easy to build a beautiful route you will never drive. Most planning tools are optimised for exactly that: the pleasure is in the making, and the artefact is a document you file.",
      "A run here is different in one specific way. Its legs are marked complete by standing at them, not by ticking them. That means a run you build is a claim about what you are going to do, and it stays open on your record until you either do it or close it.",
      "That is uncomfortable in a way a saved itinerary is not, and it is meant to be. The half-finished run in your account in September is the most honest object in the app."
    ),
  },

  // ---------------------------------------------------------------- LAW III
  {
    slug: "discipline-is-architecture",
    title: "Discipline is architecture",
    summary:
      "Why the four laws are enforced by a build script rather than stated on an about page.",
    published: "2026-08-05",
    law: "III",
    body: j(
      "A doctrine that lives on an about page costs nothing to hold. Nobody has to do anything differently, and there is no moment where holding it is inconvenient.",
      "So each of the four laws here is enforced somewhere a machine checks it. Escape vocabulary in body copy fails the build. A pricing row implying purchasable standing throws before it renders. Structured data written anywhere except one file fails. The rider privacy flag defaults closed in the database, not in a settings screen.",
      "The useful property of this is not tidiness. It is that the laws survive people. A new developer who has never read the doctrine cannot accidentally violate it, because the build stops them and tells them which law and where.",
      "The site is the proof of the claim it makes. A doctrine about discipline shipping on a site with a 404 in its own footer would be the whole argument, refuted."
    ),
  },
  {
    slug: "one-name-two-domains",
    title: "One name, two domains",
    summary:
      "Four identities were running in parallel with nothing connecting them. That is a technical problem before it is a branding one.",
    published: "2026-08-05",
    law: "III",
    body: j(
      "LOKES ONE LIMITED CO appears in App Store search results. Dragon Style has existed since 2015. Vanism is on its own domain. The founder is published, in the best piece of writing either property has, and named on neither site. A fifth social handle matches none of them.",
      "Read as branding, that is untidy. Read as architecture, it is worse: authority that should compound is being split five ways and none of the pieces is large enough to matter.",
      "The fix is not a rebrand. It is one Organization, one Person, and a graph that says plainly which properties belong to which. Every Codex entry carries the same author identifier as the essay on the other domain, so the two accumulate together instead of separately.",
      "Nothing about the writing changes. Only whether anything can tell it was written by the same person."
    ),
  },
  {
    slug: "the-road-does-not-round-up",
    title: "The road does not round up",
    summary: "On dated figures, omitted claims, and why we would rather show nothing than show an estimate.",
    published: "2026-08-05",
    law: "III",
    body: j(
      "If we cannot source a rating, the page does not carry one. If a site has fewer than three confirmed visits, the stamp says so instead of showing a number. If a competitor's price is from July, the page says it is from July.",
      "This is not caution. It is that a single invented figure poisons every real one next to it, and every figure on this site is meant to be checkable.",
      "The road works the same way. A road book that rounds up a water carry is worse than no road book, because you will trust it once."
    ),
  },

  // ----------------------------------------------------------------- LAW IV
  {
    slug: "silence-has-weight",
    title: "Silence has weight",
    summary:
      "Rider profiles are off by default, and a private profile returns nothing rather than a locked door.",
    published: "2026-08-05",
    law: "IV",
    body: j(
      "Every social layer in this category is opt-out. You contribute, a profile appears, and turning it off is a setting you find later if you look.",
      "Here it is opt-in, and the difference is not the settings screen. The public flag defaults to false in the database, and the view that feeds every public page filters on it inside its own definition -- so a forgotten line in application code cannot publish someone who did not ask to be published.",
      "There is a second decision underneath that one. A private profile returns the same response as a trailname nobody ever registered. If it returned a locked page instead, anyone could confirm which riders exist by trying names one at a time. Not found and not yours have to look identical from outside.",
      "The plainest version: going somewhere and telling nobody is a complete act. The product should not treat it as an unfinished one."
    ),
  },
  {
    slug: "no-cadence",
    title: "No cadence",
    summary: "Why there is one email, no streak counter, and nothing that pretends to miss you.",
    published: "2026-08-05",
    law: "IV",
    body: j(
      "The standard retention toolkit is well documented: streaks, loss framing, a notification schedule tuned to the hour you are most likely to open it, and a re-engagement sequence for anyone who goes quiet.",
      "All of it works. None of it is here.",
      "A product about earned standing cannot manufacture urgency about logging in, because logging in is not the thing being earned. Someone who does not open the app for four months because they were working is not lapsed. They are between seasons, and the record is still there when they come back.",
      "The email you get is the one you asked for. There is no sequence behind it."
    ),
  },

  // --------------------------------------------------------------- LINEAGE
  {
    slug: "the-skin-arc",
    title: "Skater, Base Van, Climber",
    summary:
      "The three character skins already encode the Streets-to-Peaks arc. Nobody has said so until now.",
    published: "2026-08-05",
    body: j(
      "Vanism ships three skins. Skater. Base Van. Climber. They are presented as a cosmetic choice.",
      "They are not a cosmetic choice. They are the arc: Skater is the streets, the origin, and the direct descendant of Dragon Style, which has existed since 2015. Climber is the peaks. Base Van is the passage between them, which is where almost everyone actually is.",
      "The doctrine was shipped as a product feature and then marketed as a dropdown. This entry exists to correct the record."
    ),
  },
];

export function getEntrySlugs(): string[] {
  return CODEX.map((e) => e.slug);
}

export function getEntry(slug: string): CodexEntry | undefined {
  return CODEX.find((e) => e.slug === slug);
}

export function entriesByLaw(law: string) {
  return CODEX.filter((e) => e.law === law);
}
