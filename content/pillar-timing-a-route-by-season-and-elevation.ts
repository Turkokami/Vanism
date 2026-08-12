import type { Block } from "./blocks";

/** Timing a route by season and elevation -- Vanism pillar. */
export const PILLAR_TIMING_A_ROUTE_BY_SEASON_AND_ELEVATION: Block[] = [
  { kind: "key", text: "Elevation is a second calendar laid over the first: snow lingers high into July while the low desert is already lethal, so you climb as the season warms and drop as it cools. Time a run by band and by regional hazard window -- monsoon and flash flood in the Southwest, fire and smoke in the mountain West, mud and gated roads in spring, snow and pass timing in the high country -- and the shoulder seasons open up as the reward. The framework here gets you to the right month; the current snowpack, closure and conditions for a specific district beat every general figure on this page, including these." },

  { kind: "p", text: "Most people plan a long route by geography -- draw a line across a map, set dates against the places on it. That works until the first week, when the pass is still gated by snow or the desert leg lands in July and the vehicle is the only shade for forty miles. Geography is the wrong axis. The run earns out when you plan it by season and elevation instead: by when ground is usable, not by where it sits." },

  { kind: "p", text: "The controlling idea reorganises everything downstream. Elevation acts as a second calendar: a site at 10,000 feet runs two to three months behind the valley below it. Snow that cleared the low country in March is still on the high passes in June, and heat that makes the low desert dangerous in summer is comfortable at 8,000 feet the same week. Read both calendars together and a good run stops being a straight line and becomes a climb through spring and a descent through autumn." },

  { kind: "h2", text: "Elevation is a second calendar" },

  { kind: "p", text: "Temperature drops with height at a fairly steady rate -- roughly 3 to 5 degrees Fahrenheit per thousand feet, more in dry air. The useful translation is not the temperature but the delay it imposes: every few thousand feet you climb sets the calendar back by weeks. A montane road that is a mud trench in May is prime in July and gated again by November." },

  { kind: "p", text: "The general rule: low ground is a cool-season objective, high ground a warm-season one, and the middle band the widest and most forgiving. Where the rule stops being reliable is aspect and latitude. A north-facing slope holds snow weeks longer than a south-facing one at the same height, and a Montana subalpine basin opens later and closes earlier than a Colorado one at identical elevation. Use the band as the first cut, then correct for which way the ground faces and how far north it sits." },

  { kind: "table", caption: "Elevation band vs when it is in season", head: ["Band", "Elevation", "In season", "Off season / hazard", "What limits the window"], rows: [
    ["Low desert", "Under 3,000 ft", "Nov to Mar", "May to Sep -- heat is dangerous, not merely hot", "Summer over 110F; no shade but the vehicle"],
    ["High desert", "3,000 to 6,000 ft", "Mar-May, Sep-Nov", "Jul-Aug heat; hard freezes deep winter", "Widest window; wind and shoulder cold"],
    ["Low montane", "6,000 to 8,000 ft", "May to Oct", "Mud in melt; early snow late Oct", "Snowmelt at the bottom, first snow at the top"],
    ["Montane", "8,000 to 9,500 ft", "Jun to early Oct", "Gated into Jun; snow returns Oct", "Seasonal gates that open later than published"],
    ["Subalpine", "9,500 to 11,000 ft", "Jul to mid-Sep", "Snowpack, then storms; freezes any night", "Shortest window; weather turns fastest"],
    ["Alpine", "Above 11,000 ft", "Late Jul to Aug", "Snow most of the year; early lightning", "A few weeks; not a place to be caught late"],
  ]},

  { kind: "p", text: "Read that table as overlapping windows, not a schedule. On any week of the warm half of the year, some band is in its prime, another is opening, and a third is closing. A run is built by hunting the band in season this week and moving to the next as the first goes off. That is the whole method in a sentence; the rest of this page keeps it from going wrong." },

  { kind: "h2", text: "Climb as it warms, drop as it cools" },

  { kind: "p", text: "The shape that falls out is a climb through spring, a high-country stay through the hottest weeks, and a descent through autumn. You follow the melt uphill and the freeze back down. Riders who plan north-to-south run into weather -- the south warms before the north thaws. Riders who plan by elevation stay in the usable band the whole way." },

  { kind: "p", text: "In practice you start low. The high desert and low montane come into season first, March to May depending on the year and aspect. As those bands heat through June, you climb into the montane and subalpine, just shedding snow as the low country turns uncomfortable. You spend peak summer high, where the heat that is dangerous below is a warm afternoon. Then, as the first storms reach the high passes in late September, you drop -- through the montane, into the high desert for its second window, and down to the low desert as it cools into winter." },

  { kind: "p", text: "This is a circuit, not a line, which is why the seasons cluster treats a route as a run through bands rather than through states. The map barely changes; the elevation profile changes constantly. That is the part no atlas shows, and the part worth planning at the desk." },

  { kind: "note", text: "The gradient is not symmetric. Spring melt is slow and uneven -- a warm week opens ground, a cold snap shuts it again -- so plan the climb with slack. Autumn cooling is faster and more decisive: the first serious high-country storm can close a pass for the year with little notice, so plan the descent to run ahead of it, not to test it." },

  { kind: "h2", text: "Reading a snowpack and the closure window" },

  { kind: "p", text: "The number that governs when high ground opens is snowpack, and it is measured well enough that you do not have to guess. In the western United States the metric is snow water equivalent -- SWE, the depth of water the snow at a site would yield if it melted -- reported as a percent of the long-term normal for the date, collected automatically at hundreds of remote SNOTEL stations and published daily. A basin at 140 percent of normal on April 1 opens weeks later than the same basin at 70 percent, and the difference is knowable in advance." },

  { kind: "p", text: "SWE converts a vague sense of a heavy or light winter into a directional read on the gate dates. It does not give you the date -- that depends on the melt-out rate, which depends on temperature, dust and aspect. But it tells you whether the year is running early or late, which is exactly the correction the elevation table needs." },

  { kind: "table", caption: "Reading April 1 snowpack for route timing", head: ["SWE vs normal", "What it signals", "Effect on opening", "Planning response"], rows: [
    ["Under 70%", "Light winter; early, fast melt", "Passes and gates open early", "Climb 1-3 weeks ahead of a normal year; watch for an early fire season"],
    ["70-90%", "Slightly below normal", "Near-average, leaning early", "Plan to published dates; hold a week of slack"],
    ["90-110%", "Near normal", "Average opening", "Use historical gate dates as the working assumption"],
    ["110-130%", "Above normal", "Late; melt lingers on north aspects", "Push the high leg 1-3 weeks later; expect soft, wet roads"],
    ["Over 130%", "Heavy winter", "Weeks late; some not until mid-Jul", "Build the high leg for late summer; keep a lower alternate"],
  ]},

  { kind: "p", text: "The closure window is the other half. High roads and passes are gated on both ends -- a spring opening set by when crews can clear and the road is stable, an autumn closing set by the first sustained snow. The published opening is a target and routinely optimistic; crews open when the ground is ready. The closing is often not a date but a storm. Treat the published opening as the earliest plausible date and add slack; treat the published closing as a suggestion the weather can override early." },

  { kind: "note", text: "A heavy snow year does more than delay the opening. It leaves soft shoulders, washed culverts and downed timber that crews clear over weeks after the gate is technically open. The first passable date and the first comfortable date can be a fortnight apart, and only someone recently on the road knows which one today is." },

  { kind: "h2", text: "Regional hazards carve holes in the calendar" },

  { kind: "p", text: "The elevation calendar tells you when a band is thermally usable. It does not account for the regional hazards that make otherwise-open ground a bad place to be at a particular time of year. Four dominate western planning, each tied to a region and a set of months, and each able to close ground the temperature says is fine." },

  { kind: "table", caption: "Hazard season by region and month", head: ["Region", "Jan-Mar", "Apr-Jun", "Jul-Aug", "Sep-Oct", "Nov-Dec"], rows: [
    ["Desert Southwest", "Prime", "Prime, heat building", "Monsoon: flash flood, lightning", "Monsoon tail, then prime", "Prime"],
    ["Great Basin", "Cold, wind", "Mud, then prime", "Heat, dust, dry lightning", "Prime", "Cold, wind"],
    ["Rocky Mountain West", "Snow, closed", "Mud, gates closed", "Fire, smoke, storms", "Prime, then first snow", "Snow, closed"],
    ["Northwest interior", "Snow, rain", "Mud, late gates", "Fire and smoke, driest weeks", "Prime, then rain returns", "Rain, snow"],
    ["Sierra Nevada", "Snow, closed", "Late melt, gated passes", "Prime high, fire below", "Prime, then first storms", "Snow, closed"],
  ]},

  { kind: "p", text: "Read the hazard table against the elevation table. Where a band is in season and the region is clear, that is where a run belongs that week. Where a band is thermally open but the region is in a hazard window -- the Southwest in monsoon, the Rockies in fire season -- the ground is usable and still the wrong place to be. The next four sections take the hazards one at a time." },

  { kind: "h2", text: "Southwest monsoon and flash flood" },

  { kind: "p", text: "From roughly early July into September, moisture pushes north into Arizona, New Mexico and the southern Great Basin and stacks into afternoon thunderstorms. The summer heat that already closes the low desert is joined by two specific hazards: lightning, which arrives with little warning on exposed ground, and flash flooding, which is the one that kills. A storm miles away in higher terrain sends a wall of water down a wash that is dry and sunny where you stand. Dry washes and slot canyons are the trap -- appealing campsites precisely because water uses them." },

  { kind: "p", text: "The response is not to avoid the region but to change where you put the vehicle and when you move. Camp on high ground, never in a wash or a slot. Drive in the morning; storms build in the afternoon and low crossings flood fast. A crossing that was dry gravel at 10 a.m. can be a running channel at 4 p.m. and dry again by dark. The monsoon does not make the Southwest unusable in late summer -- it makes the low, exposed parts a morning-only proposition and the drainages off-limits." },

  { kind: "h2", text: "Mountain-West fire and smoke" },

  { kind: "p", text: "The mountain West and interior Northwest have a fire season that has lengthened over two decades and now runs roughly June or July into October, worst in the late-summer weeks when fuels are driest. It hits a route two ways. The direct one: fire closures remove ground entirely, gate roads, and can force a fast exit from a drainage with one road out. The second, underestimated one: smoke, which travels hundreds of miles from a fire nowhere near you and turns a clear high week into days of unhealthy air with no flames in sight." },

  { kind: "p", text: "Smoke is harder to plan for because it is not tied to your ground. A run can be well clear of any fire and still be socked in from three states away, and the air can flip in a day as the wind shifts. No seasonal table predicts it; it is a current-conditions problem. Keep the fire-season legs flexible, hold an alternate region in reserve, and treat air quality as a daily check. A route built rigidly through the interior West in August is betting against smoke, and over a long season that is a bet you lose." },

  { kind: "h2", text: "Spring mud season and road closures" },

  { kind: "p", text: "Between winter and summer is a distinct season that does real damage to plans: mud season. As snow melts, the ground it leaves is saturated, and dirt and clay roads firm in July turn to grease. Many agencies gate roads through this window to prevent the deep ruts a single vehicle carves into soft ground -- damage that lasts years and gets roads closed longer. Spring closures are as often about protecting the roadbed as about snow still on it." },

  { kind: "p", text: "Mud season is worst in the foothill and montane bands, roughly April into June, and slides later in a heavy snow year. Clay is the specific hazard: a clay road comfortable when dry becomes impassable within an hour of rain and can strand a long-wheelbase vehicle that had no trouble on the way in. Let the low ground dry before committing, check whether the roads you need are still under a seasonal gate, and treat any clay surface in spring as a decision made the morning of, not the week before." },

  { kind: "h2", text: "High-country snow and pass timing" },

  { kind: "p", text: "The last hazard is the one the elevation calendar is most directly about: snow, on the high passes and the roads that cross them. In spring, passes stay gated until crews clear them and the roadbed is stable -- later than the posted target in a normal year, weeks later in a heavy one. In autumn, the first sustained storm can close a pass for the season with a few days of notice or none. The high country is the shortest window and the least forgiving of a late arrival or a slow exit." },

  { kind: "p", text: "The specific failure is being high when the season turns. A pass that closes behind you can add hundreds of miles of detour or leave a drainage with no open exit. The habit that prevents it is planning the descent to run ahead of the first storms rather than test them, and knowing how the specific passes a run depends on close -- some on a date, some on a storm, and the difference matters. Carry the retreat in the plan before you climb." },

  { kind: "table", caption: "The four western hazard seasons at a glance", head: ["Hazard", "Region", "Peak months", "Effect on a route", "Planning response"], rows: [
    ["Monsoon / flash flood", "Desert Southwest, southern Great Basin", "Jul to Sep", "Floods washes and low crossings; lightning on exposed ground", "Camp high, out of drainages; drive mornings"],
    ["Fire and smoke", "Mountain West, interior Northwest", "Jun/Jul to Oct", "Closures and gated roads; smoke from hundreds of miles off", "Keep legs flexible; hold an alternate; check air daily"],
    ["Mud season", "Foothill and montane bands", "Apr to Jun", "Greases clay roads; gates protect soft beds", "Let ground dry; decide clay roads the morning of"],
    ["High snow / passes", "Subalpine and alpine, all ranges", "Oct to Jun at the shoulders", "Gates the high country late; closes passes early", "Add slack to openings; descend ahead of first storms"],
  ]},

  { kind: "h2", text: "The shoulder seasons are the reward" },

  { kind: "p", text: "All of it points at the same payoff. The best conditions on public land are almost never in the peak weeks everyone targets. They are in the shoulders -- the window just after a band opens and just before it closes, when the weather has settled but the crowds and the hazards have not fully arrived or have already left. They are narrow, they move year to year, and they are the direct reward for planning by elevation rather than the calendar on the wall." },

  { kind: "p", text: "The clearest example is the fortnight after a seasonal gate opens in early summer. It is consistently reported as the best conditions and the fewest vehicles of the entire year for montane ground -- snow gone, roads firm, water running, air not yet smoky. It is also the hardest to hit, because the opening date is not published in advance and moves by weeks between years. That is the trade: the best ground is gated behind timing you cannot fix in advance and have to read as it happens." },

  { kind: "ul", items: [
    "Spring in the high desert, roughly March to May -- after the winter cold, before the summer heat, the widest comfortable window of any band.",
    "The first two weeks after a montane gate opens: firm roads, running water, no smoke yet, a fraction of the July traffic.",
    "Late September in the mountains, after the fire season eases and before the first snow, when the air clears and the roads still hold.",
    "Autumn in the high desert, its second window, as the heat breaks and before the deep-winter wind sets in.",
    "The low desert in November, coming into its own season as everything above it closes for the year.",
  ]},

  { kind: "p", text: "None of these is on a fixed date. Each opens when conditions say so, which is why they reward planning by condition and punish planning by a locked itinerary." },

  { kind: "h2", text: "Match the run to conditions, not an itinerary" },

  { kind: "p", text: "The practical conclusion is a way of holding a plan rather than a plan itself. A run timed by season and elevation is a sequence of bands and windows with slack between them, not a spreadsheet of dated reservations. The itinerary is a hypothesis about a normal year; the conditions are the fact. When they disagree, the conditions win." },

  { kind: "ol", items: [
    "Set the skeleton by band, not place: which elevation you intend to be in each month, following the melt up in spring and the freeze down in autumn.",
    "Overlay the regional hazard windows and note where a band is thermally open but a hazard makes it the wrong place that week.",
    "Read this year against normal: pull the April 1 snowpack for the ranges you plan to climb and shift the high legs earlier or later to match.",
    "Build slack at the transitions -- a week of give where you climb into a band that may open late, and margin to descend ahead of the first autumn storms.",
    "Keep an alternate band or region in reserve for the fire-season legs, where smoke can make the primary choice unusable with a day of notice.",
    "Confirm the specifics before each leg -- gate status, closures, air quality, road conditions -- and reorder the sequence when the current picture disagrees with the plan.",
  ]},

  { kind: "h2", text: "Where the framework stops and the record begins" },

  { kind: "p", text: "The framework here gets you to the right month and band. It cannot tell you whether the gate you need opened on schedule, whether a fire two states away has put smoke over your high leg, or whether last night's storm greased the clay road in. Those are conditions, and conditions are not in any general table, here or anywhere that publishes averages." },

  { kind: "p", text: "The published record covers rules, boundaries and long-term normals well. It covers current conditions badly, because they change faster than any static source updates. A gate's target date tells you when crews hope to open; it does not tell you they did. This is where the official record stops helping and someone recently on the ground starts. Vanism records carry the date a rider last confirmed the objective, so a current condition reads as evidence with a timestamp rather than an average with none -- a note about where to look, not a substitute for the district's word." },

  { kind: "key", text: "Plan by band and window, not by geography and dates. Climb as the season warms, hold high through the hot weeks, and drop ahead of the first storms. Read the snowpack for whether the year is early or late, respect the four hazard seasons, and hunt the shoulder weeks. Then confirm the specifics against the current record before you commit fuel: the framework gets you to the month, and only the ground tells you the day." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "This is the general shape, and the general shape is wrong somewhere every year. Snowpack runs heavy and the high country opens a month late; a dry winter brings the fire season forward into June; a single storm greases a road that was firm at dawn. The bands and the hazard windows are a reliable first cut, and the first cut is not the decision." },

  { kind: "p", text: "The authority is local and current: the district office for gate status and closures, the ranger for what the road is doing this week, the air quality reading for whether the high leg is worth climbing today, and the snowpack report for how far off normal the year runs. Ten minutes on the current picture beats any amount of reading a framework, including this one. Use the page to know what to ask, then ask the sources that know today." },
];
