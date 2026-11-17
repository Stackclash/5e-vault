---
obsidianUIMode: preview
date: 2024-10-26
summary: The party spends the day in the town shopping for supplies, suspecting that this may be their last chance. They buy multiple potions and Yevelda buys a hand axe with thorns along the handle. Faerah helps a tailor shop keeper prove that one of his rivals is stealing his designs and in return he gives her a pair of winged boots.
fc-date: 973-2-23
fc-end: 973-2-23
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[1. DM Toolkit/Session Prep/The Hunt for Vecna/2024-10-26.md|2024-10-26]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Settlements/Krezk.md|Krezk]]"
session_number: 26
party_present:
  - "[[3. The Party/Players/Seluvis Felo'melorn.md|Seluvis Felo'melorn]]"
  - "[[3. The Party/Players/Faerah Duskrane.md|Faerah Duskrane]]"
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
- 

## Items Of Importance
Description

## What Happened
- The Gracious Pixy
	- 1 [[Potion Of Superior Healing]] 300gp
	- 1 [[Potion Of Growth]] 100 gp
	- 2 [[Potion Of Hill Giant Strength]] 100gp (50gp)
	- 1 [[Potion Of Greater Healing]] 50gp (50gp)
	- = 550 gp
	- 2 [[Potion Of Invisibility]] (1 lasts for 2 hours)
		- [[Seluvis Felo'melorn]] helps the herbalist make a [[Potion Of Invisibility]] to get the recipe
- Grate Axpectations
	- 1 [[Yester Hill Axe]]
	- 
- The Sleek Search
	- [[Faerah Duskrane]] helps owner to get [[Winged Boots]]
- The Grumpy Owl
- 

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
