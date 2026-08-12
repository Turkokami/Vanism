import type { Block } from "./blocks";

/**
 * PILLAR — THE GROUND RULES
 * ---------------------------------------------------------------------------
 * Highest commercial-intent cluster in the category. "Can you camp on BLM land",
 * "how long can you stay", "dispersed camping rules" and their long tail are the
 * queries riders run before they book anything, and the category answers them
 * with 600-word listicles that hedge every number.
 *
 * This answers them completely, states which agency governs what, and is honest
 * about where the general rule stops being reliable.
 *
 * LAW II: the vocabulary here is stay, confirm, carry, check. Not escape.
 */

export const DISPERSED_RULES: Block[] = [
  { kind: "key", text: "Dispersed camping is legal on most BLM and national forest land without a permit or fee, for a limited number of nights, in places that have already been used. Every part of that sentence has exceptions set at district level, and the district office rule beats any national figure you read anywhere — including here." },

  { kind: "p", text: "Dispersed camping — boondocking, dry camping, primitive camping, whatever your part of the country calls it — means staying outside a developed campground on public land, with no hookups, no fee and no reservation. Roughly 640 million acres of the United States is federal public land, and a large share of it is open to exactly this. That is the reason the practice exists at the scale it does, and it is also why the rules governing it are more fragmented than most people expect." },

  { kind: "p", text: "There is no single national dispersed camping law. There are several agencies with different mandates, each of which delegates most day-to-day rulemaking down to individual districts and field offices. The result is a system where the general answer is reliable about eighty percent of the time and the remaining twenty percent is where citations get written." },

  { kind: "p", text: "This page covers what the general rules actually are, which agency governs which ground, how stay limits are counted, what changes the answer, and how to verify a specific place before you commit a day of driving to it." },

  { kind: "h2", text: "Which agency governs the ground you are on" },

  { kind: "p", text: "The first question is not whether dispersed camping is allowed. It is who manages the parcel, because that determines the entire rule set. Four agencies account for nearly all of it, and they behave differently enough that treating them interchangeably is the most common source of trouble." },

  { kind: "table", caption: "Federal land agencies and dispersed camping", head: ["Agency", "Dispersed camping", "Typical stay limit", "What to check first"], rows: [
    ["Bureau of Land Management", "Generally permitted across most holdings", "14 days in a 28-day period", "Field office page for area-specific restrictions"],
    ["US Forest Service", "Generally permitted outside developed sites", "14 days, some districts shorter", "Motor Vehicle Use Map for the specific forest"],
    ["National Park Service", "Almost never permitted roadside; backcountry only by permit", "Permit-defined", "Park backcountry office — assume no unless told yes"],
    ["US Fish and Wildlife Service", "Rarely permitted; refuges are day-use in most cases", "N/A", "Refuge-specific regulations"],
    ["State trust and state forest land", "Varies enormously by state; some open, some prohibited", "State-defined", "State land department, not a federal source"],
  ]},

  { kind: "p", text: "BLM land is the most permissive and the most abundant in the West. Forest Service land is similarly open but is organised around road systems, which introduces a second document you have to read. National Park Service land is the trap: people assume a national park behaves like a national forest, and it does not. Pulling off a park road to sleep is prohibited nearly everywhere in the system, and enforcement is considerably more active than on BLM ground." },

  { kind: "note", text: "State trust land deserves particular caution. In some states it is open to camping with an inexpensive annual permit; in others it is leased to ranchers and closed to public overnight use entirely. It frequently looks identical to BLM land on a general map and is governed by a completely different agency." },

  { kind: "h2", text: "The fourteen-day rule and how it is actually counted" },

  { kind: "p", text: "The most-quoted figure in dispersed camping is fourteen days in a twenty-eight day period. It is usually correct on BLM and Forest Service land, and it is a default rather than a statute — individual districts set their own, and in areas under heavy pressure they set them shorter." },

  { kind: "p", text: "How the clock is counted matters more than the number itself, and this is where most people get it wrong." },

  { kind: "h3", text: "The limit applies to an area, not a site" },

  { kind: "p", text: "Moving two hundred metres down the same forest road does not reset anything. The limit is generally applied across a defined area — often the entire field office or ranger district — so relocating within it continues the same stay." },

  { kind: "h3", text: "The reset requires real distance" },

  { kind: "p", text: "Most districts require moving a set distance from your previous site before the clock restarts, commonly twenty-five miles. Some specify a different figure and a few specify that you must leave the district entirely. Twenty-five miles is the working assumption; it is not universal." },

  { kind: "h3", text: "The twenty-eight day window is a rolling one" },

  { kind: "p", text: "Fourteen days in a twenty-eight day period means you cannot stay fourteen, leave for two, and return for another fourteen. The window looks backward from today across the previous twenty-eight days, so the second stay would put you well over." },

  { kind: "h3", text: "Some areas cap annual days as well" },

  { kind: "p", text: "A number of high-pressure areas layer an annual limit on top of the rolling one — for example, a maximum of some number of days per calendar year across the whole district regardless of how you space them. These are the limits people are least aware of, because they only bite on returning riders." },

  { kind: "table", caption: "Stay limits in practice", head: ["Scenario", "Compliant", "Why"], rows: [
    ["14 nights, then 25 miles away for the next stay", "Yes", "Meets both the day limit and the typical reset distance"],
    ["14 nights, move 1 mile, another 14 nights", "No", "Same area — the clock never reset"],
    ["10 nights, leave for a week, 10 more nights", "No", "20 days inside a rolling 28-day window"],
    ["7 nights, 25 miles away, 7 more nights", "Usually yes", "Reset distance met; check for an annual district cap"],
    ["14 nights in a designated 5-day-limit area", "No", "District limit overrides the national default"],
  ]},

  { kind: "h2", text: "The Motor Vehicle Use Map, and why it governs Forest Service ground" },

  { kind: "p", text: "On national forest land there is a document that outranks every map app and every general forest map: the Motor Vehicle Use Map, universally shortened to MVUM. It is issued per forest, updated annually, and it is the legally operative statement of which roads are open, to what class of vehicle, and during which months." },

  { kind: "p", text: "It matters for dispersed camping specifically because most forests permit camping within a set distance of an open road — often 150 or 300 feet — and prohibit it entirely along roads that are closed or seasonally gated. A road that appears on a general forest map, on a paper atlas, or in a navigation app may be closed on the MVUM, in which case camping alongside it is not permitted regardless of how established the pullout looks." },

  { kind: "p", text: "MVUMs are free, published by each forest, and available as PDFs. They are not attractive documents and they are not designed for casual reading, which is precisely why so few people consult them. Learning to read one is the single highest-value skill in this whole subject." },

  { kind: "h3", text: "What the symbols tell you" },

  { kind: "ul", items: [
    "Road class — whether it is maintained for passenger vehicles or requires high clearance. These look identical on a general map and are entirely different decisions in a long-wheelbase vehicle.",
    "Seasonal dates — many roads are open only between specified dates, and those dates are enforced by a gate rather than a sign.",
    "Vehicle type — some roads are open to highway-legal vehicles only, others to off-highway vehicles as well, and a few to neither.",
    "Dispersed camping corridors — some forests mark the specific roads along which dispersed camping is permitted, and the absence of that marking means it is not.",
  ]},

  { kind: "key", text: "A legal boundary is not a passable road. Public land data tells you where camping is permitted. It says nothing about washouts, locked gates, fire closures or the clearance the last two miles demand. Those are conditions, and conditions only come from people who were recently on that road." },

  { kind: "h2", text: "Fire restrictions, which change faster than anything else" },

  { kind: "p", text: "Fire restriction is the rule most likely to have changed since you last checked, and the one with the most serious consequences for getting it wrong. Restrictions are issued at district level, often with a few days' notice, and they escalate through stages." },

  { kind: "table", caption: "Typical fire restriction stages", head: ["Stage", "Generally prohibited", "Generally still permitted"], rows: [
    ["No restrictions", "—", "Campfires in existing rings, stoves, generators"],
    ["Stage 1", "Campfires outside developed sites, smoking outside a vehicle", "Petrol and propane stoves with a shutoff valve"],
    ["Stage 2", "All open flame, generators, chainsaws, driving off established roads", "Stoves with a shutoff, in some districts only"],
    ["Area closure", "All entry, including dispersed camping", "—"],
  ]},

  { kind: "p", text: "The practical implication for planning is that a route built around campfires is fragile between roughly June and October across most of the West. A route built around a stove with a shutoff valve survives Stage 1 and often Stage 2, which is a meaningful difference across a long season." },

  { kind: "note", text: "Area closures are the ones that ruin plans, because they remove ground entirely rather than restricting an activity on it. They are also the least visible: a closure issued on Tuesday will not appear in most apps by Friday." },

  { kind: "h2", text: "Where you may actually put the vehicle" },

  { kind: "p", text: "Assuming the ground is open, the stay limit is clear and no fire restriction applies, there remains the question of where specifically to stop. The rules here are simpler and are the ones most often broken casually rather than deliberately." },

  { kind: "h3", text: "Use ground that is already disturbed" },

  { kind: "p", text: "Established sites — compacted ground, an existing fire ring, no live vegetation underneath — absorb another vehicle without further damage. Fresh ground does not. Most agencies now require using existing sites where they exist, and where they do not, require staying on durable surfaces such as rock, gravel or dry grass." },

  { kind: "p", text: "This is not only a rules question. Dispersed camping permission is withdrawn area by area when ground gets visibly worn, and areas that lose it rarely get it back. The practice is unusually fragile as a permission because it depends on the land not showing that it happened." },

  { kind: "h3", text: "Distance from water" },

  { kind: "p", text: "Nearly every district requires camping at least 100 to 200 feet from any water source — streams, lakes, springs, stock tanks. The reasons are water quality and wildlife access, and this is one of the more actively enforced rules because the damage is visible and immediate." },

  { kind: "h3", text: "Distance from the road" },

  { kind: "p", text: "Forest Service districts commonly set a maximum distance from an open road — 150 or 300 feet — beyond which you are driving cross-country, which is prohibited. The rule is a maximum, not a minimum: you must be within it, not beyond it." },

  { kind: "h3", text: "Distance from developed sites" },

  { kind: "p", text: "Most districts prohibit dispersed camping within a mile or so of a developed campground, trailhead or day-use area. The intent is to prevent people from using facilities they have not paid for, and it is enforced most consistently near popular trailheads." },

  { kind: "h2", text: "Waste, and the rule that decides the future of this" },

  { kind: "p", text: "Human waste handling is the single issue most likely to determine whether dispersed camping remains broadly permitted over the next decade. Land managers cite it more than any other factor when closing areas." },

  { kind: "ul", items: [
    "Carry it out where required. An increasing number of high-use areas now mandate a portable toilet system or waste bags, and check for them.",
    "Where burial is still permitted, it means a proper cathole — six to eight inches deep, 200 feet from water, camp and trail, in soil rather than under a rock.",
    "Paper goes out with you regardless of local rules. It does not break down at the rate people assume, particularly in arid country.",
    "Grey water is not neutral. Dispose of it well away from water sources and scatter it rather than pouring it in one place.",
    "A cassette toilet or composting system removes the entire question and is the reason many long-season riders carry one.",
  ]},

  { kind: "key", text: "The single most useful habit is leaving a site cleaner than you found it, including litter that is not yours. Agencies make closure decisions on what a site looks like, not on who caused it." },

  { kind: "h2", text: "How enforcement actually works" },

  { kind: "p", text: "Enforcement varies enormously — from areas patrolled daily to districts where a ranger passes through twice a season. That variance is a fact rather than an argument, and it is worth being clear about why compliance still matters where enforcement is thin." },

  { kind: "p", text: "The realistic sequence when a rule is broken is a conversation first, a written warning second, and a citation third, with citations reserved mostly for resource damage, fire violations and refusal to move. Rangers are generally more interested in the ground than in the paperwork." },

  { kind: "p", text: "The stronger argument for compliance is structural. Every area that closes to dispersed camping closes because of documented impact, and each closure pushes more people onto the remaining open ground, which accelerates impact there. The pattern is well established across the West over the last decade. Compliance is not primarily about avoiding a citation; it is about the ground still being open in five years." },

  { kind: "h2", text: "Verifying a specific place before you drive to it" },

  { kind: "p", text: "General rules get you to a region. They do not tell you whether a particular road is passable this week, whether the gate is open, or whether the district issued a closure on Tuesday. That verification is a separate step and it is the one most often skipped." },

  { kind: "ol", items: [
    "Identify the managing agency and the specific district or field office. Not the state, not the general area — the office with rulemaking authority over that parcel.",
    "Pull the current MVUM if it is Forest Service ground, and check the road class and seasonal dates for the specific road number.",
    "Check the district page for current fire restrictions and any area closures. This is the item most likely to have changed since anything else you read.",
    "Confirm the stay limit and the reset distance for that district rather than assuming the fourteen-day default.",
    "Establish current conditions from someone who was recently on the road — washouts, gates, clearance, water availability. Nothing in the official record covers this.",
    "Plan the water carry before finalising the route. Water availability sets your maximum stay far more often than any regulation does.",
  ]},

  { kind: "p", text: "That last two steps are where the official record stops helping. Agencies publish rules and boundaries. They do not publish whether the creek was running last week or whether the road washed out in March, and both of those change the decision more than any regulation on this page." },

  { kind: "key", text: "This is the gap Vanism was built for. Every objective carries an access status and the date a rider last confirmed it on the ground, and anything not confirmed within eighteen months drops out of search rather than being shown with a caveat. A record without a date is an assertion; with a date it is evidence you can weigh yourself." },

  { kind: "h2", text: "Overnight parking that is not public land" },

  { kind: "p", text: "A large share of nights on a long route are not spent on federal ground at all. They are spent in transit — moving between regions, waiting out weather, or arriving somewhere at eleven at night. The rules governing those nights are entirely different, because they are private property or municipal ordinance rather than federal land policy." },

  { kind: "h3", text: "Retail and business lots" },

  { kind: "p", text: "Some national retail chains have historically permitted overnight parking at store discretion, and a meaningful number of individual locations no longer do. The decision belongs to the store manager and is frequently overridden by a municipal ordinance the manager cannot waive. The reliable procedure is to ask inside rather than to assume, and to accept the answer without negotiating." },

  { kind: "p", text: "Where permission is given, the expectation is unambiguous and unwritten: arrive late, leave early, park at the edge of the lot away from the entrance, put nothing outside the vehicle, and buy something. Awnings, chairs, levelling blocks and generators are what get individual locations closed to everyone." },

  { kind: "h3", text: "Truck stops and rest areas" },

  { kind: "p", text: "Truck stops generally tolerate overnight parking, but the car section is the correct place for it — occupying a truck space costs a driver who is legally required to stop somewhere they can. Rest area rules are set by state and range from an explicit overnight allowance to a posted limit of a few hours, and the posted limit is what governs." },

  { kind: "h3", text: "Casinos, fairgrounds and municipal lots" },

  { kind: "p", text: "Casinos in several states actively welcome overnight parking, sometimes with a designated area and occasionally with hookups for a nominal fee. County fairgrounds are widely underused and frequently allow overnight stays for a small charge outside event weeks. Some small towns maintain a free municipal lot or park specifically to draw travellers into local businesses, and these are among the better options anywhere on a long route." },

  { kind: "h3", text: "Trailhead parking" },

  { kind: "p", text: "Trailhead overnight parking is a genuinely mixed case. Many trailheads on Forest Service and BLM land permit it, and it is often the most convenient legal option in mountainous terrain. Many others prohibit it explicitly, and the prohibition is usually posted. Trailheads inside national parks almost never permit it. Where it is allowed, the same distance-from-developed-site rule may still apply to camping as distinct from parking, and the two are not the same thing in the eyes of most districts." },

  { kind: "note", text: "The general principle across all of these: parking overnight is usually tolerated, camping usually is not. The distinction the enforcement officer draws is whether anything was outside the vehicle. Stay inside, put nothing out, and the question rarely arises." },

  { kind: "h2", text: "What the road class actually demands" },

  { kind: "p", text: "Two roads that look identical on a general map can be a maintained gravel highway and a rutted track that will strand a long-wheelbase vehicle. Road class on the MVUM is the only place this distinction is stated, and reading it correctly is what separates a planned arrival from a recovery." },

  { kind: "table", caption: "Road class and what it means in practice", head: ["Class", "Surface", "Realistic requirement", "What catches people out"], rows: [
    ["Maintained, passenger", "Graded gravel or dirt", "Any vehicle in dry conditions", "Washboard severity, not passability — it slows you far more than expected"],
    ["High clearance", "Rutted, rocky, or with drainage crossings", "Genuine clearance; two-wheel drive often fine", "Rut depth increases through a season and is worst late in the year"],
    ["Four-wheel drive", "Loose, steep, off-camber, or sandy", "Low range, appropriate tyres, recovery gear", "Sand late in the day when the surface is loose and hot"],
    ["Seasonal", "Any of the above, gated part of the year", "Timing more than capability", "Gate dates move with snowpack and are published later than they open"],
  ]},

  { kind: "p", text: "The specific failure mode worth naming is commitment. Forest roads narrow as they climb and frequently offer no turning point for miles. A long-wheelbase vehicle that reaches a section it cannot pass may face several miles in reverse, and that is a materially worse situation than not attempting the road. Establishing where the last turning point is before starting up is the habit that prevents it." },

  { kind: "p", text: "Rain changes every class by at least one step, and clay-based surfaces change by more than that. A road that was a comfortable passenger-vehicle drive on Tuesday can be impassable on Wednesday and back to comfortable on Friday. This is the condition most poorly captured by any static data source and the one riders report on most often." },

  { kind: "h2", text: "Seasonality, and when ground is actually usable" },

  { kind: "p", text: "The calendar constrains dispersed camping more tightly than the regulations do, and the constraints differ by elevation rather than by latitude. A site at 9,000 feet in Colorado and one at 9,000 feet in Montana have far more in common than the Colorado site has with one at 5,000 feet forty miles away." },

  { kind: "table", caption: "Elevation bands and usable windows", head: ["Band", "Typical window", "Limiting factor", "Planning note"], rows: [
    ["Low desert, under 3,000 ft", "October to April", "Summer heat, genuinely dangerous rather than uncomfortable", "Shade is nonexistent; the vehicle is the only shelter"],
    ["High desert, 3,000-6,000 ft", "March to November", "Wind and overnight cold at the shoulders", "The widest usable window of any band"],
    ["Montane, 6,000-9,000 ft", "June to October", "Snowpack and gated roads", "Gate dates move annually and open later than published"],
    ["Subalpine, above 9,000 ft", "July to September", "Snow, and overnight freezing even midsummer", "Shortest window; weather turns fastest"],
  ]},

  { kind: "p", text: "The practical consequence is that a long season is built by moving between bands rather than between states. Riders who plan north-to-south run into weather; riders who plan by elevation generally do not. Following the usable window up through spring and back down through autumn is the shape most experienced routes take, and it is not obvious from any map." },

  { kind: "p", text: "The first fortnight after a seasonal gate opens is consistently reported as the best conditions and the fewest vehicles of the entire year for montane ground. It is also the hardest window to plan for, because the date is not published in advance and moves by several weeks between years." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "Everything above is the general framework, and the general framework is wrong somewhere in every state. Districts set their own limits. Field offices issue their own restrictions. A national figure quoted confidently is exactly the kind of thing that gets someone a citation while insisting they read it on a website." },

  { kind: "p", text: "The district office is the authority. It is a phone call, it is usually answered, and the person answering deals with this question daily. Ten minutes there beats any amount of reading, including this." },
];
