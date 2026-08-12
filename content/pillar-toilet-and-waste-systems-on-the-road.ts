import type { Block } from "./blocks";

/** Toilet and waste systems that do not fail you -- Vanism pillar. */
export const PILLAR_TOILET_AND_WASTE_SYSTEMS_ON_THE_ROAD: Block[] = [
  { kind: "key", text: "There are four practical systems: a cassette toilet, a composting or dry-separating toilet, a bucket-and-bag, and the backcountry cathole. A cassette is cheapest and simplest but ties you to a dump station every three to five days; a dry-separating toilet runs longer and smells least but demands discipline and a place to land solid waste; a bucket-and-bag never smells and never needs a dump station but consumes bags and landfill; and in the backcountry the rule is a cathole six to eight inches deep and 200 feet from water, or a wag bag where one is required. Cassette waste goes to a sanctioned dump station only -- never into the ground, a pit privy, or a vault toilet." },

  { kind: "p", text: "Every rider deals with this, and most deal with it badly at first, because the failure is not the toilet -- it is the plan for what comes out of it. A toilet is a holding system, only as good as the interval between emptyings and the place you empty it. Get that wrong and the problem announces itself in a closed vehicle at night." },

  { kind: "p", text: "This page compares the four systems on the numbers that decide the choice -- capacity in rider-days, what emptying costs, how each smells working and overdue, the maintenance each demands -- then covers where the waste is legally allowed to go, because that is the part people improvise, and improvising it is how areas get closed. The backcountry standard is treated on its own terms, because on foot the vehicle systems do not travel with you. Waste is a systems problem with known solutions and a small number of hard rules; the hard rules are the ones worth memorising." },

  { kind: "h2", text: "The four systems, compared" },

  { kind: "p", text: "The four systems differ less in how they contain waste than in where it goes afterward and how often. That interval -- rider-days between servicing -- shapes a route, because it decides how far you can range from a dump station or a bin before the system forces your hand." },

  { kind: "table", caption: "Toilet systems compared", head: ["System", "Upfront cost", "Capacity (solo rider)", "Smell when working", "Where it empties", "Maintenance load"], rows: [
    ["Cassette toilet", "$120-$1,000 built in", "3-5 days per 5 gal tank", "Low with chemical, sharp if overdue", "Sanctioned dump station only", "Empty and rinse every 3-5 days; charge dose each time"],
    ["Composting / dry-separating", "$600-$1,200", "3-6 weeks solids, 2-4 days urine", "Lowest of the four when dry", "Solids to trash or compost; urine to toilet or dilute-and-scatter", "Empty urine bottle daily; turn and empty solids; manage medium"],
    ["Bucket-and-bag", "$25-$120", "1-2 days per bag, unlimited with bags", "None -- gelled and sealed", "General trash", "Swap and seal each bag; buy bags continuously"],
    ["Backcountry cathole", "$0 (a trowel)", "Single use", "None if done right", "Buried in soil, 200 ft from water", "Dig, bury, pack out paper each time"],
  ]},

  { kind: "p", text: "Read that as a set of trades, not a ranking: the cassette wins on cost and loses on range, the dry-separating toilet wins on range and odour and loses on price and discipline, the bucket never needs a dump station but runs on consumables. Most long-season riders end up carrying two -- one in the vehicle, and the cathole-or-wag-bag standard for time on foot." },

  { kind: "h2", text: "The cassette toilet: cheap, simple, and tied to a dump station" },

  { kind: "p", text: "A cassette toilet is a two-part unit: a seat-and-bowl on top, a removable holding tank -- the cassette -- below, sealed by a rotating blade valve. You use it, close the valve, and the waste sits until you carry the tank to a dump station and pour it out. Tanks are typically 4 to 5 usable gallons -- three to five days for one rider, half that for two." },

  { kind: "p", text: "It is the default for a reason: the cheapest built-in option, a familiar flush, and a cassette that carries out to a dump on its own handle rather than requiring you to move the vehicle. The chemistry is simple -- a metered dose of holding-tank treatment breaks down solids and suppresses odour for one fill." },

  { kind: "h3", text: "Failure modes" },

  { kind: "p", text: "The cassette fails in predictable ways, and every one is a timing or chemistry error rather than a hardware fault." },

  { kind: "ul", items: [
    "Overfilling. Past roughly 80 percent the tank vents pressure back through the blade valve when you open it, which is exactly the moment you do not want it to. The level indicator exists for this; trust it and empty early.",
    "Skipping the charge dose. Without treatment the tank goes anaerobic within a day in heat and produces the sharp sulphur smell people associate with the whole system. That smell is a skipped dose, not the design.",
    "Letting it sit full. A cassette left full for a week in a hot vehicle is far worse to empty than one emptied on schedule. The interval is not only about capacity; it is about what the contents become.",
    "The vent-button reflex. Pressing the pressure-release button while pouring is correct at the dump station and wrong anywhere else.",
  ]},

  { kind: "p", text: "The smell reality is straightforward: a cassette dosed and emptied on schedule is nearly odourless, and briefly unpleasant for the ninety seconds of pouring. An overdue one is bad in a way the whole vehicle shares. The system does not drift toward failure slowly; it is fine until the interval is missed." },

  { kind: "note", text: "Two chemistries exist. Formaldehyde-based treatments are cheap and effective and are banned or discouraged at many dump stations because they kill the bacteria in septic and treatment systems. Enzyme or bio treatments are accepted everywhere and are the responsible default -- carry the bio one, because a station that refuses formaldehyde waste has nowhere convenient to send you." },

  { kind: "h2", text: "The composting toilet, which is really a dry-separating toilet" },

  { kind: "p", text: "The popular term is misleading. Nothing composts inside a van in the days you own the material -- real composting takes months and heat. What these units do is separate urine from solids at the source, and that separation is the entire trick. Mixed, waste smells within hours; kept apart and dry, solids are close to odourless, because the smell is a wet, anaerobic reaction dry material does not support." },

  { kind: "p", text: "Mechanically, a divider sends urine forward into a sealed bottle and drops solids into a lower chamber holding a dry medium -- coconut coir, peat, or sawdust -- where a crank coats and dries each deposit. The urine bottle is the constraint, not the solids: it fills in two to four days for one rider and must be emptied on that cycle, while the solids chamber runs three to six weeks." },

  { kind: "h3", text: "Where each stream legally goes" },

  { kind: "p", text: "This is the part that surprises people. The two streams have different destinations and different rules." },

  { kind: "ul", items: [
    "Urine is sterile in a healthy person and is the easy stream. Pour it down any toilet, or dilute it heavily -- roughly eight parts water -- and scatter it away from water, camp, and trail. Never neat in one spot; concentrated urine burns vegetation and draws animals.",
    "Solids are the harder stream. Bagged in a compostable or plastic liner, they go into general trash in most jurisdictions -- the same destination as a diaper. They are not legal to bury at vehicle scale and do not go down a dump station, which is built for liquid.",
    "Do not put solids in a public compost bin, a pit privy, or a vault toilet. Bagged landfill is the honest answer for the material a van produces.",
  ]},

  { kind: "p", text: "Failure modes are fewer but real. The dominant one is moisture: a cracked or overfilled urine bottle, or condensation, wets the solids chamber and the odour advantage collapses at once. The second is the vent fan -- most units run a small 12V fan pulling air out through a roof port, and if it stops, humidity builds and the chamber turns. The third is letting the solids chamber overfill so the crank cannot coat new deposits. Managed, it is the least smelly of the four by a clear margin. Neglected, it is a wet box." },

  { kind: "h2", text: "The bucket-and-bag: no dump station, no smell, a running cost" },

  { kind: "p", text: "The simplest system that works is a sturdy bucket, a snap-on toilet seat lid, and a bag lining it -- typically a heavy liner with a gelling powder, or a purpose-made waste bag that gels and deodorises on contact. You use it, the gel locks the liquid into a solid, you tie the bag off and drop it in the trash. Some riders use a taller purpose-built version; the mechanism is identical." },

  { kind: "p", text: "Its strengths are exactly the cassette's weaknesses. It never needs a dump station, so it never constrains your range. Sealed and gelled, it does not smell at all -- the gel is the same chemistry as a wag bag. It costs almost nothing to build, and the only thing it depends on is a supply of bags." },

  { kind: "p", text: "Its weakness is the running cost and the waste stream. Each bag is a consumable at one to three dollars, and each is landfill. For one rider that is a small line item; for two using it as the primary toilet it adds up and generates a bag a day to carry to the next bin. It is the honest choice for shorter runs, hard-to-service regions, and as the backup every rig should carry regardless of its main system." },

  { kind: "note", text: "Never tie off a wet, non-gelled bag and expect it to hold. The gel is what makes this system odourless and leak-proof; a plain garbage bag with liquid waste in it is a failure waiting for a speed bump. Use bags rated for the job, or add the gelling powder yourself." },

  { kind: "h2", text: "Where the waste is actually allowed to go" },

  { kind: "p", text: "The section people skip, and the one that matters most: the wrong destination is not a private mistake -- it is the act that gets dump access revoked and areas closed." },

  { kind: "table", caption: "Legal disposal by waste type", head: ["Waste type", "Correct destination", "Never", "Why"], rows: [
    ["Cassette / black tank (liquid)", "Sanctioned RV dump station", "Ground, pit privy, vault toilet, storm drain", "Only a treatment or septic system can process it; a vault toilet is not one"],
    ["Composting-toilet solids (bagged)", "General trash / landfill", "Compost bin, vault toilet, buried", "Vehicle-scale solids are not garden compost and do not break down buried"],
    ["Urine (separated)", "Any flush toilet, or diluted and scattered", "Neat in one spot near water or trail", "Concentrated urine burns plants and draws wildlife"],
    ["Bucket-and-bag (gelled)", "General trash / landfill", "Vault toilet, buried, left at a site", "It is a sealed solid-waste bag, the same as a diaper"],
    ["Backcountry solids (cathole)", "Buried 6-8 in deep, 200 ft from water", "On the surface, under a rock, near water", "Burial in biologically active soil is what breaks it down"],
    ["Grey water (dish / wash)", "Dump station grey inlet, or scattered 200 ft from water", "Any stream, lake, or storm drain", "Food solids and soap feed algae and draw animals"],
  ]},

  { kind: "p", text: "The single rule to memorise, because it is the one most often broken by well-meaning people: cassette and black-tank waste goes to a dump station and nowhere else. A vault toilet -- the pit privy at a trailhead -- is a sealed holding tank pumped by a truck, not a treatment system; pouring a cassette into it overloads it and coats the seat and walls. Rangers find cassette waste in vault toilets constantly, and it is a direct cause of those toilets being locked or removed." },

  { kind: "h3", text: "Finding a dump station" },

  { kind: "p", text: "Dump stations sit at RV parks, many travel-plaza chains, a large share of state and national forest campgrounds, some rest areas, and most municipal wastewater sites. Many are free; some charge a few dollars. The reliable method is to plan the dump into a resupply stop, so fuel, water, dump, and trash happen on one schedule rather than as separate errands." },

  { kind: "ol", items: [
    "Pull the cassette or connect the hose and confirm the station is the correct type -- a grey-only inlet will not legally take black waste.",
    "Empty fully, then rinse the tank twice with clean water and pour that through as well.",
    "Add the next charge dose and enough water to cover the tank bottom before reseating.",
    "Rinse the area, close the station, and wash your hands away from the potable-water tap -- never handle waste and the drinking-water fill at the same spout.",
  ]},

  { kind: "key", text: "A dump station on a map is a location, not a status. Stations close for the season, break, run dry, or get locked after abuse, and the map almost never says so. Where a rider recently confirmed a station was open and working is the difference between a planned stop and a two-hour detour with a full tank -- and current status is exactly the layer the official listings do not carry." },

  { kind: "h2", text: "Grey water is not neutral" },

  { kind: "p", text: "Grey water -- dishwater, wash water, rinse runoff -- feels harmless and is not. It carries food solids, grease, and soap, and poured near a water source it feeds algae, draws animals into camp, and leaves a slick the next rider inherits. It is regulated less tightly than black water and treated far more casually than it deserves." },

  { kind: "ul", items: [
    "Strain food solids out first and bin them. Solids are what turn scattered grey water into a wildlife attractant and a smell.",
    "Use biodegradable soap, and use little of it. Biodegradable does not mean harmless in water; it means it breaks down in soil, which is where it belongs.",
    "Scatter grey water broadly at least 200 feet from any water source, or empty it at a dump station grey inlet. Never in one place, and never down a storm drain, which usually runs untreated to a creek.",
    "A built-in grey tank still has to be emptied somewhere legal. It is not exempt because it is plumbed; it is the same water.",
  ]},

  { kind: "h2", text: "The backcountry standard: the cathole" },

  { kind: "p", text: "On foot, none of the vehicle systems come with you, and the standard becomes the cathole: a single-use hole you dig, use, and bury. Done to standard it is a sound method, because biologically active topsoil breaks waste down. Done casually -- too shallow, too near water, paper left behind -- it is why high-use areas are moving to mandatory pack-out." },

  { kind: "table", caption: "Cathole standard", head: ["Element", "Standard", "Reason"], rows: [
    ["Depth", "6-8 inches (to the biologically active layer)", "Topsoil microbes break waste down; deeper is too cold and inert, shallower gets dug up"],
    ["Distance from water", "200 feet (about 70 adult paces)", "Keeps pathogens out of the water others drink and treat"],
    ["Distance from camp and trail", "200 feet", "Away from where people and animals travel and rest"],
    ["Site", "Soil, not under a rock; sun-exposed if possible", "Decomposition needs living soil and warmth, not a dry cavity"],
    ["Toilet paper", "Pack it out, always", "It does not break down at the rate people assume, especially in arid or alpine ground"],
    ["Afterward", "Fill, tamp, and disguise the spot", "A disguised hole is not rediscovered or dug up by animals"],
  ]},

  { kind: "p", text: "Paper is the detail people get wrong most. Buried toilet paper persists for years in dry or cold country, animals dig it up, and it is the most common visible sign of human waste on a trail. Pack it out in a doubled, opaque zip bag. In many jurisdictions this is the written rule, not a courtesy." },

  { kind: "h3", text: "When a cathole is not allowed" },

  { kind: "p", text: "The cathole is the general rule, and it stops being reliable in exactly the places most worth hiking. Where soil is thin, the season short, the ground frozen, or the traffic heavy, burial does not work and is often prohibited outright. There the standard is pack-out, and the tool is the wag bag." },

  { kind: "h2", text: "Wag bags, and the zones that require them" },

  { kind: "p", text: "A wag bag is the bucket-and-bag reduced to a single-use pouch: an outer zip bag holding an inner bag lined with the same gelling, deodorising powder. You use it, gel and seal it, and carry it out to a trash bin -- landfill-legal and shelf-stable for days. In a growing list of places it is mandatory, not optional." },

  { kind: "table", caption: "Backcountry waste rules by zone", head: ["Zone", "Standard", "Why burial fails here"], rows: [
    ["Forested / deep-soil, low use", "Cathole, 6-8 in, 200 ft from water", "Burial works; this is the baseline"],
    ["Alpine and above treeline", "Wag bag, pack out (often required)", "Soil is thin to absent and cold; nothing decomposes"],
    ["Desert / arid", "Cathole where soil allows; pack-out increasingly required", "Decomposition is extremely slow in dry ground"],
    ["High-use trails and popular basins", "Wag bag, pack out (usually required)", "Volume overwhelms the soil's capacity; catholes get rediscovered"],
    ["River corridors and canyons", "Pack out all solid waste (permit rule)", "Concentrated camping beside water; groover systems mandatory"],
    ["Snow and glacier travel", "Pack out; blue bag where required", "There is no soil at all; buried waste surfaces at melt"],
    ["Managed wilderness permit areas", "Whatever the permit specifies -- read it", "The permit is the operative rule, not the general standard"],
  ]},

  { kind: "p", text: "The trend runs one direction: toward pack-out. Every year more alpine basins, river permits, and popular trailheads move from cathole-permitted to wag-bag-required, because volume has outgrown what the soil can process. Assume the stricter standard where you are unsure -- a wag bag you did not strictly need costs you nothing, and it is often the rule you did not know had changed." },

  { kind: "note", text: "River permits are their own regime. Most managed river corridors require a hard-sided pack-out system -- a \"groover\" -- for all solid waste, checked at launch, with no cathole option along the run. If your route includes a permitted river, the toilet system is specified by the permit, not a matter of preference." },

  { kind: "h2", text: "The maintenance each system honestly demands" },

  { kind: "p", text: "No system is maintenance-free, and the maintenance is the part sales copy omits. A waste system fails on a skipped routine, not a broken part." },

  { kind: "table", caption: "Maintenance by system", head: ["System", "Every use / day", "Every service", "Periodic"], rows: [
    ["Cassette toilet", "Watch the level; add water after flushes", "Empty, double-rinse, re-dose every 3-5 days", "Lubricate the blade seal; descale; replace the seal yearly"],
    ["Dry-separating toilet", "Empty urine bottle daily; crank after solids", "Empty and reline solids every 3-6 weeks; refill medium", "Clean the separator; check the vent fan; deep-clean quarterly"],
    ["Bucket-and-bag", "Seal and bin each bag", "Restock bags before every run", "Wipe and disinfect the bucket; check the seat clamp"],
    ["Cathole / wag bag", "Dig or gel to standard each use; pack out paper", "Empty the pack-out bag at a bin", "Restock trowel, bags, and hand sanitiser before each trip"],
  ]},

  { kind: "p", text: "Two points earn special mention because they turn into odour and repair bills. The blade valve seal on a cassette is a wear part -- it dries, cracks, and weeps, and a smeared or slow-closing valve means it is due; lubricate it every few services and replace it yearly. On a dry-separating toilet, the vent fan is the quiet dependency that keeps the solids chamber dry: wire it to run continuously and check airflow at the roof port, because a stopped fan is a chamber turning wet before you notice." },

  { kind: "h2", text: "Choosing the system that fits the run" },

  { kind: "p", text: "The right system is set by how you travel, not by which is best in the abstract. Three questions decide it: how many days you range from services, how many riders share the toilet, and how much you weigh never smelling it against never running a consumable." },

  { kind: "ul", items: [
    "Short runs, frequent towns, one or two riders: a cassette is the simplest honest answer. You are near a dump station on the interval it needs anyway.",
    "Long runs, remote regions, least odour wanted: a dry-separating toilet, because its range is measured in weeks and its smell -- kept dry -- is the lowest of the four.",
    "Zero dump-station dependence, willing to pay in bags: bucket-and-bag as the primary, sized by how many bags you can carry to the next bin.",
    "Any rig, any style: carry the bucket-and-bag as a backup and the cathole-or-wag-bag standard for foot travel, regardless of what the built-in system is.",
  ]},

  { kind: "p", text: "The pair does two different jobs and neither replaces the other. The mistake is owning only the vehicle system and improvising in the backcountry, which is exactly what the cathole standard exists to prevent." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "The systems and their chemistry are general and reliable. The rules for where waste may go are not -- they are set locally and they are tightening. A basin that permitted catholes last season may require wag bags this one; a dump station listed as open may be locked. The general standard on this page is the safe default, and it is wrong somewhere in every state by being more permissive than the local rule." },

  { kind: "p", text: "The authority is the office that manages the ground: the district ranger, the field office, the permit desk, the current-conditions page. Assume the stricter standard where the two disagree, carry a pack-out option to fall back on, and confirm the disposal rule for the specific place before you rely on the general one. The ground staying open depends on the waste being handled to the local standard, not the convenient one." },
];
