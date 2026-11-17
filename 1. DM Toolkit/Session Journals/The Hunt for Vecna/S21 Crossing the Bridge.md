---
obsidianUIMode: preview
date: 2024-07-27
summary: |-
  In the frozen ruins of Tsolenka Pass, the party took shelter in the crumbling battlements, the howling winds of Mount Ghakis and thick snowfall surrounding them. With the desolate fortress abandoned, Redgrave seized the quiet moment to decode the second chapter of the Tome of Strahd. As the group gathered around, they read Strahd's chilling dedication to Barovia, his land, newly conquered yet cursed by his own ambitions. The weight of the ancient vampire’s words lingered in the cold air, as the dawn’s faint light struggled to pierce the storm.

  The next day, their journey led them across a perilous bridge spanning a great chasm, but a monstrous bird descended from the peaks, seeking to make them its prey. Desperation drove them to cast the body of a dead Vistani to distract the creature, but its hunger could not be sated. In a vicious clash, Redgrave summoned a swirling vortex of snow, ensnaring the beast, while Seluvis, standing fearlessly in its midst, shattered its talon with his magical fists. Cawing in agony, the bird retreated, leaving the party victorious but shaken. With the mountain looming above and the Luna River far below, they chose a bold plan—using magic to leap from the cliffs, gently floating toward the river, and the next stage of their treacherous journey through Barovia.
fc-date: 973-2-21
fc-end: 973-2-22
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[1. DM Toolkit/Session Prep/The Hunt for Vecna/2024-07-27.md|2024-07-27]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Places of Interest/Tsolenka Pass.md|Tsolenka Pass]]"
session_number: 21
party_present:
  - "[[3. The Party/Players/Seluvis Felo'melorn.md|Seluvis Felo'melorn]]"
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[3. The Party/Players/Marin.md|Marin]]"
npcs:
  - "[[4. World Almanac/NPCs/Savid (COS).md|Savid (COS)]]"
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
- [[Seluvis Felo'melorn]] investigates from the top of the guard tower at [[Tsolenka Pass]]
- [[Redgrave]] decodes chapter 2 from the Tome of Strahd while the party has a long rest
- The party reads chapter 2 from the [[5. Mechanics/Items/Tome Of Strahd (COS)|Tome of Strahd]]
- The party goes to cross the bridge across the Luna River and are a attacked by a giant bird
- [[Marin]] takes out the decaying body of  [[Savid]] and uses it as a distraction
- After eating the body of [[Savid]] the bird begins to cross the bridge and Redgrave creates a whirlwind of snow to trap it
- [[Seluvis Felo'melorn]] gets trapped with the bird and begins to barge it with punches, one of which brakes it's talon
- The giant bird decides they are not worth the trouble and flies away

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
