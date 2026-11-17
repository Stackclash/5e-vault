---
obsidianUIMode: preview
kind: arc
parent: ""
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
  The party's journey to stop Vecna unfolds across **two acts, each built around one of Vecna's two rituals** (see The Villain: Vecna, above). Vecna's plan keeps advancing on its own timeline regardless of which stage the party is in — these are the party's moves, not his. Stage numbers are pacing scaffolding, not a railroad — treat each as a situation, not a fixed scene order. Arcs marked *Breather* are deliberately low-stakes: room to explore consequences, spotlight a PC, and let tension recover before the next climb.

  Endings:

  Ritual 1 forces a global compulsion to truth and creates a vacant cosmic Truth-domain — and in the same act, stakes Vecna's claim to it, because the ritual's own wording exempts him alone from the truth it compels everyone else to. That asymmetry reads to the cosmos as the strongest available claim on the vacancy, even though it's a rigged cheat rather than an honestly total relationship to Truth. Ritual 2 is where Vecna formally executes and validates that claim.

  **Because the claim isn't honestly won, it's contestable** — a rival claimant with a genuinely total, unhedged relationship to Truth could override Vecna's reservation at the Rite. How cleanly the World-Truth Working landed in Act I (a patchy, disrupted casting vs. a clean, near-total one) determines which of these are realistically on the table:

  1. **Stop Vecna outright** — kill or banish him before the Rite completes; the vacancy dissolves unclaimed. Always available, regardless of Act I's outcome — the baseline win.
  2. **Redirect the vacancy to a worthier claimant** — candidate: [[Wisp]]'s master, if the Eternal Watch have groomed a contingency candidate for exactly this scenario. Gated behind Act II prep — keeping him alive/stable and completing the Eternal Watch arc (Act II, Arc 4).
  3. **Collapse the domain entirely** — destroy the vacancy so nothing can ever fill it. Cost: Truth-magic (Zone of Truth, Discern Lies, binding oaths, etc.) becomes permanently unreliable in the world. Requires specific knowledge from the Eternal Watch to even be an option.
stakes: ""
reward: ""
deadline: ""
giver: ""
npcs: []
locations: []
items: []
factions: []
pcs: []
steps: []
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
