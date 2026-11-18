---
obsidianUIMode: preview
location: "[[4. World Almanac/Regions/Greenfall.md|Greenfall]]"
gist: ""
revealed: {}
reveal: {}
facts: []
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
imports: []
exports: []
aliases: []
tags:
  - location
  - settlement
---
> [!infobox]
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
> ###### Overview
>  |
>  ---|---|
> **Parent** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'location'})` |
> **Population** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'population'})` |
> **Terrain** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'terrain'})` |
> **Resources** | `INPUT[inlineListSuggester(optionQuery("5. Mechanics/Items")):resources]` |
> ###### Politics
>  |
>  ---|---|
> **Ruler(s)** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'rulers'})` |
> **Government** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'government'})` |
> **Army** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'army'})` |
> ###### Trade
>  |
>  ---|---|
> **Wealth** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'wealth'})` |
> **Imports** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'imports'})` |
> **Exports** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'exports'})` |

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```

> [!tabs]
> ```meta-bind
> INPUT[select(class(tabbed), option(At the Table), option(What’s Here), option(Player-Facing), option(Map), option(DM)):memory^tab]
> ```
>
> > [!tab|no-t] At the Table
> > **Atmosphere** `BUTTON[pop-atmosphere]`
> > `INPUT[textArea:atmosphere]`
> >
> > **Hazards** `BUTTON[pop-hazards]`
> > `INPUT[textArea:hazards]`
> >
> > **Climate** `INPUT[text:climate]`
> >
> > **Routes**
> > ```dataviewjs
> > await dv.view('views/travelTimes', {current: dv.current()})
> > ```
> > `BUTTON[addtravel]` `BUTTON[removetravel]`
>
> > [!tab|no-t] What’s Here
> > ```dataviewjs
> > await dv.view("views/locations", {current: dv.current()})
> > ```
> >
> > ```dataviewjs
> > await dv.view("views/npcsInLocation", {current: dv.current()})
> > ```
> >
> > **Factions based here**
> > ```dataview
> > LIST FROM #faction WHERE location = this.file.link OR contains(bases, this.file.link)
> > ```
> >
> > **Visits**
> > ```dataview
> > LIST FROM #session-journal WHERE contains(locations, this.file.link) SORT session_number ASC
> > ```
>
> > [!player] Player-Facing
> > **Revealed to the party** `$=await dv.view('utils/metaBindInput', {type: 'toggle', field: ['revealed', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})`
> >
> > **Public name** `$=await dv.view('utils/metaBindInput', {type: 'text', field: ['public_name', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` (optional: shown instead of the note name)
> >
> > **Also show** `$=await dv.view('utils/metaBindInput', {type: 'inlineList', field: ['reveal', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` (extra fields the site may show, e.g. images, occupation)
> >
> > **Summary** `BUTTON[pop-summary]`
> > `INPUT[textArea:summary]`
> >
> > **Facts**
> > ```datacorejsx
> > const { FactsTable } = await dc.require("z_Scripts/Datacore/FactsTable.tsx")
> > return function View() { return <FactsTable /> }
> > ```
>
> > [!tab|no-t] Map
> > ```leaflet
> > id: Duskferry
> > image: [[z_Assets/PlaceholderImage.png]]
> > bounds: [[0,0], [1815.07, 2805.48]]
> > height: 900px
> > width: 95%
> > lat: 907.53
> > long: 1402.74
> > minZoom: -1.5
> > maxZoom: 1.5
> > defaultZoom: -1
> > zoomDelta: 0.5
> > unit: miles
> > scale: 1
> > lock: true
> > recenter: true
> > noScrollZoom: true
> > darkMode: false
> > ```
>
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes
> > ### Overview
> > Where Bruokdon is arcane, academic, and vertical (spires, council chambers, charm-shops), Duskferry is low, wet, and transactional — a sprawl of stilted docks, fog, and lantern-lit ferry lines along the river that marks Greenfall's edge. The Ferrymen's Guild controls the only reliable crossing for miles and has spent generations perfecting the art of not noticing what's in the cargo, for a fee.
> >
> > The town is really three tiers stacked on pilings above the flood line. The **Waterline** is the docks and warehouses themselves — busiest and loudest, reeking of tar and river mud, where the ferry slips run day and night. The **Duckboards** are a raised timber walkway of taverns, tally-houses, and rented rooms where most of the town actually lives and drinks. The **Guildhall Roost** is the Ferrymen's Guild's own compound — the only structure in Duskferry built on solid ground rather than stilts, a quiet, deliberate statement about whose foundations are the sturdiest here. Fog rolls off the river most evenings thick enough to swallow lantern light within twenty feet; the Guild has never once complained about that.
> >
> > Every manifest that crosses the river passes through the Guild's ledgers, officially for toll purposes. Unofficially, that ledger is the town's real seat of power — whoever controls what gets written down, and what gets quietly left off the page, controls Duskferry far more than any council or watch does.
> >
> > ### History
> > Duskferry grew up around the river crossing generations before Bruokdon's spires went up, and the Ferrymen's Guild is older than any record of who founded it. Its founding bargain with the crown has never been renegotiated: the Guild keeps the crossing running and pays its toll tithe on schedule, and in exchange Bruokdon doesn't look too closely at how the Guild runs its own house. That arrangement has held for longer than anyone currently working the docks has been alive — and it's exactly the gap the Silent Ascendency's network has learned to work inside, one falsified manifest at a time.
> >
> > Introduced 2026-08-22 as the lead surfaced by [[The Cinderworks]] infiltration ([[The Second Ledger]]); expanded the same day once Path B looked likely to be the table's pick. The party visited in S46.
> >
> > ### Plot Hooks
> > - [[Hesper Crane]]'s ledger names a Ferrymen's Guild contact here — code name **the Tallyman** — as the Silent Ascendency's next relay point above Bruokdon. The party has only the code name as of the 2026-08-22 session, not the real identity.
> > - Guildmaster [[Anselm Corrow]] runs Duskferry openly and mostly legitimately — he isn't Ascendency and doesn't know what "special cargo" actually is. He'd be genuinely useful to the party if approached honestly, and could grant legitimate access to the tally-house archives.
> > - Reaching the real contact without tipping him off means going through Guild channels — Corrow controls the building, but [[Ostwin Reyes]] controls which manifests actually get shown.
> >
> > ### Hidden Details
> > - **The Tallyman is [[Ostwin Reyes]]**, a senior Guild clerk — not Corrow. This is the DM-only answer to who the code name belongs to; the party should have to work for it (see Reyes's Secrets for the three-clue trail).
> > - Corrow's blindness to the Ascendency's use of his Guild is willful, not complicit — he's long known certain manifests move through paid for above the standard toll and has chosen not to ask why. He'd react with genuine anger if shown proof, not defensiveness.
> > - What "special cargo" shipments are ultimately bound for beyond Duskferry is the next concrete link in the chain — see [[Greyfen Hollow]]. Deliberately held back from this session's reveal; the payoff of tonight's infiltration branch should point somewhere with its own character, not resolve the whole network in one sitting.
> >
> > ### General Notes
> > Expanded 2026-08-22 alongside [[The Cinderworks]], [[Anselm Corrow]], [[Ostwin Reyes]], and [[Greyfen Hollow]] once Path B looked likely to be the table's pick for the session. No longer pure sketch-level, but Corrow and Reyes are built for a *future* Duskferry visit — not tonight's Cinderworks infiltration itself.

```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Atmosphere in a larger window
style: default
id: pop-atmosphere
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: atmosphere
      label: Atmosphere
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Hazards in a larger window
style: default
id: pop-hazards
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: hazards
      label: Hazards
```
```meta-bind-button
style: primary
label: Add Route
id: addtravel
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Add Travel Distance.md"
```
```meta-bind-button
style: destructive
label: Remove Route
id: removetravel
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Remove Travel Distance.md"
```
```meta-bind-button
label: Edit DM Notes
icon: pencil
style: default
id: edit-dm-notes
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/editSection.js
    args:
      heading: DM Notes
      prefix: "> > "
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Summary in a larger window
style: default
id: pop-summary
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: summary
      label: Summary
```

```meta-bind-button
label: Edit all
icon: pencil
style: default
id: edit-all
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/editAll.js
```
