import type { Block } from "./blocks";

/** Power systems that hold for a long season -- Vanism pillar. */
export const PILLAR_POWER_SYSTEMS_FOR_LIFE_ON_THE_ROAD: Block[] = [
  { kind: "key", text: "A house electrical system that holds for a long season is built around usable amp-hours, not headline amp-hours. For most riders that means 200 to 400 amp-hours of LiFePO4, a 300 to 600 watt solar array, and a 20 to 40 amp DC-DC charger fed by the alternator, sized against a measured daily load rather than a guessed one. The number that ends most trips is not battery capacity -- it is the collapse of solar charging in winter, and that is the case you size for." },

  { kind: "p", text: "A house electrical system either disappears into the background or governs your entire day. Sized correctly, you stop thinking about it: the fridge runs, the laptop charges, the lights come on, and the battery is full again by afternoon. Undersized, you ration. The difference is not brand or price; it is whether the design started from a real load budget or from a number someone quoted on a forum." },

  { kind: "p", text: "This page builds the system in the order the decisions actually happen: what the battery is made of and how much of it you can really use, how to count your daily draw in amp-hours, where the charge comes from and how much each source delivers, whether you need an inverter at all, and what happens in cold weather when the solar you sized around stops arriving. The figures are working defaults for a 12-volt system in a van or truck camper. One convention throughout: capacity is counted in amp-hours at a stated voltage, energy in watt-hours -- a 100 amp-hour battery at 12.8 volts holds about 1,280 watt-hours." },

  { kind: "h2", text: "Battery chemistry, and how much of the battery you actually own" },

  { kind: "p", text: "The decision that shapes everything downstream is chemistry. Almost every long-season build comes down to two options: absorbed glass mat lead-acid (AGM) and lithium iron phosphate (LiFePO4). The headline capacity on the case is the same kind of number for both, but the fraction you can use without destroying the battery is not -- and that fraction is what matters." },

  { kind: "p", text: "Lead-acid chemistry, AGM included, does not tolerate deep discharge. Draw an AGM battery past roughly 50 percent of rated capacity regularly and its cycle life falls sharply, so a 100 amp-hour AGM battery is in practice a 50 amp-hour battery you can use. LiFePO4 tolerates 80 to 100 percent discharge with little penalty, so a 100 amp-hour LiFePO4 battery is a 90 to 100 amp-hour battery you can use. That alone roughly doubles the effective capacity per rated amp-hour." },

  { kind: "p", text: "The second difference is cycle life -- one cycle being a discharge and recharge. AGM delivers a few hundred to around a thousand cycles at 50 percent depth before capacity fades; LiFePO4 delivers several thousand at far deeper discharge. This reverses the apparent cost: LiFePO4 costs more on the shelf and far less per usable kilowatt-hour delivered over its life." },

  { kind: "table", caption: "House battery chemistries compared (per 100 Ah rated)", head: ["Property", "AGM lead-acid", "LiFePO4"], rows: [
    ["Usable depth of discharge", "~50% (50 Ah usable)", "80-100% (80-100 Ah usable)"],
    ["Rated cycle life", "300-1,000 at 50% DoD", "3,000-5,000+ at 80% DoD"],
    ["Weight, approx", "28-32 kg", "12-15 kg"],
    ["Upfront cost", "Lower", "2-3x higher"],
    ["Cost per usable kWh over life", "Higher", "Lower, often by 3-4x"],
    ["Charge acceptance", "Slower, tapers early", "Fast, to near full"],
    ["Usable voltage under load", "Sags as it drains", "Nearly flat until almost empty"],
    ["Charging below freezing", "Permitted but slow", "Prohibited without a heater"],
  ]},

  { kind: "p", text: "Two rows decide most builds. The flat voltage curve means a 12-volt appliance sees a near-constant supply until the LiFePO4 bank is genuinely empty, where AGM browns out gradually and drops some appliances early. And the charge-acceptance difference is why LiFePO4 suits limited charging windows: it takes everything a DC-DC charger or a midday array can push, where AGM tapers long before full and wastes the back half of any charging session." },

  { kind: "note", text: "The one place AGM still wins outright is charging in the cold. LiFePO4 cells are permanently damaged by charging below about 0 C / 32 F, so any lithium bank used in winter needs either self-heating cells or an external heat pad wired to inhibit charging until the cells are warm. This is not optional and it is the most common way riders quietly destroy an expensive battery in their first cold season." },

  { kind: "h2", text: "Sizing amp-hours to a real load, not a round number" },

  { kind: "p", text: "The correct size for a bank is set by two things: how much you draw in a day, and how many days you need to survive with no meaningful charging. Build a load budget in watt-hours, convert to amp-hours, then multiply by the number of no-charge days you want to carry." },

  { kind: "p", text: "Work in watt-hours first because the arithmetic is honest: watts times hours equals watt-hours. Convert to amp-hours by dividing by system voltage -- 12.8 for a nominal 12-volt LiFePO4 bank. A day that draws 1,200 watt-hours draws about 94 amp-hours. Size usable capacity to at least that, then decide your reserve." },

  { kind: "p", text: "Usable is 80 to 90 percent of rated, so one day of the 1,200 watt-hour example needs about 110 rated amp-hours -- and nobody should build to a one-day floor. Two days of autonomy, enough to sit out a grey front without sun or driving, is the common target and puts that rider at 200 to 250 rated amp-hours. Riders who run Starlink hard, or cook and heat electrically, land at 300 to 400." },

  { kind: "h2", text: "A realistic daily load budget" },

  { kind: "p", text: "Below is a worked budget for a rider who works remotely from the vehicle -- the heaviest common case, because a working day means a laptop and a satellite dish running for hours. Every figure is average draw over the day, not a peak. Peaks matter for inverter and wire sizing, covered later; they do not affect the daily energy total." },

  { kind: "table", caption: "Sample daily load budget (12 V system, working rider)", head: ["Load", "Avg power", "Hours/day", "Energy/day (Wh)", "Amp-hours/day"], rows: [
    ["12 V compressor fridge", "45 W while cycling", "~8 h duty", "360", "28"],
    ["Starlink (Mini, average use)", "30 W", "10", "300", "23"],
    ["Laptop", "45 W", "8", "360", "28"],
    ["LED interior lights", "10 W", "4", "40", "3"],
    ["Roof fan", "15 W", "6", "90", "7"],
    ["Water pump", "50 W", "0.3", "15", "1"],
    ["Phone + misc USB", "10 W", "4", "40", "3"],
    ["Total", "--", "--", "~1,205", "~93"],
  ]},

  { kind: "p", text: "The fridge and the two working loads dominate; lights, pump, phones, and fan are a rounding error beside them. Riders routinely obsess over LED efficiency and ignore that their laptop and dish are three-quarters of the budget. Cut load where the load is." },

  { kind: "p", text: "Two adjustments make this budget yours. A fridge's draw scales hard with ambient temperature and how often you open it -- the same unit that pulls 28 amp-hours on a mild day pulls 45 on a 35 C afternoon. And Starlink varies by hardware: the Mini averages 20 to 40 watts, the standard dish 50 to 75 and higher, which alone can double the satellite line." },

  { kind: "note", text: "Electric cooking and electric heating are deliberately absent above. An induction hob draws 1,200 to 1,800 watts and an electric kettle similar; a few minutes of either adds more to the daily total than everything in the table combined. Riders who cook electrically are running a fundamentally larger system -- 400-plus amp-hours and 600-plus watts of solar -- and should budget from that assumption, not this one." },

  { kind: "h2", text: "The three charging sources, and what each one really delivers" },

  { kind: "p", text: "A battery is a buffer, not a supply. What keeps a long-season system alive is charging, and there are exactly three sources worth building around: a solar array through a controller, the alternator through a DC-DC charger, and shore power through a mains charger. A resilient build uses at least two, because each fails in a different, predictable way, and the days they fail overlap less than you would fear." },

  { kind: "h3", text: "Solar, and the honest yield of an array" },

  { kind: "p", text: "Solar is the base-load source: silent, unattended, free once installed. The trap is rated wattage. A 400-watt array does not make 400 watt-hours an hour. Real daily yield is roughly the rated wattage times the peak-sun-equivalent hours for your location and season, then reduced 20 to 30 percent by controller, wiring, angle, and heat." },

  { kind: "p", text: "In practice a flat-mounted 400-watt array delivers 1,200 to 2,000 watt-hours on a clear summer day in the sunbelt -- comfortably more than the 1,205-watt-hour budget above. The same array on a short, overcast December day at higher latitude delivers 200 to 500, a fifth of that budget. This collapse, not battery size, is the defining constraint of a winter system." },

  { kind: "p", text: "Use a maximum-power-point-tracking (MPPT) controller, not a cheaper pulse-width-modulation (PWM) one. MPPT extracts meaningfully more from the same panels, especially in cold, bright conditions and when array voltage sits well above battery voltage, and the price gap no longer justifies PWM on any array large enough to matter." },

  { kind: "h3", text: "The alternator, through a DC-DC charger" },

  { kind: "p", text: "The alternator is the most reliable source there is, because it works whenever the engine runs, regardless of weather. It is also the most misunderstood: you do not wire a modern house battery straight to the starter battery. A DC-DC charger (a battery-to-battery charger) sits between them and does three jobs -- it protects the alternator from the enormous current a near-empty LiFePO4 bank will draw, delivers a proper charge profile the alternator cannot, and isolates the two batteries so a drained house bank never leaves you unable to start." },

  { kind: "p", text: "A 30-amp DC-DC charger returns about 30 amp-hours per hour of driving. Two hours between sites puts back around 60 amp-hours, most of a working day's budget, in weather that gives solar nothing. That is the whole argument for carrying both: the grey, wet days that starve the array are frequently the days you are driving anyway." },

  { kind: "note", text: "Many vehicles built after roughly 2015 use a variable-voltage 'smart' alternator that drops output to save fuel and can starve a naive charging setup. A DC-DC charger with an engine-run ignition trigger sidesteps this -- another reason it is the correct component rather than a simple relay." },

  { kind: "h3", text: "Shore power, for when you have a plug" },

  { kind: "p", text: "Shore power -- a mains hookup at a campground, a friend's driveway, a paid site -- is the fastest source when available and irrelevant when not. A 20 to 40 amp mains charger refills a large bank in a few hours. The design question is not whether shore power is good; it is whether you build around needing it. A system that only balances if it gets plugged in every few days is not a long-season system. Treat shore power as an accelerator, not a dependency." },

  { kind: "table", caption: "Charging sources compared", head: ["Source", "Typical daily yield", "When it works", "When it fails", "Role"], rows: [
    ["400 W solar + MPPT", "1,200-2,000 Wh summer; 200-500 Wh winter", "Clear days, unattended, parked in sun", "Overcast, short days, shade, snow on panels", "Base load"],
    ["30 A DC-DC charger", "~30 Ah per driving hour (~380 Wh)", "Whenever the engine runs", "Parked for days at one site", "Weather-proof top-up"],
    ["30 A shore charger", "Refills a large bank in hours", "At a hookup", "Off-grid, most of the time", "Fast accelerator"],
  ]},

  { kind: "p", text: "Read that table as a portfolio: the failure columns barely overlap. Solar plus a DC-DC charger has no common day that starves both, which is why that pair is the standard spine of a long-season system." },

  { kind: "h2", text: "Inverter sizing, and when you do not need one" },

  { kind: "p", text: "An inverter turns 12-volt battery power into 240-volt (or 120-volt) mains AC to run household appliances. It is the component riders most often oversize and most often do not need. The first question is not what size -- it is whether you need one at all." },

  { kind: "p", text: "Most of the daily budget above runs natively on 12 volts or over USB and never touches an inverter. The fridge, lights, pump, and fans are all 12-volt. Phones and most laptops charge over USB-C, and a 12-volt USB-C outlet powers them more efficiently than routing through an inverter and a mains brick. If your loads are a fridge, devices, and lights, you may not need an inverter at all -- and skipping it removes a source of idle drain and one more thing to fail." },

  { kind: "p", text: "You need an inverter for a genuine mains-only load: a laptop with no USB-C charging, certain camera or medical equipment, power tools, or an induction hob. Size it to the largest single load plus headroom, not the sum of everything you own. An induction hob wants a 2,000-watt inverter; a rider whose only mains load is an occasional laptop brick wants a 300 to 600-watt unit and nothing larger." },

  { kind: "ul", items: [
    "Buy pure sine wave, not modified sine wave. Modified sine can buzz, run hot, or refuse to work with motors, chargers, and sensitive electronics, and the price gap no longer justifies it.",
    "Account for idle draw. An inverter left on consumes 10 to 30 watts doing nothing -- over a day that can rival a real load. Wire it to a switch and turn it off when nothing needs it.",
    "Size wire and fuse to the inverter's peak, not its average: a 2,000-watt inverter can pull 160-plus amps from a 12-volt bank, demanding short, heavy cable and a correctly rated fuse at the battery.",
  ]},

  { kind: "h2", text: "Wiring, fusing, and the parts that are not glamorous" },

  { kind: "p", text: "A bank is only as safe as its worst connection. The failures that matter in a 12-volt system are heat and fire from undersized wire or a missing fuse. Twelve-volt systems carry high current for the same power -- 1,200 watts is 5 amps at 240 volts but 100 amps at 12 -- and current is what melts things." },

  { kind: "ul", items: [
    "Fuse every positive conductor as close to the battery as possible. The fuse protects the wire, not the appliance; size it to the wire's rating, and put a main fuse or breaker on the battery's main positive terminal.",
    "Size cable to the current and the length, then go one size larger. Voltage drop and heat both rise with length; the battery-to-inverter run must be short and heavy.",
    "Use a busbar, not a daisy chain of ring terminals stacked on one post -- it makes the system legible and every connection inspectable.",
    "Torque terminals to spec and recheck them after the first weeks of vibration. A loose lug is a hot lug, and a hot lug is how fires start in vehicles that never crashed.",
  ]},

  { kind: "h2", text: "Monitoring, because a system you cannot see you cannot trust" },

  { kind: "p", text: "Voltage alone is a poor gauge of a LiFePO4 bank, precisely because it is nearly flat from full to almost empty -- the trait that makes it a good supply makes it a useless fuel gauge. What you want is a shunt-based monitor: a device that counts every amp-hour in and out and reports true state of charge as a percentage, plus real-time current draw." },

  { kind: "p", text: "A shunt turns the system from guesswork into arithmetic. You can see the fridge's real duty cycle, watch solar climb through the morning, confirm the DC-DC charger delivers its rated current, and know at a glance whether today's charging covered today's load. Every load figure on this page should be replaced by a number off your own shunt: the table is an estimate, the shunt is the truth for your build." },

  { kind: "key", text: "Build the system from a measured load, not a quoted capacity. A shunt-based monitor tells you your real daily draw in amp-hours; size usable battery to at least two of those days, then size charging so that a normal day -- some sun, some driving, or both -- returns more than you spent. A system that only breaks even on its best day will run down over a bad week." },

  { kind: "h2", text: "Winter derating, when solar collapses and the battery shrinks" },

  { kind: "p", text: "Everything above holds comfortably for most of the year. Winter breaks the assumptions on both sides of the ledger at once: charging falls and load rises, while the battery itself temporarily holds less. This is where systems that looked generous in July run flat in December, and it is the case a long-season build is actually sized for." },

  { kind: "p", text: "On the charging side, solar is the casualty. Days are short, the sun is low, cloud persists, and a dusting of snow on a flat panel takes it to zero until you clear it. A 400-watt array that made 1,500 watt-hours in summer may make 300 to 500 on a decent winter day and nothing on a bad one. The array did not shrink; the resource did." },

  { kind: "p", text: "On the load side, demand climbs. Longer nights mean lights run more. A diesel or petrol air heater draws a modest amp or two while running but spikes hard on each glow-plug start, and it runs far more in winter. The fridge is the one load that eases as a cold cabin lowers its duty cycle, but that saving is dwarfed by the rest." },

  { kind: "p", text: "The battery is the third factor and the least visible. LiFePO4 loses usable capacity as it cools -- a bank rated 100 amp-hours at 25 C may deliver closer to 80 at 0 C -- and must not be charged below freezing without a heater, so on the coldest mornings charging is blocked until the cells warm, which itself costs power. AGM also loses cold capacity, though it can still accept a charge." },

  { kind: "table", caption: "Summer vs winter, same 400 W / 300 Ah LiFePO4 system", head: ["Factor", "Summer", "Winter", "Direction"], rows: [
    ["Solar yield, clear day", "1,200-2,000 Wh", "300-500 Wh", "Charging falls hard"],
    ["Solar yield, poor day", "600-900 Wh", "0-150 Wh", "Can reach zero"],
    ["Usable battery capacity", "~100% of rated", "~80% at 0 C", "Buffer shrinks"],
    ["Charging below freezing", "N/A", "Blocked until cells warmed", "Input can stall at dawn"],
    ["Lighting + heater load", "Low", "Higher, longer nights", "Load rises"],
    ["Fridge load", "Higher", "Lower", "Small relief"],
    ["Net position", "Comfortable surplus", "Deficit without driving", "Alternator becomes primary"],
  ]},

  { kind: "p", text: "The table forces one conclusion: in winter the alternator, not solar, becomes the primary source, and a build that leaned entirely on solar has no winter answer. The riders who hold a long season through cold months either move regularly -- turning driving hours into charging hours -- or take periodic shore-power top-ups, and they sized the bank with enough reserve for the still, sunless days between." },

  { kind: "note", text: "The winter rule of thumb: plan on solar delivering a quarter to a third of its summer figure and size other sources to cover the rest. If your only plan for a week of overcast at one site is the array on the roof, that is a bet on the weather -- and winter weather is the bet that loses." },

  { kind: "h2", text: "Putting it together: two worked systems" },

  { kind: "p", text: "The targets become concrete when assembled. Below are two coherent builds -- a lighter one for a rider who moves often and does not work from the vehicle, and a heavier one for a stationary remote worker who needs winter resilience. Neither is the only correct answer." },

  { kind: "table", caption: "Two coherent long-season builds", head: ["Component", "Light / mobile rider", "Heavy / stationary worker"], rows: [
    ["Daily load", "40-60 Ah", "90-130 Ah"],
    ["Battery (LiFePO4 rated)", "200 Ah", "300-400 Ah"],
    ["Usable, at 80%", "~160 Ah (~2.5+ days)", "~250-320 Ah (~2-3 days)"],
    ["Solar array", "200-300 W", "400-600 W"],
    ["DC-DC charger", "20 A", "30-40 A"],
    ["Shore charger", "Optional, 20 A", "30-40 A recommended"],
    ["Inverter", "None, or 300 W", "600-2,000 W by cooking choice"],
    ["Winter strategy", "Move to charge", "Move plus shore top-ups"],
  ]},

  { kind: "p", text: "The light build works because a rider who moves frequently charges frequently. The heavy build front-loads capacity and charging to survive the stationary, sunless stretches a working rider cannot always move out of. Match the build to how you actually travel." },

  { kind: "h2", text: "What this framework cannot tell you" },

  { kind: "p", text: "Every figure here is a working default, and a working default is wrong for someone's specific vehicle, appliances, and latitude. Your fridge's draw depends on its make, insulation, and ambient temperature. Your solar yield depends on latitude, season, parking, and whether a tree is in the way. Your winter deficit depends on a climate this page cannot see. The method is transferable; the numbers are yours to measure." },

  { kind: "p", text: "So the last instruction is the first: measure. A shunt-based monitor and a two-week baseline of real use replace every estimate here with a number true for your build. Size the battery to at least two measured days, size charging so a normal day runs a surplus, and treat the winter figures as the case that governs the design. The system that holds for a long season is the one whose worst realistic week was budgeted for before it arrived -- not the one sized for July and hoped through December." },
];
