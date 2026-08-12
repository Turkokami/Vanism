import type { Block } from "./blocks";

/** Skiing and winter sports from the van -- Vanism pillar. */
export const PILLAR_SKIING_AND_WINTER_SPORTS_FROM_THE_VAN: Block[] = [
  { kind: "key", text: "A van makes a workable winter basecamp for resort laps and backcountry touring, on two conditions most people underestimate. First, the rig has to be a real cold-weather build -- a vented fuel-fired heater, a plan for the water wet gear dumps into the air, and a battery that will not fold in the cold; that is the winter pillar's subject, and it is not optional below freezing. Second, and this one is not about the van at all: leaving a resort boundary or touring the backcountry puts you in avalanche terrain, and staying alive there is training, a partner, and the day's forecast -- not a gear list and not a strong skier's instinct." },

  { kind: "p", text: "Winter turns the van from a place you sleep into a piece of life-support equipment. In summer a bad night is uncomfortable; in February at 8,000 feet, with wet boots, a dead battery, and a pass closing behind you, it is a genuine problem. The upside is real -- a plowed lot at the base of a lift buys first tracks and a short walk to the snow -- but it is earned by getting a short list of systems right, not by toughing it out." },

  { kind: "p", text: "There are two distinct games here, and they demand different things of the rig and of you. Resort laps mean sleeping in or near a ski-area lot, riding lifts inside a controlled boundary, and drying out overnight to do it again. Backcountry touring means skinning under your own power into terrain nobody controls or mitigates, where the mountain decides the risk. Most van winters are a mix, and that is fine -- as long as you are honest each morning about which one you are on, because the boundary rope is the line between a managed sport and an unmanaged one." },

  { kind: "p", text: "This page covers where you may sleep, the cold-weather rig problem in brief, drying gear, avalanche terrain as the life-safety matter it is, timing storms and pass closures, and staying warm and fed on short days. Temperatures are Fahrenheit. Local rules and the local avalanche forecast beat every general figure here." },

  { kind: "h2", text: "Sleeping at or near the resort" },

  { kind: "p", text: "The most valuable thing about a van in winter is waking up already there. But a resort lot is private property or a special-use permit on public land, not open ground, and whether you may stay the night is set by the resort. Knowing which policy you are under before dark is the whole game." },

  { kind: "p", text: "The categories run from a sanctioned overnight lot to a tow-enforced ban. The one that catches people out is snow removal: many lots must be cleared before dawn, and a plow at 4 a.m. does not check whether anyone is sleeping in the vehicles it needs to move." },

  { kind: "table", caption: "Overnight at a resort lot: reading the policy", head: ["Policy you find", "What it usually means", "The move", "What gets it revoked"], rows: [
    ["Designated overnight or RV lot", "Sanctioned, sometimes a fee or hookups", "Use it, register if asked, follow posted rules", "Ignoring the fee or the marked boundaries"],
    ["Tolerated in a specific outer lot", "Discretionary, low-profile expected", "Arrive late, park far out, nothing outside, leave early", "Awnings, chairs, generators, a scene in the lot"],
    ["Posted no overnight parking", "Prohibited -- often for snow removal", "Do not stay; find a legal spot nearby", "Staying anyway -- a tow when the plow comes"],
    ["Silent, no signage", "Unknown -- ask, do not assume", "Call the resort or ask a lot attendant", "Guessing wrong and getting woken or towed"],
    ["Tow-enforced ban", "Hard no, actively enforced", "Park elsewhere entirely", "Any overnight presence"],
  ]},

  { kind: "p", text: "When the signage is silent, ask and accept the answer without negotiating. A resort's guest services line or a lot attendant tells you in one sentence whether the outer lot is fine, and the call is cheaper than a tow. Where overnight is prohibited, the fallback is nearby public land, a legal town lot, or a paid campground open through winter." },

  { kind: "h2", text: "The etiquette of a resort lot" },

  { kind: "p", text: "Resort overnight access is a fragile permission that individual vans lose for everyone. Where you are tolerated the expectation is clear: arrive after the day crowd has gone, park at the far edge away from the lodge and lift lines, put nothing outside the vehicle, run no generator, and be packed and either skiing or gone before the morning operation needs the space. A lot that reads as a campground at 7:45, when paying customers arrive at 8, posts new signs by next season." },

  { kind: "note", text: "Snow removal overrides everything else, including a resort's goodwill. Lots get plowed on a schedule you do not know, often in the dark, and a vehicle in the plow's way is a problem regardless of any overnight policy. Park clear of where a plow must work, and understand that a knock on the window at 5 a.m. means move now, not in an hour." },

  { kind: "h2", text: "Sleeping at trailheads for touring" },

  { kind: "p", text: "Backcountry touring starts from a trailhead, and winter trailheads catch people out: many are not plowed. A Forest Service or BLM trailhead open for overnight parking in July may be under four feet of snow in January, with the last accessible spot wherever the county or resort stops clearing the road. The winter trailhead is often a plowed pass-road pullout, and where it sits moves with the snowpack." },

  { kind: "p", text: "Where a winter trailhead is plowed and overnight parking is allowed, it is often the best basecamp available -- quiet, free, a short skin from terrain. But the public-land distinctions still apply: parking overnight and camping are not the same act to an enforcement officer, some trailheads post against overnight use, and a Sno-Park or pass pullout may require a state winter-recreation permit in the window. Check the specific access point rather than assuming the summer rule holds." },

  { kind: "key", text: "Whether a given winter trailhead is plowed, open, and legal for an overnight the week you want it is exactly the kind of current condition the official record does not carry. An agency page tells you a trailhead exists and states the summer rule; it does not tell you the lot is plowed to three cars this week or that the gate closed after the last storm. Vanism records that access status with the date a rider last confirmed it on the ground, which is the difference between a spot you can count on and one you find blocked at 9 p.m. in a snowstorm." },

  { kind: "h2", text: "The cold-weather rig problem, in brief" },

  { kind: "p", text: "Winter attacks three systems in the van, and getting them wrong ranges from uncomfortable to fatal. This is the winter pillar's full subject; what follows is the short version so the skiing decisions make sense. The three are heat, the condensation the cold creates, and the battery -- and wet ski gear makes the middle one far worse than an ordinary winter night." },

  { kind: "table", caption: "The three systems winter attacks (see the winter pillar for depth)", head: ["System", "The problem", "The working answer", "Why skiing makes it worse"], rows: [
    ["Heat", "Keeping the cabin habitable below freezing", "A vented fuel-fired air heater -- adds no water, sips power", "You come back cold and need reliable heat nightly"],
    ["Condensation", "Bodies and wet gear dump water into a sealed box", "Ventilation plus vented heat; dry gear elsewhere if you can", "Wet boots and skins add liters the air must shed"],
    ["Battery", "Capacity and charging both fall in the cold", "Insulate the bank, keep it warm, expect less; lithium will not charge below freezing", "Short days mean little solar and long heater runs"],
  ]},

  { kind: "p", text: "The one point worth pulling forward is combustion safety, because it does not survive being fudged. A vented heater -- a diesel or gasoline air heater, or a sealed RV propane furnace -- exhausts its combustion outside and adds no water to the air. An unvented propane buddy heater does the opposite: it dumps carbon monoxide and more than a liter of water per pound of gas into the cabin, which is why it belongs to short daytime use with a window cracked and an alarm running, never to a closed van overnight. A carbon-monoxide alarm is not optional in any van with a flame in it. Everything else is in the winter pillar." },

  { kind: "h2", text: "Drying boots, skins, and layers" },

  { kind: "p", text: "A day on snow comes home wet, and wet gear is both miserable to put back on and the largest single source of the condensation that ruins a winter build. Boots, gloves, base layers, and skins can shed two liters of water over an evening, and in a sealed van every drop lands on the coldest surface it can find unless a vent moves it out. Managing wet gear is a moisture problem first, in this order of priority the next morning:" },

  { kind: "ul", items: [
    "Boot liners end a trip if you get them wrong -- pull them from the shells every night so both dry, and never start a day in frozen or damp liners, a fast route to cold-injured feet.",
    "Skins dry glue-side accessible but not cooked -- lay them out at room temperature, not pressed against a heater, which can wreck the adhesive.",
    "Base layers and socks dry fastest and are worth drying fully; damp base layers make you cold before you have done anything.",
    "Shells and insulation dry slowest and matter least -- shake them out, hang them, accept they may stay damp.",
    "Gloves are chronically hard to dry; carry a spare pair so a wet set has a full day to recover.",
  ]},

  { kind: "p", text: "What dries gear is warm air moving past it and out of the vehicle, not heat alone. A vented heater with a roof vent or window cracked pushes warm dry air past hanging gear and carries the moisture outside; the same heater in a sealed van just moves the water from your boots to your walls. Any access to indoor drying -- a resort locker, a laundromat, a friend's mudroom -- is worth using, because the van is the hardest place to dry gear." },

  { kind: "h2", text: "Avalanche terrain: the part that is not about gear" },

  { kind: "p", text: "This section matters more than all the others combined, and it is deliberately not a gear list. The moment you leave a resort's controlled boundary -- through a backcountry gate, under a rope, or from a touring trailhead -- you are in terrain where avalanches happen and nobody has mitigated them for you. People who ski strong and know the area die in avalanches every winter. Skill on skis is not the relevant competence; reading snow and terrain is, and it is trainable, teachable, and not optional." },

  { kind: "p", text: "Three things keep people alive in avalanche terrain, and none is equipment: training, a partner, and the forecast. Gear -- a beacon, shovel, probe, and increasingly an airbag -- gives your partner a chance to dig you out alive; it does nothing to keep you out of the slide. A beacon on a rider who cannot read terrain is a body locator." },

  { kind: "h3", text: "Training comes before the terrain, not after" },

  { kind: "p", text: "The entry point is a recognized avalanche course -- in the US and Canada an AIARE Level 1 or equivalent, a multi-day course that teaches you to read terrain, interpret a forecast, travel with a partner, and run a companion rescue. It is the price of admission, not an upgrade you earn later. Reading about it is not taking it: the course is fieldwork -- digging in the snow, running rescue drills against a clock, making terrain calls with an instructor watching -- that does not transfer off a page." },

  { kind: "h3", text: "Never alone, and everyone equipped and trained" },

  { kind: "p", text: "Avalanche rescue is companion rescue. If you are buried, the people who dig you out in the few minutes you have are the partners next to you -- not a helicopter, not ski patrol, who do not operate outside the boundary. That means a partner who carries a beacon, shovel, and probe, knows how to use them, and is not buried in the same slide. Traveling solo removes your only realistic rescue; an untrained partner is close to the same thing." },

  { kind: "h3", text: "The forecast is a daily read, not a season-long assumption" },

  { kind: "p", text: "Every day in avalanche terrain starts with the local avalanche center's forecast for that zone, read that morning. Danger changes with every storm, wind event, and temperature swing, and a slope safe on Tuesday can slide on Thursday. The North American Public Avalanche Danger Scale runs five levels worth knowing cold." },

  { kind: "table", caption: "North American Public Avalanche Danger Scale", head: ["Level", "Rating", "What it means for travel"], rows: [
    ["1", "Low", "Generally safe; watch isolated features and terrain traps. Not zero risk."],
    ["2", "Moderate", "Heightened danger on specific features; evaluate carefully. Most fatalities happen here and at Considerable."],
    ["3", "Considerable", "Dangerous; careful evaluation and conservative terrain choices essential. Catches experienced parties."],
    ["4", "High", "Very dangerous; travel in avalanche terrain not recommended."],
    ["5", "Extreme", "Avoid all avalanche terrain. Large, destructive avalanches certain."],
  ]},

  { kind: "note", text: "The counterintuitive fact worth carrying: the largest share of avalanche fatalities occur at Moderate and Considerable, not at High or Extreme. High and Extreme days keep people home; Moderate and Considerable days look skiable and fool experienced riders into terrain the day did not actually permit. A green-looking morning is not a safe one." },

  { kind: "p", text: "Avalanche safety is a body of training and a daily discipline, not a piece of kit you buy once. If any of the three legs -- training, a partner, the forecast -- is missing on a given morning, the honest answer is to ride inside the resort boundary that day and save the touring for a day you are equipped to make the call. The authoritative source is your regional avalanche center, and a course is the only responsible way into this terrain." },

  { kind: "h2", text: "Timing storms and road closures over passes" },

  { kind: "p", text: "Winter mountain travel is timed around two things a summer route ignores: the storm that brings the snow, and the pass closure that same storm triggers. The system that resurfaces the resort can gate the road you planned to reach it by, and a van is a heavy, tall, often two-wheel-drive vehicle with no business on a pass in an active storm. Timing is the difference between arriving ahead of a system and watching it close the gate in front of you." },

  { kind: "p", text: "Passes close for avalanche control and for conditions, not always predictably from the valley. Transportation departments gate passes during and after storms -- sometimes for scheduled avalanche mitigation with explosives on the slopes above the road, sometimes because the road is impassable -- and the reopening time is published late. A pass open when you check at breakfast can be gated by the time you reach it." },

  { kind: "table", caption: "Timing a winter route over passes", head: ["Factor", "The risk", "The working practice"], rows: [
    ["Active storm on the pass", "Whiteout, ice, closure, stuck at altitude", "Cross before it arrives or wait it out low -- never during"],
    ["Avalanche-control closure", "Scheduled gate closure, no traffic through", "Check state DOT road status the morning of, not the night before"],
    ["Traction / chain law", "Turned back or fined without chains or winter tires", "Carry chains that fit; know the state's chain-law levels"],
    ["Post-storm plow window", "Road open but not yet cleared", "Give plows a few hours after a closure lifts"],
    ["Short daylight", "Darkness multiplies every other risk", "Cross in daylight; plan arrival before dark"],
  ]},

  { kind: "p", text: "The rule is to treat the pass, not the destination, as the constraint that sets your schedule. Cross while the weather is good and the road is confirmed open, and wait out storms on the low side where a bad night is merely cold. The state DOT road-conditions line is the authority on whether a pass is open, and it changes faster than any plan -- check it the morning you cross, not the night before." },

  { kind: "note", text: "Chains are not a formality on many Western passes. States post chain or traction laws that escalate by conditions, and enforcement turns vehicles back at the bottom of the grade. Carry chains that fit, and practice fitting them once in a dry lot before you need them at the shoulder of a pass in the dark." },

  { kind: "h2", text: "Staying warm and fed on short cold days" },

  { kind: "p", text: "A December day at altitude gives you roughly nine hours of light and long, cold nights on either side. The two failures that end winter trips early are running out of usable power and not eating enough. Staying warm is metabolic work, so a day of skinning needs more food than a summer day and more of it hot, and a thermos filled in the morning is a warm midday meal that costs no fuel and no cold hands." },

  { kind: "ul", items: [
    "Eat more and fattier than summer -- warmth is calories, and a day on snow plus a cold night is a large energy bill.",
    "Cook fast and vented -- boiling adds water to the air, so keep sessions short and a vent open.",
    "Carry a thermos -- hot food on the hill for no fuel and no exposed cooking in the cold.",
    "Front-load water -- your tank can freeze, so insulate it, keep some in the warm zone, and start days full.",
    "Keep the sleep system rated below the coldest night you expect -- warmth you do not burn fuel to make.",
  ]},

  { kind: "p", text: "Water is the quiet problem behind the food one. A tank plumbed through an uninsulated bay freezes, and a frozen system on a cold morning means no coffee and no cooking until it thaws. Insulate what you can, keep drinking and cooking water in the heated cabin, and treat a full tank of unfrozen water as a resource you manage. The winter pillar covers the plumbing in depth." },

  { kind: "h2", text: "The winter-basecamp checklist" },

  { kind: "p", text: "A winter setup is a set of systems that each have to work, and the failure of any one can end a trip or worse. This is the pre-departure and daily check, grouped by what it protects -- a starting frame, not a substitute for the avalanche training and local forecast the touring sections insist on." },

  { kind: "table", caption: "Winter-basecamp checklist", head: ["Category", "Item", "Why it matters"], rows: [
    ["Heat and air", "Vented fuel-fired heater, fueled and serviced", "Habitable cabin without adding water to the air"],
    ["Heat and air", "Carbon-monoxide alarm, tested, fresh battery", "Catches a combustion leak while you sleep"],
    ["Heat and air", "Ventilation -- a vent or window that opens", "Sheds the water bodies and wet gear put into the air"],
    ["Power", "Battery bank insulated, kept above freezing", "Capacity and charging both collapse cold; lithium will not charge below 32F"],
    ["Power", "Charging that does not depend on solar alone", "Short days give little sun; plan alternator or shore power"],
    ["Water", "Insulated tank; drinking water in the warm zone", "A frozen system means no cooking or drinking until it thaws"],
    ["Gear drying", "A way to hang boots, liners, skins, layers", "Wet gear is misery and the biggest condensation source"],
    ["Sleep", "Bag or quilt rated below the coldest expected night", "Warmth you do not burn fuel to produce"],
    ["Mobility", "Chains that fit; winter tires; recovery basics", "Passes enforce chain laws; snow strands the unprepared"],
    ["Avalanche", "Training current, beacon/shovel/probe, a partner", "The non-negotiable price of leaving the boundary"],
    ["Information", "Local avalanche forecast and DOT road status", "The two conditions that change your plan daily"],
  ]},

  { kind: "p", text: "Work down the categories before you commit to a basecamp, then re-check the last two -- avalanche and information -- every morning, because they change overnight. The rig systems are set once and maintained; the forecast and road status are read fresh each day you intend to be on snow or on a pass." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "Everything above is a general framework, and it is a starting point rather than an authority on any specific day or place. Resort overnight policies are set by each resort and change; pass closures and chain laws are set by each state's transportation department and change by the hour; and the avalanche danger for the zone you want to ski is read by professionals, not inferred from a page written months earlier." },

  { kind: "p", text: "So the pointers matter more here than anywhere else on this site. For where you may sleep, ask the resort or check the trailhead's current status. For whether a pass is open, the state DOT road line is the authority the morning you cross. And for the one that is life and death -- whether the terrain outside the boundary is safe today -- the answer is a recognized avalanche course you have taken and your regional avalanche center's forecast for that zone, read that morning, with a trained partner beside you. When safety is the question, a professional and the current forecast beat any amount of reading, including this." },
];
