import type { Block } from "./blocks";

/** Choosing and buying a van for the road -- Vanism pillar. */
export const PILLAR_CHOOSING_AND_BUYING_A_VAN: Block[] = [
  { kind: "key", text: "The van is the first decision and the one every later choice sits on top of. Start with the two dimensions that shape everything downstream -- wheelbase and roof height -- then pick a platform that matches the terrain you actually intend to hunt, not the terrain you picture. A sound high-mileage cargo van bought on its service records beats a tired expensive one every time, so the money is better spent on an inspection than on a nicer badge. Buy the drivetrain and the maintenance history; the interior is yours to build afterward." },

  { kind: "p", text: "Everything about life on the road is downstream of the box you buy. The bed length, the standing height, the fuel bill, the roads you can commit to, the towns you can park in overnight -- all of it is set the day you sign for the vehicle, and most of it cannot be changed afterward without starting over. This is the decision that rewards patience and punishes the rush, because the rush is how riders end up rebuilding a good interior inside the wrong van." },

  { kind: "p", text: "This page compares the common platforms on the numbers that matter, sets out what to inspect before you hand over money, and works through the two decisions -- wheelbase and roof height -- that constrain every build that follows. A cargo van is a used-truck purchase first: mileage and history matter more than model year, and the through-line holds throughout -- a good cheap platform beats a bad expensive one, and the way you tell them apart is the inspection, not the price." },

  { kind: "h2", text: "The two decisions that shape everything: wheelbase and roof height" },

  { kind: "p", text: "Before platform, before fuel, before drivetrain, two dimensions constrain the entire build and every day you spend in it: the wheelbase, which sets your length, and the roof height, which sets whether you stand up. Get these right and a mediocre build is livable. Get them wrong and no amount of money spent inside fixes it." },

  { kind: "h3", text: "Wheelbase sets your bed, your turning circle, and where you can go" },

  { kind: "p", text: "Wheelbase -- the distance between the axles -- drives overall length, and length is a genuine trade with no free side. A longer van gives you a fixed crosswise bed, a real galley, and storage a shorter one cannot fit. It also lengthens your turning circle, makes urban parking harder, and turns a narrow forest road into a commitment, because a long vehicle that reaches a section it cannot pass may face several miles in reverse with no turning point. The practical breakpoint is whether an adult sleeps crosswise: a person over roughly five foot ten cannot lie across the width of most vans and needs a long wheelbase for a sideways bed. Measure the rider who will actually sleep in it before you shop." },

  { kind: "h3", text: "Roof height decides whether the van is a place you live or a place you crash" },

  { kind: "p", text: "Roof height is the comfort decision people underrate until the third week. A standing roof lets you cook, dress, and move without stooping, and over a long season that is the difference between a home and a tent with an engine. A low roof drives better in crosswind, fits height-restricted garages and parking structures, and reads as an ordinary work van, which is the entire premise of stealth." },

  { kind: "table", caption: "Roof height trade, by the numbers", head: ["Roof", "Standing height", "Buys you", "Costs you"], rows: [
    ["Low / standard roof", "Under 5 ft -- no standing", "Stealth, garages, crosswind stability, cost", "Stooping for every task"],
    ["Medium roof (Transit)", "Around 5 ft 8 in", "Standing for most riders, fits many garages", "Marginal for the tallest; fewer on the lot"],
    ["High roof (all platforms)", "6 ft to 6 ft 4 in", "Full standing, upright galley, overhead storage", "Height-restricted parking closed; more crosswind"],
    ["Pop-top added later", "Standing only when raised", "Low profile driving, standing at camp", "1,500 to 4,000-plus dollars; a roof penetration"],
  ]},

  { kind: "note", text: "Measure the garages and parking structures you actually use before committing to a high roof. A 6 ft 4 in van is locked out of most underground and multi-level parking, many drive-throughs, and a number of national-park entrance structures. If your season runs through cities as much as backcountry, that lockout is a daily tax." },

  { kind: "h2", text: "The common platforms, compared on what matters" },

  { kind: "p", text: "Three full-size cargo vans account for the overwhelming majority of North American builds: the Ford Transit, the Mercedes Sprinter, and the Ram ProMaster. They are genuinely different vehicles, and the right one depends on the terrain you intend to hunt and the money you have to run it, not on which has the best reputation at the campground." },

  { kind: "table", caption: "Full-size cargo van platforms compared", head: ["Platform", "Drivetrain", "Ground clearance", "Fuel economy", "Parts / service", "Used price band"], rows: [
    ["Ford Transit", "RWD or optional AWD; gas V6, older diesel", "Moderate; AWD raises it slightly", "15-18 mpg gas", "Cheapest and most available; any Ford dealer", "18,000 to 45,000"],
    ["Mercedes Sprinter", "RWD or 4x4; diesel, some gas", "Highest, especially 4x4", "18-22 mpg diesel", "Dearest; specialist shops, longer waits", "22,000 to 55,000-plus"],
    ["Ram ProMaster", "FWD only; gas V6", "Lowest; front-wheel drive limits it", "15-18 mpg gas", "Cheap and common; widest flat interior", "15,000 to 38,000"],
    ["Nissan NV / Chevy Express", "RWD; gas, older body-on-frame", "Low, but simple and rugged", "12-15 mpg gas", "Cheap, ubiquitous, but no high roof", "8,000 to 22,000"],
  ]},

  { kind: "h3", text: "Ford Transit -- the default, and usually the right default" },

  { kind: "p", text: "The Transit is the most common build platform for good reasons: it is the cheapest of the three to buy and service, parts sit at every Ford dealer in the country, and it is the only one offering factory all-wheel drive on a gas engine at a reasonable price. For a rider who wants light dirt-road capability without diesel running costs, the AWD Transit is the pragmatic answer. Its clearance is moderate and its interior slightly narrower than a ProMaster, but nothing about it is a mistake." },

  { kind: "h3", text: "Mercedes Sprinter -- the capable one, at a price you pay twice" },

  { kind: "p", text: "The Sprinter is the tallest, the most clearance-rich, and the only platform with a serious factory 4x4 option, which is why genuine backcountry builds gravitate to it, and its diesel returns the best fuel economy of the group. It is also the most expensive to buy and to fix: parts cost more, specialist shops are sparser outside metro areas, and a repair a Transit dealer does same-day can mean a multi-day wait and a tow. Buy a Sprinter for its capability with clear eyes about the running cost, not for the badge." },

  { kind: "h3", text: "Ram ProMaster -- cheapest to buy and build, weakest off pavement" },

  { kind: "p", text: "The ProMaster is front-wheel drive only, which gives it the lowest load floor and the widest, squarest interior of the three -- a build advantage every day you are parked and a handicap the moment the surface turns loose. Front-wheel drive with a build's weight behind it does poorly in sand, snow, and steep loose climbs. For a season of paved roads, developed campgrounds, and the occasional graded pullout, it is the most van for the money. For rough two-track, it is the wrong tool." },

  { kind: "h2", text: "Diesel versus gas, decided honestly" },

  { kind: "p", text: "The diesel-versus-gas question gets answered with tribal loyalty more than arithmetic, and the arithmetic is not complicated. Diesel returns better fuel economy, makes more low-end torque for climbing loaded, and lasts longer before major engine work. Gas engines are cheaper to buy, far cheaper to repair, serviceable at any shop in the country, and untroubled by cold starts and the emissions hardware that gives modern diesels their worst days." },

  { kind: "table", caption: "Diesel versus gas for a road van", head: ["Factor", "Diesel", "Gas"], rows: [
    ["Fuel economy", "18-22 mpg; better loaded and climbing", "15-18 mpg; drops harder with weight"],
    ["Purchase price", "Higher; commands a premium used", "Lower; wider selection at every tier"],
    ["Repair cost", "High; emissions systems are expensive to fix", "Low; any shop, common parts"],
    ["Cold weather", "Harder starts; needs plug-in or additive below freezing", "Starts reliably in the cold"],
    ["Longevity", "Longer engine life if maintained", "Shorter, but rebuilds are cheaper"],
    ["Best fit", "High annual miles, mountains, warm-season south", "Lower miles, budget builds, cold and remote country"],
  ]},

  { kind: "p", text: "The honest rule: diesel earns its premium only at high annual mileage or with sustained loaded climbing, where fuel savings and torque pay back the higher purchase and repair costs. Below roughly fifteen thousand miles a year, or on a tight budget, gas is correct and the fuel difference never catches up to the price gap. The diesel that spends a week at a specialist waiting on an emissions part has erased a season of fuel savings in one repair." },

  { kind: "note", text: "Modern diesel emissions hardware -- the DEF system, the particulate filter, the EGR -- is where late-model diesels cost their owners. These systems fault in ways that are expensive to diagnose and expensive to fix, and they strand the vehicle when they do. A pre-2008 diesel avoids much of it but trades away emissions compliance and, in some states, registration." },

  { kind: "h2", text: "The stealth end: minivans and the smallest platforms" },

  { kind: "p", text: "Not every build wants to be seen as a camper, and not every rider needs to stand up inside. Minivans and compact cargo vans trade living space for two things full-size vans cannot match: they park anywhere, and nobody looks twice. For urban-heavy seasons, for riders who mostly sleep in transit between objectives, and for the tightest budgets, the small platform is not a compromise so much as a different tool." },

  { kind: "p", text: "A minivan build sleeps one comfortably and two tightly, has no standing room, and depends on discipline: everything lives in totes, the bed converts, nothing goes outside. In exchange it returns better fuel economy than any full-size van, fits a standard parking space and every garage, and reads as an ordinary family vehicle to a passerby, which is the whole of stealth. The Toyota Sienna and Honda Odyssey are the durable choices; a used one on good records is among the cheapest ways onto the road." },

  { kind: "table", caption: "Platform size versus what it costs and buys", head: ["Class", "Sleeps", "Stands up", "Fuel", "Stealth", "Typical van cost"], rows: [
    ["Minivan (Sienna, Odyssey)", "1-2 tight", "No", "22-28 mpg", "Highest -- invisible", "6,000 to 18,000"],
    ["Compact cargo (Transit Connect)", "1", "No", "20-24 mpg", "High", "10,000 to 22,000"],
    ["Full-size cargo (Transit, ProMaster)", "2 comfortably", "High roof only", "15-18 mpg", "Moderate", "15,000 to 45,000"],
    ["Box truck conversion", "2-4", "Yes, easily", "8-12 mpg", "None", "12,000 to 30,000 cab-chassis"],
    ["4x4 Sprinter / Transit AWD", "2 comfortably", "High roof", "15-20 mpg", "Moderate", "35,000 to 70,000-plus"],
  ]},

  { kind: "h2", text: "The capable end: box trucks and 4x4 conversions" },

  { kind: "p", text: "A box truck -- a cab-and-chassis with a walk-in cargo box -- gives more usable interior volume per dollar than any van, with true standing room and square walls that make building trivial. It costs that back in fuel, in a total lack of stealth, and in size that closes off most dispersed camping and nearly all city parking. It is a stationary basecamp that happens to drive, best for riders who move rarely and park in the open." },

  { kind: "p", text: "The 4x4 and AWD conversions exist for one reason: to reach ground a two-wheel-drive van cannot, and to get back out when the surface changes under you. They cost a substantial premium and burn more fuel carrying the extra drivetrain. The honest question is whether your season demands it. Most riders who buy 4x4 use it a handful of days a year and pay for it every day, while the ground they actually camp on is reachable in an AWD Transit or even a careful two-wheel-drive van." },

  { kind: "note", text: "Capability you rarely use is capability you pay for continuously -- in purchase price, in fuel, and in the maintenance of a more complex drivetrain. Match the platform to the terrain you genuinely intend to run, not the hardest road you can imagine yourself on. A good driver in an AWD van reaches more ground than a timid one in a 4x4." },

  { kind: "h2", text: "New versus used, and the mileage-price reality" },

  { kind: "p", text: "A new empty cargo van runs roughly forty-five to seventy thousand dollars before a single component, comes with zero miles and a full warranty, and depreciates hardest in its first three years -- precisely the window that produces the best used buys. For most riders the value is in a used van at the mileage where the first owner has absorbed that depreciation and the drivetrain still has most of its life ahead." },

  { kind: "p", text: "Fleet-sold cargo vans are the volume of the used market and a genuinely mixed bag. A fleet van has high miles but often full, disciplined service records and highway miles gentler than stop-and-go. The records are the whole story: a fleet van with a documented history is a better buy than a low-mileage private van with none, because the history is the only thing that tells you whether those miles were kind ones." },

  { kind: "table", caption: "Used cargo van by mileage tier", head: ["Mileage", "Typical price", "What you get", "What you take on"], rows: [
    ["Under 60,000", "38,000 to 55,000", "Newer platform, some warranty", "Near-new money; interior work still yours"],
    ["60,000 to 120,000", "22,000 to 38,000", "The sweet spot for most builds", "Ordinary wear; buy on records"],
    ["120,000 to 180,000", "12,000 to 22,000", "Plenty of life if maintained", "Brakes, tires, possible transmission service"],
    ["Over 180,000", "8,000 to 15,000", "Cheap entry; can be sound on diesel", "Buy the records or walk; keep a repair fund"],
  ]},

  { kind: "p", text: "The rule that saves the most money is counterintuitive: buy the highest-mileage van whose service history you can fully verify, not the lowest-mileage van you cannot. A documented 150,000-mile van with every interval stamped is a known quantity; an undocumented 80,000-mile van is a gamble priced as if it were not. The records are worth more than the odometer, and an owner who cannot produce them is telling you something." },

  { kind: "h2", text: "What to inspect on a used cargo van" },

  { kind: "p", text: "The inspection separates a good buy from an expensive lesson, and it is the step riders skip when they fall for a van before they check it. Every dollar spent here is returned several times over, and the best is spent on a pre-purchase inspection at a shop that knows the specific platform -- 150 to 250 dollars. A refused inspection is itself a defect; walk from any seller who will not permit one." },

  { kind: "h3", text: "Rust is the defect that ends the conversation" },

  { kind: "p", text: "On a unibody van there is no frame to fall back on -- the body is the structure, and structural rust is not a repair, it is the end of the vehicle. Check the rockers, wheel arches, floor under the cargo mat, panel seams, and everywhere road salt collects. Surface rust on a bolt-on panel is cosmetic; rust through structural metal, or bubbling that hides it, is a reason to walk regardless of how the drivetrain looks. Northern and coastal vans carry the most, and a southwestern van of the same age is often a far better buy for this reason alone." },

  { kind: "h3", text: "Drivetrain, where the real money hides" },

  { kind: "p", text: "The engine and transmission are where a cheap van becomes an expensive one after you own it. Cold-start it yourself -- never let the seller warm it first -- and listen for knocks, watch for smoke that does not clear, and feel for a transmission that hunts or slips. On a diesel, the emissions systems are the expensive faults; scan for stored codes and treat a cleared computer with suspicion. This is the judgment a platform-specific inspection buys you." },

  { kind: "h3", text: "Prior fleet use, read honestly" },

  { kind: "p", text: "Fleet history is not a disqualifier -- it is a question. A fleet van driven mostly on the highway and serviced on a strict schedule can be an excellent buy; one run hard, overloaded daily, and serviced only when it broke is a poor one. The records tell you which, and so does the wear pattern: check the seat bolster, pedals, and wheel against the odometer. Heavy interior wear on a low reading means hard, short-trip miles the number does not show." },

  { kind: "ol", items: [
    "Cold-start the engine yourself and listen before it warms -- knocks, rough idle, smoke that does not clear in the first minute.",
    "Scan for stored and pending fault codes; a freshly cleared computer is a red flag, not a clean bill.",
    "Inspect rockers, wheel arches, floor under the cargo mat, and panel seams for structural rust and fresh undercoating that hides it.",
    "Check the service records against the odometer -- verified intervals matter more than the mileage number itself.",
    "Test the transmission through a full drive: cold shifts, highway downshifts, and whether it hunts or slips under load.",
    "Match interior wear -- seat bolster, pedals, wheel -- to the mileage; a mismatch means hard short-trip use.",
    "Pay for a pre-purchase inspection at a shop that knows the platform, and treat a refusal as a defect in the van.",
  ]},

  { kind: "h2", text: "Matching the platform to the terrain you actually hunt" },

  { kind: "p", text: "The most common buying mistake is buying for an imagined season instead of the real one. Riders picture the hardest road they might ever attempt, buy a 4x4 diesel for it, then spend the season on pavement and graded gravel any van would have handled -- paying every day for capability they use twice a year. The correct method runs the other way: describe the season you will genuinely run, then buy the least van that covers it well." },

  { kind: "table", caption: "Terrain versus the platform that fits it", head: ["The season you run", "The platform that fits", "Why", "Do not need"], rows: [
    ["Cities, developed campgrounds, paved touring", "Minivan or 2WD ProMaster / Transit", "Stealth and fuel economy beat clearance", "4x4, diesel, high clearance"],
    ["Mixed pavement and graded forest roads", "AWD Transit or 2WD Sprinter", "Light dirt without the 4x4 penalty", "Full 4x4 conversion"],
    ["Backcountry, sand, snow, steep two-track", "Sprinter 4x4 or aftermarket 4x4", "Clearance and traction earn their cost", "A front-drive ProMaster"],
    ["High annual miles, warm-season west", "Diesel Sprinter or Transit", "Fuel economy and torque pay back", "A gas engine here"],
    ["Rare moves, stationary basecamp", "Box truck conversion", "Volume per dollar, standing room", "Stealth, tight parking, good mpg"],
  ]},

  { kind: "p", text: "Read that table as a starting point, not a verdict. Most riders run more than one kind of season, and the honest answer is the platform that covers the majority of their nights while staying usable for the rest -- which is why the AWD Transit covers the widest span of real seasons at a reasonable cost, capable enough for the graded and light-rough roads most objectives sit on and cheap enough that the capability is not a daily tax." },

  { kind: "h2", text: "A good cheap platform beats a bad expensive one" },

  { kind: "p", text: "This is the sentence to carry out of the whole page. Two riders arrive with the same money: one buys a tired low-mileage Sprinter with no records and a hidden emissions fault, the other a documented high-mileage Transit that a platform shop signed off on. The second rider is on the road for years; the first is at a specialist waiting on a part before the first season ends. Price bought the badge; the inspection bought the van. Money is better spent on verification than on brand -- the 200 dollars for an inspection and the willingness to walk from a van you already love buy more reliability than the step up from a Transit to a Sprinter ever will." },

  { kind: "key", text: "Buy the least van that covers the season you will actually run, in the best mechanical condition you can verify, and put the saved money into the inspection and the build rather than the badge. The right van is not the most capable one you can picture -- it is the soundest one that fits the roads you will genuinely hunt, bought on its records and driven for years." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "Everything above is the general framework, and the general framework does not know the specific van in the listing. Prices move with region, season, and the fuel market; the value platform this year is not guaranteed to be next. The figures here are the shape of the arithmetic, not a quote, and the only authoritative price is the one a sound van in front of you commands after an honest inspection." },

  { kind: "p", text: "Where a specific vehicle is concerned, the authority is a mechanic who knows that platform, on that van, before you buy -- not any table on any website, including this one. For the drivetrain judgment, the rust call, and the emissions read on a diesel, pay a professional who will put a scanner on it and a lift under it. That inspection is the one line item that pays for itself every time, and the one riders regret skipping more than any other." },
];
