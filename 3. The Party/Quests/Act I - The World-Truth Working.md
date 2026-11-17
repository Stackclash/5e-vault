---
obsidianUIMode: preview
kind: arc
parent: "[[3. The Party/Quests/The Hunt.md|The Hunt]]"
world: "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"
active:
  Midnight Covenant: true
completed:
  Midnight Covenant: false
gist: ""
summary: ""
revealed: {}
facts: []
description: |-
  Ends with the party's first direct fight against Vecna — and they **lose**. He is functionally unstoppable while completing the ritual; the fight is a wall by design, not a balance failure.
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
  - text: "**Harvest Power — [[Bruokdon]]** *(complete, S40–44)* — unmasking [[Lord Caldris Velmont]] and the Umbral Athenaeum smuggling ring exposed the Silent Ascendency's item-energy pipeline. Closed out in S44 with [[Marrow]] dead, its frame-man in custody, and the last Bruokdon shipment intercepted. Villain step 2."
    completed:
      Midnight Covenant: true
    status: played
    outcome: Closed out in S44 with Marrow dead, its frame-man in custody, and the last Bruokdon shipment intercepted ([[1. DM Toolkit/Session Journals/The Hunt for Vecna/S44 The Other Roark.md|S44 The Other Roark]]).
  - text: "**Breather: Bruokdon aftermath** *(low stakes)* — fallout of unmasking Velmont, Council/city reaction, downtime. Candidate slot for a future Eilistraee-shrine side quest (see Active Threads) if the DM wants it here rather than saved for later."
    completed:
      Midnight Covenant: false
    status: planned
    outcome: ""
  - text: "**The Great Library** *(next — [[The Well of Many Worlds]])* — via the Well of Many Worlds with [[Professor Gousse Windcaller]]'s help (Plane of Water → Feywild → Limbo → Library), the party catches Silent Ascendency agents mid-operation at the Library. **What exactly they're after there is an open thread — no specific artifact/McGuffin is locked yet.** Hinge point: the party gets the real shape of Vecna's plan."
    completed:
      Midnight Covenant: false
    status: planned
    outcome: ""
  - text: "**Breather: processing the reveal** *(low stakes)* — a smaller personal beat — Roark/[[Martin Thricefold]], or a taste of [[Redgrave]]'s still-undefined Watchers over the Fallen. The bigger personal arcs are Act II's job."
    completed:
      Midnight Covenant: false
    status: planned
    outcome: ""
  - text: "**Rising tremors** *(medium, investigative)* — a Thornmere-echo incident surfaces elsewhere, making the threat concrete again before the ramp-up. Not designed in detail yet — could be one scene or its own short arc."
    completed:
      Midnight Covenant: false
    status: planned
    outcome: ""
  - text: "**The Convergence** *(escalating)* — piecing together where and when Vecna will perform the Working, using intel from the Library operation and the power-harvesting pipeline. **This is where the actual casting site — distinct from the Library — gets identified.**"
    completed:
      Midnight Covenant: false
    status: planned
    outcome: ""
  - text: "**The World-Truth Working** *(climax)* — the losing battle. Villain step 3. The ritual's severity at completion is set by two levers: how well the party disrupted the Library operation, and how much of the power-harvesting/soul-vessel pipeline they'd already dismantled. This severity carries forward into Act II's opening state and into how contestable Vecna's claim is at the very end of the campaign (see Endings, below)."
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
> > > [!warning]- DM only — how the party survives the Working
> > > Three options are being kept live for the table; **do not pre-select** — pick whichever lands hardest when it happens:
> > > 1. Vecna's contempt — he's spent and doesn't bother finishing off mortals beneath his notice.
> > > 2. Ritual backlash — the Working's completion knocks the party out/scatters them, possibly with a lingering side effect echoing Thornmere's "too much truth" overflow.
> > > 3. A rescuer pulls them out at a cost, creating a debt.
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
