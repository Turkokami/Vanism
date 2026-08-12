import type { Block } from "./blocks";

/** Desert camping when the heat is the hazard -- Vanism pillar. */
export const PILLAR_DESERT_CAMPING_IN_SUMMER_HEAT: Block[] = [
  { kind: "key", text: "In the summer desert, heat is not discomfort -- it is the hazard that kills, and it does it in hours, not days. The whole discipline reduces to three rules: carry and drink real water on a schedule (one to two gallons per person per day at rest, more when you move), do everything strenuous at dawn and dusk and hold still in shade through the midday, and climb -- every thousand feet of elevation drops the air roughly three to five degrees. Get those three right and the desert is survivable and worth the run. Get water wrong and the margin is a single afternoon." },

  { kind: "p", text: "This is the mirror image of the winter piece. In the cold you fight to keep heat in; in the summer desert you fight to shed it, and the desert wins that fight faster than most riders expect. A body that cannot lose heat fast enough climbs toward a core temperature that damages the brain and organs -- and the terrain that causes it, open ground with no shade and a sun with nothing between it and you, is exactly the terrain people drive into for the emptiness and the long views." },

  { kind: "p", text: "The dangerous thing about desert heat is that it does not announce itself the way cold does. Cold makes you shiver; you know you are in trouble. Heat and dehydration arrive quietly -- the air is dry, sweat evaporates before you notice it, and you can be badly behind on water while feeling only tired and slightly off. By the time the warning signs are loud, the situation is already serious. The whole game is staying ahead of a problem that does not knock. This page covers why the desert kills and how fast, the water math that keeps you ahead of it, timing the day around the sun, using elevation as the escape, keeping the rig and its systems from cooking, and reading heat stress in your own body before it reads as an emergency." },

  { kind: "h2", text: "Why the desert kills, and how fast" },

  { kind: "p", text: "The human body holds a core temperature near 98.6 degrees with a narrow tolerance around it, and it sheds excess heat mainly by sweating -- evaporating water off the skin carries heat away. That works until one of two things happens: the air gets so hot that you gain heat faster than you can shed it, or you run out of water to sweat with. In the summer low desert, both happen on the same afternoon." },

  { kind: "p", text: "Dry desert air makes this worse in a way that fools people. Sweat evaporates instantly, so you never feel wet and the cooling it provides is invisible. You can lose a liter of water an hour through skin and breath in strong heat and not register that you are sweating at all. The soaked-shirt sensation that tells a humid-climate rider they are working hard simply does not occur here. The water leaves anyway." },

  { kind: "p", text: "The progression from fine to critical is fast. A dehydrated rider walking in 110-degree sun with no shade can move from mild heat stress to heat stroke in well under two hours. Heat stroke -- a core temperature above roughly 104 degrees with a failure of the body's cooling -- is a medical emergency with a real fatality rate even when treated. It is not the far end of a long slide. It is a short slide, and the desert provides the slope." },

  { kind: "note", text: "Ground-level temperatures in the open desert run well above what a shaded thermometer reads. A forecast of 108 in the shade can mean 140-plus on dark sand or rock in direct sun. Air temperature understates the load on a body standing in it." },

  { kind: "h2", text: "The water math, and the reserve you never spend" },

  { kind: "p", text: "Water is the whole subject. Everything else -- shade, timing, elevation -- exists to reduce how much water you lose, because the amount you can carry is finite and the amount the desert takes is not. The working baseline in real heat is one gallon per person per day at rest and shaded, and two gallons or more per person per day active in the sun. That is drinking water alone; cooking, washing, and the dog are on top of it. These are not padding numbers -- they are the consumption that keeps a body functioning, and the failure mode of underestimating them is not thirst, it is a hospital." },

  { kind: "table", caption: "Daily drinking water per person by temperature and activity", head: ["Shade temperature", "At rest, in shade", "Light activity", "Hiking / hard work in sun"], rows: [
    ["Under 85 F", "0.5 gal (2 L)", "0.75 gal (3 L)", "1.5 gal (6 L)"],
    ["85-95 F", "1 gal (4 L)", "1.5 gal (6 L)", "2 gal (8 L)"],
    ["95-105 F", "1.5 gal (6 L)", "2 gal (8 L)", "3 gal (11 L)"],
    ["Over 105 F", "2 gal (8 L)", "2.5 gal (9 L)", "3+ gal (12+ L), or do not hike", ]],
  },

  { kind: "p", text: "Read the top-right cell as the warning it is. Above 105 in the shade, hard activity in the sun costs three gallons a day and more, and the honest planning answer is usually not to carry more water but to not do the activity at that hour. Water lets you survive the heat; it does not make hiking at midday in 110 degrees a reasonable thing to do." },

  { kind: "h3", text: "The reserve is not part of your supply" },

  { kind: "p", text: "The single discipline that separates a planned desert stay from a rescue is the reserve you never touch. Carry water in two categories in your head: working water, which is what the day's plan spends, and reserve, which does not exist for planning purposes at all. A common working figure is a fixed reserve -- say two gallons per person -- that you treat as if it were empty. When your working water is gone, the day is over and you are leaving, not dipping into reserve to buy another afternoon." },

  { kind: "p", text: "The reason is that desert plans fail on the resupply, not the consumption. The spring the map showed is dry. The road out washed out and the drive is three hours, not one. The other vehicle did not show. Each of those turns a comfortable margin into the reserve, and a reserve you already spent on optional activity is not there when the plan breaks. Never run the tank to the number -- run it to the reserve and stop." },

  { kind: "table", caption: "Water carry and the stay it supports (two people, moderate activity)", head: ["Onboard water", "95-105 F day", "Over 105 F day", "Note"], rows: [
    ["7 gal (fresh tank, small rig)", "1-2 days working", "1 day working", "Plus reserve -- this is a resupply-every-day plan"],
    ["20 gal", "3-4 days working", "2-3 days working", "A realistic multi-day carry with a 4 gal reserve held back"],
    ["40 gal (large tank + jugs)", "6-8 days working", "4-5 days working", "Weight and heat management of stored water become the limit"],
    ["Any", "Ends when working water is gone", "Ends when working water is gone", "The reserve is not in these numbers by design"]],
  },

  { kind: "note", text: "Store water where it will not cook. Water above roughly 100 degrees is unpleasant to drink, so you drink less of it -- exactly backward from what you need. Keep jugs out of direct sun and keep at least one container cool enough that the water is genuinely refreshing. Cold water gets drunk; hot water gets rationed by a body that should not be rationing." },

  { kind: "h2", text: "Timing everything around the sun" },

  { kind: "p", text: "The desert is not uniformly hostile through the day -- it is brutal for about six hours and manageable for the rest. The competent desert rider inverts a normal schedule to match: do the work when the sun is low, hold still when it is high. This single reordering does more to keep you safe than any amount of gear." },

  { kind: "p", text: "Move and hike at dawn and dusk. The hours from first light to about three hours after sunrise, and from three hours before sunset into dusk, are when the air is coolest, the ground has not yet loaded up with heat or has begun to shed it, and the light is workable. Hiking, rough-road driving, setting or breaking camp, anything that raises your heart rate -- it all belongs in those bands." },

  { kind: "p", text: "Hole up in shade through the midday. From roughly late morning to mid-afternoon, the correct activity in the low desert in summer is close to nothing: find shade, minimize movement, drink on schedule, and wait the heat out. This is not laziness -- it is the same discipline as staying in the tent through a whiteout. The midday desert in July is a hazard you shelter from, and the shelter is shade plus stillness plus water." },

  { kind: "table", caption: "A summer desert day, low elevation", head: ["Window", "Clock (approx.)", "What you do", "Why"], rows: [
    ["Dawn", "First light to 9-10 am", "Hike, drive, hard work, break camp", "Coolest air, ground not yet loaded, best light"],
    ["Midday", "10 am to 4-5 pm", "Shade, stillness, drink on schedule", "Peak heat and peak ground temperature -- shelter from it"],
    ["Dusk", "4-5 pm to dark", "Hike, drive, set camp, cook", "Air cooling, ground shedding heat, workable light"],
    ["Night", "Dark to first light", "Sleep, ventilate the rig, recover", "Coolest window; desert nights can drop 30-40 F below the day"]],
  },

  { kind: "p", text: "The large day-to-night swing is the desert's one gift to the summer camper. Clear dry air holds no heat overnight, so a 108-degree day can fall to the low 70s or cooler by dawn. That is why the schedule works and why a rig set up to dump its stored daytime heat at night is worth the effort. You are not fighting a constant furnace; you are riding a wave, and the schedule keeps you on the low side of it." },

  { kind: "h2", text: "Elevation is the escape" },

  { kind: "p", text: "The most powerful tool in the summer desert is not something you carry -- it is the ground itself. Air cools as you climb, at a rate of roughly three to five degrees Fahrenheit per thousand feet of elevation gain. That is not a marginal effect. It is the difference between a low-desert floor at 110 and a plateau or a mountain flank thirty road miles away sitting at 80, and it is available almost everywhere the desert has relief." },

  { kind: "table", caption: "Elevation and the temperature you actually camp in", head: ["Elevation", "Approx. offset from valley floor", "If the floor is 110 F", "Character"], rows: [
    ["1,000 ft (low desert floor)", "Baseline", "110 F", "Dangerous midday; the piece you are escaping"],
    ["4,000 ft (high desert)", "-9 to -15 F", "95-101 F", "Hot but workable with the schedule"],
    ["6,000 ft (juniper / pinyon)", "-15 to -25 F", "85-95 F", "Comfortable dawn and dusk, cool nights"],
    ["8,000 ft (pine / montane)", "-25 to -35 F", "75-85 F", "Genuinely pleasant; jacket at night"],
    ["10,000 ft (subalpine)", "-30 to -45 F", "65-80 F", "Cool; the heat problem inverts to a cold one at night"]],
  },

  { kind: "p", text: "So a summer desert route is planned in the vertical, not just the horizontal. The desert West is not flat -- it is basin and range, valley floors interrupted by mountains that rise five and eight thousand feet above them, and the mountains hold the summer. When the forecast for the floor is a number you should not camp in, the answer is frequently a short drive and a long climb to ground thirty degrees cooler that often has shade the floor does not." },

  { kind: "p", text: "Two cautions keep this from being a free lunch. Higher ground trades the heat for other hazards: afternoon thunderstorms and lightning are a real high-country summer danger, roads may be rougher and gated, and the same clear air that cooled the desert night makes a high camp genuinely cold after dark. And the drive between bands is itself done in the heat if you time it wrong -- climb in the morning, not across the middle of the day with a laboring engine and a hot cabin." },

  { kind: "note", text: "Elevation also thins the air. Above about 8,000 feet a rider up from sea level may feel it -- headache, poor sleep, shortness of breath on the first day. It usually passes, but do not confuse early altitude symptoms with heat illness; the treatments point in opposite directions. If in doubt, descend, rest, and drink." },

  { kind: "h2", text: "Shade and ventilation for the rig" },

  { kind: "p", text: "A vehicle parked in the summer desert sun becomes an oven, and the interior can run 30 to 50 degrees hotter than the air outside within an hour. That heat load is a threat to you, to your food and batteries, and to any animal. Managing it is mostly about two things: keeping the sun off the vehicle in the first place, and moving air through it so stored heat can leave." },

  { kind: "h3", text: "Keep the sun off it" },

  { kind: "p", text: "Natural shade beats every engineered solution and costs nothing. Park under a tree, on the north or east side of a cliff or large rock, or anywhere terrain throws afternoon shadow -- and remember the sun moves, so shade at noon is sun at three. Where no natural shade exists, an awning or rigged tarp makes some. The single most effective cheap measure is a reflective shade on the outside of the windows, which stops the solar gain before it enters the glass rather than after." },

  { kind: "h3", text: "Move air through it" },

  { kind: "p", text: "A sealed hot vehicle stays hot. Cross-ventilation -- a roof fan pulling air out while a window on the shaded side lets cooler air in -- is the core of every livable summer desert rig, and a powered roof vent fan is the highest-value single upgrade for hot-weather van life. Run it on exhaust to pull heat up and out, since hot air rises and the roof is where it collects. Reflective insulation on the roof and windows reduces how much gets in to begin with." },

  { kind: "table", caption: "Rig heat management, by effort and payoff", head: ["Measure", "Effort", "Payoff", "Notes"], rows: [
    ["Park in natural shade", "Free", "Very high", "Beats everything; track the sun's arc across the afternoon"],
    ["External reflective window shades", "Low", "High", "Stops solar gain at the glass, not after it"],
    ["Powered roof exhaust fan", "Install", "Very high", "The core of a livable hot rig; run on exhaust"],
    ["Reflective roof / window insulation", "Moderate", "High", "Cuts the heat that gets in; helps day and holds warmth at night"],
    ["Awning or rigged tarp", "Low", "Moderate-high", "Makes shade where terrain gives none"],
    ["12V compressor fridge over absorption", "Cost", "High", "Compressor units cope with heat that defeats absorption fridges"],
    ["Roof-mounted A/C", "High cost / power", "Situational", "Needs shore power or heavy battery/solar; not a boondock default"]],
  },

  { kind: "p", text: "Air conditioning deserves an honest note. A rooftop or portable A/C unit will cool a rig, but running it off-grid in real heat demands a large battery bank and either shore power or more solar than most rigs carry. For most riders the durable summer strategy is shade, ventilation, and elevation -- not compressor cooling. A/C is a comfort for powered sites, not a substitute for the schedule and the climb." },

  { kind: "h2", text: "Keeping the fridge and batteries from cooking" },

  { kind: "p", text: "Heat is as hard on the rig's systems as on the rider, and two matter most: the fridge that keeps food safe and the batteries that run everything. Both lose capacity and lifespan in heat, and both are usually installed in the hottest, least-ventilated corners of the vehicle. A 12V compressor fridge is the right choice for the desert, but even a good one struggles when its compressor and cabinet are baking. Give it ventilation -- the compressor sheds heat and cannot do that in a sealed box -- and keep the whole cabin cooler through the measures above. An absorption (propane) fridge, common in older rigs, loses effectiveness badly above about 90 degrees ambient and can stop cooling entirely in real desert heat; if you have one, know it is working against the season." },

  { kind: "p", text: "Lithium (LiFePO4) house batteries tolerate heat better than they tolerate cold, but two lines matter. Most must not be charged above roughly 113-131 degrees, and a battery in a sun-baked compartment can reach that and refuse to charge -- exactly when your solar is producing most. Sustained high temperatures also shorten the life of any battery chemistry. Keep the bank out of direct sun and ventilated, and it will do its job through the summer." },

  { kind: "ul", items: [
    "Ventilate the fridge compressor -- a sealed cabinet defeats a good unit; add a small fan if the space is tight.",
    "Watch for a charge cutoff on hot afternoons: a hot lithium battery may stop accepting solar until it cools, which can look like a charging fault.",
    "Freeze what you can overnight when the rig is cool, so the fridge starts the hot day with thermal mass working for it.",
    "The dashboard behind a windshield is the hottest surface in the vehicle and routinely exceeds 160 degrees -- phones shut down and power banks degrade there, so nothing electronic belongs in direct sun." ]},

  { kind: "h2", text: "Reading heat risk in yourself" },

  { kind: "p", text: "Because desert heat arrives quietly, the most important instrument you carry is your own attention to the early signs. Heat illness is a progression, and it is far easier to reverse at the front of it than the back. The rider who catches heat exhaustion and stops is fine in an hour; the rider who pushes through it toward heat stroke may not recover at all. Know the sequence and act on the early end of it." },

  { kind: "table", caption: "Heat illness -- signs and what to do", head: ["Stage", "Signs", "Action"], rows: [
    ["Dehydration (early)", "Dark urine, headache, tiredness, dry mouth, less sweat", "Drink now, get in shade, slow down -- this is the cheap fix"],
    ["Heat cramps", "Muscle cramps, heavy sweating, thirst", "Stop, shade, water with electrolytes, rest before resuming"],
    ["Heat exhaustion", "Heavy sweat, weakness, nausea, dizziness, fast weak pulse, cool clammy skin", "Stop entirely, shade, cool the body, sip water, do not continue the activity"],
    ["Heat stroke (emergency)", "Hot dry OR wet skin, confusion, no longer sweating, high temperature, collapse", "Cool aggressively -- water, shade, wet cloth, fanning -- and get emergency help now"]],
  },

  { kind: "p", text: "The one sign to burn into memory is confusion. A rider who stops sweating, or becomes confused, irritable, or stops making sense, has crossed from heat exhaustion into heat stroke, and this is the emergency. Judgment fails before the person realizes it, which is why heat stroke is so often caught by a companion rather than the victim. If someone in your group starts making poor decisions or acting out of character in the heat, treat it as heat illness until proven otherwise -- cool them and call for help." },

  { kind: "ul", items: [
    "Urine color is your simplest gauge: pale is fine, dark yellow means you are behind, keep it pale.",
    "Drink on a schedule, not on thirst -- in dry heat thirst lags the actual deficit, so you are already behind when you feel it.",
    "Plain water is not enough at high sweat rates; replace electrolytes (salt) too, or you risk cramps and worse.",
    "Alcohol and heavy caffeine both cost you water; the desert afternoon is the wrong time for either." ]},

  { kind: "h2", text: "Who the desert punishes hardest" },

  { kind: "p", text: "The general water and timing numbers assume a healthy adult. Several riders in a group carry more risk and need a wider margin, and planning to the average is planning for the average person to be fine while someone else is in trouble." },

  { kind: "p", text: "Children overheat faster than adults -- more surface area for their mass, less efficient cooling, and they do not always say they are struggling. Older riders and anyone on medication that affects hydration or heat regulation run a narrower margin. And the dog is the one most often forgotten: dogs cool almost entirely by panting, cannot sweat, cannot tell you they are failing, and cook on hot ground and in hot vehicles faster than any human." },

  { kind: "note", text: "The rule for a dog in a summer desert vehicle is the same as anywhere: never leave it in a parked rig in the heat, not for a few minutes, not with the windows cracked. The interior reaches lethal temperatures faster than errands take. If the dog cannot come with you into shade and air, the stop does not happen." },

  { kind: "h2", text: "Building a summer desert run" },

  { kind: "p", text: "Put the pieces together and a summer desert stay has a shape: you hunt ground with reliable water within your carry and either shade or the elevation to make shade unnecessary, run the day inverted, and carry a reserve you have already decided not to spend." },

  { kind: "ol", items: [
    "Plan the water first. Know your daily need at the temperatures you expect, your onboard capacity, your reserve, and where the next confirmed resupply is. Water availability, not the calendar, sets your maximum stay.",
    "Plan in the vertical. Identify the elevation you can climb to when the floor forecast is unsafe, and treat that high ground as part of the route, not a bailout.",
    "Time the drives and the hikes to dawn and dusk, and build the midday hold into the plan rather than fighting it.",
    "Set the rig up to shed heat -- shade, a roof exhaust fan, reflective shades, a ventilated fridge and battery bank -- before you need it, not after.",
    "Watch the sky in high country: afternoon storms and lightning are the summer hazard up where you climbed for cooler ground.",
    "Verify current conditions -- the actual temperatures, whether that spring is running, whether the road is open -- before you commit the drive. The general rules got you to the region; they do not tell you about this week." ]},

  { kind: "key", text: "This is where the official record stops and current conditions begin. Whether a water source is flowing this month, what the floor is actually running this week, and whether the high road is open are conditions, not rules -- and Vanism carries them as a dated status from the last rider who confirmed the site on the ground, not a boundary on a map. In the summer desert a stale water report is not an inconvenience; it is the difference between a planned stay and spending your reserve. A record with a recent date is evidence you can weigh. A source with no date is a guess, and the desert does not forgive guesses about water." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "Everything above is the general framework, and it holds across the North American deserts well enough to plan against. What it cannot do is tell you the number that matters most on the day you go: the actual temperature at your actual elevation, whether the spring the map shows still runs in August, whether the county issued a heat advisory or the forest a fire closure, and whether the high road you were counting on for cooler ground is gated." },

  { kind: "p", text: "Those come from the authoritative local source -- the BLM field office or Forest Service district that manages the ground, the National Weather Service forecast for the specific point and elevation rather than the nearest town, and a ranger or recent rider who was on that road this season. Ten minutes with the district office and a current forecast beats any amount of general reading, including this. The framework keeps you alive most of the time; the local source keeps you alive on the day the framework is wrong." },
];
