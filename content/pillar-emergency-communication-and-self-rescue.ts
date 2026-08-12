import type { Block } from "./blocks";

/** Emergency communication and self-rescue -- Vanism pillar. */
export const PILLAR_EMERGENCY_COMMUNICATION_AND_SELF_RESCUE: Block[] = [
  { kind: "key", text: "Where there is no cell signal, a satellite messenger or a personal locator beacon summons help, and the two differ: a messenger sends two-way texts over a paid subscription, a beacon sends an SOS-only distress signal on a government network with no subscription. But the higher-value item costs nothing -- a written trip plan left with one reliable person, carrying your route and a hard check-in time, is what starts a search on the day it matters. Most incidents never reach that point; they are handled on the spot by a rider who knew their limits, turned around early, and treated a small problem before it compounded." },

  { kind: "p", text: "Calling for help off the grid is a two-layer problem, and most people think only about the first layer -- the device in your pack that reaches a satellite when no tower will. The second layer does more work over a season: the plan that means you rarely have to reach for the device at all. A rider who plans the run, carries the right small kit, and turns around when the ground says to will go years without pressing an SOS button. This page is built in that order: the plan first, the self-rescue habits second, the hardware as the last line." },

  { kind: "p", text: "The framing matters because the marketing runs the other way. The industry sells beacons and messengers as the answer, and they are a genuine answer to a real emergency correctly signalled where there is no other way to call out -- but a device bought instead of a plan is carried by someone more likely to need it. This is written for riders and hikers who go where the signal stops -- forest roads past the last bar, trailheads that start at a dead zone, desert ground far from a paved highway." },

  { kind: "h2", text: "The two questions that decide your whole setup" },

  { kind: "p", text: "Before any product comparison, two questions settle most of the decision. First: do you need to send words, or only a distress signal? Two-way messaging lets you say what is wrong, stand down a rescue you no longer need, and let the people at home see you moving each night. SOS-only means one button, one meaning: send help to this position. Second: will you pay a subscription to keep a device live? Messengers require one; the classic beacon does not." },

  { kind: "p", text: "The honest general rule: a rider who travels solo, works to a schedule, or wants the people at home to sleep buys a two-way messenger and accepts the subscription as its cost. A rider who wants only the cheapest, most durable, longest-lived distress signal buys a personal locator beacon. Many serious parties carry one of each, because they fail in different ways and the second covers the first." },

  { kind: "h2", text: "Satellite messengers and personal locator beacons, distinguished" },

  { kind: "p", text: "The terms get used interchangeably and they should not be. A personal locator beacon (PLB) is a registered distress transmitter that broadcasts on 406 MHz to the international Cospas-Sarsat system -- the same government network that handles aviation and maritime distress. It has no subscription and one function: pressing it declares an emergency and hands your position to the rescue coordination centre. A satellite messenger is a consumer device on a commercial network (Iridium or Globalstar) carrying two-way text, tracking, and an SOS routed through a private monitoring centre, and it requires an active paid plan to do anything at all." },

  { kind: "p", text: "The distinction has consequences the day you need it. A beacon works the moment it is registered, forever, with no plan to lapse -- but it cannot say what is wrong or report that you are fine and moving. A messenger does all of that, and can be turned into a dead brick by an expired subscription you never noticed. Neither is strictly better." },

  { kind: "table", caption: "Satellite emergency device types compared", head: ["Type", "Two-way messaging", "Subscription", "Network", "Battery reality", "Best for"], rows: [
    ["Personal locator beacon (PLB)", "No -- SOS only", "None; registration is free", "Cospas-Sarsat 406 MHz (government)", "Non-rechargeable cell rated ~5-7 years standby, 24-48h transmitting", "The cheapest reliable distress signal; a backup to a messenger"],
    ["Two-way satellite messenger", "Yes -- free-text and preset", "Required, roughly $12-40/month or annual", "Iridium or Globalstar (commercial)", "Rechargeable; days of tracking, less in cold, recharge in the field", "Solo riders, working riders, anyone wanting home to see check-ins"],
    ["Messenger, SOS-tier plan", "Limited or preset only", "Required, cheaper tier", "Iridium or Globalstar", "Same as above", "Riders who want SOS plus tracking but not full conversation"],
    ["Phone satellite SOS (built-in)", "Emergency texts only, no general use off-grid", "Bundled with phone for a period, then unclear", "Varies by handset/carrier", "Ties up your phone battery -- the thing you most need to conserve", "A supplement, never the primary plan"],
  ]},

  { kind: "note", text: "A PLB is only as good as its registration. An unregistered beacon still transmits a position, but responders have no name, no emergency contact, and no trip detail to work from, which slows everything. Registration is free, takes ten minutes, and is the single step people most often skip." },

  { kind: "note", text: "Newer phones can send emergency texts by satellite where there is no signal, which beats nothing but is not a substitute for a dedicated device: it drains the one battery you most need to preserve, needs a clear patch of sky for a fix, and its coverage and terms are still uneven. Treat it as a bonus, not the reason to skip a messenger or beacon." },

  { kind: "h2", text: "What actually happens when you press SOS" },

  { kind: "p", text: "The button is the easy part; what it sets in motion depends entirely on which device you pressed. A PLB routes to Cospas-Sarsat and lands at a government rescue coordination centre -- in the United States, the Air Force for inland incidents and the Coast Guard for maritime. They confirm the registration, try your emergency contacts to rule out a false alarm, and task the appropriate local search and rescue. There is no conversation with you. A messenger's SOS routes instead to a private monitoring centre staffed around the clock, which texts you back -- what is wrong, how many in the party, can you move -- then coordinates with the same responders. That two-way link lets them size the response and, critically, lets you cancel it." },

  { kind: "table", caption: "The SOS response chain by device", head: ["Step", "Personal locator beacon", "Two-way messenger"], rows: [
    ["Signal goes to", "Government satellite network, then national rescue coordination centre", "Commercial satellite, then private 24/7 monitoring centre"],
    ["Can they message you", "No -- one-way only", "Yes -- they confirm the nature of the emergency by text"],
    ["Who is dispatched", "Local search and rescue, sheriff, or park service via the centre", "The same local responders, coordinated by the monitoring centre"],
    ["Can you stand it down", "Only via your emergency contacts confirming a false alarm", "Yes -- directly, by text, which prevents a needless launch"],
    ["Typical time to first contact", "Minutes to satellite; response time set by terrain and crew", "Minutes to satellite; often faster triage from the two-way link"],
  ]},

  { kind: "p", text: "Two things follow. First, an SOS is not a taxi. The people who respond are often volunteer search and rescue putting themselves into the same terrain that caught you, at night, sometimes by helicopter. The button is for a situation you genuinely cannot resolve -- a serious injury, an unfindable route out, a life on the line -- not for tiredness or embarrassment. Second, cancel a call the instant it is no longer needed; a two-way messenger can stand down a launch before a crew is committed, which is one of the strongest arguments for carrying one." },

  { kind: "note", text: "A false SOS you cannot cancel still sends people into the field. If you press a PLB and then self-rescue, get word out through your emergency contacts as fast as you can so the coordination centre can call off a response that is already moving." },

  { kind: "h2", text: "The trip plan: the highest-value safety item, and it is free" },

  { kind: "p", text: "No device on this page matters as much as a sheet of paper left with one reliable person. A trip plan -- where you are going, which route, what you drive, when you will check in, and what to do if you do not -- turns a missed check-in into a search that starts today, not whenever somebody happens to wonder where you went. It does the one thing no beacon can: it starts the response when you are unconscious, out of battery, or pinned somewhere you cannot reach a device." },

  { kind: "p", text: "The mechanism is the check-in time. A hard time -- \"if you have not heard from me by 6 PM Tuesday, call this number\" -- converts silence into a signal. Without it, your absence means nothing until it is very late. Vagueness is the enemy. \"Back sometime this weekend\" starts no search. \"Out of the trailhead by Sunday noon, call the county sheriff at this number if not\" starts one at 12:01." },

  { kind: "table", caption: "Trip-plan template -- leave this with one reliable person", head: ["Field", "What to write", "Why it matters"], rows: [
    ["Rider and party", "Names, number in party, relevant medical notes", "Sizes the response and warns responders of conditions"],
    ["Vehicle", "Make, color, plate; where it will be parked", "The parked vehicle is often the first thing found"],
    ["Route in", "Trailhead or forest road, planned track, intended camps", "Narrows the search area from a county to a corridor"],
    ["Route out", "Exit point and any alternate you would take", "Tells searchers where to look if you diverted"],
    ["Check-in time", "A hard date and time you will make contact", "The trigger -- silence past this hour means act"],
    ["If no check-in", "Exactly who to call and at what number", "Removes the guesswork that wastes the first hours"],
    ["Devices carried", "Messenger/PLB make and ID, phone number, carriers", "Lets responders query your track or beacon registration"],
    ["Turnaround rules", "Conditions under which you will abort", "Signals to home that a delay may be a normal abort, not a crisis"],
  ]},

  { kind: "p", text: "Give the person an explicit buffer -- most late arrivals are a slow road or a longer hike, not a crisis -- and update the plan when it changes. A plan describing a route you abandoned sends searchers to the wrong drainage, which is worse than no plan at all." },

  { kind: "note", text: "A messenger's tracking feature is a live trip plan, but it does not replace the paper one. Tracking goes dark exactly when a device fails or a battery dies. The person holding your written plan and your check-in time is the backstop for the case the device cannot cover." },

  { kind: "h2", text: "The self-rescue mindset" },

  { kind: "p", text: "The great majority of backcountry incidents are resolved without any rescue. Someone turns around, treats a blister, waits out a storm, or backs off a road that got worse than the map implied. Self-rescue is not a heroic skill; it is the ordinary competence of handling your own situation, and it is what keeps the SOS button unused. The mindset is simpler than the gear: know your limits, decide turnarounds in advance, treat small problems while they are still small." },

  { kind: "h3", text: "Know your limits and set the turnaround before you go" },

  { kind: "p", text: "The strongest self-rescue decision is made at the desk, before the run starts, when you are calm and not invested in the ground ahead. Set a turnaround time or point in advance -- \"if we are not at the pass by 1 PM, we turn\" -- and honor it regardless of how close the objective feels. The instinct that gets people into trouble is the sunk cost of the miles already covered; a decision made in advance beats one negotiated with yourself while tired, late, and committed." },

  { kind: "p", text: "The same logic governs a forest road: establish where the last turning point is before committing a long-wheelbase vehicle to a narrowing track, and turn there rather than miles further on in reverse. Turning around early is the run working as designed, and the objective will be there next season to hunt again." },

  { kind: "h3", text: "Treat small problems before they compound" },

  { kind: "p", text: "Nearly every serious backcountry situation is a small one that was ignored. A hot spot becomes a blister becomes a limp becomes a party moving at half speed into the dark; a little dehydration becomes a headache becomes poor judgment becomes a bad step. The self-rescue habit is to deal with the small thing the moment it appears, because two minutes now costs far less than the cascade it prevents." },

  { kind: "ul", items: [
    "Tape a hot spot the moment you feel it, not at the next break. A managed hot spot costs nothing; a burst blister can end a hike.",
    "Drink and eat on a schedule, not on thirst and hunger, which both lag the actual deficit in cold and at altitude.",
    "Add a layer before you are cold and shed one before you sweat it out -- wet insulation in the cold is a genuine hazard, not a discomfort.",
    "Fix a navigation doubt while you can still see where you came from -- backtracking to a known point beats pressing on into a guess.",
    "Rest before exhaustion, which is where the bad decisions and the bad footing live.",
  ]},

  { kind: "h2", text: "A basic wilderness first-aid kit and what it treats" },

  { kind: "p", text: "A backcountry kit is built around the injuries that actually happen far from help, not a hospital's worth of supplies you will never deploy. The common cases are wounds, blisters, sprains, burns, and the slow problems -- dehydration, cold, allergic reactions. The kit that treats those is small, and the skill to use it matters more than its contents." },

  { kind: "table", caption: "Core wilderness first-aid kit and what each part addresses", head: ["Item", "Addresses", "Note"], rows: [
    ["Assorted dressings and gauze", "Cuts, lacerations, abrasions", "Bleeding control comes first; carry enough to apply real pressure"],
    ["Roller bandage / elastic wrap", "Sprains, holding dressings, splint support", "The most versatile single item; stabilizes an ankle to walk out"],
    ["Blister care (tape, moleskin, dressings)", "The most common trip-ending injury on foot", "Manage the hot spot early and this rarely escalates"],
    ["Wound cleaning (irrigation, antiseptic)", "Infection risk far from care", "Clean thoroughly; infection is the slow danger in the backcountry"],
    ["Trauma pad or hemostatic gauze", "Serious bleeding", "For the low-probability, high-consequence wound; know how to use it"],
    ["Splinting material (padded, or improvised)", "Fractures, severe sprains", "A stabilized limb is the difference between walking out and a carry"],
    ["Personal meds, antihistamine, pain tablets", "Chronic conditions, allergic reactions, pain, swelling, fever", "Carry your own prescriptions plus an allergy response; keeps a rider mobile"],
    ["Gloves, tape, trauma shears, blanket", "Clean treatment, securing, cutting, warmth", "The emergency blanket also doubles as shelter and signal"],
  ]},

  { kind: "p", text: "Repack the kit after every trip, so the thing you reach for is present and in date rather than used up three runs ago. And remember the goal of backcountry first aid is not to fix the injury -- it is to stabilize the rider enough to self-rescue, or to keep them alive and warm until help arrives." },

  { kind: "note", text: "Water and warmth are first-aid items even though they never look like one. Dehydration and cold degrade judgment and physical capacity before they threaten life, and they underlie a large share of incidents. The kit that prevents the most emergencies is a full water supply, spare insulation, and the discipline to use both early." },

  { kind: "h2", text: "Battery and cold, the failure mode that disables all of it" },

  { kind: "p", text: "Every device on this page runs on a battery, and cold is quietly hostile to batteries. A messenger that showed three days of tracking at room temperature can lose a large fraction of that in freezing conditions, and a phone can drop from half charge to dead in an hour cold-soaking in a pack lid. A plan that assumes full battery life at 20 degrees Fahrenheit fails at the worst time, since cold and remoteness tend to arrive together." },

  { kind: "table", caption: "Cold and battery behavior for field devices", head: ["Factor", "What happens", "What to do about it"], rows: [
    ["Lithium-ion in the cold", "Capacity and voltage drop sharply below freezing; the device may read empty when it is not", "Keep it in an inside pocket against the body; warm it before assuming it is dead"],
    ["Non-rechargeable PLB cell", "Far more cold-tolerant, but has a fixed expiry date printed on it", "Check the expiry; a beacon past date may not transmit for its rated duration"],
    ["Cold-soaked overnight", "A device left in the vehicle or pack lid can be dead by morning", "Sleep with the messenger and phone in the bag or your clothing"],
    ["Recharging in the field", "Solar is weak in short winter days; a power bank is finite", "Carry a charged power bank, keep it warm too, and ration screen time"],
    ["Transmitting SOS", "Sending draws hard and can drain a cold battery in hours", "Send the signal, then conserve between fixes if the device allows"],
  ]},

  { kind: "p", text: "The working rules are short. Keep any device you might need warm and charged, which means against your body rather than in a pack pocket. Carry a charged power bank sized to the trip and keep it warm too. Start every run topped off. And never let the phone's satellite SOS become your only plan -- it is the battery you will already have spent on navigation and photos by the time you need it." },

  { kind: "note", text: "Test the device before the trip, not during the emergency. Send a check-in message from the driveway, confirm the subscription is live, confirm the beacon registration is current. The most common reason a device fails in the field is not the satellite -- it is a lapsed plan, a flat battery, or a registration that was never completed." },

  { kind: "h2", text: "Redundancy for solo and serious trips" },

  { kind: "p", text: "Every layer here fails in a way the others cover, which is the argument for stacking them rather than betting on one. A trip plan fails silently if you never told your contact the ground had shifted; a messenger fails on a dead battery; a beacon fails on a bad fix under timber; a first-aid kit fails when the injury exceeds your training. No single item is a system -- the system is the set." },

  { kind: "p", text: "For a solo rider or a committing run, the practical stack is a two-way messenger for everyday check-ins, a registered PLB as the no-subscription backstop, a paper trip plan with a hard check-in time, a first-aid kit you have trained on, and the water and warmth that prevent most incidents. Weight it by distance from help: a busy trailhead a mile from pavement needs far less than a circuit two days from the nearest road." },

  { kind: "h2", text: "Two-way messaging in practice" },

  { kind: "p", text: "For riders who carry a messenger, the everyday value is not the SOS button -- it is the nightly check-in. A preset message from camp each evening turns your written trip plan into a live one and means a missed check-in is noticed the same night rather than days later." },

  { kind: "ul", items: [
    "Set up preset messages before you leave -- \"camped, all well\" to a fixed list -- so a check-in costs one button in bad weather.",
    "Agree the meaning of silence in advance: both sides should know a missed check-in means act, not wait and see.",
    "Use free-text sparingly to conserve battery and message allowance, but know it is there to describe a problem that is not yet an SOS.",
    "Remember two-way means the monitoring centre and your contacts can push information to you -- a stand-down, a weather warning -- not only receive it.",
  ]},

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "The framework above -- device, plan, habits, kit, battery -- covers the great majority of what riders and hikers face off the grid, and it has a boundary. It cannot set your personal turnaround, which depends on your party, your vehicle, and your skill. It cannot tell you the current avalanche danger, the river level, or whether the forecast that looked fine at the desk turned overnight. And it cannot replace hands-on training: reading about splinting a limb is not the same as having done it, and a wilderness first-aid course will do more for your safety than any single device you buy." },

  { kind: "p", text: "The authoritative source for the specific place is local and current. The district office knows the road closures and the fire stage; the ranger station knows which drainage is running and which is dry. Official records publish rules and boundaries, not conditions -- and where a season-old record stops helping, a check-in dated last week is the difference between planning on evidence and planning on hope. Register the beacon, test the messenger, leave the trip plan, set the turnaround -- then confirm the conditions with the people who were there, and plan the run on what they tell you rather than on what any page, including this one, could know in advance." },
];
