import type { Block } from "./blocks";

/** condition-reports -- Vanism feature, expanded. */
export const FEATURE_CONDITION_REPORTS: Block[] = [
  { kind: "key", text: "A condition report is a short field note a rider attaches to an objective at the moment of check-in -- road surface, clearance needed, water availability, noise, and whatever changed since the last rider stood there. Every report carries the reporter's verification record and the date it was written, so a note from last week weighs more than one from two summers ago. It is confirmation of what the ground was, dated and attributable, not an opinion typed from the desk." },

  { kind: "p", text: "The useful information about a site is almost never in the listing. The listing tells you a place exists. It does not tell you that the last two miles need clearance, that the creek was running, that the pullout takes a rig your length, or that the place fills by four on a Friday. Those are conditions, and conditions come from riders who were standing there. A condition report carries what one rider found on the ground to the next rider deciding whether to make the run." },

  { kind: "p", text: "The through-line is the one that runs through every record on this site: a claim is worth what stands behind it, so every condition report carries who confirmed it and when." },

  { kind: "h2", text: "What a condition report contains" },

  { kind: "p", text: "A report is deliberately short -- not a trip journal, not a review. It is a handful of fields describing the state of the objective at a moment a rider can prove they were there: facts that decay, true this week and maybe not next month, rather than impressions. Each field answers a question a rider asks at the desk before a run, and each has a cost attached to getting it wrong." },

  { kind: "table", caption: "The fields a condition report records", head: ["Field", "The question it answers", "What it costs to get wrong"], rows: [
    ["Road surface", "Graded, washboard, rutted, or washed out", "A turnaround miles in, at dusk, on a one-lane shelf"],
    ["Clearance needed", "Will my rig physically reach the site", "A high-center or a scraped undercarriage on the approach"],
    ["Water availability", "Is the creek running or the spring flowing", "Carrying weight you did not need, or arriving dry"],
    ["Noise", "Highway, rail, generator, or genuinely quiet", "A night's sleep you drove a long way to lose"],
    ["What changed", "New gate, new closure, new fee, new washout", "Planning against a site that no longer behaves that way"],
  ]},

  { kind: "note", text: "The last field does the heavy lifting. A site rarely changes everything at once; it changes one thing -- a gate now locked, a fee now posted -- and that single change is exactly what an old listing cannot tell you and a recent rider can." },

  { kind: "h2", text: "How a report gets written" },

  { kind: "p", text: "A report is attached to a check-in, not a free-standing post. When a rider's device reports a GPS fix inside the objective's geofence, the check-in is recorded, and the report rides on top of that confirmation. There is no path to write a report for a site you did not reach. You write one because you were standing there, and the record knows you were standing there." },

  { kind: "p", text: "That coupling is the entire design. Every condition report inherits the guarantee the check-in carries: it cannot be posted from home, backdated, or assembled from a photo. The reporter's verification record travels with the note, so the next rider is not weighing an anonymous handle -- they are weighing an identified rider whose ground they can see. A note from someone with a long confirmed history on that terrain reads differently from a first note, and the record lets you tell the difference." },

  { kind: "p", text: "Because the note is bound to a check-in that syncs on its own timestamp, a report written deep in a dead zone keeps the date the rider was actually there. It queues on the device and reconciles on reconnection. The upload time is irrelevant; the field time is what gets recorded, because that is what the next rider needs." },

  { kind: "h2", text: "Why it is bound to a check-in" },

  { kind: "p", text: "Every app that let people post about places freely ended up with the same problem: a record that cannot tell a rider who slept there Tuesday from one who read about it once. The two claims look identical, so the reader cannot weight them, and the record degrades to noise. Binding a report to a verified fix closes that failure at the source." },

  { kind: "p", text: "It also closes the door on the quiet abuse that ratings invite. You cannot flood an objective to bury or boost it, because each report costs a physical visit inside the geofence. The ground itself is the rate limiter. A rider earns the standing to say something about a site the same way everyone else does -- by going." },

  { kind: "note", text: "The rule is uniform across the product: the record reflects where you were. A condition report is that rule applied to what the ground was like when you got there." },

  { kind: "h2", text: "The date is the load-bearing field" },

  { kind: "p", text: "A condition decays. A road graded in June is not necessarily graded in October; a creek running in spring is not necessarily running in August. So the most important thing printed next to a report is the date it was confirmed, because the date is what turns the note from an assertion into evidence a rider can weigh." },

  { kind: "p", text: "Nothing is hidden by age and nothing is silently dropped from the page. An eighteen-month-old note is still shown -- it is just shown as an eighteen-month-old note, with its date in plain sight, so a rider decides how much to lean on it. The freshness gate governs the search index, not the page: an objective whose most recent confirmation has gone stale falls out of the index and stops competing for a result it can no longer stand behind, but the record it holds stays readable to anyone who follows a link." },

  { kind: "table", caption: "How a rider weights a report by its date", head: ["Age of the report", "How to treat it", "What to do before the run"], rows: [
    ["Under 2 weeks", "Strong -- the ground likely still holds", "Confirm nothing has closed since"],
    ["2 weeks to 3 months", "Solid for road class; recheck water and occupancy", "Verify current closures and fees"],
    ["3 to 12 months", "A lead, not a plan", "Recheck everything time-sensitive"],
    ["1 to 2 years", "Starting point only", "Treat conditions as unconfirmed"],
    ["Over 2 years", "Assume the conditions have moved", "Rebuild from a recent source"],
  ]},

  { kind: "p", text: "Notice what the date does that a star rating cannot: it degrades honestly. A rating from two summers ago still shows the same stars today, asserting a freshness it has no basis for. A condition report shows its date, which tells the rider it is old and needs rechecking. That is the difference between marketing and a record." },

  { kind: "h2", text: "Facts with a date, not a scoreboard" },

  { kind: "p", text: "A condition report is not a rating and cannot be used as one. A rider reports what they found -- rutted road, dry creek, loud highway -- and the record stores it as a fact with a date attached, not as a score that rolls up over the objective's head. That is a deliberate line. The moment conditions become a scoreboard, riders start reporting to move the number rather than to describe the ground, and the record stops being useful to the next person deciding whether to make the run." },

  { kind: "p", text: "So a report cannot mark a site as good or bad; it can only say what was there. Two riders can stand at the same objective a week apart and file honest reports that read differently -- one hit the creek running, one hit it dry -- and both are correct, because a condition is a snapshot, not a verdict. The record holds both, dated, and lets a rider read the trend instead of an average that erases the change they needed to see." },

  { kind: "h2", text: "The edge cases" },

  { kind: "p", text: "The reports that disagree are the useful ones, not the broken ones. When a fresh note contradicts an older one, that contradiction is the signal -- the ground moved between them, and the dates tell a rider which way. A washout reported last month against a clean road reported last year is not a conflict to resolve but a change to plan around, and the newer date wins." },

  { kind: "p", text: "The rest follow the same logic:" },

  { kind: "ul", items: [
    "A seasonal site carries the conditions riders reported in the window they were actually there, not one note stretched across a year, because a spring and an autumn approach are different runs.",
    "A site with no recent report is not dressed up to look like it has one. Coordinates and access status still show, but the absence of a fresh note is itself visible, so a rider knows they are working from old ground and treats the hunt accordingly.",
    "A report filed offline keeps its field date, not its upload date, so a note written a week deep in a dead zone does not arrive looking newer than it is.",
    "A rider reads the whole run of dated notes, not just the latest, because the sequence -- what changed and when -- carries more than any single one.",
  ]},

  { kind: "h2", text: "What is free and what the intel costs" },

  { kind: "p", text: "The site record is free for everyone. Coordinates, the objective, and its access status do not sit behind a subscription, because those are the facts a rider needs to know a place exists and whether it is legally reachable. Recent rider intel -- the current condition reports from riders who were there this season -- is the paid capability. A subscription does not buy standing or the ground; it buys the recent field intelligence that turns a known coordinate into a run you can commit to." },

  { kind: "table", caption: "Condition reports against the alternatives", head: ["Property", "A crowdsourced pin", "A Vanism condition report"], rows: [
    ["Author", "Anonymous or a handle", "An identified rider with a verification record"],
    ["Position proof", "A dragged pin, accuracy unknown", "A GPS fix inside the geofence"],
    ["Date", "Usually absent or the post date", "The date the rider stood there"],
    ["Can be posted from home", "Yes", "No -- it rides on a verified check-in"],
    ["Ages", "Silently; looks fresh forever", "Openly; the date is on the page"],
    ["Shape", "A rating that averages to a score", "A fact with a date, held in sequence"],
    ["Answers", "How it felt to someone once", "What the ground was, and when"],
  ]},

  { kind: "h2", text: "How this ties back to the doctrine" },

  { kind: "p", text: "Via Draconis holds that the road is earned and every place worth reaching is a hunt, not a lookup. A condition report is that doctrine at the smallest scale: one rider handing the next what they learned on the ground, stamped with proof they were there and the date they found it. Nobody types it from the desk. Nobody buys the standing to file it. The note exists because a rider went, and it is worth exactly what that cost -- the same thing it would cost the rider reading it. Confirmed, dated, attributable: that is the whole of it, and it is enough." },
];
