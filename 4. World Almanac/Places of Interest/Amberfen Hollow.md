---
obsidianUIMode: preview
location: "[[4. World Almanac/Regions/Greenfall.md|Greenfall]]"
images:
  - z_Assets/PlaceholderImage.png
pronounced: AM-ber-fen
summary: A drowned stand of dead trees deep in the Greenfall marsh below Duskferry — officially nothing, unofficially where the Silent Ascendency turns smuggled magic items into something worse.
resources: []
population:
terrain: marsh, flooded deadwood, sinkhole ground
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
A half-day's poling below Duskferry, the river gives out into a flooded stand of dead trees nobody local will name without spitting first — bad ground, bad water, a place the Ferrymen's Guild's own charts mark only with a blank space and an old convention: *don't*. The trees died standing decades ago, for reasons no one currently living remembers, leaving a maze of grey trunks rising out of black, still water that never quite freezes and never quite warms. What's actually down here has nothing to do with the old ghost stories, and everything to do with why nobody who works the "special cargo" runs ever talks about where they go after Duskferry.

At the Hollow's center, built into a low rise of drier ground that shouldn't exist in a marsh this flat, sits a squat structure of fitted stone far too old and far too well-made to have been built by the operation currently using it — repurposed, not raised, the same way [[The Cinderworks]] was repurposed rather than built. Whoever quarried and fitted these stones did so long before the Silent Ascendency existed.

## Map
TBD — no leaflet map yet; theater-of-the-mind location (marsh approach, the drowned tree-maze, the stone structure, whatever lies beneath it).

`$=await dv.view("views/locations", {current: dv.current()})`

`$=await dv.view("npcsInLocation", {current: dv.current()})`

## History
Unknown to the party as of the 2026-08-22 session — this note exists to give the DM a concrete answer ready for whenever the Duskferry lead ("the Tallyman," [[Ostwin Reyes]]) is followed that far, not to be introduced this session.

## DM Notes
### Plot Hooks
- This is the concrete next link in the Silent Ascendency's item-smuggling pipeline beyond [[Duskferry]] — where stolen magic items delivered from [[The Cinderworks]] and other now-broken or still-active cells actually get converted into **soul-vessels** (see the campaign bible's Active Threads — Amber Wardens), using stolen fragments of Eludrax's forbidden soul-craft.
- The stonework structure at the center predates the Ascendency by a wide margin — its true origin is deliberately left open (DM's call whenever it matters: could be tied to the same builders as the Amber Temple, could be unrelated ancient ruins the Ascendency got lucky finding). Don't commit until it's needed.
- Where the finished soul-vessels go from here — toward the still-unlocated World-Truth Working casting site, or somewhere else in the pipeline — is intentionally **not decided**. This is a waypoint, not the endgame; the actual casting site is reserved for Act I, Arc 6 (The Convergence) per the campaign bible.

### Hidden Details
- A single **Amber Warden** (working name, no stat block built yet — see campaign bible) stands dormant guard here, the first the party would actually encounter rather than hear about secondhand. Build its stats with `statblock-creator`/`encounter-builder` only once a session actually brings the party here — don't pre-build an encounter for a scene that isn't scheduled.
- The soul-vessels assembled here are early-stage, not finished products — consistent with the Ascendency's harvesting still being "active," not complete (campaign bible, Villain step 2).
- Nothing here should be treated as the World-Truth Working's casting site. Keep that thread open for The Convergence; this location's job is to pay off "where do the smuggled items actually go," not to resolve the endgame's location.

### General Notes
Created 2026-08-22 alongside the [[Duskferry]] expansion, in response to a DM request for the smuggling pipeline's ultimate destination ahead of a likely [[The Second Ledger]] session. **Not for tonight's reveal** — the session's payoff stops at the Duskferry lead (a code name, "the Tallyman"); this note exists so the DM has a ready answer the next time the party pulls that thread, not so it gets sprung early. Named for the "Amber Wardens" motif already locked into the campaign bible; geographically unrelated to the Amber Temple in Barovia (that site's `location` field is Barovia, a demiplane the party has already left — this is a purely Eldoria/Greenfall location).
