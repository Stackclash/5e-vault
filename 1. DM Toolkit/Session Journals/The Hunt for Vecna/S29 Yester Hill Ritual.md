---
obsidianUIMode: preview
date: 2025-01-19
summary: |-
  With the captured druid broken by Seluvis's interrogation, the party stormed the crown of Yester Hill and shattered the dark druids' ritual before it could be completed. In the fighting the druids called up the Gulthias Avatar, a towering horror of blighted wood, and the party cut it down among the standing stones. As Faerah approached the Gulthias Tree its vines seized her and began dragging her in — but she called on Eilistraee, and a shaft of moonlight lanced down, driving the vines back. At the tree's base they recovered the second of the Wizard of Wines' stolen gems, along with the Yester Hill Axe and the Gulthias Staff.
fc-date: 973-2-23
fc-end: 973-2-23
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[1. DM Toolkit/Session Prep/The Hunt for Vecna/2025-01-19.md|2025-01-19]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Places of Interest/The Wizard of Wines.md|The Wizard of Wines]]"
  - "[[4. World Almanac/Places of Interest/Yester Hill.md|Yester Hill]]"
session_number: 29
party_present:
  - "[[3. The Party/Players/Seluvis Felo'melorn.md|Seluvis Felo'melorn]]"
npcs: []
quests: []
items: []
---
> [!infobox]
> ###### Prep
>  |
>  ---|---|
> **Session #** | `INPUT[number:session_number]` |
> **Party** | `INPUT[suggester(optionQuery(#party)):party]` |
> **Played on** | `INPUT[datePicker:date]` |
> **Prep notes** | `INPUT[suggester(optionQuery(#session-prep)):prep_notes]` |
> **In-world start** | `INPUT[text:fc-date]` |
> **In-world end** | `INPUT[text:fc-end]` |
> **Timelines** | `INPUT[inlineList:timelines]` |
> ###### Ledger
>  |
>  ---|---|
> **Party present** | `INPUT[inlineListSuggester(optionQuery(#player)):party_present]` |
> **Spotlight** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'spotlight'})` |
> **Locations** | `INPUT[inlineListSuggester(optionQuery(#location)):locations]` |
> **NPCs met** | `INPUT[inlineListSuggester(optionQuery(#npc)):npcs]` |
> **Quests touched** | `INPUT[inlineListSuggester(optionQuery(#quest)):quests]` |
> **Items** | `INPUT[inlineListSuggester(optionQuery(#story-item), optionQuery("5. Mechanics/Items")):items]` |
> **Factions** | `INPUT[inlineListSuggester(optionQuery(#faction)):factions]` |
`$=await dv.view('views/sessionNav', {current: dv.current()})`
```dataviewjs
await dv.view('views/entityHeader', {current: dv.current(), pronounced: false})
```
`BUTTON[wrap-session]`
`$=await dv.view('views/sectionBar', {current: dv.current()})`

## Session Overview
> [!div|no-t clean]
> `INPUT[textArea:summary]`

## Key Learnings
Description of any important information that the party learned.
Who Did They Meet?

## Items Of Importance
Description

## What Happened
- [[Seluvis Felo'melorn]] - makes captured druid shit himself
- The Gulthias Avatar is summoned
- 

## Notes
### Item Cards
- [[Yester Hill Axe]]
- [[Gulthias Staff]]

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
```meta-bind-button
label: Wrap this session
icon: clipboard-copy
style: primary
id: wrap-session
hidden: true
actions:
  - type: inlineJS
    code: |-
      const name = app.workspace.getActiveFile()?.basename ?? ''
      await navigator.clipboard.writeText(`/wrap ${name}`)
      new Notice(`Copied "/wrap ${name}": paste it into Claude Code to wrap this session`)
```
