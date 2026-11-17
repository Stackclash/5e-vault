---
obsidianUIMode: preview
active:
  Midnight Covenant: true
completed:
  Midnight Covenant: false
world: "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"
description: >-
  Hunt Stage 3. [[Professor Gousse Windcaller]] has the Well of Many Worlds and
  a principle for using it: the Well can only be opened onto a plane that
  shares a real elemental or environmental resonance with wherever it's
  opened from on the Material Plane. Reaching the Great Library — which holds
  records Eldoria's own archives can no longer keep, including whatever the
  Silent Ascendency is racing to erase there first — means finding three such
  resonant sites and crossing the Plane of Water, the Feywild, and Limbo in
  turn before the final crossing into the Library itself.

  Unresolved from the Curse of Strahd arc: [[Baba Lysaga (COS)|Baba Lysaga]]
  has not forgiven the party for Strahd's death or the theft of her hut's
  animating gem, and has bought herself a way to intercept them mid-journey.
steps:
  - text: >-
      Gousse briefs the party on the Well's resonance principle and the route: Plane of Water, then the Feywild, then Limbo, then the Great Library.
    status: planned
npcs:
  - name: "[[Professor Gousse Windcaller]]"
    description: Guides the party through the Well of Many Worlds' resonance principle and the planned route.
  - name: "[[Baba Lysaga (COS)]]"
    description: Ambushes the party in the Feywild, disguised as a fey bargain-broker, in revenge for Strahd's death.
  - name: "[[Mab]]"
    description: Ruler of the Gloaming Court; arrives once Lysaga flees to collect on the bargain that made the ambush possible.
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
> > ### Quest Hooks
> > - Gousse needs records the Great Library holds to understand Vecna's Metaphysical Truth and what "becoming the Truth of Ending" actually requires.
> > - Baba Lysaga's unresolved vendetta from the Curse of Strahd arc.

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
