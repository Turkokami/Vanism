import type { Block } from "./blocks";

/** Why a confirmed record beats a crowdsourced review -- Vanism pillar. */
export const PILLAR_WHY_VERIFICATION_BEATS_CROWDSOURCED_REVIEWS: Block[] = [
  { kind: "key", text: "A crowdsourced pin is an opinion someone left behind: undated, unlocated to the meter, and unverifiable after the fact. A confirmed record is different in kind -- a specific rider stood on that ground, fixed the position by GPS, on a known date, and the record carries that date so you can weigh how old it is. When the question is whether a place is still open, still passable, and still legal this week, a record you can verify beats ground someone asserted, every time." },

  { kind: "p", text: "There are two ways to know where to camp. One is to read what other people said about a place -- a star rating, a pin dropped on a map, a paragraph of impressions written at some point in the past by someone you cannot identify. The other is to work from a record: a confirmed position, tied to a date, made by a rider who was physically there and reported what the ground actually was. Most of the category runs on the first. This piece argues for the second, on the merits." },

  { kind: "p", text: "The argument is not that reviews are dishonest. Most are written in good faith by people trying to help. The argument is that a review is the wrong tool for the job, because the job is deciding whether to commit a day of driving and a night of daylight to a place, and a review does not carry the two facts that decision turns on: where exactly, and when. Strip those away and what remains is a feeling about a place that may no longer exist." },

  { kind: "p", text: "This page sets out why crowdsourced pins and reviews decay, what separates a review from a confirmed record, how anonymous pin dumps damage the ground they point at, and why a date on every claim is the whole point. It ends where the argument leads." },

  { kind: "h2", text: "What a crowdsourced pin actually is" },

  { kind: "p", text: "A pin on a crowdsourced map looks like data. It is placed on a coordinate, it has a little icon, it sits on a satellite image, and the interface treats it exactly like a surveyed feature. That presentation is the problem, because a pin is not a survey. It is a memory, converted into a marker, at an accuracy nobody recorded." },

  { kind: "p", text: "Consider what is missing from a typical pin. There is usually no date, or a date that refers to when the pin was created rather than when anyone was last there. There is no position accuracy -- the pin may have been dragged onto the map by hand, hundreds of meters from where the person actually slept. There is no identity, so no way to ask a follow-up or judge whether the person drives a motorcycle or a forty-foot rig. And there is no status, so a site legal in 2021 and closed in 2023 sits on the map looking exactly as authoritative as the day it was posted. None of that is visible; the pin presents with the confidence of a surveyed corner, and the reader cannot tell the difference." },

  { kind: "h2", text: "Why records rot, and how fast" },

  { kind: "p", text: "The core problem is that the ground changes and the pin does not. A record about a physical place is only as good as its freshness, because everything it describes -- the road, the pullout, the legality, the water, the occupancy -- changes without anyone updating the map. The pin is frozen the moment it is posted; the world it describes is not." },

  { kind: "p", text: "A site posted three years ago may have been washed out in a spring flood, gated behind a seasonal closure, occupied when you arrive, absorbed into a fire perimeter, or closed by the district for resource damage. It may never have been legal in the first place -- plenty of popular pins sit on state trust land leased to a rancher, or inside a boundary the poster never checked. The pin cannot tell you which of these happened, because the pin has not been back." },

  { kind: "table", caption: "How a three-year-old campsite pin goes wrong", head: ["What changed", "How often it changes", "Visible in the pin"], rows: [
    ["Road washed out or rutted past clearance", "Any spring; worse late season", "No"],
    ["Seasonal gate closed on the access road", "Every year, dates move", "No"],
    ["Area closed by the district for overuse", "Growing, area by area", "No"],
    ["Inside a new fire closure perimeter", "Every summer in the West", "No"],
    ["Was never legal -- state trust or private", "Static, but never disclosed", "No"],
    ["Occupied when you arrive at dusk", "Constant on popular pins", "No"],
    ["Fee or permit now required", "Increasing across the West", "No"],
  ]},

  { kind: "note", text: "Decay is not uniform. Legality and road class change slowly; occupancy and current conditions change by the day. The dangerous case is the slow-changing fact that finally flips -- a site legal for years that quietly closed last season -- because nobody who relied on the old pin thought to recheck it." },

  { kind: "h2", text: "A review is an opinion; a record is evidence" },

  { kind: "p", text: "The words review and record get used interchangeably, and they should not be. They are different objects with different obligations. A review reports how a place made someone feel. A record reports what a place was, at a stated position, on a stated date. One is an opinion you cannot check. The other is a claim you can weigh." },

  { kind: "p", text: "The distinction matters because opinions and claims fail differently. An opinion cannot be wrong in a way you can catch -- if someone says a site was beautiful and quiet, and you arrive to find it crowded and loud, the review was not false, it was just theirs, on a different night. A claim can be wrong in a way you can catch: if a record says a rider stood at these coordinates on this date and found the gate open, and you arrive to find it locked, the record is testably stale, and its date told you the risk of that before you left." },

  { kind: "table", caption: "A review compared to a confirmed record", head: ["Property", "Crowdsourced review", "Confirmed record"], rows: [
    ["What it reports", "How the place felt", "What the place was, on the ground"],
    ["Position", "A dropped pin, accuracy unknown", "GPS fix at the objective"],
    ["Date", "Usually absent or post-date only", "The date the rider stood there"],
    ["Author", "Anonymous or a handle", "An identified rider you can weigh"],
    ["Verifiable", "No -- an opinion cannot be checked", "Yes -- a dated claim can be rechecked"],
    ["Ages how", "Silently; looks fresh forever", "Openly; the date shows its age"],
    ["Fails how", "Cannot be caught being wrong", "Testable against current ground"],
    ["Answers", "Would I have liked it", "Is it open, passable, legal, now"],
  ]},

  { kind: "h2", text: "The date is not a detail; it is the whole point" },

  { kind: "p", text: "The single most important field on any record about a physical place is the date it was confirmed. Not because dates are tidy, but because the date is what converts a claim into evidence you can weigh. A claim without a date cannot be reasoned about at all -- you have no way to estimate how likely it is to still hold. A claim with a date can be reasoned about immediately: a confirmation from last week is strong, one from two seasons ago is a lead worth checking, one from four years ago is a starting point and nothing more." },

  { kind: "p", text: "So a date is not a nicety layered on top of a record; it is the load-bearing element. Everything else the record contains -- position, access status, road notes -- means nothing without it, because you cannot weight any of it without knowing how old it is. A perfect description of a road, undated, is worthless. A rough description of that road, dated to nine days ago, is actionable." },

  { kind: "table", caption: "How to weight a record by its date", head: ["Age of confirmation", "How to treat it", "What to do before you commit"], rows: [
    ["Under 2 weeks", "Strong -- conditions likely still hold", "Confirm nothing has closed since"],
    ["2 weeks to 3 months", "Good for legality; recheck conditions", "Verify current road and closures"],
    ["3 to 12 months", "A lead, not a plan", "Recheck everything time-sensitive"],
    ["1 to 2 years", "Starting point only", "Treat as unconfirmed; verify fully"],
    ["Over 2 years", "Assume nothing holds", "Rebuild from the authoritative source"],
  ]},

  { kind: "p", text: "Notice what the date does that a star rating cannot: it degrades honestly. A five-star pin from 2020 still shows five stars today, asserting a quality it has no current basis for. A record confirmed in 2020 shows its date, and the date tells you, without any further work, that it is old and needs rechecking. The rating hides its age to keep looking useful. The date shows its age so you can decide for yourself. That is the entire difference between marketing and evidence." },

  { kind: "h2", text: "Why anonymous pin dumps damage the ground" },

  { kind: "p", text: "There is a second problem with crowdsourced pins, and it is not about accuracy but about what happens to a place once a pin points at it. Anonymous pin dumps do not just describe fragile ground badly -- they degrade it, by concentrating traffic on exactly the sites least able to absorb it. A pin on a popular app is seen by everyone using that app in that region, with no capacity limit and no sense of the ground's fragility. A meadow pullout that could quietly absorb one vehicle a week becomes a coordinate that a hundred riders route to over a season. It does not fail gracefully: it compacts, the vegetation dies, the fire ring multiplies, the informal road widens, and the district notices. What the district does next is close it." },

  { kind: "p", text: "This is the part rarely stated plainly: the pin degrades the place it points at, and the degradation removes the place. Dispersed camping is withdrawn area by area when the ground shows wear, and it rarely comes back. A crowdsourced pin, in the act of being useful, sets in motion the loss of the thing it described. The more popular the pin, the faster the site it names disappears." },

  { kind: "ul", items: [
    "A pin has no capacity -- it routes unlimited traffic to a single fragile point with no throttle.",
    "It carries no fragility signal -- durable gravel and a living meadow look identical as coordinates.",
    "It is anonymous -- nobody is accountable for what happens to the ground after the pin goes up.",
    "It concentrates rather than distributes -- everyone lands on the same three famous sites while legal ground nearby sits empty.",
    "It does not retire -- when the site closes from overuse, the pin stays up and keeps sending people.",
  ]},

  { kind: "note", text: "The cruelest case is the pin that outlives the site. A pullout gets loved to death, the district closes it, and the pin keeps routing riders to a spot that is now signed, patrolled, and citable. The crowd that killed the site is still being sent there by the marker that killed it." },

  { kind: "p", text: "A confirmed record does not fix this alone, but it changes the incentives. A record tied to an identified rider and a date is accountable in a way a pin dump is not, a system that drops stale records out of view stops sending people to sites that have closed, and a record carrying an access status can mark a place closed rather than leaving a five-star pin glowing over ground the district shut two years ago." },

  { kind: "h2", text: "What makes a claim verifiable" },

  { kind: "p", text: "If the case is that a verifiable record beats an unverifiable opinion, then it is worth being precise about what verifiable actually requires. A claim is not verifiable because it sounds specific or comes with a photo. It is verifiable when it carries the fields that let another person go and check it, and when the source is willing to be held to it." },

  { kind: "table", caption: "What makes a claim verifiable", head: ["Element", "Why it is required", "Failure without it"], rows: [
    ["A precise position", "You can navigate to the exact ground", "You search a wide area and give up"],
    ["A date of observation", "You can weight the claim by age", "You cannot judge if it still holds"],
    ["An identified source", "You can weigh who made it", "No accountability, no follow-up"],
    ["An access status", "You know legal from merely used", "You camp somewhere quietly closed"],
    ["A stated method", "You know GPS fix from hand-dropped", "You trust a guess as a survey"],
    ["A retirement rule", "Stale claims leave the record", "Old errors persist and mislead"],
  ]},

  { kind: "p", text: "Run a typical crowdsourced pin against that list and it fails most rows. No date, or the wrong date. No position accuracy. No identity. No legal status distinct from the fact that someone camped there. No stated method, so a hand-dragged marker reads the same as a surveyed point. And no retirement, so errors accumulate forever. It is not that the pin is a bad record; it is not a record at all in the sense that matters -- it cannot be checked, so it can only be believed. A confirmed record is built to pass every row, which is not a higher standard for its own sake but the minimum for a claim you would bet a day of driving on." },

  { kind: "h2", text: "Trust ground you can verify over ground someone asserted" },

  { kind: "p", text: "There is a difference between believing a place is there and being able to check that it is. Belief is what a review asks: someone says the site is good, and you take it on faith. Verification is what a record offers: someone says they stood here on this date and found the gate open, and you can weigh that by its age, source, and method, then confirm it yourself before you commit." },

  { kind: "p", text: "The practical difference shows up at the worst moment -- late in the day, low on daylight, at the end of a long run, at a place that turns out not to be what the pin promised. A rider working from belief has no recourse; the pin was all they had, and it was wrong. A rider working from a dated record saw the risk before leaving, because the record's age was visible, and planned a fallback for exactly the case where the old claim no longer holds. Verification does not guarantee the site; it tells you the odds honestly, in advance, so you can carry a second option." },

  { kind: "p", text: "This is the discipline the road rewards. You hunt a site, weigh what the record says against how old it is, confirm what you can from the authoritative source, and carry a fallback for what you cannot. That is earning the ground rather than trusting a stranger's undated impression of it -- slower than dropping onto the nearest five-star pin, and the reason experienced riders arrive where they meant to and leave the fragile places alone." },

  { kind: "h2", text: "Where the crowd is genuinely useful" },

  { kind: "p", text: "None of this means crowdsourced information is worthless. It means it has a job it is good at and jobs it is bad at, and the error is using it for the second kind. Road intel from someone who was recently on the ground is one of the most valuable things a rider can carry -- it is the only source for whether the creek was running last week or whether the road washed out in March. The official record does not cover current conditions at all." },

  { kind: "p", text: "The distinction is between a fresh, dated, first-hand report and an old, anonymous, undated pin. The first is intel; the second is noise wearing its costume. A rider who came off that road nine days ago and tells you the last two miles are rutted but passable in a two-wheel-drive rig is giving you something no agency publishes. A pin dropped by an unknown person at an unknown time is a coordinate and a feeling." },

  { kind: "table", caption: "Which source to trust for which question", head: ["Question", "Best source", "Why"], rows: [
    ["Is dispersed camping legal here", "District office / land agency", "Only the manager sets the rule"],
    ["What is the stay limit and reset", "District office", "Set locally, overrides any default"],
    ["Is there a fire or area closure now", "District office / official alerts", "Changes fast, issued at district level"],
    ["Is the road passable this week", "A recent, dated rider report", "No agency publishes conditions"],
    ["Is the gate open yet this season", "A recent, dated rider report", "Dates move; the record lags reality"],
    ["Which of two legal sites is quieter", "Reviews, as a last step", "A taste question, low stakes"],
  ]},

  { kind: "p", text: "Read that table as a hierarchy. Rules come from the authoritative source; current conditions from recent, dated, first-hand reports; taste last, from reviews, once the first two are settled. The failure mode of the whole category is inverting it -- letting a five-star pin answer the legality and conditions questions it has no standing to answer, and finding out at the gate." },

  { kind: "h2", text: "The idea this argument leads to" },

  { kind: "p", text: "Follow the argument to its end and it produces a specific design, not a slogan. A date is load-bearing, so the record must carry the date the rider stood there. Verifiability requires a precise position, so it must be a GPS fix and not a hand-dropped marker. Stale claims mislead, so records must retire on age rather than glowing forever. Anonymous pins degrade ground, so the record must be tied to an identified rider who is accountable for it. This is not a wish list; it is what the argument demands if taken seriously." },

  { kind: "key", text: "This is the gap Vanism was built for. A site enters the record only when a rider stands on it and confirms it by GPS, and the record carries the date that check was made; anything not reconfirmed within eighteen months drops out of search rather than being shown with a caveat. That is the plain difference between a review and a record -- a review asks you to believe an undated opinion, a record hands you a dated claim you can weigh and then verify yourself before you commit the drive." },

  { kind: "p", text: "The point is the argument, not the product. A confirmed check-in is simply the review rebuilt to pass the verifiability test -- a real position, a real date, an accountable source, and a retirement rule. A rider could build the same discipline with a notebook, a GPS unit, and a habit of never trusting a claim older than a season without rechecking it. The tool just makes that discipline the default." },

  { kind: "h2", text: "The habits this leaves you with" },

  { kind: "p", text: "Whatever tools a rider uses, the argument reduces to a handful of working habits. They cost a few minutes at the desk and are the difference between arriving where you meant to and improvising a night in the dark at a place that turned out gated, occupied, or closed." },

  { kind: "ol", items: [
    "Read the date first. Before anything else a record claims, find out when someone was last there, and weight everything by that.",
    "Treat an undated claim as unverified. If there is no date, you cannot judge it -- start it at zero, not at trust.",
    "Send legality and rules to the authoritative source. The district office sets the rule; no pin, review, or record overrides it.",
    "Take current conditions from recent, dated, first-hand reports, and confirm the road before committing the drive.",
    "Use reviews for taste, last, once the place is confirmed open, legal, and reachable -- never to answer those first questions.",
    "Carry a fallback whenever the freshest record is old. The older the claim, the more you plan for it being wrong.",
    "Do not add to the pile that degrades ground. Where you report, report ground already established, and never route the crowd onto fragile sites.",
  ]},

  { kind: "h2", text: "What this framework cannot settle for you" },

  { kind: "p", text: "Everything above is the general case for records over reviews, and the general case has limits. A confirmed record tells you where a rider stood and when, and that is genuinely more than a review offers. It does not tell you what the district decided on Tuesday, whether a closure went up yesterday, or whether the gate that was open last week is locked today. Even a fresh record is a snapshot, and snapshots age from the moment they are taken." },

  { kind: "p", text: "So the record is a strong starting point, not a substitute for the authoritative source. For whether a place is legal, for the current stay limit, for a fire restriction or an area closure, the district office or managing agency is the authority, and a phone call answered by the person who deals with that ground daily beats any record, any review, and this page. Verify what you can, confirm the rest at the source, and carry a fallback for what neither can promise. That is the whole method, and it does not end at the pin." },
];
