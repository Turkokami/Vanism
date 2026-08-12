import type { Block } from "./blocks";

/** Fire restrictions and campfire rules -- Vanism pillar. */
export const PILLAR_FIRE_RESTRICTIONS_AND_CAMPFIRE_RULES: Block[] = [
  { kind: "key", text: "Fire on public land runs through a stage system set at district level. With no restrictions you may build a campfire in an existing ring, clear of vegetation, never on peat or duff, and put it dead cold before you leave. Stage 1 bans open fire and restricts smoking; Stage 2 also bans stoves without a shutoff and often chainsaws and off-road driving; a full closure bans entry. A stove with a shutoff valve survives most restrictions, and a route built on campfires does not." },

  { kind: "p", text: "Fire is the one rule on public land where getting it wrong is not a citation and an apology. An escaped fire is measured in acres, in structures, in the cost of the response, and sometimes in lives. That is why fire rules are the most actively enforced and the fastest to change of anything a rider deals with on a run. A stay limit is counted after the fact; a fire restriction is checked at the trailhead, and the penalty for ignoring it is not theoretical." },

  { kind: "p", text: "This page covers the stage system and what each stage prohibits, why a stove with a shutoff valve keeps you cooking through restrictions that end campfires, where fire is allowed even when no restriction is in force, how restrictions get issued and how to check the current stage, what dead-and-down wood means, how to put a fire fully out, and what an escaped fire costs the person who lit it. Read the closing section first: the stage in force on the specific district on the specific day is the only number that governs, and it is not the one printed here. Treat fire as a capability you carry, not a comfort you assume." },

  { kind: "h2", text: "The stage system, and what each stage actually bans" },

  { kind: "p", text: "Fire restrictions across federal land follow a staged escalation. The names are broadly standardised -- Stage 1, Stage 2, and a full or area closure -- but the exact prohibitions are set by the issuing agency and district and vary at the edges. What follows is the working model that holds across most of the West. The district order is the authority, and it is short enough to read in full." },

  { kind: "table", caption: "Fire restriction stages and what each prohibits", head: ["Stage", "Open fire", "Stoves and smoking", "Equipment and driving", "Entry"], rows: [
    ["No restrictions", "Campfires permitted in existing rings, clear of vegetation", "Stoves permitted; smoking permitted", "Generators, chainsaws permitted per normal rules", "Open"],
    ["Stage 1", "All campfires, charcoal, and open flame banned outside developed, agency-provided rings", "Stoves with a shutoff valve permitted; smoking only inside a vehicle or a cleared 3-foot area", "Generally still permitted", "Open"],
    ["Stage 2", "All open flame banned, including in developed rings in most districts", "Stoves with a shutoff valve often still permitted; smoking often banned entirely outside a vehicle", "Chainsaws, generators, and off-road driving commonly banned or restricted to set hours", "Open"],
    ["Full / area closure", "Banned", "Banned", "Banned", "Closed -- no entry, including dispersed camping and day use"],
  ]},

  { kind: "p", text: "Two things catch people out. First, Stage 1 does not end cooking -- it ends campfires, and a rider running a stove barely notices it. Second, Stage 2 is where districts diverge most: some allow a shutoff stove throughout, some restrict it to set hours, a few ban it. That divergence is why the district order matters and a generic summary does not. Read the order for the stove line -- it is the line your evening depends on." },

  { kind: "note", text: "Stages do not always climb one at a time. A district under a fast-moving fuel and weather situation can jump from no restrictions straight to Stage 2, or to a closure, without pausing at the intermediate stage. Do not assume you will get a Stage 1 warning shot before a Stage 2 takes effect." },

  { kind: "h2", text: "Why a stove survives and a campfire does not" },

  { kind: "p", text: "The single most useful planning decision in fire season is to build your cooking and warmth around a stove with a shutoff valve rather than a campfire. This is not a preference -- it is the difference between a route that keeps functioning through a restriction and one that does not." },

  { kind: "p", text: "A stove with a shutoff valve -- petrol, propane, canister, or liquid-fuel -- is treated differently in law because it behaves differently in fact. A valve is instant control: close it and the flame is out, with no ember, no residual heat in a fuel bed, no way for the fire to persist once the valve is shut. Agencies write the shutoff-stove exception into Stage 1 and usually into Stage 2 precisely because a controllable flame is a categorically smaller risk than a fuel bed that stays hot for hours after you think it is done." },

  { kind: "p", text: "A campfire has none of that. It burns loose fuel on the ground, throws embers, holds heat in the soil long after the flames are gone, and depends entirely on the person tending it to stay contained. That is why it is the first thing every stage removes. A route built on campfires is fragile across the whole fire season -- roughly June to October in most of the West, longer in the Southwest. A route built on a shutoff stove holds through Stage 1 everywhere and Stage 2 in most districts." },

  { kind: "table", caption: "Fire capability by heat source across the stages", head: ["Heat source", "No restrictions", "Stage 1", "Stage 2", "Closure"], rows: [
    ["Campfire in existing ring", "Yes", "No", "No", "No -- area closed"],
    ["Charcoal / briquettes", "Yes", "No", "No", "No"],
    ["Wood or twig-burning backpacking stove", "Yes", "Often no -- it is an open flame with loose fuel", "No", "No"],
    ["Canister or propane stove with a shutoff valve", "Yes", "Yes", "Usually yes -- check the district order", "No"],
    ["Liquid-fuel stove with a shutoff valve", "Yes", "Yes", "Usually yes -- check the district order", "No"],
  ]},

  { kind: "note", text: "A wood-burning or twig stove is not a shutoff stove. It burns loose solid fuel and has no valve, so most Stage 1 and 2 orders treat it as open flame and ban it. If your cooking depends on gathering twigs, your cooking stops at Stage 1. Carry a canister or liquid-fuel stove as the primary, not as backup." },

  { kind: "h2", text: "Smoking, and why it climbs the stages with fire" },

  { kind: "p", text: "Smoking is an ignition source, so it climbs the stages alongside open flame. At Stage 1 most orders permit smoking only inside an enclosed vehicle or building, or within a cleared area at least 3 feet across. At Stage 2 many districts ban smoking outdoors entirely, leaving the inside of a vehicle as the only permitted place. The reasoning is a campfire in miniature -- a discarded cigarette in cured grass is a confirmed ignition source that starts many human-caused fires each season." },

  { kind: "p", text: "The practical rule is simple: in fire season, smoke inside the vehicle with the ash contained, and carry the butts out. A butt flicked into a dry verge is both a citation and, on the wrong day, the start of a fire that carries your liability." },

  { kind: "h2", text: "Where fire is allowed even without a restriction in force" },

  { kind: "p", text: "No restriction in force does not mean fire anywhere you like. The default rules for a legal campfire apply at all times, enforced independently of the stage system. A rider who lights a fire on open ground with no restriction posted can still be cited, and can still start the fire that closes the district for everyone behind them." },

  { kind: "h3", text: "Use an existing ring" },

  { kind: "p", text: "Where an established fire ring exists -- and on used dispersed ground one usually does -- that is where the fire goes. An existing ring means the ground beneath it is already burned sterile, the surrounding fuel already cleared, and no new scar created. Building a fresh ring beside an existing one is both needless damage and a common reason ground loses its fire permission. Where no ring exists, the safest reading in fire country is to run the stove and skip the fire entirely." },

  { kind: "h3", text: "Clear the ground and keep distance from vegetation" },

  { kind: "p", text: "A legal fire sits on bare mineral soil, rock, or gravel, with a cleared radius around it and nothing flammable overhead. The working numbers: a cleared area of at least 5 feet in every direction, no overhanging branches within about 15 feet, and distance from grass, brush, and logs that could carry flame away from the ring. Wind defeats all of it -- a fire safe in still air is not safe in a 15-mile-an-hour gust that lifts embers into dry grass downwind." },

  { kind: "h3", text: "Never on peat, duff, or root mats" },

  { kind: "p", text: "This is the rule that starts the fires people think they put out. Peat, duff -- the layer of decomposed needles and organic matter on a forest floor -- and root mats carry fire underground, smoldering below the surface for hours or days, invisible, then surfacing well away from the ring long after the rider has left. A fire built on duff can read dead cold on top while it creeps through the organic layer beneath. Fire goes on mineral soil or rock only. If you cannot see bare dirt or stone under it, do not build it there." },

  { kind: "table", caption: "Fire siting checklist", head: ["Check", "Requirement", "Why it matters"], rows: [
    ["Restriction stage", "No active stage bans your fire on this district today", "The stage in force overrides every default below"],
    ["Ring", "Use an existing agency or established ring; do not build a new one", "New rings scar fresh ground and get areas closed"],
    ["Surface", "Bare mineral soil, rock, or gravel -- never peat, duff, or root mat", "Organic ground carries fire underground and reignites"],
    ["Cleared radius", "At least 5 ft cleared of all flammable material around the ring", "Embers ignite fuel at the edge, not in the center"],
    ["Overhead", "No branches or canopy within roughly 15 ft above the fire", "Rising heat and sparks ignite anything overhead"],
    ["Vegetation distance", "Well clear of grass, brush, and logs that could carry flame", "Ground fuel spreads a contained fire in seconds"],
    ["Wind", "Calm; abandon the fire plan if wind is lifting embers", "Wind defeats every other precaution on this list"],
    ["Water on hand", "A full container and a shovel at the ring before lighting", "You cannot put a fire out with what you did not bring"],
  ]},

  { kind: "h2", text: "Dead-and-down wood, and what you may actually burn" },

  { kind: "p", text: "Where fires are permitted and gathering is allowed, the rule is dead and down: you may collect wood that is already dead and already on the ground. You may not cut standing trees, alive or dead, and you may not break limbs from anything still standing. The distinction is not arbitrary -- standing dead trees, snags, are wildlife habitat and count in the forest's ecology; downed wood that is already decomposing does not." },

  { kind: "ul", items: [
    "Dead and down means on the ground, not attached to anything living or standing. If you have to pull, snap, or cut it free, it is not down.",
    "Do not cut standing trees for firewood, including dead snags -- a separate and more serious violation than an ordinary fire-rule breach.",
    "Many high-use and alpine areas ban wood gathering entirely, even when fires are otherwise permitted, because the downed wood is a limited resource the ecosystem needs. Check the district rule before assuming you may gather.",
    "Where gathering is banned but fires are allowed, bring your own wood and buy it near where you will burn it -- moving firewood across regions transports insect pests and is restricted or illegal in many states.",
    "Burn only wood. A fire ring is not a trash incinerator; cans, foil, and packaging do not combust and are left behind for the next rider and the next ranger to find.",
  ]},

  { kind: "note", text: "Moving firewood is how tree-killing insects and pathogens spread -- emerald ash borer, spotted lanternfly, and several pine pests travel in transported logs. Buy firewood within roughly 50 miles of where you burn it, or gather dead-and-down on site where permitted. Do not carry a load of firewood across a state line." },

  { kind: "h2", text: "How restrictions are issued, and how to check the current stage" },

  { kind: "p", text: "Fire restrictions are issued at district level -- a specific national forest, a BLM field office, a ranger district -- as a formal order signed by the responsible officer. They are driven by measured conditions: fuel moisture, the energy release component, weather forecasts, resources already committed to fires elsewhere, and human-caused ignition counts. When those cross a threshold, an order takes effect on a stated date, commonly with a few days of notice between announcement and effect." },

  { kind: "p", text: "That short notice window is the whole problem for a rider. A restriction announced Tuesday to take effect Friday will not have reached most third-party apps, printed guides, or the recollection of the last person who camped there. The order exists on the district's own page days before it exists anywhere convenient. That is why the current stage is something you check at the source, on the day -- not something you remember from planning." },

  { kind: "ol", items: [
    "Identify the exact managing unit -- the specific national forest and ranger district, or the specific BLM field office -- not the state and not the general area. Fire orders are unit-specific and adjacent units are often on different stages.",
    "Go to that unit's official page and find its current fire restriction or fire danger notice. Federal units post the signed order and its effective date directly.",
    "Read the order itself, not a summary, for the stove line and the smoking line. Those are the two that vary between districts and the two most likely to affect your evening.",
    "Check the effective date and note that a higher stage may already be scheduled. An order announced today for Friday is the stage that governs your Friday.",
    "Confirm again close to arrival -- a stage can escalate between planning and the day you drive in.",
  ]},

  { kind: "p", text: "A national aggregator that maps state and federal restrictions is a reasonable first pass for seeing which regions are under restriction at all. It is not a substitute for the district order, because aggregators lag the source by exactly the notice window that matters most. Use it to narrow, then read the actual order for the unit you are headed to." },

  { kind: "h2", text: "Putting a fire fully out -- cold to the touch" },

  { kind: "p", text: "A fire is not out when the flames are gone. It is out when it is cold to the touch, and the gap between those two states is where escaped fires live. Coals hold usable heat for hours; a fire burned down and walked away from at dusk can be relit by wind at midnight. The standard is not visual -- it is your bare hand, held near the ash, feeling no heat." },

  { kind: "ol", items: [
    "Stop adding fuel well before you intend to leave, and let what is burning reduce to coal and ash. A fire you plan to drown should be low, not high, when you start.",
    "Drown it with water. Pour, do not splash, and pour far more than seems necessary. Soak the whole bed, not just the visible coals.",
    "Stir with a stick or shovel as you pour, turning the coals and ash so water reaches the material underneath. Embers hide below the surface and survive a surface soak.",
    "Add more water and stir again. Repeat until the hissing stops entirely -- hissing means live heat is still meeting water.",
    "Feel it with the back of your hand, held close above and then at the ash. If you feel any warmth, it is not out. Add water and stir until there is none.",
    "If you are genuinely out of water, mix dirt or sand thoroughly into the coals and stir until cold -- but this is a fallback, not the method. Never bury a live fire and leave; burial insulates coals, which can smolder for days.",
  ]},

  { kind: "note", text: "Cold to the touch is a literal instruction, not a figure of speech. If you cannot hold your hand in the ash, the fire is not out and you are not free to leave. Carry enough water to drown a fire completely before you light one -- a fire you cannot put out is a fire you should not have started." },

  { kind: "h2", text: "The cost of an escaped fire" },

  { kind: "p", text: "Every rule above comes down to one outcome: an escaped fire. Understand the cost, because it is unlike any other penalty on public land, and it attaches to the individual who lit the fire." },

  { kind: "h3", text: "The legal and financial cost" },

  { kind: "p", text: "A person whose fire escapes can be held liable for the cost of suppression -- hundreds of thousands or millions of dollars for a wildfire -- plus damage to property, infrastructure, and the land itself. This is not capped at what you can pay; courts have imposed restitution figures that follow people for the rest of their lives. On top of civil liability, a fire started in violation of a restriction is a criminal matter, misdemeanor or felony depending on outcome and jurisdiction, carrying fines and the real possibility of jail. Negligence is enough -- you do not have to intend harm to be liable for it." },

  { kind: "table", caption: "What an escaped fire can cost", head: ["Category", "Exposure", "Notes"], rows: [
    ["Suppression cost", "Tens of thousands to millions of dollars", "Billed to the responsible party; not limited to ability to pay"],
    ["Property and resource damage", "Full replacement and restoration cost", "Structures, timber, infrastructure, and rehabilitation"],
    ["Criminal charge", "Fines and possible incarceration", "Misdemeanor to felony depending on outcome and intent"],
    ["Restitution", "Court-ordered, often lifelong", "Wages can be garnished for decades"],
    ["The human cost", "Injury and death of others", "The cost that does not have a number and does not reverse"],
  ]},

  { kind: "h3", text: "The cost that has no number" },

  { kind: "p", text: "Firefighters are killed on fires that started as somebody's campfire. Residents are killed evacuating. Homes that took a lifetime to build are gone in an afternoon. That is the cost the fines and restitution stand in for, and the one that does not reverse. A rider who treats a fire casually is not risking a citation -- they are risking becoming the person who started the fire that killed someone. Every precaution here is cheap against that." },

  { kind: "h2", text: "Planning a run around fire season" },

  { kind: "p", text: "Fire restriction is the condition most likely to have changed since you last looked, so it belongs in the plan as a variable, not an assumption. Riders who run long summer seasons plan for the restriction to escalate, not to hold." },

  { kind: "ul", items: [
    "Build cooking and warmth around a shutoff stove as the primary. Carry enough fuel for the run, not for the nights you expect a campfire.",
    "Treat a legal campfire as a bonus, available only on the districts and days the stage allows one. Never plan a night that requires a fire to work.",
    "Check the stage at the source for each unit close to arrival, not once at the desk weeks ahead.",
    "Carry enough water to drown a fire completely before lighting one, and a small shovel or trowel for stirring and for a dirt fallback.",
    "Watch for the jump to a full closure, which removes the ground entirely rather than restricting an activity. A closure is the one that reroutes a run, and it moves fastest.",
    "Bring road intel back. The current stage a rider confirmed on the ground this week is worth more to the riders behind them than any figure printed weeks ago.",
  ]},

  { kind: "note", text: "A full area closure is the fire restriction that ruins plans, because it takes the ground off the board instead of limiting what you do on it. Closures are issued fast and lag in every third-party source. If a run depends on a single district in high fire season, carry an alternate that is not adjacent to it." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "Everything above is the general framework, and the general framework is not the order in force on your district today. Stages are set unit by unit. The stove line and the smoking line move between districts. A restriction announced three days ago will not be in any summary yet, including this one, and the stage that governs your fire is the one on the signed order for that unit on that date." },

  { kind: "p", text: "The district office is the authority. The current stage, the exact prohibitions, and any closure are posted on the managing unit's own page and confirmed by a phone call to the district or ranger office, answered by someone who deals with this daily. Check it close to arrival, read the order rather than a summary, and when the stage says no fire, the answer is no fire. The ground, and the people on it and behind you, are worth the ten minutes." },
];
