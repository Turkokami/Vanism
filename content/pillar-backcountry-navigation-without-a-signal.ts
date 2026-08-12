import type { Block } from "./blocks";

/** Backcountry navigation without a signal -- Vanism pillar. */
export const PILLAR_BACKCOUNTRY_NAVIGATION_WITHOUT_A_SIGNAL: Block[] = [
  { kind: "key", text: "Before you leave the last bar of signal, download the offline map for the whole area and carry a paper topo and a baseplate compass you know how to use. The phone and the GPS unit are fast, but they run on batteries and firmware; the map and compass are the system that never dies. When you are unsure of your position, stop moving, and back-track to the last point you can positively identify rather than pushing on to guess." },

  { kind: "p", text: "Navigation in the backcountry is not one skill. It is a stack of them, arranged so that when the top layer fails the one beneath it still works. At the top is the phone: fast, precise, first to die when the battery drains or the cold kills it. At the bottom is a paper map and a compass, slower and demanding practice, but working in a whiteout on day four with a dead power bank. A rider who can only use the top layer is one dead battery from being lost." },

  { kind: "p", text: "The hunt for a site or a summit does not end at the trailhead. Reaching a place on foot, off-trail, with no bars and a battery you cannot spare, is the part of the run that separates a planned arrival from a search-and-rescue callout. The skills are old, teachable, and reliable in a way no app is. This page walks the stack layer by layer. Where a number is given it is a working default; the authoritative source for a specific area is the district office and the current map for that ground." },

  { kind: "h2", text: "Download the maps before you leave signal" },

  { kind: "p", text: "The most common navigation failure is not a broken compass. It is a rider who assumed the map app would load and drove out of coverage with nothing cached. Offline maps must be downloaded while you still have signal -- at the desk before the run, not in the last parking lot." },

  { kind: "p", text: "Every serious phone mapping app -- Gaia, CalTopo, onX, Avenza -- lets you download a defined region for offline use. The catch is that you download a box, and if you leave the box you leave the map. Draw it larger than your route: a bail-out down the wrong drainage takes you off a tightly-drawn download when you need it most." },

  { kind: "h3", text: "What to actually cache" },

  { kind: "ul", items: [
    "The topographic base layer for the whole area, at least ten miles either side of the route -- not just the trail corridor.",
    "A satellite or aerial layer too; it shows vegetation, water, and old road scars the topo does not.",
    "The maximum zoom level you will want -- many apps download coarse tiles by default and the detail is missing when you pinch in.",
    "Your planned route saved as a file on the device, not held in a browser tab that expires.",
    "A separate copy of the key waypoints -- the van, the trailhead, water.",
  ]},

  { kind: "note", text: "A downloaded map still needs the phone alive to show it. Offline maps solve the signal problem; they do nothing about the battery problem, whose answer is the paper map. Never let the download convince you the paper is optional." },

  { kind: "h2", text: "The georeferenced topo, and reading contour lines" },

  { kind: "p", text: "A topographic map is the terrain written down. The brown contour lines each trace a single elevation, and everything about the shape of the ground is in how they sit relative to each other. Reading them is the highest-value navigation skill there is: it lets you match the map to the land without any device at all." },

  { kind: "p", text: "A georeferenced topo is the same map with coordinates baked in, so a GPS can place a dot showing where you stand -- the fastest position fix available, and the one that vanishes when the battery does. That is why reading the paper underneath it matters." },

  { kind: "h3", text: "Contour spacing is slope" },

  { kind: "p", text: "The rule is the foundation of everything else: lines close together mean steep ground, lines far apart mean gentle ground, lines merged into a dark band mean a cliff. The vertical distance between lines is the contour interval, printed in the margin -- commonly 40 feet on a 1:24,000 US topo. Count the lines you cross and you know how much you climbed." },

  { kind: "table", caption: "Contour spacing and what the terrain is doing", head: ["Contour spacing", "Approx. slope", "Terrain", "What it means on foot"], rows: [
    ["Very wide, far apart", "0-5 degrees", "Flat bench, meadow, valley floor", "Easy walking; good ground for a camp or a break"],
    ["Evenly spaced, moderate", "5-15 degrees", "Steady hillside", "Sustained climb; pace yourself, count contours to gauge progress"],
    ["Close together", "15-30 degrees", "Steep slope", "Slow, tiring; look for a line that eases the grade"],
    ["Very close, near-touching", "30-45 degrees", "Very steep, loose", "Hands may be needed; loose rock and fall risk"],
    ["Merged into a band", "Over 45 degrees / vertical", "Cliff or crag", "Impassable on foot; route around it, do not commit blind"],
  ]},

  { kind: "h3", text: "The shapes: saddles, drainages, spurs" },

  { kind: "p", text: "Individual features have signatures you can read at a glance -- the fix that lets you place yourself from the ground, with no power." },

  { kind: "ul", items: [
    "A saddle -- a low point on a ridge between two high points -- shows as an hourglass, contours pinching in from both sides. It is the natural place a route crosses a ridge, and the place to aim for.",
    "A drainage or valley shows as contours forming a V or U pointing uphill, toward higher ground. Water runs down the point of the V.",
    "A spur or ridge shows as a V or U pointing downhill, away from the high ground. Spurs are often easier walking -- drier, less brushy -- than the drainages beside them.",
    "A summit or knoll shows as a closed loop with higher ground inside; the same loops with hachure ticks pointing inward mark a depression, not a peak.",
  ]},

  { kind: "h3", text: "Aspect, and why it changes the day" },

  { kind: "p", text: "Aspect is the direction a slope faces, read from which way the contours fall. In the northern hemisphere a north-facing slope holds snow weeks longer and stays cold and wet; a south-facing slope melts out first and dries fast. A route identical in distance can be a snow-choked slog on one aspect and clear ground on the other. Read aspect off the map before you commit to a slope, not after you are post-holing up it." },

  { kind: "h2", text: "Map and compass: the system that never dies" },

  { kind: "p", text: "The baseplate compass and the paper map are the base of the stack. No battery, no firmware, no signal dependency, no failure mode a cold night introduces -- a magnetized needle and a printed sheet do not stop working. It is the layer you fall back to when everything with a screen is dead, and the one worth the most practice." },

  { kind: "p", text: "The system rests on four things: declination, taking a bearing, following a bearing, and the terrain tricks -- handrails, catching features, aiming off -- that make a bearing forgiving instead of brittle." },

  { kind: "h3", text: "Declination: true north versus magnetic north" },

  { kind: "p", text: "The needle points to magnetic north; the map grid points to true north. The angle between them is declination, and it varies across the continent -- around 15 degrees east in the Pacific Northwest, 15 degrees west in Maine, near zero through the middle of the country. Ignore it and a bearing held over a few miles walks you a long way off." },

  { kind: "p", text: "The fix is to set declination once, on the compass, for the area you are in. A compass with an adjustable declination scale lets you dial it in and forget it -- every bearing then reads true north automatically. The figure in the map margin drifts over years, so confirm the current value from a recent source. It is the one number worth getting exactly right before the run." },

  { kind: "table", caption: "Navigation tools compared", head: ["Tool", "Reliability", "Power / signal", "Learning curve", "Best role"], rows: [
    ["Paper topo + baseplate compass", "Very high -- no failure mode in the field", "None required", "Steep; needs real practice", "The base layer; never turn it off"],
    ["Dedicated GPS unit", "High; rugged, cold-tolerant", "Batteries (swappable AA on many)", "Moderate", "Precise fixes; long trips where you carry spares"],
    ["Phone GPS app (offline maps)", "Moderate; fragile hardware", "Battery-hungry; cold-sensitive", "Gentle", "Fast fixes and planning; not a sole system"],
    ["Satellite messenger / PLB", "High for its one job", "Battery; needs sky view", "Low", "Emergency comms, not navigation"],
    ["Altimeter (watch or barometric)", "Good; drifts with weather", "Battery (low draw)", "Low", "Confirming position by elevation on a climb"],
  ]},

  { kind: "h3", text: "Taking a bearing from the map" },

  { kind: "p", text: "A bearing is a direction in degrees, and taking one from the map turns two points into a heading you can walk. With declination already set, the procedure is mechanical." },

  { kind: "ol", items: [
    "Lay one long edge of the compass connecting where you are to where you want to go, direction-of-travel arrow pointing at the destination.",
    "Turn the bezel until its orienting lines line up with the map's north-south grid lines, bezel north pointing to map north.",
    "Read the bearing at the index line. That is your heading.",
    "Lift the compass off the map, hold it flat in front of you, and turn your whole body until the needle sits inside the orienting arrow -- \"red in the shed\".",
    "The direction-of-travel arrow now points where you go. Pick a landmark on that line and walk to it.",
  ]},

  { kind: "h3", text: "Following a bearing over ground" },

  { kind: "p", text: "You do not walk staring at the compass. You sight along the bearing to a fixed object -- a distinct tree, a rock, a notch on the skyline -- walk to it without watching the needle, then take the next sight. In dense timber or fog the sights get shorter. Over broken ground, the discipline is to return to the line each time rather than letting detours bend your course." },

  { kind: "h2", text: "Handrails, catching features, and aiming off" },

  { kind: "p", text: "A raw bearing is brittle: a couple of degrees of error over two miles puts you a few hundred feet off, and if the target is small you miss it without knowing which side. The terrain techniques make navigation forgiving, so small errors do not compound." },

  { kind: "h3", text: "Handrails" },

  { kind: "p", text: "A handrail is a linear feature running roughly parallel to your route that you keep beside you as a guide -- a stream, a ridgeline, a trail, a forest edge. Instead of holding a precise bearing you follow the handrail, checking it against the map. It is faster and far more error-tolerant than a bearing across featureless ground." },

  { kind: "h3", text: "Catching features" },

  { kind: "p", text: "A catching feature, or backstop, is something obvious lying just beyond your destination that tells you, if you reach it, that you have gone too far -- a river, a road, a sharp drop. You set it before you leave: \"if I hit the creek, I have overshot the saddle and need to turn back.\"" },

  { kind: "h3", text: "Aiming off" },

  { kind: "p", text: "Aiming off deals with a target on a line -- a bridge on a river, a car at a trailhead along a road. Aim straight at it and drift, and you arrive at the line not knowing whether to turn left or right. So you deliberately aim to one side by several degrees; when you hit the line you know which way to turn. A deliberate, known error beats an accidental, unknown one." },

  { kind: "note", text: "These three stack. A typical off-trail leg follows a handrail as far as it goes, aims off toward a known line, hits a catching feature that confirms the turn, then uses a short bearing for the final approach." },

  { kind: "h2", text: "GPS units and phone apps: fast, and battery-dependent" },

  { kind: "p", text: "A GPS fix is the fastest, most precise position information you can get -- on a georeferenced topo it places you within a few metres, instantly, with no map-reading skill required. The cost is that every device with a screen depends on a battery and, for the phone, on hardware not built for a cold, wet, dropped life in the backcountry." },

  { kind: "p", text: "A dedicated GPS unit runs on swappable AA batteries, tolerates cold far better, and survives being dropped on rock. A phone is more capable and more fragile, and its battery is also running your camera and messages. Treat it as a fast tool, not the system." },

  { kind: "h3", text: "Making the battery last" },

  { kind: "ul", items: [
    "Airplane mode is the biggest single win -- a phone hunting for signal it cannot find drains fastest, and GPS still works in airplane mode because it only receives.",
    "Keep the phone warm. Cold murders lithium batteries; a phone at freezing can lose half its charge or shut off. Inner pocket, against the body.",
    "Screen off between checks -- the display is the largest draw. Take a fix, note it, put it away.",
    "Carry a power bank sized to the trip and treat it as finite: a 10,000 mAh bank is roughly two to three charges, less in the cold.",
    "Do not navigate by watching the moving dot. It flattens the battery and stops you learning the ground.",
  ]},

  { kind: "note", text: "A dead phone is not a navigation problem if the paper map and compass are in your pocket and you can use them. It is a crisis only for the rider who never built the layer beneath it. Carry the base layer and the battery becomes a convenience." },

  { kind: "h2", text: "Mark the van and the trailhead" },

  { kind: "p", text: "The most important waypoint of the day is set before you take a single step: where you left the van. The second is where the trail leaves the road. These are the points you must return to in the dark, tired, possibly with a dead phone. Marking them is thirty seconds of work that prevents walking out a drainage to find the vehicle gone." },

  { kind: "ol", items: [
    "Drop a named waypoint at the van the moment you park.",
    "Write the coordinates on paper too -- a fix that lives only in a device you might drain is not a backup.",
    "Note the elevation and drainage. \"3,200 feet, mouth of the north fork\" is a position you can find by map and altimeter alone.",
    "At the trailhead, look back the way you will return. A junction obvious on the way in can be invisible on the way out.",
    "Set a catching feature for the return -- the road is usually the backstop: walk downhill to it and turn toward the van.",
  ]},

  { kind: "p", text: "The road is why aiming off matters on the walk out. If the van sits along a road running east-west below you and you deliberately aim to come out west of it, then when you hit the road you turn east with certainty. Aim straight at the van and drift, and you reach the road guessing." },

  { kind: "h2", text: "When you are unsure of your position" },

  { kind: "p", text: "Everyone gets disoriented. The skill is not never being unsure -- it is what you do in the first two minutes, because those minutes decide whether it stays a small problem or becomes a search. The instinct is to keep walking and hope the ground makes sense again, and that is the most reliable way to turn confusion into being lost. The old acronym is STOP: Stop, Think, Observe, Plan." },

  { kind: "ol", items: [
    "Stop. Sit down. Every step from an unknown position makes it more unknown. Eat something; low blood sugar reads as panic.",
    "Think. When were you last certain of where you were, and what have you done since -- crossed a stream, climbed a saddle, turned at a junction?",
    "Observe. Match what you see to the map. Which way do the drainages run? Where is the sun? What feature can you identify to orient the map?",
    "Plan. Decide before you move. If you can positively fix your position, set a bearing to the next known point. If not, back-track.",
  ]},

  { kind: "h3", text: "Back-track to a known point" },

  { kind: "p", text: "If you cannot confirm where you are, the correct move is almost always to return to the last place you could. A known point behind you is worth more than a hoped-for one ahead. Retrace your steps to the junction, the stream crossing, the saddle -- whatever you last identified with certainty -- and start the leg again, more carefully. It feels like losing ground; it is the fastest route back to a solved problem." },

  { kind: "p", text: "Pushing on downhill \"because water leads out\" is the folklore that kills people. In much of the West, following a drainage down leads into a canyon that cliffs out or brush that stops you cold, not to a road. Down is not out. The known point behind you is." },

  { kind: "table", caption: "Unsure of your position: do and do not", head: ["Situation", "Do", "Do not"], rows: [
    ["First moment of doubt", "Stop where you are; sit down", "Keep walking to \"see if it makes sense\""],
    ["Can identify position on the map", "Set a bearing to the next known point", "Trust the phone dot alone without a sanity check"],
    ["Cannot identify position", "Back-track to the last certain point", "Continue forward hoping to recognize something"],
    ["Light is failing", "Stop, make camp, resume at first light", "Navigate hard terrain in the dark while lost"],
    ["Genuinely lost, no fix possible", "Stay put; make yourself findable; use the messenger", "Wander; split from your group; ration nothing and move fast"],
  ]},

  { kind: "h2", text: "Building the redundant system" },

  { kind: "p", text: "No single tool is the answer. The stack works because each layer covers the failure mode of the one above it." },

  { kind: "table", caption: "The navigation stack, top to bottom", head: ["Layer", "Speed", "Fails when", "Covered by"], rows: [
    ["Phone app + offline maps", "Fastest", "Battery dies, cold, dropped, out of download box", "The GPS unit and the paper map"],
    ["Dedicated GPS unit", "Fast", "Batteries dead, no spares", "The paper map and compass"],
    ["Paper topo + compass", "Slow, sure", "You never learned to use it", "Practice, before the trip"],
    ["Terrain sense (contours, aspect)", "Immediate", "Featureless ground, whiteout", "Handrails and catching features"],
    ["Satellite messenger", "N/A for nav", "No sky view, dead battery", "Prevention -- it is the last resort"],
  ]},

  { kind: "p", text: "Carry the whole stack and any single failure is an inconvenience. Carry only the top and any single failure is an emergency. A paper map you cannot read is weight without a system, and in cold weather the batteries, spares and power bank belong in a warm layer against your body -- a spare that has sat at 20 degrees delivers a fraction of its charge." },

  { kind: "h2", text: "Practice before you need it" },

  { kind: "p", text: "Every technique on this page degrades to useless without repetition. Declination set wrong, a bearing taken from the wrong edge of the compass, a handrail followed backward -- these are the errors of someone using the skill for the first time under stress, which is the wrong time to learn it." },

  { kind: "ul", items: [
    "Take and follow a bearing on ground you know, then check it against the phone. Do it until \"red in the shed\" is reflex.",
    "Read position from contours alone -- phone in the pack -- then confirm. The confirmation teaches you how close your read was.",
    "Set and find a waypoint for your own vehicle at a trailhead, then navigate back by map, before you rely on it deep in a run.",
    "Learn your pace count: how many double-steps cover 100 metres, flat and uphill. It is how you measure distance when nothing else can.",
    "Deliberately get \"lost\" on safe ground and drill STOP-and-back-track, so the response is trained rather than invented in a bad moment.",
  ]},

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "Everything above is the general framework, and it meets its limit at the specific piece of ground you are standing on. A drainage that reads as a clean walk-out on the topo can be a brush-choked box canyon on the ground, and the map will not warn you. Seasonal snow, a washed-out crossing, a burn that erased the trail -- none of that is on the sheet in your pocket." },

  { kind: "p", text: "The map tells you the shape of the land and the rules of reading it. It does not tell you the current condition of a route, and that gap turns a good plan into a bad afternoon. A route logged as clear last spring is a claim about last spring, not the snow line today; a Vanism check-in carries the date a rider last stood there -- which is what a confirmation is worth, and no substitute for the map in your pocket." },

  { kind: "p", text: "The authoritative source for a specific area is the local one: the ranger district or field office that manages the ground, the current map for that quad, and whoever was last on the route. Call the district office before a committing run -- they know what melted out and what washed away this season, and ten minutes on the phone beats any amount of reading, including this. Carry the skills, verify the ground, and stand where the map said you could." },
];
