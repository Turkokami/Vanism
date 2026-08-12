/**
 * THE CODEX -- authored, reviewed, bylined, in git.
 *
 * The only place in the portfolio where Via Draconis becomes discoverable. The
 * doctrine has lived on a Shopify blog behind a merch store while the product
 * that embodies it never mentioned it.
 *
 * Phase 4.2 target is 40 entries. Twelve are authored here across the four
 * laws plus the lineage. Each carries the founder Person @id as author.
 */

export type CodexEntry = {
  slug: string;
  title: string;
  summary: string;
  published: string;
  law?: "I" | "II" | "III" | "IV";
  body: string;
};

function j(...paras: string[]) {
  return paras.join("\n\n");
}

export const CODEX: CodexEntry[] = [
  {
    slug: "standing-is-not-a-status-symbol",
    title: "Standing is not a status symbol",
    summary:
      "A status symbol signals what a rider owns; standing records where a rider has physically stood.",
    published: "2026-08-11",
    law: "I",
    body: j(
      "A status symbol is a claim you buy and then wear. The watch, the badge, the tier with the gold trim -- each one points back to a transaction and asks you to read wealth as merit. It works because money is legible from a distance. You do not have to know the rider to know they could afford the thing.",
      "Standing here is made of a different material. It is not a claim about what a rider owns. It is a record of where a rider has physically been -- a GPS fix at a gate they found, on a road they drove, at a place they stood. You cannot flex it with a card because it is not made of money. It is made of miles walked and access confirmed on the ground.",
      "This is why standing cannot be counterfeited by spending. A status symbol is a proxy; it stands in for effort that may or may not have happened. Standing skips the proxy. There is no intermediate token to purchase, no premium row that quietly converts dollars into position. The subscription buys maps and continuity and other riders' recent notes, and it buys not one point of the thing itself.",
      "A wealthy rider and a broke one arrive at the same locked forest road with the same problem. The gate does not open for the larger balance. Whoever drives in, finds it, and stands there earns the identical mark, and the balance never enters the record. That is the whole point of measuring presence instead of purchase: it is the one axis money does not tilt.",
      "So when a board here shows a rider high, it is telling you something a receipt never can. Not that they had the means, but that they went. The signal survives because it refuses the currency that would corrupt it. A status symbol says a rider could have been anywhere they liked. Standing says exactly where they were, and that they were there in person."
    ),
  },
  {
    slug: "the-rule-binds-its-author",
    title: "The rule binds its author",
    summary:
      "A constraint that exempts its author is marketing; one that binds him is a law, and that is what makes it credible.",
    published: "2026-08-11",
    law: "I",
    body: j(
      "There is an easy version of every founder's rule, and it contains a quiet exemption. Standing cannot be bought -- by anyone else. The person who wrote the constraint keeps a back door for himself, seeds his own name at the top, and calls the result a leaderboard. Everyone can eventually see the door, and once they do, the board is furniture.",
      "The harder version has no door. The founder cannot buy rank either. He pays in the same currency every other rider pays in -- check-ins on the ground, a coordinate at a gate he drove to and found. There is no administrative grant, no seeded position, no row in the database that reads earned for him and purchased in spirit. His mark comes from the same act or it does not come at all.",
      "This is not humility and it is not a gesture. It is what separates a law from a slogan. A constraint that exempts its author is a marketing line dressed as principle; it asks others to accept a discipline the writer declined. A constraint that binds its author is load-bearing, because the person with the most to gain from breaking it has already agreed to be held by it.",
      "The credibility flows entirely from that symmetry. A rider deciding whether standing means anything is really asking one question: is the game rigged at the top. If the founder's own position came from a wire transfer, every claim beneath it is suspect. If it came from the same GPS fixes as everyone else's, the rule has proven it can survive contact with the one person best placed to bend it.",
      "So the founder stands on the board exactly where his miles put him, and no higher. On a thin season he ranks thin. That is not a flaw in the design; it is the design working on its author. The rule that binds the hand that wrote it is the only kind worth writing down, and the only kind a rider has any reason to believe."
    ),
  },
  {
    slug: "you-cannot-gift-a-summit",
    title: "You cannot gift a summit",
    summary:
      "Standing is welded to the body that earned it, and anything you can give away was never earned in the first place.",
    published: "2026-08-11",
    law: "I",
    body: j(
      "A summit is not a thing you own; it is a thing you did. You cannot wrap it, mail it, or set it down in front of someone who was not there. What you kept was never the ground -- the ground stays where it is -- but the fact that your body was on it when the coordinate was read.",
      "So standing does not transfer, and the refusal is not a shortcoming of the software. A rider cannot buy a friend a rank. A rider cannot will a position to an heir, cannot cut a record in half and hand the better piece to someone who stayed home. The point is welded to a person who was in a place. Move the person out of the place and the point does not travel with them.",
      "This is the oldest test there is. A thing you can give away was never earned. Anything transferable -- currency, a title bought and sold on, a badge minted by a payment -- carries no information about the one who holds it, because it passed through hands that did nothing to deserve it. The instant a summit becomes giftable it stops being a summit and becomes a token, and a token proves only that someone, somewhere, had one to spare.",
      "Inheritance is the same error in a longer coat. A record handed down is a story about the dead, not a claim about the living. The rider who receives it has stood nowhere. The mountain does not learn their name by the transfer, and neither does the board, because the board was never recording ownership -- it was recording presence.",
      "So we make the thing unhandable on purpose. Not to be cruel, but to keep it honest. A standing you can lend, sell, or bequeath is a standing that has already come loose from the body that made it. Keep it bolted to the body and it stays worth having, for one reason only: the only way to hold it is to go and stand there yourself."
    ),
  },
  {
    slug: "the-farm-is-not-the-hunt",
    title: "The farm is not the hunt",
    summary:
      "Farming check-ins is not earning faster -- it is forging a receipt for a trip nobody took, and verification is what tells the two apart.",
    published: "2026-08-11",
    law: "I",
    body: j(
      "A hunt has a place, a body in it, and the real chance of coming home with nothing. A farm has none of these. A farm is a loop run for yield, and the yield is the whole of it. When a rider learns to farm check-ins -- to stack them, to spoof them, to feed a coordinate to the record from a couch that never moved -- they have not found a faster way to earn. They have stopped earning.",
      "The gap between a farmed point and a hunted one is not a difference of degree. A record is a single claim: a person was here. Verification is the machinery that keeps the claim honest, that ties the point to a body which drove the road, found the way in, and stood on the ground long enough for it to be true. Break that tie and the point still displays, but it now says nothing.",
      "So the check-in is guarded, and the guarding is not friction to be smoothed away. It is the product. A coordinate is cheap; anyone can type one. What is expensive, and therefore worth recording, is the going -- the fuel, the hours, the wrong turns, the arrival. Verification exists to price that in and to refuse the counterfeit that skips it.",
      "The farmer's error is to mistake the number for the reward. The number was only ever a receipt for the effort behind it. Inflate the number without the effort and you have forged the receipt while leaving the purchase undone. A leaderboard full of farmed points is not a leaderboard that got easier to climb. It is one that no longer measures anything, and a measure that measures nothing is thrown out.",
      "A real standing and a farmed one look identical for exactly as long as nobody checks. Checking is the entire discipline. The rider who hunts wants to be checked, because the check is what turns a day on the mountain into a thing that counts. The rider who farms fears it, which is the only confession the system ever needs."
    ),
  },
  {
    slug: "earning-outlasts-the-quarter",
    title: "Earning outlasts the quarter",
    summary:
      "Pay-to-rank wins the quarter it launches and loses the asset, because earned standing compounds while a purchased board is worth less with every buy-in.",
    published: "2026-08-11",
    law: "I",
    body: j(
      "A board you can buy into is bought into on launch day, and it pays that day. The revenue is real; it clears in the quarter, and no spreadsheet argues with it. The trouble is always on a later page.",
      "Earned standing compounds. A check-in this season sits on top of every check-in before it, and each one means a little more for the company it keeps. Time works for it. The rider who has been reaching places for three years holds something a rider starting today cannot assemble by paying -- only by driving the same three years.",
      "A purchased board runs the other way. It is worth most the hour it opens and less every time someone buys in behind. Each new receipt at the top explains the ones beneath it: the position was for sale, and the price is all it records. The board fills with cards and empties of meaning.",
      "So the two curves cross. Pay-to-rank wins the quarter it launches and loses the asset, because the standing it sells stops being worth selling. Earned rank gives up nothing at launch and gains for years, since the thing being measured is exactly the thing that cannot be rushed.",
      "The revenue and the cost never share a page. The revenue lands this quarter, named and booked. The cost arrives later, unbooked, as a board nobody trusts and a rank nobody envies. The short line is longer than it looks, and the constraint that forgoes it is cheaper than it looks."
    ),
  },
  {
    slug: "the-price-of-refusing-the-sale",
    title: "The price of refusing the sale",
    summary:
      "Never selling position costs real revenue, and that cost is the moat -- a competitor can copy any feature in a quarter but cannot make a purchasable leaderboard mean anything.",
    published: "2026-08-11",
    law: "I",
    body: j(
      "Refusing to sell position is not free. There is a real number attached, and it is not small. A tier that let riders skip the line, priced and shipped, would convert. The people who model these things are not wrong about the money. They are wrong about what the money buys.",
      "Every feature in this category is a quarter's work for anyone who wants it. Maps, routes, a social layer, a progression system -- name one and a competitor can have it by the next release. Features are not defensible. They are a to-do list everyone shares.",
      "The one thing that cannot be shipped is a leaderboard that already means something. Meaning is not a feature; it is a history. It is built by riders standing in real places over real years, and there is no version of it that arrives on a release date. A rival can copy the board. A rival cannot copy the years that made ours worth reading.",
      "The moment a board can be bought into, those years stop counting -- for them, and for us if we followed. A purchasable leaderboard is the one thing a competitor can never retroactively fix, because the fix is the constraint we are paying for right now.",
      "So the cost is not a tax tolerated on principle. It is the principle earning out. The revenue we refuse is the exact price of the only thing here that a quarter of engineering cannot reproduce. A cheaper moat is crossed with cheaper effort. This one costs money every quarter, which is precisely why it holds."
    ),
  },
  {
    slug: "the-vocabulary-of-flight",
    title: "The vocabulary of flight",
    summary:
      "The category speaks one register of leaving, and a product that sells the feeling of flight is selling a mood that does not survive the second week.",
    published: "2026-08-11",
    law: "II",
    body: j(
      "The category speaks one register, and it is the register of leaving. Break the routine. Run from the desk. The horizon as a door held open. Read enough listings and the verbs blur into a single instruction -- go, so that you can stop being where you are.",
      "The register is the tell. A product that sells the sensation of departure rather than the road itself has confessed what it is: a mood, billed monthly. The mood is genuine. It is also the cheapest thing on offer, because every competitor can manufacture it with a photograph and a font.",
      "A feeling of flight does not survive the second week. The novelty that carried the first days spends itself, the road turns into water and weather and repair, and the sensation the ad promised is nowhere in the pannier. What remains is the road, which was always the actual product, and the rider, who was never leaving anything so much as relocating it.",
      "So the vocabulary matters more than it looks. Words that frame the road as an exit train the rider to expect deliverance, and deliverance is precisely what the road does not sell. When the feeling burns off, a rider taught to want the feeling concludes the road failed. It did not. The pitch did.",
      "This site does not speak the register of flight, and a build script enforces the omission. Break-the-routine promises are absent from the body copy not because they fail to convert -- they convert well -- but because they lie about the second week. A doctrine that lets a convenient lie into its own copy is not a doctrine. It is marketing wearing the coat."
    ),
  },
  {
    slug: "you-arrive-as-you-left",
    title: "You arrive as you left",
    summary:
      "The road does not deliver a rider from who they are; it strips away the walls and hands back a plainer look at the same person.",
    published: "2026-08-11",
    law: "II",
    body: j(
      "The oldest promise in the category is transformation. Take the road and become someone else -- lighter, freer, unbound. It is a seductive promise because it is almost true. The road does change riders. It simply does not change them into strangers.",
      "You bring yourself. The same habits ride shotgun. The same restlessness that could not sit still in a house cannot sit still in a van; it has only lost the walls that used to contain it. Whatever you were avoiding at the desk is smaller now, and closer, and traveling under your own name.",
      "This is not a warning. It is the offer, stated honestly. The road delivers no rider from who they are. It removes the scaffolding -- the routine, the rooms, the hundred small distractions -- that let a person hold themselves at arm's length. What is left is a harder, clearer look, taken at altitude, with fewer places to put the eyes.",
      "A rider who boards expecting deliverance will read that clarity as failure. The old restlessness followed me here, so the road is broken. The road is not broken. It is working exactly as it works, which is to strip, not to save.",
      "Transmutation is the older and truer word. You do not exit the self on the road; you put it through something and see what holds. The rider who returns is the same rider, tempered -- or the same rider, unchanged, now with proof. Both are worth more than the fantasy of arriving as somebody new."
    ),
  },
  {
    slug: "the-discipline-is-the-freedom",
    title: "The discipline is the freedom",
    summary:
      "The logistics riders picture as a cage are the frame that keeps a season upright; freedom on the road is structure carried well, not structure shed.",
    published: "2026-08-11",
    law: "II",
    body: j(
      "The category sells the road as a shedding of structure. Put the calendar down, point the van somewhere, let the horizon sort the rest. It photographs well and it fails on the second night, when the tank is dry and there is nowhere marked to fill it.",
      "Water, power, weather, repair, the checklist -- riders imagine these as the bars of a cage they are driving away from. They are the opposite. They are the frame that holds a season upright. A rider with systems that hold stays out; a rider who packed a feeling comes home early and calls it a lesson.",
      "Freedom on the road is not the absence of structure. It is the structure, carried well enough that you stop noticing it. The tank you filled this morning is why the afternoon is yours. The battery you sized correctly is why the cold night is uneventful. Every hour that felt unplanned was bought by a plan you already ran.",
      "This is the part the break-the-routine promises leave out, because discipline does not sell as well as departure. But departure is a single day. What comes after is arithmetic -- liters, amps, grades, forecasts -- and the arithmetic is what keeps you free to look up from it.",
      "So the doctrine does not treat the checklist as a compromise with the dream. The checklist is the dream, made load-bearing. A rider who resents the logistics has misread the terms. The logistics are not the price of the road; they are the road, and mastering them is the only version of the freedom that outlasts the first week."
    ),
  },
  {
    slug: "a-season-is-labor",
    title: "A season is labor",
    summary:
      "A season out is labor, not a mood, and the riders who last are the ones who expected the work and equipped for it.",
    published: "2026-08-11",
    law: "II",
    body: j(
      "A season out is work. Not a metaphor for work, not work-adjacent leisure -- labor, the kind that leaves your hands dirty and your evenings spoken for. Sourcing water. Reading the sky before it turns. Fixing what broke today so it does not strand you tomorrow, and then doing all of it again when tomorrow comes.",
      "The category is built to hide this. It sells the view and crops out the arm holding the van together. The romance survives exactly until a dead battery at altitude, where the temperature is dropping and the nearest help is a day's drive down a road you have not scouted. There the feeling evaporates and the labor is all that is left.",
      "Naming it labor is not discouragement. It is respect -- for the road, and for the riders who actually stay on it. A season honestly described is more inviting than a season oversold, because the rider who arrives expecting work is not ambushed by it. The one who arrives expecting a holiday is.",
      "The riders who last are the ones who budgeted for the labor before they left. They carried spares because things break. They learned the weather because the weather does not care what they planned. They treated the road as a job they had chosen, and a chosen job is a thing you can be good at.",
      "This is why the product is a set of tools and not a mood. A mood cannot tell you where the water is or whether the pass is open. Work can be equipped; a feeling cannot. Call the season what it is, and you can prepare for it. Call it a dream, and it will bill you the difference -- at altitude, in the cold, with a dead cell and no plan."
    ),
  },
  {
    slug: "the-hunt-replaces-the-escape",
    title: "The hunt replaces the escape",
    summary:
      "The category sells flight from what you are running from; a hunt is defined by the place you are after, and that reframing retires the vocabulary of leaving.",
    published: "2026-08-11",
    law: "II",
    body: j(
      "An escape is defined backward. It takes its shape from whatever stands behind the rider -- the job, the town, the year that went wrong -- and points away from it. The direction is arbitrary. Any road that leads out will serve, because the destination was never the reason for leaving.",
      "A hunt is defined forward. It has an object: a specific place, named, at known coordinates, that exists whether or not anyone ever reaches it. The distance is not a measure of how far home now sits behind you. It is a measure of what stands between a rider and the thing they are after.",
      "This is not a change of mood. It is a change of what the road is for. A rider running from something arrives nowhere in particular and calls it freedom. A rider hunting something arrives at a gate, finds it open or closed, and either way holds an answer that did not exist before they set out.",
      "The vocabulary follows the frame. Flight needs a whole register of break-the-routine promises, because it has nothing concrete to point at and must borrow feeling instead. A hunt needs none of that language. It names the place, records the reaching of it, and lets the record speak. When the destination is real and earned, the poetry of leaving becomes unnecessary.",
      "So the road stops being an exit and becomes a pursuit. What a rider was fleeing is still there on their return; that was always the flaw in fleeing. But what they were hunting is now on the record, confirmed, at a coordinate, and it cannot be taken back. The rider who came home did not get away with something. They caught something."
    ),
  },
  {
    slug: "the-road-keeps-no-secrets",
    title: "The road keeps no secrets",
    summary:
      "Enough time on the road exposes a rider rather than hiding one, and the honest response is to work with what it shows, not to outrun it.",
    published: "2026-08-11",
    law: "II",
    body: j(
      "A rider takes to the road expecting cover. Distance reads like concealment: enough miles, surely, and whatever you carried out grows smaller in the mirror. It does not. Distance is not a solvent. The road is closer to a mirror than a curtain.",
      "Time out strips a person down to what they actually do when no one is watching and nothing is easy. The habits kept hidden at home have more room out here, not less. Solitude does not delete a temper; it removes the audience that used to hold it in check. Whatever a rider brings, the road brings back into view -- larger, unshaded, hard to look past.",
      "This is the difference between transmutation and avoidance. Avoidance drives until the thing is out of sight and mistakes the horizon for a cure. Transmutation lets the road show the thing plainly and then does the work in front of it. The first is only motion. The second is discipline.",
      "The honest response to what the road exposes is not more speed. It is to stop and work with what stands in front of you. A rider who meets their own impatience at a washed-out crossing has been handed information, not an insult. The crossing did not create the impatience. It made it visible, where it could finally be dealt with.",
      "This is why the road is a discipline taken up and not a hiding place fled to. It keeps no secrets, least of all a rider's own. The one who understands that stops asking the road for cover and starts letting it teach. What it returns is not flattering. It is true, which is worth more."
    ),
  },
  {
    slug: "rules-that-run-as-code",
    title: "Rules that run as code",
    summary:
      "A law that can only be quoted is a wish; a law that can fail a build is a rule.",
    published: "2026-08-11",
    law: "III",
    body: j(
      "A doctrine printed on an about page asks nothing of anyone. It is read once, agreed with, and never consulted again. Nobody stands at a decision and feels it press. A belief that never costs anything to hold is not a belief a site can be trusted to keep, because the day it becomes inconvenient there is no mechanism to stop a rider from setting it down.",
      "So the laws here do not live in a manifesto. They live where a machine checks them. The linter reads the body copy on its way to deploy, and the language of flight -- break-the-routine promises, the whole vocabulary of leaving something behind -- fails the build by name. Not flagged for review. Failed. The deploy does not ship until the sentence is gone.",
      "The pricing table is held the same way. A function reads every tier before it renders, and if any row implies that standing can be bought -- a higher rank behind a larger payment, position sold as an unlock -- it throws. The page does not degrade gracefully. It refuses to exist. Law I is not a paragraph a rider can appeal to; it is a condition the build cannot satisfy while violating.",
      "This is the difference between a rule and a wish. A wish is stated and admired. A rule has teeth somewhere a person cannot talk their way past. The test of whether you hold a principle is not whether you can recite it -- it is whether something you built will stop you when you break it, before anyone outside can see.",
      "The property that matters is not neatness. It is that the doctrine outlives the people who wrote it. A new rider on the codebase who has never read a word of Via Draconis cannot violate it by accident, because the machine that never read it either will halt them and name the law and point at the line. Discipline that depends on memory is already lost. Discipline compiled into the pipeline holds while no one is watching.",
      "A site that preached discipline and shipped its own contradictions would be the argument, refuted in public. Here the argument and the enforcement are the same object. The rules run as code because a rule that cannot fail a build was never a rule -- only a sentence someone hoped would be enough."
    ),
  },
  {
    slug: "one-source-of-truth",
    title: "One source of truth",
    summary:
      "Every structured claim the site makes about itself flows through a single emitter, because scattered truth drifts.",
    published: "2026-08-11",
    law: "III",
    body: j(
      "Every structured claim this site makes about itself -- who authored a thing, what an objective is, which property belongs to which name -- passes through one emitter. There is exactly one place each fact is stated. Write it anywhere else and the build fails. This looks like a preference for tidy files. It is not about tidiness at all.",
      "Scattered truth drifts. State the same fact in two places and you have not made it twice as certain; you have made a future where the two disagree. One gets edited, the other is forgotten, and now the site says two things. Nobody chose the contradiction. It arrived on its own, the way rust arrives, because two copies of a fact are two things that must be kept identical by hand forever, and hands do not do forever.",
      "The reader who suffers this is not a rider. It is the index -- the machine that reads the structured claims and decides what the site means. Feed it one author on the essay and a different spelling of that author on the entry, and it does not throw up its hands. It learns that these are two people, or that this one is uncertain, and it lowers its confidence in both. A contradiction is not ignored. It is absorbed, and it costs you standing you cannot see being spent.",
      "So the discipline is upstream of the writing. Decide, once, that a thing is said in exactly one place, and every other place that needs it asks that place. The author identifier on a Codex entry is the same object as the author on the essay across the domain, not a string that happens to match today. Matching-today is how drift begins. Being-the-same-object is how it cannot.",
      "The prose is untouched by this. A rider reads the same sentences either way. What changes is whether anything downstream can tell that two claims come from one source, or has to guess -- and a system built on earned truth cannot afford to make the index guess. The single emitter is not a convenience granted to the developer. It is a refusal to let the site quietly contradict itself while everyone assumes it agrees.",
      "One place a thing is said. Everything that needs it points back. That is not a filing convention. It is the architecture deciding, in advance, that there will never be a second version to go wrong."
    ),
  },
  {
    slug: "the-linter-is-the-editor",
    title: "The linter is the editor",
    summary:
      "A resolution to avoid a phrase decays; a check does not -- so the rule belongs in the build, not in a comment that hopes.",
    published: "2026-08-11",
    law: "III",
    body: j(
      "A rider sets out to avoid a phrase. Three thousand words later, tired and carried by momentum, the rider writes it anyway. The resolve was real and it did not matter. Intention is a state that decays. A check is a state that does not.",
      "This is the whole case for letting a machine hold the line. A human editor tires, grows fond of a sentence, reads past the flaw on the fourth pass because it survived the first three. A linter reads every line as if it were the first. It has no favourites and no fatigue, and it cannot be talked into an afternoon off.",
      "So the doctrine here does not rest in anyone's discipline. Break-the-routine vocabulary in body copy fails the build. A banned string anywhere stops the deploy and names the file and the line. The rule is not a resolution a rider renews each morning. It is a wall a rider cannot walk through.",
      "There is a tell for when you are doing this wrong. If you catch yourself writing a comment that says remember not to do X, stop. The comment is a confession that the rule lives only in attention, and attention is exactly the thing that gives out. A comment does not enforce. It hopes.",
      "The correct move is to find the check that makes X impossible and extend it. A note left for future riders is a rule you have already decided not to keep. Every reminder is a linter you chose not to write.",
      "The editor that never sleeps was never a person. Build it once and it holds the line long after the writer has forgotten there was a line to hold."
    ),
  },
  {
    slug: "withholding-as-architecture",
    title: "Withholding as architecture",
    summary:
      "Whether a record enters the index is decided by a confirmation threshold in the code, not an editor's judgement -- and the count of what is withheld is published on purpose.",
    published: "2026-08-11",
    law: "III",
    body: j(
      "An editor decides what is good enough to run. That is judgement, and judgement is precisely what this index declines to trust. Whether a record appears is not a call anyone makes on the day. It is a condition the record either meets or does not.",
      "A record enters the index only after enough independent riders have confirmed it on site. Not enough because someone felt sure -- enough because a count crossed a threshold written into the query that builds the page. Confidence is editorial. A threshold is architecture. One can be argued into an exception; the other cannot be flattered.",
      "Everything below the line still exists. It answers at its own URL, whole, to any rider who follows a link. It is not hidden and it is not deleted. It is simply kept out of the index until it earns its place there, which is a different thing from being unpublished.",
      "The withholding is not an embarrassment to be smoothed over. The count of what is held back is printed on the page, on purpose. A number a site has chosen not to publish tells you the site kept a standard and applied it. Silence about that count would be the deception. The count is the honesty.",
      "This is why the gate cannot be an about-page promise. A promise to withhold breaks the first inconvenient afternoon. A query that filters on a confirmation count breaks only by being rewritten, in the open, where the change carries a name and an author.",
      "An index you can talk your way into is a directory. An index you reach only by crossing a threshold is a claim. The difference is not the writing. It is whether a machine, not a mood, decides who is in."
    ),
  },
  {
    slug: "a-constraint-you-cannot-forget",
    title: "A constraint you cannot forget",
    summary:
      "Why the private default is enforced inside the view rather than trusted to memory, and why an enforced impossibility beats a remembered rule.",
    published: "2026-08-11",
    law: "III",
    body: j(
      "A rule you have to remember is a rule you will eventually break. Not from malice -- from Tuesday. From the ninth deploy of a long week, from the new hand who never read the doctrine, from the clause that was true when it was written and got copied wrong three files later. Vigilance is a cost paid every day, and every day is a fresh chance to skip it.",
      "So the strongest rule is not the one written loudest. It is the one the system will not let you break. Move the discipline off the person and into the structure, and the question stops being whether anyone remembered. It becomes whether the thing can happen at all.",
      "Take the private default. Every rider is silent until they choose otherwise, and the honest way to hold that is not a note in the style guide asking developers to check a flag. It is a filter that lives inside the view every public page draws from -- so the exclusion is not something code has to add, it is something code cannot remove. A forgotten clause elsewhere leaks nothing, because there is no elsewhere the private rider passes through.",
      "This is the difference between a policy and a wall. A policy is a promise about future attention. A wall does not care how tired you are. Intention forgets; architecture does not, because forgetting is a property of minds, and the wall has none.",
      "The method generalises past privacy. Anywhere the doctrine depends on someone remembering, it is already broken -- it has only not been tested yet. The work is to turn each habit of vigilance into an enforced impossibility, so the rule holds on the worst day and not only the careful one. A constraint you can forget is a suggestion. A constraint you cannot is the only kind worth writing down."
    ),
  },
  {
    slug: "the-half-life-of-a-fact",
    title: "The half-life of a fact",
    summary:
      "Why a site record past its confirmation window falls out of the index on its own, because facts about places decay and the structure has to assume it.",
    published: "2026-08-11",
    law: "III",
    body: j(
      "A fact about a place is not a constant. It is a measurement with a decay curve. A gate open last season is chained this one. A spring marked reliable runs dry in a bad year. The coordinate holds; almost nothing else does. Every claim on a site record is quietly aging from the moment it was confirmed.",
      "Most directories pretend otherwise. A note entered in one year sits on the page five years later with the confidence it had the day it was typed, as if the ground had signed a contract to stay the way someone found it. It did not. The road does not consult your database before it changes.",
      "So freshness cannot be left to goodwill -- to a rider remembering to come back and re-check, to an editor auditing entries by hand. Goodwill is vigilance, and vigilance is the thing that fails. The half-life has to be built into the structure. A claim carries the date it was confirmed, and a claim past its window falls out of the index on its own, without anyone deciding to pull it.",
      "The record does not vanish. It stops asserting. It moves from something the site vouches for to something the site holds but no longer stands behind, and it says which. An unconfirmed claim presented as current is worse than a blank, because a blank sends you to go and look, and a stale fact sends you to a chained gate at dusk.",
      "The architecture assumes facts rot, and accounts for it before anyone asks. That is the whole posture: build for the decay you know is coming, not the freshness you wish would last. A site that only tells you what was once true is a museum. A site that tells you what is still true has to be willing to forget."
    ),
  },
  {
    slug: "opt-in-is-the-default-no",
    title: "Opt-in is the default no",
    summary:
      "The privacy flag defaults to false, so silence is the assumed condition and only a rider can break it about themselves.",
    published: "2026-08-11",
    law: "IV",
    body: j(
      "Most social layers begin by assuming your consent. You do a thing, a profile appears, and the work of silence is left to you to arrange afterward. Presence is granted on arrival, and the only move remaining to a rider is to object to it.",
      "Here the order is reversed. The privacy flag defaults to false, which is not a shrug but a sentence: a rider is invisible until they say otherwise. Nobody has to switch anything off to disappear, because they were never switched on. Absence is not a setting to go hunting for. It is the ground state.",
      "The distinction sounds small and is the whole ethic. Visible-until-you-object treats presence as the natural condition and privacy as the exception a rider must claim. Invisible-until-you-choose treats silence as the natural condition and presence as the exception a rider must author. Only one of those respects the rider who never opens the settings.",
      "There is a reason to keep this in the database and not the interface. A default that lives in a toggle can be undone by a forgotten line of application code, an eager feature, a migration that assumed the friendlier thing. A default that lives in the column cannot. The view feeding every public page filters on the flag inside its own definition, so nothing a developer forgets can publish a rider who did not ask.",
      "And only the rider can break the silence about themselves. Not the aggregate, not a recommendation engine, not a well-meaning surfacing of active riders nearby. A check-in is a fact about where a body stood; whether that fact becomes public is a separate act, taken once, by the single person it belongs to. The default is not a convenience. It is a statement about who owns the telling."
    ),
  },
  {
    slug: "a-404-is-a-kindness",
    title: "A 404 is a kindness",
    summary:
      "A private rider returns 404, not 403, because a forbidden reply would confirm the rider exists -- and confirmation is the one thing the law refuses to give.",
    published: "2026-08-11",
    law: "IV",
    body: j(
      "Ask the site for a private rider and it does not refuse you. It fails to find them. The response is a 404 -- not here -- and never a 403, which would mean here, but not for you.",
      "The difference is the whole law compressed into a status code. A 403 is a confession. It admits the rider exists, that the trailname is taken, that someone stands behind the door, and merely declines to open it. Line up a dictionary of names, try them one at a time, and every forbidden reply is a yes. That is not privacy. That is an enumeration oracle wearing a lock.",
      "A 404 says nothing, and saying nothing is the entire point. Not found and never registered have to look identical from outside, because the moment they diverge the silence has a seam, and a seam is something a stranger can pull.",
      "This costs a small honesty that most systems are unwilling to give up. It feels more truthful to tell a rider the page exists but is closed to them. It is not more truthful; it is more talkative, and talk is precisely what the private rider asked the site not to do on their behalf.",
      "So the kindness is in the refusal to distinguish. The rider who went somewhere and told nobody is owed a world that cannot be made to admit they were ever in it. A 404 is not the site being unhelpful. It is the site keeping a promise: that a private presence leaves no edge to catch, no difference for a script to measure, no way to turn a guessed name into a confirmation."
    ),
  },
  {
    slug: "the-village-is-not-a-feed",
    title: "The Village is not a feed",
    summary:
      "Road intel is not a broadcast; the Village holds depth among riders who opted in, because a place shared with the whole internet is a place about to be ruined.",
    published: "2026-08-11",
    law: "IV",
    body: j(
      "The category runs on broadcast. Every stop becomes content, every campsite a post, every quiet pullout a pin dropped for the whole internet to find. The feed is hungry and it does not discriminate -- a spot worth keeping and a spot worth forgetting arrive in the same scroll, timestamped, geotagged, and spent.",
      "The Village is not that. It is a room, not a transmission. Depth moves inside it because riders chose to enter, and what a rider knows does not become everyone's the instant it is spoken. There is a difference between telling three people who will use a thing well and telling a million who will use it up.",
      "The distinction is not snobbery. A place handed to the whole feed is a place with a clock running on it. The road note that circulates widely stops describing the place it named, because the place it named no longer exists in the state described -- the gate is chained now, the spring is trampled, the pullout has a booth and a fee. Broadcast does not preserve a spot. It consumes it.",
      "So not everything a rider knows is for everyone, and the Village is built to hold that asymmetry rather than flatten it. Some intel is public because it should be. Some is kept among riders who have earned the room and will treat what they are given as something on loan -- to be used, not reposted.",
      "The feed measures reach. The Village measures whether the place is still there next season. These are different instruments and they do not agree. We built the one that keeps the road worth driving, and left the other to the category that mistakes an audience for a company on the trail."
    ),
  },
  {
    slug: "what-we-do-not-collect",
    title: "What we do not collect",
    summary:
      "The strongest privacy guarantee is absence -- data never gathered cannot leak, be subpoenaed, or be sold, and restraint at the point of collection outlasts any promise made about data already held.",
    published: "2026-08-11",
    law: "IV",
    body: j(
      "The strongest thing you can say about a piece of data is that it does not exist. Every promise made about data held is a promise that can break: the encryption that ages out, the breach nobody planned, the subpoena, the acquisition that rewrites the terms, the engineer who queries a table they should not. A field that was never filled has none of these failure modes. Absence is the one guarantee that cannot be revoked.",
      "So the discipline sits upstream of storage. Most real privacy work happens at the point of collection, where the honest question is not how will we protect this but why are we asking for it at all. The category collects by reflex -- location history, contact lists, the shape of who a rider travels with -- on the theory that data is an asset and more of it is more asset.",
      "It is also a liability, and the liability arrives whether or not the asset is ever used. Data held is data that can leak, be compelled, be sold in the wreckage of a company that folded, or be bent to a purpose nobody agreed to when they handed it over. The only copy safe from all of that is the copy never made.",
      "So we ask for less. A rider's precise movements are the rider's own; the app does not need a ledger of every road driven to do its work, and so it does not keep one. What is not gathered cannot be lost, cannot be leaked, cannot be turned against the person who trusted us. Restraint at the door is worth more than any vault behind it.",
      "This is unglamorous. There is no dashboard for the data you declined to collect, no metric that rewards the field left off the form. But the quietest line in the whole system is the one that protects the most: we did not ask, so there is nothing to tell."
    ),
  },
  {
    slug: "the-weight-of-not-posting",
    title: "The weight of not posting",
    summary:
      "A rider who does not broadcast every stop is not failing to participate; silence is a signal the doctrine protects.",
    published: "2026-08-11",
    law: "IV",
    body: j(
      "A rider who drives to a place, stands there, and tells nobody has not done half a thing. They have done the whole thing. The road does not require a witness to have been travelled, and the record does not become more true because a stranger watched it happen.",
      "The category assumes the opposite. Every mile is content, every stop is a post, and a day that goes unshared reads as a day wasted. Under that assumption silence looks like failure -- a rider who dropped off, lost interest, stopped showing up. But not-saying is not the same as having nothing to say. It is a decision, and decisions have weight.",
      "There is a difference between the private and the hidden. Hidden implies a locked door, a thing withheld that someone is entitled to and cannot reach. Private is quieter than that. A rider who keeps a season to themselves owes no one an account of it, and the product that serves them should not imply a debt. This is why a private rider returns nothing rather than a refusal. A refusal admits there was something there to refuse. Silence admits nothing at all.",
      "The record stays honest partly because it does not demand performance. If every objective had to be broadcast to count, the log would fill with the miles worth showing and thin out wherever the driving got unglamorous or the rider simply did not feel like an audience. What you would have is not a record of where riders went. It is a record of where they chose to be seen.",
      "So discretion is not a gap in the doctrine. It is load-bearing. A rider exercising it is not opting out of the thing; they are exercising exactly the right the law was written to protect. The stops nobody heard about still happened, still count, still sit in the record where only the rider can find them. That they are quiet does not make them light."
    ),
  },
  {
    slug: "via-draconis",
    title: "Via Draconis",
    summary:
      "The way of the dragon is the single spine under all four laws: earned not given, transmuted not fled, built not asserted, and silent by default.",
    published: "2026-08-11",
    body: j(
      "Via Draconis is the way of the dragon, and it is older than the app that carries it now. It began on the streets, under the name Dragon Style, before there was a product to attach it to. The doctrine came first. Everything built since is an attempt to make a structure honest enough to hold it.",
      "The way rests on a single conviction: what is worth having is reached, not received. Standing is a record of where a rider has physically been, and no amount of money moves that record by a single point. A thing you can buy at the top of the board tells you nothing about the person holding it. A thing you can only earn tells you everything. The scarcity is the value, and the rule that protects the scarcity is the asset.",
      "It holds that the road is a discipline taken up, not a flight from something left behind. The vocabulary of departure -- the break-the-routine promises, the language of running from -- does not survive a second week of weather and repair. The dragon does not run. It puts the thing it carries through fire and takes back something harder. Streets to peaks is not a change of address. It is the same discipline applied to steeper ground.",
      "It insists that discipline is architecture, not sentiment. A doctrine that lives only on an about page costs nothing to hold, so this one is enforced where a machine checks it. The privacy flag defaults closed in the database. The escape register fails the build. Standing cannot be priced because the code will not render a tier that sells it. The doctrine survives the people who forget it because it was built into the walls.",
      "And it holds that silence has weight. Presence is opt-in, absence is not a verdict, and a rider who keeps their season to themselves is owed no account of it. These four together are not four rules. They are one way, seen from four sides -- the spine the rest of the Codex hangs from, stated plainly here so nothing after it has to be guessed."
    ),
  },
  {
    slug: "why-a-dragon",
    title: "Why a dragon",
    summary:
      "The dragon is not decoration; it names a stance toward earning and endurance that predates the app and gives the doctrine its shape.",
    published: "2026-08-11",
    body: j(
      "A dragon is not a mascot. It is a figure of accumulation. In every telling that lasted, the dragon is old, and it is old because it survived -- it did not sprint through a season and burn out, it endured across a span long enough to gather a hoard and to become something the hoard made.",
      "The choice matters because most of this category reaches for the language of flight: the bird leaving the cage, the wind at the back, the break-the-routine promise. Those figures are all departure. They point away from where you stand and toward somewhere lighter. A dragon points the other direction. It stays. It guards. It is defined by what it has piled up and refused to hand over.",
      "That is the stance the doctrine inherits. Rank here is a hoard: gathered slowly, by physically reaching places, and worth exactly as much as it cannot be bought. A dragon does not sell its gold and remain a dragon. Strip the hoard and you have a large animal with no story. The refusal to part with it is not greed; it is identity.",
      "And the dragon is transformed by the accumulation, not by the escape. It does not become itself by leaving somewhere. It becomes itself by keeping, by the long pressure of holding a thing against everyone who would take it cheaply. The riders the doctrine is built for work the same way. A season is not an exit. It is another year on the hoard.",
      "So the name is load-bearing. Via Draconis -- the way of the dragon -- was chosen before there was a product to attach it to, because it already described how its founder thought about earning: slowly, permanently, without a receipt. The metaphor did not decorate the philosophy. It was the philosophy, wearing the oldest shape we have for patience that guards what it took a lifetime to gather."
    ),
  },
  {
    slug: "the-doctrine-predates-the-app",
    title: "The doctrine predates the app",
    summary:
      "The rules were written before the product existed, and that order is why the constraints feel load-bearing rather than bolted on.",
    published: "2026-08-11",
    body: j(
      "The ordinary sequence is well known. A team ships a product, finds a market, and then writes a story to explain why the product was inevitable. The philosophy arrives last, reverse-engineered from the feature list, and it reads that way -- a coat of paint over decisions that were made for other reasons.",
      "Vanism ran the sequence backward. The doctrine existed first. Via Draconis was a worldview held and written down before a single line of the app was compiled, published on another domain, argued over, lived. The product came afterward, and its job was never to justify the philosophy. Its job was to obey one already in force.",
      "That order is not a trivia point. It is the reason the constraints hold weight. When rank cannot be purchased, that is not a growth tactic dressed as principle; it is a prior conviction the product was forbidden to violate. When a private rider returns nothing instead of a locked door, the code is bending to a rule that predates it, not inventing a rule to look principled.",
      "You can feel the difference from outside. A philosophy written to sell features is infinitely flexible -- it will bless whatever ships next, because that is its function. A philosophy the product must submit to says no. It costs revenue. It forbids the easy tier. It leaves pages unpublished. Constraints that predate the thing they constrain are the only ones that ever push back.",
      "So when the doctrine feels load-bearing rather than bolted on, that is not tone. It is chronology. The rules were true before there was anything to enforce them, which is why they can still overrule the product today. Doctrine first, then the app that obeys it -- and everything difficult about the app is downstream of refusing to reverse that order."
    ),
  },
  {
    slug: "the-doctrine-under-the-merch",
    title: "The doctrine under the merch",
    summary:
      "Via Draconis lived for years on a blog behind an apparel store while the product embodying it stayed silent; the Codex brings it into the open and reveals apparel and app as expressions of one code.",
    published: "2026-08-11",
    body: j(
      "Via Draconis was written before it was read. For years it lived on a blog behind an apparel store, a doctrine folded into the back pages of a shop, reachable only by riders who already knew to look. Few did.",
      "The product that embodied it said nothing. The app shipped the whole philosophy as mechanics -- earned standing, silence by default, ground you have to reach -- and never once named the code it was built on. Two crafts ran in parallel, and neither pointed at the other.",
      "This was never humility. It was loss. A doctrine nobody can find is a doctrine nobody can be held to, and a product that hides its reasoning is only a set of features waiting to be copied. Kept apart, the idea and its expression were both the weaker for it.",
      "Discoverability here is not marketing. It is honesty. A code you cannot locate asks nothing of you, and a maker who will not point to his own reasoning is shielding it from scrutiny, not from theft.",
      "The Codex ends the separation. It brings the doctrine into the open where it is discoverable, bylined, and in git -- not ornament on an about page but the load-bearing account of why the app behaves as it does. What was buried becomes the thing you read first.",
      "Read together, the apparel and the app stop looking like two businesses. They are two expressions of one code. The shirt and the check-in are the same sentence in different materials. Cloth was the first draft. The app is the second. The Codex is the record that admits they were always the same hand."
    ),
  },
  {
    slug: "what-vanism-means",
    title: "What Vanism means",
    summary:
      "Vanism is an -ism, not a van -- a stance that treats the road as a discipline taken up and a record earned rather than a mood you buy.",
    published: "2026-08-11",
    body: j(
      "Vanism is an -ism before it is a van. The suffix does the work. It marks a stance, a way of seeing, a set of commitments -- not a vehicle, and not a lifestyle you buy into by parking somewhere scenic.",
      "The word names how a rider treats the road. Not as a mood to be purchased with a build and a hashtag, but as a discipline taken up and a record earned mile by mile. That distinction is the whole thing. One is a feeling that arrives when you go and fades when you return. The other is a practice that holds whether you feel it or not.",
      "Most of the category sells the feeling. Its vocabulary is all flight -- break-the-routine promises, the language of leaving, the road as an exit door. Vanism refuses the register. You do not go to the road to be delivered from your life. You take the road up as a way of living it.",
      "An -ism carries obligation. It says there is a right way and a wrong way, that standing is earned and never conferred, that where you have actually stood is worth more than where you say you would like to go. The name is a claim, and the claim has edges.",
      "So the name does not describe a machine. It names a code. Call yourself a rider in Vanism and you are not reporting what you drive; you are declaring how you intend to treat the ground beneath it. The van is incidental. The -ism is the point."
    ),
  },
  // ------------------------------------------------------------------ LAW I
  {
    slug: "earned-never-given",
    title: "Earned, never given",
    summary:
      "Why rank in Vanism cannot be purchased, and why that rule was written before the app existed.",
    published: "2026-08-05",
    law: "I",
    body: j(
      "There is a line in the Vanism privacy policy that reads like a payments disclosure and is actually the whole philosophy: Dragon is earned virtual currency; it is never sold for real money.",
      "Most apps in this category will sell you position. Pay more, appear higher, unlock the tier. It works, briefly, and then the thing you were ranking in stops meaning anything, because everyone can see that the top of the board is a receipt.",
      "Rank here records where you have physically been. A check-in is a GPS fix at a place, made by a person who drove the road in, found the gate, and stood there. The subscription buys maps and continuity and other riders' recent notes. It does not buy a single point of standing, and there is no tier where it starts to.",
      "That constraint costs revenue. It is worth more than the revenue, because it is the only claim in this category that a competitor cannot copy by shipping a feature."
    ),
  },
  {
    slug: "what-a-receipt-cannot-buy",
    title: "What a receipt cannot buy",
    summary:
      "Every progression system in consumer software eventually gets a purchase path. Here is what happens the week after.",
    published: "2026-08-05",
    law: "I",
    body: j(
      "The pattern is reliable enough to set a watch by. A product ships a progression system because progression retains people. Retention is measured, it works, and then someone models the revenue from letting people skip ahead.",
      "The model is always correct in the short run. People will pay to skip. Revenue goes up in the quarter it launches.",
      "What the model does not price is the week after, when the board stops being information. Standing was worth having because it told you something about the person holding it. Once any part of it is purchasable, it tells you they had a card. The signal does not degrade gradually; it inverts.",
      "So the rule is not a growth constraint that we tolerate. It is the asset. Anyone can build a database of campsites in a quarter. Nobody can retroactively make their leaderboard mean something."
    ),
  },
  {
    slug: "the-gate-is-the-product",
    title: "The gate is the product",
    summary:
      "Three check-ins, known access, eighteen months. Why we deliberately withhold pages we could publish.",
    published: "2026-08-05",
    law: "I",
    body: j(
      "There is a version of this site with five times as many pages. Every objective in the database, published on the day it is created, competing for search results immediately.",
      "That version would rank faster and be worth less. A site record with no confirmed visits is a guess with a coordinate attached, and a directory of guesses is what this category already has too much of.",
      "So an objective publishes only after three independent riders have checked in on site, the coordinates are recorded, the access status is known, and someone has confirmed it within eighteen months. Everything else exists at its URL and answers if you follow a link, but stays out of the index.",
      "The withheld count is reported on every state page, deliberately. A number we are not showing you is itself information."
    ),
  },

  // ----------------------------------------------------------------- LAW II
  {
    slug: "transmute-dont-escape",
    title: "Transmute, don't escape",
    summary:
      "The category sells flight from obligation. The road is better understood as a discipline you take up.",
    published: "2026-08-05",
    law: "II",
    body: j(
      "Search this category and the vocabulary is uniform. Break free. Leave it behind. The open road. Every one of those phrases frames the road as an exit from something.",
      "That framing does not survive contact with the road. A season out is logistics, weather, water, repair, and the same person you were when you left, now with fewer places to put them.",
      "The alternative is older than any app. You do not leave the thing behind; you put it through something. Streets to peaks is not a change of address. It is the same discipline applied to harder ground.",
      "This is why the site does not use escape language anywhere in its body copy, and why a build script checks for it. A doctrine that only appears in the manifesto is decoration. One that fails a build is a rule."
    ),
  },
  {
    slug: "the-second-week",
    title: "The second week",
    summary:
      "The first week out is a holiday. The second week is the one that tells you what you actually signed up for.",
    published: "2026-08-05",
    law: "II",
    body: j(
      "The first week is easy to romanticise because it is genuinely good. Everything is new, the novelty carries the discomfort, and the photographs are all from the first week.",
      "The second week is when the water runs out at an inconvenient hour, the road you planned around is closed, and the thing you were not thinking about at home turns out to have come along.",
      "Nobody sells the second week, which is a shame, because it is where the actual value is. It is the week that requires a system: knowing where the water is, knowing whether the road is passable, knowing what you did last time.",
      "Most of this product exists for the second week. That is not a marketing angle. It is the design brief."
    ),
  },
  {
    slug: "planning-is-not-fantasy",
    title: "Planning is not fantasy",
    summary:
      "A route you will never drive is a form of entertainment. A run you can finish is a commitment with legs.",
    published: "2026-08-05",
    law: "II",
    body: j(
      "It is easy to build a beautiful route you will never drive. Most planning tools are optimised for exactly that: the pleasure is in the making, and the artefact is a document you file.",
      "A run here is different in one specific way. Its legs are marked complete by standing at them, not by ticking them. That means a run you build is a claim about what you are going to do, and it stays open on your record until you either do it or close it.",
      "That is uncomfortable in a way a saved itinerary is not, and it is meant to be. The half-finished run in your account in September is the most honest object in the app."
    ),
  },

  // ---------------------------------------------------------------- LAW III
  {
    slug: "discipline-is-architecture",
    title: "Discipline is architecture",
    summary:
      "Why the four laws are enforced by a build script rather than stated on an about page.",
    published: "2026-08-05",
    law: "III",
    body: j(
      "A doctrine that lives on an about page costs nothing to hold. Nobody has to do anything differently, and there is no moment where holding it is inconvenient.",
      "So each of the four laws here is enforced somewhere a machine checks it. Escape vocabulary in body copy fails the build. A pricing row implying purchasable standing throws before it renders. Structured data written anywhere except one file fails. The rider privacy flag defaults closed in the database, not in a settings screen.",
      "The useful property of this is not tidiness. It is that the laws survive people. A new developer who has never read the doctrine cannot accidentally violate it, because the build stops them and tells them which law and where.",
      "The site is the proof of the claim it makes. A doctrine about discipline shipping on a site with a 404 in its own footer would be the whole argument, refuted."
    ),
  },
  {
    slug: "one-name-two-domains",
    title: "One name, two domains",
    summary:
      "Four identities were running in parallel with nothing connecting them. That is a technical problem before it is a branding one.",
    published: "2026-08-05",
    law: "III",
    body: j(
      "LOKES ONE LIMITED CO appears in App Store search results. Dragon Style has existed since 2015. Vanism is on its own domain. The founder is published, in the best piece of writing either property has, and named on neither site. A fifth social handle matches none of them.",
      "Read as branding, that is untidy. Read as architecture, it is worse: authority that should compound is being split five ways and none of the pieces is large enough to matter.",
      "The fix is not a rebrand. It is one Organization, one Person, and a graph that says plainly which properties belong to which. Every Codex entry carries the same author identifier as the essay on the other domain, so the two accumulate together instead of separately.",
      "Nothing about the writing changes. Only whether anything can tell it was written by the same person."
    ),
  },
  {
    slug: "the-road-does-not-round-up",
    title: "The road does not round up",
    summary: "On dated figures, omitted claims, and why we would rather show nothing than show an estimate.",
    published: "2026-08-05",
    law: "III",
    body: j(
      "If we cannot source a rating, the page does not carry one. If a site has fewer than three confirmed visits, the stamp says so instead of showing a number. If a competitor's price is from July, the page says it is from July.",
      "This is not caution. It is that a single invented figure poisons every real one next to it, and every figure on this site is meant to be checkable.",
      "The road works the same way. A road book that rounds up a water carry is worse than no road book, because you will trust it once."
    ),
  },

  // ----------------------------------------------------------------- LAW IV
  {
    slug: "silence-has-weight",
    title: "Silence has weight",
    summary:
      "Rider profiles are off by default, and a private profile returns nothing rather than a locked door.",
    published: "2026-08-05",
    law: "IV",
    body: j(
      "Every social layer in this category is opt-out. You contribute, a profile appears, and turning it off is a setting you find later if you look.",
      "Here it is opt-in, and the difference is not the settings screen. The public flag defaults to false in the database, and the view that feeds every public page filters on it inside its own definition -- so a forgotten line in application code cannot publish someone who did not ask to be published.",
      "There is a second decision underneath that one. A private profile returns the same response as a trailname nobody ever registered. If it returned a locked page instead, anyone could confirm which riders exist by trying names one at a time. Not found and not yours have to look identical from outside.",
      "The plainest version: going somewhere and telling nobody is a complete act. The product should not treat it as an unfinished one."
    ),
  },
  {
    slug: "no-cadence",
    title: "No cadence",
    summary: "Why there is one email, no streak counter, and nothing that pretends to miss you.",
    published: "2026-08-05",
    law: "IV",
    body: j(
      "The standard retention toolkit is well documented: streaks, loss framing, a notification schedule tuned to the hour you are most likely to open it, and a re-engagement sequence for anyone who goes quiet.",
      "All of it works. None of it is here.",
      "A product about earned standing cannot manufacture urgency about logging in, because logging in is not the thing being earned. Someone who does not open the app for four months because they were working is not lapsed. They are between seasons, and the record is still there when they come back.",
      "The email you get is the one you asked for. There is no sequence behind it."
    ),
  },

  // --------------------------------------------------------------- LINEAGE
  {
    slug: "the-skin-arc",
    title: "Skater, Base Van, Climber",
    summary:
      "The three character skins already encode the Streets-to-Peaks arc. Nobody has said so until now.",
    published: "2026-08-05",
    body: j(
      "Vanism ships three skins. Skater. Base Van. Climber. They are presented as a cosmetic choice.",
      "They are not a cosmetic choice. They are the arc: Skater is the streets, the origin, and the direct descendant of Dragon Style, which has existed since 2015. Climber is the peaks. Base Van is the passage between them, which is where almost everyone actually is.",
      "The doctrine was shipped as a product feature and then marketed as a dropdown. This entry exists to correct the record."
    ),
  },
];

export function getEntrySlugs(): string[] {
  return CODEX.map((e) => e.slug);
}

export function getEntry(slug: string): CodexEntry | undefined {
  return CODEX.find((e) => e.slug === slug);
}

export function entriesByLaw(law: string) {
  return CODEX.filter((e) => e.law === law);
}
