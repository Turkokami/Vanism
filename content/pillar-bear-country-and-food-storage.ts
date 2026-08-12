import type { Block } from "./blocks";

/** Bear country and food storage -- Vanism pillar. */
export const PILLAR_BEAR_COUNTRY_AND_FOOD_STORAGE: Block[] = [
  { kind: "key", text: "In bear country, store every scent -- food, trash, toothpaste, cookware, anything with an odor -- in an approved canister, a provided bear locker, or a hard-sided vehicle, not in your tent and not in a hang unless a hang is the only accepted method there. Where storage is legally required, an approved container is a requirement you can be cited for ignoring, not a suggestion. The reason is not your safety alone: a bear that gets a human meal learns to seek more, and a food-conditioned bear is usually killed. You store food to protect the animal as much as yourself." },

  { kind: "p", text: "Bears in the backcountry are a management problem, not a horror story. The animal is not hunting you. It is following its nose toward calories, and a camp careless with food, trash or cookware is a reliable source a bear will return to. Almost everything that goes wrong between riders and bears traces back to a scent stored where a bear could reach it." },

  { kind: "p", text: "The phrase land managers repeat is \"a fed bear is a dead bear,\" and it is literal. A bear that associates people with food loses its fear, moves into campgrounds and trailheads, and eventually gets relocated or destroyed because it has become a danger. The bear pays for the mistake. That is why food storage is framed here as an obligation to the animal first and a convenience to you second -- both goals point the same way, but the animal is the one with everything to lose." },

  { kind: "p", text: "This page covers what counts as a scent, where storage is required and what is accepted, how the methods compare, why hangs fail, how black bear and grizzly behavior differ, and how to store food in a van at a basecamp. The general rules hold across most of the country; the exact requirement for a unit comes from that unit's office, and it beats anything here." },

  { kind: "h2", text: "The one rule everything else serves" },

  { kind: "p", text: "One rule sits underneath all of bear-country food storage, and every practice honors it: keep human food, and the smell of it, out of a bear's reach and out of a bear's diet. A bear that never gets a reward from a camp stays wild and avoids people. A bear that gets one reward starts working for the next, and the escalation from there is short." },

  { kind: "p", text: "The progression is well documented. A bear finds an unsecured cooler or a scented pack and gets a high-calorie meal for almost no effort. It returns, works the next site that smells similar, then stops waiting for camps to be empty. Within a season a bear can go from wild to a campground fixture that pops car doors and bluff-charges people for their lunch, and the agency's options narrow to relocation, which usually fails, or destruction, which usually does not." },

  { kind: "note", text: "Relocation sounds humane and rarely works. A food-conditioned bear moved fifty miles either returns or repeats the behavior in its new range. Agencies relocate as a first try and destroy as the common outcome. The clean way to keep a bear alive is to make sure it never gets the first meal. You are not defending a perimeter against an attacker; you are keeping a clean camp so the local bears never learn your kind is worth investigating." },

  { kind: "h2", text: "What counts as a scent" },

  { kind: "p", text: "The most common storage failure is defining \"food\" too narrowly. A bear's nose does not distinguish a sealed energy bar from an open one, or food from the things that smell like food. Everything a bear might investigate belongs in secure storage, and the list is longer than most people carry in their heads." },

  { kind: "ul", items: [
    "All food, sealed or open, including freeze-dried meals people assume have no odor -- they do.",
    "Trash and food packaging, which often smells stronger than the food did.",
    "Cookware, stoves, and utensils that carry grease and residue after use.",
    "Toiletries -- toothpaste, sunscreen, lip balm, deodorant, soap, insect repellent -- all scented, all attractants.",
    "The clothes you cooked in, if food splattered on them.",
    "Pet food and pet bowls, which are among the strongest and most overlooked attractants.",
    "Anything sweet or fragrant: drink mixes, cough drops, gum, a scented bandana.",
  ]},

  { kind: "p", text: "The working definition is simpler than the list: if it has an odor a person can notice, assume a bear notices it from far greater distance and store it accordingly. A bear's sense of smell is on the order of a hundred times keener than a bloodhound's -- you are not managing what you can smell in the tent, but what a bear smells from a drainage away." },

  { kind: "table", caption: "Common attractants and how they are handled", head: ["Item", "Attractant strength", "Where it goes"], rows: [
    ["Sealed and open food", "High", "Canister, locker, or hard-sided vehicle"],
    ["Trash and packaging", "Very high -- often stronger than food", "Same storage as food; packed out, never buried"],
    ["Cookware and stove", "Medium after use", "Cleaned, then stored with food"],
    ["Toiletries (toothpaste, sunscreen, soap, repellent)", "Medium to high", "Stored with food, never in the tent"],
    ["Pet food and bowls", "Very high", "Stored with food; never left out overnight"],
  ]},

  { kind: "note", text: "Toothpaste is the item people get wrong most. It is sweet, strongly scented, and it goes to bed in the tent because brushing is the last thing before sleep. Brush, spit well away from the tent by scattering rather than pooling, and put the tube in the canister with everything else." },

  { kind: "h2", text: "Cook, sleep, and store in three separate places" },

  { kind: "p", text: "The single most useful habit in bear country is separating three activities people naturally do in one place: cooking, sleeping, and storing food. Collapse them into one spot and any bear drawn by the cooking smell arrives where you sleep. Keep them apart and a bear investigating the food smell finds a canister, not a tent." },

  { kind: "p", text: "The standard for backcountry camps is a triangle: cooking area, food storage, and sleeping area each at a separate corner, ideally around 100 yards apart, with the sleeping area upwind if the wind is steady. Cook, eat, and clean up at the cooking corner, store all scents at the storage corner, and carry nothing scented back to the tent. The triangle relaxes at a developed site with a locker and changes shape for a van, but the principle never does: the place you sleep carries no food smell, ever." },

  { kind: "h2", text: "Where storage is required, and what is accepted" },

  { kind: "p", text: "In much of bear country, food storage is not advice -- it is a regulation with a citation attached, and in some places the accepted method is specified down to the container. The requirement is set by the managing unit: a park, a ranger district, a wilderness area, or a state agency. Assume nothing carries over; the rule at one park boundary can change the moment you cross into the forest next door." },

  { kind: "p", text: "Broadly, the accepted methods are an approved hard-sided canister, an agency-provided bear locker, a hard-sided vehicle where explicitly allowed, and in some places a hang that meets a specified standard. Where a food storage order is in effect, storing scents any other way -- in a tent, a soft pack, or an unapproved container -- is the citable act, whether or not a bear ever shows up." },

  { kind: "table", caption: "Storage methods compared", head: ["Method", "Where required or accepted", "Effectiveness", "Weight / effort"], rows: [
    ["Approved canister", "Accepted almost everywhere; required in many parks and wilderness", "Very high -- bear cannot open it", "About 2-3 lb; holds a fixed volume"],
    ["Bear locker / provided box", "Where installed at campgrounds and busy trailheads", "Very high -- stronger than anything you carry", "None; must be present and latched"],
    ["Hard-sided vehicle", "Accepted in most black bear country; not enough in habituated parks", "High if hard-sided and out of sight; low with a fabric top", "None to carry; a soft top does not count"],
    ["Hang (12-6-6)", "Only where permitted and a proper tree exists; barred in grizzly country", "Moderate at best; often reachable, easily botched", "Light kit; high skill and a suitable tree"],
    ["Tent / soft pack", "Never -- the citable failure under any storage order", "None -- puts the scent where you sleep", "n/a"],
  ]},

  { kind: "table", caption: "Where food storage is typically required", head: ["Land unit", "Requirement", "What to verify"], rows: [
    ["National parks in bear country", "Storage order almost always in effect; canister or provided locker required", "Park's food storage regulations and whether hangs are still permitted"],
    ["National forest -- food storage order area", "Approved canister or hard-sided storage where posted", "The specific order for that ranger district"],
    ["Designated wilderness (e.g. Sierra)", "Approved canister often mandatory; specific models required", "The unit's approved canister list"],
    ["Grizzly country generally", "Hard-sided storage strongly required; hangs discouraged or barred", "Whether canisters are the only accepted method"],
    ["BLM and general public land", "Often no formal order, but storage still expected", "Local guidance; store as if required regardless"],
  ]},

  { kind: "h2", text: "Approved canisters" },

  { kind: "p", text: "The hard-sided bear canister works almost everywhere and is accepted almost everywhere. It is a rigid cylinder a bear cannot open, bite through, or get a purchase on. You put every scent inside, close it, and set it on the ground 100 yards or more from your tent -- no tree, no rope, no rigging. Its virtue is that it is foolproof: nothing to rig wrong in the dark and nothing for a bear to defeat with patience. Its cost is weight and volume -- roughly two to three pounds empty and a fixed capacity that sets a ceiling on trip length before a resupply. In many places it is not a trade you get to decline." },

  { kind: "ul", items: [
    "Set it on flat ground away from cliffs, water, and steep slopes -- a bear may roll or bat it, and you do not want it going over an edge or into a creek.",
    "Do not tie it to anything; a tether gives a bear leverage and can help it break the canister or carry it off.",
    "Close it fully every time, including during the day and during meals -- most raids happen when a canister is open and unattended.",
  ]},

  { kind: "h2", text: "Bear lockers and provided storage" },

  { kind: "p", text: "Many developed campgrounds and popular trailheads install steel food-storage lockers -- bear boxes. Where one is provided, it is the accepted method and usually the required one: put all food and scents inside, latch it fully, and store nothing in your tent or an open vehicle. The locker is stronger than anything you carry and removes the question for the night." },

  { kind: "p", text: "Two failures are common. The first is not latching -- a locker left ajar is an invitation, and bears in developed areas exploit one that did not close. The second is treating the locker as optional because a vehicle is right there. Where a storage order names the locker, the vehicle is not a substitute, and bears in habituated areas have learned to break into cars but not lockers. Use what the site provides." },

  { kind: "h2", text: "Hanging food, and why hangs often fail" },

  { kind: "p", text: "Hanging a food bag from a tree is the traditional method and the one most likely to give a false sense of security. A properly executed hang can work in black bear country where no canister is required. But a hang is a technique, and techniques fail -- most hangs people rig are reachable by a determined bear, and in grizzly country and many parks hangs are no longer accepted because bears have learned to defeat them." },

  { kind: "p", text: "The standard for a working hang is demanding: the bag at least 12 feet off the ground, 6 feet out from the trunk, and 6 feet below the branch -- the 12-6-6. Meeting it requires a tree with a strong horizontal limb at the right height, a line thrown over it in the dark, and a heavy bag hauled up without the branch sagging or the bag swinging to the trunk. In much of the terrain riders camp -- alpine, desert, young forest -- a tree meeting the standard simply does not exist." },

  { kind: "table", caption: "Why hangs fail", head: ["Failure", "What happens", "Consequence"], rows: [
    ["Too low", "Bag under 12 feet; bear stands and reaches", "Bear takes the food"],
    ["Too close to trunk", "Bear climbs and swipes inward", "Bear takes the food"],
    ["No suitable tree", "Alpine, desert, or young forest has no branch", "Method is unavailable, not just hard"],
    ["Habituated bears", "Local bears have learned to defeat hangs", "Hang no longer accepted; often barred"],
  ]},

  { kind: "p", text: "The honest position: a hang is a fallback for black bear country where the unit permits it and you have both a proper tree and the skill. It is not a substitute for a canister where one is required, and not a method to rely on in grizzly country. Carry a hang kit knowing its limits, and where a storage order is in effect, the hang must meet that order's stated standard or it is non-compliant regardless of how it looks." },

  { kind: "h2", text: "Black bear and grizzly behavior are different problems" },

  { kind: "p", text: "The two bears you plan around in North America behave differently enough that the storage rules tighten and the encounter response inverts. Knowing which bear's country you are in changes how you store food and what you do if you meet one. The ranges overlap in parts of the northern Rockies and Alaska; where they overlap, plan for the grizzly, the animal with less tolerance." },

  { kind: "h3", text: "Storage" },

  { kind: "p", text: "In black bear country, a good hang or a canister both have a place and unattended food is the whole problem. In grizzly country, hard-sided storage is the expectation, hangs are discouraged or barred, and the margin for a careless camp is thinner. Grizzlies are larger, more likely to investigate a camp directly, and more likely to treat a person as a competitor at a food source. The discipline that is good practice with black bears is close to mandatory with grizzlies." },

  { kind: "h3", text: "Encounters" },

  { kind: "p", text: "The response to a bear that has committed to you differs by species, and getting it backwards is dangerous. The table below is general guidance for a defensive encounter, not a rare predatory one, and it is not a substitute for a unit's bear-safety material." },

  { kind: "table", caption: "Black bear vs grizzly -- general response", head: ["Situation", "Black bear", "Grizzly"], rows: [
    ["Identify", "Smaller, tall ears, straight face profile, no shoulder hump", "Shoulder hump, dished face, longer claws, larger"],
    ["Bear at a distance", "Give space, make noise, back away", "Give space, make noise, back away"],
    ["Bear approaches / bluff charge", "Stand your ground, look large, be loud", "Stand your ground, ready bear spray, do not run"],
    ["Contact -- defensive attack", "Fight back, focus on the face", "Play dead: on your stomach, hands over neck, legs spread"],
    ["Contact -- persists or is predatory", "Fight back with everything", "If the attack continues past defensive, fight back"],
    ["In camp after food", "Be aggressive, drive it off, deny the reward", "Do not contest food closely; back off, protect yourself"],
  ]},

  { kind: "p", text: "The core inversion: with a grizzly in a defensive attack, playing dead signals you are not a threat and the bear usually breaks off. With a black bear, playing dead invites it to treat you as food, so you fight. The universal parts are that you never run from either -- running triggers pursuit and you cannot outrun a bear -- and that bear spray, deployed at the right range, is the most effective tool for stopping a charge of either species." },

  { kind: "note", text: "Bear spray is carried on your body where you can reach it in seconds, not buried in a pack. It is a defensive tool for a charging bear at close range, deployed as a cloud into the bear's path -- not a repellent you spray on gear or a perimeter. Airline rules bar it from flights, so plan the logistics before the trip." },

  { kind: "h2", text: "Van storage at a trailhead basecamp" },

  { kind: "p", text: "A van at a trailhead is a hard-sided box, and in most black bear country that is what secures your food -- inside the vehicle, out of sight, windows up, doors locked. But a van has weaknesses, and in habituated areas and grizzly country the rules for it are stricter than riders expect. Treat the van as a storage container to be managed, not a guarantee." },

  { kind: "h3", text: "Where the vehicle counts as storage" },

  { kind: "p", text: "In most general public-land bear country, a hard-sided vehicle with food stored out of sight satisfies the intent and often the letter of storage guidance. The failure mode is a soft pop-top or a cracked window -- a canvas top is not hard-sided, and a bear that smells food through a gap will work at it. If your rig has a fabric top, food goes below in the hard cab or a canister." },

  { kind: "h3", text: "Where the vehicle is not enough" },

  { kind: "p", text: "In the most habituated parks and forests, bears have learned to break into cars -- peeling a door, popping a window -- and the storage order there requires a locker or canister even with a vehicle present. A cooler visible on a seat is a broken window waiting to happen. Read the unit's order: where it names a locker, use it, and store nothing scented in the van overnight." },

  { kind: "ul", items: [
    "Keep food, trash, cookware, and toiletries out of sight -- a visible cooler is what draws a break-in, so nothing scented sits on a seat or dash.",
    "A hard-sided pop-top down and latched is storage; a fabric top up is not -- move scents to the hard cab or a canister when the top is up.",
    "Cook and eat outside and away from the sleeping area, then bring nothing scented back into the van.",
    "In grizzly country and habituated parks, use the provided locker or a canister even with the van right there.",
    "Pack out all trash; a bag of garbage in the footwell overnight is a stronger attractant than the food was.",
  ]},

  { kind: "note", text: "A van at a busy trailhead is also part of a shared problem. One rig that leaves a cooler out and gets raided teaches the local bear that trailhead vehicles are worth breaking into, and the next rider pays for it. Running a clean van is not only self-protection; it keeps the trailhead from becoming a place bears work." },

  { kind: "h2", text: "Building the habit into a run" },

  { kind: "p", text: "Bear-country storage is not a thing you do once; it is a rhythm kept every time food comes out and goes away. The riders who never have an incident have made securing scents automatic. On a long run through bear country, that rhythm is worth planning at the desk before the season, not improvising at the trailhead." },

  { kind: "ol", items: [
    "Before the run, confirm the food storage order for each unit you will camp in and whether an approved-canister list applies.",
    "Carry the accepted method for the strictest unit on the route -- usually a canister -- so one container covers the whole circuit.",
    "At every camp, set storage, cooking, and sleeping apart, and keep the sleeping area free of all scent.",
    "Close the canister or latch the locker after every meal and every snack, not just at night.",
    "Pack out all trash and food packaging; never bury or burn it.",
    "Carry bear spray on your body and know the species whose country you are standing in.",
  ]},

  { kind: "p", text: "Where the official record stops helping is current conditions: which drainage has an active bear this week, whether a trailhead just had a break-in, whether an order tightened after an incident. Rules are published; recent bear activity on a particular piece of ground is road intel from riders who were just there. Vanism records carry the date a rider last confirmed a site, so a dated note on recent bear activity is worth more than any static warning -- but the storage rules themselves come from the managing unit, and they are the authority." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "Everything above is the general framework, and the specific requirement for the ground you are standing on is set by the office that manages it. A park, a ranger district, a wilderness area, and a state land agency can each require a different method, name a different approved container, and change the order after an incident without much notice. The figures here are the working standard, not a statute for your unit." },

  { kind: "p", text: "The authority is the managing unit's food storage regulation and its current conditions. Call the district office or the park's backcountry desk, read the posted order at the trailhead, and ask a ranger which bear is active this season. Ten minutes there settles what method is required and what the bears are doing now, and both beat anything you read in advance -- including this. The goal underneath does not change: keep every meal out of every bear, so the bear stays wild and the ground stays open to riders." },
];
