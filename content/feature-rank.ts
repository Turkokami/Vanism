import type { Block } from "./blocks";

/** rank -- Vanism feature, expanded. */
export const FEATURE_RANK: Block[] = [
  {
    kind: "key",
    text:
      "Rank in Vanism is standing earned by reaching objectives and checking in with a verified GPS fix. It cannot be purchased, is not included in any subscription tier, and no paid path accelerates it. A subscription buys planning tools; rank comes only from ground you covered.",
  },
  {
    kind: "p",
    text:
      "Every app in this category that has built a progression system has eventually sold it. It works for a quarter. Then the board stops meaning anything, because everyone can see the top of it is a receipt rather than a record. Rank exists to be the one number on the platform that a payment method cannot move.",
  },
  {
    kind: "p",
    text:
      "This document explains how that is enforced, why the rule lives in the database instead of the marketing, what rank does and does not respond to, and what it tells you when you read it on another rider. None of it is aspirational. Rank is a progression capability, which under the doctrine means it is earned and is not purchasable in any tier, at any price.",
  },

  {
    kind: "h2",
    text: "How rank is recorded",
  },
  {
    kind: "p",
    text:
      "Rank is a running total kept in a ledger. A ledger only grows by accepting entries, and the entries it will accept are defined narrowly. An entry is valid only when it is sourced from a check-in, a completed run, or a manual correction. There is no fourth source. There is, specifically, no purchase source, and there is no subscription source.",
  },
  {
    kind: "p",
    text:
      "A check-in is the primary entry. It is written only when the device reports a GPS fix inside the objective's geofence. It cannot be posted from the desk, backdated, or reconstructed from a photo. That constraint is what gives rank its weight: the number is the sum of positions that were confirmed on the ground, dated to the moment you were standing there.",
  },
  {
    kind: "p",
    text:
      "A completed run contributes because a run is a named sequence of objectives whose legs are marked complete by checking in on each one, never by ticking a box. Finishing a run is therefore already a stack of verified fixes; the ledger recognises the completion on top of the individual check-ins that earned it.",
  },
  {
    kind: "p",
    text:
      "A manual correction is the narrow exception, and it is an exception for data errors, not for favours. It exists so a genuine mistake -- a fix dropped by a hardware fault, a geofence drawn a hundred metres short -- can be repaired against the truth of where a rider actually was. It is not a lever. It cannot invent standing that no ground supports.",
  },
  {
    kind: "note",
    text:
      "The absence of a purchase source is not a policy that a future release could quietly relax. Adding one would mean adding a value the ledger's own schema constraint rejects. The insert fails before any standing is written.",
  },

  {
    kind: "h2",
    text: "Why it is not for sale",
  },
  {
    kind: "p",
    text:
      "The reason to refuse the sale is not modesty. It is that a purchasable rank is worthless the day it ships, and everyone downstream of it knows. Once standing can be bought, the highest numbers migrate to whoever spent the most, the readout stops describing ground covered, and the rider who actually did the driving is now indistinguishable from the one who did not. The board becomes a scoreboard for a game nobody was playing.",
  },
  {
    kind: "p",
    text:
      "So the rule is written into the schema rather than the copy. Marketing can be revised in an afternoon by someone who was not in the room when the promise was made. A constraint in the database is a different kind of commitment: it fails loudly, in the build and at insert time, and it fails for everyone equally. That is deliberate. A doctrine that only holds while it is convenient is not a doctrine.",
  },
  {
    kind: "p",
    text:
      "It reaches into the pricing surface as well. No tier affects rank in any direction, and the pricing page says so in plain language. The build enforces the claim: if a paid feature row were ever written in a way that implied a tier accelerated standing, the deploy would fail the linter rather than ship the contradiction.",
  },

  {
    kind: "h2",
    text: "What a subscription actually buys",
  },
  {
    kind: "p",
    text:
      "The confusion worth heading off is the assumption that the paid product and the earned product are the same product. They are not. A subscription buys tools for the desk and for the hunt -- the work of finding ground and reaching it. Rank is the accounting of having reached it. One is a purchase. The other is a consequence.",
  },
  {
    kind: "table",
    caption:
      "What a paid tier changes, and what it leaves untouched. Rank sits entirely in the right-hand outcome.",
    head: ["Capability", "In a paid tier", "Effect on rank"],
    rows: [
      ["Offline maps and access notes", "Yes", "None"],
      ["Recent condition reports (road intel)", "Yes", "None"],
      ["Unlimited saved runs", "Yes", "None"],
      ["Season continuity across devices", "Yes", "None"],
      ["Monthly vs yearly billing", "Yes", "None"],
      ["Rank", "Never", "Earned on the ground only"],
    ],
  },
  {
    kind: "p",
    text:
      "Read the last row against the rest. Everything a tier unlocks makes the hunt easier or the season more continuous. Not one of them writes a ledger entry. A rider on the free tier and a rider on the yearly tier earn identical standing for the same check-in, because the check-in is what the ledger counts and the tier is not a source it will read.",
  },

  {
    kind: "h2",
    text: "What counts, and what never will",
  },
  {
    kind: "p",
    text:
      "Because the ledger's accepted sources are finite, the full account of what moves rank fits in a short table. Everything not on the accept side is not a loophole to be closed later; it is a source the schema was never given.",
  },
  {
    kind: "table",
    caption:
      "The complete set of rank sources. The reject rows are structural, not moderated case by case.",
    head: ["Candidate source", "Writes rank?", "Why"],
    rows: [
      [
        "Verified check-in inside a geofence",
        "Yes",
        "The primary entry; a confirmed, dated position on the ground",
      ],
      [
        "Completed run",
        "Yes",
        "A sequence of legs each closed by a check-in",
      ],
      [
        "Manual correction",
        "Yes",
        "Repairs a genuine data error against where a rider was",
      ],
      [
        "One-time purchase",
        "No",
        "Not a source the ledger schema accepts; the insert fails",
      ],
      [
        "Subscription upgrade",
        "No",
        "A tier buys planning tools, never standing",
      ],
      [
        "Review, rating, or opinion",
        "No",
        "An opinion can be written from anywhere; rank cannot",
      ],
      [
        "Manual entry of a visit",
        "No",
        "There is no manual check-in path; standing reflects position",
      ],
    ],
  },
  {
    kind: "ul",
    items: [
      "A fix taken outside the geofence does not land, so a pass-by on the road earns nothing.",
      "A photo of a place proves you had the photo, not that you stood there, so it writes nothing.",
      "An offline check-in still counts: it is verified by the GPS fix, not the network, and carries its original timestamp when it syncs.",
    ],
  },

  {
    kind: "h2",
    text: "What rank tells you when you read it on a rider",
  },
  {
    kind: "p",
    text:
      "The payoff of a source that cannot be bought is legibility. When you see another rider's standing, you know exactly what it cost them, because it cost them the same thing it would cost you: ground, reached, confirmed. There is no premium column to discount and no purchased tier to mentally subtract. The number is the whole story.",
  },
  {
    kind: "p",
    text:
      "That is hard to copy and easy to lose. It survives only as long as the refusal holds. The moment one purchase source is added, every number on the platform inherits an asterisk, retroactively, including the ones earned honestly before the change. Keeping rank meaningful is therefore not a feature that ships once; it is a constraint that has to keep holding, build after build.",
  },

  {
    kind: "h2",
    text: "Edge cases",
  },
  {
    kind: "h3",
    text: "Rank does not decay",
  },
  {
    kind: "p",
    text:
      "Standing is not taken back for inactivity. A season spent off the road does not erode what earlier seasons earned. This is consistent with continuity: the record is attached to the account, not to a trip, so ground you confirmed stays confirmed whether you return in September or two years later.",
  },
  {
    kind: "h3",
    text: "Corrections cut both ways, but only toward the truth",
  },
  {
    kind: "p",
    text:
      "A manual correction can add standing a hardware fault denied, and in principle it can remove an entry that was written in error. What it cannot do is remove standing as a penalty, or add standing as a reward. Its only reference is the ground truth of where a rider was. It is an accuracy tool, not a discretionary one.",
  },
  {
    kind: "h3",
    text: "Offline and delayed sync",
  },
  {
    kind: "p",
    text:
      "The places worth reaching are often the places without coverage, so the common case is a check-in recorded with no signal. It queues on the device and reconciles when you return to service. The ledger entry it produces is dated to the moment you were there, not the moment it uploaded, so the timing of your connection never distorts your standing.",
  },
  {
    kind: "note",
    text:
      "None of these paths introduce a new source. Offline check-ins are still check-ins; corrections are still bounded by ground truth. The three accepted sources are the whole set in every case.",
  },

  {
    kind: "h2",
    text: "Rank is yours before it is anyone else's",
  },
  {
    kind: "p",
    text:
      "Earning standing and displaying it are separate acts. Your rank is recorded whether or not anyone can see it, and it is private by default. It becomes visible to other riders only if you turn your profile on, and profiles are off until you opt in. A rank you never publish is still a rank you earned; the ledger does not care whether the world is watching.",
  },
  {
    kind: "p",
    text:
      "There is also a floor under what standing can cost you socially. Because rank cannot be bought, no rider can outspend you into a lower relative position, and no tier you decline to pay for leaves you behind. The only variable is ground. That keeps the comparison honest and keeps the pressure where the doctrine wants it: on going, not on paying.",
  },

  {
    kind: "h2",
    text: "Earned, never given",
  },
  {
    kind: "p",
    text:
      "Rank is the clearest expression of the rule the whole platform is built on. The road is something you earn, and standing is the ledger of that earning. Verification supplies the entries, continuity carries them across the season, and rank is what they sum to -- a number that means the same thing every time anyone reads it, because there is exactly one way to move it.",
  },
  {
    kind: "p",
    text:
      "So the promise is small and absolute. Rank is earned by covering ground and confirming it. It is not for sale, in any tier, at any price, and there is no source the ledger will accept that says otherwise. What that buys the rider is not a badge. It is the certainty that the number describes the driving, and always will.",
  },
];
