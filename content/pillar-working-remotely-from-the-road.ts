import type { Block } from "./blocks";

/** Working remotely from the road -- Vanism pillar. */
export const PILLAR_WORKING_REMOTELY_FROM_THE_ROAD: Block[] = [
  { kind: "key", text: "You can earn a full-time living from the road, but only if you build the run around the work rather than fitting the work into the run. That means a connectivity stack you have tested, enough stored power to run a desk all day without the engine, a route planned around coverage and time zones instead of hoped through them, and a domicile, mail, and tax setup settled on paper before the first paycheck. Get those four right and the rest is scheduling. Get any one wrong and the road quietly takes the job back." },

  { kind: "p", text: "The romantic version of working from the road is a laptop on a tailgate with a canyon behind it. The photograph is real. What it does not show is that the rider took it on a Saturday, and that the call which paid for the van happened two days earlier in a gravel lot with one bar of signal and a booster clamped to the roof rack -- a lot the rider knew had signal because they had confirmed it before driving there. The work is the boring part, and the boring part is the whole thing." },

  { kind: "p", text: "This page is about the logistics, not the fantasy. It assumes you already have work that can be done remotely and a reason to do it on the move. What it covers is how to keep that work reliable across a season of changing ground: the connectivity stack in brief, the power to run a setup all day, how to build a circuit around coverage and time zones, what makes a workspace function, the rhythm of splitting work days from hunt days, and the domicile and tax questions every full-timer has to settle whether they want to or not." },

  { kind: "p", text: "The general framework holds across most of the lower forty-eight. Where it stops being reliable -- a specific carrier in a specific valley, a state's residency test, an employer's rules about where you may log in from -- is called out plainly, because those are the details that decide whether the plan survives a real month." },

  { kind: "h2", text: "The connectivity stack, in brief" },

  { kind: "p", text: "Connectivity is the load-bearing wall. Every other part of the setup degrades gracefully -- you can work in the heat, work tired, work off a smaller battery -- but a call that will not connect is simply a call you did not make. The full treatment of antennas, boosters, plan stacking, and satellite belongs in the connectivity pillar; what follows is the summary a remote worker needs to size the rest of the rig." },

  { kind: "p", text: "The reliable stack has three layers, and the point of three is that no single failure ends your work day. Cellular data is the primary. A signal booster or a better external antenna is the multiplier that turns one marginal bar into a usable connection. Low-earth-orbit satellite is the backup that works where cellular does not reach at all. Treat them as a stack, not a choice: riders who run only one layer are the ones who miss meetings." },

  { kind: "table", caption: "The three-layer connectivity stack", head: ["Layer", "Role", "Where it wins", "Where it fails"], rows: [
    ["Cellular data (two carriers)", "Primary connection", "Anywhere within a few miles of a town or highway", "Deep in canyons, dense forest, remote desert"],
    ["Booster or external antenna", "Multiplier on weak cellular", "Turns one marginal bar into a working link", "Cannot create signal where there is none"],
    ["Low-earth-orbit satellite", "Backup for no-cellular ground", "Open sky far from any tower", "Heavy tree cover; higher power draw; monthly cost"],
  ]},

  { kind: "p", text: "Two carriers, not one, is the highest-value connectivity decision a remote worker makes. Coverage from two networks rarely fails in the same place, and the second line costs less than one lost contract. Carry two SIMs on two different networks -- ideally one strong in the rural West and one strong in the rural East and South -- and switch between them by hand rather than trusting a device to pick." },

  { kind: "note", text: "Published carrier coverage maps are marketing documents. They show modeled coverage under ideal conditions and overstate what a rider gets in real terrain. Treat a coverage map as the optimistic case and plan for one tier worse than it promises." },

  { kind: "h2", text: "Power to run a desk all day" },

  { kind: "p", text: "A work setup is a continuous electrical load in a way that ordinary van life is not. Weekend camping draws power in short bursts -- a light, a pump, a phone charge. A work day draws steadily for eight to ten hours: a laptop, a screen, a router, a booster, and the slow background pull of keeping the space livable. The power system that runs a comfortable weekend can be flat by lunch on a working Tuesday. The full sizing method is in the power pillar; the summary is that you budget for the work load specifically, on top of everything else." },

  { kind: "p", text: "The dominant hidden cost is not the laptop, which sips power. The costs that empty a battery are the connectivity gear running all day, any climate control, and -- for many riders -- a second monitor, which roughly doubles the screen load for a real productivity gain. Size the system around the whole desk running a full day with no engine and no sun, because that is the day that tests it: overcast, parked, deadline." },

  { kind: "table", caption: "Typical daily draw of a road work setup", head: ["Item", "Rough daily energy", "Notes"], rows: [
    ["Laptop, 8-10 hours", "40-70 Wh", "Efficient; not the problem people expect"],
    ["Second monitor", "60-120 Wh", "Doubles screen load; often worth it anyway"],
    ["Router, booster, hotspot", "50-150 Wh", "Runs the entire work day, every day"],
    ["Satellite terminal", "300-600 Wh", "The single largest draw when in use"],
    ["Fan or 12V cooling", "100-400 Wh", "Climate is the swing factor, not the electronics"],
  ]},

  { kind: "p", text: "The practical shape most working rigs settle on is a lithium battery bank in the 200 to 400 amp-hour range, solar on the roof to recover during daylight, and a DC-to-DC charger that tops the bank up from the alternator while driving. Solar alone does not carry a work load through a run of grey days; the alternator charge on travel days is what closes the gap, which is one more reason work days and travel days want to alternate rather than compete." },

  { kind: "note", text: "Plan for the worst realistic week, not the average day. Three overcast days parked in one spot is a normal weather event, not an edge case. A system sized for the sunny average will fail exactly when a storm keeps you inside and working." },

  { kind: "h2", text: "Build the circuit around coverage, not hope" },

  { kind: "p", text: "The amateur plans a route by scenery and assumes the work will fit. The full-timer plans the run by where the work can happen and treats scenery as the reward for having planned. This is the largest difference between a season that pays and one that quietly drains the account: coverage comes first, at the desk, before anything is committed." },

  { kind: "p", text: "Planning around coverage does not mean staying near cities. It means knowing, for each stretch of the circuit, where the reliable signal is and building the work days around those points. A rider can spend four nights deep on public land with no signal and never miss a meeting, provided the meetings sit on the two days bracketing that stretch, in a spot confirmed to have coverage. The hunt for a quiet site and the hunt for a working signal are two different hunts; the skill is running them in sequence, not expecting one place to satisfy both." },

  { kind: "h3", text: "Time zones are a scheduling tool, not an obstacle" },

  { kind: "p", text: "A remote worker on a fixed employer clock can use east-west position deliberately. Running west of your team shifts the working day later in local time, which frees the best light and the coolest air for the morning and puts the desk in the afternoon. Running east does the reverse. This is not a minor comfort -- in the desert it is the difference between working through the survivable part of the day and working through the dangerous part of it." },

  { kind: "table", caption: "Working a fixed Eastern-time schedule from each zone", head: ["Your zone", "9-5 Eastern becomes", "Practical effect"], rows: [
    ["Eastern", "9:00-17:00 local", "Standard day; mornings and evenings are yours"],
    ["Central", "8:00-16:00 local", "Early start; long free evening"],
    ["Mountain", "7:00-15:00 local", "Dawn start; whole afternoon free for the hunt"],
    ["Pacific", "6:00-14:00 local", "Pre-dawn start; hardest to sustain, best afternoons"],
  ]},

  { kind: "p", text: "The trade in that table is real: running far west of a fixed Eastern schedule buys free afternoons at the cost of a start time that is brutal to hold for months. Most riders on a fixed clock find one or two zones of offset sustainable and three a stunt they abandon by the second week. Pick the offset you can actually keep, not the one that looks best on a map." },

  { kind: "h2", text: "A workspace that functions" },

  { kind: "p", text: "The setup that works for an afternoon of email is not the setup that carries forty hours a week for a season. A workspace that functions is defined by four things -- light, a real seat, a stable surface, and a temperature you can think in -- and every one of them is worth engineering rather than tolerating. The body keeps score, and a back that gives out ends the working season faster than any equipment failure." },

  { kind: "h3", text: "Light" },

  { kind: "p", text: "Position the desk to work in daylight without staring into it. A window at the side lights the space without glare on the screen or a silhouette on a video call; a window behind the screen throws glare, and a window behind you turns you into a shadow to everyone on the call. For the hours before dawn and after dusk -- which the western-offset schedule guarantees -- a single warm, adjustable light aimed at your face rather than the screen keeps you visible and keeps the eye strain down." },

  { kind: "h3", text: "A real seat" },

  { kind: "p", text: "The swivel-mounted cab seat is the most common working chair in a van for good reason: it is already there, it is built to be sat in for hours, and turned to face a desk it gives back support a folding camp chair never will. Whatever you use, the rule is that it supports the lower back at a real desk height. A laptop on the knees on a bed is fine for a Saturday and a spine injury by the end of a season." },

  { kind: "h3", text: "Staying cool and warm enough to think" },

  { kind: "p", text: "Cognitive work falls off a cliff outside a narrow temperature band. Roughly between 65 and 78 degrees Fahrenheit the brain works; above and below that, output drops and errors climb well before you feel truly uncomfortable. This is why climate is a work-productivity question and not a comfort luxury. In heat, the answer is usually position and airflow -- shade, cross-ventilation, a fan -- long before it is air conditioning. In cold, a good heater buys back the whole morning that would otherwise be lost to stiff hands and a foggy head." },

  { kind: "table", caption: "Remote-work readiness checklist", head: ["System", "Minimum to work reliably", "What failure looks like"], rows: [
    ["Connectivity", "Two carriers plus a booster; satellite for no-signal ground", "Missed calls; scrambling for signal at deadline"],
    ["Power", "200-400 Ah lithium, solar, and alternator charging", "Battery flat by afternoon on grey days"],
    ["Workspace", "Side light, supportive seat, desk-height surface", "Back pain; eye strain; unusable video calls"],
    ["Climate", "Airflow and shade for heat; a heater for cold", "Output collapses outside 65-78F"],
    ["Schedule", "Coverage confirmed before each work block", "Route planned by scenery, work fitted in badly"],
    ["Admin", "Domicile, mail, and tax questions settled on paper", "Registration, insurance, or filing problems mid-season"],
  ]},

  { kind: "h2", text: "The rhythm of work days and hunt days" },

  { kind: "p", text: "The mistake that ends more road-work seasons than bad signal is trying to do both things every day -- work a full day, cover ground, hunt a new site, and set up camp, all before dark, for months. It is not sustainable, and the work suffers first. The rigs that last separate the two. Work days are stationary: you stay put in a confirmed-coverage spot and the job gets a real day. Hunt days are for moving and finding the next site, with little or no work scheduled." },

  { kind: "p", text: "Alternating them solves several problems at once. It gives the work uninterrupted stretches instead of fragments. It concentrates driving into days with no meetings, so a slow road costs nothing but time. And it lets the alternator do the heavy charging on the exact days the desk is not draining the battery. Most full-timers converge on a block of work days in one good spot, then a hunt day to relocate." },

  { kind: "table", caption: "Work day versus hunt day", head: ["", "Work day", "Hunt day"], rows: [
    ["Location", "Stationary, confirmed coverage", "Moving, covering ground"],
    ["Signal need", "Reliable all day", "Only to plan and confirm the next stop"],
    ["Power pattern", "Steady desk draw; solar recovers", "Alternator charges the bank while driving"],
    ["Meetings", "Scheduled and clustered here", "None, or one from a known-good stop"],
    ["Camp setup", "Already set; nothing to break down", "Break down, drive, set up new"],
    ["What it buys", "A real day's output", "The next several sites and a charged battery"],
  ]},

  { kind: "p", text: "How you split them depends on the job, but a useful default is three to four work days against one hunt day, with the hunt day doubling as the day errands, water, laundry, and supply runs get done. Stacking the chores onto the moving day keeps the work days clean. The staying limit on public land, covered in the ground-rules pillar, sets the outer bound on how long one spot can serve as a work base before you must move anyway." },

  { kind: "note", text: "Protect the work day from the hunt. The temptation on a good work day is to pack up at lunch because a better site is an hour away. Resist it. A half-finished work day plus a rushed relocation is the worst of both, and it is how deadlines get missed. Finish the day, then move tomorrow." },

  { kind: "h2", text: "Domicile, the question that will not go away" },

  { kind: "p", text: "A full-timer with no fixed address still has to be legally domiciled somewhere. Domicile is the state you count as your permanent legal home, and it decides where your vehicle is registered, where you are insured, where you vote, where you hold a driver's license, and -- the one with real money attached -- where you file and owe state income tax. You do not get to have no domicile. You get to choose one, and choosing well is worth real money over a season." },

  { kind: "p", text: "Three states dominate the full-timer domicile decision, and they dominate it for concrete, unromantic reasons: no state income tax, mail-forwarding services set up specifically to serve travelers, and vehicle and licensing rules that a person who is rarely physically present can actually satisfy. The differences among them are real and worth matching to your own situation rather than copying whichever one a forum favors." },

  { kind: "table", caption: "The three common full-timer domicile states", head: ["State", "State income tax", "Draw for full-timers", "Watch for"], rows: [
    ["South Dakota", "None", "One-night stay establishes residency; simple renewals", "In-person visit needed to establish; some renewals in person"],
    ["Texas", "None", "Large mail-service infrastructure; wide services", "Vehicle inspection required in most cases"],
    ["Florida", "None", "Strong for insurance and healthcare access", "Higher vehicle insurance in many cases"],
  ]},

  { kind: "p", text: "None of the three is correct in the abstract. The right one depends on where you already have ties, where your health insurance works, how your vehicle insurance prices out, and how often you can realistically be present. Decide it at the desk with the actual numbers, not by inheriting whoever posted most confidently online. Where real money or a residency dispute is on the table, an accountant or attorney who works with full-time travelers pays for themselves." },

  { kind: "h2", text: "Mail, the boring problem you cannot skip" },

  { kind: "p", text: "Physical mail does not stop arriving because you started moving. Tax documents, license and registration renewals, replacement cards, jury summonses, and the occasional thing that legally must reach you all keep coming, and a full-timer needs a real system for receiving them, not a hope that nothing important shows up." },

  { kind: "p", text: "The working solution is a mail-forwarding service, most of them clustered in the domicile states above precisely because that is the demand. A good one gives you a genuine street address -- not a post office box, which some agencies and lenders reject -- scans the outside of each piece so you can decide what matters, and forwards, holds, or opens and scans on request. You direct it from anywhere with a signal. The pieces that matter get forwarded to wherever you will be for long enough to receive them; the rest waits or gets shredded." },

  { kind: "ul", items: [
    "Get a street address, not a PO box -- some registrations, banks, and insurers will not accept a box.",
    "Choose scan-on-arrival so you can triage mail without waiting for a forward.",
    "Have time-sensitive items forwarded to a spot you will hold for several days -- a campground, a friend, general delivery at a post office.",
    "Go fully paperless everywhere it is offered; the less physical mail exists, the smaller this problem gets.",
    "Keep one trusted person who can receive an urgent document on short notice if forwarding will not arrive in time.",
  ]},

  { kind: "h2", text: "State tax and the residency trap" },

  { kind: "p", text: "Choosing a no-income-tax domicile does not automatically mean you owe no state income tax, and this is where confident forum advice gets people into trouble. States with an income tax can assert that you are a resident for tax purposes based on how many days you were physically present, where you actually spend your time, and where the ties of your life are -- regardless of which state issued your license. Spend enough of the year in a taxing state and it may bill you as a resident even if your domicile is elsewhere on paper." },

  { kind: "p", text: "For most full-timers who genuinely move, this stays theoretical: no single state accumulates enough of their days to make the claim. The riders who get caught are the ones who claim a no-tax domicile but actually spend seven or eight months a year parked in one taxing state near family or work. The paper domicile and the physical reality diverge, and it is the physical reality a tax authority audits. If your life is really rooted in one taxing state, a friendly domicile on paper will not protect you, and this is precisely the situation to take to a professional rather than a forum." },

  { kind: "note", text: "Two further items catch working riders specifically. If you are a W-2 employee, your employer may have rules about which states you are permitted to work from, for their own tax and legal reasons -- confirm before you assume you can log in from anywhere. And self-employed riders should track income against the states they earn it in, because some states tax income sourced within their borders regardless of where you are domiciled." },

  { kind: "h2", text: "Where the plan meets the ground" },

  { kind: "p", text: "Everything above is the general framework, and the framework is a starting point, not a guarantee. Coverage in a specific valley, a specific carrier's real behavior behind a specific ridge, and current conditions on a road you mean to work from are exactly the things a map will not tell you and a modeled coverage layer will overstate." },

  { kind: "key", text: "The official record tells you where a signal is supposed to reach. It cannot tell you whether a rider actually held a call there last week, or whether the pullout you planned to work from washed out in the spring. That is current condition, not rule, and it comes from people who were recently on that ground. Vanism carries each report with the date a rider last confirmed it, so a coverage note is evidence you can weigh rather than a promise you have to trust." },

  { kind: "h2", text: "What this page cannot settle for you" },

  { kind: "p", text: "The connectivity stack, the power budget, the rhythm, and the domicile framework hold across most riders and most of the country. Your specific carrier behind your specific ridge, your employer's rules about where you may log in, and your own residency and tax position are not general questions, and treating a general answer as final on any of them is how a good season acquires an expensive surprise." },

  { kind: "p", text: "For coverage, confirm the real thing on the ground before committing a work week to a spot. For tax and residency, where actual money and legal exposure are involved, a professional who works with full-time travelers is the authority -- not this page and not a forum thread. Plan the run at the desk, confirm it on the ground, and keep the boring paperwork current. That is the whole job, and it is enough to keep the road paying." },
];
