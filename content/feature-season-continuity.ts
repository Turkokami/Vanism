import type { Block } from "./blocks";

/** season-continuity -- Vanism feature, expanded. */
export const FEATURE_SEASON_CONTINUITY: Block[] = [
  {
    kind: "key",
    text: "Season continuity is Vanism's single continuous record. Objectives you reached, runs you started, and notes you wrote stay attached to your account rather than to a trip, so a half-finished run in May is still waiting for you in September -- on whatever device you are carrying. It is the capability that lets verification accumulate instead of resetting to zero every time you set out.",
  },
  {
    kind: "p",
    text: "Most planning tools treat a trip as a document. You make it at the desk, you take it, you file it when you get home, and the next one starts from nothing. That is a reasonable model for a holiday and a poor one for a way of travelling. A season is not a stack of unrelated documents. What you confirmed in spring is a fact you carry into the decision you make in autumn, and a tool that forgets it between trips has thrown away the one thing that was worth keeping.",
  },
  {
    kind: "p",
    text: "Vanism keeps a single continuous record across devices and across the season. The ground you have confirmed stays confirmed. The runs you have partly worked stay open. Change the phone in your pocket and the record follows the account, not the hardware. This page explains how that holds, why it is built this way, and what it means for a rider who is out for months rather than a long weekend.",
  },

  {
    kind: "h2",
    text: "The trip is the wrong unit",
  },
  {
    kind: "p",
    text: "The trip-as-document model has a hidden assumption: that travel comes in sealed episodes with a start, an end, and nothing carried between them. That describes a two-week holiday well. It describes almost nothing about a rider who lives on a rolling series of runs, where the pullout you found in April is exactly the intel you need when you route back through the same district in October.",
  },
  {
    kind: "p",
    text: "Here the unit is the season, not the trip. A season is the working span of your travelling, and the record is continuous across all of it. That is not a cosmetic relabelling. It changes what the software is allowed to forget. A trip document is designed to be closed and archived; a season record is designed to stay open and keep accruing. The moment you accept the season as the unit, the file-and-forget behaviour stops being a convenience and starts being a bug.",
  },
  {
    kind: "table",
    caption: "The two models, side by side",
    head: ["Dimension", "Trip as a document", "Season as a record"],
    rows: [
      ["Unit of time", "The trip", "The season"],
      ["Lifecycle", "Created, taken, filed, closed", "Opened once, never closed for you"],
      ["What carries over", "Nothing -- the next trip starts blank", "Every confirmed objective, open run, and note"],
      ["An unfinished route", "Lost when the trip is filed", "Stays open until you close it"],
      ["Where it lives", "On the device that made it", "On the account, across devices"],
      ["What it is worth later", "A memory you have to rebuild", "Standing intel you already earned"],
    ],
  },

  {
    kind: "h2",
    text: "How the record actually holds",
  },
  {
    kind: "p",
    text: "Continuity is an ownership decision before it is a sync feature. Every object you create is attached to your account, not to the trip, the device, or the app session that happened to create it. That single choice is what makes the rest of the behaviour follow.",
  },
  {
    kind: "h3",
    text: "The account is the anchor",
  },
  {
    kind: "p",
    text: "A check-in, a started run, a field note -- each is written against your account the moment it exists. Nothing is scoped to a container that can be closed out from under it. There is no trip object that owns your history and can take it with it when it is archived. Because the account holds everything, ending one stretch of travel and beginning the next does not create a seam. The record simply continues.",
  },
  {
    kind: "h3",
    text: "Devices are interchangeable",
  },
  {
    kind: "p",
    text: "Phones drop in rivers, get stolen at trailheads, and die at the worst possible moment. If your season lived on the device, any of those would end it. It does not. Sign in on a replacement and the record is there -- the objectives you reached, the runs you have open, the notes you wrote -- because none of it was ever stored as a property of the old hardware. The device is a window onto the account, not the place the season is kept.",
  },
  {
    kind: "note",
    text: "The record following the account is what makes a lost phone an inconvenience rather than a season wiped clean. You replace the window, not the record behind it.",
  },

  {
    kind: "h2",
    text: "A run stays open until you close it",
  },
  {
    kind: "p",
    text: "A run is a named sequence of objectives you assemble at the desk and work through on the ground. Its legs are marked complete by checking in on the ground, not by ticking a box, so a run is a plan and a record of a hunt at the same time. Continuity is what lets that record survive the gap between the days you actually travel.",
  },
  {
    kind: "p",
    text: "Partly completed runs stay open. If you cleared four legs of a seven-leg run in May and then went back to the desk for the summer, the run is still open in September with those four legs filled in behind you and three still waiting. Nothing expires it. The software will not quietly close it, reset it, or push you to start over, because closing a run for you would be closing a record you earned.",
  },
  {
    kind: "p",
    text: "A run you have abandoned is treated the same way, because from the outside the software cannot tell a pause from an abandonment, and it is not the software's place to decide. An abandoned run can be closed or left open at your word. Both are valid states. What you cannot do is have the record change on its own.",
  },
  {
    kind: "ul",
    items: [
      "Legs fill in as you check in, so an open run doubles as the answer to what you actually did last season.",
      "A run left half-done in spring is exactly where you left it when you route back through in autumn.",
      "You close a run when you decide it is closed -- not when a timer decides for you.",
      "A leg is never marked complete by hand; the ground you covered is the only thing that fills it.",
    ],
  },

  {
    kind: "h2",
    text: "What continuity does to a check-in",
  },
  {
    kind: "p",
    text: "A check-in is only recorded when the device reports a GPS fix inside the objective's geofence, and its timestamp is the moment you were there. Continuity is what turns that single confirmed moment into something that keeps paying out. On its own, a verified check-in is a receipt: proof you stood somewhere on one date. Held in a continuous record, that same check-in becomes context you carry forward -- the reason a district you passed through once is already known ground the next time a run brings you near it.",
  },
  {
    kind: "p",
    text: "This is the sentence to hold onto: verification without continuity is a series of receipts. The check-in system proves where you were. The season record is what stops that proof from being thrown away the moment the trip that produced it is filed. One without the other is half a capability. Together they compound, which is the entire point of building the record around the account.",
  },
  {
    kind: "note",
    text: "A check-in recorded offline queues on the device with the timestamp of the moment you were there and reconciles when you come back into service. Continuity means that reconciled check-in lands in the same one record as everything else -- there is no separate offline history to merge by hand.",
  },

  {
    kind: "h2",
    text: "The edge cases",
  },
  {
    kind: "p",
    text: "A capability is only as good as its behaviour under the conditions that break weaker tools. The season does not run on clean connectivity and one loyal device. It runs on dead zones, replaced phones, months of desk time between runs, and the occasional lapsed subscription. Here is what the record does in each case.",
  },
  {
    kind: "table",
    caption: "What survives what",
    head: ["Event", "What happens to your record"],
    rows: [
      ["You lose service for a week", "Check-ins queue on the device and sync into the one record when you reconnect, keeping their original timestamps."],
      ["Your phone dies or is stolen", "Sign in on another device and the full record is there -- it was on the account, not the hardware."],
      ["You leave a run half-finished", "It stays open with completed legs intact until you decide to close it. Nothing expires it."],
      ["You abandon a run entirely", "You choose whether to close it or leave it open. The state only changes at your word."],
      ["Months pass at the desk", "The season stays open. Confirmed ground stays confirmed and standing is never taken back for inactivity."],
      ["You stop subscribing", "Your check-ins, rank and history remain yours. Cross-device continuity and offline access are the parts that pause."],
    ],
  },

  {
    kind: "h2",
    text: "What is paid and what is yours",
  },
  {
    kind: "p",
    text: "It is worth being exact about the line here, because it is easy to assume that a paid feature owns the thing it operates on. It does not. Continuity across devices and offline access are paid capabilities. The record itself -- the ground you covered and the standing it earned -- is not rented. It is yours whether or not you are paying, because it was never the subscription's to hold.",
  },
  {
    kind: "table",
    caption: "The line between the tool and the record",
    head: ["Item", "State without a subscription"],
    rows: [
      ["Your check-ins", "Retained -- they are part of the record you earned"],
      ["Your rank and history", "Retained -- standing is not taken back"],
      ["Objectives you reached", "Retained on the account"],
      ["Cross-device continuity", "Paused -- this is a paid capability"],
      ["Offline maps and notes", "Paused -- this is a paid capability"],
    ],
  },
  {
    kind: "p",
    text: "So the subscription buys the reach of the record -- across devices, out past coverage -- not the record. A rider who stops paying does not lose a season. They lose the ability to carry it onto a second device and into a dead zone until they resume. The distinction is deliberate and it is the same distinction the whole product is built on: what you earned is yours; what a subscription buys is the tooling around it.",
  },

  {
    kind: "h2",
    text: "How it connects to the doctrine",
  },
  {
    kind: "p",
    text: "Via Draconis holds that the road is something you earn, and that a record is only worth what stands behind it. Season continuity is the load-bearing piece of that claim. Verification proves each moment; continuity is what lets those proven moments add up into standing instead of evaporating trip by trip. Without it, every season would start you back at zero and the word earned would mean nothing past the current outing.",
  },
  {
    kind: "p",
    text: "This is the capability that makes the rest of it compound. One continuous record across the season is not a convenience feature bolted onto a trip planner. It is the reason the ground you hunt down, the runs you open, and the intel you write stay yours -- one record, one account, across every device you carry and every stretch of the season you travel.",
  },
];
