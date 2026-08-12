import type { Block } from "./blocks";

/** Tires, traction, and getting yourself unstuck -- Vanism pillar. */
export const PILLAR_TIRES_TRACTION_AND_SELF_RECOVERY: Block[] = [
  { kind: "key", text: "The right tire at the right pressure prevents most recovery situations, so the recovery kit is the backstop, not the plan. Carry traction boards, a real shovel, a rated recovery strap with rated attachment points, and a compressor, and know how to read a surface before you drive onto it. The discipline that keeps a season running is turning around while you still can back out -- a stuck van on a remote road is a several-hundred-dollar tow at best, and often the day is gone with it." },

  { kind: "p", text: "Most riders think about recovery gear and never think about the two decisions that make recovery gear unnecessary: which tires are on the vehicle, and what pressure they are carrying when the surface changes. Those two decisions do more to keep you moving on sand, mud, washboard and snow than any strap or board you can buy. The kit exists for the day the decisions were not enough, and it should be treated that way -- as insurance, not as a reason to commit to ground you would otherwise refuse." },

  { kind: "p", text: "This page covers the whole chain in the order it matters: tire choice and load range first, airing down and reinflating second, reading a surface before you commit to it third, then the minimum self-recovery kit and the technique to use it without making things worse. It closes on the one habit that outperforms all of the gear -- turning around before the ground commits you. The general rules here hold across most terrain; where they stop being reliable is stated plainly, because from the driver's seat a firm surface and a trap look identical." },

  { kind: "h2", text: "The tire is the first and largest decision" },

  { kind: "p", text: "Everything downstream -- traction, flotation on soft ground, sidewall resistance to a sharp rock, how far you can safely air down -- is set by the tire before you leave the desk. A highway tire on a heavy van is the most common reason riders get stuck on ground an all-terrain would have crossed without a thought. The tire is not an accessory; it is the interface between the vehicle and every surface it touches." },

  { kind: "p", text: "The trade is real. All-terrain tires cost more, wear faster, run louder and drop a little highway economy. In exchange they give a stiffer, cut-resistant sidewall, tread that clears mud and bites loose ground, and the ability to air down without the tire folding off the bead. For a rig that spends its nights on forest roads, that pays for itself the first time it keeps you out of a tow." },

  { kind: "table", caption: "Tire types compared for a loaded van or overlanding rig", head: ["Type", "On-road", "Loose and soft ground", "Sidewall durability", "Airing down", "Best for"], rows: [
    ["Highway / touring", "Quiet, efficient, long tread life", "Poor -- fine tread packs with mud, low flotation", "Thin, cut-prone off pavement", "Limited; folds off bead easily", "Rigs that rarely leave graded surfaces"],
    ["All-terrain (A/T)", "Slightly louder, small economy cost", "Good -- clears mud, bites sand and gravel", "Stiff, cut-resistant", "Designed for it; airs down safely", "The default for dispersed and forest-road riders"],
    ["Rugged-terrain (R/T)", "Louder, firmer ride", "Very good in mud and rock", "Very stiff", "Airs down well", "Riders on genuinely rough routes who accept the noise"],
    ["Mud-terrain (M/T)", "Loud, worse wet-pavement grip", "Excellent in mud, worse in sand and snow", "Toughest sidewall", "Airs down well", "Mud and rock specialists; overkill for most vans"],
  ]},

  { kind: "p", text: "For most riders the honest answer is an all-terrain in the correct load range. It handles the ground a van actually meets -- gravel, washboard, packed dirt, occasional sand and mud -- without punishing you on the highway miles between them. Mud-terrains look serious and are the wrong tool for a rig that is heavy, tall and mostly on pavement; they trade away wet grip and snow traction for a capability you will use a handful of days a year." },

  { kind: "h3", text: "Load range is not optional on a heavy vehicle" },

  { kind: "p", text: "A built-out van is heavy, and heaviest when you are furthest from help -- full water, fuel and storage. The tire has to carry that weight at the pressures you run, and load range is the specification that governs it. An underrated tire on an overloaded axle runs hot, wears its edges, handles vaguely, and is far more likely to fail on a hot afternoon at speed -- the most dangerous failure there is." },

  { kind: "table", caption: "Passenger and light-truck load ranges", head: ["Load range", "Ply rating", "Max pressure (typical)", "Suited to"], rows: [
    ["SL (standard load)", "4", "35-36 psi", "Light passenger vehicles, unloaded"],
    ["XL (extra load)", "4 reinforced", "41-42 psi", "Heavier crossovers, light loads"],
    ["Load range C", "6", "50 psi", "Lighter vans and small campers"],
    ["Load range D", "8", "65 psi", "Mid-weight vans, moderate build"],
    ["Load range E", "10", "80 psi", "Fully built heavy vans -- the common choice"],
  ]},

  { kind: "note", text: "Weigh the rig loaded, at a truck scale, per axle, before choosing a load range or setting a pressure. The number on the door jamb assumes a factory vehicle, not one carrying 40 gallons of water and a build. The tire manufacturer publishes a load-and-inflation table -- that table, matched to your actual axle weights, sets the correct highway pressure." },

  { kind: "h2", text: "Airing down: the cheapest traction you can buy" },

  { kind: "p", text: "Lowering tire pressure is the highest-value skill on this page and it costs nothing but the time to do it and undo it. Dropping pressure lengthens the tire's contact patch, spreading the vehicle's weight over more ground. On sand that flotation is the difference between floating across and digging in. On washboard the softer tire absorbs the corrugations instead of skating over their tops, improving grip and control at speed. On rock a lower pressure lets the tread wrap around edges instead of bouncing off them." },

  { kind: "p", text: "The mechanism tells you when it stops working: airing down helps by increasing contact area, so it helps where the problem is flotation or grip, and not at all where the problem is clearance. A low tire on deep sand is transformed. A low tire high-centered on a ledge is just a low tire." },

  { kind: "table", caption: "Airing-down starting points by surface (loaded van, load range E)", head: ["Surface", "Starting pressure", "Effect", "Watch for"], rows: [
    ["Highway / graded gravel", "Full placard (per axle table)", "Correct load support, best wear", "Do not run soft on pavement -- heat and wear"],
    ["Washboard forest road", "25-30 psi", "Absorbs corrugation, better control", "Reduced sidewall protection on sharp rock"],
    ["Soft sand", "15-20 psi", "Longer contact patch, real flotation", "Bead unseating at very low pressure and hard turns"],
    ["Deep mud", "18-22 psi", "Longer patch, tread clears better", "Slower speed than instinct says -- finesse, not throttle"],
    ["Snow (packed)", "20-25 psi", "More contact, better bite", "Ice does not respond -- traction aids, not pressure"],
  ]},

  { kind: "p", text: "Treat those as starting points for a heavy rig on load range E tires, not targets; a lighter van or a different tire will move them. The lower you go, the more flotation you gain and the greater the risk of rolling the tire off its bead in a hard turn or unseating it against a rut. Below roughly 15 psi on a standard bead you are trading real capability for real risk. That is the point to stop unless you run beadlocks, which most vans do not." },

  { kind: "h3", text: "You must be able to reinflate, or you cannot air down" },

  { kind: "p", text: "Airing down is only half a skill. The other half is putting the air back before you touch pavement, because a soft tire at highway speed builds heat fast and heat is what destroys tires. A compressor is therefore not optional for anyone who airs down -- it is the second half of the same tool. Reinflating four heavy tires from 18 psi to 60 is real work, and a compressor too small for the job turns a five-minute stop into a forty-minute one." },

  { kind: "table", caption: "Reinflation from 18 to 60 psi, single tire, by compressor class", head: ["Compressor class", "Rough time per tire", "Practical for", "Note"], rows: [
    ["Small 12V plug-in", "8-15 min", "Emergencies only", "Overheats and stalls on repeated heavy fills"],
    ["Mid portable (clamp to battery)", "3-5 min", "Occasional airing down", "The common, sensible choice for most riders"],
    ["High-output portable", "1.5-3 min", "Frequent sand and off-road use", "Draws hard -- run the engine while inflating"],
    ["Onboard / tank system", "Under 2 min", "Heavy users, air tools", "Permanent install, highest cost and capability"],
  ]},

  { kind: "note", text: "Carry an accurate gauge and check it against a second one. A compressor's built-in gauge is often optimistic, and getting pressure wrong in either direction has a cost -- too low overheats the tire, too high on soft ground gives up the flotation you aired down to get." },

  { kind: "h2", text: "The failure you will actually fix: a flat" },

  { kind: "p", text: "The most common way a rig loses mobility is not a bog -- it is a puncture, and it is the one failure you can usually fix at the roadside in fifteen minutes. Most punctures are a nail or screw in the tread, and a tread puncture on a tubeless tire is repairable with a plug kit without removing the wheel. Sidewall damage is not repairable and is the reason a real spare still earns its weight and mounting space." },

  { kind: "p", text: "The plug kit, the compressor and the spare are one system. The plug seals the hole, the compressor reinflates, and the full-size spare covers the damage a plug cannot. Carry all three, and check the spare's pressure at the desk before a run -- a spare found flat at the roadside is no spare at all. Practice one plug in the driveway before you need to do it on a shoulder in the dark." },

  { kind: "ul", items: [
    "A tread puncture -- nail, screw, small cut -- plugs and holds for the rest of the season in most cases.",
    "A sidewall cut or a blown bead does not plug; that is what the full-size spare is for.",
    "A slow leak you can hear or feel is worth plugging before it strands you, not after.",
    "Check spare pressure and the jack and lug wrench before the run, not when you need them.",
  ]},

  { kind: "h2", text: "Reading a surface before you commit to it" },

  { kind: "p", text: "The most important recovery move happens before the vehicle is stuck: the decision, made on foot, about whether to drive onto the ground at all. Riders get stuck because they read a surface from the driver's seat, where you cannot see depth, moisture, or what the ground becomes forty feet ahead. The habit that prevents most recoveries is stopping, getting out, and walking the questionable section before the tires touch it." },

  { kind: "h3", text: "Sand" },

  { kind: "p", text: "Firm sand carries a van easily; soft dry sand swallows it. The tell is color and consistency -- darker, damp, compacted sand holds, while pale, dry, loose sand that your boot sinks into will do the same to a tire. Air down before you enter it, not after you are stuck, and carry momentum without wheelspin. Sand is worst in the heat of the afternoon when it is driest and loosest, and firmest in the cool of morning." },

  { kind: "h3", text: "Mud" },

  { kind: "p", text: "Mud is the hardest surface to judge because the danger is depth you cannot see. A firm-looking track can be a skin over a bottomless rut. Walk it and probe it with a stick or shovel handle before committing. If there is a way around, take the way around -- mud is the surface where a bad read most reliably ends in a winch or a tow, and where digging out is filthiest and slowest." },

  { kind: "h3", text: "Snow" },

  { kind: "p", text: "Fresh snow over an unknown surface hides everything -- ice, ruts, the edge of the road. Packed snow can hold traction with the right tires and pressures; ice responds to neither, and no amount of airing down helps on it. The specific trap is a road that is passable going in while the sun is up and freezes into a sheet you cannot climb back out on after dark. Judge snow by whether you can reverse the whole route, not just enter it." },

  { kind: "h3", text: "Slickrock and shelf" },

  { kind: "p", text: "Dry slickrock offers superb grip and is mostly a clearance and line problem rather than a traction one. The failures here are high-centering on a ledge and dropping a wheel into a crack, both of which are avoided by walking the line first and, on anything committing, having a second person spot you through it. Wet slickrock and any surface with sand over rock are different problems and grip far less than the dry rock suggests." },

  { kind: "key", text: "The read you can trust is the one you make on foot. From the seat, a firm track and a trap look identical, and the season is full of riders who learned the difference by getting out to dig after the fact instead of before. When the surface is in any doubt, walk it, probe the depth, and find the turnaround before the front tires commit." },

  { kind: "h2", text: "The minimum self-recovery kit" },

  { kind: "p", text: "A self-recovery kit is what lets you get yourself out without a second vehicle, a winch, or a phone call you may not be able to place. It is deliberately minimal -- four categories that cover the large majority of situations a van meets on soft or rough ground. Everything in it should be rated, in reach, and something you have actually used before the day you need it." },

  { kind: "table", caption: "Minimum self-recovery kit -- what and why", head: ["Item", "What it does", "Why it earns its space", "Common mistake"], rows: [
    ["Traction boards (pair)", "Give a firm surface under a spinning wheel", "Solves most sand, mud and snow bogs with no second vehicle", "Placing them loose instead of wedged hard against the tire"],
    ["Full-size shovel", "Clears ground ahead of and under the tires", "Digging out is the most-used recovery there is", "Carrying a tiny folding shovel that bends in real dirt"],
    ["Rated recovery strap", "Transfers pull from a second vehicle", "The way you get pulled out when self-recovery fails", "A ratchet strap or tow chain -- neither is a recovery strap"],
    ["Rated recovery points", "Anchor the strap to the vehicle", "The strap is only as safe as what it attaches to", "Hooking a strap to a tie-down loop or bumper bracket"],
    ["Compressor + accurate gauge", "Reinflates after airing down", "Makes airing down usable, not a one-way trip", "Buying a plug-in unit too small to fill heavy tires"],
    ["Gloves, recovery damper", "Protect hands; kill a strap's stored energy if it fails", "Cheap insurance against the way recoveries injure people", "Skipping the damper on a kinetic pull"],
  ]},

  { kind: "h3", text: "Rated is the word that matters" },

  { kind: "p", text: "The most dangerous error in the whole subject is using gear never built for the loads recovery puts on it. A recovery strap is engineered to stretch and absorb a shock load; a tow chain and a ratchet strap are not, and either can fail explosively under a kinetic pull. The same goes for anchors -- a factory tie-down loop or a bumper bracket is not a recovery point, and a strap that tears one loose turns steel into a projectile that can kill a bystander. Use rated straps, rated shackles, and rated points, keep everyone well clear of the line, and lay a damper over the strap." },

  { kind: "note", text: "A winch is useful and a larger commitment -- cost, mounting, weight on the front axle, and a skill set with its own failure modes. It is outside this minimum kit on purpose. Master the boards, the shovel and airing down first; they resolve most situations, and without the stored energy a loaded winch line carries." },

  { kind: "h2", text: "Technique: momentum, finesse, and not spinning" },

  { kind: "p", text: "Gear does not recover a vehicle; technique does, and the most important element is not spinning the wheels. A spinning tire digs. On sand it excavates itself to the axle in seconds; on snow it polishes a patch to ice; in mud it drills a hole and flings away the surface you needed. The instant the tires stop making forward progress, come off the throttle. Every extra second of spin makes the recovery longer." },

  { kind: "p", text: "Momentum and finesse are two tools for two problems. Momentum -- steady, controlled speed -- crosses a soft patch you can see the far side of, because you exit the soft ground before the vehicle has time to sink. Finesse -- the lightest throttle that maintains motion -- keeps a heavy vehicle moving on a marginal surface without breaking traction. The error is using throttle as the answer to both. More power is almost never the right response; it is the reflex that turns a soft spot into a dig." },

  { kind: "h3", text: "Digging out, in order" },

  { kind: "ol", items: [
    "Stop. The moment forward progress ends, come off the throttle. Do not try to power through -- you are only digging.",
    "Get out and look. Find which wheels are bogged, how deep, and what the vehicle is resting on. High-centered is a different problem than bogged tires.",
    "Air down if you have not already. Lower pressure alone frees many vehicles from sand and snow before any digging.",
    "Clear the ground. Dig the sand or mud away from in front of the drive wheels and from under the chassis if it is high-centered. Make a ramp, not a hole.",
    "Set the boards. Wedge a traction board hard against the front of each bogged drive tire, pushed down into the cleared ramp, not laid loose on the surface.",
    "Drive out gently. Lightest throttle that moves the vehicle, straight ahead, no wheelspin. Keep moving until you are on firm ground -- do not stop on the soft patch to celebrate.",
    "Recover the boards and reinflate before pavement. Both are easy to forget in relief and both matter.",
  ]},

  { kind: "note", text: "Never stand or dig directly behind or in front of a bogged vehicle with the engine running and someone in the seat, and never put a hand near a tire that could suddenly bite and roll. Recoveries injure people through impatience and a hand or foot in the wrong place, not through bad luck." },

  { kind: "h2", text: "Weather changes the surface after you have committed" },

  { kind: "p", text: "The surface you read going in is not the surface you meet coming out. Rain turns a firm clay road greasy in minutes and a passable one into a trap over an afternoon. A desert wash that is bone dry can run in a flash flood from a storm you never saw, miles upstream. Snow that softened enough to drive at noon sets into a sheet by dusk. The ground is not static, and planning that treats it as static is how a comfortable drive in becomes an impossible drive out." },

  { kind: "p", text: "The discipline is to plan the exit against the worst the weather can plausibly do, not against the conditions in front of you now. If rain is forecast and the road in is clay, the question is not whether you can get in -- it is whether you can get out after it rains, and the honest answer is often no. Clay-based and two-track roads change most and warn least." },

  { kind: "h2", text: "Turning around before you are committed" },

  { kind: "p", text: "This discipline outperforms every item of gear on this page, and it is the hardest to hold because it means stopping short of something you wanted to reach. A road you cannot back out of, dropping into ground you cannot climb out of, is the situation with the fewest good outcomes. Traction boards and a shovel resolve a bog. Nothing resolves being ten miles down a one-lane shelf road in a long-wheelbase van that has run out of turnarounds and cannot be reversed." },

  { kind: "p", text: "The habit is concrete. Before a questionable descent, a soft crossing, or a narrowing track, establish where the last place you can turn around is, and treat that point as a decision, not a suggestion. If the ground beyond it is in doubt, walk it before the vehicle follows. The rider who turns around at the last good turnaround loses an hour. The rider who drives past it hoping it improves can lose the vehicle, the day, and several hundred dollars to a tow that may be a long time coming." },

  { kind: "ul", items: [
    "Turn around when the road narrows past your ability to reverse it and you cannot see the far end.",
    "Turn around when a surface you walked is softer or deeper than it looked and there is no way around.",
    "Turn around when weather has moved and the exit will be worse than the entrance.",
    "Turn around when you are alone, out of communication, and the next section commits you to ground you cannot self-recover from.",
    "Turn around when the honest reason to continue is that you have already come a long way. That is a sunk cost, not a plan.",
  ]},

  { kind: "key", text: "The math is not close. A cautious turnaround costs an hour and a bruised ego. A stuck van on a remote road is a several-hundred-dollar tow at the very best, a lost day at minimum, and a genuine safety problem if you are far from help and out of communication. The site is still there next season. Hunt it when the ground will let you back out." },

  { kind: "h2", text: "What the official record covers, and what it cannot" },

  { kind: "p", text: "Maps and land data tell you where a road goes and who governs it. They do not tell you that the sand at the bottom is loose this week, that the clay is greasy after Tuesday's rain, or that the snow gate froze the exit shut overnight. Those are current conditions, and current conditions decide whether ground is passable today. This is the gap Vanism's rider check-ins are built to close -- a record carries the date a rider last confirmed the state of the ground, so a recent report of soft sand or a washed-out crossing is evidence you can weigh, not a rumor. Even then the check-in is a starting point. The surface in front of your tires, read on foot, is the only authority that counts at the moment you commit." },

  { kind: "h2", text: "Where this framework stops being reliable" },

  { kind: "p", text: "Everything above holds across most terrain most of the time, and terrain is where general rules are least trustworthy. A pressure that floats one rig across sand digs another in. A surface that a short-wheelbase truck crosses easily commits a long van to ruts it cannot climb. Local knowledge -- the district office, a current-conditions report, a rider who was on that exact road last week -- beats any number on this page, because it describes the ground as it is now rather than as it usually is." },

  { kind: "p", text: "Where safety is genuinely on the line -- a winch under load, a recovery near other people, a vehicle you cannot free after a serious attempt -- the right move is to stop and get help rather than escalate the risk. A professional recovery is a cost. A recovery that goes wrong under stored energy is a hospital visit. Carry the kit, learn the technique, air down before you need to, and above all keep the option to turn around, because the discipline of backing out early is the one skill that makes all the others rarely necessary." },
];
