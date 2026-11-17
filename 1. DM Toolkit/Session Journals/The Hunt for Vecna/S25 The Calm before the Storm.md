---
obsidianUIMode: preview
date: 2024-10-19
summary: The party discusses their next move. They have a long discussion on how to handle Strahd. Some want reconciliation for him and others want to find a way to reunite Strahd and Sergei together. They decide to use the teleportation gem to teleport them to Krezk and travel south to the Wizard of Wines to find the other gems, hoping that they'd give them an edge. When they arrive at Krezk they arrive at the Abbey of Saint Markovia and meet the Abbot who has a plan to placate Strahd by providing him the "perfect" bride. In the Abbey they also meet several Mongelfolk along with Clovin who live there.
fc-date: 973-2-22
fc-end: 973-2-23
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[1. DM Toolkit/Session Prep/The Hunt for Vecna/2024-10-19.md|2024-10-19]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Places of Interest/Abbey of Saint Markovia.md|Abbey of Saint Markovia]]"
session_number: 25
party_present:
  - "[[3. The Party/Players/Seluvis Felo'melorn.md|Seluvis Felo'melorn]]"
  - "[[3. The Party/Players/Faerah Duskrane.md|Faerah Duskrane]]"
  - "[[3. The Party/Players/Yevelda Ovak.md|Yevelda Ovak]]"
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[3. The Party/Players/Marin.md|Marin]]"
npcs:
  - "[[4. World Almanac/NPCs/The Abbot (COS).md|The Abbot (COS)]]"
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
Description of any important information that the party learned.
Who Did They Meet?

## Items Of Importance
Description

## What Happened
- [[Seluvis Felo'melorn]] crafts the following:
	- 7 [[Potion Of Healing]]
	- 4 [[Potion Of Greater Healing]]
	- a set of pins that can change colors based on his decision
		- he can only change the colors
		- range of 200ft
		- Colors decided on 
			- red - DANGER
			- green - Attack
			- blue - regroup
			- purple - portal room
- [[Faerah Duskrane]] is looking for:
	- [[Boots Of Speed]]
	- [[Ring Of Evasion]]
	- [[Gloves Of Thievery]]

- Furious debate happens between the party
	- [[Seluvis Felo'melorn]]
		- All for diplomacy
	- [[Redgrave]]
		- Use [[Divination]] to get an answer to what weakness Strahd has
		- The turning point was Strahd's decision to make a pact in [[The Amber Temple]]
		- What if Sergei is still in Barovia?
		- Would forgiveness even matter
	- [[Faerah Duskrane]]
		- Want's to talk Strahd out of it.
	- [[Marin]]
		- Want's to speak to Sergei
	- [[Yevelda Ovak]]

- [[The Abbot]] gives the following:
	- 1 [[Potion Of Healing]]
	- 2 [[Potion Of Greater Healing]]

[[Redgrave]] casts [[Divination]]
	- Gets the following as answer: "'When the heart no longer beats, the lord's reign will end, but only where he was born will he find rest."


! NOTE: Make Item cards for spell scrolls and books and +1 spear for [[Yevelda Ovak]]

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
