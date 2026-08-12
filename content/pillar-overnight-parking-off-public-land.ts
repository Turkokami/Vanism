import type { Block } from "./blocks";

/** Overnight parking when you are not on public land -- Vanism pillar. */
export const PILLAR_OVERNIGHT_PARKING_OFF_PUBLIC_LAND: Block[] = [
  { kind: "key", text: "When dispersed ground is not an option, the reliable overnight stops are interstate rest areas in states that permit them, truck stops parked in the car section, casino lots that welcome travelers, and business lots where a manager has said yes to your face. The discipline that keeps them open is the same everywhere: arrive late, stay level and undramatic, deploy nothing outside the vehicle, leave early. Parking is usually tolerated; camping usually is not, and the line between them is whether anything is on the pavement." },

  { kind: "p", text: "A long run is not spent entirely on public land. Some nights are transit nights -- moving between regions, waiting out weather on an interstate, or arriving somewhere at eleven at night with three hundred miles behind you and no light to hunt a dispersed site by. Those nights are governed by private property and municipal ordinance, not federal land policy, and the rule set is entirely different from anything on a field-office page." },

  { kind: "p", text: "The category talks about this in the language of hacks and secret spots, which is exactly wrong. Nothing here is secret. The stops that work are the ones riders and working drivers already use quietly, and they keep working because those people arrive late, stay invisible, and leave early. Every lot that closes to overnight parking closed because someone treated a parking space like a campsite. This page is about staying inside the tolerance that already exists, not testing where it breaks." },

  { kind: "p", text: "What follows is the general posture for each kind of stop -- rest areas, truck stops, business lots, city streets, casinos and the tolerant remainder -- how to ask when asking is the move, and the discipline that separates a night nobody noticed from one that gets a lot posted against everyone after." },

  { kind: "h2", text: "The one distinction that governs all of it" },

  { kind: "p", text: "Before any specific location, there is a single distinction an enforcement officer draws that decides how the night goes, and it holds across rest areas, retail lots, streets and casino grounds alike: are you parking, or are you camping. Parking is a vehicle at rest with its occupants inside. Camping is anything that signals you have moved in -- an awning out, a chair on the asphalt, leveling ramps under the tires, a generator running." },

  { kind: "p", text: "Most ordinances and most private-lot policies prohibit camping and say nothing enforceable about a parked, occupied vehicle. That is the entire game. A rider asleep in a level, closed-up vehicle in a legal space is difficult to act against. The same rider with a chair out has handed the officer a clean reason to move them and post the lot. Stay inside, put nothing out, and the question usually never gets asked." },

  { kind: "note", text: "This is why the phrase throughout this page is overnight parking, not camping. The enforcement categories are built on those words. Never describe what you are doing as camping to a manager, an officer, or a guard. You are parked for the night -- the more accurate description and the one that keeps the door open." },

  { kind: "h2", text: "Interstate rest areas: a state-by-state patchwork" },

  { kind: "p", text: "Rest areas are the most predictable transit stop and the most misunderstood. There is no federal rest-area overnight rule. Each state department of transportation sets its own, and those policies fall into three rough postures: states that permit overnight rest, states that post a time limit in hours, and states that prohibit overnight stops and mean it. The posted sign at the entrance is the operative rule, and it beats any list you read anywhere, including this one." },

  { kind: "p", text: "The general shape: many western and plains states, where distances between towns run long, tend to permit or tolerate an overnight stop, while a number of eastern and southeastern states post firm time limits -- commonly three or four hours -- to prevent overnight use. Some permit rest for safety while explicitly prohibiting camping, which loops back to the distinction above: you may sleep, you may not set up. The posted limit governs, enforced most consistently in the states that bothered to post it." },

  { kind: "table", caption: "Rest area overnight postures (verify at the sign)", head: ["Posture", "What the sign tends to say", "How riders use it", "Where it breaks"], rows: [
    ["Overnight permitted", "No time limit, or explicit allowance for rest", "A genuine full-night stop, level and closed up", "Even here, camping is usually still prohibited -- sleep, do not set up"],
    ["Posted time limit", "2 to 4 hours, sometimes 8, enforced by patrol", "A few hours of sleep in transit, then move on", "Officers walk the lot; the limit is real, not decorative"],
    ["Overnight prohibited", "No overnight parking, no camping", "Not a sleep stop -- fuel, restroom, move on", "These states enforce; repeat visits get flagged"],
    ["Unstaffed or seasonal", "Varies; may close entirely off-season", "Fallback only, never the plan", "Closure gates and no services when you arrive late"],
  ]},

  { kind: "p", text: "Two practical points. Welcome centers -- the staffed facilities near state lines -- are more restrictive than plain rest areas, because they are patrolled. And park in the general or car section, never among the trucks: those spaces belong to drivers who are legally required to stop." },

  { kind: "h2", text: "Truck stops: park among working trucks by their rules" },

  { kind: "p", text: "Truck stops and travel plazas generally tolerate overnight parking, and they are among the better transit stops on a long circuit: lit, staffed through the night, with fuel, restrooms, and often showers and food. The single rule that matters is that the truck parking is not yours. Those spaces exist for drivers whose hours are regulated and who may have driven a long way counting on one being open. Taking one in a passenger vehicle costs a working driver a legal place to sleep." },

  { kind: "p", text: "Park in the car section, the RV section if marked, or the fuel-island periphery away from the pumps -- never in a numbered truck slot, never against the fuel lanes, never blocking the scale or exit line. A rider who parks in the car area, buys a meal, and keeps the space clean is a customer and is treated as one. A rider who beds down in a truck slot is a problem the manager hears about from three drivers before midnight." },

  { kind: "table", caption: "Truck stop parking by zone", head: ["Zone", "Who it is for", "Overnight in a van or car", "Etiquette"], rows: [
    ["Numbered truck slots", "Regulated commercial drivers", "No -- costs a driver a legal rest space", "Never idle here; do not stage here even briefly"],
    ["Car and RV parking", "Passenger vehicles, travelers", "Yes -- the correct place for it", "Level, closed up, buy something, keep it clean"],
    ["Fuel island", "Active fueling only", "No -- fuel and pull forward", "Clear the pump promptly; do not sleep at the island"],
    ["Reserved paid parking", "Drivers who prepaid a space", "Only if you paid for it", "Honor the assignment; these are booked"],
  ]},

  { kind: "note", text: "Idling is the etiquette failure remembered at truck stops. Working drivers run engines for climate control by necessity and it is loud enough already; a passenger vehicle idling a generator all night in the car section, next to people trying to sleep, is what turns a tolerant plaza into a posted one. Insulate, ventilate, and stay off the generator." },

  { kind: "h2", text: "Business lots: the blanket permission is gone" },

  { kind: "p", text: "For years the working assumption was that certain national retail chains simply allowed overnight parking everywhere as corporate policy. That assumption is now wrong often enough to be dangerous. The posture at several large chains was always permission at store discretion, and a growing number of individual stores no longer permit it -- because the city passed an ordinance the store must follow, because the lot is leased rather than owned, or because a previous wave of visitors left a reason to stop." },

  { kind: "p", text: "The reliable procedure is not to look up a chain's policy. It is to ask at the specific store. Go inside early in the evening, find a manager or the service desk, and ask plainly whether it is all right to park overnight. Accept the answer without negotiating -- a no is often a city ordinance the manager cannot waive, and pressing only ensures the lot gets watched. A yes from a manager standing in front of you outranks any policy page, because that manager decides whether to call anyone." },

  { kind: "h3", text: "How to ask, and what a yes actually covers" },

  { kind: "ul", items: [
    "Ask a manager or the service desk in person, early evening. A phone call draws a reflexive no more often than an in-person ask does.",
    "Say you are parking overnight passing through, not camping -- the words that map to what they can say yes to.",
    "If yes, ask where they prefer -- usually the edge of the lot, under a light, not the fire lane or loading zone.",
    "Buy something. A receipt makes you a customer, a category the store can defend if anyone asks.",
    "If no, thank them and leave. Do not park anyway. A refused lot is a watched lot, and the next rider inherits it.",
  ]},

  { kind: "p", text: "The economics keep you inside the tolerance once you see them. A store permits overnight parking as a low-grade courtesy that costs it nothing as long as it stays invisible. The moment it becomes visible -- a cluster of rigs, gear on the pavement, a mess in the morning -- the courtesy is withdrawn, usually permanently and for everyone. You are not exercising a right. You are borrowing a tolerance, and the rent is going unnoticed." },

  { kind: "h2", text: "City streets: ordinances you cannot see from the curb" },

  { kind: "p", text: "Sleeping in a vehicle on a public street is the most legally variable option and the one most likely to end in a knock. Many municipalities now have ordinances that specifically prohibit sleeping or living in a vehicle, and many more restrict overnight on-street parking through posted hours, permit-zone requirements, or time limits. None of this is visible from inside a dark vehicle at midnight, which is exactly why the knock comes." },

  { kind: "p", text: "The common ordinance types are worth knowing by shape, because the shape tells you the risk before you commit to a block. Read the signs on the actual street -- posted hours and permit-zone markers are the operative rule -- and treat any residential street as higher risk than a commercial or industrial one, because residential calls to non-emergency lines drive enforcement." },

  { kind: "table", caption: "Common city parking ordinance types", head: ["Ordinance type", "What it restricts", "How it is enforced", "Rider read"], rows: [
    ["Vehicle habitation ban", "Sleeping or living in a vehicle, anywhere in the city", "Officer contact, warning, then citation", "Highest risk; the city has decided against you in advance"],
    ["Overnight street parking ban", "Any parking 2am to 5am or similar posted window", "Ticket, sometimes tow", "Common in suburbs; the sign states the window"],
    ["Permit-zone parking", "Non-residents parking overnight in marked zones", "Ticket by plate, patrolled", "Residential blocks near you may be permit-only"],
    ["Time-limit parking", "Parking beyond 2 to 72 posted hours", "Chalk or plate reader, then ticket", "Move the posted distance to reset; some read plates, not tires"],
    ["Oversized-vehicle restriction", "Vehicles over a length or height overnight", "Ticket, aimed at RVs and vans", "A tall van may trip this where a car would not"],
  ]},

  { kind: "p", text: "The practical posture on streets: last resort, not a plan, and industrial and commercial edges are lower-risk than any residential block. If you must use a street, arrive after the neighborhood has settled, park with the pattern of the block rather than apart from it, and be gone before it wakes. A vehicle gone by the commute rarely generates the call that starts enforcement; the same vehicle parked into daylight, curtains drawn, is the one that gets reported." },

  { kind: "note", text: "If an officer knocks, be awake, polite, and ready to leave. In most jurisdictions the first contact is a request to move on, not a citation. Move on. Arguing the ordinance at the window at 2am converts a warning into a ticket and yourself into someone the patrol remembers." },

  { kind: "h2", text: "Casinos: lots that want you there" },

  { kind: "p", text: "Some private lots do not merely tolerate overnight parking -- they want you there. Casinos in a number of states actively welcome it, on the theory that a traveler parked in the lot may spend money inside. Many have a designated RV or overnight area, some formalize it through a players-club courtesy, and a few offer hookups for a nominal fee. The etiquette is the same as everywhere else, plus one addition: the welcome is commercial, so going inside and being a patron honors it." },

  { kind: "h2", text: "Fairgrounds, lodges and municipal lots" },

  { kind: "p", text: "Beyond casinos, a scattered set of options rewards the rider who plans at the desk rather than improvising at midnight. County fairgrounds are widely underused and frequently allow an overnight stay for a small charge outside event weeks -- a call to the office settles it. Some small towns maintain a free municipal lot or overnight park to draw travelers into local businesses, and these are among the better stops on a run. Elks lodges and similar member organizations often permit member overnight parking." },

  { kind: "table", caption: "Overnight parking options compared", head: ["Option", "Legality", "Typical cost", "Noise and light", "How to ask"], rows: [
    ["Rest area (permitting state)", "Legal where posted allowed", "Free", "High -- highway, trucks, lights", "No ask needed; read the sign"],
    ["Truck stop, car section", "Tolerated as a customer", "Free with a purchase", "High -- idling trucks all night", "No ask; park in car area, buy fuel or food"],
    ["Casino lot", "Welcomed in many states", "Free, sometimes paid hookups", "Moderate, well lit", "Check signage or ask security; patronize inside"],
    ["Business lot", "Store discretion, ask required", "Free with a purchase", "Low to moderate", "Ask a manager in person, early evening"],
    ["County fairgrounds", "Usually paid, allowed off-event", "Small nightly fee", "Low", "Call the fairgrounds office in business hours"],
    ["City street", "Ordinance-dependent, often prohibited", "Free where legal", "Variable, residential risk", "No ask; read signs, treat as last resort"],
    ["Municipal traveler lot", "Explicitly provided", "Free or small fee", "Low", "Town website or a call; some post a sign"],
  ]},

  { kind: "p", text: "The pattern is worth naming. The free stops that welcome you -- casinos, municipal lots, permitting rest areas -- are noisier or plainer than a dispersed site, and that is the trade. The quiet, pleasant stops usually cost a few dollars and reward a phone call from the desk that afternoon. Planning the transit night alongside the rest of the run keeps you out of the residential-street category entirely." },

  { kind: "h2", text: "The discipline: late in, level, undramatic, early out" },

  { kind: "p", text: "Every tolerant stop above stays tolerant because of the same handful of habits, worth stating as a discipline rather than a list of tips. A rider who holds this can use marginal stops for years without incident. A rider who does not will get good stops closed behind them." },

  { kind: "h3", text: "Arrive late, leave early" },

  { kind: "p", text: "Your presence should overlap as little as possible with the hours anyone is watching. Arrive after the lot or block has settled and be gone near first light, before the commute or the store opening. A vehicle present for one dark stretch generates no complaint. The same vehicle parked into the next day, curtains drawn, is a standing question someone eventually answers by calling it in." },

  { kind: "h3", text: "Stay level and stay closed" },

  { kind: "p", text: "Park level on the pavement as it lies -- if a spot needs ramps to sleep on, pick another, because ramps read as camping at a glance. Window covers up before you turn a light on, not after. One dim interior light, not the full rig lit like a storefront. Closed up and dark, a vehicle is indistinguishable from any other parked car, which is the objective." },

  { kind: "h3", text: "Deploy nothing on the pavement" },

  { kind: "p", text: "This is the rule that carries the most weight and the one most often broken by tired riders who forget where they are. On any pavement that is not a paid campsite, nothing comes out of the vehicle. No chair, no table, no awning, no grill, no mat, no generator on the asphalt. The moment an object is on the ground beside the vehicle, you are camping by the only definition that matters, and you have handed away the distinction that protects you. Whatever the night requires happens within the walls of the vehicle." },

  { kind: "table", caption: "Stealth-in-transit checklist", head: ["Phase", "Action", "Why it matters"], rows: [
    ["At the desk, that afternoon", "Pick the stop and a backup; call ahead where a call settles it", "Removes the midnight residential-street improvisation entirely"],
    ["On approach", "Fuel, water, restroom, and dinner before you arrive", "You arrive needing nothing, so you can go straight to level and dark"],
    ["Arrival", "Come in late, after the lot has settled; park level", "Minimizes overlap with anyone watching; ramps read as camping"],
    ["Setting up", "Window covers up, then one dim light; nothing outside", "Closed and dark is indistinguishable from a parked car"],
    ["Through the night", "No idling, no generator, no gear on the pavement", "Idle noise and deployed gear are what get lots posted"],
    ["Departure", "Leave near first light; pack nothing you did not unpack", "Gone before the complaint window opens; leave no trace you were there"],
    ["The morning after", "Site cleaner than you found it, including litter not yours", "The next rider inherits the tolerance you either kept or spent"],
  ]},

  { kind: "note", text: "One security decision belongs in the checklist: sleep where you can drive away without getting out. Keep the keys within reach and do not park boxed in. The ability to leave immediately, fully closed up, is both a safety margin and the thing that lets a knock end in driving off." },

  { kind: "h2", text: "Reading a lot before you commit to it" },

  { kind: "p", text: "A few quick reads separate a stop that will hold from one that ends in a knock, and they take a slow pass through the lot before you shut down. Look for signs first -- explicit no-overnight-parking or no-camping language settles it and you move on. Then read the lot itself." },

  { kind: "ul", items: [
    "Signage: posted no-overnight or no-camping language is a hard no; posted hours on a street are the operative limit. Read them before you settle.",
    "Lighting and cameras: a well-lit, camera-covered lot is safer and more tolerant than a dark corner, which reads as hiding rather than resting.",
    "Other rigs: a lot already holding a few quiet, closed-up vehicles is telling you it is tolerated. An empty lot where you would expect company is telling you something too.",
    "Surface and grade: level, solid pavement you can sleep on without ramps. If it needs leveling, it is the wrong spot.",
    "Exits: a clear way out without getting out of the vehicle. Never box yourself in.",
    "Neighborhood: commercial and industrial edges tolerate a parked vehicle; residential blocks generate calls.",
  ]},

  { kind: "p", text: "The read that matters most is the one the official record cannot give you: whether a specific lot or block actually tolerates an overnight stay right now. Chain policies drift, a store that said yes last season posts a sign this one, a city passes a habitation ordinance between one run and the next. None of that is in any published rulebook on the day it changes." },

  { kind: "key", text: "This is the gap Vanism was built for. A transit stop carries the date a rider last confirmed it held -- the lot still tolerant, the sign not yet posted -- and anything not confirmed recently drops out rather than being shown with a caveat. A stop without a date is a rumor from a forum three years ago; with a date it is road intel you can weigh yourself. Rules you can read; current tolerance you have to have stood in." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "Everything above is the general posture, and the general posture is wrong somewhere in every state. Rest-area policy is set state by state and changes. City ordinances are set municipality by municipality and multiply every year. A store's tolerance is set by a manager you have not met, in a lot governed by a council you have never heard of. A confidently quoted national rule about any of this is the kind of thing that gets a rider a citation while they insist they read it on a website." },

  { kind: "p", text: "The authorities are specific and reachable. For a rest area, the state department of transportation sets the policy and the sign at the entrance states it locally. For a street, the city's parking ordinance and the posted signs govern, and the non-emergency line will tell you before the patrol does. For a private lot, the manager or security office on site is the only authority that counts. Ask the person who actually decides, read the sign that is actually posted, and let those beat anything on this page. The general framework gets you to a region and a plan. The specific yes is local." },
];
