---
obsidianUIMode: preview
location: "[[4. World Almanac/Settlements/Bruokdon.md|Bruokdon]]"
images:
  - z_Assets/PlaceholderImage.png
pronounced:
summary: A condemned charm-foundry on Bruokdon's outskirts, officially unsafe and avoided by locals — unofficially a Silent Ascendency consolidation point for stolen magic items moving out of the city.
resources: []
population:
terrain: outskirts, industrial ruin
rulers: []
government:
army:
religions: []
imports: []
exports: []
aliases:
  - The Old Kiln
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
A disused charm-foundry on Bruokdon's outer edge, condemned twelve years ago after a botched large-scale enchantment kiln overloaded and burned through two floors. The city's official position is that it's structurally unsound and warded against casual entry — true as far as it goes, and useful cover for what it's actually become: a quiet consolidation point where the Silent Ascendency gathers stolen magic items from the Bruokdon cell (and, before its fall, from further afield) before moving them onward through [[Duskferry]]'s unregulated river crossing.

The foundry's old delivery tunnels, built to move raw enchantment materials without hauling them past the street, still connect to a disused stretch of the city's outer wall — the actual point of entry, not the boarded front gate. The kilns themselves are inert but structurally treacherous; residual warding in the old spellforging chambers happens to dampen divination and scrying, which is likely why nobody has caught the operation from a distance.

Inside, the foundry floor still holds the shape of what it once made — cold slag pooled in runnels between three dead kilns, hooks and chain-falls hanging motionless from a collapsed gantry, a floor gone soft with ash in the low spots. The air tastes of scorched stone even twelve years on, and something underneath that never quite reads as ordinary smoke. At night the boarded windows leak lamplight only from the loft office; the rest of the building is kept dark on purpose.

Two truths sit uneasily side by side here: a genuinely condemned structure the city was right to close, and a genuinely careful operation running inside it anyway. [[Hesper Crane]] holds both without much comment — parts of the floor could still give way without warning, and she's long since learned exactly which sections are safe to stand on. She's never explained that to anyone who doesn't already need to know.

## Map
> [!div | no-t clean]
> ![[Locations/Maps/The Cinderworks.svg]]

Schematic floor plan, not a battle-grid map — still small enough to run theater-of-the-mind at the table, but this gives a concrete room layout for the infiltration: the boarded front gate is a dead end, the delivery tunnel off the disused outer wall (single watcher, DC 14 Stealth) is the real way in, opening onto the foundry floor as the hub, which connects to the kiln chamber and a set of stairs up to the loft office where [[Hesper Crane]] works.

`$=await dv.view("views/locations", {current: dv.current()})`

`$=await dv.view("npcsInLocation", {current: dv.current()})`

## History
Built during Bruokdon's early growth as a Charms manufactory, condemned after the kiln fire that killed three foundry workers. Marrow's Ascendency cell repurposed it roughly a year ago, installing [[Hesper Crane]] as the site's quartermaster — a professional smuggler, not a cultist, hired for competence rather than belief.

## DM Notes
### Plot Hooks
- The overdue shipment the party intercepted in S44 has [[Hesper Crane]] rattled — she's sent one unanswered inquiry up the chain and is close to bolting. This is the pressure the party (via [[Lord Caldris Velmont]]) can exploit or that can blow up in their faces.
- Crane's ledger names a contact in [[Duskferry]] — the intended next lead. See [[The Second Ledger]].
- Crane doesn't know this depot was ever Velmont's own before it was the Ascendency's — if she found out, her read on "Velmont's" return would change fast (see Hidden Details below and his NPC note's Secrets).

### Hidden Details
- The "condemned/warded" cover is real (the kiln fire happened, the structure genuinely is unsafe in places) but the current warding against scrying is deliberately maintained, not leftover — a detail a detect magic or arcana check (DC 15+) could surface as suspicious rather than residual.
- **Found (S45):** the locked crate in the loft office held an inert, half-formed soul-vessel core — Amber Warden material, not yet activated — alongside a small magic item stockpile ([[Cloak Of The Manta Ray]], [[Sending Stones]], [[Ring Of Protection]], a second [[Dust Of Disappearance]]). The party has the core in hand but hasn't identified what it is; ties to the still-uninvestigated amber graft in [[Marrow]]'s corpse and the Order of the Silver Dragon thread ([[Redgrave]]).
- Three findable pointers to Duskferry as the next relay (three-clue rule): (1) Crane's ledger, naming the contact by code name; (2) a courier's waybill among the crated goods bearing a ferry-guild wax seal; (3) Crane herself, under pressure or interrogation, naming the town outright.
- **DM-only, not yet surfaced:** this depot predates the Ascendency entirely. It was one of three quiet consolidation points [[Lord Caldris Velmont]] ran under his own smuggling operation years before Marrow ever wore his face — the only one of the three still active by the time the Ascendency inherited the ring wholesale. The anti-scrying wards are Velmont's own commissioned work; the Ascendency has only ever maintained them, not built them. Two findable traces, if anyone goes looking (neither required tonight): (1) a maker's mark worked into the warding stones that doesn't match any Ascendency sigil seen elsewhere (Arcana DC 17); (2) a half-burned requisition slip in the loft office, dated years before Marrow's cell took root in Bruokdon, bearing Velmont's own seal rather than any Ascendency mark. This is the evidence trail for if/when Velmont's own agenda (see his Secrets) needs backing up later — not a twist to force tonight.

### General Notes
Created 2026-08-22 for [[The Second Ledger]] — the infiltration alternative to [[The Well of Many Worlds]] on the session prep dated [[2026-08-22]]. Population/government/travel-distance fields left blank; this is a hidden operational site, not a settlement with its own civic life.

**Map added 2026-08-22** (same day, once the party leaned toward Path B): a labeled schematic SVG floor plan, not a piece of painted battle-map art — no image-generation tool available, so this is a clean top-down room layout instead, good enough to run the infiltration by. Source file: `z_Assets/Locations/Maps/The Cinderworks.svg`.
