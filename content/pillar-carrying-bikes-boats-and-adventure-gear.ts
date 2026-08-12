import type { Block } from "./blocks";

/** Carrying bikes, boats, and adventure gear -- Vanism pillar. */
export const PILLAR_CARRYING_BIKES_BOATS_AND_ADVENTURE_GEAR: Block[] = [
  { kind: "key", text: "Carry the gear that earns the basecamp, but carry it inside the weight budget the rig already has. Bikes ride cleanest on a hitch rack or in a dedicated garage; packrafts and inflatable kayaks beat hard boats for anyone without a fixed put-in; skis and climbing gear want a sealed, sharp-and-heavy home low in the vehicle. Every pound on the roof costs mileage and center of gravity, and every load bound for washboard must be secured as if it will be shaken loose, because on those roads it will be." },

  { kind: "p", text: "A van that reaches trailheads and put-ins is a different machine from one that reaches campsites. The trailhead rig carries the bed, kitchen, and water plus the awkward, often wet and often sharp equipment that is the reason for the run -- bikes, boats, skis, ropes, and the racks and mounts that hold them. That equipment is heavy, bulky in shapes that fight square storage, and often comes back muddy or wet. Carrying it well is a systems problem, not a shopping problem." },

  { kind: "p", text: "The mistake is treating each item as a separate purchase -- a rack for the bikes, a mount for the boat, a bag for the skis -- and discovering only on the scale or the first washboard mile that the sum exceeds what the vehicle can safely carry or hold down. This page treats the whole load as one budget, for riders who plan runs around a trailhead or a put-in, not around a view." },

  { kind: "h2", text: "The weight budget comes before any rack" },

  { kind: "p", text: "Every decision on this page is spent out of one account, and most riders do not know its balance. A van has a gross vehicle weight rating -- the maximum the manufacturer certifies the loaded vehicle to weigh -- and the difference between that and what the van already weighs built out is the payload. On a heavily converted van that remaining payload is often far smaller than people assume -- sometimes only a few hundred pounds once the build, water, fuel, and two people are counted." },

  { kind: "p", text: "Gear is spent from what is left. A pair of bikes, a rack, a boat, and the mounts run 120 to 200 pounds before anyone gets in -- not a rounding error against a small payload but the whole thing. Weigh the van loaded, at a truck stop or landfill scale, before deciding what it can carry. The certified numbers govern braking, tires, and handling, and they do not care what the plan was." },

  { kind: "table", caption: "Where the weight actually goes on a loaded trailhead rig", head: ["Item", "Typical weight", "Where it rides", "Note"], rows: [
    ["Two trail bikes", "50-70 lb", "Hitch or garage", "eMTBs run 45-55 lb each on their own"],
    ["Hitch rack, 2-bike", "35-60 lb", "Rear hitch", "Steel platform racks are the heavy end"],
    ["Two packrafts + paddles", "18-30 lb", "Inside, low", "The reason inflatables win the weight fight"],
    ["Hard kayak, single", "35-70 lb", "Roof", "Plus the rack bars underneath it"],
    ["Ski/climbing kit, two", "40-80 lb", "Interior locker", "Sharp, heavy, wants a fixed home"],
    ["Roof rack + crossbars", "25-50 lb", "Roof", "Dead weight even when empty"],
  ]},

  { kind: "note", text: "Tongue weight is its own limit. A hitch is rated for a maximum downward force at the receiver, and a loaded 2-bike rack with two eMTBs can exceed a light-duty hitch's rating before you add the rack itself. Check the hitch stamp, not just the vehicle payload." },

  { kind: "h2", text: "Bikes: three ways to carry them, and what each costs" },

  { kind: "p", text: "There are three real answers for bikes on a van, and they are genuinely different trades. A hitch rack hangs them outside at the back. An interior mount stands them in the living space. A garage build gives them a sealed compartment of their own. Which is right depends on how many bikes, how muddy they come back, and how much you care about theft." },

  { kind: "h3", text: "Hitch racks: simplest, most exposed" },

  { kind: "p", text: "A platform hitch rack is the default for good reasons: it carries the mud outside, does not eat interior space, and loads at waist height. But the bikes sit in road spray, they are visible and reachable to anyone in a lot, they add two to three feet of length, and they block the doors on most vans unless the rack swings away." },

  { kind: "p", text: "Exposure is the part riders underestimate. Bikes on a rear rack take the full blast off the tires, which on a wet forest road is a continuous slurry of grit that works into every bearing and pivot. They are also the single most stolen item off a parked adventure rig -- outside, valuable, and quick to cut free." },

  { kind: "h3", text: "Inside the van: protected, but it costs the room" },

  { kind: "p", text: "Bringing bikes inside solves exposure and theft at a stroke -- out of the weather, out of sight, behind a locked door -- with fork mounts or a wheel tray to hold them steady. The price is volume and mess: a six-foot trail bike stood inside occupies space a small van does not have to spare, and it transfers mud and grease to everything it touches. Riders who carry bikes inside end up with a removable mat, a dedicated wall zone, and a rule about hosing the drivetrain first." },

  { kind: "h3", text: "The garage build: the trailhead rig's answer" },

  { kind: "p", text: "The purpose-built solution is a garage -- a sealed compartment under a raised bed, accessed through the rear doors, bikes on fork mounts or a slide-out tray. It is the interior approach without surrendering the living space, since the bed sits above volume that was dead storage anyway, and the mud stays in the garage. The costs: the build must be designed around it, the raised bed lowers usable standing room, and fitting two bikes usually means wheels-off -- a loose front wheel and a ten-minute job at each end." },

  { kind: "table", caption: "Bike carry methods compared", head: ["Method", "Weather exposure", "Theft exposure", "Interior cost", "Mud into living space", "Best for"], rows: [
    ["Hitch platform rack", "Full -- spray and weather", "High -- outside, cuttable", "None", "None", "Frequent riders, dry regions, more than 2 bikes"],
    ["Interior fork mount", "None", "Low -- locked, hidden", "High -- eats cabin volume", "High unless cleaned first", "Small fleets, wet regions, theft-prone stops"],
    ["Garage under bed", "None", "Low -- locked, hidden", "Moderate -- raises bed", "Low -- isolated compartment", "Purpose-built trailhead rigs"],
    ["Roof rack (bikes)", "Full, plus height/wind", "Moderate -- hard to reach, slow to steal", "None", "None", "Rarely worth it; avoid unless no other option"],
  ]},

  { kind: "p", text: "Roof-mounting bikes is on the list only to argue against it. It puts 15 to 20 pounds two feet higher than anything else, at the worst place for center of gravity and wind, and a bike on the roof turns a parking structure or drive-through into an expensive lesson. Put bikes anywhere else." },

  { kind: "h3", text: "The mud, grease, and security problem, handled" },

  { kind: "ul", items: [
    "Carry a pump sprayer or a collapsible bucket. The drivetrain is where grit does the damage, and a two-minute rinse before the bike is stored is the single habit that keeps mud out of everything downstream.",
    "A fitted bike bag or a folding blanket turns an interior bike from a mess into cargo; cover the chainring and pedals specifically, since that is where the grease is.",
    "Lock the bikes to the rack and the rack to the vehicle, with a hardened chain or a heavy U-lock, not a cable. A cable lock is a formality that delays no one.",
    "The strongest theft defense is that the bikes are not visible. Inside or garaged beats any lock on an exposed rack, which is why the trailhead hunter tends to end up there. Record the serial numbers before the season; recovery depends on the record existing before the theft, not after.",
  ]},

  { kind: "h2", text: "Watercraft: why inflatables win for the trailhead hunter" },

  { kind: "p", text: "Boats split the same way bikes do, but the geometry is harsher. A hard kayak or canoe is long, rigid, and light enough to be awkward rather than heavy, which means it goes on the roof -- exactly where you do not want length, height, and windage. For a rider who hunts put-ins -- different water each week, some down roads a hard boat's overhang makes miserable -- inflatables are the answer the space and the weight budget both point to. For one who launches from a fixed dock all season, a hard boat can still be right." },

  { kind: "h3", text: "Packrafts and inflatable kayaks: the space-efficient answer" },

  { kind: "p", text: "A packraft rolls to the size of a sleeping bag and weighs 5 to 12 pounds; an inflatable kayak packs to a duffel and weighs 20 to 35. Both live inside, low, competing with nothing structural, and inflate in ten to twenty minutes with a pump. The trade is on the water: a packraft is slower to paddle than a hard boat, and an inflatable kayak tracks less crisply. For crossing a lake, running moderate whitewater, or reaching water at the end of a rough road, that trade is easily worth it. For distance touring on flatwater against wind, a hard boat is meaningfully faster." },

  { kind: "h3", text: "Hard boats on the roof, and what the height costs" },

  { kind: "p", text: "A hard boat on the roof imposes three standing costs for the whole trip, paid whether or not it touches water. It raises the vehicle's height past the point where drive-throughs, older parking structures, and some forest-road canopy become hazards, and the driver has to hold the new number in mind at every clearance. It adds windage -- a boat is a sail, and a crosswind pushes a roof-loaded van around, tiring over hours and destabilizing in a gust. And it costs mileage the entire distance. A hard boat earns the roof only when paddling is the point of the trip, not as a maybe." },

  { kind: "table", caption: "Watercraft carry compared", head: ["Craft", "Weight", "Where it rides", "On-water performance", "Height/wind cost", "Best for"], rows: [
    ["Packraft", "5-12 lb", "Inside, packed small", "Slow, stable, portable", "None", "Rough-road put-ins, crossings, light whitewater"],
    ["Inflatable kayak", "20-35 lb", "Inside, packed", "Moderate, tracks softly", "None", "Mixed water, riders who change put-ins often"],
    ["Hard kayak", "35-70 lb", "Roof", "Fast, tracks well", "High -- height, wind, mileage", "Fixed put-in, distance flatwater, serious paddlers"],
    ["Canoe", "50-85 lb", "Roof", "Capacity, efficient", "Very high -- length and windage", "Multi-day water trips from a set launch"],
  ]},

  { kind: "note", text: "Inflatables have one failure mode a hard boat does not: a slow leak strands you on the water, not the road. Carry the patch kit and a spare valve, check for a soft chamber before launching, and know that abrasion on rocky put-ins eventually finds a seam." },

  { kind: "h2", text: "Skis, splitboards, and the sharp-and-heavy problem" },

  { kind: "p", text: "Winter and mountaineering gear is the hardest category to store because it is sharp, heavy, long, and often wet. Ski edges and crampon points cut through soft bags, upholstery, and skin; a loose ski in a hard stop is a spear. The rule is a fixed, hard-edged home, low in the vehicle, where nothing sharp can move or face the living space." },

  { kind: "p", text: "Skis and splitboards ride best in a long, shallow locker along a wall or under the bed. Store them in a padded bag or edge guards, tips one way and tails the other to nest, strapped so they cannot slide. A locking roof box is a legitimate answer for skis specifically, since they tolerate cold and the box keeps the edges away from everything. What does not work is loose skis in the cabin." },

  { kind: "h3", text: "Crampons, axes, and the puncture list" },

  { kind: "p", text: "Crampons and ice tools are the sharpest things in the vehicle and deserve a hard case or purpose-made point protectors, stored where a rollover or hard stop cannot bring them into the cabin. A loose crampon is the item most likely to turn a minor incident into an injury; treat it like the fixed blade it is, secured every time it is not on a boot." },

  { kind: "table", caption: "Sharp-and-heavy gear storage", head: ["Item", "Hazard", "Storage answer", "Where"], rows: [
    ["Skis / splitboard", "Edges cut; length; weight", "Padded bag or edge guards, strapped", "Low wall locker or under-bed"],
    ["Crampons", "Points puncture bags and people", "Hard case or point protectors", "Fixed, low, latched"],
    ["Ice axes / tools", "Pick and adze; spear risk", "Sheathed pick, secured shaft", "Strapped to a wall, points capped"],
    ["Ropes", "Heavy, abrades, holds water", "Rope bag, kept dry", "Any low locker; off the wet floor"],
  ]},

  { kind: "h2", text: "Climbing gear: dense weight, and keeping the rack findable" },

  { kind: "p", text: "A trad rack, rope, and hardware are dense -- a full rack with a rope is 20 to 40 pounds in a small volume -- so the storage question is less about space than center of gravity and organization. Put the weight low, because dense weight high is the worst thing you can do to a tall van's handling, and keep it sorted so it is not dumped on the ground at the base of the climb." },

  { kind: "p", text: "The rope holds water, is expensive, and degrades from prolonged damp and from contact with fuel, oil, and battery acid. Store it in a rope bag, off the floor, away from anything that can leak on it, and dry it before it goes back into a sealed locker. A rope that rode home wet comes out mildewed and short-lived." },

  { kind: "h2", text: "The loaded roof: weight where it hurts most" },

  { kind: "p", text: "The roof is the most tempting place to put gear and the most expensive place to carry it, because weight there works against the vehicle three ways at once. It raises the center of gravity that governs how a tall van behaves in a swerve or a crosswind -- and vans start high before anything is added. It raises physical height into the zone where clearances become hazards. And it adds frontal area and drag, a mileage cost paid over every mile whether the gear is used or not." },

  { kind: "p", text: "The rule is that the roof is for light gear with nowhere else to go -- a recovery board, an awning, a spare can positioned with its weight in mind -- not for anything heavy you had a lower option for. A roof rack loaded to capacity can put 100-plus pounds at the highest point on the vehicle, and the handling consequence is not something the rating removes. If it can ride low, it should." },

  { kind: "table", caption: "What roof load actually costs", head: ["Load", "Center of gravity", "Height added", "Mileage / handling", "Verdict"], rows: [
    ["Empty roof rack", "Slight rise", "3-6 in", "1-2 mpg from drag alone", "Dead cost -- remove if unused"],
    ["Recovery boards, awning", "Low -- light items", "Modest", "Minor added drag", "Reasonable roof use"],
    ["Hard boat", "Meaningful rise", "12-24 in", "2-4 mpg; strong crosswind push", "Only if paddling is the trip"],
    ["Bikes on roof", "High -- worst case", "24+ in", "Large drag; garage-door risk", "Avoid; use hitch or garage"],
    ["Loaded cargo box, heavy", "High and forward", "12-18 in", "Notable drag; sway in gusts", "Keep contents light only"],
  ]},

  { kind: "note", text: "An empty roof rack is not free. Crossbars alone cost roughly 1 to 2 mpg to drag through the air. If a rack sits empty most of the year, take it off between the trips that need it." },

  { kind: "h2", text: "Securing loads for washboard roads" },

  { kind: "p", text: "Forest and desert access roads are washboard, and washboard is a specific enemy: a continuous high-frequency vibration that walks bolts loose, saws through straps at contact points, and shakes anything not positively locked out of its mount. The standard is to secure every load as if it will try to leave, because on washboard it will. Nothing rides on friction alone." },

  { kind: "ol", items: [
    "Secure every item with a mechanism, not with gravity. Anything held down only by its own weight is airborne on the first hard washboard hit.",
    "Use two independent points on anything heavy or valuable -- a primary and a backup -- so a single failure does not free the load.",
    "Torque the rack and hitch bolts before the trip and check them again after the first rough stretch. Washboard is what loosens them; the recheck is where you catch it.",
    "Pad every point where a strap crosses an edge. Vibration turns a strap over a sharp corner into a cut strap within miles.",
    "Eliminate slack. A loose strap lets the load build momentum and then shock-loads the strap until it fails. Ratchet, then retension.",
    "Inside, latch every drawer, door, and locker positively. A drawer that opens on washboard empties its contents into the aisle and can jam the sliding.",
    "Stop and walk the load after the first few miles of any bad road. Two minutes of hands on every strap and bolt is the cheapest insurance here.",
  ]},

  { kind: "table", caption: "Load-securing checklist by carry point", head: ["Carry point", "Primary restraint", "Backup / check", "Washboard failure mode"], rows: [
    ["Hitch bike rack", "Rack arms clamped, hitch pin tight", "Extra strap bike-to-rack; recheck pin", "Rack sways loose; bike rocks out of clamp"],
    ["Roof cargo / boat", "Rated straps front and rear", "Bow/stern lines to bumpers", "Straps saw at crossbar edge; box shifts"],
    ["Interior bikes/skis", "Fork mount or fixed strap", "Wall anchor; edge guards on", "Slides and impacts cabin or gear"],
    ["Drawers / lockers", "Positive latch, not friction", "Secondary catch on heavy drawers", "Drawer flies open, contents into aisle"],
    ["Loose heavy gear", "Strapped to an anchor point", "Nothing loose above waist height", "Becomes a projectile in a hard stop"],
  ]},

  { kind: "h2", text: "Drying wet gear in a small space" },

  { kind: "p", text: "Wet gear is the tax on every water, snow, and rain trip, and a small van has no natural place for it to dry. Left in a heap it stays wet and comes out cold on the next objective, grows mildew, and dumps moisture into the cabin air where it condenses on cold surfaces and soaks the bedding. Managing wet kit is less about a drying system than about not letting the water into the living space at all." },

  { kind: "ul", items: [
    "Wring and shake outside before anything wet comes in. Most of the water leaves in the first thirty seconds if you make it.",
    "Rig a line under the awning or between the doors. Outside air dries gear the van's air cannot, and keeps the moisture out of the cabin.",
    "Carry a dedicated wet locker or a couple of dry bags. Wet gear in a sealed bag protects everything else until you can dry it; it does not dry in there, so empty it at the first chance.",
    "Ventilate. A roof fan drawing air through a cracked window moves the cabin's humidity out; a sealed, heated van with wet gear inside becomes a condensation machine overnight.",
    "Dry ropes, skins, and boot liners first -- those are the items a wet night actually costs you. Boot liners and gloves want warmth and airflow, and the windshield in morning sun is the best dryer a van has.",
  ]},

  { kind: "note", text: "Down is the exception. A down bag or jacket that gets wet and packed loses its loft and does not recover in the field. Keep down in a dry bag from the start; the strategy is not getting it wet." },

  { kind: "h2", text: "Building the load as one system" },

  { kind: "p", text: "The categories above compete for the same three resources -- the weight budget, the low interior volume, and the roof. Decide the primary sport first, give it the best storage, and fit everything else around it, rather than bolting a rack on for each activity until the payload is gone and the roof is a sail. The principle is simple: heavy and dense goes low and secured, sharp goes boxed and fixed, wet goes outside or sealed, and the roof carries only light things with nowhere else to go. A load built by accumulation instead is the one the rider finds out about in a crosswind, or on the road behind them." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "Everything above is the general framework, and it does not know your rig. The certified payload, the hitch rating, and the roof-rack rating are the authoritative numbers for your vehicle -- stamped on it and printed in its manual. Read them there, and weigh the van loaded before you trust any of it. Where the load bears on safety -- a hitch near its tongue-weight limit, a rack near capacity, a boat that changes handling in wind -- the manufacturer's figure and a professional install are the authorities, not a rule of thumb." },

  { kind: "p", text: "And the framework says nothing about whether the trailhead has room to park a rig with an overhanging rack, whether the put-in road is washed out this week, or whether the ramp is open. Those are current conditions, and current conditions come from someone who was recently on that road -- which is the gap Vanism was built for: every objective carries the date a rider last confirmed access on the ground, and a put-in nobody has confirmed in a season is a plan, not a fact. Verify the reach before you load for it." },
];
