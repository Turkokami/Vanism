import type { Block } from "./blocks";

/** What a season on the road actually costs — Vanism pillar. */
export const PILLAR_WHAT_A_SEASON_ON_THE_ROAD_COSTS: Block[] = [
  { kind: "key", text: "Six months of van life runs most riders between roughly 6,000 dollars and 25,000 dollars -- a frugal budget near 1,000 dollars a month, a comfortable one above 4,000. The single number that decides where you land is not months on the road, it is miles driven. Fuel is the largest variable cost, and two riders out the same season regularly differ by a factor of three on distance alone. Everything else -- camping, food, insurance, a repair reserve -- moves within known ranges you can plan for." },

  { kind: "p", text: "Most budgets for this are written the way you would budget a rent: a monthly figure, held constant, multiplied by six. That framing is wrong in the way that matters. The largest movable cost of a season is fuel, and fuel does not accrue by the month. It accrues by the mile. A rider who parks on free ground and moves slowly spends a third of what a long-distance rider spends in the same van over the same six months." },

  { kind: "p", text: "So the useful question is not what a month costs. It is what is fixed no matter what you do, and what scales with your decisions. This page separates the two, shows the arithmetic on the parts people guess at, and gives frugal, middle and comfortable ranges. Where a figure stops being reliable, that is said plainly rather than hedged on every line." },

  { kind: "p", text: "All figures below are for a single rider in a self-contained van in the United States, priced against the 2025-2026 environment. A second person adds food and some insurance but almost nothing to fuel, camping or depreciation, which is why two people often travel for well under twice the cost of one." },

  { kind: "h2", text: "How a season's cost is actually structured" },

  { kind: "p", text: "There are two kinds of cost on the road, and confusing them wrecks most budgets. Fixed costs accrue whether the van moves or sits: insurance, a phone plan, depreciation, subscriptions, the accrual toward the next repair. Variable costs scale with what you do: fuel with miles, camping with which ground you choose, food with how often you cook, tyres with distance." },

  { kind: "p", text: "The reason this matters is leverage. You cannot cut your insurance premium in half mid-season, but you can halve your fuel bill by driving half as far, and nearly zero your camping bill by staying on free public land. Fixed costs set your floor; variable costs set the spread, and it is enormous. Fuel, camping and food are the three levers with real travel; depreciation and the repair reserve are the two lines people leave off entirely, and both are among the largest." },

  { kind: "h2", text: "Fuel, the number that decides everything" },

  { kind: "p", text: "Fuel is worth understanding exactly because it is the largest single variable and the arithmetic is not intuitive. The formula is simple: fuel cost equals miles driven, divided by miles per gallon, times the price per gallon. Every part is knowable in advance, which makes fuel the one big cost you can forecast rather than guess." },

  { kind: "p", text: "Take a van returning 18 miles per gallon, driven 1,000 miles in a month, with fuel at 3.75 dollars a gallon. That is 1,000 divided by 18, or 55.6 gallons, times 3.75 -- 208 dollars for the month. Change one input and the number moves predictably: drop to 14 mpg and it climbs to 268 dollars; double the distance to 2,000 miles and it doubles to 417. The lever with the most travel in it is distance." },

  { kind: "table", caption: "Monthly fuel cost by fuel economy and distance (at 3.75 dollars per gallon)", head: ["Miles per gallon", "500 mi/mo", "1,000 mi/mo", "1,500 mi/mo", "2,000 mi/mo"], rows: [
    ["14 mpg", "134", "268", "402", "536"],
    ["16 mpg", "117", "234", "352", "469"],
    ["18 mpg", "104", "208", "313", "417"],
    ["20 mpg", "94", "188", "281", "375"],
    ["22 mpg", "85", "170", "256", "341"],
  ]},

  { kind: "p", text: "Read across a row and fuel economy matters; read down a column and distance matters more. The mpg gap at a fixed distance is bounded -- you cannot change your engine mid-season -- while the gap between 500 and 2,000 miles is a factor of four and a decision you make every week. This is why a heavy, thirsty van driven slowly is cheaper to run than an efficient one driven hard." },

  { kind: "h3", text: "Why two riders differ by a factor of three" },

  { kind: "p", text: "Take two riders in identical vans returning 18 mpg. One treats the season as slow travel: 1,000 miles a month, long stays, short repositioning drives. The other treats it as a tour: 3,000 miles a month, a new region every week. Over six months the first drives 6,000 miles and the second 18,000 -- three times as far. At 3.75 dollars a gallon that is about 1,250 dollars of fuel against 3,750. Same van, same economy, same pump price; the entire difference is distance." },

  { kind: "note", text: "Pump price is the input you control least; it swings by more than a dollar a gallon between regions and seasons. Budget against the high end of the current regional range, not the national average you saw last month -- the price at the pump in front of you is the one that leaves your account." },

  { kind: "h2", text: "Where you sleep: free, paid, and the occasional RV park" },

  { kind: "p", text: "Camping is the second big variable, with the widest achievable spread of any line because one end of it is genuinely free. Dispersed camping on BLM and national forest land carries no fee, so a rider who stays almost entirely on public land holds camping close to zero, broken only by the occasional paid night for a shower or a laundry run in town." },

  { kind: "p", text: "Paid campgrounds -- state parks, county sites, Forest Service developed sites -- run roughly 15 to 35 dollars a night. RV parks with full hookups run 45 to 90 dollars, higher near cities or in peak season, and buy you power, water, a sewer connection and usually a shower and laundry. Riders use them in bursts: a night to reset after a stretch off-grid, or a longer stay to wait out weather." },

  { kind: "table", caption: "Monthly camping cost by pattern (30 nights)", head: ["Pattern", "Free nights", "Paid campground", "RV park", "Monthly cost"], rows: [
    ["Almost all free", "28 at 0", "2 at 20", "0", "40"],
    ["Mostly free", "22 at 0", "6 at 22", "2 at 55", "242"],
    ["Mixed", "15 at 0", "10 at 25", "5 at 60", "550"],
    ["Mostly paid", "6 at 0", "16 at 28", "8 at 65", "968"],
  ]},

  { kind: "p", text: "The pattern you choose is downstream of two things: how much you value hookups, and how much free ground exists where you travel. The West is dense with dispersed camping. The East and the coasts have far less public land, and a season there sits naturally in the mixed or mostly-paid rows regardless of preference. Geography sets the floor here, not willpower." },

  { kind: "h2", text: "Food: the difference is cooking, not calories" },

  { kind: "p", text: "Food cost is not about how much you eat; it is the ratio of groceries to restaurants. A rider cooking nearly every meal spends 250 to 350 dollars a month on groceries -- close to what the same person spends in a house, because a van kitchen cooks the same food. The number climbs fast with restaurants: a single meal out costs what a day of groceries costs." },

  { kind: "p", text: "The honest middle is 400 to 500 dollars: cooking most of the time, eating in town two or three times a week. Push restaurants to most days and food crosses 750 dollars easily. Refrigeration matters at the margin: a van that holds a week of fresh food shops less often and wastes less." },

  { kind: "note", text: "Propane runs 10 to 40 dollars a month and water is usually free. Neither moves a budget, but leaving small lines off is how one ends up 5 percent light across the board." },

  { kind: "h2", text: "Insurance: two policies, both non-negotiable" },

  { kind: "p", text: "Insurance is two separate lines that people collapse into one and then under-budget. The first is the vehicle, the second is your health. Both are fixed costs -- they accrue whether you drive a thousand miles or none -- and both are invisible until the day they are the only thing that matters." },

  { kind: "h3", text: "Vehicle insurance" },

  { kind: "p", text: "A van used as a full-time residence is not a standard auto risk. Straight auto coverage runs 90 to 180 dollars a month depending on the vehicle, your record and your state. If the van is also your home, its contents are not covered by an auto policy, and a full-timer policy that covers the build-out and contents costs more. A total loss on an uninsured conversion is the loss of both the vehicle and the home at once." },

  { kind: "h3", text: "Health insurance" },

  { kind: "p", text: "Health coverage is the line with the widest range and the least room to skip it. It runs from near zero for a young rider on a subsidized marketplace plan to 650 dollars a month or more for an older rider on a comprehensive one. The variables are age, plan tier, and your income for subsidy purposes -- and many riders whose income drops on the road qualify for a subsidy they would not get at home." },

  { kind: "p", text: "The structural trap for travelers is the network. Many low-cost plans are built around a regional network, and out-of-network care across state lines is where the bill lands. A rider crossing state lines all season needs a national network or a plan designed for people who move. Solve this before departure, not from a clinic in a state your plan has never heard of." },

  { kind: "h2", text: "Phone and data: your office rides with you" },

  { kind: "p", text: "Connectivity is a fixed cost that has quietly become one of the more important, because for many riders the phone is also the income. A single unlimited plan runs 35 to 60 dollars a month. Riders who work online run more: a second carrier for redundancy where the first has no signal, a hotspot plan, and increasingly a satellite service for ground with no cell coverage at all." },

  { kind: "p", text: "The reason people carry two networks is simple: no single carrier covers the backcountry, and the gaps do not overlap, so a second line on a different network turns most dead zones into working ones. Add satellite data and the total lands between 120 and 180 dollars a month -- expensive as a phone bill, cheap for what it enables." },

  { kind: "h2", text: "The maintenance and repair reserve, the line everyone omits" },

  { kind: "p", text: "This is the line most budgets leave off, and the one that ends seasons. A van is a high-mileage vehicle asked to do a hard job, and it breaks. Not maybe -- across six months and thousands of miles, something will need attention beyond an oil change, and the only question is whether you funded it or get destroyed by it in a parking lot four states from home." },

  { kind: "p", text: "Handle it with a reserve that accrues monthly whether or not anything breaks. Set aside 100 to 300 dollars a month depending on the van's age and mileage. In a quiet season it accumulates; in a bad one it absorbs an alternator or a wheel bearing without ending the trip. It is not a cost you pay every month; it is one you accrue so the month it comes due does not come out of nowhere." },

  { kind: "table", caption: "Typical repair and service costs on the road", head: ["Job", "Typical cost", "Rough interval"], rows: [
    ["Oil and filter change", "60 - 120", "5,000 - 7,500 mi"],
    ["Brake pads, one axle", "150 - 350", "30,000 - 50,000 mi"],
    ["Transmission service", "150 - 300", "30,000 - 60,000 mi"],
    ["Wheel bearing", "250 - 500", "as it fails"],
    ["Alternator", "400 - 800", "as it fails"],
    ["Water pump", "400 - 900", "60,000 - 100,000 mi"],
    ["Timing or serpentine belt", "150 - 900", "60,000 - 100,000 mi"],
    ["Backcountry tow to a shop", "200 - 1,500", "as needed"],
  ]},

  { kind: "p", text: "None of these is exotic. Every one is normal for a van with miles on it, and any two in the same season exceed what most people set aside for \"maybe something.\" On a newer van under warranty you can run the reserve lower, but not to zero, because a tow off a forest road is not a warranty item and is the cost that most reliably arrives without warning." },

  { kind: "note", text: "The tow line is the one unique to this life. A breakdown on pavement is a bad afternoon; a breakdown twenty miles up a rough forest road is a four-figure recovery before a single part is touched. Roadside assistance that explicitly covers your vehicle's weight and unpaved roads pays for itself the first time you need it." },

  { kind: "h2", text: "Tyres: a large cost paid all at once" },

  { kind: "p", text: "Tyres are separate from the repair reserve because they are predictable rather than random -- you see them coming by watching the tread -- but a full set is still a single large payment that ambushes a monthly budget. A set of four runs 600 to 1,400 dollars fitted, more for the aggressive all-terrain tyres many riders choose for unpaved roads. They last 40,000 to 60,000 miles, and a hard season can put 18,000 miles on them." },

  { kind: "p", text: "Carry it by amortizing. Divide the set cost by its mileage life to get a cost per mile, and set that aside as you drive. A 1,000 dollar set lasting 50,000 miles is two cents a mile; at 1,500 miles a month that is about 30 dollars accruing toward a set you buy in a lump. Riders who skip this meet tyres as a sudden 1,000 dollar month, and a season only has to contain one of those to blow the plan." },

  { kind: "h2", text: "Depreciation: the cost you do not see leave your account" },

  { kind: "p", text: "Depreciation is the largest cost most people never write down, because no money leaves your account for it during the season. It is the difference between what your van is worth the day you leave and the day you stop, real whether or not you sell. A van worn by a season is worth measurably less than one rested in a driveway, and that wear is a cost the same as fuel is." },

  { kind: "p", text: "For a typical used van, depreciation runs between 150 and 700 dollars a month depending on the vehicle's value and how hard the season is on it. A cheap, already-depreciated van driven modestly sits at the bottom. A new conversion covering long distances sits near the top, where the wear is the single largest cost of the season even though it never appears as a payment." },

  { kind: "note", text: "If you sold the van at the start and bought it back at the end, the depreciation is the check you would write to make yourself whole. Count it, even though nothing bills you for it." },

  { kind: "h2", text: "App subscriptions and the small recurring lines" },

  { kind: "p", text: "The smallest category, worth a mention because it sprawls if unwatched. Campsite-finding apps, offline mapping, weather and radar, a music or audiobook subscription, cloud storage, a mail-forwarding service for a legal address. A few dollars each; together they run 5 to 45 dollars a month." },

  { kind: "ul", items: [
    "Campsite and public-land mapping app -- 3 to 10 dollars a month, and the one most riders find pays for itself.",
    "Weather and radar service -- free to 10 dollars a month; the paid tiers matter most in fire and storm season.",
    "Mail forwarding and a domicile address -- 10 to 30 dollars a month, and effectively mandatory for registration, insurance and voting.",
    "Music, audiobooks, cloud storage for work -- whatever you already pay at home, carried over unchanged.",
  ]},

  { kind: "p", text: "The mail-forwarding line is the one people forget is not optional. A full-time rider still needs a legal address for vehicle registration, insurance, banking and taxes, and a domicile service provides one. It is a small, genuinely fixed cost, and the administrative backbone the rest of the budget stands on." },

  { kind: "h2", text: "Putting it together: frugal, middle and comfortable" },

  { kind: "p", text: "Here is the whole season at three levels. These are monthly figures; multiply by six. Read them as ranges, not forecasts -- your fuel line is set by your miles, your health line by your age and subsidy, your depreciation by your van's value. The point is the shape and the total, not any single cell." },

  { kind: "table", caption: "Monthly cost by category and comfort level (single rider)", head: ["Category", "Frugal", "Middle", "Comfortable"], rows: [
    ["Fuel", "200", "450", "700"],
    ["Camping", "40", "250", "600"],
    ["Food", "250", "450", "750"],
    ["Vehicle insurance", "90", "130", "180"],
    ["Health insurance", "100", "350", "650"],
    ["Phone and data", "35", "90", "160"],
    ["Maintenance reserve", "100", "200", "300"],
    ["Tyres (amortized)", "40", "60", "90"],
    ["Depreciation", "150", "350", "700"],
    ["App subscriptions", "5", "20", "45"],
    ["Total per month", "1,010", "2,350", "4,175"],
    ["Total for six months", "6,060", "14,100", "25,050"],
  ]},

  { kind: "p", text: "The frugal column is not deprivation. It is a paid-off, already-depreciated van, staying on free ground, cooking nearly every meal, driving modestly, on a subsidized health plan. The comfortable column is a newer van, a mix of paid sites and the occasional RV park, eating out regularly, covering long distances, on a comprehensive plan. The 4-to-1 spread is almost entirely fuel, camping, food, depreciation and health -- the five lines with the most travel in them." },

  { kind: "h3", text: "Fixed versus variable, one more time" },

  { kind: "p", text: "The final way to hold this is by what you can move. To cut a budget mid-season, you cut miles, paid camping and restaurants, in that order, because those are the three lines that answer to a decision. The rest is largely settled the day you leave." },

  { kind: "table", caption: "What is fixed and what is variable", head: ["Category", "Type", "Primary driver", "Monthly range"], rows: [
    ["Fuel", "Variable", "Miles driven, mpg, pump price", "170 - 750"],
    ["Camping", "Variable", "Free vs paid nights", "40 - 970"],
    ["Food", "Variable", "Cooking vs eating out", "250 - 750"],
    ["Tyres", "Variable", "Miles driven", "40 - 90"],
    ["Vehicle insurance", "Fixed", "Vehicle, record, state", "90 - 180"],
    ["Health insurance", "Fixed", "Age, plan tier, subsidy", "0 - 650"],
    ["Phone and data", "Fixed", "Plans, hotspot, satellite", "35 - 180"],
    ["App subscriptions", "Fixed", "Number of services", "5 - 45"],
    ["Maintenance reserve", "Accrual", "Van age and mileage", "100 - 300"],
    ["Depreciation", "Accrual", "Van value, time, miles", "150 - 700"],
  ]},

  { kind: "p", text: "Two of these lines -- the maintenance reserve and depreciation -- are accruals rather than bills, and the two most often left off entirely. A budget that omits them looks 250 to 1,000 dollars a month cheaper than the season costs, and the gap comes due all at once: the reserve the day something breaks, the depreciation the day you sell." },

  { kind: "h2", text: "The mistakes that break a budget" },

  { kind: "p", text: "The failures here are the same few every season, and every one is a line that was left off or a lever that was misread." },

  { kind: "ol", items: [
    "Budgeting fuel by the month instead of by the mile, then covering three times the planned distance and running out of money on the largest single line.",
    "Leaving off the repair reserve, then treating the first real breakdown as an emergency instead of an expected event you had funded.",
    "Ignoring depreciation because nothing bills you for it, then being unable to account for where a season's money went when you sell the van.",
    "Under-insuring the build, so a fire or theft is the loss of both the vehicle and the home with no policy behind it.",
    "Choosing a regional health plan and crossing state lines all season, so the one big medical bill lands entirely out of network.",
    "Treating tyres as a surprise rather than an accrual, so a predictable 1,000 dollar set arrives as an unplanned month.",
  ]},

  { kind: "key", text: "Budget fuel by the mile, not the month, and fund the two invisible lines -- the repair reserve and depreciation -- every month whether or not they bill you. A season that plans for those three things absorbs a bad month without ending. A season that skips them looks cheaper on a spreadsheet and stops in a parking lot when the alternator goes." },

  { kind: "h2", text: "What this framework cannot tell you" },

  { kind: "p", text: "Everything above is the general shape, and the general shape is a starting point rather than your number. Your fuel line depends on the exact miles you drive and the van you drive them in. Your health line depends on your age, income and the plan you can get. Your depreciation depends on what your specific van is worth. Nobody can hand you your season's cost from a table; the table tells you which lines to fill in and roughly how large each is." },

  { kind: "p", text: "The authoritative sources for your budget are the specific ones, not the general ranges on this page. Get a real insurance quote for your vehicle and situation. Price fuel against current regional pump prices on your route. Pull your own van's maintenance history to set the reserve honestly. And track the first two months against this framework -- your real numbers will correct these ranges faster than any planning, and from the third month on you are budgeting against yourself rather than a stranger's table." },
];
