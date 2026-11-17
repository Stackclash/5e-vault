---
obsidianUIMode: preview
date: 2026-01-11
summary: "Emerging from the forests of Barovia, the party stepped into a new land: Greenfall. They came upon the small town of Thornmere and soon realized something was deeply wrong — the town's children knew of the party's exploits in Barovia and intimate details about each of them they had no way of knowing. They also found Eamon Morcant, a man who had lived in Thornmere his whole life yet was shunned as a stranger, the villagers somehow made to forget him entirely. Investigating Eamon's home, the party uncovered a magical rune buried beneath it. Breaking the rune restored the villagers' memories, and Redgrave cured the children of the strange magic clinging to them."
fc-date: 973-2-24
fc-end: 973-2-24
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[1. DM Toolkit/Session Prep/The Hunt for Vecna/2026-01-11.md|2026-01-11]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Settlements/Thornmere.md|Thornmere]]"
session_number: 35
party_present:
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
npcs:
  - "[[4. World Almanac/NPCs/Eamon Morcant.md|Eamon Morcant]]"
quests: []
items: []
factions: []
wrapped: false
publish: false
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
- [[Bruokdon]] is a couple days travel NE of [[Thornmere]]
- Phillip (an enchanted child) reveals that he knows about a lot about the party
	- Mom is Sarah
- [[Eamon Morcant]]

## Items Of Importance
Description

## What Happened
Small description.

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
