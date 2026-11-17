---
obsidianUIMode: preview
statblock: inline
location: "[[4. World Almanac/Settlements/Duskferry.md|Duskferry]]"
condition: healthy
gist: ""
revealed: {}
reveal: {}
facts: []
images:
  - z_Assets/PlaceholderImage.png
relationships: []
tags:
  - npc
  - monster/cr/1/8
  - monster/size/medium
  - monster/type/humanoid/human
aliases:
  - Anselm Corrow
  - the Guildmaster
pronounced: AN-selm CORR-oh
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: male
age: 58
alignment: Lawful Neutral
occupation:
  - Guildmaster, Ferrymen's Guild
groups:
  - Ferrymen's Guild
religions: []
description: |-
  A broad, weathered man who still dresses like a working ferryman rather than the wealthiest person in Duskferry — oilskin coat, boots that have never been dry long enough to stay clean, a guild signet ring worn smooth from decades of use. Speaks in short, practical sentences, the way a man does who has spent his life on a river that doesn't care how much he talks. Keeps a private ledger of favors owed alongside the Guild's official one and treats the two with equal seriousness.
history: |-
  Corrow was born on the docks and has run every job the Guild offers before running the Guild itself — poler, tally clerk, lock inspector, dockmaster — over nearly forty years. He inherited the Guildmaster's chair a decade ago on reputation for fairness rather than ambition, and has kept Duskferry's ancient bargain with the crown exactly as he found it: the crossing runs, the toll tithe gets paid on schedule, and Bruokdon doesn't look too closely at how the Guild keeps its own books.
  He has long known that certain manifests move through the tally-house paid for in more than the standard toll — cargo nobody asks about twice, couriers who don't linger. He has never pushed to learn who's behind it or why, telling himself it's not a Guildmaster's business to audit every silence his clerks keep. That choice has never cost him anything he's noticed yet.
personality: Blunt, practical, protective of the Guild's reputation for discretion above almost everything else.
ideal: The crossing runs, the tithe gets paid, and the rest is nobody's business but the Guild's.
bond: Duskferry and the Ferrymen's Guild — forty years of his life, and he means to leave both better than he found them.
flaw: His comfortable rule of not asking questions has let something dangerous grow in his own tally-house without his noticing.
goals: Keep the crossing running, keep the crown satisfied, keep the Guild's business the Guild's own.
likes: a clean ledger, paid tolls, a quiet dock at night
dislikes: crown inspectors, being lied to by his own clerks, anyone who threatens the bargain that keeps Duskferry independent
party_relationships:
  Midnight Covenant: Acquaintance
summary: ""
secrets: |-
  STILL DM-ONLY (not yet revealed): Corrow is not Silent Ascendency and doesn't know what "special cargo" actually is or who's ultimately behind it — his blindness is willful, not complicit. He's long known a handful of manifests move through the tally-house paid for above the standard toll and has chosen not to ask why, because the extra revenue and the Guild's reputation for discretion matter more to him than the question does.
  He would cooperate honestly with the party if approached as themselves rather than as smugglers — legitimate access to the tally-house archives is his to grant, and he'd genuinely want to know if something dangerous were using his Guild. What he can't offer is insider knowledge of the falsified entries themselves; that's [[Ostwin Reyes]]'s doing, not his, and Corrow has no idea his own senior clerk is the actual contact.
  If shown hard evidence of what's really moving through his docks, he reacts with real anger, not denial — this is a genuine violation of what he's spent his life building, not a front he's protecting.
---
> [!infobox]
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
> ###### Bio
>  |
>  ---|---|
> **Race** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'race'})` |
> **Gender** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'gender'})` |
> **Age** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'age'})` |
> **Alignment** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'alignment'})` |
> ###### Info
>  |
>  ---|---|
> **Alias(es)** | `INPUT[inlineList:aliases]` |
> **Occupation(s)** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'occupation'})` |
> **Current Location** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'location'})` |
> **Group(s)** | `INPUT[inlineList:groups]` |
> **Religion(s)** | `INPUT[inlineList:religions]` |

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```

> [!tabs]
> ```meta-bind
> INPUT[select(class(tabbed), option(At the Table), option(Lore), option(Player-Facing), option(Connections), option(Stats), option(DM)):memory^tab]
> ```
>
> > [!tab|no-t] At the Table
> > **Appearance** `INPUT[text:appearance]`
> >
> > **Voice** `BUTTON[pop-voice]`
> > `INPUT[textArea:voice]`
> >
> > **Goals** `BUTTON[pop-goals]`
> > `INPUT[textArea:goals]`
> >
> > **Personality** `BUTTON[pop-personality]`
> > `INPUT[textArea:personality]`
> >
> > **Ideal** `BUTTON[pop-ideal]`
> > `INPUT[textArea:ideal]`
> >
> > **Bond** `BUTTON[pop-bond]`
> > `INPUT[textArea:bond]`
> >
> > **Flaw** `BUTTON[pop-flaw]`
> > `INPUT[textArea:flaw]`
> >
> > **Likes** `BUTTON[pop-likes]`
> > `INPUT[textArea:likes]`
> >
> > **Dislikes** `BUTTON[pop-dislikes]`
> > `INPUT[textArea:dislikes]`
>
> > [!tab|no-t] Lore
> > **Description** `BUTTON[pop-description]`
> > `INPUT[textArea:description]`
> >
> > **History** `BUTTON[pop-history]`
> > `INPUT[textArea:history]`
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
> > [!tab|no-t] Connections
> > `BUTTON[add-relationship]` `BUTTON[remove-relationship]`
> >
> > ```dataviewjs
> > await dv.view("views/npcRelationships", { current: dv.current() })
> > ```
> >
> > **Quests**
> > ```dataview
> > LIST FROM #quest WHERE contains(npcs.name, this.file.link)
> > ```
> >
> > **Sessions**
> > ```dataview
> > LIST FROM #session-journal WHERE contains(npcs, this.file.link) SORT session_number ASC
> > ```
>
> > [!tab|no-t] Stats
> > *Not built for combat — a background/social NPC. If a fight ever becomes necessary, reskin [[5. Mechanics/Bestiary/Humanoid/Noble.md|Noble]] (CR 1/8, MM) unmodified; he'd fight to defend the Guildhall, not go looking for one.*
>
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes
> > ### Hidden Details
> > See Secrets above: his blindness to the Ascendency's use of the Guild is willful but genuine — he doesn't know, and would react with real anger if shown proof.
> >
> > ### General Notes
> > Created 2026-08-22 alongside [[Ostwin Reyes]] and [[Greyfen Hollow]] while expanding [[Duskferry]] ahead of a likely [[The Second Ledger]] session — built for a *future* visit to Duskferry, not the Cinderworks infiltration itself.

```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Voice in a larger window
style: default
id: pop-voice
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: voice
      label: Voice
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Goals in a larger window
style: default
id: pop-goals
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: goals
      label: Goals
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Personality in a larger window
style: default
id: pop-personality
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: personality
      label: Personality
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Ideal in a larger window
style: default
id: pop-ideal
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: ideal
      label: Ideal
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Bond in a larger window
style: default
id: pop-bond
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: bond
      label: Bond
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Flaw in a larger window
style: default
id: pop-flaw
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: flaw
      label: Flaw
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Likes in a larger window
style: default
id: pop-likes
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: likes
      label: Likes
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Dislikes in a larger window
style: default
id: pop-dislikes
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: dislikes
      label: Dislikes
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Description in a larger window
style: default
id: pop-description
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: description
      label: Description
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit History in a larger window
style: default
id: pop-history
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: history
      label: History
```
```meta-bind-button
style: primary
label: Add Relationship
id: add-relationship
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Add Relationship.md"
```
```meta-bind-button
style: destructive
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Remove Relationship.md"
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
