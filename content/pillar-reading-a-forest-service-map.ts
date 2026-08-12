import type { Block } from "./blocks";

/** Reading a Forest Service map, MVUM and all -- Vanism pillar. */
export const PILLAR_READING_A_FOREST_SERVICE_MAP: Block[] = [
  { kind: "key", text: "On national forest land, the Motor Vehicle Use Map -- the MVUM -- is the only document that legally states which roads are open, to which class of vehicle, and in which months. It is free, published per forest, and it overrides every navigation app, every paper atlas, and the general Forest Visitor Map. If a road is not on the MVUM as open to your vehicle, driving it is a violation regardless of what any app shows." },

  { kind: "p", text: "A national forest is not managed as open land with a few closed patches. It is managed as a road system, and the legal question on it is narrow: is this exact road open, to my exact vehicle, on today's date. Three maps claim to answer that question and only one is binding. The other two are useful for context and dangerous when trusted alone." },

  { kind: "p", text: "The Motor Vehicle Use Map is the binding one. It exists because of a 2005 federal rule that required every national forest to designate a system of roads and trails open to motor vehicles and publish it on a map free to the public. Anything not on that map as open is closed by default. That inversion -- closed unless listed open -- is the single most important thing to understand, because it is the opposite of how most riders assume public land works." },

  { kind: "p", text: "This page explains how to read one: the three map types and what each is for, forest road numbering, what a road's class implies about surface and difficulty, the symbol legend for vehicle type and season, seasonal gates, where to download the MVUM free, and how dispersed-camping corridors are marked. The goal is that you can open an unfamiliar forest's MVUM and read it correctly the first time." },

  { kind: "h2", text: "The three maps, and which one is the law" },

  { kind: "p", text: "Every national forest publishes at least three products a rider will encounter, and they are routinely confused because they cover the same ground and look similar. They are not interchangeable. One is legally operative, one is a general reference, and one is a commercial product that answers a different question entirely." },

  { kind: "table", caption: "The three maps compared", head: ["Map", "Published by", "What it is for", "Legal weight", "Currency"], rows: [
    ["Motor Vehicle Use Map (MVUM)", "The forest, under federal rule", "The legal list of roads open to motor vehicles, by class and season", "Binding -- this is the law on the ground", "Reissued annually; the current edition governs"],
    ["Forest Visitor Map / Motor Vehicle Travel Map", "The forest", "General orientation: terrain, boundaries, features, most roads", "Reference only -- shows roads regardless of legal status", "Updated every several years"],
    ["Consumer nav apps (mainstream routing apps)", "Private mapping companies", "Getting between addresses on public roads", "None on forest roads", "Continuous, but sourced from stale or wrong road data"],
  ]},

  { kind: "p", text: "The Forest Visitor Map is the large paper map sold at the district office. It is excellent for understanding a forest -- where the drainages, peaks, and lakes sit, roughly where the roads run. It shows roads that are closed, decommissioned, or restricted, because its job is orientation, not authorization. Reading a road off the Visitor Map tells you the road exists. It does not tell you that you may drive it." },

  { kind: "p", text: "Consumer navigation apps are the real hazard. They route cars between street addresses, and their forest-road data is inherited from old government datasets, crowd edits, and satellite guesses. They routinely show roads decommissioned a decade ago, roads gated nine months of the year, and, more than occasionally, roads that were never built -- a surveyed alignment that exists as a line in a database and as nothing on the mountain. An app will route you onto a line that ends at a washout, because it does not know the difference between a legal open road and a pixel." },

  { kind: "note", text: "The failure is not that apps are occasionally wrong. It is that they are wrong in one direction: they overstate what is drivable. An app almost never hides a legal road, but it will confidently offer roads that are closed or absent -- it is the one source biased toward routing you somewhere you are not allowed to be." },

  { kind: "h2", text: "Why the MVUM overrides everything" },

  { kind: "p", text: "This bears stating plainly because riders resist it: the MVUM overrides every app, every GPS unit, every older paper map, and the Forest Visitor Map itself. When a Forest Service officer decides whether a road was open, the MVUM in effect on that date is the document they use -- not the sign, which may be missing, and not the app, which has no standing. \"My GPS said it was a road\" is not a defense, and every ranger has heard it." },

  { kind: "key", text: "Plan the route on the MVUM first, then use the app only to follow a route you have already confirmed is legal. Never the reverse. The app is a steering aid on roads the MVUM has already told you are open -- it is not a source of truth about which roads those are." },

  { kind: "h2", text: "How forest roads are numbered" },

  { kind: "p", text: "Forest roads are numbered, not named, and the numbering is a hierarchy that carries meaning once you can read it. A forest road number -- written as FR, FSR, or NFSR followed by digits -- works like a postal hierarchy: short numbers are the arterials, longer numbers hanging off them are the branches, and a lettered suffix is usually a short spur. The length and structure tell you roughly where a road sits and often what to expect from it." },

  { kind: "table", caption: "Forest road numbering, read as a hierarchy", head: ["Form", "Example", "What it usually means", "What to expect"], rows: [
    ["Two- or three-digit main road", "FR 24", "A primary forest arterial, often the way in", "Graded, maintained, frequently passenger-car capable"],
    ["Four-digit branch", "FR 2440", "A secondary road off a main road", "Narrower, less maintained, variable surface"],
    ["Four-digit plus letter spur", "FR 2440A", "A short spur off the branch, often a dead end", "Primitive, often high-clearance, may not be maintained"],
    ["Numbered trail (not road)", "Trail 24 / NFST", "Open to trail vehicles, not full-size", "Do not assume a full-size vehicle fits"],
  ]},

  { kind: "p", text: "The hierarchy is a strong hint, not a guarantee -- some forests renumbered old systems and the tidiness broke -- but it holds often enough to be useful: if FR 2440A is deteriorating, dropping back to FR 2440 and then FR 24 moves you toward better road." },

  { kind: "note", text: "The number on the MVUM, the number on the brown fiberglass marker in the field, and the number in your app should all agree. When they disagree, the MVUM is right and the other two are stale. Markers do go missing, one more reason the map is read before you arrive, not after you are lost." },

  { kind: "h2", text: "Road classes and what the number implies about surface" },

  { kind: "p", text: "The Forest Service assigns every system road a maintenance level, numbered 1 through 5, and this is the single most useful field for deciding whether your vehicle belongs on a road. Maintenance level -- often abbreviated ML -- describes what the road is maintained for, which is a close proxy for what it demands." },

  { kind: "table", caption: "Road maintenance level and what to expect", head: ["Maintenance level", "Maintained for", "Typical surface", "Realistic vehicle"], rows: [
    ["ML 1", "Closed to traffic; kept for future/administrative use", "Unmaintained, often revegetated or barricaded", "None -- generally not open to public motor vehicles"],
    ["ML 2", "High-clearance vehicles", "Native surface, rutted, rocky, drainage crossings", "High-clearance; four-wheel drive on the rougher ones"],
    ["ML 3", "Standard passenger cars, low comfort", "Graded gravel or dirt, some rough spots", "Passenger car in dry conditions, driven slowly"],
    ["ML 4", "Passenger cars, moderate comfort", "Well-graded gravel, sometimes surfaced", "Any vehicle; the comfortable forest arterial"],
    ["ML 5", "Passenger cars, high comfort", "Paved or high-grade aggregate", "Any vehicle at near-highway speed"],
  ]},

  { kind: "p", text: "The line that matters most for a long-wheelbase vehicle is between ML 2 and ML 3. ML 3 and above are maintained with passenger cars in mind and are usually manageable taken carefully. ML 2 is maintained for high-clearance vehicles -- the map telling you it expects ruts, rock, and drainage crossings a low car will drag on. An ML 2 road is not necessarily hard, but the map has stopped promising it is easy." },

  { kind: "p", text: "ML 1 roads are a common trap. They are closed to public motor vehicle use -- kept on the books for administrative access or future work -- yet they frequently still appear in apps and on older maps, and a brown marker may even stand at the junction. On the MVUM the road is either absent from the open system or shown as closed, and that absence is the whole answer: not open." },

  { kind: "note", text: "Maintenance level describes intent and design, not current condition. An ML 3 road that has not been graded since last spring can be rougher than an ML 2 that was worked last month. The class sets your baseline expectation; it does not tell you what a storm did in March. That gap between design and today is where the map stops and current reports begin." },

  { kind: "h2", text: "Reading the symbol legend" },

  { kind: "p", text: "An MVUM is a dense sheet, printed in black and white, with a legend that does most of the work. The lines and symbols are not decoration -- each encodes a legal fact about what may use that road and when. Reading it correctly is the entire skill." },

  { kind: "p", text: "The core distinction is line style. Roads open to highway-legal (street-licensed) vehicles are drawn one way; roads open only to off-highway or trail vehicles are drawn another. A road with seasonal dates gets a further marking, and one open to specific vehicle classes only is annotated accordingly." },

  { kind: "table", caption: "Typical MVUM symbol legend", head: ["Symbol", "Meaning", "What it governs"], rows: [
    ["Solid line", "Road open to highway-legal vehicles", "Your street-registered van or truck may drive it"],
    ["Dashed line", "Route open to trail or off-highway vehicles only", "Not open to a full-size highway-legal vehicle"],
    ["Line with a season note or dated symbol", "Open only between listed dates", "Legal for part of the year; gated or closed otherwise"],
    ["Vehicle-class icon (jeep, cycle, quad)", "Open to that class of vehicle", "Confirms your vehicle type is among those allowed"],
    ["Symbol for dispersed camping / motorized use zone", "Camping or wheeled travel allowed off the road within a stated distance", "Where you may pull off and stop, when marked"],
    ["No symbol on a visible road", "Not part of the designated open system", "Closed to motor vehicles -- the default"],
  ]},

  { kind: "p", text: "The legend on the actual map is the authority, because forests vary the exact symbols and distances. Always read the specific forest's legend rather than carrying assumptions from the last one -- two adjacent forests can use different marks for the same idea, and the numbers attached, open dates and camping distances, differ by district within a single forest. Many MVUMs also carry a companion table keyed to road number that spells the symbols out in plain text, and where it exists it is the clearest place to read the seasonal dates." },

  { kind: "h2", text: "Seasonal open dates and gates" },

  { kind: "p", text: "A large share of forest roads are open only part of the year, and the MVUM states the dates. This is not advisory. A road marked open June 1 to October 15 is closed to motor vehicles on May 30 and on October 20, and the closure is typically enforced by a physical gate, not a sign you can debate." },

  { kind: "p", text: "The dates protect roads during the months they are most easily destroyed -- spring melt when the surface is saturated, and the onset of winter. The gate is the mechanism: locked outside the open window, and a road that is legally open can still sit behind a gate no one has unlocked yet." },

  { kind: "table", caption: "How seasonal status is expressed and what it means for you", head: ["MVUM shows", "Legal status", "Physical reality", "Rider consequence"], rows: [
    ["Open year-round", "Always open to motor vehicles", "May still be impassable in snow", "Legal is not the same as passable -- check conditions"],
    ["Open with dates (e.g. 06/01-10/15)", "Open only within the window", "Gated and locked outside the window", "Plan inside the dates; do not drive around a gate"],
    ["Open, seasonal, dates vary by year", "Open when the forest opens it", "Gate opens with snowpack, often late", "Published date is a target; actual opening slips"],
    ["No dates but road absent from open system", "Closed to motor vehicles", "May be barricaded or simply unsigned", "Not drivable regardless of app or marker"],
  ]},

  { kind: "note", text: "The gate opening date and the printed open date are not the same thing. The MVUM may say June 1, but the crew unlocks the gate when the road has dried enough to survive traffic, which in a heavy-snow year is weeks later. The printed date is the earliest it is legal, not a promise the gate is open -- the item most worth confirming locally before a long drive to a gated road." },

  { kind: "h2", text: "How to download the MVUM for free" },

  { kind: "p", text: "MVUMs are free by law and available several ways -- no reason to pay for one, and no reason to arrive without it. The point of downloading it in advance is that you will need it precisely where you have no signal." },

  { kind: "ol", items: [
    "Go to the Forest Service national website and open the Motor Vehicle Use Maps section, or search the specific forest's name with \"MVUM\". Each forest posts its current-edition PDFs, split into map quadrants.",
    "Download the PDF quadrants that cover your route. They are geospatial PDFs -- large, and best fetched on wifi before you leave.",
    "Load them into a mapping app that reads georeferenced PDFs or the Forest Service's own offline motor-vehicle layer, so your GPS position shows as a dot on the actual MVUM even with no signal.",
    "Alternatively, use the Forest Service's official offline map application, which carries the MVUM road designations as a downloadable layer for a chosen forest.",
    "Note the edition year on the sheet. If it is not the current year, check the forest's page for a newer edition before you rely on it -- the designations can change between editions.",
    "Pick up the paper Forest Visitor Map at the district office for orientation, and keep it as the backup that does not need a battery. Use it to understand terrain, not to decide legality.",
  ]},

  { kind: "p", text: "The georeferenced PDF is the quiet unlock. Loaded into an app that reads it, the legal map becomes a live navigation surface -- your position rendered on the exact document that governs the ground, working entirely offline. That is what makes reading the MVUM practical in the field rather than a chore you do at a desk and forget." },

  { kind: "h2", text: "Dispersed-camping corridors and how they are expressed" },

  { kind: "p", text: "Most forests permit dispersed camping within a set distance of an open forest road, and the MVUM or its companion documents state that distance. The permission is tied directly to the road system: it exists as a corridor along open roads and does not exist along closed ones. The distance is usually stated in feet from the road centerline or edge -- commonly 150 or 300 feet, sometimes 100, occasionally up to a mile in specifically designated areas. Within that band you may pull off and camp on existing sites; beyond it you are driving cross-country, which is prohibited. The corridor is a maximum, not an invitation to blaze a track to its edge." },

  { kind: "table", caption: "How dispersed-camping corridors are commonly expressed", head: ["Expression on the map", "What it permits", "The boundary that catches people"], rows: [
    ["Camping within 300 ft of designated open roads", "Pull off and camp in that band along open roads", "300 ft is the limit; you may not drive cross-country to reach a spot"],
    ["Camping only in numbered/marked dispersed sites", "Camp at the specific marked sites only", "An unmarked pullout is not a legal site here"],
    ["Motorized camping corridor shown as a shaded strip", "Wheeled access and camping inside the shaded strip", "Outside the strip, driving off-road is prohibited"],
    ["No corridor marking along a road", "No dispersed camping along that road", "Absence of a corridor mark means no, not maybe"],
  ]},

  { kind: "p", text: "The crucial reading is that the corridor follows open roads only. A road closed on the MVUM has no camping corridor, no matter how established the pullout looks or how many fire rings are there -- those rings may predate the closure. The legal question is whether the road is currently open; the MVUM answers it, and the condition of the pullout answers nothing." },

  { kind: "note", text: "Where a forest requires camping in numbered dispersed sites only, that is a hard restriction, and it is spreading in high-use areas. There the general \"within 300 feet of any open road\" instinct is wrong and earns a citation. Read the specific forest's rule; the pattern is tightening year over year, not loosening." },

  { kind: "h2", text: "Putting a route together from the map" },

  { kind: "p", text: "Reading the MVUM well is a sequence, not a glance. The order matters because each step constrains the next, and skipping the early steps is what puts riders on closed or impassable roads." },

  { kind: "ol", items: [
    "Identify the forest and get its current-edition MVUM quadrants for your area. Confirm the edition year.",
    "Find your target -- a camping corridor, a trailhead, a through-route -- and trace the road numbers that reach it, working down the numbering hierarchy from arterial to branch to spur.",
    "Check each road's line style and vehicle-class marks: is it open to highway-legal vehicles, or trail vehicles only.",
    "Check each road's maintenance level or the companion table for surface expectations. Note where the class drops to ML 2, which is your high-clearance boundary.",
    "Check seasonal dates on every segment. One gated segment closes the whole route for the season, and it is easy to miss on a long chain of roads.",
    "Confirm the dispersed-camping rule for that forest -- corridor distance, or marked-sites-only -- so you know where you may legally stop.",
    "Only now open the navigation app, and use it solely to follow the roads you have already confirmed are legal and open.",
  ]},

  { kind: "p", text: "That sequence inverts how most people plan -- route in an app and hope the roads are real. Doing it in MVUM order costs twenty minutes at a desk with signal and removes nearly every way a forest-road plan goes wrong before you are miles in with nowhere to turn around." },

  { kind: "h2", text: "Where the map stops telling the truth" },

  { kind: "p", text: "The MVUM is authoritative about rules and silent about conditions, and the difference is everything once you leave pavement. The map states that road 2440 is open to highway vehicles from June 1 to October 15 and that camping is allowed within 300 feet. It does not state that the June snowpack has not cleared, that a culvert failed in the melt, that the gate is still locked despite the printed date, or that the last two miles turned to axle-deep clay after a week of rain." },

  { kind: "p", text: "Those are conditions, and conditions are what the official record cannot carry. A map reissued once a year describes a designation, not a road surface on a given afternoon: the MVUM tells you what is legal, and something else has to tell you what is currently true." },

  { kind: "p", text: "This is the one place a rider's report earns its keep. Vanism records each forest-road objective with the access status a rider confirmed on the ground and the date they confirmed it, so a gate that opened three weeks late or a washout on the upper spur shows as current fact rather than being absent from a map that only knows the rule. The MVUM remains the authority on legality; a dated, on-the-ground confirmation is the authority on whether the road is passable this week. You need both, and the map supplies only one." },

  { kind: "h2", text: "The limits of this framework, and where to confirm" },

  { kind: "p", text: "Everything above is the general grammar of a Motor Vehicle Use Map, and it holds across the national forest system. The specifics do not travel. Camping-corridor distances, exact symbols, seasonal dates, and the maintenance level of a given road are all set forest by forest and district by district, and they change between editions." },

  { kind: "p", text: "So the framework makes you literate; it does not hand you the answer for a specific road. For that, three sources are authoritative and local: the current-edition MVUM for the exact forest, which you download free; the district ranger office, a phone call answered by someone who reads these maps daily and knows what the printed dates are actually doing this year; and a recent on-the-ground report for the conditions the map cannot hold. Read the MVUM, call the district for the gate dates and edge cases, and confirm conditions before you commit a day of driving to a road you have only seen on paper." },
];
