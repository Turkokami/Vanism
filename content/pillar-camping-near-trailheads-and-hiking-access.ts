import type { Block } from "./blocks";

/** Camping near trailheads and hiking access -- Vanism pillar. */
export const PILLAR_CAMPING_NEAR_TRAILHEADS_AND_HIKING_ACCESS: Block[] = [
  { kind: "key", text: "You can usually stage a dispersed camp within a few miles of a trailhead on Forest Service and BLM land, and many trailheads tolerate an overnight in the lot itself -- but a posted sign, a wilderness boundary or a permit area overrides that in an instant, and national park trailheads almost never allow it. Camp low enough to sleep and drive to the trail; treat the parked van as the weak point in the plan, not the strong one." },

  { kind: "p", text: "A basecamp is a dispersed camp positioned to reach a trail. The camp and the objective are two different decisions that riders routinely collapse into one: the best campsite is rarely at the trailhead, and the best trailhead is rarely a place you want to sleep. The skill is holding them apart -- staging a legal, level, sleepable camp within striking distance of an access point that may sit thousands of feet higher, then moving between them cleanly." },

  { kind: "p", text: "This matters because the rules that govern the camp and the rules that govern the trailhead are set by different offices and often point in opposite directions. A forest may permit dispersed camping along a road and prohibit it in the trailhead lot four miles up that same road. A wilderness boundary that changes nothing about the driving changes everything about where you may put the vehicle. Getting this right is the difference between a clean pre-dawn start and a ranger's knock at six." },

  { kind: "p", text: "This page covers which agencies allow overnight at or near trailheads and which prohibit it, how to stage a camp within reach of a trail, how to leave a van parked safely in bear country and away from it, water at trailheads, the acclimatisation problem when camp and hike differ by thousands of feet, and how to match a camp to the objective. It ends where every honest reference on this subject has to end: at the district office, which outranks all of it." },

  { kind: "h2", text: "Which agency governs the trailhead, and whether you can sleep there" },

  { kind: "p", text: "The first question at any trailhead is who manages it, because that sets the entire rule for overnight use. A trailhead is not a neutral piece of ground -- it is a developed site, and developed sites carry their own rules that are frequently stricter than the dispersed ground a mile back down the road. The four agencies you will meet most behave differently enough that assuming one behaves like another is the most common way riders get moved on or cited." },

  { kind: "table", caption: "Trailhead overnight rules by agency", head: ["Agency", "Overnight in the trailhead lot", "Camping at or near the trailhead", "What to check first"], rows: [
    ["US Forest Service", "Often tolerated; some districts post against it", "Dispersed camping usually pushed back from the lot by rule", "The trailhead sign and the district's dispersed-camping distance rule"],
    ["Bureau of Land Management", "Commonly permitted, especially at remote access points", "Generally allowed on surrounding BLM ground, not the lot itself", "Field office page and any posted restriction at the site"],
    ["National Park Service", "Almost never permitted; parking is day-use", "Prohibited -- backcountry camping is permit-only and away from roads", "Backcountry permit office; assume no overnight unless told yes"],
    ["State parks and state land", "Varies widely; many prohibit, some allow with a fee", "State-defined, frequently closed to roadside overnight", "State agency, not any federal source"],
    ["Wilderness area (any agency)", "Trailhead lot may be fine; the wilderness beyond is not for vehicles", "No vehicles past the boundary; foot and permit rules take over", "Wilderness permit requirement and the boundary location"],
  ]},

  { kind: "p", text: "Forest Service trailheads are the mixed case that generates most of the confusion. Many tolerate an overnight in the lot, particularly at remote access points where the alternative is a rider driving tired in the dark. Others post a sign explicitly prohibiting overnight parking or camping, usually because the lot is small, popular, or has had problems. The sign governs. Where there is no sign, the district's general rule about camping a set distance from a developed site still applies, and a trailhead is a developed site -- so parking overnight is one thing and setting up a camp in the lot is another, and the two are not treated the same." },

  { kind: "p", text: "National Park Service trailheads are the trap. People assume a park trailhead behaves like a forest trailhead and it does not. Overnight parking in a park is generally day-use only; sleeping in the lot is prohibited nearly everywhere in the system, backcountry camping is permit-only and staged away from roads, and enforcement is markedly more active than on BLM ground. If your objective is inside a national park, plan to sleep outside the boundary and drive in, or hold a backcountry permit -- there is rarely a third option." },

  { kind: "note", text: "A wilderness boundary changes the rule without changing the road. You may drive to the boundary and often park and even sleep at the trailhead lot outside it, but no vehicle -- not a bike, not a cart -- goes past the line, and many wilderness areas require a permit for overnight foot travel. The boundary is frequently unmarked on general maps and marked only by a small sign on the trail itself." },

  { kind: "h2", text: "Overnight in the lot versus camping near it -- the distinction that gets enforced" },

  { kind: "p", text: "The enforcement officer's question at a trailhead is almost always the same: is anything outside the vehicle? A van parked with everyone inside, nothing set out, arriving late and leaving early, reads as overnight parking -- which is widely tolerated. The same van with an awning out, chairs, a table and a stove reads as camping -- which at a developed site is widely prohibited. The distinction is not pedantic; it is the actual line most districts draw, and it is the one you control." },

  { kind: "p", text: "This is why the reliable pattern is to camp on dispersed ground back down the road and use the trailhead lot only for the parking it is meant for. Where a district permits dispersed camping within, say, 150 to 300 feet of an open forest road, you stage there -- a mile or two below the trailhead -- and drive up on the morning of the hike. You get a level, legal, quiet camp and a short pre-dawn approach, and you never test the developed-site rule at all." },

  { kind: "p", text: "There are exceptions worth naming. Some remote trailheads, particularly on BLM land and at the end of long forest roads, are effectively dispersed sites that happen to have a trail leaving them, and overnight there is genuinely fine. The way to tell is the same as anywhere else: read the sign, know the district rule, and look at whether the ground is established. Where a trailhead has an obvious, long-used camping pullout beside it and no sign against it, it is usually what it looks like." },

  { kind: "h2", text: "Staging a camp within striking distance of the trail" },

  { kind: "p", text: "Striking distance is a function of the road, not the map distance. Four miles of graded gravel is fifteen minutes; four miles of rutted high-clearance track is forty and shakes the van apart doing it. The camp you want is the closest legal, level, durable site on a road you are willing to drive twice in a day -- once up tired in the dark is the test, not once down rested in daylight." },

  { kind: "p", text: "The practical staging distance depends on the start you need. A dawn start for a long objective wants a camp close enough that the drive does not eat the cool hours; a casual day hike tolerates more. The table below is a working guide for how close to stage against how early you plan to be walking." },

  { kind: "table", caption: "Staging distance against start time", head: ["Objective type", "Typical trail start", "Stage the camp within", "Reason"], rows: [
    ["Alpine peak or long ridge", "Before first light, 4-5 am", "15 minutes of driving", "Every minute of the cool early window matters; no room for a long approach drive"],
    ["Full-day hike, 8-12 miles", "6-7 am", "20-30 minutes", "A short drive is fine; you want to be walking before the day heats"],
    ["Half-day or out-and-back", "Flexible, mid-morning", "45 minutes", "The camp can prioritise a better site over proximity"],
    ["Multi-day backpack", "Late morning, one time only", "As far as needed for a good site", "You park once and walk in; drive time is paid once, not daily"],
  ]},

  { kind: "p", text: "Level matters more than proximity for the night before a hard day. A van that is not level costs sleep, and lost sleep costs more on the trail than ten minutes of morning driving ever will. Choose the flattest established site you can reach on a road you trust, even if it means a slightly longer approach. The rider who sleeps well two miles out beats the rider who slept badly at the trailhead every time." },

  { kind: "note", text: "Scout the approach road in daylight if you possibly can, on the drive in. Forest roads narrow and deteriorate as they climb toward trailheads, and a long-wheelbase vehicle that meets a section it cannot pass may have miles of reverse to a turning point. Knowing where the road gets marginal before you drive it tired in the dark is the whole game." },

  { kind: "h2", text: "When the access road is even open" },

  { kind: "p", text: "The trailhead you planned around may be unreachable for half the year, and the date it opens is not the date on last year's sign. Most high forest roads that lead to mountain trailheads are gated seasonally, and the gate dates move with snowpack -- a road posted to open in late May may stay locked into July after a heavy winter, and it commonly opens later than the published date rather than earlier. A basecamp built on reaching a trailhead behind a gate is a basecamp built on a date you have to confirm, not assume." },

  { kind: "p", text: "The practical consequence for a hiking objective is that the road, not the trail, is frequently the limiting factor early and late in the season. A trail may be walkable weeks before the road that reaches its trailhead is drivable, which is why the first fortnight after a gate opens is consistently the best combination of conditions and low traffic all year -- and the hardest window to plan, because nobody can tell you the date in advance. Late in the season the reverse bites: an early snow can close the gate behind you, and a rider who drove up in warm September can find the road gated on the way out." },

  { kind: "p", text: "Confirm the gate status before committing a day of driving to a high trailhead. The MVUM carries the seasonal dates for the specific road, but the operative fact -- whether the gate is actually open today -- comes from the district office or from someone who was recently on that road. This is the single item most likely to have changed since anything you read, and the one that turns a planned dawn start into a four-mile road walk to reach the trail you drove all that way for." },

  { kind: "h2", text: "Leaving the van parked while you are on the trail" },

  { kind: "p", text: "The parked van is the weakest point in a basecamp plan, and it is weak in two different ways at once: it is a target for break-ins, and in bear country it is a food-storage problem that can end with the vehicle damaged and the bear dead. Both are managed, not eliminated, and both reward a few minutes of discipline before you walk away for eight hours." },

  { kind: "h3", text: "Valuables and break-ins" },

  { kind: "p", text: "Trailhead lots are known targets precisely because thieves know the owners are gone for a predictable number of hours and out of earshot. The defence is to make the vehicle boring to look into. Nothing of value visible, nothing that signals a laptop or a wallet or a camera bag, and ideally nothing that signals the van is being lived in and therefore full of gear." },

  { kind: "ul", items: [
    "Take wallet, phone, keys and any documents with you on the trail -- the things you cannot replace in a day should never be in the lot.",
    "Move everything else out of sight before you arrive, not in the lot where anyone watching sees where it goes.",
    "Leave the glovebox and any visible storage open and obviously empty; a closed compartment invites a smashed window to check it.",
    "Do not hide a spare key on the vehicle. Break-in crews check the wheel wells and bumpers first.",
    "Park where there is foot traffic and sightlines if you can -- a busy trailhead is safer than an empty one, and the far dark corner is where windows get broken.",
  ]},

  { kind: "h3", text: "Bear country and food storage" },

  { kind: "p", text: "In bear country the parked van is a scent box, and a bear that learns a vehicle contains food will break into it -- peeling a door, shattering a window, destroying an interior for a cooler. In several national parks and forests, food storage rules are mandatory and enforced with citations, and in designated areas a hard-sided vehicle is not considered adequate storage at all; a bear-resistant locker or canister is required. Where the vehicle does count as storage, it only counts if the food is genuinely out of sight and the windows are up." },

  { kind: "table", caption: "Food storage at the trailhead by bear presence", head: ["Setting", "Storage rule", "What actually works", "Failure mode"], rows: [
    ["No bears / low activity", "None mandated", "Food out of sight is courtesy, not necessity", "Rodents and lot break-ins, not bears"],
    ["Black bear country (most forests)", "Store food secured; vehicle often counts", "Food in sealed containers, out of sight, windows up, no scent trail", "A cracked window or visible cooler; that is all it takes"],
    ["Designated bear areas / many parks", "Vehicle may NOT count; locker or canister required", "Use the provided bear box or a certified canister at the trailhead", "Assuming the van is enough where a sign says it is not"],
    ["Grizzly country", "Strict mandatory storage, actively enforced", "Certified storage only; treat every scented item as food", "Toiletries and trash left loose -- scent, not just food, draws them"],
  ]},

  { kind: "p", text: "The rule that catches people is that scent, not just food, is the trigger. Toothpaste, sunscreen, lip balm, trash, a used cooler that still smells -- all of it counts in grizzly country and much of it counts for black bears. The discipline is to treat the van the way you would treat a backcountry camp: everything scented secured, nothing out, and where a bear box is provided at the trailhead, use it rather than trusting the doors." },

  { kind: "h3", text: "Letting someone know your plan" },

  { kind: "p", text: "The single highest-value habit before walking away from the van is telling a specific person a specific plan: which trail, which objective, and when you expect to be back at the vehicle. A basecamp rider is often alone and out of cell coverage, and the gap between an injury and anyone knowing about it is the thing that turns a sprained ankle into a serious event." },

  { kind: "ol", items: [
    "Tell a named person your trailhead, your route, and a hard time by which you will contact them -- not a vague 'later today'.",
    "Give them a trigger: if they have not heard from you by that time, who to call. For most public land that is the county sheriff, who runs search and rescue, not the land agency.",
    "Leave the plan visible in the van as a backup -- trail name and expected return on a note on the dash helps if the sheriff reaches the vehicle before reaching you.",
    "Carry a satellite messenger for any objective beyond cell coverage; it collapses the reporting gap from hours to minutes and is the one piece of gear that changes outcomes.",
    "Close the loop when you are back. An unnecessary search launched because you forgot to check in is a real cost borne by volunteers.",
  ]},

  { kind: "h2", text: "Water at trailheads, and why you should assume there is none" },

  { kind: "p", text: "The reliable planning assumption is that a dispersed trailhead has no water. Developed campgrounds may have a spigot; dispersed access points on forest and BLM roads generally do not, and where a natural source exists near a trailhead it is seasonal and unreliable. Plan to arrive with all the water the camp and the hike need, and treat any source you find as a bonus rather than a resource." },

  { kind: "table", caption: "Water availability by trailhead type", head: ["Trailhead type", "Likely water", "Plan on", "Note"], rows: [
    ["Developed campground trailhead", "Often a spigot or pump", "Confirm it is on; many are seasonal and shut off in winter", "Potable, but do not assume it runs year-round"],
    ["Popular Forest Service trailhead", "Sometimes a pump, often nothing", "Carrying your own; verify before relying on it", "A pump on the map may be capped or broken"],
    ["Dispersed / remote trailhead", "None", "Full self-sufficiency in and out", "This is the default case for basecamp riders"],
    ["Trailhead near a creek or spring", "Seasonal surface water", "Filtering, and on it being dry by late summer", "Snowmelt-fed sources shrink fast after peak runoff"],
  ]},

  { kind: "p", text: "The figure that governs a basecamp is roughly one gallon per person per day for drinking and cooking at moderate temperatures, more in heat and at altitude where you dehydrate faster than you notice. A hard hiking day at elevation can push an individual well past that. A rider staging a two-night basecamp for a big objective should carry for the whole stay plus the hike plus a margin, because the nearest reliable refill may be the town you drove through to get there." },

  { kind: "note", text: "Any water you take from a creek or spring near a trailhead needs treating -- filter, chemical, or boil -- regardless of how clean it looks or how high the source is. Giardia does not care about elevation, and stock and wildlife use the same water above you. A source being cold and clear says nothing about whether it is safe." },

  { kind: "h2", text: "Elevation, and the acclimatisation problem baked into basecamping" },

  { kind: "p", text: "Basecamping creates an acclimatisation problem that ordinary camping does not, because the whole point is that the camp and the objective sit at different elevations -- often by thousands of feet. Where you sleep drives how well you acclimatise, and a rider who camps low for comfort and hikes high for the objective is doing the exact opposite of what altitude adaptation asks. This is a real physiological constraint, not a fitness question, and fit riders get altitude sickness precisely because fitness lets them ascend faster than they adapt." },

  { kind: "p", text: "The governing principle is that the body adapts to the altitude it sleeps at, not the altitude it visits. Above roughly 8,000 feet, the standard guidance is to gain no more than about 1,600 feet of sleeping elevation per night and to take a rest day every 3,000 feet of sleeping gain. A day hike to a high summit followed by a return to a low camp is generally safe because you do not sleep high -- but staging the camp itself high, to shorten the approach, is where riders push their sleeping elevation up faster than they should." },

  { kind: "table", caption: "Camp and hike elevation, and the acclimatisation call", head: ["Camp elevation", "Objective elevation", "Acclimatisation risk", "Sensible approach"], rows: [
    ["5,000 ft", "Day hike to 9,000 ft and back", "Low -- you sleep low", "Fine for most riders; hydrate and pace the climb"],
    ["8,000 ft", "Day hike to 12,000 ft and back", "Moderate -- high sleeping camp", "Spend a night at the camp before the big day; do not arrive and summit"],
    ["9,500 ft", "Summit above 13,000 ft", "High -- both camp and objective are high", "Stage a night or two lower first; ascend the sleeping elevation gradually"],
    ["Sea level to 10,000 ft same day", "Any hike at altitude", "High -- no adaptation at all", "Give it a night before anything hard; watch for headache and nausea"],
  ]},

  { kind: "p", text: "The practical move for a rider arriving from low country is to spend the first night at the camp doing nothing demanding, then take the objective on the second day. It costs a day and it is the cheapest insurance in the sport. The early signs of altitude sickness -- headache, nausea, poor sleep, breathlessness at rest -- are the body telling you to stop ascending, and the only reliable treatment is to descend. For a basecamp rider that option is always available: your bed can move downhill." },

  { kind: "key", text: "The van's real advantage in the mountains is that your sleeping elevation is negotiable. If altitude is hitting you, you do not push through it -- you drive down 2,000 feet and sleep there, then reassess. A camp you can relocate downhill in twenty minutes is a safety margin no tent basecamp has." },

  { kind: "h2", text: "Matching the camp to the objective" },

  { kind: "p", text: "A basecamp is chosen for the objective it serves, and different objectives want different camps. A single peak with a fixed trailhead wants a camp close to that trailhead. A region with several trails wants a central camp you keep for days and drive out from. A point-to-point traverse wants no fixed camp at all but a plan for the vehicle at each end. Naming the objective type first tells you what the camp needs to be." },

  { kind: "table", caption: "Objective type and the camp it wants", head: ["Objective", "Camp strategy", "Key constraint", "Watch for"], rows: [
    ["Single summit, fixed trailhead", "Stage close to that trailhead, one camp", "Proximity and a dawn start", "High sleeping elevation if the trailhead is high"],
    ["Trail cluster / multi-day area", "Central camp, keep it, drive out daily", "A good durable site you can hold for the stay limit", "The 14-day area limit and any annual district cap"],
    ["Point-to-point traverse", "Vehicle logistics at both ends, no held camp", "Getting back to the van", "Shuttle distance; a second vehicle or a long road walk"],
    ["Peak-bagging across a range", "Move camp band by band as you go", "Water carry and re-staging each move", "Reset distance rules if you keep relocating nearby"],
  ]},

  { kind: "p", text: "The traverse case deserves a flag because it is where the van's strength becomes a liability. A point-to-point hike ends miles from where it started, with the vehicle at the wrong end. Riders solve this with a second vehicle, a shuttle, a bicycle stashed at the far end, or a road walk back -- and each has to be planned before the hike, not discovered at the far trailhead at dusk. The clean out-and-back is the natural shape for a solo basecamp rider." },

  { kind: "p", text: "For a multi-day area camp, the stay limit governs how long you can hold the site. On most Forest Service and BLM ground that is 14 days in a rolling 28-day period, applied across the district rather than the individual site, so you cannot reset it by moving a mile to a better spot. A rider basecamping a region for a week is well inside that; a rider settling in for a full season needs the reset distance -- commonly 25 miles -- and needs to check for an annual cap on top of the rolling one." },

  { kind: "h2", text: "A basecamp checklist" },

  { kind: "p", text: "The checklist below is the sequence that turns a general plan into a specific, safe stay. It runs from confirming the ground to closing the loop after the hike, and it front-loads the two things riders most often skip: verifying the rules for the specific district, and telling someone the plan." },

  { kind: "table", caption: "Basecamp checklist", head: ["Stage", "Item", "Why it matters"], rows: [
    ["Before you go", "Identify the managing agency and district for both camp and trailhead", "They may differ and may have opposite overnight rules"],
    ["Before you go", "Confirm dispersed camping is allowed and the distance-from-trailhead rule", "A developed-site buffer often pushes the camp back from the lot"],
    ["Before you go", "Check the trailhead sign policy and any wilderness or permit boundary", "The sign and the boundary override the general rule"],
    ["Before you go", "Check fire restrictions and food-storage requirements for the area", "Both change fast and both carry citations"],
    ["Before you go", "Plan the full water carry -- camp plus hike plus margin", "Assume no water at a dispersed trailhead"],
    ["On arrival", "Scout the approach road in daylight; find the last turning point", "Forest roads deteriorate toward trailheads"],
    ["On arrival", "Stage a level, established, durable camp within your drive window", "Sleep quality beats proximity the night before a hard day"],
    ["Before the hike", "Tell a named person your route and a hard check-in time", "Closes the gap between injury and rescue"],
    ["Before the hike", "Secure valuables out of sight; take documents and keys with you", "The lot is a known target and you will be gone for hours"],
    ["Before the hike", "Store all scented items per the area's bear rule", "Scent, not just food, draws bears; a van may not count as storage"],
    ["After the hike", "Check in to close the loop; leave the site cleaner than found", "An unnecessary search is a real cost; closures follow visible impact"],
  ]},

  { kind: "ul", items: [
    "Camp low, hike high, and sleep at the elevation your body can handle -- the van lets you move your bed downhill if altitude turns on you.",
    "Park boring: nothing visible, nothing valuable left, foot traffic and sightlines over the empty dark corner.",
    "Assume no water at the trailhead and carry the whole stay, treating any source you find as a bonus.",
    "Read the sign before you sleep in a lot; a trailhead is a developed site and the sign outranks the general rule.",
  ]},

  { kind: "h2", text: "What this framework cannot tell you" },

  { kind: "p", text: "Everything above is the general shape, and the general shape is wrong somewhere in every forest. One district permits overnight at its trailheads and the next one over posts against it; one requires a canister where the last one counted the van; one gates the access road on a date that moved three weeks this year. A confident national figure is exactly the thing that gets a rider moved on while insisting they read it somewhere." },

  { kind: "p", text: "The authorities that actually govern your stay are the district office and the trailhead sign, and current conditions on the road and the trail. Call the district ranger station or field office for the rules -- the person answering handles this question daily and will tell you the trailhead policy, the storage requirement and the stay limit in one short conversation. Check the current MVUM for the specific road, and its seasonal dates. And confirm the road is passable and the water is running from someone who was recently on it, because the official record publishes rules and boundaries and never publishes whether the creek is dry or the gate is still locked. Ten minutes on the phone to the district beats any amount of reading, including this." },
];
