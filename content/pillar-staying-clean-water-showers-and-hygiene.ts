import type { Block } from "./blocks";

/** Staying clean: showers, water, and hygiene off-grid -- Vanism pillar. */
export const PILLAR_STAYING_CLEAN_WATER_SHOWERS_AND_HYGIENE: Block[] = [
  { kind: "key", text: "Staying clean off-grid is a routine, not a piece of equipment. Most riders run a hierarchy: wipes and a basin on water-lean days, a one-to-two-gallon solar or pump-sprayer rinse when there is water and sun, and a paid hot shower at a truck stop, gym, or rec center every three to seven days to reset. The rule that never bends is grey water -- soapy water never goes on bare ground or within 200 feet of a stream, spring, or lake. Everything else is a preference you tune to your tank and your season." },

  { kind: "p", text: "The question most people ask before a long run is which shower to buy. It is the wrong first question. A built-in shower, a solar bag, and a five-dollar pump sprayer all get you clean. What decides whether you stay clean across a season is the routine: how you ration water, how you heat it, where you draw the line between a rinse and a full wash, and how honestly you handle the grey water after. Riders who dial in the routine stay comfortable on 25 gallons a week. Riders who buy hardware and skip the routine run the tank dry and start skipping days." },

  { kind: "p", text: "Water is the constraint behind all of it. A two-gallon rinse is fine when you refill every second day and a mistake when the next fill is 90 miles out. So this page is organized by water cost: the options compared, then heating, then the part that keeps ground open -- grey water and waste -- then laundry, then a worked daily routine for short-water days. The gear is easy; the discipline around the tank is the whole skill. Everything below is a general framework from the western public-land circuit, and the authoritative source on dumping and on what any facility currently offers is the district office or the front desk, not this page." },

  { kind: "h2", text: "The options, ranked by water and effort" },

  { kind: "p", text: "There is no single best method, because the right one changes with how much water you carry and whether the sun is out. What experienced riders carry is a stack: a near-zero-water option for lean days, a low-water rinse for normal days, and a paid full-flow reset on a fixed interval. Build the stack, not the one perfect shower." },

  { kind: "table", caption: "Shower and hygiene options compared", head: ["Method", "Water per use", "Setup cost", "Hot?", "Effort", "Best for"], rows: [
    ["Body wipes", "~0.1 gal", "$4-8 per pack", "No", "Very low", "Water-lean days, cold weather, face and pits"],
    ["Basin sponge bath", "0.5-1 gal", "$5-15", "If you heat it", "Low", "Full clean on little water; the workhorse"],
    ["Solar / gravity bag", "1-2 gal", "$15-40", "Sun, 90-110F", "Low", "Sunny days with water to spare"],
    ["Pump sprayer rinse", "1-2 gal", "$8-20", "Fill it hot", "Low", "Fast rinse, sandy feet, the dog, gear"],
    ["12V shower pump", "2-4 gal", "$25-60", "Only if source is", "Medium", "Flow without a built-in wet bath"],
    ["Built-in wet bath", "2-4 gal", "$800-3000", "With a heater", "Medium", "Full-timers who use it daily and dump grey legally"],
    ["Truck stop shower", "Unlimited", "$15-18/use", "Full hot", "Low", "The weekly reset"],
    ["Gym / rec day pass", "Unlimited", "$5-25 or membership", "Yes", "Low", "Reliable town network; cheapest per shower on a plan"],
  ]},

  { kind: "p", text: "Read that as a portfolio. Wipes and the basin cover 80 percent of days for almost no water; the solar bag and pump sprayer cover the good-weather days when you have water to spend; the paid network covers the reset. The built-in wet bath is the one genuinely optional line, and the rest of this page argues whether it earns its space." },

  { kind: "h2", text: "The basin sponge bath carries the season" },

  { kind: "p", text: "If you learn one method, learn this. A basin sponge bath -- a wide bowl, warm water, a cloth, a little biodegradable soap -- gets you genuinely clean on half a gallon to a gallon. It is not a compromise you tolerate; it is what most long-season riders default to, with the solar shower coming out on nice days as a treat." },

  { kind: "p", text: "Heat a quart of water. Wet the cloth, soap and wash in sections -- face and neck, underarms, then down -- wringing into the dirty basin, not the clean water. A second pass with clean water rinses the soap. Hair is the water-hungry part; on lean days you dry-shampoo or rinse only the scalp with a cup poured slowly. The whole thing takes five minutes inside the van in weather that would make an outdoor shower miserable." },

  { kind: "note", text: "Two basins beat one. Keep clean water in the bowl and wring the dirty cloth into a separate cup or the grey jug, so you never foul your wash water. It is the difference between a gallon lasting one wash or three." },

  { kind: "h2", text: "Solar bags and gravity showers" },

  { kind: "p", text: "A solar shower is a dark bag, 3 to 5 gallons, that you fill and leave in the sun. On a clear day it reaches 90 to 110F in three to five hours. You hang it from a rack, a tree, or the open rear door and shower off the back of the vehicle." },

  { kind: "p", text: "The honest limits: it needs sun, so it fails on the cold, cloudy days when you most want hot water; the flow is a dribble, good for rationing and a frustration if you expect pressure; and a full 5-gallon bag weighs over 40 pounds hung overhead, so mount it to something that can take the load. Used on the right day it is the best low-cost hot shower there is. Relied on alone, it strands you the first cold snap." },

  { kind: "h2", text: "Pump sprayers and 12V pumps" },

  { kind: "p", text: "A garden pump sprayer -- the two-gallon kind, bought new and never used for chemicals -- is the most underrated tool here. Pump it to pressure by hand and it delivers a real, controllable spray. Fill it with water warmed on the stove and you have a hot rinse for one to two gallons, with pressure a gravity bag cannot match. It rinses sandy feet, a muddy dog, dishes, and gear, and doubles as a shower when you want more than a dribble." },

  { kind: "p", text: "A step up is a 12V pump on a hose with a shutoff head, drawing from a jug or your fresh tank. It gives flow on demand for a little power -- the middle ground for riders who want a real shower feel without giving up interior space to a plumbed wet bath. Run it off the same water you drink and shower outside off the back." },

  { kind: "h2", text: "The built-in shower: worth the space and grey water?" },

  { kind: "p", text: "Here is the plain version. A built-in wet bath costs you three things: interior volume you cannot get back in a small van, a grey tank you must dump legally and often, and the reality that a warm wet enclosure grows mold if it is not dried after every use. In exchange you get a private, weatherproof, hot shower on demand. Whether that trade is worth it comes down to one question: will you use it enough to justify the space?" },

  { kind: "p", text: "The pattern reported again and again: full-timers who committed to a wet bath use it, and part-timers who built one store gear in it and shower at the gym anyway. The shower that gets used is the fastest to deploy, and a paid stall or a pump sprayer off the back door often beats running a heater, showering, squeegeeing, and drying an enclosure. Build it if you are on the road most of the year and dislike the paid network; skip it if you are out for weeks at a time or your van is under 20 feet, and put the space into water, power, or sleeping length." },

  { kind: "note", text: "The wet bath that earns its space doubles as something else -- a place to stand and dress, to hang dripping gear, to store the toilet. A stall that is only ever a stall is the hardest square foot to justify in a small build." },

  { kind: "h2", text: "Wipes and the water-lean day" },

  { kind: "p", text: "Some days there is no water to spare, no sun, and no town. The goal then is not to be fully clean; it is to hit the parts that matter for comfort and health and let the rest wait. That is what wipes are for, and it is a legitimate method, not a failure." },

  { kind: "ul", items: [
    "Prioritize the four spots that drive comfort and odor: face, underarms, groin, feet. Hit those and you feel human on almost no water.",
    "Use unscented, alcohol-free wipes -- scent lingers, attracts insects, and alcohol irritates.",
    "Wipes are trash, not flushable and not buriable -- pack every one out, including the \"flushable\" kind.",
    "Dry shampoo or a dry cloth handles hair a day or two; a cup poured slowly over the scalp handles a third.",
    "Keep a pack in the cab for the reset before a store, a trailhead register, or a ranger conversation.",
  ]},

  { kind: "p", text: "A water-lean stretch is not a hardship if you plan for it. Two or three wipe days between proper washes is normal on the circuit, and it is how a 25-gallon tank stretches across a week that also includes cooking and drinking. The mistake is treating every day as a full-shower day and running dry on day four." },

  { kind: "h2", text: "The paid network: truck stops, gyms, rec centers, pools" },

  { kind: "p", text: "You do not have to be clean entirely off your own tank. A paid network of hot, full-flow showers covers almost every town and interstate corridor; building your route to touch it every few days is the easiest way to stay comfortable. Treat the paid shower as the reset and your onboard methods as the maintenance between." },

  { kind: "table", caption: "The paid shower network compared", head: ["Source", "Typical cost", "Availability", "Notes"], rows: [
    ["Truck stop (chains)", "$15-18", "Interstates, major routes", "Private room, towel, full hot flow; fuel points often earn free showers"],
    ["National gym chain", "$20-60/month", "Nearly every town of size", "Cheapest per shower if you shower often; buy the national-access tier"],
    ["City / county rec center", "$5-15 drop-in", "Most towns", "Often the best value; a pool pass includes the showers"],
    ["Public pool", "$3-10 drop-in", "Seasonal", "Cheap, but hours and season vary; call ahead"],
    ["State park / campground", "$0-8 or with a site", "Scenic corridors", "Some sell shower-only access; many are coin-op and timed"],
    ["Hot spring / aquatic center", "$10-30", "Regional", "A shower plus a soak; a real morale reset on a long run"],
  ]},

  { kind: "p", text: "The economics favor a national gym membership for anyone out most of the year: for about the price of two truck-stop showers a month you get near-daily access in most towns, plus a warm place to charge devices. Rec centers are the sleeper option -- a drop-in pass of five to fifteen dollars includes a hot shower and often a pool and sauna, and staff are used to travelers. Truck-stop showers are the interstate fallback: pricier per use, but private, generous, and open at 3 a.m." },

  { kind: "note", text: "The paid network runs on current conditions, not fixed rules -- a pool closes for the season, a gym drops its day-pass tier, a rec center changes hours. Where a saved list says a facility existed, only a recent confirmation -- a rider who showered there last week, or a call to the front desk -- tells you it is open today. This is the narrow place a dated field record beats a static directory: that a town has a rec center rarely changes; whether its showers are open this month does." },

  { kind: "h2", text: "Heating water" },

  { kind: "p", text: "Cold washing is bracing in July and hard on morale in October. Hot water is the difference between a routine you keep and one you drop when the weather turns, so solve it deliberately rather than hoping for sun." },

  { kind: "table", caption: "Ways to heat wash water", head: ["Method", "Energy", "Speed", "Gets to", "Notes"], rows: [
    ["Solar bag in sun", "Free", "3-5 hours", "90-110F clear day", "Best value when the sun cooperates; useless when it does not"],
    ["Pot on the stove", "Propane", "5-10 min", "Boiling; mix to warm", "Fastest reliable hot water; a quart heats a basin bath"],
    ["12V immersion heater", "House battery", "20-40 min/liter", "Warm", "Slow, a real battery draw; a backup, not a primary"],
    ["Instant propane heater", "Propane + water", "Instant, continuous", "Full hot, adjustable", "Endless flow; needs ventilation and freeze protection"],
    ["Engine calorifier", "Waste engine heat", "After a drive", "Hot for hours", "Free hot water after driving; needs plumbing to capture it"],
  ]},

  { kind: "p", text: "For most riders the answer is simplest: heat a quart on the stove and pour it into the basin or the pump sprayer. It costs a trivial amount of propane, works in any weather, needs no plumbing, and the solar bag supplements it on sunny days. An instant propane heater is the upgrade for full-timers who want endless hot flow and will manage the ventilation and the winter freezing that cracks an unheated unit." },

  { kind: "h2", text: "Grey water, managed legally" },

  { kind: "p", text: "This part is not optional, because it is the rule that decides whether dispersed ground stays open. Grey water -- the soapy runoff from washing your body, dishes, or clothes -- is not clean and does not belong on the ground or near a source. Even soap sold as biodegradable only breaks down in soil, over time; poured into or beside a stream it is a pollutant that feeds algae and harms the aquatic life the next rider came to see." },

  { kind: "ul", items: [
    "Never pour grey water within 200 feet of any stream, lake, spring, or stock tank. Concentration near water is the harm.",
    "Never dump a soapy tank on bare ground or down a storm drain -- storm drains run untreated straight to the nearest waterway.",
    "Where you must scatter small amounts of dishwater on land, strain food solids to your trash first, then broadcast the water widely over durable ground away from camp and water.",
    "Carry grey water out to a legal dump. RV dump stations, many campgrounds, and some gas stations take it; a tote or jug carries it there.",
    "Use less soap than you think, and choose a concentrated biodegradable one. Less soap in the water is a smaller problem to carry.",
  ]},

  { kind: "p", text: "The practical system for a van without a built-in tank is a sealed grey jug -- a 3 to 5 gallon jerrycan with a wide fill -- that catches basin water and dishwater until you reach a dump. It is the single habit that most separates riders who keep ground open from the ones who get areas closed; managers cite water contamination and soap residue among the top reasons they shut dispersed areas." },

  { kind: "note", text: "Dishwater is grey water too. The greasy runoff from a camp kitchen is the same problem as shower water, and it is the one people forget because it does not feel like bathing. Same rules: strain solids, keep it 200 feet from water, carry it out where you can." },

  { kind: "h2", text: "Laundry on the road" },

  { kind: "p", text: "Clothes are a smaller water problem than bodies, because wool and synthetics wear far longer than cotton before they need washing, so the strategy is mostly about stretching the interval, not washing constantly. Merino base layers go a week or more without smelling; a couple of them plus a laundromat every ten days to two weeks covers most riders." },

  { kind: "h3", text: "The sink-and-line method" },

  { kind: "p", text: "The habit that keeps the laundromat interval long is washing the high-turnover items by hand as you go -- socks and underwear, maybe a shirt. Fill a basin with a gallon or two and a little soap, work each item, wring hard, and hang it on a line inside the van or across the open doors. Wool and synthetics wring nearly dry and finish overnight; cotton dries slowly, one more reason the road wardrobe leans away from it. Hand-wash grey water follows the same rules -- strain it, keep it from the creek, carry it out." },

  { kind: "p", text: "The laundromat remains the honest reset: a full load washed and dried in an hour, cheap, with a warm place to sit and a signal while it runs. Build it into the town stop where you refill water and dump grey, and the three chores collapse into one hour." },

  { kind: "h2", text: "A water-lean daily routine" },

  { kind: "p", text: "Here is the framework as an actual day, built for the middle of a stretch when the next fill is a day or two out and you are rationing. Numbers are a working example for one rider on a 25-gallon-a-week budget; scale to your tank and season." },

  { kind: "table", caption: "A water-lean day, by the numbers", head: ["Time", "Task", "Water", "Method"], rows: [
    ["Morning", "Face, teeth, quick pits", "~0.3 gal", "Basin splash and cup rinse; brush with a mouthful, not a running tap"],
    ["Morning", "Coffee and breakfast cleanup", "~0.4 gal", "Wipe pans first, wash in a quart, strain solids to trash"],
    ["Midday", "Hands before food, foot rinse", "~0.2 gal", "Pump sprayer; catch runoff in the grey jug"],
    ["Evening", "Full basin sponge bath", "~0.8 gal", "Heat a quart, two-basin wash, clean cloth rinse"],
    ["Evening", "Rinse two socks and a shirt", "~1 gal", "Sink-and-line; hang overnight"],
    ["Evening", "Dinner dishes", "~0.5 gal", "Scrape to trash, wash in a quart, grey to jug"],
    ["Total", "Everything above", "~3.2 gal", "Leaves a ~1 gal buffer inside a 25-gal week with drinking and cooking"],
  ]},

  { kind: "p", text: "A genuinely clean, comfortable day costs about three gallons if you are deliberate and closer to eight if you are not. The saving is not one act of restraint but a dozen small habits strung together:" },

  { kind: "ol", items: [
    "Wet, then turn the water off. Every rinse -- body, dishes, teeth -- is wet, lather with the flow stopped, rinse. The biggest single saving.",
    "Scrape and wipe before you wash, so solids go to trash, not into the wash water.",
    "Reuse in descending cleanliness -- yesterday's rinse water washes today's muddy boots; clean water is for the last pass only.",
    "Catch everything. A grey jug under the wash point keeps runoff off the ground and your dump trip legal.",
    "Refill on a schedule, not on empty, so you are never choosing between a wash and drinking water.",
  ]},

  { kind: "h2", text: "Staying healthy over a long season" },

  { kind: "p", text: "Hygiene off-grid is not about smelling good; it is about not getting sick a hundred miles from a clinic. A few specific habits prevent the problems that actually take riders off the road, and they matter more than how often you get a full shower." },

  { kind: "ul", items: [
    "Hands before food, every time. The most common gut illness on the road is fecal-oral from your own unwashed hands, not the water; soap and a cup of water beat sanitizer.",
    "Keep feet dry and rotate socks. Trench foot and fungal infections come from days in damp socks; a dry pair and an airing-out at camp prevent both.",
    "Wash the four hot spots daily even when you skip a full wash -- groin, feet, underarms, and skin folds are where rash, chafing, and infection start.",
    "Treat cuts the day you get them; small wounds go bad fast in the backcountry, so clean, close, and cover before it ends the trip.",
    "Keep water systems separate -- fresh, grey, and waste never share a jug or spout; label them so a tired brain cannot mix them up.",
    "Dry the damp. Mold is a respiratory problem over a season; ventilate after every wash and never seal wet gear into a closed space.",
  ]},

  { kind: "p", text: "None of this is fastidiousness. The small stuff -- a blister, a rash, a bad stomach -- cuts seasons short far more often than the dramatic risks people plan for. The rider who washes their hands, keeps their feet dry, and dries out the van is the one still out in October." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "The framework above holds across most of the circuit: build a stack of methods, ration by water first, keep soap away from every source, and touch the paid network on a fixed interval. But the specifics that matter on a given day are local. Where you can legally dump grey water is set by the county and the land manager, not a national rule, and whether a rec center still sells a drop-in shower or a pool is open this month are current facts that change without notice." },

  { kind: "p", text: "So verify the two things that change: the legal grey-water dump point in the area you are working, which the district office, campground host, or a dump-station directory confirms, and the current status of whatever shower you are counting on, which a call to the front desk settles in a minute. The general rule gets you a plan; the local source gets you a shower that is open and a dump that is legal." },
];
