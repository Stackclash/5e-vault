---
obsidianUIMode: preview
location: "[[4. World Almanac/Regions/Greenfall.md|Greenfall]]"
images:
  - z_Assets/PlaceholderImage.png
pronounced: GRAY-fen
summary: A drowned stand of dead trees deep in the Greenfall marsh below Duskferry — officially nothing, unofficially the mouth of a cave system where the Silent Ascendency unmakes stolen magic items into raw magic.
resources: []
population: 20
terrain: marsh, flooded deadwood, sinkhole ground, limestone caves
rulers: []
government:
army:
religions: []
imports: []
exports: []
aliases:
  - The Hollow
tags:
  - location
  - place-of-interest
---
> [!infobox]
> # `=this.file.name`
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
>```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
>  |
> ---|---|
> **Pronounced:** | `INPUT[text:pronounced]` |
> **Summary:** | `INPUT[text:summary]` |
> **Location:** | `INPUT[suggester(optionQuery(#location)):location]` |
> **Resource(s):** | `INPUT[inlineListSuggester(optionQuery("6. Resources")):resources]` |
> ###### Info
>  |
> ---|---|
> **Alias:** | `INPUT[inlineList:aliases]` |
> **Population:** | `INPUT[number:population]` |
> **Terrain:** | `INPUT[text:terrain]` |
> ###### Politics
>  |
> ---|---|
> **Ruler(s):** | `INPUT[inlineListSuggester(optionQuery("#npc")):rulers]` |
> **Govt Type:** | `INPUT[text:government]` |
> **Army:** | `INPUT[text:army]` |
> **Religions:** | `INPUT[inlineList:religions]` |
> ###### Logistics
>  |
> ---|---|
> **Imports:** | `INPUT[inlineList:imports]` |
> **Exports:** | `INPUT[inlineList:exports]` |
> ###### Travel Distances
> ```dataviewjs
> dv.view('views/travelTimes', {current: dv.current()})
> ```
> `BUTTON[addtravel,removetravel]`
> ```meta-bind-button
> style: primary
> id: addtravel
> label: Add Travel Distance
> hidden: true
> actions:
>   - type: runTemplaterFile
>     templateFile: "z_Templates/Templater/Functional/Add Travel Distance.md"
> ```
> ```meta-bind-button
> style: primary
> id: removetravel
> label: Remove Travel Distance
> hidden: true
> actions:
>   - type: runTemplaterFile
>     templateFile: "z_Templates/Templater/Functional/Remove Travel Distance.md"
> ```

`$= await dv.view("views/locationBreadcrumbs", {current: dv.current()})`
# **`=this.file.name`**
> [!info|bg-c-purple]- Overview
A half-day's poling below Duskferry, the river gives out into a flooded stand of dead trees nobody local will name without spitting first — bad ground, bad water, a place the Ferrymen's Guild's own charts mark only with a blank space and an old convention: *don't.* The trees died standing decades ago, for reasons no one currently living remembers, leaving a maze of grey trunks rising out of black, still water that never quite freezes and never quite warms.

At the Hollow's center, built into a low rise of drier ground that shouldn't exist in a marsh this flat, sits a squat structure of fitted stone far too old and far too well-made to have been built by the operation currently using it — repurposed, not raised, the same way [[The Cinderworks]] was repurposed rather than built.

What the structure actually is, is a **lid**. The rise isn't a rise; it's the shoulder of a limestone sinkhole, and the ancient builders capped it. Beneath the cap runs a water-carved cave system — cold, dry above the waterline, and far larger than the little stone house on top suggests. The Silent Ascendency did not dig it. They found it, unsealed it, and filled it with machinery.

Stolen magic items come down the shaft on ropes. What comes back up is nothing at all — the items are never seen again. They are *unmade* here.

## Map
Theater-of-the-mind, with a keyed layout below. Rough topology (the caves are organic — treat distances as approximate and let the party find their own lines through):

```
                     [A1] The Drowned Threshold
                                |
                          [A2] The Cap  ──── bolted iron hatch
                                |
                          [B1] The Gullet
                                |
                     [B2] The Weeping Gallery  ← hub
                          /              \
              [B3] The Cistern      [B4] The Sunken Passage
                          \              /
                     [C1] The Sorting Floor
                                |
                     [C2] The Distillery ═══ catwalk ═══╗
                                |                        ║
                     [C3] The Foundry ═══════════════════╝
                                |
                     [D1] The Reservoir ──── [D3] The Cold Room (hidden)
                                |
                     [D2] Izek's Watch
```

`$=await dv.view("views/locations", {current: dv.current()})`

`$=await dv.view("npcsInLocation", {current: dv.current()})`

## History
The cap and the cave mouth beneath it predate the Silent Ascendency by a wide margin — the same unanswered question posed by the stonework at [[The Cinderworks]] and, further back, the Amber Temple itself. Whoever fitted these stones did so to keep something shut, not to keep a workshop dry.

The Ascendency arrived perhaps a year ago, cut the seal, and built inward. Everything below the cap that isn't rock is theirs: timber stairs, iron catwalks, copper and amber pipework, and a distillation works assembled out of parts that could be bought in a dozen towns without any one purchase looking strange.

## The Cave System

*Light below the cap is patchy — cultist lanterns at work-stations, and the slow amber glow of the conduit lines. **Anyone relying on lanterns is at a disadvantage against a party with darkvision**, and the cult knows it, which is why the lanterns are never turned off. Snuffing a work-station's lamps is a legitimate and effective tactic.*

### A1 — The Drowned Threshold
The tree-maze approach and the dry rise. Unchanged from the surface approach already prepped: difficult terrain for anything without a swim speed or careful poling (**DC 12 Survival** for the cleanest line), deceptive sinkhole silt off the obvious path (**DC 13 Dexterity** save or sink to the waist, restrained until freed with a **DC 12 Strength** check or an ally's help), and one [[Amber Warden]] standing threshold guard.

**The Warden here is not the only one.** This is a Warden *manufactory* — the one outside is simply the one they finished first and could spare.

### A2 — The Cap
The stone house. Inside, old fitted stonework gives way to a bolted workroom: alchemical apparatus, fine tools laid out with a tally-clerk's fussiness, a rack of inert amber cores, and a courier's logbook tracking deliveries by date and weight.

In the floor at the back, under a hinged grate and a great deal of accumulated indifference, is a **bolted iron hatch** and the top of a timber stair going down.

> [!note] Session boundary
> A2 is where the currently prepped session stops. The hatch is visible, obviously used, and obviously not something to open at the end of a long day — a clean soft cliffhanger. Everything below is a return trip.

### B1 — The Gullet
A water-carved shaft, forty feet down, with a cult-built timber stair bolted into the rock in switchbacks. The treads are damp and several are rotten (**DC 12 Dexterity (Acrobatics)** if anyone hurries or fights here; failure means a fall of 1d4 × 10 feet and a great deal of noise).

**Sound travels straight up this shaft.** A party that stops and listens at the top gets the working rhythm of the whole complex for free — the arrhythmic clatter of the Distillery, voices, the scrape of something heavy being dragged. Reward that; it's the cheapest possible scouting and it makes the stealth run winnable.

### B2 — The Weeping Gallery — *hub*
A wide flowstone chamber, curtains of mineral drapery in sheets from the ceiling, water beading and falling constantly across every surface. Nobody works here; it's just the room everything else opens off.

**The constant dripping gives advantage on Dexterity (Stealth) checks made to move quietly through this chamber, and imposes disadvantage on Wisdom (Perception) checks that rely on hearing** — for both sides. Patrols pass through every ten minutes or so and hate it.

Two ways onward: the worked passage to **B3 The Cistern** (the obvious route, and the loud one), and a wet crack behind a flowstone column leading to **B4 The Sunken Passage** (**DC 14 Investigation** or **DC 12 Perception** to spot the draft coming out of it).

### B3 — The Cistern
A deep natural pool feeding the whole operation's water needs, ringed by the cult's living quarters — bunks, a cook fire, drying laundry, a card game that has been running for a month. Six off-shift **cultists**, plus a guard post at the far mouth manned by two **veterans** who are paid, not faithful, and who are the only people down here who look like they expect trouble.

The obvious route through. Sneaking it is **DC 15 Stealth** and requires the party to cross open floor in lantern light. Failing it is not instantly fatal — see *The Alarm Ladder* — but it is the single most likely place to lose the stealth run.

### B4 — The Sunken Passage
A partly flooded crawl that bypasses the Cistern entirely, opening into the back of the Sorting Floor behind the crate stacks.

- Roughly sixty feet of it is submerged: **DC 13 Athletics** to swim through against the cold, or trivial for anyone with a swim speed or [[Cloak Of The Manta Ray]].
- One squeeze point requires shedding heavy armor or a **DC 15 Athletics** to force.
- Cold, wet, and unpleasant on the far side — no mechanical penalty, but a party that comes through here is dripping on stone floors, which is a *visible trail* an alert cultist can follow.

**This is the intended stealth route and the reward for scouting B2 carefully.** It skips the hardest guard problem in the complex.

### C1 — The Sorting Floor
Where deliveries arrive and get catalogued. Crates, straw, a clerk's high desk with a ledger chained to it, and racks of **magic items not yet fed into the works** — the operation runs a backlog, and the backlog is worth a great deal.

Staffed by four **cultists** and one **cult fanatic** overseer during working hours.

- **Treasure.** The single best loot room in the complex, and it's *stolen goods awaiting destruction*, which makes taking them uncomplicated. Contents are the DM's pick sized to the party's needs; a reasonable default is 2–3 uncommon items and one rare, plus roughly 400 gp of unsorted coin and plate stripped off the fittings.
- **Tier 1 clue (see Secrets).** The intake ledger: items in by name, and a second column in a different hand recording *charge yielded* by weight. Items are not being resold. They are being consumed.

### C2 — The Distillery
The loudest room in the world. Three rows of **extraction cradles**, each holding a magic item clamped in an amber-veined iron frame, each slowly taking it apart — the items visibly degrading, sigils guttering, a wand going grey from the tip down. Amber distillate runs off through copper pipework and down toward the Reservoir. Iron catwalks run above the floor at two levels; a party can cross the entire room overhead without touching the ground.

Four **cultists** tending, one **cult fanatic** supervising.

**Noise:** advantage on Stealth to move quietly, disadvantage on Perception by hearing, for everyone in the room. The cult compensates with sightlines, which is what the catwalks are actually for.

### C3 — The Foundry
The heart of it. Stone Warden frames stand in iron cradles at every stage of assembly — three that are little more than legs and a spine, two nearly complete and waiting on conduits, and **one finished Amber Warden**, dormant, plugged into three amber feed lines running in from the Reservoir. A conduit-setting bench along one wall holds tools, blank amber cores, and a single filled one glowing faintly.

This is where the big fight happens. See *Encounters* below.

### D1 — The Reservoir
A domed chamber, largely natural, with a shallow basin cut into the floor and filled with distillate — a still lake of slow amber light that throws moving shadows up the walls. Six **containment glyph-stones** stand around it at even intervals, cool to the touch and audibly humming.

Feed lines run out of the basin toward the Foundry. **Casks** — sealed, waxed, stacked on pallets and marked with a courier's sigil rather than a Foundry mark — are stacked along the far wall awaiting collection.

**Tier 2 clue lives here (see Secrets):** the draw tallies. Volume distilled, volume consumed by the Foundry, volume casked. The numbers don't reconcile, and they don't reconcile *consistently*.

### D2 — Izek's Watch
A side chamber above the Reservoir with a clear view down over the basin. Sparse to the point of bleakness: a cot that hasn't been slept in, a whetstone, an unstoppered bottle of Vallakian wine gone to vinegar, and a battleaxe leaning where a person could reach it without getting up.

And a shelf of small wooden carvings, made badly, by a hand not built for fine work.

> [!warning]- DM-only — the carvings
> He carves them himself now; there's no Blinsky here to do it for him. Most are shapeless. One isn't: a tall woman, broad-shouldered, with a greatsword across her back.
>
> **This is a big swing and it is entirely optional.** It lands like a hammer on [[Yevelda Ovak]] and it forecloses any ambiguity about whether Izek remembers her fondly. If you'd rather keep him colder and more unreadable at this stage, cut the shelf entirely and leave the room bare — the scene works without it.

### D3 — The Cold Room *(hidden)*
Behind the Reservoir's north wall, past a slab that swings on a counterweight (**DC 17 Investigation** to find; the tell is that the wall is dry when everything around it weeps, and there's a wear-polish on the floor where the slab sweeps).

Inside, racked in straw like wine bottles: **finished conduits** — amber cores with souls already in them. Dozens. They are warm. If the room is quiet, and if a listener holds still long enough, they can be heard.

- The best treasure in the complex and the worst thing in it.
- A filled conduit is not a usable magic item. It is a person. Treat any attempt to weaponise one as a moral problem first and a mechanical question second; destroying one frees what's inside, which is worth narrating and worth nothing on a character sheet.
- Casks here carry the same courier sigil as the Reservoir stacks — the second Tier 2 clue.

## The Machinery

Every fixture below is usable by *both* sides. Cultists know this equipment better than the party does and will absolutely pull a lever mid-fight.

### Extraction Cradles *(C2)*
- **Salvage** — *action*, **DC 15 Arcana or thieves' tools**: free the item currently clamped in the cradle before it's fully unmade. Success recovers it intact. Failure by 5 or more destroys the item and opens a **Raw Magic Vent** at the cradle.
- **Overload** — *action*, **DC 15 Arcana**: the cradle bursts at the start of your next turn. Each creature within 15 feet makes a **DC 15 Dexterity** save, taking 4d6 force damage on a failure, half as much on a success. Leaves a Vent.

### Raw Magic Vents
Created by a burst cradle, a severed feed line, or heavy damage to the pipework. A 10-foot-radius cloud of unbound magic that lingers for 1 minute.

- A creature that enters the cloud or starts its turn there makes a **DC 15 Constitution** save, taking 3d6 force damage on a failure, half as much on a success.
- **Opportunity:** a spellcaster inside the cloud may *draw on it* when casting a spell — add 1d6 damage per spell level to a damaging spell, or +2 to the spell's save DC. Doing so forces a **DC 13 Constitution** save at the end of the turn; on a failure the caster takes 2d6 force damage and the spell's slot is expended even if it otherwise wouldn't be.

### Feed Lines *(C3 — the fight's central mechanic)*
Three amber lines run from the Reservoir into the Foundry cradles.

- **A Warden connected to a live feed line is *tethered*:** at the start of each of its turns it regains 20 hit points, and its **Amber Conduits cannot be reduced below 1 hit point** — they can't be destroyed while the feed holds.
- Each line: **AC 15, 25 hit points**, immune to poison and psychic damage. Severing one takes an attack or an *action* with tools. A severed line opens a **Raw Magic Vent** at the break.
- **Cut all three and the tether ends** — the Warden reverts to its stat block as written, and its conduits become destructible on the normal terms.
- **A cultist adjacent to a severed line can re-seat it as an action**, restoring the tether. This is what the chaff is *for*; ignoring the cultists is how a party loses this fight.

### Warden Cradles *(C3)*
- **Release** — *action*, adjacent, **DC 13**: drops an [[Unfinished Amber Warden]] out of its cradle and into the fight, hostile to everything that moves. Cultists will do this.
- **Hijack** — *action*, **DC 17 Arcana**, and requires a filled conduit in hand (from D3, or salvaged from a destroyed Warden): brings an Unfinished Warden online under the party's direction for 1 minute, after which it turns on everyone including them. Loud, risky, and the single most memorable thing anyone can do in this room.

### The Containment Ring *(D1)*
Six glyph-stones around the basin, **AC 17, 30 hit points** each.

- Destroying three or more destabilises the Reservoir. **Ten rounds later the entire deep level goes up:** every creature in C2, C3, and D1 takes 10d6 force damage (**DC 18 Dexterity** save for half), the workings are destroyed, and the caves come down behind anyone running for the Gullet.
- This is the *burn it down* option, and it's a genuine strategic win — it destroys the stockpile, which is a real dent in the Ascendency's timeline. It also destroys the evidence, the unprocessed items in C1, and every filled conduit in D3 (which frees them, if anyone wants to frame it that way).

## Encounters

### The Foundry — Izek's Exit
The set-piece. Triggered when Izek decides it's time, which he does on his own schedule regardless of how quiet the party has been (see DM Notes). He gives an order, he looks at them, and he goes.

```encounter
name: The Foundry — Izek's Exit
creatures:
  - 1: [[Amber Warden]]
  - 2: [[Unfinished Amber Warden]]
  - 2: [[Cult Fanatic]]
  - 1: [[Veteran]]
  - 4: [[Cultist]]
```

> **CR math (Lazy DM benchmark).** 5 PCs × level 10 = 50 summed levels; potentially deadly above a summed CR of 25. [[Amber Warden]] (10) + 2× [[Unfinished Amber Warden]] (5 each = 10) + 2× [[Cult Fanatic]] (2 each = 4) + [[Veteran]] (3) + 4× [[Cultist]] (⅛ each = 0.5) = **27.5** — above the deadly line before terrain is counted, and the terrain here is loaded. This is the "very challenging" fight; treat a PC going down as expected, not as a failure state.
>
> **The tether is what makes it hard.** Until all three feed lines are cut, the Warden heals 20 a round and cannot lose its conduits — it is functionally unkillable and the party's damage is going nowhere. The fight is a puzzle with a timer, not a slugging match. Give them the tell early and generously: the lines are visibly glowing, visibly *feeding* it, and a **DC 12 Arcana or Investigation** (or simply asking "what are those pipes doing") spells it out.
>
> **Difficulty dials.** Going badly — hold the second Unfinished Warden in its cradle (drops to 22.5) and have the cultists panic rather than re-seat lines. Going too easily — release the third Unfinished Warden (32.5), and have a Fanatic overload a cradle deliberately to seed Vents across the floor.
>
> **Terrain.** Two levels of catwalk (elevation, cover, and a 15-foot drop); Warden cradles as heavy cover and as loaded guns; the feed lines as the objective; Raw Magic Vents accumulating as the room comes apart. The Foundry and the Distillery connect at both floor level and catwalk level, so a fighting retreat into C2 is viable and gets *louder and worse*, not safer.
>
> **Tactics.** The Warden is stationary-ish and stupid: it attacks the nearest threat and uses Bound Wail on recharge without regard to positioning. The Unfinished ones are worse — they're barely aimed. The Fanatics do the thinking: they re-seat cut feed lines, release cradles, and use *hold person* on whoever is working on the pipework. The Veteran covers the Fanatics. The Cultists carry, panic, and pull levers.
>
> **Morale.** The cultists break when half of them are down and Izek is confirmed gone — they run for the Gullet, not at the party. The Fanatics do not break. The constructs cannot.

### Elsewhere in the complex
If the stealth run collapses early, fights scale down accordingly — a Sorting Floor scuffle is 4 [[Cultist]] and 1 [[Cult Fanatic]] (4.5, a speed bump); the Cistern is 6 [[Cultist]] and 2 [[Veteran]] (6.75, a real but survivable brawl in a bad room). Neither is meant to be the event; both are meant to make the party wish they'd taken the Sunken Passage.

## The Alarm Ladder

Stealth is the intended mode. This is the escalation track — it gives failure a cost without ending the run.

| State | Trigger | What changes | Reversible? |
|---|---|---|---|
| **0 — Quiet** | default | Two-person patrols on a ten-minute loop. Nobody is looking for anything. | — |
| **1 — Uneasy** | one failed Stealth check, or an unexplained noise | Patrols pair up and one goes to check the source. Lanterns get carried into dark corners. | Yes — go still or leave the area for 10 minutes |
| **2 — Sweep** | a body found, a second failure, an obvious disturbance | The bell at the Cistern is rung. Off-shift cultists arm up. Searching in fours. The Foundry Warden goes to standby, eyes lit. | Only by hiding well or withdrawing a level |
| **3 — Lockdown** | Izek decides, or the party is seen in C3/D1 | *Izek's Exit* triggers wherever the party is standing. | No |

**Izek's own awareness sits outside this table entirely.** See DM Notes.

## DM Notes

### Plot Hooks
- This is the concrete next link past [[Duskferry]] in the Silent Ascendency's pipeline — where stolen magic items delivered from [[The Cinderworks]] and other cells actually stop being magic items.
- The site's real value to the party is not the loot. It's the first place they can *watch* Vecna's power-harvesting happen, at scale, with their own eyes.
- Where the casked distillate goes from here is deliberately **not answerable at this site**. That's Act I, Arc 6 (The Convergence), per the campaign bible.
- [[Izek Strazni (COS)|Izek Strazni]] is here. See his note.

### Hidden Details

**The three tiers of what can be learned here.** The reveal is deliberately capped at *what the magic items are used for* — nothing at this site explains Vecna's ritual, because nobody at this site knows.

- **Tier 1 — the items are being unmade.** Easy; three clues, any one is enough. (1) The C1 intake ledger's second column, recording *charge yielded* rather than resale value. (2) Thirty seconds of watching a cradle work in C2. (3) Any cultist, who will say so freely and with pride — they think it's holy work.
- **Tier 2 — not all of it goes into Wardens.** Hard; requires real effort, and no single cultist can confirm it. (1) The D1 draw tallies: distilled volume, Foundry consumption, casked volume — roughly a third of everything made here leaves in casks. (2) The casks themselves, in D1 and D3, carrying a courier sigil instead of a Foundry mark. (3) A [[5. Mechanics/Bestiary/Humanoid/Cult Fanatic.md|cult fanatic]] under real pressure, who has loaded those casks for months and been told explicitly not to count them — and who has counted them.
- **Not available here, at all.** What the casked distillate is *for*. Izek knows and will not say. The Fanatics genuinely don't. Hold this line the same way [[Ostwin Reyes]] holds his — it is a true dead end at this depth of the chain, not stonewalling.

**The Izek inference — visual, not informational.** Izek's grafted limbs carry the same thread-thin amber veining as the Wardens' conduits and as the graft in [[Marrow]]'s corpse. A party that looks at him properly can connect the three without being told anything: whatever made Izek's arm and whatever is being made in this cave came from the same place. That's a gut-punch about *Vecna's reach*, and it costs nothing from the Great Library's reveal.

**The cap was a seal.** The ancient stonework was built to keep the caves shut, and the Ascendency cut it open. Nothing in the complex currently suggests why — no bodies, no wards, no marks below the working level. Left deliberately unanswered; it's a live thread whenever it's wanted, and a good candidate to tie to whoever also built the Amber Temple and the stonework under [[The Cinderworks]].

### General Notes
**Redesigned 2026-09-05**, renamed from "Amberfen Hollow" (too on-the-nose next to the Amber Wardens the site produces) and rebuilt from a single-room workroom into a full cave complex at the DM's direction. Design constraints given: stealth-first, one very challenging set-piece fight with live environmental hazards, machinery that works as both opportunity and threat, Wardens present in many states of assembly, and a reveal capped at what the stolen items are used for.

**The site is built to be run twice.** A2 is the currently prepped session's stopping point. Everything from B1 down is a return trip, and the bolted hatch is the hook that gets them back.

**On stealth being genuinely winnable:** the Sunken Passage (B4) exists specifically so the hardest guard problem (B3) is optional, and the Gullet (B1) exists so the party can scout the whole complex by ear before committing. If the table is engaging with those, let stealth work. The set-piece fight triggers on Izek's decision, not on the party's failure — they can play a perfect infiltration and still get the fight, which is the point.
