import type { Block } from "./blocks";

/** Leave no trace and keeping the ground open -- Vanism pillar. */
export const PILLAR_LEAVE_NO_TRACE_AND_KEEPING_ACCESS_OPEN: Block[] = [
  { kind: "key", text: "Dispersed camping on public land is a permission, not a right, and it is spent by the worst behavior on the ground. Agencies close areas parcel by parcel when a place shows wear -- fire rings, braided roads, human waste -- and closed ground rarely reopens. The seven Leave No Trace principles are the operating manual for keeping a site invisible enough that nobody has cause to close it, and leaving a place as you found it is part of keeping an honest account of where you have been." },

  { kind: "p", text: "Leave No Trace is usually taught as an ethic, and it is one. But for a rider who wants to keep camping on public land for the next twenty seasons, it is better understood as self-interest. Every acre open to dispersed camping is open because the agency managing it has decided the impact is tolerable. That decision is revisited constantly, and it is revisited on evidence: what the ground looks like, how much complaint it generates, how much a district spends cleaning up after the people on it." },

  { kind: "p", text: "The freedom to pull off a forest road and sleep for the night is held collectively. No individual owns it. It is extended to everyone and withdrawn from everyone, and it is withdrawn when a place accumulates enough damage that keeping it open costs more than closing it. A fire ring left in fresh ground, a pullout widened by a season of vehicles, a pile of toilet paper behind a juniper -- each is a small argument, filed with the land manager, for the next closure. The rider who leaves those behind is not just breaking a rule. They are spending permission that belongs to everyone who comes after." },

  { kind: "p", text: "This page covers the seven principles applied to van life and dispersed camping, the mechanism by which access gets withdrawn, and the honest account of why leaving no trace is the price of the ground staying open. The argument stands without moralizing: keep the ground looking unused, or lose the ground." },

  { kind: "h2", text: "The seven principles, and why they exist" },

  { kind: "p", text: "Leave No Trace is a framework maintained by a nonprofit and adopted, in one form or another, by every federal land agency. It was written for backpackers, so some of it translates cleanly to a vehicle and some has to be reinterpreted -- a rider carrying forty gallons of water and a cassette toilet has different obligations than a hiker with a trowel. Here is the full set, stated plainly, with the vehicle-specific version alongside." },

  { kind: "table", caption: "The seven Leave No Trace principles applied to the road", head: ["Principle", "Backpacker version", "What it means in a vehicle"], rows: [
    ["Plan ahead and prepare", "Know the rules and pack right", "Read the district rules and MVUM at the desk; carry water, waste bags, and a fire alternative before you leave pavement"],
    ["Travel and camp on durable surfaces", "Walk and pitch on rock, gravel, dry grass", "Park only on existing sites and hardened ground; never create a new spur or widen a pullout"],
    ["Dispose of waste properly", "Cathole and pack out paper", "Carry out human waste where required; manage grey water; leave no trash, including litter that is not yours"],
    ["Leave what you find", "Take nothing, build nothing", "Do not build fire rings, move rocks, cut branches, or leave structures; dismantle nothing that is load-bearing for erosion"],
    ["Minimize campfire impacts", "Small fires in existing rings or none", "Use existing rings only; a stove with a shutoff valve is the resilient choice across a fire-restricted season"],
    ["Respect wildlife", "Store food, keep distance", "Secure food and trash; do not feed animals; keep 100-plus feet from water so wildlife can reach it"],
    ["Be considerate of others", "Quiet, yield, share", "Generators and lights off at night; camp out of sight where you can; a bad neighbor generates the complaint that closes the road"],
  ]},

  { kind: "p", text: "The order matters less than the coverage, and three principles carry the most weight for keeping ground open: durable surfaces, waste, and fire -- the three that leave visible, lasting, complaint-generating damage. A rider who does the other four well but ignores waste and fire has still done the two things most likely to close a district. The rest matter; those three are the ones agencies cite." },

  { kind: "h2", text: "Durable surfaces, and the site you should be using" },

  { kind: "p", text: "The most consequential habit in dispersed camping is where you put the vehicle. Ground that is already compacted -- an established site with a clear footprint, no live vegetation underneath, often an existing fire ring -- absorbs another vehicle without further damage. Fresh ground is the opposite: vegetation crushed under tires does not recover in a season, and in arid country the tracks are still visible from the air years later." },

  { kind: "p", text: "Most agencies now require using existing sites where they exist, and durable surfaces -- rock, gravel, compacted dirt, dry grass -- where they do not. It is the mechanism by which a heavily used area stays open: if everyone concentrates on the sites that already exist, the damage stays concentrated and the surrounding ground stays clean. The alternative, everyone finding a fresh spot, is what turns one worn pullout into a field of them." },

  { kind: "h3", text: "The two failures that create new impact" },

  { kind: "p", text: "Two behaviors do more to close ground than anything else, because they permanently enlarge a site's footprint. Both feel harmless." },

  { kind: "ul", items: [
    "Widening a pullout. A site is full, so a rider parks half on the established ground and half on the vegetation at its edge. The next rider parks a little further out, using those tracks as the new edge. Within a season the pullout has doubled and the vegetation is gone -- no single rider did it, all of them did.",
    "Cutting a new spur. A rider drives a short distance off an existing track for a better view, creating a faint two-track. The next rider sees a road and follows it. A braided web of user-created roads is one of the most-cited reasons the Forest Service closes an area to motor vehicles entirely -- each spur is legally cross-country travel, and collectively they fragment habitat.",
  ]},

  { kind: "p", text: "The rule that prevents both is worth stating as an absolute: use the site that exists, at the size it exists, or move to another. Do not improve it, extend it, or connect it to anywhere. If every established site is full, the area is at capacity for the night, and the answer is to drive to the next drainage rather than manufacture a site by damaging ground." },

  { kind: "note", text: "A useful test: if a photograph taken after you leave would show a vehicle had been on that ground, it is the wrong ground. For fresh ground the standard is not \"low impact\" but no visible impact, because visible impact is the evidence a closure is built on." },

  { kind: "h2", text: "Waste, and the rule that decides the future of this" },

  { kind: "p", text: "Human waste is the single issue most likely to determine whether dispersed camping remains broadly permitted over the next decade. Land managers cite it more than any other factor when they close an area -- it is the most visible, the most complained-about, and the most directly a public-health matter. A popular area near a trailhead can accumulate a hazardous concentration of waste and paper in one busy season, and once a district office is fielding complaints, the clock on that area is running." },

  { kind: "p", text: "The vehicle changes the obligation here, mostly for the better: a rider is not limited to a trowel and a cathole the way a backpacker is, and can carry the entire problem out." },

  { kind: "table", caption: "Waste handling, from best to worst for keeping ground open", head: ["Method", "Where it fits", "Impact on access"], rows: [
    ["Cassette or composting toilet, dumped at a station", "Any rider staying more than a night or two", "Removes the question entirely; the reason many long-season riders carry one"],
    ["Waste bags packed out", "High-use areas that mandate them, sensitive ground", "Zero ground impact; increasingly required, so check the district"],
    ["Proper cathole", "Where burial is still permitted, soil that supports it", "Acceptable if done right: 6-8 inches deep, 200 feet from water, camp and trail"],
    ["Grey water scattered well away from water", "Dishwater, wash water", "Low impact if dispersed; a concentrated pour kills a patch and draws animals"],
    ["Surface waste, paper left behind", "Never", "The single most-cited reason areas close; each pile is an argument for the next closure"],
  ]},

  { kind: "ul", items: [
    "Paper leaves with you regardless of local rules. It does not break down at the rate people assume, particularly in dry country, and buried paper is routinely dug up by animals and scattered. A sealable bag costs nothing and settles the matter.",
    "Grey water is not neutral. Food particles and soap draw wildlife and foul the ground if poured in one place. Strain the solids into your trash, then scatter the water at least 200 feet from any stream, lake, or spring.",
    "Carry it out where required, and the list of areas requiring it grows every year. A district that mandates pack-out is telling you the ground is already under pressure -- exactly where compliance decides whether it stays open.",
  ]},

  { kind: "key", text: "The habit that matters most is leaving every site cleaner than you found it, other people's trash included. The land manager deciding whether to close an area is reading the ground, not the guest register. What the place looks like when they walk it is the whole case, and you are one of its authors whether or not you made the mess." },

  { kind: "h2", text: "Fire, the fastest way to lose everything" },

  { kind: "p", text: "Fire is the principle with the most serious consequences for getting it wrong, in both directions. An escaped campfire can close an entire region for years and end dispersed camping across a forest in a single season. A fire ring built in fresh ground is a smaller offense but a durable one -- a blackened ring of rocks is a permanent-looking scar and an invitation for the next person to camp exactly there." },

  { kind: "p", text: "The durable-surface logic applies to fire as strictly as to parking. Use an existing ring or have no fire; do not build a new ring or move rocks to make one. A proliferation of user-built rings across a meadow is one of the visual signatures land managers use to judge an area over-used." },

  { kind: "h3", text: "Why the stove is the resilient choice" },

  { kind: "p", text: "Across most of the West between June and October, fire restrictions escalate through stages, and a route built around campfires is fragile throughout. A stove with a shutoff valve survives Stage 1 and usually Stage 2 -- across a long season, the difference between a plan that holds and one that collapses in July." },

  { kind: "table", caption: "Fire behavior and what it costs the ground", head: ["Behavior", "Restriction stage it survives", "Effect on access"], rows: [
    ["Stove with a shutoff valve", "Through Stage 2 in most districts", "Negligible; the choice that keeps cooking legal deepest into the season"],
    ["Fire only in an existing ring, fully out", "No restrictions only", "Acceptable when permitted; leaves no new scar"],
    ["New fire ring built in fresh ground", "Never acceptable", "Permanent-looking scar; signals over-use; invites the next ring"],
    ["Fire during a restriction, or left smoldering", "Never", "The behavior that closes a forest for a decade and ends the privilege for everyone"],
  ]},

  { kind: "note", text: "\"Out\" means cold to the touch. A fire is not out because the flames are down; it is out when you can put your hand in the ash. The overwhelming majority of human-caused wildfires that close public land start from a campfire the rider believed was out. If you cannot drown it and stir it and feel that it is cold, you have not put it out." },

  { kind: "h2", text: "Wildlife, quiet, and staying out of sight" },

  { kind: "p", text: "Two of the seven principles -- respect wildlife, and be considerate of others -- rarely leave a physical scar, so they do not build the same closure case that waste and fire do. But they generate the other input a land manager weighs: complaint. A district fielding steady complaints about noise, feeding, or crowding near a trailhead has a paper trail pointing the same direction as a worn meadow." },

  { kind: "p", text: "Respecting wildlife on the road is mostly food and distance. Secure food and trash so animals do not learn to associate vehicles with a meal -- a fed animal is eventually a dead or relocated one. Keeping 100-plus feet back from water leaves the corridor wildlife needs to reach it, which matters most in dry country where that spring is the only water for miles." },

  { kind: "p", text: "Being considerate is the cheapest access insurance there is: generators and lights off after dark, sound kept inside the vehicle, camping out of sight of the road where the terrain allows. A rider nobody noticed generates no complaint, and a site invisible from the road does not read as crowded even when used nightly. Out of sight is most of leave no trace." },

  { kind: "h2", text: "The mechanism: how access actually gets withdrawn" },

  { kind: "p", text: "The process is administrative, incremental, and almost never reversed, and understanding it turns Leave No Trace from a set of rules you follow into a system you have a stake in. An agency does not close a region. It closes a parcel -- a road, drainage, or dispersed area -- through a documented decision that cites impact: resource damage, water contamination, user-created roads, fire risk, and cleanup cost. Each closed parcel pushes its former users onto the remaining open ground, which raises the impact there, which builds the case for the next closure. The pattern has repeated across the West for more than a decade, and it runs one direction." },

  { kind: "table", caption: "Behaviors that trigger closures vs behaviors that keep ground open", head: ["Triggers a closure", "Keeps the ground open"], rows: [
    ["Building fire rings and leaving burned ground", "Using existing rings only, or a stove; leaving no scar"],
    ["Widening pullouts and cutting new spurs", "Parking on existing sites at their existing size"],
    ["Human waste and paper left on the surface", "Carrying waste out or burying it properly, paper always out"],
    ["Grey water and trash concentrated at a site", "Scattering grey water far from water; packing out all trash, yours and others'"],
    ["Camping on fresh vegetation near water", "Camping on durable ground 100-plus feet back"],
    ["Generators and lights all night, loud sites", "Quiet after dark, camped out of sight, no complaints filed"],
    ["Staying past the limit and returning to the same spot", "Moving on within the stay limit, spreading use out"],
  ]},

  { kind: "p", text: "The asymmetry in that table is the whole argument. The left column feels minor to the person doing it and reads as evidence to whoever can close the ground; the right column costs almost nothing and gives a land manager no reason to act. Keeping ground open is not heroic. It is mostly a matter of not being the entry in an incident log." },

  { kind: "h3", text: "Why closed ground stays closed" },

  { kind: "p", text: "Reopening a closed area requires an agency to spend staff time, rehabilitate the ground, and accept the liability of inviting people back to a place that failed once. There is rarely budget or appetite for it -- a closure is cheap to issue and expensive to reverse. The realistic planning assumption is that ground open today may close, and ground closed today will stay closed, which makes every open acre worth protecting as if it were finite, because in practice it is." },

  { kind: "h2", text: "The honest account: permission spent by the worst behavior" },

  { kind: "p", text: "Here is the uncomfortable part. Access is not earned by the individual who behaves well. It is a collective permission, priced by the worst behavior on the ground rather than the average. One rider who does everything right does not bank goodwill that offsets the rider who leaves a fire ring and a bag of trash -- the land manager sees the trash, not the good camper who left the day before." },

  { kind: "p", text: "So the ethic cannot be purely personal. \"I pack out my own waste\" is necessary and not sufficient, because the closure decision is made on the state of the place -- the sum of everyone's behavior, dominated by the worst of it. There is no version where an individual keeps their own ground open by personal virtue while the commons degrades around them: the parcel closes for everyone or stays open for everyone. The rider who carries out other people's litter and parks tight so the pullout does not grow is not being good. They are holding the average up against the people whose mess is the argument for the closure that takes everyone's campsite too." },

  { kind: "h2", text: "Tie to the record: leaving it as you found it" },

  { kind: "p", text: "Vanism's premise is that a place is worth what someone can confirm about it -- an honest account of where riders have been and what they found. Leaving no trace is the other half of that account. Keeping an honest record of the ground includes leaving the ground honest: as you found it, so the next rider's report describes the same place you camped in, not a degraded version of it." },

  { kind: "p", text: "A site that gets worse every time it is used stops being the place the record describes. The pullout that was one vehicle wide becomes four; the clean drainage becomes a fire-ring field; the quiet spot near water becomes a closure notice. If the account is to mean anything over seasons, the ground has to stay stable enough that a confirmation from two years ago still describes what is there. Keep a real record and leave no trace, and you are running the same discipline twice: report only what you confirmed, and leave the ground in the condition your report describes." },

  { kind: "note", text: "Official maps and district rules tell you where camping is permitted and how the ground should be treated. They do not tell you what a specific site looks like this season -- whether the pullout has been widened, whether someone left a mess, whether the drainage is holding up. That current condition is the one thing a rider on the ground knows that the record does not, until someone brings it back. It is where a dated, on-the-ground confirmation is the only source that helps." },

  { kind: "h2", text: "A pre-departure and pre-drive-off checklist" },

  { kind: "p", text: "Most of Leave No Trace is decided before the rider is tired -- at the desk and at the moment of choosing a site, not at the moment of leaving it. Two short checklists cover most of it." },

  { kind: "h3", text: "At the desk, before the run" },

  { kind: "ol", items: [
    "Read the district rules for waste and fire specifically; note whether pack-out is mandated and what fire stage is in effect.",
    "Confirm you are carrying a fire alternative -- a stove with a shutoff valve -- so a restriction does not strand your cooking.",
    "Carry waste bags or confirm your cassette is empty and you know where the nearest dump station is.",
    "Plan to arrive with enough daylight to find an existing site; site-hunting after dark is how riders end up parking on fresh ground.",
  ]},

  { kind: "h3", text: "Before you drive off the site" },

  { kind: "ol", items: [
    "Walk the site. Pick up everything that is not growing there, including anything that was here when you arrived.",
    "Confirm any fire is cold to the touch -- hand-in-the-ash cold, not just flames down.",
    "Scatter grey water well away from any water source; pack out all paper and trash.",
    "Check that the site is no larger and no more marked than when you arrived: no new ring, no new tracks, no moved rocks.",
    "Look back once from the road: if a photograph would show you had been there in a way the ground cannot absorb, fix it first.",
  ]},

  { kind: "p", text: "None of this takes long. The walk-the-site habit adds a few minutes and is the highest-leverage few minutes in the practice: it is the moment the ground is left either as evidence for a closure or as a place nobody has reason to close." },

  { kind: "h2", text: "Where this framework stops" },

  { kind: "p", text: "Everything above is the general operating manual, and the general manual is wrong somewhere in every state. Some districts prohibit fires that others permit; some mandate pack-out where others still allow catholes; some set a distance from the road or water, or close a specific drainage, that no national principle would tell you about. The seven principles are the floor, not the local code." },

  { kind: "p", text: "The district office is the authority on what its ground requires, and current conditions on a specific site come from someone recently standing on it. Call the district for the rules; check fire restrictions and closures before you leave, because those change fastest; and for what a place looks like this season, trust a dated confirmation from the ground over any static source, including this page. Leave it as you found it, keep the account honest, and the ground stays open for the next rider to confirm." },
];
