import type { Block } from "./blocks";

/** Cooking and eating well on the road -- Vanism pillar. */
export const PILLAR_COOKING_AND_EATING_WELL_ON_THE_ROAD: Block[] = [
  { kind: "key", text: "Feeding yourself for a long season without a full kitchen comes down to two constraints -- power and water -- and every other decision follows from them. Pick a stove that matches your fuel supply and your fire-restriction risk, treat cold storage as a small buffer rather than a pantry, provision most of your calories from shelf-stable food, and refresh fresh items on a short rhythm in the towns you pass. Do that and you eat well on roughly the grocery budget you kept at home; ignore it and you drift onto packaged junk within a fortnight." },

  { kind: "p", text: "A van or a truck camper is not a small house. It is a vehicle with a limited electrical budget, a water tank you refill by hand, and a cooking surface that competes for space with everything else you carry. The skillet-over-coals version of road cooking happens perhaps twice a week. The other five days are a fast, cheap, low-water meal made on a single burner while the wind is up, and the difference between a rider who eats well over a season and one who does not is entirely in how they set up for those five days." },

  { kind: "p", text: "This page treats cooking as a system with inputs you have to plan: fuel, power, water, cold storage, and resupply. It compares the stove types honestly, lays out what to carry when a fridge is small or absent, covers storing food against heat and washboard roads, and gives meal patterns that survive on limited water and battery. Eating well on the road is not about gear you buy once; it is a provisioning rhythm you run every week, and that rhythm is cheap or expensive depending on how well it fits the constraints." },

  { kind: "h2", text: "The two constraints that decide everything" },

  { kind: "p", text: "Before any stove or menu question there are two hard limits. The first is power: how much electrical energy you can spend per day without draining the house battery below where it recovers. The second is water: how many litres you carry and how far apart you can refill. Cooking spends both. Water matters because most road cooking is not the meal -- it is the cleanup, and a one-pot meal that cooks in half a litre can take two litres to wash up if you let it." },

  { kind: "p", text: "The general rule: build the menu around the scarcer of your two constraints. Large battery and solar but little water -- cook things that clean up dry. Plenty of water but a small battery -- cook on gas and keep the electrical draw for the fridge alone." },

  { kind: "note", text: "The most common setup error is sizing the fridge and an induction hob off the same battery bank without doing the arithmetic. A compressor fridge in desert heat can pull 40 to 60 amp-hours a day on its own. Add an induction burner and you are budgeting a large lithium bank and real solar, not a spare leisure battery." },

  { kind: "h2", text: "Stove types compared" },

  { kind: "p", text: "There is no single correct stove -- there is one that matches your fuel access, your electrical budget, and how exposed your cooking spot usually is. The four common choices trade against each other cleanly, and the honest comparison is about fuel logistics as much as cooking performance." },

  { kind: "table", caption: "Stove types and fuel logistics compared", head: ["Stove", "Fuel", "Cost and access", "Best for", "Where it stops being reliable"], rows: [
    ["Propane two-burner", "1 lb canisters or a refillable 5-20 lb tank", "Cheapest per meal from a refillable tank; 1 lb canisters are dearer and wasteful", "Riders who cook real meals and have room for a tank", "Wind steals the flame; 1 lb canisters pile up as waste if you do not refill"],
    ["Single-burner canister", "Isobutane-propane screw canisters", "Convenient, sold everywhere, dear per gram of fuel", "Minimalists, foot travel, backup burner", "Costs more per meal, hard to recycle; cold weather saps output"],
    ["Induction off a large battery", "Electricity from battery and solar", "No fuel to buy; cost sits in battery and panels you own", "Rigs with a large lithium bank, solar, indoor cooking", "Useless on a small battery; a cloudy week forces you back to gas"],
    ["Liquid-fuel (white gas)", "White gas or, on some stoves, pump petrol", "Fuel cheap and available almost anywhere", "Long remote runs, cold, altitude, overseas", "Fiddly to prime and maintain; not a casual everyday cooker"],
  ]},

  { kind: "p", text: "The propane two-burner is the default: it cooks like a home hob, the fuel is cheap from a refillable tank, and it survives every fire-restriction stage short of a total open-flame ban because it has a shutoff valve. Its weaknesses are wind and canister waste -- cook in the lee of the vehicle, and buy a refillable tank rather than living on green 1 lb canisters that cost several times as much per meal and become a disposal problem you carry around." },

  { kind: "p", text: "The single-burner canister stove is the honest minimalist choice and the right backup for any rig -- small, instant to light, fuel sold everywhere -- just expensive per meal. Induction is excellent when the electrical system is built for it: fast, clean, no flame, and legal to use inside during fire restrictions when open flame is not. The catch is the word built -- it demands a large battery and solar that carry both the fridge and the cooking, and a run of grey days will empty that bank, so carry a gas burner as backup even on an all-electric rig." },

  { kind: "p", text: "The stove you can refuel is the stove you keep using. A refillable propane tank refills at most propane dealers, many hardware stores, and many RV parks for a few dollars per pound. Isobutane canisters are bought new and thrown away each time, so their cost accumulates quietly. White gas is the sleeper: cheap, it keeps almost indefinitely, and on remote runs a stove that burns pump petrol removes the fuel-supply question entirely." },

  { kind: "h2", text: "The small-fridge or no-fridge reality" },

  { kind: "p", text: "Cold storage on the road is a buffer, not a pantry. A van fridge is typically 40 to 65 litres -- a fraction of a house fridge -- and it costs power every hour of every day. So you are not stocking a week of fresh food; you are keeping a few days of perishables cold while most of your calories sit shelf-stable and unpowered. Riders who treat it as a small home fridge overfill it, work it too hard in the heat, and lose food anyway. The right setup depends on your power budget and how often you resupply." },

  { kind: "table", caption: "Cold storage setups compared", head: ["Setup", "Power draw", "Ice or fuel", "Realistic cold-hold", "Best for"], rows: [
    ["Compressor fridge", "40-60 Ah/day in heat, less when cool", "None", "Indefinite while power lasts", "Rigs with solar and a decent battery"],
    ["Thermoelectric cooler", "Constant modest draw, cools only ~20F below ambient", "None", "Poor in real heat -- not truly cold", "Mild climates only; a weak compromise"],
    ["Ice cooler (no power)", "None", "Block ice every 2-4 days", "2-4 days per ice load in shade", "No-electrical rigs, short resupply loops, cold season"],
    ["No cold storage", "None", "None", "Zero -- provision entirely shelf-stable", "Minimalist rigs, deep-remote runs, disciplined provisioning"],
  ]},

  { kind: "p", text: "A good compressor fridge is where most long-season riders land: it ends the ice run and holds cold as long as the battery does. Shade it; one in direct sun through a window works far harder. A thermoelectric cooler is a trap in genuine heat, pulling only a fixed number of degrees below ambient, so at 100F it keeps food at 80F, which is not cold storage at all." },

  { kind: "p", text: "Going without cold storage entirely is legitimate, not a hardship, if you provision for it. Plenty of riders on remote runs carry no fridge and eat well on shelf-stable staples plus fresh food that survives a few days unrefrigerated -- hard vegetables, cured meat, hard cheese, eggs. It removes the largest single power draw and the ice run both." },

  { kind: "h2", text: "Provisioning: shelf-stable against cold-chain" },

  { kind: "p", text: "Eating well cheaply is a ratio: most calories from shelf-stable food that needs no power and does not spoil, a small fresh layer kept cold and eaten first. The mistake is buying like you have a kitchen -- a week of fresh produce and meat that then races the fridge and the heat. Provision the base broadly and the cold-chain layer narrowly." },

  { kind: "table", caption: "Shelf-stable base against cold-chain layer", head: ["Category", "Shelf-stable (carry deep)", "Cold-chain (carry shallow, eat first)"], rows: [
    ["Protein", "Canned beans, lentils, tinned fish, canned chicken, jerky, peanut butter, TVP", "Fresh meat and fish -- buy day-of, cook same day"],
    ["Carbohydrate", "Rice, pasta, couscous, oats, tortillas, crackers, instant potato", "Fresh bread -- stales in days, buy small"],
    ["Vegetable", "Onions, garlic, potatoes, cabbage, carrots, canned and dried veg", "Leafy greens, tomatoes, berries -- days only"],
    ["Fat", "Cooking oil, shelf-stable nuts, tinned olives", "Butter (keeps a while cool); soft cheese -- days only"],
    ["Dairy and eggs", "UHT/boxed milk, powdered milk, hard cheese (keeps weeks cool)", "Fresh milk, soft cheese, yoghurt"],
    ["Flavour", "Salt, spices, bouillon, hot sauce, soy, vinegar, dried herbs", "Fresh herbs, citrus (both keep a week-plus, no fridge)"],
  ]},

  { kind: "p", text: "Notice how much of a genuinely good diet sits in the left column. Beans and lentils, rice and pasta, oats, tinned fish, onions and garlic, oil and a full spice kit -- that is real cooking, not survival rations, and none of it needs a watt of power or spoils in a month. The narrow fresh layer on the right is what makes it taste like food rather than fuel." },

  { kind: "ul", items: [
    "Hard vegetables -- onions, garlic, potatoes, carrots, cabbage, winter squash -- last one to several weeks unrefrigerated. Buy these in quantity.",
    "Eggs keep two to three weeks unrefrigerated if they were never washed and chilled to begin with; in much of the world they are sold that way for this reason.",
    "Cured and dried meats -- salami, jerky, dried sausage -- are shelf-stable protein that needs no fridge and rides rough roads without complaint.",
  ]},

  { kind: "h2", text: "Storing food against heat and rough roads" },

  { kind: "p", text: "A vehicle interior in summer sun is an oven -- routinely 20 to 40 degrees Fahrenheit above outside air, worst at the dashboard and upper cabinets. Road storage fights two enemies the home kitchen does not: sustained heat and constant vibration. Heat spoils fresh food, melts fats, and degrades spices. Store food low and shaded, not high and sunlit -- floor-level lockers run markedly cooler than upper cabinets, and chocolate, butter and oils belong in the coolest locker you have." },

  { kind: "p", text: "Washboard and rock destroy poorly stored food faster than heat does. Loose cans dent and puncture, glass jars crack against each other, and bags of grain abrade open and spill. The fixes are simple and cheap." },

  { kind: "ul", items: [
    "Decant grains, pasta, and flour into rigid sealed containers -- no spills, no moisture, no pests, and they stack without crushing.",
    "Prefer cans and pouches over glass. Where glass is unavoidable, wrap each jar and wedge it so nothing moves.",
    "Pack lockers full and tight. Food that cannot shift cannot rattle, chafe, or break -- empty space does the damage on a rough road.",
    "Keep a hard bin for crushables -- bread, crackers, eggs, tomatoes -- rather than trusting them loose in a soft bag.",
    "Seal everything against pests. Mice and ants find an open grain bag within a night of parking near them.",
  ]},

  { kind: "note", text: "Cans stored in a hot rig for a season are usually fine, but inspect before eating: discard any can that is bulging, leaking, or badly rusted at the seam. Heat plus time is what turns a marginal can bad, and a bulging can is the one signal to trust." },

  { kind: "h2", text: "Meal patterns that survive limited water and power" },

  { kind: "p", text: "The everyday meals that hold up over a season share a shape: one pot, little water, little power, and a cleanup that does not drain the tank. The reliable structure is a base of onion and garlic in oil, a shelf-stable carbohydrate and protein cooked in the same pot -- rice and beans, pasta and tinned fish, lentils and potato -- and a fresh or dried vegetable and a spice kit to finish. One burner, one pot, one plate, and it scales from a weeknight bowl to something worth sitting down to." },

  { kind: "h3", text: "Cooking to save water" },

  { kind: "ul", items: [
    "Cook in a pot you eat straight from. Every extra dish is water spent washing it.",
    "Wipe the pot dry with paper or bread before washing -- removing the fat first means the wash takes a fraction of the water.",
    "A tight pot with a lid cooks grain in far less water than the package assumes; you do not need a rolling gallon for one or two portions.",
    "Reuse water down a hierarchy: rinse becomes wash becomes the first pour on a dirty pot. One litre can do three jobs.",
    "Prefer meals that clean up dry -- a stir-fry leaves less than a soup. Match the menu to the tank when water is tight.",
  ]},

  { kind: "h3", text: "Cooking to save power" },

  { kind: "p", text: "On gas, cooking spends no electricity and this constraint eases. On induction, power discipline is fridge discipline: cook in the middle of a sunny day when the panels carry the load rather than at night off the battery, use a lid to cut cook time and draw, and keep long simmers for gas. A pressure cooker is the strongest single move -- it cuts beans and tough cuts to a third of their cook time, which is a third of the fuel or the amp-hours." },

  { kind: "note", text: "A wide-mouth insulated flask is an unpowered slow cooker. Bring grain, lentils, or oats to a boil for a minute, seal them in the flask, and they finish on stored heat over the next hour with no further fuel or power. It is the cheapest cooking upgrade on the road and it saves both constraints at once." },

  { kind: "h2", text: "Resupply rhythm in small towns" },

  { kind: "p", text: "A long season is fed in short loops, not one big shop. The pattern that works is a deep shelf-stable stock -- provisioned to last two or three weeks and topped up occasionally at a real supermarket -- plus a short fresh loop every three to five days at whatever store the small towns along the run happen to have." },

  { kind: "p", text: "Small-town resupply has its own rules. The one grocery in a town of six hundred carries limited produce, keeps short and irregular hours, and charges more than the supermarket two hours away. Plan the big shelf-stable shop for the last real town before a remote run, and treat small-town stores as top-ups -- eggs, bread, onions, whatever is fresh -- not as your main provisioning." },

  { kind: "table", caption: "Where to buy what on a run", head: ["Store type", "Buy here", "Watch for"], rows: [
    ["Supermarket in a larger town", "The deep shelf-stable shop -- grains, cans, oil, spices, bulk staples", "The cheap shop; stock up before heading remote"],
    ["Small-town grocery", "Fresh top-ups -- eggs, bread, onions, milk, local produce", "Higher prices, thin selection, short and irregular hours"],
    ["Gas station / convenience", "Emergency only -- ice, water, a missing item", "Worst value on the road; not a provisioning source"],
    ["Farm stand / farmers market", "Cheap fresh produce, often the best in the region", "Cash only, seasonal, hours vary -- a bonus not a plan"],
  ]},

  { kind: "p", text: "What the store's own listing will not reliably tell you is whether it is open today, restocked, or shuttered for the season. Small-town hours drift, a single grocery can close for a family emergency, and a seasonal town's only market shuts in the off months. This is the kind of current condition no static listing keeps accurate -- a Vanism check-in from a rider who resupplied there last week confirms the store was open and stocked in a way a stale opening-hours field never will. Below that, plan the shelf-stable base deep enough that a closed store is an inconvenience, not a problem." },

  { kind: "h2", text: "Keeping it cheap without living on junk" },

  { kind: "p", text: "The failure mode is not starving -- it is drifting onto packaged food that is dearer and worse. Freeze-dried meals, convenience snacks, and gas-station food are the expensive, nutritionally thin end of road eating, and it is easy to slide there when cooking feels like effort. The whole-food base is cheaper and better, and it stays that way only if the setup makes cooking easy enough that you actually do it." },

  { kind: "ul", items: [
    "Build calories from bulk staples. Rice, beans, lentils, oats, pasta, and flour are the cheapest calories and protein you can buy, and they are the base of good cooking, not a compromise.",
    "Buy shelf-stable protein cheaply -- dried beans and lentils, tinned fish, eggs, peanut butter. Fresh meat is the expensive, fridge-hungry, spoilage-prone option; treat it as a two-nights-a-week item, not a daily one.",
    "Spend the small money on flavour, not convenience. A full spice kit, oil, and a few sauces cost little and make cheap staples worth eating.",
    "Cook in batches a fridge or flask can hold a day -- cooking once and eating twice halves the fuel, water, and effort. Treat freeze-dried meals as emergency stock, not routine; per calorie they are among the most expensive food you can carry.",
  ]},

  { kind: "p", text: "Done this way, road eating costs roughly what a careful home grocery budget costs, sometimes less, because a van kitchen has no room for the impulse buys and waste a home kitchen accumulates. The rider who eats badly and expensively is almost always the one whose setup made cooking hard -- a buried stove, no counter, a fridge too full to work -- and who stopped cooking. Fix the setup and the budget fixes itself." },

  { kind: "h2", text: "Cooking outside in bear country" },

  { kind: "p", text: "In bear country the food system stops being about your convenience and becomes about not teaching a bear that vehicles mean food. A bear that gets a food reward loses its fear of people and is often destroyed for it, and it learns from smells you left as much as from food it found. The rule is firm: cook away from where you sleep, store food so a bear cannot reach or smell it, and leave no trace of the meal. A hard-sided van or truck camper with the windows closed is reasonable storage against most black bears -- the food is sealed in a metal box -- so the real risk is in cooking and in what you leave out." },

  { kind: "ul", items: [
    "Cook and eat away from where you sleep and away from the vehicle door -- a good distance downwind, not on the doorstep.",
    "Never leave food, coolers, dirty dishes, or scented items -- toothpaste, sunscreen, trash -- outside or in an open vehicle overnight. Seal it inside the hard-sided rig.",
    "Clean up completely and immediately. Pack out every scrap of food waste and dispose of grey water away from camp; do not bury or burn waste, as both leave scent that draws bears.",
    "Where regulations require a bear canister or locker -- many parks and some forests do -- use it. There a closed vehicle is not accepted storage, and the requirement is enforced.",
  ]},

  { kind: "note", text: "Grizzly country raises the standard beyond black-bear practice: assume a hard-sided vehicle is the minimum, follow posted food-storage orders exactly, and treat every scented item as food. The specifics are set by the managing agency for that ground -- a food-storage order is a regulation, not a suggestion." },

  { kind: "p", text: "Water usually sets how far apart the loops fall, not food -- a deep shelf-stable base outlasts the tank several times over. Plan the water refill first and let the fresh top-up ride along with it: you pass a spigot and a store in the same towns, so the loop that keeps you watered keeps you fed." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "Everything above is the general framework, and it holds across most of a season in most of the country. What it cannot tell you is the local specifics that change the plan on the ground: whether the one store in the next town is open this week, whether a food-storage order is in force where you are heading, or whether a fire restriction has just banned the open flame your stove depends on. Those are conditions -- set locally, changing fast." },

  { kind: "p", text: "For the rules that carry consequences -- bear food-storage orders and fire restrictions above all -- the managing agency is the authority, not any national guide including this one. The district office, the ranger station, and the posted notice at the trailhead beat any figure written in advance. Confirm the food-storage requirement and the fire stage for the specific ground before you rely on cooking there, and keep the base deep enough that a closed store or a fuel ban is an inconvenience rather than a hungry night." },
];
