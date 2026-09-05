---
obsidianUIMode: preview
location: "[[4. World Almanac/Regions/Greenfall.md|Greenfall]]"
images:
  - z_Assets/PlaceholderImage.png
pronounced:
summary: A river-crossing trade town downstream of Bruokdon, run by a ferrymen's guild that profits from asking no questions — the last reliable checkpoint before goods leave Greenfall.
resources: []
population: 450
terrain: riverside, marshland fringe
rulers:
  - "[[4. World Almanac/NPCs/Anselm Corrow.md|Anselm Corrow]]"
government: Ferrymen's Guild
army:
religions: []
imports: []
exports: []
aliases: []
tags:
  - location
  - settlement
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
Where Bruokdon is arcane, academic, and vertical (spires, council chambers, charm-shops), Duskferry is low, wet, and transactional — a sprawl of stilted docks, fog, and lantern-lit ferry lines along the river that marks Greenfall's edge. The Ferrymen's Guild controls the only reliable crossing for miles and has spent generations perfecting the art of not noticing what's in the cargo, for a fee.

The town is really three tiers stacked on pilings above the flood line. The **Waterline** is the docks and warehouses themselves — busiest and loudest, reeking of tar and river mud, where the ferry slips run day and night. The **Duckboards** are a raised timber walkway of taverns, tally-houses, and rented rooms where most of the town actually lives and drinks. The **Guildhall Roost** is the Ferrymen's Guild's own compound — the only structure in Duskferry built on solid ground rather than stilts, a quiet, deliberate statement about whose foundations are the sturdiest here. Fog rolls off the river most evenings thick enough to swallow lantern light within twenty feet; the Guild has never once complained about that.

Every manifest that crosses the river passes through the Guild's ledgers, officially for toll purposes. Unofficially, that ledger is the town's real seat of power — whoever controls what gets written down, and what gets quietly left off the page, controls Duskferry far more than any council or watch does.

## History
Duskferry grew up around the river crossing generations before Bruokdon's spires went up, and the Ferrymen's Guild is older than any record of who founded it. Its founding bargain with the crown has never been renegotiated: the Guild keeps the crossing running and pays its toll tithe on schedule, and in exchange Bruokdon doesn't look too closely at how the Guild runs its own house. That arrangement has held for longer than anyone currently working the docks has been alive — and it's exactly the gap the Silent Ascendency's network has learned to work inside, one falsified manifest at a time.

Introduced 2026-08-22 as the lead surfaced by [[The Cinderworks]] infiltration ([[The Second Ledger]]); expanded the same day once Path B looked likely to be the table's pick. Not yet visited by the party.

## DM Notes
### Plot Hooks
- [[Hesper Crane]]'s ledger names a Ferrymen's Guild contact here — code name **the Tallyman** — as the Silent Ascendency's next relay point above Bruokdon. The party has only the code name as of the 2026-08-22 session, not the real identity.
- Guildmaster [[Anselm Corrow]] runs Duskferry openly and mostly legitimately — he isn't Ascendency and doesn't know what "special cargo" actually is. He'd be genuinely useful to the party if approached honestly, and could grant legitimate access to the tally-house archives.
- Reaching the real contact without tipping him off means going through Guild channels — Corrow controls the building, but [[Ostwin Reyes]] controls which manifests actually get shown.

### Hidden Details
- **The Tallyman is [[Ostwin Reyes]]**, a senior Guild clerk — not Corrow. This is the DM-only answer to who the code name belongs to; the party should have to work for it (see Reyes's Secrets for the three-clue trail).
- Corrow's blindness to the Ascendency's use of his Guild is willful, not complicit — he's long known certain manifests move through paid for above the standard toll and has chosen not to ask why. He'd react with genuine anger if shown proof, not defensiveness.
- What "special cargo" shipments are ultimately bound for beyond Duskferry is the next concrete link in the chain — see [[Greyfen Hollow]]. Deliberately held back from this session's reveal; the payoff of tonight's infiltration branch should point somewhere with its own character, not resolve the whole network in one sitting.

### General Notes
Expanded 2026-08-22 alongside [[The Cinderworks]], [[Anselm Corrow]], [[Ostwin Reyes]], and [[Greyfen Hollow]] once Path B looked likely to be the table's pick for the session. No longer pure sketch-level, but Corrow and Reyes are built for a *future* Duskferry visit — not tonight's Cinderworks infiltration itself.
