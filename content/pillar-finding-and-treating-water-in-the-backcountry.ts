import type { Block } from "./blocks";

/** Finding and treating water in the backcountry -- Vanism pillar. */
export const PILLAR_FINDING_AND_TREATING_WATER_IN_THE_BACKCOUNTRY: Block[] = [
  { kind: "key", text: "A hiker needs roughly half a liter to one liter of water per hour of moving effort -- call it two to four liters over a normal day, and six or more in heat or at altitude. You find it by reading a map for springs and perennial streams, then confirming the source is actually running before you rely on it. You treat all of it, because clear cold water carries giardia, cryptosporidium and bacteria that you cannot see, taste or smell. Match the method to the threat: a filter for protozoa and bacteria, chlorine dioxide or boiling when you need to kill everything including viruses, and keep your filter from freezing." },

  { kind: "p", text: "Water is the one thing on a hike you cannot ration your way out of and cannot carry enough of for a long day. A liter weighs a kilogram; four liters is four kilograms before you add a stove, a shell or food. So the plan is almost never to carry the whole day's water -- it is to carry enough to reach the next reliable source and treat what you find there. That makes two skills load-bearing: finding water that is actually there, and making it safe to drink." },

  { kind: "p", text: "Both skills fail quietly. A spring that ran every year for a decade can be dry the summer you walk to it. A filter that worked all season can crack the first night it freezes and pass unfiltered water without telling you. The rules below are reliable most of the time; this page is about where they stop being reliable, because that is where people get hurt or sick." },

  { kind: "p", text: "It covers how much you need, how to find water and confirm it, what is in untreated water, the four treatment methods and their failure modes, and the cold-weather problem that ruins filters. Plan the carry at the desk; confirm conditions before you stand at the trailhead." },

  { kind: "h2", text: "How much water a hiker actually needs" },

  { kind: "p", text: "Need is a rate, not a fixed daily number, and it scales with effort, heat, altitude and body size. A useful working figure for moving on trail is about half a liter per hour in mild conditions and closer to one liter per hour when it is hot or the climbing is hard. Over a full day that lands most people between two and six liters, and the top is easy to exceed." },

  { kind: "p", text: "The failure mode is treating a daily total as a plan. Two liters is fine for a cool morning and dangerously short for a shadeless afternoon at 8,000 feet. The amount you carry between sources should come from that stretch's conditions -- distance, climb, temperature, shade -- not from habit." },

  { kind: "table", caption: "Daily water needs by conditions", head: ["Conditions", "Rough daily need", "Drinking rate on the move", "Note"], rows: [
    ["Cool day, easy trail, under 3,000 ft", "2 to 3 liters", "~0.5 L/hr", "Easy to under-drink because you do not feel thirst in the cold"],
    ["Warm day, moderate climb", "3 to 4 liters", "~0.5 to 0.75 L/hr", "The common baseline for a full day out"],
    ["Hot day, exposed, sustained effort", "5 to 7 liters", "~0.75 to 1 L/hr", "Sweat loss can outrun what your gut can absorb"],
    ["High altitude, above 8,000 ft", "Add 1 to 2 liters", "Higher regardless of temperature", "Dry air and heavier breathing raise loss even when it feels cold"],
    ["Cold day, hard effort", "3 to 4 liters", "~0.5 L/hr", "Cold suppresses thirst; you dehydrate without noticing"],
  ]},

  { kind: "h3", text: "Heat raises the number the most" },

  { kind: "p", text: "Sweat is the dominant loss. In sustained heat a hard-working hiker can shed more than a liter an hour, and the gut absorbs replacement at a ceiling of roughly 0.8 to 1 liter per hour. Above that rate you fall behind no matter how much you drink, which is why heat is managed by starting early, resting in shade and slowing down -- not by drinking faster." },

  { kind: "h3", text: "Altitude raises it quietly" },

  { kind: "p", text: "Above about 8,000 feet the air is dry and you breathe harder, so you lose more water through respiration, without the obvious cue of sweat. Cold high air feels like it should need less and needs more. Add a liter or two for altitude and drink on a schedule, because at elevation thirst arrives late." },

  { kind: "note", text: "Electrolytes matter once you are drinking several liters and sweating hard. Plain water in volume while you shed salt can dilute your blood sodium -- nausea and confusion that mimic dehydration and worsen if you answer with more plain water. On long hot days, salt your food or add an electrolyte mix." },

  { kind: "h2", text: "Reading a map for water" },

  { kind: "p", text: "Finding water starts at the desk, on a topographic map. Topo maps mark water in blue, and the symbols carry more than most people read out of them. A solid blue line versus a dashed one is the difference between a stream you can probably count on and one that may be a dry bed by August." },

  { kind: "ul", items: [
    "Solid blue line -- a perennial stream, mapped as flowing year-round. The most reliable surface water, though \"perennial\" is a long-term average, not a guarantee in a drought year.",
    "Dashed or dotted blue line -- an intermittent stream, flowing only part of the year, usually after snowmelt or rain. Treat as likely dry in late summer and fall.",
    "Blue dot or a \"Spring\" label -- groundwater surfacing, often the most dependable source in dry country because it does not need recent rain. Still confirm it; springs move and fail.",
    "Contour lines bunching into a V pointing uphill -- a drainage, the line water follows. Even with no blue drawn, the bottom of a tight drainage is where to look.",
    "Green vegetation strips in dry terrain, visible on satellite layers -- often a sign of water at or near the surface.",
  ]},

  { kind: "p", text: "Springs are the quiet workhorses of dry-country hydrology. Because they surface groundwater rather than collect runoff, a good spring runs when every seasonal creek nearby is a line of dry cobbles -- which is why named springs deserve a second look on a long, dry run, and why one that fails leaves you with no fallback." },

  { kind: "h3", text: "Perennial versus seasonal, and why the label lies sometimes" },

  { kind: "p", text: "The perennial-versus-seasonal distinction is the most useful thing a topo map tells you about water, and the most likely to be out of date. Classifications reflect the survey, sometimes decades old. A stream mapped perennial in a wetter era can run seasonal now, and a run of dry years shrinks every source at once. The symbol is the baseline expectation, not what is true this year." },

  { kind: "table", caption: "Map water sources by reliability", head: ["Source on the map", "Symbol", "Reliability", "When it fails"], rows: [
    ["Perennial stream", "Solid blue line", "High", "Severe multi-year drought; upstream diversion"],
    ["Spring", "Blue dot or \"Spring\" label", "High in dry country", "Water table drops; source shifts or is fouled by stock"],
    ["Intermittent stream", "Dashed blue line", "Seasonal", "Late summer and fall, most years"],
    ["Lake or tarn", "Solid blue shape", "High if large", "Small tarns can be stagnant or dry by late season"],
    ["Stock tank or guzzler", "Small blue mark, often labeled", "Variable", "Empty between rains; often fouled -- treat aggressively"],
    ["Snowfield", "Not a water symbol", "Seasonal", "Gone by mid to late summer at most elevations"],
  ]},

  { kind: "h2", text: "Confirming the source before you rely on it" },

  { kind: "p", text: "A source on a map is a lead, not a fact. The gap between a mapped spring and a running spring has ended more hikes early than any other planning error, and it is avoidable. The rule: never plan a stretch so that one unconfirmed source is all that stands between you and running dry. Carry enough to reach the source past it, or enough to turn around." },

  { kind: "p", text: "Confirming a source means getting current information, not older. The order of preference:" },

  { kind: "ol", items: [
    "Call the managing office -- ranger district, field office, park backcountry desk. They track which springs are running in a dry year. The highest-value ten-minute call in backcountry planning.",
    "Read recent trip reports for the specific trail, dated within the current season. A report from three weeks ago beats a guidebook from three years ago.",
    "Check the water year -- snowpack and recent precipitation. A low-snow winter means an early, dry summer and sources failing weeks ahead of schedule.",
    "Ask riders and hikers who were recently on that ground. Whoever filled up at that spring last week knows something no map or forecast does.",
    "Carry a margin anyway. Even good current information is a few days old by the time you are standing there.",
  ]},

  { kind: "key", text: "This is the one gap the official record does not fill. Agencies map where water is supposed to be; they do not publish whether the creek was running last week. Vanism records carry the date a rider last confirmed a source on the ground, and a record older than the season reads as unconfirmed rather than as fact -- a date you can weigh, not an assertion you have to trust. Current conditions are field intel; the map is only the baseline." },

  { kind: "h2", text: "What is actually in untreated water" },

  { kind: "p", text: "The most dangerous idea in the backcountry is that clear, cold, moving water is clean. Water can look and taste perfect and carry a pathogen load that puts you down for a week. The organisms are microscopic, and the alpine stream tumbling over granite drains a basin that holds elk, marmots, cattle and every hiker upstream of you. There are three biological threats worth planning around, plus a chemical one treatment does not touch." },

  { kind: "h3", text: "Protozoa -- giardia and cryptosporidium" },

  { kind: "p", text: "Giardia and cryptosporidium are single-celled parasites shed in animal and human feces. Giardia causes the classic backcountry illness -- days of cramping, diarrhea and nausea that often start a week or more later, long after you have forgotten the stream. Cryptosporidium is tougher: its hard-shelled oocyst shrugs off chlorine and iodine at field doses, which is the single most important fact in choosing a method. Both are common, and both are large enough for a physical filter to catch." },

  { kind: "h3", text: "Bacteria" },

  { kind: "p", text: "E. coli, campylobacter, salmonella and others show up in water fouled by feces, more so the lower and more-used the terrain. Bacteria are smaller than protozoa but still large enough for a standard hiking filter to remove, and they are killed readily by chemical treatment, UV and boiling -- the easiest of the three to deal with." },

  { kind: "h3", text: "Viruses" },

  { kind: "p", text: "Viruses -- norovirus, hepatitis A, rotavirus -- are the smallest pathogens and pass straight through a standard hollow-fiber filter, whose pores are too large to stop them. Across North American and most temperate wilderness, waterborne viral risk is low, which is why most hikers reasonably rely on filters. In areas of dense human use, downstream of settlement, or anywhere in the developing world, viruses are a real threat and you need a method that kills them: chemical, boiling or UV." },

  { kind: "note", text: "Treatment does not remove chemical contamination -- pesticide runoff from farmland, heavy metals below old mines, agricultural pollution. No filter or tablet fixes that. In those basins the answer is source selection: draw from above the contamination, or do not draw there at all." },

  { kind: "h2", text: "Dirty water and pre-filtering" },

  { kind: "p", text: "Not every source is a clear stream. Stock tanks, desert potholes, silty rivers and stagnant tarns carry sediment and organic matter, and turbidity changes what each treatment can do. Cloudy water clogs a hollow-fiber filter within a few liters, shields pathogens from UV, and slows chemical treatment, because a suspended particle is something for an organism to hide behind." },

  { kind: "p", text: "The fix is to clear the water before treating it. Let a full bottle stand ten or fifteen minutes so the sediment settles, then draw the clear water off the top, and pour it through a bandana or coffee filter to catch the coarse material. This makes nothing safe -- pre-filtering removes dirt, not pathogens -- but it lets your actual treatment work and keeps a filter from clogging on the first tank." },

  { kind: "note", text: "Draw from the best part of a poor source: the current rather than a stagnant edge, clear surface water rather than the stirred-up silty bottom of a pothole. Source selection does half the work before treatment starts." },

  { kind: "h2", text: "The four treatment methods compared" },

  { kind: "p", text: "There is no single best method, only a best match for the threat, the water and the season. The four in wide use are physical filters, chemical treatment, ultraviolet light and boiling -- each handles a different slice of the problem, and each has a failure mode that matters more than its marketing." },

  { kind: "table", caption: "Treatment methods compared", head: ["Method", "Protozoa", "Bacteria", "Viruses", "Speed", "Weight", "Main failure mode"], rows: [
    ["Hollow-fiber filter", "Yes", "Yes", "No", "Fast, 1 to 2 L/min when clean", "60 to 120 g", "Cracks if frozen -- then passes everything, invisibly"],
    ["Chlorine dioxide", "Yes (slow on crypto)", "Yes", "Yes", "Slow: 30 min, up to 4 hr for crypto", "Grams", "Long wait; cold and cloudy water slows it further"],
    ["Iodine", "Weak on giardia, none on crypto", "Yes", "Yes", "30+ min", "Grams", "Does not kill crypto; taste; not for long-term or pregnancy use"],
    ["UV pen", "Yes", "Yes", "Yes", "~90 sec per liter", "100 to 200 g", "Fails on cloudy water; batteries die; a dropped bulb ends it"],
    ["Boiling", "Yes", "Yes", "Yes", "Rolling boil, plus fuel and cool time", "Stove + fuel", "Fuel-heavy; slow; does nothing for chemical contamination"],
  ]},

  { kind: "h3", text: "Filters -- fast, simple, and blind to viruses and freezing" },

  { kind: "p", text: "A hollow-fiber filter is the default for most North American hiking: fast, no wait, removes protozoa and bacteria, improves taste and clarity. Its two failure modes are the ones to internalize. First, it does not stop viruses -- fine in low-risk backcountry, not fine downstream of heavy human use. Second, and more dangerous, freezing splits the fibers and destroys it invisibly, which the cold-weather section below treats in full." },

  { kind: "h3", text: "Chemical -- light, thorough, and slow" },

  { kind: "p", text: "Chlorine dioxide tablets or drops kill protozoa, bacteria and viruses, weigh almost nothing, and cannot freeze or break -- the ideal backup and a strong primary in virus-risk terrain. The cost is time. A standard dose needs about 30 minutes for most threats, but chlorine-resistant cryptosporidium can require up to four hours of contact, and cold or cloudy water slows the reaction further. Iodine is the older, weaker option: it does not reliably kill cryptosporidium at field doses, tastes strongly, and is not recommended long-term or in pregnancy." },

  { kind: "h3", text: "UV -- fast and total, until the water is dirty or the battery is dead" },

  { kind: "p", text: "A UV pen scrambles the DNA of protozoa, bacteria and viruses in about 90 seconds a liter -- all three biological threats, no wait, no taste. It depends on two things holding: clear water and working electronics. UV cannot penetrate cloudy or silty water, so turbid sources must be settled or pre-filtered first. And it is a battery device with a fragile lamp: dead batteries in the cold or a dropped unit leave you with nothing, which is why a UV user should carry chemical tablets as backup." },

  { kind: "h3", text: "Boiling -- the fallback that always works" },

  { kind: "p", text: "Boiling kills every biological pathogen, full stop. A rolling boil is sufficient at any elevation a hiker reaches -- the common instruction to hold it a minute, or three above 6,500 feet, is a conservative margin, since pathogens die well before boiling point. The costs are fuel, time and heat: boiling several liters burns fuel you carry and leaves you hot water to cool, and it does nothing about chemical contamination. Heavy as a primary method; as the fallback when a filter freezes and cracks, it never lets you down." },

  { kind: "h2", text: "Cold weather and the freezing filter" },

  { kind: "p", text: "Cold weather is where filter users get caught, and the mechanism matters because the danger is invisible. Water trapped in the hollow fibers expands about nine percent as it freezes, splitting them. A split fiber is a hole far larger than a giardia cyst, so a frozen-then-thawed filter flows normally, looks normal, and passes unfiltered water carrying whatever the source held. There is no field test and no warning -- you find out days later when you are sick." },

  { kind: "p", text: "The rule follows from the mechanism: once a filter has been used it holds residual water and must never freeze. On any trip where overnight temperatures approach freezing -- most shoulder-season, all winter and alpine hiking -- protecting the filter is a nightly task, not an afterthought." },

  { kind: "ul", items: [
    "Sleep with a used filter in your sleeping bag on cold nights. Body heat keeps it above freezing -- the single most reliable measure.",
    "On the move in the cold, carry it in an inside jacket pocket against your body, not an outside pack pocket.",
    "A brand-new filter that has never been wet is not at risk; the danger begins the first time you run water through it.",
    "If you cannot be sure a filter stayed above freezing, stop trusting it and switch to chemical or boiling for the rest of the trip.",
    "In sustained cold, plan around a method that cannot freeze: chlorine dioxide, or boiling on the stove you already carry for snowmelt.",
  ]},

  { kind: "note", text: "Winter often means melting snow, not filtering a stream. Melted snow is not sterile -- animal and wind-blown contamination -- but the boil you are already doing to melt it handles that completely. In deep winter the stove does double duty and the filter can stay home." },

  { kind: "h2", text: "Choosing a method for the conditions" },

  { kind: "p", text: "The table above says what each method does; the decision is which to carry as primary and what to back it with, given your water and your season. Primary and backup should fail for different reasons -- a filter and a bag of chlorine dioxide tablets do not both die in the cold, so the pair covers the failure a single method cannot." },

  { kind: "table", caption: "Matching method to the situation", head: ["Situation", "Primary", "Backup", "Why"], rows: [
    ["Clear streams, temperate backcountry", "Hollow-fiber filter", "Chlorine dioxide tablets", "Low viral risk; the filter is fast and needs no wait"],
    ["Freezing nights, shoulder season or alpine", "Chlorine dioxide or boiling", "The other of the two", "A used filter that freezes cracks invisibly"],
    ["Silty, cloudy or stagnant water", "Pre-filter, then chemical", "Boiling", "UV cannot penetrate turbid water; sediment clogs filters"],
    ["Downstream of heavy human use", "Chlorine dioxide, UV or boiling", "Filter for clarity, then treat", "Viruses pass a standard hiking filter"],
    ["Deep winter, melting snow", "Boiling on the stove", "Chemical tablets", "You are already melting snow; boiling covers it"],
    ["Group resupply at a good source", "Gravity filter", "Tablets", "A gravity setup treats volume hands-off"],
  ]},

  { kind: "h2", text: "Building the treatment into the plan" },

  { kind: "p", text: "The methods above are only useful inside a water plan for the run, built at the desk before you carry anything. The questions are always the same: where are the sources, how far apart, which are confirmed this season, and how much to carry between them given the heat and climb." },

  { kind: "ol", items: [
    "Mark every mapped source along the route and its type -- perennial, seasonal, spring, lake -- from the topo.",
    "Confirm the sources you intend to rely on with current-season information, and flag any long dry stretch where only one source stands between water points.",
    "Size the carry for the longest gap using that stretch's conditions, not an average day -- add for heat, add for altitude, add a margin.",
    "Match the method to the water and season: filter for clear low-risk backcountry, chemical or boiling where viruses or freezing are in play, and a backup on a different principle than the primary.",
    "Carry the backup. A filter plus a few chlorine dioxide tablets weighs almost nothing and covers the exact failure -- a cracked or frozen filter -- most likely to strand you.",
  ]},

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "Everything above is the general framework, and the framework is built on averages -- average need, average reliability, a normal water year. Your day is not the average. A drought year moves every source toward the dry end at once; a heat wave pushes the top of the needs table past the number printed here. It tells you what to expect and plan against, not what is true on the ground this week." },

  { kind: "p", text: "For that, the managing office is the authority. The ranger district, the field office and the park backcountry desk track which springs are running, whether a source has been fouled or closed, and how this year's snowpack is playing out on the trails they patrol. It is a phone call, usually answered by someone who dealt with the same question yesterday. Confirm the water before you carry the plan, and confirm conditions before you stand at the trailhead -- ten minutes there beats any figure here." },
];
