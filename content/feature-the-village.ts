import type { Block } from "./blocks";

/** the-village -- Vanism feature, expanded. */
export const FEATURE_THE_VILLAGE: Block[] = [
  {
    kind: "key",
    text: "The Village is the set of rider profiles that have been made public. Profiles are off by default -- until a rider opts in, no page on the site carries their position, history, or standing, and a profile that is off returns nothing at all rather than a locked page. What a public profile shows is earned record: objectives reached, runs closed, states on the record, and the date the rider last stood somewhere. A place in the Village is turned on, never bought, and no tier at any price buys the standing it displays.",
  },
  {
    kind: "p",
    text: "Every other social layer in this category is built the same way. You are in it the moment you create an account, and the work of the settings screen is talking you back out of what the product already did to you. The default is exposure, because exposure is where the engagement lives, so the default is never seriously reconsidered. The privacy controls are real, but they are a subtraction from a starting position of visible, and most riders never find them.",
  },
  {
    kind: "p",
    text: "Vanism inverts the default and then removes the negotiation. The flag that governs public visibility is false when a rider record is created, and it stays false until the rider decides otherwise. The Village is what you get when riders choose to be seen -- nothing more, and nothing shown that was not earned on the ground.",
  },

  { kind: "h2", text: "What the Village is" },
  {
    kind: "p",
    text: "The Village is a directory of public rider profiles. A profile is a rider's earned record made legible to other riders: the objectives they reached, the runs they closed, the states that sit on their record, and the date they last checked in somewhere. It is a record, not a feed -- there is no status to post, no live position to broadcast, and nothing on the page a rider did not earn by covering ground.",
  },
  {
    kind: "p",
    text: "A rider is in the Village only because they turned their profile on. There is no automatic membership, no follower graph that pulls you in, and no threshold of activity that publishes you against your will. Reaching a hundred objectives does not enter you into the Village; deciding to be seen does, and the record you earned is what becomes visible when you do.",
  },

  { kind: "h2", text: "Opt-in, enforced where it counts" },
  {
    kind: "p",
    text: "Opt-in as a promise is cheap. Every product that ever leaked a rider's data had a privacy policy that said the right thing. What makes the default real here is that it is not a policy line, and not a toggle the application code is trusted to honor -- it is the shape of the data underneath. The difference is not a settings screen; it is where the enforcement lives.",
  },
  { kind: "h3", text: "The default is false" },
  {
    kind: "p",
    text: "When a rider record is created, the field that governs public visibility is written false. Nothing about signing up, checking in, closing a run, or accruing standing changes it. A rider who never opens the setting is invisible for the life of the account, and that is the intended resting state rather than a gap someone forgot to close. Silence is not a failure mode here; it is the default the product ships.",
  },
  { kind: "h3", text: "The filter runs before the code" },
  {
    kind: "p",
    text: "The view that feeds every public page filters on the public flag before application code ever receives a row. A private rider is not fetched and then hidden by a template -- the private rider is never in the result set at all. A bug in a page component cannot leak a profile it was never handed, because the row for that profile was excluded at the boundary. This is the difference between a curtain and a wall: a curtain depends on nobody pulling it aside, and a wall does not.",
  },
  { kind: "h2", text: "Why a private profile returns nothing" },
  {
    kind: "p",
    text: "A locked page is itself a disclosure. If a private profile answered with a message that said this rider is private, anyone could confirm which riders exist by trying trailnames one at a time and watching which ones came back locked. The lock would protect the contents of a profile while leaking the roster of who has one, and the roster is often the more sensitive fact.",
  },
  {
    kind: "p",
    text: "So a private profile returns exactly what an unregistered trailname returns: nothing. The two responses are indistinguishable by design. You cannot tell whether a name belongs to a rider who chose silence or to no one at all, and that ambiguity is the protection. The fact that an account exists is treated as private, because for a rider who has not opted in, its existence is precisely the thing they have not agreed to share.",
  },
  {
    kind: "note",
    text: "This is enumeration resistance, and it is a deliberate cost. It means the Village cannot advertise how many riders stand behind it by letting a visitor probe the edges. The headcount you cannot take is the point, not an oversight.",
  },

  { kind: "h2", text: "What a public profile shows" },
  {
    kind: "p",
    text: "Turning the profile on publishes the record and nothing but the record. It does not open a location feed, and it does not reveal where a rider is now. The most time-sensitive thing a public profile carries is a date -- when the rider last checked in somewhere -- and a date is not a place.",
  },
  {
    kind: "table",
    caption: "A public profile: shown and withheld",
    head: ["Shown to any rider", "Withheld from everyone"],
    rows: [
      ["Objectives reached, as a count", "Live position, ever"],
      ["Runs closed on the ground", "Home location or base"],
      ["States on the record", "Exact coordinates of any check-in"],
      ["Date of the most recent check-in", "Private notes and condition reports"],
      ["Standing earned", "Whether the rider is out right now"],
    ],
  },
  {
    kind: "p",
    text: "The asymmetry is intentional. What a rider earned is durable and safe to show -- it is history, and history does not put anyone at a pullout tonight. Where a rider is is live and unsafe to show -- it is exposure, and exposure is the thing every other social layer sells as a feature. The Village publishes the first and never the second, and the line between them is fixed, not a preference a rider tunes.",
  },

  { kind: "h2", text: "A public record is road intel" },
  {
    kind: "p",
    text: "Opting in is not only a decision a rider makes about themselves. A public record is road intel for the riders who come after. When you are at the desk building a run, a rider who has actually closed the ground you are eyeing tells you something a listing cannot: that the run is real, that it was finished, and that a person with a verified record stood at each leg of it. That is a different quality of information than a description written by someone who may never have gone.",
  },
  {
    kind: "p",
    text: "The hunt for a place is easier when someone credible has already found it. A public profile does not hand over coordinates or the rider's private notes -- those stay with the check-in and never enter the Village -- but it confirms that the ground is reachable and was reached. Standing you can see is standing you can weigh, because it cost the rider showing it the same thing it would cost you: the drive, the fix inside the geofence, the season.",
  },

  { kind: "h2", text: "What no tier buys" },
  {
    kind: "p",
    text: "The Village sits under the progression clause for one reason: everything it displays is earned, and none of it is for sale. State it plainly, because the doctrine requires nothing less. Standing shown in the Village is earned and is not purchasable -- there is no tier that grants a richer profile, inflates the counts, reserves a place near the top, or accelerates the record behind it, and there is no price at which any of that can be bought. A subscription buys planning tools at the desk: offline ground, unlimited saved runs, recent rider intel. It does not buy standing, and it cannot buy presence in the Village.",
  },
  {
    kind: "p",
    text: "This is structural, not a posture that erodes after a slow quarter. What the flag exposes is a record built only from verified check-ins and closed runs. Because standing has no purchase path anywhere in the system, a paid rider and a free rider who covered the same ground show the same record. The subscription changes what you can plan; it never changes what you earned, and the build refuses to ship a pricing row that implies otherwise.",
  },
  {
    kind: "table",
    caption: "Presence and standing across tiers",
    head: ["Capability", "Free tier", "Any paid tier"],
    rows: [
      ["Turn a profile public", "Yes", "Yes"],
      ["Standing shown on the profile", "Earned only", "Earned only"],
      ["Buy a higher profile or more standing", "No", "No"],
      ["Accelerate the record with money", "No", "No"],
      ["Reserve or promote a place in the Village", "No", "No"],
    ],
  },
  {
    kind: "p",
    text: "Read the two right-hand columns together and the design is plain: they are identical everywhere it would matter to buy an advantage. The paid column adds planning tools and nothing to the record. That is the guarantee -- when you read a rider's standing in the Village, you know exactly what it cost them, because it could only have cost the one thing.",
  },

  { kind: "h2", text: "Edge cases riders ask about" },
  {
    kind: "p",
    text: "The rules above have edges, and the edges are handled the same way the defaults are: toward silence, and toward keeping the record honest.",
  },
  {
    kind: "ul",
    items: [
      "Turn a public profile off and the page is gone, not archived behind a login. It reverts immediately to the same response an unregistered trailname returns.",
      "A shared run does not expose your profile. Sharing a route and publishing a record are separate settings, so you can hand another rider a run without becoming visible in the Village.",
      "Going quiet costs no standing. A profile can sit private for a season and the record underneath it is intact the moment you turn it back on.",
      "The paid tiers change none of this. Lapsing a subscription does not publish you, and subscribing does not; the visibility flag answers to the rider alone.",
    ],
  },

  { kind: "h2", text: "The Village and the doctrine" },
  {
    kind: "p",
    text: "The Village is the doctrine's social layer, and it carries the doctrine's discipline. The road is earned, and so is the record that proves you rode it -- there is no tier that shortens the earning and no purchase that stands in for the ground. Being seen is a choice a rider makes on top of the work, never a default the product makes for them, and choosing not to be seen leaves nothing behind to read.",
  },
  {
    kind: "p",
    text: "A record you can see is worth exactly what it cost, because it could only have cost the drive and the season. A record you cannot see tells you nothing, which is the correct amount. Silence has weight here: a rider who stays private is not hiding a locked page, they are simply not in the set. The Village is what remains when riders decide the ground they covered is worth showing -- earned first, shown by choice, and never for sale in any tier at any price.",
  },
];
