import type { Block } from "./blocks";

/** Photography and keeping an honest record -- Vanism pillar. */
export const PILLAR_PHOTOGRAPHY_AND_THE_HONEST_RECORD: Block[] = [
  { kind: "key", text: "A photograph proves that a thing looked a certain way to one camera at one moment. It does not prove the pullout was legal, open, empty, or reachable, and a beautiful undated image proves less than a plain one carrying a date and a confirmed location. For the record, an image is evidence only when it is tied to when and where it was taken; without that, it is decoration, and decoration has misled more riders onto closed roads than bad maps ever have." },

  { kind: "p", text: "There is a specific failure that starts with a good photograph. A rider sees a wide gravel pullout under low gold light, an empty site framed against a ridge, and drives four hours on the strength of it -- then arrives to a fee sign, a gate, a full lot on a Friday, or two miles of washboard the photograph never showed. Nothing in the image was false. It simply answered a different question than the one the rider was asking." },

  { kind: "p", text: "This page is about the gap between an image and a fact, and how to close it. The camera is one of the most useful tools a rider carries for keeping a record, and one of the most reliable ways to build a record that misleads -- both at once. A photograph informs when it is dated, located, and annotated with what the light hides; it misleads when it is presented as timeless, placeless, and flattering. The difference is almost entirely about what you attach to the image rather than what is inside the frame, and the beauty of the frame is close to irrelevant to whether the record is worth anything." },

  { kind: "h2", text: "What a photograph actually proves" },

  { kind: "p", text: "A photograph is a measurement of light reaching a sensor from one position, through one lens, at one instant. That is a real fact and a useful one. It is also a very small fact, and the trouble begins when a viewer reads a large conclusion out of a small measurement." },

  { kind: "p", text: "The frame proves the ground existed, had a certain shape, and at that instant held whatever was inside the edges. It proves nothing about time it does not contain -- and a still image contains almost none. It cannot show a Friday crowd on a Tuesday shot, a seasonal gate that closes in October on a July photograph, the fee sign ten feet left of the frame, or the closure notice posted after the shutter fired." },

  { kind: "table", caption: "What a photograph proves and what it does not", head: ["A dated, located photo can support", "The same photo cannot support"], rows: [
    ["The ground existed and had this general shape", "That it is legal to camp or park there"],
    ["The surface looked like this on this date", "That the surface is like this now, or on any other date"],
    ["Vegetation and snow were at this stage then", "That the road is open or the gate is unlocked today"],
    ["The site held this many vehicles at this instant", "How full it gets on a Friday, a holiday, or at dusk"],
    ["A structure, sign, or feature was present", "That no sign, fee, or restriction sits just out of frame"],
  ]},

  { kind: "p", text: "The left column is what you may state on the strength of an image; the right is what you must confirm some other way before you drive. The most common error in the whole subject is borrowing a right-column claim and backing it with an image that only supports the left." },

  { kind: "note", text: "A photograph of an empty site is the single most misread image in the category. A golden-hour frame is almost by definition taken at the exact hour the light is best and the crowd has not yet arrived or has just left. Emptiness in a photo is a statement about one instant, never about a place." },

  { kind: "h2", text: "The date is the fact, not the frame" },

  { kind: "p", text: "Between a beautiful undated photograph and a plain dated one, the dated one is worth more to a record, and it is not close. The reason is that almost every question a rider actually asks of an image is a question about time, and only the date answers it." },

  { kind: "p", text: "Is the road passable now depends on when the shot was taken relative to the last storm. Is the creek running depends on the date relative to the melt. Is the gate open depends on the date relative to the seasonal schedule. Is the site worn out depends on the date relative to how much traffic has crossed it since. A gorgeous frame with no date cannot answer one of these. A phone snapshot with an accurate timestamp answers all of them within the limits of its age." },

  { kind: "p", text: "This inverts the usual instinct that a better image is a better record. For a record the opposite is closer to true: the metadata is the record, the picture only the illustration attached to it." },

  { kind: "table", caption: "Two images of the same pullout, ranked as evidence", head: ["Attribute", "Undated hero shot", "Plain dated snapshot"], rows: [
    ["Visual quality", "High -- edited, golden hour", "Low -- flat midday phone photo"],
    ["Date attached", "None", "Accurate to the day"],
    ["Location attached", "Vague caption, region only", "Coordinates to a few metres"],
    ["Answers \"is it passable now\"", "No -- age unknown", "Partly -- you can judge from the date"],
    ["Value as a record", "Decoration", "Evidence, weighted by its age"],
  ]},

  { kind: "p", text: "A dated image also degrades honestly, which an undated one cannot. A photo stamped fourteen months ago tells you it is fourteen months old, and you discount it. An undated photo of the same scene claims nothing and therefore claims everything -- the viewer supplies a date, and it is almost always more recent and more favourable than the truth. The absence of a date is not neutral. It defaults to a lie the viewer tells themselves." },

  { kind: "h3", text: "What counts as a reliable date" },

  { kind: "p", text: "Not every timestamp is trustworthy. A camera's own capture time is reliable if the clock is set. A file's creation date is not -- it changes when the file is copied, exported, or moved between devices. A caption saying \"last summer\" is not a date. A screenshot strips the original capture time entirely and stamps the moment of the screenshot instead, which is why a screenshot of a great campsite is close to worthless as a record." },

  { kind: "ul", items: [
    "Capture timestamp from a camera with a correct clock -- reliable, this is the one that matters.",
    "GPS-derived time recorded at the shutter -- reliable and hard to fake.",
    "File modified or created date -- unreliable, it moves every time the file is handled.",
    "A caption, a memory, or \"a few weeks ago\" -- not a date, treat as undated.",
    "A screenshot of any of the above -- the original date is gone, only the screenshot time remains.",
  ]},

  { kind: "h2", text: "Location, and the pin that burns the place" },

  { kind: "p", text: "A date makes an image answer questions about time; a location makes it answer questions about place -- which parcel, which agency, which road, which set of rules. An image tied to coordinates can be checked against the managing district; one captioned only with a region cannot be checked against anything, and is barely more useful than a stock image." },

  { kind: "p", text: "Here the record runs into a real tension that does not resolve cleanly. The same coordinates that make an image verifiable also make a place findable by everyone at once. A precise pin broadcast to a large audience is the mechanism by which quiet, fragile, legal-because-lightly-used places become crowded, damaged, and then closed. Naming a place for the record and broadcasting it to an audience are different acts with opposite consequences, and the same pin serves both." },

  { kind: "p", text: "The honest resolution is not to strip location from your record -- that destroys its evidentiary value -- but to separate the record from the broadcast. Keep the precise coordinates in your own field notes and in any access-controlled verification system. Do not attach the exact pin to a public post reaching thousands who will not read a field note before arriving. The distinction is between documenting a place and burning it." },

  { kind: "table", caption: "Documenting a place versus broadcasting it", head: ["Situation", "Precise pin appropriate", "Reason"], rows: [
    ["Your own field notes and route log", "Yes", "You are the only reader and you will verify before driving"],
    ["A closed or verified record where access is controlled", "Yes", "Coordinates are the point; the audience is bounded and accountable"],
    ["A public post to a large following", "No", "A broadcast pin concentrates traffic faster than any ground recovers"],
    ["An established, hardened, high-capacity site", "Usually fine", "It already absorbs volume; a pin changes little"],
    ["A fragile, lightly-used, or sensitive site", "No -- name the region only", "Precision here is the mechanism that closes the ground"],
  ]},

  { kind: "note", text: "There is no clean rule that separates the site you may pin from the site you must not, which is exactly why judgement is required. The working test: would concentrating a hundred vehicles here over a season change the ground or the rules that govern it? If yes, keep the pin in your notes and give the public a region. If the site already takes that volume, the pin costs nothing. A precise pin earns engagement and a withheld one earns complaints, so the honest record here means being willing to disappoint an audience to protect the ground." },

  { kind: "h2", text: "The honest field note, and what the light hides" },

  { kind: "p", text: "The photograph shows what was in front of the lens. The field note records everything the lens excluded, and for a working record it is the larger half. Light is selective by nature -- it flatters, it hides, it arrives at the one hour the scene is at its best -- and the note is the correction applied to the flattery." },

  { kind: "p", text: "The things a golden-hour frame reliably omits are not mysterious: the crowd that arrived after the shot, the closure sign behind the camera, the two miles of washboard the frame starts after, the wind that made the site miserable, the fee the photograph cannot show. None of these are visible in any image, all are decisive for the next rider, and all belong in the note." },

  { kind: "h3", text: "What to write down that the camera cannot" },

  { kind: "ul", items: [
    "Occupancy over time -- not \"empty\" but \"empty at 7pm midweek, six vehicles by 9am Saturday.\"",
    "Access and legality -- fee or free, permit required or not, the managing district, any posted limit.",
    "The approach -- surface, distance, clearance demanded, the last turning point, how long the rough section runs.",
    "Conditions the light flattered -- wind, insects, noise, heat, a smell, a nearby generator running all night.",
    "What sits just outside the frame -- a highway, a closure notice, a private boundary, a trailhead that fills.",
    "Water and its state -- running, stagnant, dry, and the date you saw it in that state.",
  ]},

  { kind: "key", text: "The field note is not a caption for the photograph. It is the other half of the record, and on most days it is the more important half. The camera captures the moment the scene was at its best; the note captures the eleven hours it was not. Carry the note as seriously as the camera, and write it while you can still see the thing you are describing -- memory flatters as reliably as light does." },

  { kind: "h2", text: "Photographing for the record versus for an audience" },

  { kind: "p", text: "The same scene photographed two ways produces two different objects. Photographed for an audience, you wait for the light, frame out the road and the sign and the neighbouring vehicle, and shoot the one angle that sells the place. Photographed for the record, you shoot the fee sign, the road surface, the full lot at 9am, and the closure notice, at whatever ugly hour they happen to occur -- because those are the frames that inform." },

  { kind: "p", text: "Neither is dishonest in isolation. The dishonesty is presenting the first as though it were the second -- offering a curated hero frame as a record of what a place is like. An audience photograph is legitimate to make; it stops being legitimate the moment it is asked to carry weight it was never built to hold, which is what happens when it becomes the basis for another rider's decision to drive." },

  { kind: "table", caption: "Two ways of pointing the same camera", head: ["Dimension", "Shot for an audience", "Shot for the record"], rows: [
    ["Time of day", "Golden hour, best light", "Whenever the fact is visible, including harsh noon"],
    ["Framing", "Excludes signs, roads, crowds", "Deliberately includes them"],
    ["Subject", "The view, the vibe", "The fee sign, the surface, the closure, the full lot"],
    ["Date and pin", "Optional, often dropped", "Mandatory -- the record is worthless without them"],
    ["Success measure", "Engagement", "Whether the next rider arrived un-surprised"],
  ]},

  { kind: "p", text: "The practical habit is to shoot both and keep them separate. Make the frame that pleases if you want it, and make the four ugly frames that inform -- the sign, the surface, the approach, the crowd -- filed with a date and a pin. The beautiful frame is the memory; the ugly four are the record, and confusing the two is how a record starts to mislead." },

  { kind: "h2", text: "How a record decays, and how to date its decay" },

  { kind: "p", text: "Even a perfectly honest image ages, and different facts inside it age at very different rates. A useful record is not one that is permanently true -- no image is that -- but one that tells you how old each claim is, so you can discount it correctly. Knowing which parts of a photo go stale first is most of the skill." },

  { kind: "table", caption: "How fast different facts in an image go stale", head: ["What the image shows", "Stays reliable for", "Why it decays"], rows: [
    ["General terrain and site shape", "Years", "Landforms change slowly absent fire or flood"],
    ["Surface and road class", "A season or two", "Ruts deepen, washboard forms, storms rework it"],
    ["Vegetation and snow stage", "Weeks", "Seasonal and highly date-specific"],
    ["Water flow and level", "Days to weeks", "Tracks weather and melt directly"],
    ["Occupancy and crowd level", "Hours", "Changes by day of week and time of day"],
    ["Legal status, fees, closures", "Can change overnight", "Set administratively, no visible warning"],
  ]},

  { kind: "p", text: "The rule for using any image falls out of that table. The general shape you can trust for years; the surface for a season. Anything about water, crowds, or legality you do not trust from an image beyond the moment it was taken -- and for legality you need the current administrative source regardless of how recent the photo is." },

  { kind: "note", text: "The fastest-decaying facts are the ones photographs are most often asked to prove -- is it open, is it free, is it full. Those are precisely the claims an image supports for the shortest time. Any record that leans on a photo to answer them is leaning on the weakest part of the evidence." },

  { kind: "h2", text: "The edited image, and where an edit becomes a lie" },

  { kind: "p", text: "Editing is not the enemy of an honest record. Correcting exposure, straightening a horizon, or cropping to a cleaner frame changes how a scene looks without changing what it claims. The line is crossed when an edit alters a fact the record is meant to carry -- the surface, the sky, the crowd, everything the frame was chosen to include." },

  { kind: "ul", items: [
    "Exposure, contrast, straightening, and cropping to the horizon -- fine; they change the look, not the facts.",
    "Sky replacement -- a lie for the record; the sky is weather, and weather is a fact the next rider needs.",
    "Removing vehicles, people, or a sign -- a lie; those are the occupancy and legality the frame is evidence of.",
    "Stitching two moments into one panorama -- fine for a view, misleading if presented as a single instant.",
    "Heavy colour grading that shifts a midday scene to golden hour -- misrepresents the time and the light.",
  ]},

  { kind: "p", text: "The test is worth applying every time: does the edit change anything a rider would act on? A warmer sky changes a mood; a replaced sky, a removed crowd, or an erased fee sign changes a decision, and an image edited to change decisions is no longer a record. Keep the documentation frames unedited, and do whatever you like to the frames you make for their own sake." },

  { kind: "h2", text: "The verification an image cannot do for you" },

  { kind: "p", text: "An image, however honest, is a starting point and not a clearance. It tells you a place is worth looking into. It cannot tell you the road is open this week, the district did not issue a closure on Tuesday, or the permit system changed this season. Those are separate confirmations, and treating a photograph as though it had already made them is the core mistake this whole page is written against." },

  { kind: "ol", items: [
    "Read the date and discount every fast-decaying claim by its age -- water, crowds, and surface first.",
    "Identify the managing agency and district from the location, and check current legality, fees, and closures against that source, not against the photo.",
    "Confirm the approach and passability from a recent report, since the frame almost never shows the road that reaches it.",
    "Check the season against the vegetation and snow in the image -- if they disagree, the image is out of date for your trip.",
    "Establish current occupancy some other way for anywhere popular; emptiness in a photo predicts nothing about a Friday.",
  ]},

  { kind: "p", text: "That sequence is the difference between using a photograph and being used by one. Each step replaces a fast-decaying claim the image cannot support with a current source that can. The image contributes the one thing it is good at -- showing a place exists and is worth the checking." },

  { kind: "key", text: "This is the one place the official record and the photograph both stop helping, and it is worth naming precisely. Agencies publish rules; photographs show a moment; neither tells you whether the site was open and passable this week. That current, dated, located confirmation from someone recently on the ground is exactly what a GPS-verified check-in is -- an image with a confirmed pin and a confirmed date is evidence you can weigh, and everything short of that is decoration you should not drive on." },

  { kind: "h2", text: "A field-documentation standard you can actually keep" },

  { kind: "p", text: "None of this requires a professional workflow. It requires a habit small enough to survive a cold morning and a dying battery, applied every time. The standard below is deliberately short, because a long one is abandoned in the field -- and an abandoned standard produces exactly the undated, unlocated frames this page warns against." },

  { kind: "table", caption: "Field-documentation checklist", head: ["Step", "Do", "So that"], rows: [
    ["Set the clock", "Confirm the camera or phone clock and time zone are correct", "Every capture carries an accurate date automatically"],
    ["Let it tag location", "Leave location on for capture, even if you strip it before sharing", "The pin exists in your record even when it stays out of a post"],
    ["Shoot the ugly frames", "Photograph the sign, the surface, the approach, the full lot", "The record holds the facts the hero shot omits"],
    ["Write the note now", "Log occupancy, access, approach, and what is out of frame", "The eleven hours the light hid are on the record too"],
    ["Separate record from broadcast", "Keep the precise pin in notes; give the public a region", "You document the place without burning it"],
    ["Date every claim", "Attach the date to anything you later state as fact", "Each claim degrades honestly instead of defaulting to now"],
  ]},

  { kind: "p", text: "Keep that and your images stop being decoration and start being a record. Drop the date, the note, and the ugly frames, and even a beautiful, well-meant photograph will eventually put a rider on a closed road under perfect light, wondering why the picture lied. It did not lie. It was only ever a measurement of light, and someone asked it to be a fact." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "This is the general framework for keeping an honest photographic record, and it has edges. It cannot tell you the current legal status of a specific parcel -- that is the managing district's to state, and it can change the day after any photograph. It cannot tell you whether a road is passable this week, whether a permit system changed, or whether a site open in your image is closed today." },

  { kind: "p", text: "Where the decision involves legality, go to the managing agency or district office -- the authority, and it answers the phone. Where it involves current conditions, go to a recent, dated, located confirmation from someone who was there. Where safety is genuinely at stake -- a river crossing, an avalanche slope, a road you are unsure you can reverse out of -- go to a professional or a local who knows the ground, not to a photograph. The image shows a place is worth checking; the checking is still yours to do." },
];
