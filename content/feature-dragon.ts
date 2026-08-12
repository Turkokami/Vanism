import type { Block } from "./blocks";

/** dragon -- Vanism feature, expanded. */
export const FEATURE_DRAGON: Block[] = [
  {
    kind: "key",
    text: "Dragon is Vanism's earned virtual currency. It is never sold for real money and never included in a subscription, a rule that lives in the published privacy policy rather than in marketing copy. It is the accounting for having gone -- ground covered, runs closed, seasons put on the record -- and it cannot be purchased in any tier at any price. The name comes from Dragon Style, the LOKES ONE board sports lineage that has existed since 2015.",
  },
  {
    kind: "p",
    text: "Most consumer apps that ship a currency ship a store next to it. The currency is a monetisation surface: a thing you accumulate slowly and can top up quickly, and the whole design of the earn rate exists to make the top-up look reasonable. Dragon inverts that. There is no store. There is no top-up. The earn rate is the only rate, because the number is not measuring your willingness to spend -- it is measuring where you have physically been.",
  },
  {
    kind: "p",
    text: "That single decision -- no purchase path, ever -- is what makes Dragon legible. When you see a rider's balance you know exactly what it cost them, because it would cost you the same thing: the drive, the fix inside the geofence, the season. This document explains what Dragon is, how it is earned, why it is not for sale, what it unlocks, where the name comes from, and the edge cases that matter when you plan at the desk.",
  },

  { kind: "h2", text: "What Dragon actually is" },
  {
    kind: "p",
    text: "Dragon is a balance attached to your account. It moves when you do something that Vanism can verify -- reach an objective and record a GPS-confirmed check-in, close a run leg on the ground, put a new state on your record. It does not move because time passed, because you logged in, or because you paid. It is bookkeeping for distance earned, kept in a form a database can read.",
  },
  {
    kind: "p",
    text: "The important word is earned. In the Via Draconis doctrine the road is not a place you drift onto; it is something you earn, one confirmed position at a time. Dragon is the ledger that adds those confirmations up. It is not a score you tune and it is not a wallet you fund. It is the count of what the hunt has actually turned up, and it carries the same weight on every rider's account because it is produced by the same mechanism for everyone.",
  },
  {
    kind: "note",
    text: "Dragon is not points, not rank, and not real money. Rank is your standing; Dragon is the earned currency that governs access. Both are earned, neither is for sale, and the two are recorded separately.",
  },

  { kind: "h2", text: "Why it is never sold" },
  {
    kind: "p",
    text: "There is a sentence in the Vanism privacy policy that reads like a routine payments disclosure and is actually the whole philosophy of the product: Dragon is earned virtual currency; it is never sold for real money. Putting it there rather than in a marketing headline is deliberate. Marketing changes with a campaign. A privacy policy is a standing commitment, and a rider can hold the company to it.",
  },
  {
    kind: "p",
    text: "State it plainly, because the doctrine requires nothing less: Dragon is earned and Dragon is not purchasable. There is no tier that includes it, no bundle that grants it, no accelerator that speeds it up, and no price at which it can be bought. A subscription buys planning tools at the desk -- offline data, unlimited saved runs, recent road intel. It does not buy Dragon, it does not buy rank, and the build refuses to ship a pricing row that implies otherwise.",
  },
  {
    kind: "p",
    text: "This is not restraint that erodes after the first slow quarter. The prohibition is structural. The ledger that records the balance only accepts entries sourced from a verified check-in, a completed run, or a manual correction for a genuine data error. There is no purchase source defined, and adding one would not be a policy reversal so much as a schema change -- the kind of change the doctrine exists to prevent.",
  },

  { kind: "h2", text: "How Dragon is earned" },
  {
    kind: "p",
    text: "Every entry that moves your balance traces back to a physical fact. The mechanism is the same one that governs the rest of Vanism: a position fix inside the geofence around an objective, written against your record, with no manual entry path and no way to add one after the fact.",
  },
  { kind: "h3", text: "Sources that move the balance" },
  {
    kind: "ul",
    items: [
      "A GPS-verified check-in inside an objective's geofence. This is the primary source and the one that cannot be faked from home.",
      "Closing a run leg by checking in on the ground, which fills the run in behind you as you go.",
      "First confirmations that extend your record -- a new state, ground that had not been on your account before.",
      "A manual correction, used only to repair a genuine data error, never to grant a balance that was not earned.",
    ],
  },
  { kind: "h3", text: "What does not move it" },
  {
    kind: "p",
    text: "Logging in does not. Posting a review does not -- an opinion can be written from anywhere, and Dragon does not pay out for opinions. Passing a turnoff without stopping does not, because the geofence is drawn to the usable area of the site rather than the nearest road, and a pass-by never lands inside it. And no amount of money does, in any tier, at any price.",
  },
  {
    kind: "note",
    text: "A check-in recorded without cell service still earns. The fix is written on device and syncs when you reconnect, keeping the timestamp of the moment you were there rather than the moment it uploaded.",
  },

  {
    kind: "table",
    caption: "Dragon compared with a conventional in-app currency",
    head: ["Dimension", "Conventional in-app currency", "Dragon"],
    rows: [
      ["Primary source", "Purchase, with a slow earn rate beside it", "Verified presence on the ground, only"],
      ["Purchase path", "Yes -- the point of the design", "None, in any tier, at any price"],
      ["What the balance measures", "Willingness to spend", "Distance and seasons earned"],
      ["Included in a subscription", "Often, as a monthly grant", "Never"],
      ["Where the rule is written", "Terms nobody reads", "The published privacy policy"],
      ["Meaning across riders", "Varies with spend", "Identical -- it cost everyone the same"],
    ],
  },

  { kind: "h2", text: "What Dragon unlocks" },
  {
    kind: "p",
    text: "Dragon governs access rather than cosmetics. It determines what you can reach inside the app, and over time it feeds eligibility for LOKES ONE releases that are gated rather than sold openly. Gated, not sold, is the operative distinction: the door opens for what you earned, not for what you paid, which is only coherent because the currency behind the door has no purchase path in the first place.",
  },
  {
    kind: "p",
    text: "If Dragon could be bought, gating by Dragon would be a soft paywall wearing a costume. Because it cannot, a Dragon gate is a genuine threshold. Two riders standing at the same release with the same balance arrived by the same means, and the release is answering the one question the doctrine cares about: did you go.",
  },
  {
    kind: "table",
    caption: "Gated by Dragon versus sold for money",
    head: ["Property", "Dragon-gated access", "A paid subscription tier"],
    rows: [
      ["What opens the door", "Balance you earned on the ground", "A recurring payment"],
      ["Can money shortcut it", "No", "It is the money"],
      ["What it represents", "Confirmed distance and time", "Access to planning tools"],
      ["Reversible by non-payment", "No -- what you earned is yours", "Yes -- tools lapse when billing stops"],
      ["Legible to another rider", "Fully -- same cost for everyone", "Not standing, just a plan"],
    ],
  },

  { kind: "h2", text: "The name and the lineage" },
  {
    kind: "p",
    text: "The name is not decoration and it did not come from a branding exercise. Dragon Style is the LOKES ONE board sports lineage, established 2015, and Via Draconis -- the Dragon path -- is the doctrine that lineage produced. The currency is a lineage artifact that happens to be legible to a database. It predates the app by roughly a decade, which is why the app cannot casually redefine it: the meaning was set on the ground long before there was a ledger to record it.",
  },
  {
    kind: "p",
    text: "This matters for a practical reason. A currency invented to serve a business can be revised to serve that business better -- rebalanced, discounted, put on sale. A currency inherited from a lineage carries an obligation the business did not author and cannot unilaterally rewrite. Dragon being older than Vanism is part of why it is safe: the app is a custodian of the term, not its owner.",
  },

  { kind: "h2", text: "Edge cases riders ask about" },
  { kind: "h3", text: "What happens to Dragon if you stop subscribing" },
  {
    kind: "p",
    text: "It stays. Dragon, like rank, is earned rather than rented. Continuity across devices and offline access are the paid parts of Vanism; the balance you earned is yours and does not lapse when billing stops. You lose the tools at the desk, not the record of where you have been.",
  },
  { kind: "h3", text: "Can Dragon be lost or clawed back" },
  {
    kind: "p",
    text: "Not for inactivity, and not as a penalty. Corrections exist for genuine data errors -- a check-in written twice, a fix recorded against the wrong objective -- and a correction can move a balance to make the record accurate. That is the ledger keeping itself honest, not the company taking back what a season earned.",
  },
  { kind: "h3", text: "Is a Dragon balance public" },
  {
    kind: "p",
    text: "Only if you turn your profile on, and profiles are off by default. Until you opt in, no page shows your balance, your standing, or your history. A private profile returns nothing at all, the same response as a trailname nobody ever registered, so the existence of your account stays private too. Dragon does not leak into road intel unless you choose to publish it.",
  },
  { kind: "h3", text: "Does a higher subscription tier earn Dragon faster" },
  {
    kind: "p",
    text: "No tier affects Dragon in any direction. The yearly plan does not multiply it, the top tier does not accelerate it, and no bundle seeds a starting balance. Every rider earns at the same rate by the same means, and the pricing page is prevented from claiming otherwise.",
  },

  { kind: "h2", text: "Dragon and the doctrine" },
  {
    kind: "p",
    text: "Verification proves you were there. Continuity carries that proof across the season instead of filing it with a finished trip. Dragon is the progression that sits on top of both: the earned currency that turns a run of confirmed positions into standing you can carry and access you can reach. Take away the purchase path and every one of those pieces means exactly one thing, on every account, for everyone.",
  },
  {
    kind: "p",
    text: "That is the whole of it. The road is earned, the hunt is real, and the season is the unit. Dragon is what those commitments look like when a database has to hold them -- earned only, never sold, in any tier, at any price. A currency you could buy would say nothing about a rider. A currency you can only earn says the one thing Via Draconis was built to say: you went, and here is the count.",
  },
];
