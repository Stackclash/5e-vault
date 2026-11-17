---
obsidianUIMode: preview
kind: arc
parent: "[[3. The Party/Quests/The Hunt.md|The Hunt]]"
world: "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"
active:
  Midnight Covenant: false
completed:
  Midnight Covenant: false
gist: ""
summary: ""
revealed: {}
facts: []
description: |-
  Opens low-stakes: the post-Working world, and room to explore how it changed. Climaxes with the true, decisive final battle.
stakes: ""
reward: ""
deadline: ""
giver: ""
npcs: []
locations: []
items: []
factions: []
pcs: []
steps:
  - text: "**Aftermath** *(low stakes)* — the post-Working world; its severity depends on how Act I's climax landed. Side-story room here."
    completed:
      Midnight Covenant: false
    status: planned
    outcome: ""
  - text: "**Breather/personal arc: The Underdark** *(low–medium)* — [[Faerah Duskrane]]'s sister resurfaces. Answers Eilistraee's stance on Vecna in the fiction rather than in advance."
    completed:
      Midnight Covenant: false
    status: planned
    outcome: ""
  - text: "**Claim a Vessel** *(rising)* — [[Izek Strazni (COS)|Izek Strazni]] and [[Anastrasya Karelova (COS)|Anastrasya Karelova]] as candidates. Personal stakes for [[Yevelda Ovak]] (rescue-or-mercy) and [[Redgrave]] (the Order of the Silver Dragon resurfaces here, recognizing the soul-craft in both him and the vessel network). Villain step 4."
    completed:
      Midnight Covenant: false
    status: planned
    outcome: ""
  - text: "**Breather/personal arc: The Eternal Watch** *(low–medium)* — [[Wisp]]'s master. Also where the Watch explains how domain-claiming actually works — this sets the rules for the finale."
    completed:
      Midnight Covenant: false
    status: planned
    outcome: ""
  - text: "**Rising tremors, part 2** *(medium, optional)* — signs Vecna is closing in on the Rite: vessel-binding side effects, the world reacting to an almost-god's presence."
    completed:
      Midnight Covenant: false
    status: planned
    outcome: ""
  - text: "**The Convergence** *(escalating)* — locating and racing to the Rite's nexus, using intel from the Eternal Watch and the vessel hunt."
    completed:
      Midnight Covenant: false
    status: planned
    outcome: ""
  - text: "**The Ascension Rite — Finale** *(climax)* — the true final battle. Villain step 5. Multiple possible endings — see below."
    completed:
      Midnight Covenant: false
    status: planned
    outcome: ""
tags:
  - quest
---
> [!infobox]
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
> ###### Hook
>  |
>  ---|---|
> **Kind** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'kind'})` |
> **Arc** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'parent'})` |
> **Giver** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'giver'})` |
> **Reward** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'reward'})` |

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```

> [!tabs]
> ```meta-bind
> INPUT[select(class(tabbed), option(Steps), option(NPCs & Links), option(Description), option(Player-Facing), option(DM)):memory^tab]
> ```
>
> > [!tab|no-t] Steps
> > ```datacorejsx
> > const { QuestSteps } = await dc.require("z_Scripts/Datacore/QuestSteps.tsx")
> > return function View() { return <QuestSteps /> }
> > ```
>
> > [!tab|no-t] NPCs & Links
> > **Giver** `INPUT[suggester(optionQuery(#npc), optionQuery(#faction)):giver]`
> >
> > **Locations** `INPUT[inlineListSuggester(optionQuery(#location)):locations]`
> >
> > **Items** `INPUT[inlineListSuggester(optionQuery(#story-item), optionQuery("5. Mechanics/Items")):items]`
> >
> > **Factions** `INPUT[inlineListSuggester(optionQuery(#faction)):factions]`
> >
> > **PCs** `INPUT[inlineListSuggester(optionQuery(#player)):pcs]`
> >
> > **Sessions**
> > ```dataview
> > LIST FROM #session-journal WHERE contains(quests, this.file.link) SORT session_number ASC
> > ```
>
> > [!tab|no-t] Description
> > **Description** `BUTTON[pop-description]`
> > `INPUT[textArea:description]`
> >
> > **Stakes** `BUTTON[pop-stakes]`
> > `INPUT[textArea:stakes]`
> >
> > **Reward** `INPUT[text:reward]`
> >
> > **Deadline** `INPUT[text:deadline]`
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
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes
> >
> > ## Plan Changelog

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
tooltip: Edit Stakes in a larger window
style: default
id: pop-stakes
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: stakes
      label: Stakes
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
