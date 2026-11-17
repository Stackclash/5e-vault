---
obsidianUIMode: preview
active:
  Midnight Covenant: false
completed:
  Midnight Covenant: true
world: "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"
description: |-
  A quiet, superstitious village lies in the shadow of a land long feared as cursed. Its fields are infertile, its children whisper secrets they should not know, and an elderly villager greets the party as if they have always been expected—yet no one else remembers this person.

  Rumors of disappearances haunt the villagers: decades ago, a handful of people vanished into the dark land. No one remembers exactly what happened—or even that their names were ever erased. But now, fragments of memory are returning, surfacing in children, the land, and an outsider who was never supposed to exist.

  The village trembles as old secrets resurface. Crops fail where graves were long forgotten. Children begin naming the dead. Parents begin to question their own memories. The party must decide how to respond: uncover and preserve the truth, protect the villagers from it, or navigate a delicate balance between both. Every choice carries consequences, and every action will shape how the village—and perhaps the wider world—remembers what truly happened.
steps:
  - text: The party enters the village and meets Eamon.
    completed:
      Midnight Covenant: true
    status: played
npcs:
  - name: "[[4. World Almanac/NPCs/Eamon Morcant.md|Eamon Morcant]]"
    description: Greets the party as they enter the village and recognizes them by name. No one else in the village knows who he is.
tags:
  - quest
kind: quest
gist: ""
summary: ""
revealed: {}
facts: []
giver: ""
locations: []
items: []
factions: []
pcs: []
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
