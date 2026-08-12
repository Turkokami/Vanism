import type { Block } from "./blocks";

/** Reading mountain weather and lightning -- Vanism pillar. */
export const PILLAR_READING_MOUNTAIN_WEATHER_AND_LIGHTNING: Block[] = [
  { kind: "key", text: "Mountain weather turns faster than lowland weather because the terrain builds its own storms, and in monsoon country the pattern is predictable enough to plan around: be below treeline by noon, off summits and ridgelines before the cumulus stack. The two things that kill in the backcountry are lightning and hypothermia, and both are survivable if you read the sky early and turn around while turning around is still cheap. Turning around is the strong decision, not the weak one -- the ground will be there next season, and you have to be too." },

  { kind: "p", text: "Mountain weather is not lowland weather at altitude. The terrain is an active part of the machine: it lifts air, cools it, wrings water out of it, and channels wind in ways a valley forecast cannot see. A forecast written for the nearest town is a statement about the town. It is only loosely a statement about the ridge two thousand feet above it, and by afternoon it is often wrong there." },

  { kind: "p", text: "That gap is not a reason to distrust forecasts. It is a reason to read the sky yourself and update the forecast in real time from the seat you are in. The forecast sets the odds you start with; the sky building overhead is the odds right now, and on a mountain the two diverge fast. This page covers why mountain weather turns, reading the building sky, the lightning position, and hypothermia -- and ends where every honest weather page ends: at the limit of a general rule and the door of the office that holds current conditions." },

  { kind: "h2", text: "Why mountain weather turns fast" },

  { kind: "p", text: "The core mechanism is orographic lift. When moving air meets rising ground it has nowhere to go but up. Rising air cools at a predictable rate -- roughly 5.4 degrees Fahrenheit per thousand feet while dry -- and cooler air holds less water. Push moist air up a mountain and it reaches the temperature where its water condenses. That is a cloud forming in front of you, and with enough lift a storm." },

  { kind: "p", text: "This is why a peak can be socketed in cloud while the valley floor is clear -- the mountain is making weather out of air that carried none when it arrived. It also explains why a range is wet on the windward side and dry on the leeward: the air drops its water on the way up, then warms and dries on the way down." },

  { kind: "p", text: "Add the daily heating cycle. The sun warms slopes through the morning, that warmed air rises and feeds the lift the terrain already provides, and the two stack through the day to peak in the early afternoon. That is why mountain storms keep an appointment: quietest at dawn, most dangerous from roughly noon to early evening. Not folklore -- the heating curve." },

  { kind: "note", text: "Every altitude figure here is a rate of change, not a fixed temperature. The point is the slope of the curve: gain elevation and the air gets colder and wetter faster than flatland intuition expects. A morning that felt mild at the trailhead can be sleet at the pass with no change in the weather system at all -- only in your altitude." },

  { kind: "h2", text: "The afternoon thunderstorm and the noon rule" },

  { kind: "p", text: "Across the interior mountain West, from roughly early July into September, moisture pumps north in the pattern people call the monsoon. It loads the atmosphere with water, the daily heating lifts that water, and the result is thunderstorms that build in the late morning and break in the early afternoon on a schedule reliable enough to set a watch by. Not every day -- most days, through the core of the season." },

  { kind: "p", text: "The response is a single planning rule that has kept more hikers alive than any piece of gear: be below treeline by noon. Start the summit push in the dark if you have to. Turn the exposed section into a dawn objective, not an afternoon one. The rule is blunt because the consequence is blunt -- the exposed high ground is exactly where the storm arrives, at exactly the hour you would otherwise be standing on it." },

  { kind: "p", text: "The noon rule is a default, calibrated for the average case. In a strong monsoon surge, storms fire by ten. Above treeline on a broad plateau there is no quick way down, so the safe turnaround shifts earlier still. And outside monsoon country -- maritime ranges, the northern Rockies in a frontal pattern -- the afternoon clock matters less than the front, which arrives at any hour. Know which regime you are in before you trust the clock." },

  { kind: "table", caption: "How the afternoon-storm risk shifts by region and pattern", head: ["Setting", "Storm timing", "Working turnaround", "What changes it"], rows: [
    ["Desert Southwest monsoon, Jul-Sep", "Builds late morning, breaks 12-3pm", "Below treeline by noon", "A strong surge fires storms by 10am"],
    ["Colorado / Southern Rockies summer", "Classic early-afternoon cells", "Off summits by noon, off ridges by 1pm", "Broad plateaus have no fast exit -- turn earlier"],
    ["Northern Rockies, frontal pattern", "Any hour, driven by the front", "Governed by the front, not the clock", "Read the forecast for frontal timing, not heating"],
    ["Maritime / coastal ranges", "Frontal and persistent, less diurnal", "Wind and rain matter more than lightning", "Hypothermia risk outruns lightning risk"],
    ["Shoulder season, any range", "Snow squalls over thunderstorms", "Weather-system driven", "Cold and whiteout replace the lightning problem"],
  ]},

  { kind: "p", text: "In monsoon country you are racing a clock that starts before dawn. Everywhere else you are reading a system, and the plan comes from the forecast and the front, not the hour. Do not carry a monsoon habit into a maritime range." },

  { kind: "h2", text: "Reading building cumulus" },

  { kind: "p", text: "Clouds are the readable output of the machine above, and cumulus is the one that matters most for staying alive. Fair-weather cumulus -- flat-bottomed, cotton-ball, more wide than tall -- is the sky telling you the lift is mild. The signal to watch for is vertical growth: when those flat puffs stack upward, growing taller than they are wide and hardening into cauliflower towers with sharp edges, the lift is strengthening and the storm engine is spinning up." },

  { kind: "p", text: "The progression runs cumulus, towering cumulus, cumulonimbus -- and the last is a thunderstorm. The tell is the top: when the crisp cauliflower head softens, spreads, and flattens into an anvil blowing downwind, the cloud has topped out and is fully organized. An anvil is not a warning of a future storm. It is a storm, and it often points the direction it is throwing lightning." },

  { kind: "h3", text: "Signs a storm is close" },

  { kind: "ul", items: [
    "Cumulus towers hardening and climbing fast -- growth you can watch over ten or fifteen minutes is a fast-building cell.",
    "The cloud base darkening to flat slate grey, and the air beneath it hazy or streaked where rain is already falling.",
    "A sudden cool downdraft or gusting wind ahead of the cloud -- the storm's outflow, often the first thing you feel.",
    "Any thunder at all. Thunder means lightning, and lightning means the storm is already within range of reaching you.",
    "Hair standing up, a buzzing or crackling from rock or metal, a blue glow on points -- the air is charging and a strike is imminent. Do not photograph it. Get low, now.",
  ]},

  { kind: "table", caption: "Cloud types and what they signal", head: ["Cloud", "Appearance", "What it signals", "Action"], rows: [
    ["Fair-weather cumulus", "Flat-based, puffy, wider than tall", "Mild lift, stable morning", "Proceed, keep watching for vertical growth"],
    ["Towering cumulus", "Cauliflower towers, taller than wide, sharp edges", "Lift strengthening, storm building", "Start down from exposed ground now"],
    ["Cumulonimbus", "Anvil top spreading downwind, dark base", "Active thunderstorm, lightning present", "Off ridges and summits, into cover"],
    ["Cirrus, thickening", "High wispy streaks turning to a milky sheet", "A front approaching in 12-24 hours", "Plan the next day around a weather change"],
    ["Lenticular", "Smooth lens or stack of plates over a peak", "Strong high-altitude wind, moisture aloft", "Expect fierce ridge wind; a change may follow"],
    ["Lowering, uniform stratus", "Grey deck settling onto the terrain", "Moisture and poor visibility, possible rain", "Watch for whiteout and cold-rain exposure"],
  ]},

  { kind: "h2", text: "Lightning: where to be and where not to be" },

  { kind: "p", text: "Lightning takes the path of least resistance to ground, and height and isolation lower that resistance. A person on a summit, a ridgeline, or an open meadow is the tallest isolated object around -- precisely what lightning is looking for. The strategy is to stop being that object: get low, get off the high ground, and put distance between yourself and anything that stands alone." },

  { kind: "p", text: "The danger is not only the direct strike. Most casualties come from ground current -- the charge spreading outward through rock and soil from a nearby strike -- and from side splash, where current jumps from a taller object to a person sheltering beside it. This is why the lone tree is a trap: it offers rain shelter and draws the strike that then jumps to you." },

  { kind: "h3", text: "The lightning position" },

  { kind: "p", text: "When a strike is imminent and you cannot reach real shelter, minimize your height and your contact with the ground. Crouch on the balls of your feet, feet together and heels touching, so any ground current has a short path that bypasses your core rather than running leg to leg through your torso. Wrap your arms around your knees, tuck your head, and crouch on an insulating pad if you carry one. Do not lie flat -- lying down maximizes your contact with ground current across your whole body." },

  { kind: "ol", items: [
    "Get off summits, ridgelines, and exposed high ground immediately -- descend even a hundred feet off a ridge to stop being the high point.",
    "Move away from lone trees, isolated boulders, fence lines, and anything metal, including trekking poles and pack frames -- set them aside a short distance away.",
    "Get away from open water and wet drainages; water spreads ground current efficiently and draws you into low, exposed terrain.",
    "In forest, move under an even stand of similar-height trees, not the tallest one -- uniform cover is far safer than a single prominent tree.",
    "Spread your group out, several strides apart, so one strike cannot injure everyone and someone is left able to help.",
    "Take the lightning position and hold it until the threat passes -- feet together on the balls of your feet, crouched low, on a pad if you have one.",
  ]},

  { kind: "note", text: "The lightning crouch is a last resort, not a plan. It improves your odds when a strike is seconds away and you are caught in the open; it does not make exposed ground safe. If you are reduced to the crouch on a summit, the real error was made an hour earlier when you did not turn around. The crouch buys margin the schedule should have bought." },

  { kind: "h2", text: "The 30/30 rule" },

  { kind: "p", text: "The 30/30 rule gives you two numbers for the two ends of the threat. The first thirty is the approach: count the seconds between a flash and its thunder, and if the gap is thirty or less, the storm is within about six miles and close enough to strike you. Take shelter -- do not wait for it to be overhead. Sound travels roughly a mile every five seconds, and lightning routinely jumps six miles from its cloud." },

  { kind: "p", text: "The second thirty is the departure, and it is the one people break. Wait a full thirty minutes after the last thunder before leaving shelter or returning to exposed ground. The back edge of a storm throws lightning as readily as the front, and strikes that hit people who thought it was over -- from a clearing sky, in returning sun -- are a documented, recurring pattern. The storm is done thirty minutes after the last thunder, not when the rain stops." },

  { kind: "table", caption: "Flash-to-bang distance and what to do", head: ["Seconds flash to bang", "Distance", "Threat level", "Action"], rows: [
    ["30 or more", "6+ miles", "Approaching, watch closely", "Move off exposed ground, plan your shelter"],
    ["15-30", "3-6 miles", "Close, within striking range", "Take shelter now, get low, spread the group"],
    ["Under 15", "Under 3 miles", "Immediate danger", "Lightning position, minimize height and contact"],
    ["No gap, flash and bang together", "Directly overhead", "Strikes landing around you", "Hold the crouch, do not move across open ground"],
    ["Last thunder heard", "Storm departing", "Still dangerous for 30 minutes", "Wait a full 30 minutes before moving out"],
  ]},

  { kind: "h2", text: "Hypothermia: the quiet killer" },

  { kind: "p", text: "Lightning is the dramatic mountain hazard and the rarer one. Hypothermia is the quiet one, and it kills more backcountry travelers -- often in summer, often above freezing, in people who never thought cold was the day's risk. It does not require snow. It requires being wet, in wind, without enough insulation to keep up with the heat you are losing. A 45-degree day with rain and a stiff breeze is a more efficient hypothermia machine than a dry night at 20." },

  { kind: "p", text: "The mechanism is heat loss outrunning heat production. Wet clothing conducts heat away roughly twenty-five times faster than dry. Wind strips the warm layer of air off your skin and speeds evaporation, cooling you further. Cotton is the specific trap: it soaks up water, holds it against the skin, and loses essentially all its insulating value when wet. Wool and synthetics keep insulating when damp; cotton does not." },

  { kind: "h3", text: "Recognizing it, in yourself and others" },

  { kind: "p", text: "The dangerous feature of hypothermia is that it degrades the judgment you would need to recognize it. Early signs are easy to dismiss and the later ones arrive after your thinking is already impaired -- which is why you watch your group rather than trust each person to self-report." },

  { kind: "ul", items: [
    "Early: persistent shivering, cold hands and feet, an urge to hurry, and mild clumsiness with zippers or buckles.",
    "Building: stumbling, slurred speech, fumbling -- the classic 'umbles': stumbles, mumbles, fumbles, grumbles.",
    "Worsening: shivering stops even though the person is still cold -- a warning sign of deepening hypothermia, not recovery.",
    "Behavioral: apathy, poor decisions, withdrawing from the group, and insisting they are fine while visibly not fine.",
    "The rule of thumb: if someone can no longer manage fine motor tasks or is acting out of character in the cold, treat it as hypothermia and act.",
  ]},

  { kind: "p", text: "The response is to stop the heat loss before it deepens: get the person out of wind and rain, swap wet layers for dry insulation, add a windproof, waterproof shell, insulate them from the ground, and give warm sweet drinks and food if they can swallow safely. Prevention is far easier than rescue -- put the shell on before you are soaked, eat before you are depleted, and add a layer at the first sustained shiver, not the fifth." },

  { kind: "table", caption: "Wind chill -- what moving air does to the temperature you feel", head: ["Air temp", "Calm", "10 mph wind", "20 mph wind", "30 mph wind"], rows: [
    ["40 F", "40 F", "34 F", "30 F", "28 F"],
    ["30 F", "30 F", "21 F", "17 F", "15 F"],
    ["20 F", "20 F", "9 F", "4 F", "1 F"],
    ["10 F", "10 F", "-4 F", "-9 F", "-12 F"],
    ["0 F", "0 F", "-16 F", "-22 F", "-26 F"],
  ]},

  { kind: "note", text: "Wind chill is calculated for dry skin. Wet the skin -- rain, sweat, spray, snowmelt -- and the effective cooling is worse than any column above, because evaporation removes heat the number never accounted for. Ridge wind of 30 mph on a 40-degree day feels like the high 20s dry, and far colder soaked -- a summer hypothermia setup on paper." },

  { kind: "h2", text: "The go / caution / turn-around decision" },

  { kind: "p", text: "All of it collapses into one repeated decision: keep going, proceed on a shortened leash, or turn around. Making it on evidence rather than on how much you want the summit is the whole skill. The table below is deliberately conservative, because the cost of turning around needlessly is a wasted morning and the cost of the opposite error is not." },

  { kind: "table", caption: "Decision table by observed condition", head: ["Condition", "Go", "Caution", "Turn around"], rows: [
    ["Sky", "Clear or flat fair-weather cumulus", "Cumulus towering, growing vertically", "Anvil tops, dark bases, or any thunder"],
    ["Time vs. treeline", "Below treeline or well ahead of noon", "Approaching noon, still climbing", "Exposed ground with noon passed"],
    ["Thunder", "None", "Distant, gap over 30 seconds", "Gap 30 seconds or less"],
    ["Wind and wet", "Light wind, dry", "Rising wind, showers starting", "Sustained cold wind with rain, group chilling"],
    ["Group state", "Warm, fed, moving well", "One person tiring or underdressed", "Any sign of the umbles or fine-motor loss"],
    ["Route ahead", "Exit or cover close at hand", "Long exposed section remaining", "Committing to exposure with a storm building"],
  ]},

  { kind: "p", text: "Read it as an any-column rule, not an average: one entry in the turn-around column outweighs five in the go column. Building anvils with a warm, fast group and a clear exit is still a turn-around -- the sky is what kills, and group state will not argue you out of a strike." },

  { kind: "h2", text: "Turning around is the strong decision" },

  { kind: "p", text: "The culture that frames turning back as failure gets people hurt. The mountain is a fixed objective, holding the same position next season; weather is the variable. A rider who turns around has not lost the mountain -- only deferred it under conditions they read correctly, which is the competence the sport rewards." },

  { kind: "p", text: "The strong version of the decision is made early and cheaply. The trap is the sunk-cost climb: the higher you are and the more the morning cost, the harder it is to give up the last few hundred feet -- exactly the terrain and the hour where the storm arrives. Set a hard turnaround time before you start, tie it to the noon rule and the building sky, and honor it whether or not you reached the top. A turnaround time you renegotiate on the ridge was never one." },

  { kind: "p", text: "Frame it as a hunt, not a conquest, and the decision gets easier. You are not there to force one outcome on one day -- you read the ground, take what conditions offer, and bring the intel back for the next attempt. Riders who run long seasons treat a clean turnaround as a skill shown, not a summit surrendered. Standing on top is one data point. Getting down every time is the record that lets you keep hunting." },

  { kind: "h2", text: "What to carry and check before you commit the day" },

  { kind: "p", text: "None of the reading skill replaces preparation. A short kit turns a bad afternoon from an emergency into an inconvenience, and the layers are the margin that keeps a soaking on an exposed ridge from becoming hypothermia." },

  { kind: "ol", items: [
    "Pull the mountain forecast, not the town forecast -- a point forecast for the elevation and the peak, read for storm timing and wind, not just the high temperature.",
    "Check for any weather watch or warning in effect, and note the expected frontal timing if a system is moving through.",
    "Carry a windproof, waterproof shell top and bottom regardless of the morning's warmth -- the single item that prevents wind-driven hypothermia.",
    "Carry insulating layers that keep working wet: wool or synthetic, never cotton against the skin.",
    "Carry more food and water than the day seems to need; heat production and clear thinking both run on fuel.",
    "Set a hard turnaround time tied to the noon rule, and tell someone your route and your expected return.",
  ]},

  { kind: "key", text: "The forecast and the sky-reading tell you the pattern and the odds. They do not tell you whether the pass is holding snow this week, whether the creek is running high after last night's storm, or what the wind is doing on the ridge right now. Those are current conditions, and they come from someone recently on that ground. On Vanism, a site record carries the date a rider last confirmed it and what they found -- weather and route conditions included -- the layer no static forecast holds. Plan from the forecast at the desk; confirm the conditions before you commit the day." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "Everything above is the general framework, and the framework is a starting point, not an authority for a specific mountain on a specific day. The noon rule assumes a monsoon regime. The 30/30 rule assumes you can hear thunder over wind and water. The wind-chill figures assume dry skin. Each has a boundary where local knowledge and current conditions take over." },

  { kind: "p", text: "The authoritative source for a specific range is local: the ranger district or park office that watches that weather every day, the current point forecast for that elevation, and the report from riders on the ground this week. A ten-minute call beats any amount of general reading -- including this. Read the sky yourself, carry the margin, and turn around early. The mountain keeps. Make sure you do too." },
];
