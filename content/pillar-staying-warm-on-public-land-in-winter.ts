import type { Block } from "./blocks";

/** Staying warm on public land in winter -- Vanism pillar. */
export const PILLAR_STAYING_WARM_ON_PUBLIC_LAND_IN_WINTER: Block[] = [
  { kind: "key", text: "The workhorse for keeping a rig habitable below freezing is a fuel-fired air heater -- diesel or gasoline -- because it vents its combustion outside, adds no moisture to the air, and draws almost nothing from the battery. A portable propane buddy heater does the opposite on all three counts, which is why it belongs to short daytime use with a window open and a carbon-monoxide alarm running, never to a closed vehicle overnight. The real enemy in a winter build is not cold air but the water your body and your stove put into it, and the single best move when the cold turns genuinely dangerous is to drop 2,000 to 3,000 feet of elevation rather than fight it." },

  { kind: "p", text: "Winter on public land is a moisture and combustion problem before it is a temperature problem. A rig holding 60 degrees inside while it is 10 outside is doing two things at once: adding heat, and adding water to a sealed metal box that two people breathe into all night. Get the heat right and the water wrong and you wake to condensation running down the walls, wet insulation that no longer insulates, and the early stages of mould behind the panels. Get the combustion wrong and you do not wake at all." },

  { kind: "p", text: "This page compares the heat sources riders actually use, says where each stops being safe, and treats condensation, the water system, and the battery as the three systems the cold attacks hardest. It ends on the option most people forget they have -- moving downhill into warmer air. Temperatures are Fahrenheit; fuel figures are approximate and vary by unit and altitude." },

  { kind: "h2", text: "The physics you are actually fighting" },

  { kind: "p", text: "Three things move heat out of a rig, in this order. Conduction through the shell, the metal skin and windows and every uninsulated bolt and rib, is the steady drain. Air exchange, cold air trading places with warm through gaps and vents, is the fast one. Radiation to a clear night sky, mostly through glass, is the smaller third. A winter build slows all three, but the trap is that the two cheapest wins -- sealing the vehicle tight and running an unvented flame -- are exactly the two that kill people." },

  { kind: "p", text: "The reason is water. A warm body and a burning fuel both produce water vapour, and a sealed vehicle has nowhere to put it. Two adults sleeping exhale roughly one to one and a half litres a night; an unvented propane flame adds more than a litre per pound of gas burned. That water condenses on the coldest surface it can find and, once inside the insulation, stays there. The problem is never simply how to add heat; it is how to add heat, shed water, and keep combustion safe at once." },

  { kind: "h2", text: "Heat sources compared" },

  { kind: "p", text: "The four heat sources in common use are not close to equivalent. What matters most is whether combustion is vented -- sealed off and exhausted outside -- or unvented, dumping its exhaust and water into the air you breathe. Everything else follows from that." },

  { kind: "table", caption: "Cabin heat sources compared", head: ["Source", "Fuel", "Combustion", "Adds water to cabin", "Power draw (12V)", "Primary risk"], rows: [
    ["Diesel/gasoline air heater", "Diesel or petrol, ~0.1-0.25 L/hr", "Sealed, vented outside", "No", "8-15W steady, 8-12A on startup glow", "Exhaust leak, altitude derating, sooting"],
    ["Propane furnace (RV forced-air)", "Propane, ~0.25-0.5 lb/hr", "Sealed, vented outside", "No", "4-7A continuous blower", "Blower battery drain, propane use rate"],
    ["Portable buddy heater (radiant)", "Propane, ~0.09-0.4 lb/hr", "Unvented, into cabin", "Yes -- over 1 L per lb burned", "None", "Carbon monoxide, condensation, oxygen depletion"],
    ["Wood stove (marine/small)", "Wood", "Vented via flue", "No", "None", "Fire, ember escape, space and clearance"],
    ["Electric (shore or large battery)", "Electricity", "None", "No", "80-150A at 12V for 1-2 kW", "Battery depletion in hours"],
  ]},

  { kind: "h3", text: "The fuel-fired air heater is the workhorse" },

  { kind: "p", text: "A diesel or gasoline air heater draws combustion air from outside, burns it in a sealed chamber, blows the heat into the cabin, and pipes exhaust out under the vehicle. Cabin air and combustion never meet. That is why it is the standard: it adds heat without water, sips fuel at a tenth to a quarter of a litre an hour, and past its startup glow cycle draws about as much power as a couple of LED bulbs. A rig can run one all night off the starter battery and a fuel tank it already carries." },

  { kind: "p", text: "Where it stops being simple is altitude and maintenance. Most units run rich above roughly 5,000 to 8,000 feet unless they have an altitude sensor or high-altitude setting -- showing up as sooting, hard starts, and a clogged burn chamber over time. Buy a unit rated for the elevations you camp at, or expect to decarbon the burner. And it is still a combustion appliance: a cracked exhaust pipe or corroded gasket routes exhaust into the cabin, the exact failure a carbon-monoxide alarm exists to catch." },

  { kind: "h3", text: "The propane furnace is the built-in alternative" },

  { kind: "p", text: "The forced-air propane furnace fitted to many RVs and conversions is also sealed and vented, so like the air heater it adds no water to the cabin. Its costs are different: it burns propane faster than an air heater burns diesel, tying your warmth to a bottle you refill, and its blower pulls a continuous 4 to 7 amps -- a real overnight load on a modest bank. A fine heater, simply hungrier for both fuel and power than the air heater that has largely displaced it in newer builds." },

  { kind: "h3", text: "The buddy heater is a daytime tool, not an overnight one" },

  { kind: "p", text: "A portable radiant propane heater -- the ubiquitous \"buddy\" unit -- is unvented. It burns propane in the open, and everything the combustion produces goes into the cabin: heat, water vapour, and carbon monoxide. It is genuinely useful for taking the edge off while you are awake, with a window cracked. It is not a device you run in a closed vehicle while you sleep. The manufacturers say so plainly, and the two things it adds besides heat, water and CO, are the two that do the most damage in a winter build." },

  { kind: "note", text: "The low-oxygen sensor (ODS) on a buddy heater is not a carbon-monoxide detector. It trips when oxygen falls, a proxy, and at altitude it can nuisance-trip on thin air while CO is still climbing. It guards against suffocation, not poisoning, and is no substitute for a dedicated CO alarm." },

  { kind: "h2", text: "Why a carbon-monoxide alarm is non-negotiable" },

  { kind: "p", text: "Carbon monoxide is colourless, odourless, and binds to your blood roughly two hundred times more readily than oxygen. You do not smell it coming, and its early symptoms -- headache, drowsiness, nausea -- are indistinguishable from being tired and cold in a vehicle at night, so you are most likely to misread them at the moment they appear. Every combustion appliance can produce it: the air heater through a failed exhaust, the propane furnace, the buddy heater by design, the cooktop, and the vehicle's own engine if you idle for heat with the exhaust near a vent or in snow that blocks the tailpipe." },

  { kind: "p", text: "A battery-powered carbon-monoxide alarm rated for low temperatures, mounted at head height where you sleep, is the cheapest safety equipment in the vehicle and the only thing that catches this failure before it catches you. Cheap household units are specified only down to about 40 degrees and can fail to alarm in a cold cabin; buy one rated for the range you camp in, test it, and replace it on its end-of-life date, because the sensor degrades whether or not it ever alarms." },

  { kind: "key", text: "Run a carbon-monoxide alarm rated for low temperatures near your head, and never run any unvented flame -- buddy heater or cooktop -- in a closed vehicle while you sleep. A vented air heater plus a working CO alarm is the safe combination. An unvented heater in a sealed rig overnight is the one that kills, and it does it silently." },

  { kind: "h2", text: "Insulation and thermal bridging" },

  { kind: "p", text: "Insulation is what makes a given amount of heat affordable. The better the shell holds heat, the smaller the heater you need and the less fuel it burns. The part people miss is that better insulation also keeps interior surfaces warmer, which is the direct lever on condensation: a well-insulated wall keeps its inside face above the dew point, so water never condenses on it at all." },

  { kind: "p", text: "The failure that undoes an otherwise good build is thermal bridging: any path where the cold outer skin connects straight through to the inside with no insulation between. In a metal vehicle these are everywhere: steel ribs, door frames, the floor, every screw and bolt that pierces the shell. Each is a cold spot, and being the coldest surface in the cabin it is the first place water condenses. You can insulate every cavity perfectly and still get walls streaked with condensation lines tracing the ribs behind them, because the ribs were never broken from the skin." },

  { kind: "table", caption: "Where heat leaves, and what to do about it", head: ["Path", "Share of loss", "Fix", "Note"], rows: [
    ["Windows and windscreen", "Large -- glass has almost no R-value", "Insulated covers, cut to fit inside", "The windscreen alone can be the biggest leak"],
    ["Thermal bridges (ribs, frame, bolts)", "Larger than most expect", "Insulate the rib face; no bare-metal fasteners through to the cabin", "Shows up as condensation lines tracing the metal"],
    ["Floor", "Steady, easy to ignore", "Rigid foam under the subfloor", "Bare floor stays cold-footed all night"],
    ["Roof and walls (cavities)", "Steady", "Fill cavities; closed-cell foam or wool", "Diminishing returns -- bridges matter more"],
    ["Air gaps (vents, doors, pass-throughs)", "Fast loss when present", "Seal and weatherstrip, but keep deliberate ventilation", "Do not seal so tight moisture and CO cannot leave"],
  ]},

  { kind: "p", text: "The order of return is clear: glass first, obvious thermal bridges second, floor third, and cavity fill as the finishing step, not the headline. A rig with bare glass and a well-insulated roof spends most of its heat through the windows." },

  { kind: "h2", text: "Managing condensation -- the real enemy" },

  { kind: "p", text: "This section decides whether a winter build lasts. Cold air is a temporary discomfort; trapped water is a slow structural problem. Water condensing on the inside of the skin runs into the wall cavity, soaks the insulation, and sits against the metal, feeding corrosion and mould behind the panels. By the time you smell it, it has been there a while. The goal is not to stop the body and stove producing water -- you cannot -- but to move it out faster than it accumulates and keep surfaces warm enough that it does not condense." },

  { kind: "p", text: "The two big sources are breath and combustion cooking, in that order. You cannot stop breathing, so breath is answered by ventilation. Cooking you can move outside or vent hard, and you can refuse an unvented heater that adds water on purpose. The controls below are ordered by how much water they actually move." },

  { kind: "table", caption: "Condensation controls, most effective first", head: ["Control", "What it addresses", "Effort / cost"], rows: [
    ["Cross ventilation (roof vent open, window cracked opposite)", "Breath, the constant source; vents humid air out", "Free; costs a little heat"],
    ["Cook outside, or vent hard while cooking inside", "Combustion cooking -- the largest burst of water", "Free; inconvenient in bad weather"],
    ["Use only a vented heater (air heater / furnace)", "Removes the heater as a water source", "Design choice"],
    ["Insulate to keep surfaces above dew point", "Stops condensation forming on walls and glass", "Build cost; see insulation section"],
    ["Do not dry wet gear inside", "Boots, jackets and towels add litres", "Free; dry outside or in a vented locker"],
    ["Wipe windows and cold spots each morning", "Catches what condensed before it soaks in", "A cloth and two minutes"],
    ["Desiccant or 12V dehumidifier", "Trims residual humidity in a tight rig", "A supplement, not a fix"],
  ]},

  { kind: "note", text: "Ventilation and heat feel like opposites, and giving up warm air to a cracked vent feels wasteful when it is cold. It is not. A vented heater replaces that heat cheaply; the alternative -- a sealed, humid cabin -- costs you the insulation, the panels, and eventually the shell. Ventilate on purpose, and size the heater to cover it." },

  { kind: "h2", text: "Keeping the water system from freezing" },

  { kind: "p", text: "Water expands about nine percent when it freezes -- enough to split a tank, crack a pump head, or burst a line. The vulnerable parts sit outside the heated cabin or in dead air the heater never reaches: an underslung tank, the pump, runs behind cabinetry, and low points where water stands still. A small volume in a thin line freezes far faster than a full tank. The responses run from simplest to most involved; which you need depends on how cold, for how long, and whether the cabin stays heated overnight." },

  { kind: "ol", items: [
    "Keep the water inside the heated envelope. Interior tanks and lines stay liquid as long as the heater runs. The single most effective measure -- a design decision, not a gadget.",
    "Keep the heat on overnight. An air heater holding the cabin above freezing protects everything inside it for the fuel you were burning anyway.",
    "Insulate and heat-trace the exposed parts. Underslung tanks and exterior lines can be wrapped with thermostatic 12V heat tape, but that tape is a continuous power draw -- budget for it.",
    "Drain the vulnerable points before a hard freeze. If the rig will sit cold, blow out the lines, pump, and low points. Nothing freezes if nothing is in it.",
    "Winterise fully for storage. Non-toxic RV antifreeze through the whole system is the storage-grade answer when the vehicle will be cold and unused.",
  ]},

  { kind: "p", text: "A rig with interior water and an overnight heater rarely needs anything past the first two lines. An underslung tank in single-digit nights needs the third or fourth -- and solving that with heat tape alone can quietly drain the battery it depends on." },

  { kind: "h2", text: "Battery capacity loss in cold" },

  { kind: "p", text: "Cold takes usable capacity out of every battery, and does it two ways depending on chemistry. This is not a rounding error in winter -- a bank that runs the rig two nights in autumn can run it one on a hard freeze, and the failure lands at the worst time, because the heater's startup draw and the pump both pull hardest when it is coldest." },

  { kind: "table", caption: "Battery behaviour in the cold", head: ["Chemistry", "Usable capacity near 0F", "Charging below freezing", "Winter takeaway"], rows: [
    ["Lead-acid / AGM", "Roughly 60-70% of rated", "Accepts charge, slower; needs higher voltage", "Oversize the bank; capacity returns when it warms"],
    ["LiFePO4 (lithium)", "Roughly 80-90% of rated (better than lead)", "Must NOT charge below 32F -- damages cells", "Holds capacity well but needs a heater or low-temp cutoff to charge"],
  ]},

  { kind: "p", text: "The lithium charging limit is the one that catches people. A LiFePO4 bank discharges happily in the cold and holds more of its capacity than lead, but charging it below freezing plates the cells and permanently damages them. A quality battery has a low-temperature cutoff that refuses the charge; a cheaper one may not, and accepts the damage silently. Either way a frozen lithium bank refusing charge means the solar comes in and does nothing, so cold-climate builds either heat the battery or accept that charging waits until midday warms the cells." },

  { kind: "p", text: "The planning move for any chemistry is to oversize the bank, keep the batteries inside the heated envelope where you can, and not count on a cold morning's solar to refill what a cold night drew down. Short days, low sun, and snow on the panels already cut your solar; a battery that will not charge until noon cuts it further." },

  { kind: "h2", text: "Fuel and run-time planning" },

  { kind: "p", text: "Warmth is a consumable in winter, and the mistake is a route planned around scenery with a fuel supply planned around summer. The numbers below are approximate -- they move with insulation, temperature, and how hard the heater works -- but they set the order of magnitude for how long a fill lasts and how often you resupply." },

  { kind: "table", caption: "Rough overnight consumption at a moderate freeze", head: ["System", "Typical rate", "Per 12-hour night", "Resupply reality"], rows: [
    ["Diesel/petrol air heater", "0.1-0.25 L/hr", "~1.2-3 L", "From the vehicle tank; days between fills"],
    ["Propane furnace", "0.25-0.5 lb/hr", "~3-6 lb", "A 20 lb bottle is a few nights; refills constrain you"],
    ["Buddy heater (daytime only)", "0.09-0.4 lb/hr", "N/A overnight", "1 lb canisters vanish fast; not an overnight plan"],
    ["Heater electrical (air heater)", "8-15W steady", "~10-18 Ah at 12V", "Trivial once past startup glow"],
    ["Heat tape on water lines", "Continuous when on", "Can rival the heater's draw", "Budget it as a real load"],
  ]},

  { kind: "p", text: "The table's point is that the fuel-fired air heater decouples warmth from the propane supply chain: it burns fuel you already carry, at a rate that buys days between resupply. A propane-heated rig ties its stay length to bottle refills, the errand that pulls you off good ground toward town. Water carry sets your maximum stay in the desert; fuel and propane set it in the cold." },

  { kind: "h2", text: "Dropping to lower, warmer ground" },

  { kind: "p", text: "The move most riders forget is that the cold is not fixed -- it is a function of where the vehicle is parked, and the vehicle moves. Air cools with altitude at roughly 3.5 to 5 degrees per 1,000 feet. Dropping 2,000 to 3,000 feet out of the mountains into lower desert or valley ground is worth on the order of 10 to 15 degrees of overnight low -- often the difference between a hard, water-freezing, battery-sapping night and a merely cold one. It costs fuel and an hour of driving, and it solves the problem the heater, insulation, and battery were all straining against." },

  { kind: "table", caption: "What an elevation drop buys you", head: ["Drop", "Approx. overnight warming", "Typical move"], rows: [
    ["1,000 ft", "~3.5-5F", "Off a ridge into a valley bottom; marginal"],
    ["2,000 ft", "~7-10F", "Out of montane forest toward the foothills"],
    ["3,000 ft", "~10-15F", "Mountains down to high desert -- often decisive"],
    ["5,000+ ft", "~18-25F", "High country to low desert; a season change in an afternoon"],
  ]},

  { kind: "p", text: "The lapse rate is a general rule and it breaks predictably. A cold-air inversion pools the coldest air in the valley bottom overnight, so low ground can be colder than the slope above it -- a bench above the valley floor can beat both the ridge and the bottom. Wind exposure, tree cover, and a clear versus cloudy sky each move the actual low by several degrees. The rule tells you which way to drive; it does not promise the temperature you will find." },

  { kind: "p", text: "This is where the published record stops answering the question. Elevation and land-status maps tell you where you may camp; they do not tell you which low road is snowed in this week, whether the gate onto the warmer ground below is open, or what the overnight low actually was down there two nights ago. Those are current conditions, and they come from riders recently on that ground. On Vanism every objective carries the date a rider last confirmed it, so a lower, warmer alternative is something you can check was reachable and open, not merely something a map says exists." },

  { kind: "note", text: "Dropping elevation trades a cold problem for a road problem. The warmer ground below is often reached by a road that ices at shaded switchbacks or gates seasonally, and the descent can be the most dangerous part of the plan. Verify the route is open and passable before you commit to it in the dark on a freezing night." },

  { kind: "h2", text: "What this framework cannot tell you" },

  { kind: "p", text: "Everything above is the general case, and the general case is wrong somewhere on every trip. Fuel burn depends on your unit, your insulation, and the actual temperature; battery capacity on the specific cells and their age; the lapse rate bends around inversions and weather. The figures set the right order of magnitude and the right priorities. They do not replace the gauge on your own tank or the reading on your own alarm." },

  { kind: "p", text: "And the cold itself is a current condition, not a rule. Whether a road onto lower ground is open, whether a gate has dropped for the season, and what the forecast low is for the nights you will be out come from the district office, the current Motor Vehicle Use Map for gate and road status, and a live forecast for the elevation you are parked at -- not from any figure on this page. Confirm the descent, confirm the forecast, and carry the alarm. Those three keep a freeze survivable." },
];
