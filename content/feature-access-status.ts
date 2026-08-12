import type { Block } from "./blocks";

/** access-status -- Vanism feature, expanded. */
export const FEATURE_ACCESS_STATUS: Block[] = [
  {
    kind: "key",
    text: "Every Vanism objective carries an access status -- open, seasonal, permit-required or closed -- and the date it was last confirmed by a rider on the ground. It is not a map layer read off a government file. It is a condition someone stood in front of and reported, the only thing that tells you whether a cell that is legally open is a road you can actually drive.",
  },
  {
    kind: "p",
    text: "A boundary on a public land map is a legal fact. It says where dispersed camping is permitted and where the wilderness starts. What it does not say is whether the forest road washed out in March, whether the gate is locked until June, or whether the district issued a fire closure last week. Those are conditions, and conditions do not live in the file. They live with the riders last through the gate.",
  },
  {
    kind: "p",
    text: "Access status is Vanism's answer to that gap: a single field on every objective, confirmed by a rider and stamped with the date, so the run you plan at the desk survives contact with the ground. What follows is how the four states work, how a status is confirmed and dated, why an unconfirmed one will not publish, and where it sits in the doctrine.",
  },

  {
    kind: "h2",
    text: "The four states, and what each one costs you to ignore",
  },
  {
    kind: "p",
    text: "Access status is deliberately not a slider or a score. It is one of four discrete states, because a rider at the desk is making a binary call -- point the run at this cell or not -- and a state answers that where a rating would only muddy it.",
  },
  {
    kind: "table",
    caption: "The four access states and what each one asserts about an objective.",
    head: ["State", "What it means", "What a rider does with it"],
    rows: [
      [
        "Open",
        "Reachable now by the class of vehicle the objective is rated for, with no permit gate or active closure.",
        "Point a run at it. The status still carries a date; read the date before you commit.",
      ],
      [
        "Seasonal",
        "Reachable for part of the year. The page carries the window riders have actually reported, not the published season.",
        "Check the reported window against your dates. They often disagree, and the reported one stops you at a locked gate.",
      ],
      [
        "Permit-required",
        "Legally reachable only with a permit, quota, or reservation obtained ahead of arrival.",
        "Handle the permit at the desk. Arriving without it is the same as arriving at a closure.",
      ],
      [
        "Closed",
        "Not reachable now -- washout, locked gate, fire order, or seasonal shutdown at the confirmed date.",
        "Route around it. A closed status with a recent date is a hard stop, not a suggestion.",
      ],
    ],
  },
  {
    kind: "p",
    text: "The states are exclusive: an objective is in exactly one at any moment. The gap between seasonal and closed is the gap between a gate that opens in June and a road that no longer exists, and a rider deserves to know which one they face before the run leaves the desk.",
  },

  {
    kind: "h2",
    text: "Confirmed, and dated -- the two halves of a status",
  },
  {
    kind: "p",
    text: "A status without a date is a rumour, and Vanism refuses to show one. The value of the field is that it can be weighed against how old it is. Every objective displays the date its status was last confirmed, and that date is not decorative -- it drives whether the objective stays in the index.",
  },
  {
    kind: "p",
    text: "Confirmation comes from riders with recent check-ins at the objective. A check-in is only recorded when the device reports a GPS fix inside the geofence, so the rider confirming a status is provably someone who stood on the ground it describes. No manual entry from a desk, no backdating, no confirming a road you read about. The person who says the gate is open is the person the gate let through.",
  },
  {
    kind: "p",
    text: "Recency is not a tiebreaker; it is the whole ranking. When two riders report different statuses, the one there last week is actioned ahead of the one there in 2019. Freshness is a first-class input, not a footnote under the field.",
  },
  {
    kind: "table",
    caption: "How the confirmation date changes what a status is worth.",
    head: ["Confirmed", "How to read it", "What Vanism does with it"],
    rows: [
      [
        "Within the last season",
        "Trustworthy for planning. The ground it describes has not had long to change.",
        "Shown plainly, ranked above older reports for the same objective.",
      ],
      [
        "One to eighteen months",
        "Usable, but weigh it. Roads wash out and gates change on a shorter clock than this.",
        "Still shown, still dated, so the age is visible rather than hidden.",
      ],
      [
        "Over eighteen months",
        "Stale. Nobody has confirmed the ground in over a season and a half.",
        "The objective drops out of the index automatically. The page still answers by direct link; it just stops competing for a result it has not re-earned.",
      ],
      [
        "Never (unknown)",
        "No rider has confirmed a status at all.",
        "The objective does not publish. An unknown status shown confidently is worse than no page.",
      ],
    ],
  },

  {
    kind: "h2",
    text: "Why an unknown status does not publish",
  },
  {
    kind: "p",
    text: "An objective with an unknown access status does not publish. This is one of the four gate tests every site must pass to enter the index, and it is deliberately strict. The reasoning is not editorial caution but a claim about what a confident page does to a rider who trusts it.",
  },
  {
    kind: "p",
    text: "A page that looks complete tells a rider it is safe to plan against. A page with no confirmed status that presents like every other is making a promise it cannot keep, and the rider finds out at a locked gate two hundred miles from the desk. A blank is honest; a confident page over an unknown road is not. The gate holds the objective back until a rider has stood in front of it.",
  },
  {
    kind: "note",
    text: "This is why some objectives you reach on the ground do not appear when you search. They exist and answer by direct link; they are waiting on the same thing every record here waits on -- someone to confirm them. The hunt fills the index; the desk does not.",
  },
  {
    kind: "p",
    text: "The other three gate tests -- coordinates, a status inside the freshness window, and the minimum verified check-ins -- work the same way. None can be satisfied from a keyboard; every one is a thing a rider had to go and do. Access status is the test that most directly protects the run, standing between a legal boundary and a passable road.",
  },

  {
    kind: "h2",
    text: "How a status changes, and who is allowed to change it",
  },
  {
    kind: "p",
    text: "Status changes are reported from the app by riders with recent check-ins at that objective. There is no comment box open to the road at large, and no way to flip a gate from open to closed while sitting at home. The right to report a condition is earned by having been there recently enough for it to still be yours to describe.",
  },
  {
    kind: "p",
    text: "When a report lands, it is actioned against the reporter's verification record and dated to the moment they were on the ground, not the moment it uploaded. A rider who confirmed a washout while out of service carries the timestamp of the washout, not of the campground with the wifi three days later.",
  },
  {
    kind: "ul",
    items: [
      "A status change is sourced from a check-in, so the reporter is provably someone who was there.",
      "Recent reports outrank old ones -- the road's present state beats its history.",
      "A change between states is an event on the record, not a silent overwrite, so a status has a lineage.",
    ],
  },

  {
    kind: "h2",
    text: "Access status is not the same as a condition report",
  },
  {
    kind: "p",
    text: "The two are easy to confuse and worth keeping separate. Access status answers one question -- can a rider reach this objective at all -- with one of four states. A condition report is the longer field note attached at check-in: road surface, clearance needed, whether the creek was running. Status is the gate; conditions are what waits past it.",
  },
  {
    kind: "table",
    caption: "Access status against condition reports -- two verified fields, two jobs.",
    head: ["", "Access status", "Condition reports"],
    rows: [
      [
        "Question answered",
        "Can I reach it at all?",
        "What was it actually like once I was there?",
      ],
      [
        "Shape",
        "One of four discrete states.",
        "Short dated field notes, as many as riders leave.",
      ],
      [
        "Role in the gate",
        "A gate test -- unknown status blocks the objective from publishing.",
        "Enriches a page that already passed the gate.",
      ],
      [
        "Availability",
        "The state and its date are free on every published record.",
        "Recent rider intel is a paid capability; the record itself stays free.",
      ],
    ],
  },
  {
    kind: "p",
    text: "Both are rider-reported, dated, and sourced from a check-in rather than a keyboard -- but they carry different weight. You read the status to decide whether to point the run at a cell, and the conditions to decide how to arrive once it has said you can.",
  },

  {
    kind: "h2",
    text: "The edge cases riders actually hit",
  },
  {
    kind: "h3",
    text: "Seasonal windows that disagree with the sign",
  },
  {
    kind: "p",
    text: "The published season and the reported season often differ. A district may print an opening date the snowpack ignores by a month, or a gate crew may open late. Vanism carries the window riders have actually reported reaching the objective in, not the window on the sign -- because the sign has never once opened a gate that stayed locked past its printed date.",
  },
  {
    kind: "h3",
    text: "A closure that lands between the plan and the arrival",
  },
  {
    kind: "p",
    text: "Fire orders and washouts do not wait. A status confirmed open in June can be closed by a rider in July, and the July report outranks the June one the moment it lands. This is why the date sits next to the state: an open status confirmed last week is a different object from one confirmed last spring.",
  },
  {
    kind: "h3",
    text: "Confirming a status where there is no cell service",
  },
  {
    kind: "p",
    text: "The places worth the hunt are the places without coverage, so a status often gets confirmed where nothing can upload. The confirmation is recorded on the device against the GPS fix and syncs when the rider returns to service, carrying the timestamp of the moment they were there. The road intel that reaches the next rider is dated to when the gate was seen, not when the phone found a signal.",
  },

  {
    kind: "h2",
    text: "Where this sits in the doctrine",
  },
  {
    kind: "p",
    text: "Access status belongs to the verification clause, and earns that placement by answering the clause's only question: who confirmed this, and when. Every published state has a rider behind it and a date beside it. Neither half is optional. A confirmation with no date is a rumour; a date with no confirmation is a guess; the field exists because it refuses to be either.",
  },
  {
    kind: "p",
    text: "That is the difference between a map layer and a Vanism status. A map layer tells you what the file says is legally true. A status tells you what a rider found to be passable, and stamps it with the day it was true. The run you build at the desk is only as good as the ground intelligence under it -- and here that intelligence is not scraped, it is earned, one confirmed gate at a time, by riders who went and looked so the next rider would not have to guess.",
  },
];
