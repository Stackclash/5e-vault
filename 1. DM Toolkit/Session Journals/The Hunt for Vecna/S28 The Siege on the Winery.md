---
obsidianUIMode: preview
date: 2025-01-11
summary: The party fortifies themselves in the winery while the leader of the dark druids has their tree blights surround the winery. When the group refuses to come out the cultists and the creatures attack. The party fights through waves of enemies and ends up capturing the leader and interrogates him. He reveals their plans for a ritual on top of Yester Hill.
fc-date: 973-2-23
fc-end: 973-2-23
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[1. DM Toolkit/Session Prep/The Hunt for Vecna/2025-01-11.md|2025-01-11]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Places of Interest/The Wizard of Wines.md|The Wizard of Wines]]"
calendar: Eldoria Calendar
session_number: 28
party_present:
  - "[[3. The Party/Players/Yevelda Ovak.md|Yevelda Ovak]]"
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
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
- [[Yevelda Ovak]] and [[Redgrave]] explore the basement of [[The Wizard of Wines]] and come across a singular [[5. Mechanics/Bestiary/Humanoid/Druid|Druid]] and a group of [[5. Mechanics/Bestiary/Plant/Needle Blight|Needle Blight]]
	- An encounter ensues and [[Yevelda Ovak]] and [[Redgrave]] finishes them off.
- The dark druids have the blights surround the winery and tells the party that have a limited time to give themselves up.
- The party fights through the ambush and captures the leader of the druids

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
