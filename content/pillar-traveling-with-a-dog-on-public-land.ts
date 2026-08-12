import type { Block } from "./blocks";

/** Traveling with a dog on public land -- Vanism pillar. */
export const PILLAR_TRAVELING_WITH_A_DOG_ON_PUBLIC_LAND: Block[] = [
  { kind: "key", text: "Dogs are generally welcome on BLM and national forest land, usually off-leash where no local order says otherwise, and generally banned from the trails inside national parks. Designated Wilderness is a case-by-case patchwork. The two rules that carry everywhere: a dog under real control in predator country stays alive and keeps the ground open, and a dog is never left in a parked van in heat -- the interior passes lethal in minutes, not hours." },

  { kind: "p", text: "A dog changes how you plan a run, not whether you can take one. Most of the federal ground a rider actually camps and hikes on -- BLM holdings and national forests -- admits dogs, much of it off-leash. The exceptions are specific, they are enforced hardest where people assume they are relaxed, and getting one wrong costs more than a citation. It can cost the dog, and the access for the riders after you." },

  { kind: "p", text: "The framework is worth learning cleanly, because the general rule and the local exception point in opposite directions often enough that guessing is unreliable. A national forest and the national park sharing its border can run the same ridgeline under opposite dog policies. The leash order that looks like bureaucratic caution is, in predator country and in nesting season, a survival rule with a body count behind it. This page covers where dogs are allowed, the leash rule as a wildlife rule, the heat that kills dogs in parked vans, water and trail hazards, and how to keep dogs welcome for the next rider." },

  { kind: "h2", text: "Which agency governs whether your dog is welcome" },

  { kind: "p", text: "As with every question about public land, the first thing to establish is who manages the parcel, because the managing agency sets the dog rule set. Treating the agencies interchangeably is the most common way to arrive somewhere and find the dog is not allowed past the parking lot." },

  { kind: "table", caption: "Dog rules by land agency", head: ["Agency", "Dogs on trails", "Leash default", "What to check first"], rows: [
    ["Bureau of Land Management", "Generally allowed across most holdings", "Often off-leash where no local order applies", "Field office page for leash orders and closures"],
    ["US Forest Service", "Generally allowed outside developed sites", "Off-leash on most trails; 6 ft leash in campgrounds", "Ranger district page; developed sites are stricter"],
    ["National Park Service", "Almost never allowed on trails or backcountry", "6 ft leash where allowed -- roads, lots, campgrounds", "Park pet page; assume no unless a trail is named"],
    ["Designated Wilderness", "Varies -- allowed in many, restricted in others", "Set by the managing agency and area order", "The specific Wilderness area order"],
    ["US Fish and Wildlife Service", "Refuge-specific; many are day-use only", "Leashed where permitted; often banned in nesting season", "Refuge regulations, which change by season"],
    ["State and local parks", "Ranges from full access to outright ban", "Usually leashed; some ban dogs from trails", "The park's rules, set by state or county"],
  ]},

  { kind: "p", text: "BLM land is the most permissive and abundant in the West, and where off-leash is genuinely the norm -- subject to local orders in high-use and wildlife-sensitive areas. Forest Service land is similarly open on the trail and stricter inside developed campgrounds and day-use areas, where a six-foot leash is standard and enforced. The National Park Service is the trap, and it is worth its own section." },

  { kind: "note", text: "The same national forest that lets a dog run off-leash on a backcountry trail requires a six-foot leash the moment you enter its campground or picnic area -- and that edge is where a ranger is most likely to be standing." },

  { kind: "h2", text: "National park trails: the rule people learn the hard way" },

  { kind: "p", text: "The most reliable dog rule in the federal system is also the one most often discovered at the trailhead with a disappointed dog in the back: national park trails are closed to dogs almost everywhere. The Park Service confines dogs to developed areas -- paved roads, parking lots, campgrounds, picnic areas -- and bans them from trails and backcountry across the great majority of parks. The reasoning fits the agency's mandate: a dog, even a leashed one, carries a predator's scent, disturbs wildlife, and trades disease along the trail. A few parks name specific dog-legal trails on their pet page; the safe default is that a park trail is closed to dogs unless the park has told you in writing otherwise." },

  { kind: "p", text: "This shapes route planning more than any other dog rule: a run built around national park hiking does not work with a dog aboard. Pair park visits with a nearby forest or BLM trail for the dog's exercise, or board it in the gateway town -- never leaving the dog in the van, which brings us to the rule with no exceptions at all." },

  { kind: "note", text: "Service dogs as defined under the Americans with Disabilities Act are permitted where pets are not, including national park trails. The definition is narrow -- a dog individually trained to do work or tasks for a person with a disability. Emotional support animals do not meet it and are treated as pets. This is a legal distinction, not a courtesy one." },

  { kind: "h2", text: "Designated Wilderness and the patchwork" },

  { kind: "p", text: "Designated Wilderness -- capital W, land protected under the Wilderness Act and managed by the Forest Service, BLM, Park Service, or Fish and Wildlife Service -- is where the general rule stops being reliable. Wilderness inside a national forest generally follows the forest's permissive policy, often off-leash. Wilderness inside a national park follows the park's ban. BLM Wilderness usually allows dogs. There is no single Wilderness dog rule, because the designation does not set one -- the managing agency does." },

  { kind: "p", text: "Layered on top are area-specific orders that close or restrict dog access seasonally, most often to protect ground-nesting birds, bighorn lambing grounds, or alpine habitat. These are the orders least visible in advance, because they live in a specific area's regulations rather than the general policy. The instruction is narrow and firm: for a named Wilderness area, read that area's specific order rather than assuming the surrounding rule extends into it. The boundary of a Wilderness area is frequently the boundary of a different dog rule, and it is rarely signed as such." },

  { kind: "h2", text: "The leash rule is a wildlife rule" },

  { kind: "p", text: "Riders who camp on off-leash ground sometimes read the leash requirements elsewhere as excess caution. They are not. In the backcountry the leash rule is a wildlife-protection rule and, in predator country, a keep-your-dog-alive rule." },

  { kind: "h3", text: "What a loose dog does to wildlife" },

  { kind: "p", text: "A dog off the trail and out of control is, to every animal that detects it, a hunting predator. It flushes ground-nesting birds off their eggs, pushes deer and elk off the forage they need to survive winter, and disturbs animals during nesting, lambing, and denning -- when it does the most damage. Even a dog that catches nothing imposes an energy cost on animals with no margin for it. This is why closures and leash orders concentrate in spring and early summer around specific habitats, and why a loose dog is the fastest documented route to a trail being closed to dogs." },

  { kind: "h3", text: "What predator country does to a loose dog" },

  { kind: "p", text: "The danger runs both directions, and in predator country it runs hard. A loose dog that ranges ahead and out of sight can find a bear, a mountain lion, a moose, or a den before you do, and its instinct is frequently the worst possible one: harass the animal, then run back to you with it following. You become the endpoint of a threat the dog cannot manage." },

  { kind: "p", text: "Coyotes deliberately lure a single dog toward the group. Mountain lions take dogs. A moose will stomp a dog that harasses it, and a cow with a calf needs no provocation. The dog that stayed within a few feet on a leash or under genuine voice control is the one that lived; the dog that ranged out of sight is the one that did not." },

  { kind: "key", text: "In predator country, a loose dog is the fastest way to a closure or a dead dog. Under real control -- leashed, or under voice command you have actually tested against a fleeing deer -- the dog is an early-warning asset that alerts you to animals before you would notice them. Out of control it is a liability that finds the threat, cannot handle it, and delivers it to you. Voice control is a real standard, not a hopeful one, and most dogs a rider would call well-trained do not meet it: where you are not certain, the leash is the honest choice." },

  { kind: "h2", text: "Heat, and never leaving a dog in a hot van" },

  { kind: "p", text: "This is the rule with no exceptions and the shortest timeline, and it kills dogs every summer including dogs belonging to careful people. A parked vehicle is a solar oven. On a day that feels merely warm, the interior climbs past temperatures a dog cannot survive within a short errand -- whether or not the windows are cracked, whether or not the van is in shade that will move." },

  { kind: "p", text: "Dogs barely sweat and shed heat mainly by panting, which fails once the air itself is hot enough. A dog left in a heating vehicle moves through distress to heatstroke to organ failure, and the damage begins well before death. The numbers below are why \"just a few minutes\" is the sentence that precedes so many of these deaths." },

  { kind: "table", caption: "Hot-van danger: interior temperature and time", head: ["Outside temp", "After 10 min", "After 30 min", "After 60 min", "Risk to a dog"], rows: [
    ["70 F / 21 C", "89 F / 32 C", "104 F / 40 C", "113 F / 45 C", "Heatstroke possible within 30 min"],
    ["80 F / 27 C", "99 F / 37 C", "114 F / 46 C", "123 F / 51 C", "Dangerous by 10 min; lethal by 30"],
    ["85 F / 29 C", "104 F / 40 C", "119 F / 48 C", "128 F / 53 C", "Lethal in under 30 min"],
    ["90 F / 32 C", "109 F / 43 C", "124 F / 51 C", "133 F / 56 C", "Lethal in 10 to 15 min"],
    ["100 F / 38 C", "119 F / 48 C", "134 F / 57 C", "143 F / 62 C", "Lethal in minutes; no safe window"],
  ]},

  { kind: "p", text: "Read the top row again: a mild seventy-degree day, and the interior still reaches a hundred and thirteen. Cracking the windows changes the curve by a few degrees and the outcome not at all. Shade defers the problem only as long as it holds still, which on a moving sun is not long. There is no safe version of leaving a dog in a parked van in summer heat, and the confidence that this time will be quick is precisely the error." },

  { kind: "h3", text: "What this means for planning a run with a dog" },

  { kind: "ul", items: [
    "Plan the day so the dog is never the reason you cannot go inside somewhere -- a park it cannot enter, a supply run, a laundromat. Solve that at the desk, before you drive, not in a hot parking lot.",
    "In heat, the dog goes where you go or stays somewhere genuinely cool -- a climate-controlled build with a system actually running and monitored, not a cracked window and hope.",
    "Know the signs of heatstroke: heavy panting, thick drooling, bright red gums, wobbling, vomiting. Cool the dog with cool -- not ice-cold -- water, airflow, and shade, then get to a vet regardless of apparent recovery.",
    "Time errands and town days for the cool ends of the day, and treat a hot midday stop with a dog aboard as a problem to design out.",
  ]},

  { kind: "note", text: "A dog left in a van in backcountry heat is exposed to something a town dog is not: no passerby, no broken window, no rescue. The margin that saves a dog in a supermarket lot -- someone notices -- does not exist on a forest road." },

  { kind: "h2", text: "Water on the trail" },

  { kind: "p", text: "A dog on the trail needs its own water supply, larger than most riders carry for it. A working dog in warm weather needs roughly an ounce per pound of body weight per day, more when it is hot and the terrain is hard -- a fifty-pound dog can move through half a gallon on a long day. A dog cannot tell you it is short, and by the time it refuses water on offer it is often already behind." },

  { kind: "table", caption: "Trail water for a dog by weight and conditions", head: ["Dog weight", "Cool day, easy trail", "Warm day, working hard", "Notes"], rows: [
    ["20 lb / 9 kg", "~20 oz / 0.6 L", "~40 oz / 1.2 L", "Small dogs overheat fast, little reserve"],
    ["40 lb / 18 kg", "~40 oz / 1.2 L", "~80 oz / 2.4 L", "Carry a collapsible bowl, not a bottle"],
    ["60 lb / 27 kg", "~60 oz / 1.8 L", "~120 oz / 3.5 L", "Add to your carry, do not subtract"],
    ["80 lb / 36 kg", "~80 oz / 2.4 L", "~150 oz / 4.4 L", "Large dogs in heat are the highest risk"],
  ]},

  { kind: "p", text: "Offer water on a schedule rather than waiting for the dog to ask -- every twenty to thirty minutes on a warm day, more in real heat -- because a dog works past the point it should stop. Carry a collapsible bowl; most dogs drink poorly from a squeeze bottle. Add the dog's water to your carry as a separate figure -- the common failure is planning for one and splitting it between two." },

  { kind: "h3", text: "Do not let the dog solve its own water problem" },

  { kind: "p", text: "A thirsty dog will drink from any standing water it reaches, which carries the same giardia -- and often worse -- that you treat your own water against. Stagnant pools and algae-scummed edges can carry toxins that kill a dog fast. The rule is the one you apply to yourself: the dog drinks water you carried or treated, not water it found. Steer it away actively; it will not steer itself." },

  { kind: "h2", text: "Ticks, foxtails, and other backcountry hazards" },

  { kind: "p", text: "A dog moves through the low, brushy, ground-level layer of the backcountry that an upright person mostly passes above, and it collects that layer's hazards accordingly. Two are common enough to plan around; several more are worth knowing." },

  { kind: "table", caption: "Backcountry hazards to a dog and what they do", head: ["Hazard", "Where and when", "What it does", "What to do"], rows: [
    ["Ticks", "Grass and brush; worst spring to early summer", "Transmit Lyme, anaplasmosis, and more", "Vet-grade preventive; daily check; steady straight pull"],
    ["Foxtails / grass awns", "Dry grasses, mid to late summer, West", "Barbed seeds burrow into paws, ears, nose, eyes", "Check toes and ears after every outing; vet if embedded"],
    ["Cheatgrass and burrs", "Disturbed dry ground across the West", "Lodge in coat, paws, mouth; cause sores", "Brush out after outings; trim paw fur"],
    ["Blue-green algae", "Warm standing water, late summer", "Neurotoxin; can kill within hours", "Keep the dog out of scummed water"],
    ["Rattlesnakes", "Warm rocky ground; dawn and dusk", "Bites to face or paw; can be fatal", "Leash in snake country; know the nearest vet"],
    ["Rough and hot terrain", "Sharp rock, lava, sun-baked ground", "Cut and burned pads; lames a dog for days", "Condition pads; check after outings; carry booties"],
  ]},

  { kind: "h3", text: "The daily check that catches most of it" },

  { kind: "p", text: "The single habit that prevents most of these from becoming serious is a full-body check at the end of every outing, done by hand and not by glance. Run your hands over the whole dog, part the coat, and look between the toes, inside the ears, at the eyes and nose, and along the belly. Ticks removed the same day rarely transmit disease; a foxtail caught before it burrows is a two-second removal, not a surgical one. It takes a couple of minutes and is the highest-value habit for a backcountry dog." },

  { kind: "note", text: "Carry dog first-aid capacity that matches how far you are from a vet: fine-point tweezers or a tick tool, a way to flush and wrap a cut pad, a means of muzzling a dog that will bite from pain, and the location and hours of the nearest clinic. In much of the backcountry that clinic is more than an hour away, and knowing the direction before you need it matters." },

  { kind: "h2", text: "Being the rider whose dog keeps dogs allowed" },

  { kind: "p", text: "Dog access on public land is a permission, withdrawn area by area when abused, and areas that lose it rarely get it back. Every trail closed to dogs was closed because of dogs -- disturbed wildlife, aggressive encounters, waste on the trail, a dog that would not recall. The habits that keep a trail open are boring." },

  { kind: "ul", items: [
    "Pack out the waste -- all of it, in a bag, out with you. Dog waste carries pathogens not native to the area and is the single most-cited reason trails close to dogs. Burying it is not enough where packing out is the rule.",
    "Yield the trail. Leash up and step aside for other hikers, horses, and dogs -- you do not know their dog, their comfort, or their horse's nerves. A spooked horse is a serious injury, and a loose dog is a classic cause.",
    "Keep the dog from charging up to other dogs and people. \"He's friendly\" arrives too late for the person afraid of dogs or the leashed reactive dog whose walk you just ruined.",
    "Recall the dog off wildlife every time, and if you cannot, keep it leashed. A dog that chases is a dog that gets the area closed.",
    "Respect leash orders and closures exactly. Ignoring one is how the order becomes a ban. Leave the trail as if no dog had been there -- that is the standard land managers measure.",
  ]},

  { kind: "key", text: "There are two kinds of rider with a dog on public land: the one whose dog is the reason dogs stay welcome, and the one whose dog is the reason they get banned. Every closed trail is a record of dogs that were not managed, and the only argument against the next closure is a long run of dogs that were. Be the evidence for access, not against it." },

  { kind: "h2", text: "Verifying the dog rule before you drive to it" },

  { kind: "p", text: "The general framework gets you to a region. It does not tell you whether the district issued a leash order last week, whether a nesting closure just went up on the trail you planned, or whether the one dog-legal trail in the park is the one you counted on. Those are current, local, and changeable -- a separate step." },

  { kind: "ol", items: [
    "Identify the managing agency and the specific district, field office, or park -- the office with rulemaking authority over that exact parcel.",
    "Read that office's pet page for the current leash order, and check separately for seasonal wildlife closures, which are posted apart from it.",
    "For a named Wilderness area, read that area's specific order rather than assuming the surrounding rule extends into it.",
    "For a park, confirm in writing which trails, if any, admit dogs, and plan the dog's exercise and daytime care around the answer.",
    "Confirm the nearest veterinary clinic and its hours relative to where you will camp.",
    "Establish current conditions -- heat, water, whether the closure is up -- from someone recently there.",
  ]},

  { kind: "p", text: "That last step is where the official record stops helping. An agency publishes its leash order and its closures. It does not publish whether the creek is running this week or whether the nesting closure came down early. Those are conditions, and conditions come from riders who were recently on that ground -- the gap Vanism was built to close, each objective carrying the date a rider last confirmed it rather than a rule with no date." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "Everything above is the general framework, and it is overridden somewhere in every state. Districts issue their own leash orders, parks name their own exceptions, and wildlife closures appear and lift on a seasonal schedule that no national summary tracks. A confident national figure about where a dog may go is the kind of thing that gets a rider turned around at a trailhead." },

  { kind: "p", text: "The managing office is the authority on its own dog rules, and it answers the phone. For anything touching the dog's health -- heatstroke, a snakebite, a burrowed foxtail, an illness far from town -- a veterinarian is the authority, and the time to know where the nearest one is was before you needed it. Carry the dog, confirm the rule where you are going, and leave the ground open for the rider behind you." },
];
