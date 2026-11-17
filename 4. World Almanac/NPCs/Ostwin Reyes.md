---
obsidianUIMode: preview
statblock: inline
location: "[[4. World Almanac/Settlements/Duskferry.md|Duskferry]]"
condition: healthy
images:
  - z_Assets/PlaceholderImage.png
relationships: []
tags:
  - npc
  - monster/cr/1
  - monster/size/medium
  - monster/type/humanoid/human
aliases:
  - Ostwin Reyes
  - the Tallyman
pronounced: OST-win RAY-ez
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: male
age: 39
alignment: Neutral Evil
occupation:
  - Senior Tally Clerk, Ferrymen's Guild
  - Silent Ascendency Logistics Liaison (unofficial)
groups:
  - Ferrymen's Guild
  - Silent Ascendency
religions: []
description: |-
  Narrow, ink-stained hands and a clerk's stoop from decades bent over ledgers. Dresses a rank above his actual station — good boots, a guild coat cut better than his pay grade — paid for, though nobody's ever asked, by money that never touches an official book. Precise to the point of tedium in conversation, the kind of man who corrects your arithmetic before he's finished agreeing with you.
history: |-
  Reyes has worked the Duskferry tally-house for eighteen years, long enough to become the clerk whose hand is on nearly every manifest that matters, and trusted enough that nobody — including Guildmaster [[Anselm Corrow]] — checks his work twice. When the Silent Ascendency's network above Bruokdon needed a way to move "special cargo" through Duskferry's books without drawing a second look, Reyes was the easiest kind of recruit: not a believer, just a man with expensive taste and access nobody questioned.
  He inherited the standing arrangement — and the code name "the Tallyman" — from whichever hand ran it before Marrow's Bruokdon cell fell; he has never met anyone above him in person, only ever received instructions and payment through couriers, the same pattern [[Hesper Crane]] describes from the Cinderworks end of the chain.
personality: Precise, careful, quietly contemptuous of anyone less exacting than himself. Treats greed as a private virtue, not a vice.
ideal: Nobody remembers the clerk who never made a mistake. Nobody suspects him either.
bond: The extra income has bought him a life his Guild wage never could — he won't risk it for anyone's cause, including the one he's nominally serving.
flaw: His pride in never being questioned makes him overconfident that he never will be.
goals: Keep the arrangement quiet, keep the extra income coming, and stay exactly as invisible as he's always been.
likes: exact books, being underestimated, fine boots
dislikes: audits, couriers who ask questions, anyone implying his ledgers could be wrong
party_relationships:
  Midnight Covenant: Acquaintance
summary: ""
secrets: |-
  STILL DM-ONLY (not yet revealed, and not yet named to the party — they only have the code name "the Tallyman" from [[Hesper Crane]]'s ledger as of the 2026-08-22 session): Reyes is the actual Silent Ascendency contact in Duskferry, not Guildmaster [[Anselm Corrow]]. He personally falsifies or omits manifest entries for "special cargo" shipments in exchange for payment, using his trusted position to keep them off the Guild's real books.
  He knows the next physical link in the chain — the shipments' onward route toward [[Greyfen Hollow]] — but not what happens there or who's ultimately behind any of it; he's never been curious enough to ask, and it's safer not to know.
  He is not a believer and has no loyalty worth risking his neck for. Under real pressure (arrest, exposure to Corrow, or a credible threat) he gives up the next link in the chain quickly, the same way [[Hesper Crane]] would — but he's proud and careful enough that getting him to that point takes real leverage, not just a direct question.
  Three findable pointers that he — not Corrow — is the real contact (three-clue rule): (1) [[Hesper Crane]]'s ledger, naming "the Tallyman" by code name in a pattern matching her own password arrangement; (2) the tally-house's public records, which a DC 15 Investigation check reveals have a small, consistent set of manifests with sequential entries missing, all in the same clerk's hand; (3) Reyes himself, under pressure or careful questioning, confirming it.
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
> > *Unmodified [[5. Mechanics/Bestiary/Humanoid/Spy.md|Spy]] (CR 1, MM) — no stat changes. Reyes reads as exactly what he is: a clerk who's dangerous with information and a hidden blade, not a fighter. Use the linked bestiary note directly if a scene ever needs his stats; this note carries his identity, motive, and secrets.*
>
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes
> > ### Hidden Details
> > See Secrets above: he's the real Duskferry contact behind the code name "the Tallyman," not Guildmaster [[Anselm Corrow]], and he knows the route onward toward [[Greyfen Hollow]] without knowing what it actually is.
> >
> > ### General Notes
> > Created 2026-08-22 alongside [[Anselm Corrow]] and [[Greyfen Hollow]] while expanding [[Duskferry]] ahead of a likely [[The Second Ledger]] session — built for a *future* visit to Duskferry, not the Cinderworks infiltration itself. The party has only the code name as of the 2026-08-22 prep; don't reveal "Reyes" at the table until they've actually earned it.

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
