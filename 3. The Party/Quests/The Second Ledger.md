---
obsidianUIMode: preview
active:
  Midnight Covenant: true
completed:
  Midnight Covenant: false
world: "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"
description: >-
  Hunt Stage 1 (extension). With Marrow dead and the Bruokdon cell broken
  (S44), the Silent Ascendency network above the city is untouched and
  doesn't know it. Nobody up the chain ever dealt with Marrow directly —
  only with "Lord Velmont," whether worn or real. [[Lord Caldris Velmont]],
  freed and cured of the Feeblemind trap, has proposed simply resuming that
  identity: no disguise, just nerve and a cover story for the shipment the
  party already intercepted. His motive is revenge, not loyalty to the
  party — reliable for as long as it's aimed at the Ascendency.

  The play: walk into [[The Cinderworks]], a condemned charm-foundry outside
  Bruokdon the Ascendency uses as a consolidation depot, with the party
  posing as Velmont's escort. [[Hesper Crane]], the depot's quartermaster,
  has never met the real Velmont in person and is already rattled by the
  missing shipment — a second silence is what breaks her composure.

  What the party doesn't know: the smuggling ring was Velmont's own
  criminal enterprise long before the Ascendency ever touched it. He isn't
  reforming; he's settling a score, and if a quiet chance to reclaim the
  ring for himself appears once the Ascendency's grip is broken, he'll take
  it without announcing it.

  Beyond the Cinderworks, Crane's ledger names a contact in [[Duskferry]]
  by code name only — "the Tallyman." The real identity ([[Ostwin Reyes]],
  a senior Ferrymen's Guild clerk) and the honest ally hiding in plain
  sight (Guildmaster [[Anselm Corrow]], who has no idea his own clerk is
  compromised) are DM-only until the party actually pursues the lead.
  Beyond Duskferry, the pipeline's actual endpoint is [[Greyfen Hollow]] —
  a hidden marsh site where smuggled items become soul-vessels. Not for
  this session's reveal; a future thread once the Duskferry lead is
  followed.
steps:
  - text: >-
      Velmont proposes the plan: resume being "Lord Velmont" to the wider network, with the party as his escort, to find out where the Ascendency's shipments actually go.
    status: planned
npcs:
  - name: "[[Lord Caldris Velmont]]"
    description: Proposes and leads the ruse. Genuinely wants the Ascendency hurt; not above quietly serving himself if the chance costs him nothing.
  - name: "[[Hesper Crane]]"
    description: The Cinderworks' quartermaster. Never met the real Velmont in person, tests via password if suspicious, breaks if the ruse fails twice.
  - name: "[[Ostwin Reyes]]"
    description: The Duskferry lead named in Crane's ledger, known to the party only by his code name "the Tallyman" until they earn the real identity. Not yet met.
  - name: "[[Anselm Corrow]]"
    description: Duskferry's Guildmaster — not part of the Ascendency, a potential honest ally if approached directly. Not yet met.
tags:
  - quest
kind: quest
parent: "[[3. The Party/Quests/Act I - The World-Truth Working.md|Act I - The World-Truth Working]]"
gist: ""
summary: ""
revealed: {}
facts: []
giver: "[[4. World Almanac/NPCs/Lord Caldris Velmont.md|Lord Caldris Velmont]]"
locations:
  - "[[4. World Almanac/Places of Interest/The Cinderworks.md|The Cinderworks]]"
  - "[[4. World Almanac/Settlements/Duskferry.md|Duskferry]]"
  - "[[4. World Almanac/Places of Interest/Greyfen Hollow.md|Greyfen Hollow]]"
items: []
factions:
  - "[[4. World Almanac/Factions/Silent Ascendency.md|Silent Ascendency]]"
  - "[[4. World Almanac/Factions/Ferrymen's Guild.md|Ferrymen's Guild]]"
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
> > ### Quest Hooks
> > - Velmont wants revenge on the network that captured, replaced, and discarded him.
> > - The Ascendency's shipment network above Bruokdon is still untouched and still moving stolen magic items toward Vecna's ascension.

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
