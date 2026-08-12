import type { Block } from "./blocks";

/** What it costs to build out a van -- Vanism pillar. */
export const PILLAR_WHAT_IT_COSTS_TO_BUILD_A_VAN: Block[] = [
  { kind: "key", text: "A livable DIY van build costs roughly 4,000 to 12,000 dollars on top of the van, and the van itself runs 8,000 dollars for a high-mileage cargo van to 55,000 for a low-mileage one. Electrical is almost always the largest single line. A turnkey professional conversion starts around 80,000 dollars and climbs from there. Every figure here moves with the van you start from, the parts you buy, and how much of the labor is your own -- treat these as the shape of the arithmetic, not a quote." },

  { kind: "p", text: "The honest answer to what a van build costs is a range wide enough to be useless until you break it apart. Two riders can each say they spent 10,000 dollars and have built entirely different vehicles: one bought a cheap van and a careful electrical system, the other a nicer van and slept on a foam pad. What matters is not the total but the total split by line item, the level at which you actually make decisions." },

  { kind: "p", text: "This page shows the arithmetic. It covers the van first, then goes system by system with a bare, a middle, and a full figure for each, then the two decisions that move the total more than any component choice: whether you build it yourself or pay a shop, and the hidden costs that never appear on a parts list. The through-line -- a good cheap build beats an expensive bad one -- holds throughout." },

  { kind: "h2", text: "What the total is actually made of" },

  { kind: "p", text: "A finished build is two numbers added together: the vehicle, and everything you put in it. People quote the second and omit the first, which is how you get the 6,000 dollar build that was really a 6,000 dollar interior sitting inside a 30,000 dollar van. Keep them separate. The vehicle is a used-car decision governed by mileage, drivetrain and rust; the interior is a construction decision governed by systems and materials. Within the interior, six systems account for nearly all of the cost -- and ventilation, last on the cost list, is first on the value list, the reason it gets its own section below." },

  { kind: "h2", text: "The van itself, which is the biggest variable" },

  { kind: "p", text: "The vehicle moves the total the most and is the one people rush. A cargo van is a used-truck purchase: mileage and maintenance history matter more than model year, a diesel is cheaper to run and dearer to fix, and rust on a unibody is the one defect that ends the conversation. Of the three common platforms, the Ram Promaster is cheapest to buy and convert, the Ford Transit sits in the middle with an available all-wheel-drive option mountain riders value, and the Mercedes Sprinter costs more but holds its value best." },

  { kind: "table", caption: "Used cargo van tiers versus a purpose build", head: ["Tier", "Typical price", "What you get", "What you are taking on"], rows: [
    ["High-mileage cargo van", "8,000 to 18,000", "150,000-plus miles, older platform", "Near-term drivetrain work; buy the records or walk"],
    ["Mid-mileage cargo van", "22,000 to 38,000", "60,000 to 120,000 miles, serviceable", "The sweet spot for most builds"],
    ["Low-mileage cargo van", "38,000 to 55,000", "Under 60,000 miles, newer", "Near-new money, all interior work still yours"],
    ["New empty cargo van", "45,000 to 70,000", "Zero miles, full warranty", "A blank box; Sprinter tops this band"],
    ["Turnkey professional conversion", "80,000 to 200,000-plus", "Finished, warrantied, built out", "The whole cost at once; you buy the labor and margin"],
  ]},

  { kind: "note", text: "A high-mileage van is only cheap if the drivetrain is sound. Budget a pre-purchase inspection at a shop that knows the platform -- 150 to 250 dollars -- and treat a refused inspection as a defect in itself. The money saved on a bad van is spent twice on the road." },

  { kind: "p", text: "The purpose-build number deserves a plain word. A conversion starting at 80,000 dollars is not overpriced -- it is a finished, warrantied vehicle, and the labor in a full build is enormous. It is simply not a fair comparison to a DIY total, because the DIY rider is not paying for their own time. The shop price is what the labor is worth; the DIY price is what happens when you supply that labor yourself." },

  { kind: "h2", text: "Electrical, the largest single system" },

  { kind: "p", text: "Electrical concentrates the interior budget. You are building a small off-grid power system: a battery to store energy, a way to charge it, an inverter to turn stored direct current into the alternating current some appliances need, and the wiring and protection that ties it together safely. Each is a real cost, and the battery is the one that scales with your ambitions." },

  { kind: "p", text: "Lithium iron phosphate -- LiFePO4 -- is now the default chemistry: far more usable capacity per pound, and far longer life than the lead-acid it replaced. It also anchors the cost. The budget is largely a function of how many amp-hours of lithium you need, and that should follow from your actual loads, not from a round number that sounds reassuring." },

  { kind: "table", caption: "Electrical system by tier", head: ["Component", "Bare", "Middle", "Full"], rows: [
    ["Battery", "100Ah LiFePO4, 300 to 500", "200Ah LiFePO4, 700 to 1,200", "400 to 600Ah, 1,600 to 3,000"],
    ["Solar", "100 to 200W, 150 to 350", "200 to 400W, 350 to 700", "400 to 800W, 700 to 1,400"],
    ["Alternator charging", "None or a relay, 0 to 120", "DC-DC charger, 150 to 300", "High-output DC-DC, 300 to 500"],
    ["Inverter", "Small 400W, 60 to 150", "1,000 to 2,000W sine, 200 to 450", "2,000 to 3,000W, 450 to 900"],
    ["Wiring, fuses, busbars, monitor", "150 to 350", "300 to 600", "600 to 1,200"],
    ["System total", "700 to 1,300", "1,700 to 3,300", "3,700 to 7,000"],
  ]},

  { kind: "p", text: "The rule that saves the most money is to size the battery to the loads, not the loads to the battery. A build that runs a fridge, lights, a fan, and device charging -- and heats and cooks without electricity -- lives comfortably on 200Ah and a couple hundred watts of solar. What pushes you into the full tier is electric induction cooking, a rooftop air conditioner, or a residential fridge -- each legitimate, each roughly doubling the electrical budget on its own. Decide those three before you buy a single cell." },

  { kind: "note", text: "Charging from the alternator while you drive is the most underrated line in the table. A DC-DC charger turns engine hours into stored energy independent of weather, and it is what keeps a build alive through the cloudy week that strands a solar-only system. On a van that moves regularly it beats an equal dollar spent on more panels." },

  { kind: "h2", text: "Insulation, quietly worth it" },

  { kind: "p", text: "Insulation is cheap in materials and tedious in labor, which is why it gets shortchanged and later regretted. Its job is not only warmth -- it is the difference between a metal box that swings 40 degrees between afternoon and dawn and a space that holds a temperature long enough to sleep through. A well-insulated van needs far less heat and cooling, so money spent here lowers the cost and power draw of two other systems downstream." },

  { kind: "p", text: "The materials that work in a vehicle tolerate vibration and do not trap moisture against steel: wool, recycled cotton, polyester batting such as the products sold under the Thinsulate name, and rigid foam board for flat panels. Be skeptical of reflective bubble wrap sold as a miracle, and of spray foam -- it insulates well and becomes a permanent, rattling mistake if the van ever needs bodywork." },

  { kind: "table", caption: "Insulation by tier", head: ["Tier", "Approach", "Materials cost"], rows: [
    ["Bare", "Foam board on large panels, wool in the ribs, gaps left", "150 to 400"],
    ["Middle", "Wool or polyester batting throughout walls and ceiling, foam floor", "400 to 800"],
    ["Full", "Full wool or Thinsulate fill, thermal window covers, sealed floor", "800 to 1,600"],
  ]},

  { kind: "p", text: "Insulation stops paying when you chase a perfectly sealed envelope in a vehicle that can never be one. A van has a windshield, doors, and a hundred penetrations, and past a thorough middle-tier job the returns fall off steeply. The high-value addition once the walls are done is thermal covers for the windows -- the largest single heat leak in the vehicle, at a fraction of what the walls cost." },

  { kind: "h2", text: "The bed and galley, which is built furniture" },

  { kind: "p", text: "The bed and galley are where a build stops being a systems project and becomes carpentry -- the most personal part of the budget. The bed is cheaper than people expect: a fixed platform is a few hundred dollars in lumber, and the real cost is the mattress. The galley is where the range opens up -- a butane stove and a jug is 40 dollars; a plumbed sink, two-burner cooktop, slide-out fridge, and finished cabinetry is well over a thousand in parts before any labor." },

  { kind: "table", caption: "Bed and galley by tier", head: ["Element", "Bare", "Middle", "Full"], rows: [
    ["Bed platform", "Plywood on cleats, 100 to 250", "Framed with storage, 250 to 500", "Slatted or convertible, 400 to 900"],
    ["Mattress", "Foam topper, 100 to 250", "Purpose-cut foam, 250 to 500", "Quality mattress, 500 to 1,000"],
    ["Cooktop", "Portable butane, 20 to 60", "Two-burner propane, 80 to 200", "Built-in or diesel, 300 to 900"],
    ["Galley and sink", "Crate and a jug, 40 to 150", "DIY cabinet, hand pump, 300 to 700", "Finished cabinetry, 12V tap, 900 to 2,500"],
  ]},

  { kind: "h2", text: "Water, priced by how permanent you make it" },

  { kind: "p", text: "Water cost tracks one decision: whether it is loose containers you carry to a tap or a fixed system plumbed into the van. Both deliver drinking water; the fixed system delivers convenience, and convenience is the entire price difference. A rider honest about how often they actually cook tends to build simpler here than first planned, and is glad of it." },

  { kind: "p", text: "The loose approach is a pair of jerry cans and a jug -- under a hundred dollars and refillable anywhere, with no plumbing to leak into your cabinetry. The middle approach, where most builds land, is a five to seven gallon tank with a 12-volt pump feeding a real faucet. The full approach is a large fixed tank, a pump, a heater, and sometimes a grey tank -- a genuine plumbing job." },

  { kind: "table", caption: "Water system by tier", head: ["Tier", "What it is", "Cost", "Trade-off"], rows: [
    ["Bare", "Jerry cans and a gravity jug", "40 to 120", "Fill anywhere; you lift and pour by hand"],
    ["Middle", "5 to 7 gallon tank, 12V pump, faucet", "150 to 450", "Real tap; refill every few days"],
    ["Full", "20 to 40 gallon fixed tank, pump, grey tank", "600 to 2,000", "Days of autonomy; a real install and leak risk"],
  ]},

  { kind: "note", text: "A hot water heater is the line that quietly doubles a water budget, and it is close to pure luxury on most builds. Heating a kettle costs nothing and covers dishes and washing for the great majority of riders. Add the heater only after everything essential is bought." },

  { kind: "h2", text: "Ventilation, the highest-value cheap upgrade" },

  { kind: "p", text: "If there is one place this page argues for spending money, it is here, and the amount is small. A powered roof fan is the highest-value cheap upgrade in the entire build. It costs 200 to 350 dollars plus a few hours to install, and does more for daily livability than components costing ten times as much: it pulls heat out on a hot afternoon and clears cooking moisture and condensation. A van without one is a sealed box that cooks in the sun and drips on the ceiling by morning." },

  { kind: "p", text: "It ranks so high because it fixes the two problems most likely to make a build unpleasant: heat and condensation. Heat you can partly chase by parking in shade; condensation you cannot, and moving air is the only cheap answer to the water your body and cooking put into a small sealed space each night." },

  { kind: "table", caption: "Ventilation options", head: ["Option", "Cost", "What it does", "Verdict"], rows: [
    ["Nothing but cracked windows", "0", "Minimal airflow, none in rain", "False economy; the box overheats and sweats"],
    ["Powered roof fan", "200 to 350", "Active exhaust or intake, works in rain", "Buy this first; the best value in the build"],
    ["Roof fan plus a floor vent", "300 to 500", "Cross-flow, quick cabin cooling", "Worthwhile on a full-time build"],
    ["Rooftop air conditioner", "1,500 to 3,500 installed", "Real cooling; heavy electrical draw", "Only if you stay in genuine heat and can power it"],
  ]},

  { kind: "h2", text: "Heat, and how far up the ladder to climb" },

  { kind: "p", text: "Heat is the system where cheap and expensive differ not in comfort but in safety and effort. The cheap options work; they simply demand more of you. The expensive options mostly buy the ability to run heat unattended and overnight without thinking about it, which on a cold-season build is worth a great deal." },

  { kind: "p", text: "A portable propane heater is 80 to 150 dollars and warms a van fast, but it puts water vapor into the air and must never run unattended while you sleep. A diesel or gasoline air heater is what most cold-season builds converge on: it draws fuel from a dedicated tank, vents its exhaust outside, and runs safely all night on a thermostat. Inexpensive imported units start near 130 dollars; the established brands sold under the Webasto and Espar names cost far more and fail far less, which on a heater you sleep next to is the trade worth paying for." },

  { kind: "table", caption: "Heat options and what the money buys", head: ["Option", "Cost", "Runs overnight unattended", "Note"], rows: [
    ["Portable propane heater", "80 to 150", "No -- never while sleeping", "Adds moisture; supplemental only"],
    ["Budget diesel air heater", "130 to 300", "Yes", "Vents outside, dry heat; reliability varies"],
    ["Name-brand diesel heater", "1,200 to 2,000 installed", "Yes", "Webasto or Espar; the overnight standard"],
    ["Small wood stove", "300 to 900 installed", "No", "Excellent dry heat; space and clearance cost"],
  ]},

  { kind: "note", text: "A carbon monoxide alarm is not a heat upgrade -- it is a 20 dollar non-negotiable in any van with any combustion appliance, including a cooktop. It is the cheapest line in the entire build and the only one that is genuinely not optional." },

  { kind: "h2", text: "Build budget tiers, end to end" },

  { kind: "p", text: "Stack the systems together and add the van, and the three tiers separate cleanly: a bare build is functional, a middle build is comfortable in three seasons and is where most riders land, and a full build is four-season and self-sufficient, costing as much as a small used car on top of the van." },

  { kind: "table", caption: "Build budget tiers, van plus interior", head: ["Tier", "Van", "Interior build", "On the road"], rows: [
    ["Bare / functional", "8,000 to 18,000", "2,000 to 4,500", "10,000 to 22,500"],
    ["Middle / comfortable", "22,000 to 38,000", "6,000 to 12,000", "28,000 to 50,000"],
    ["Full / four-season", "38,000 to 55,000", "14,000 to 30,000", "52,000 to 85,000"],
    ["Turnkey professional", "rolled in", "rolled in", "80,000 to 200,000-plus"],
  ]},

  { kind: "h2", text: "DIY versus paying a shop" },

  { kind: "p", text: "This decision moves the total more than every component choice combined, because the difference between DIY and a shop is not parts -- it is labor, and labor is most of what a finished build costs. A professional conversion is hundreds of hours of skilled work, and a shop must pay for those hours, its space, and its warranty. Build it yourself and you supply that labor for free, which is why the DIY total is not really the same number." },

  { kind: "table", caption: "DIY versus professional, same result", head: ["Scope", "DIY parts cost", "Shop price", "What the gap is"], rows: [
    ["Electrical system alone", "1,700 to 3,300", "5,000 to 9,000", "Labor plus warranty on the install"],
    ["Insulation and walls", "500 to 1,500", "3,000 to 6,000", "Almost entirely labor and finish"],
    ["Full livable interior", "6,000 to 14,000", "45,000 to 90,000", "Hundreds of hours of skilled labor and margin"],
  ]},

  { kind: "p", text: "The realistic middle path is what most builds take: do the parts you can, and pay for the parts where a mistake is dangerous or expensive to redo. Insulation, framing, the bed, and cabinetry are forgiving DIY; high-current electrical and gas plumbing are where an error is a fire, not a wasted afternoon, and paying a professional there while building the rest yourself is a defensible split." },

  { kind: "ul", items: [
    "Good DIY candidates: insulation, wall and ceiling panels, the bed platform, basic cabinetry, low-voltage 12V wiring, mounting a roof fan.",
    "Worth paying for: the high-current battery and inverter install, any propane plumbing, cutting large roof holes, a windshield-out headliner job.",
    "Rarely worth paying for: the bed, the galley cabinet, flooring, and window covers -- high-labor, low-risk, and where a shop's margin is hardest to justify.",
  ]},

  { kind: "h2", text: "The hidden costs nobody quotes" },

  { kind: "p", text: "The parts list is not the build cost. Three things sit outside it and together routinely add 20 to 40 percent to a first build: tools, mistakes, and time. They are hidden only because no supplier itemizes them." },

  { kind: "h3", text: "Tools" },

  { kind: "p", text: "A first build usually means buying tools a household does not own: a step drill for clean holes in sheet metal, a jigsaw, a crimper rated for high-current battery lugs, a multimeter, clamps, a rivet gun. Budget 300 to 800 dollars from a bare toolbox. They keep their value and outlast the build, but it is real cash on the first invoice and it surprises people every time." },

  { kind: "h3", text: "Mistakes" },

  { kind: "p", text: "You will cut a panel wrong, buy a part that does not fit, and redo at least one thing you thought was finished. This is not a failure of planning; it is the tuition of a first build, and it runs a few hundred dollars in wasted material even for careful people. Keep it small by test-fitting everything dry before you commit sealant or a saw, and by buying the expensive, hard-to-return items -- battery, fan, heater -- last." },

  { kind: "h3", text: "Time" },

  { kind: "p", text: "Time is the cost that does not show up as money and dominates anyway. A weekend build is a myth; a first full conversion is commonly 200 to 400 hours across months, every one an evening or weekend you are not doing something else. This is the labor a shop charges for. Name it before you start -- the most expensive version of this project is the one that stalls half-finished in a driveway." },

  { kind: "key", text: "A good cheap build beats an expensive bad one, every time. Money spent on the systems you touch daily -- the fan that keeps you cool, the mattress you sleep on, the battery that does not die on a cloudy week -- returns far more than money spent on finishes and gadgets. Spend where you feel it nightly; save everywhere you would only point at it." },

  { kind: "h2", text: "Where the money is well spent, and where it is wasted" },

  { kind: "p", text: "After enough builds the pattern is clear, and it does not follow price. The well-spent money is unglamorous and load-bearing: a sound van, a roof fan, a battery sized to real loads, thorough insulation, and a mattress you do not resent. None photograph well; all of them decide whether the build is livable." },

  { kind: "p", text: "The wasted money clusters in predictable places: the oversized battery bank bought for loads that never materialized, the water heater installed before the essentials, the rooftop air conditioner on a build that rarely sees real heat, finish-grade cabinetry in a vehicle that will be dented and sandy within a season. None are wrong for every rider -- they are wrong as early purchases, before the build has proven it needs them." },

  { kind: "ol", items: [
    "Buy the van right, with a pre-purchase inspection -- the one mistake that is expensive to fix later.",
    "Fit a roof fan before anything else in the interior; it is the best value in the build.",
    "Size the electrical system to loads you have actually listed, not to a reassuring round number.",
    "Insulate thoroughly once, including window covers, because redoing it means tearing out the walls.",
    "Spend on the mattress; you are on it every night for the life of the build.",
    "Defer the water heater, air conditioner, and finish cabinetry until the essentials are done and the need is proven.",
  ]},

  { kind: "h2", text: "What this page cannot price for you" },

  { kind: "p", text: "Every figure here is a shape, not a quote, and the shape is wrong somewhere for every specific build. Component prices move month to month; a lithium battery costs meaningfully less than it did two years ago. Used van prices swing with season and region, and shop labor rates vary by a factor of two across the country. These numbers place your decisions relative to each other; they will not survive contact with a real invoice unedited." },

  { kind: "p", text: "The authoritative source for what a build costs is a current one: real quotes from the actual suppliers you would buy from, a real inspection on the van in front of you, and a written estimate from a shop for any work you plan to farm out. Build the parts list, put this month's real prices next to each line, and add a fifth for the tools and mistakes this page told you to expect. That total is yours. The one on this page is only the map that gets you to it." },
];
