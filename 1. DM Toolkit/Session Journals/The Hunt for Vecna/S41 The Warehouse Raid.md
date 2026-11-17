---
obsidianUIMode: preview
date: 2026-05-30
summary: "Acting on the note recovered from the smugglers' hideout, Faerah had slipped away to scout the warehouse from the air, and the Covenant laid their plans. When the raid came, they struck from two directions at once: Wisp and Faerah flew to the warehouse's upper level to hunt down the leader, while the rest of the party broke through the front doors. Inside waited a hardened crew — blackguards, master thieves, an assassin, and a lumbering flesh golem — and the fight was fierce. The leader, Tavish Ironwood, tried to flee the closing net, but Faerah ran him down and took him hostage. Seeing their master cornered and certain to talk, one of his own bodyguards turned on him, trying to cut Tavish down before he could be taken alive. The party cut through the last of the resistance and hauled Tavish away in chains. Among the crates they found the smugglers' haul — boxes upon boxes of minor magical items — and kept a few choice pieces for themselves."
fc-date: 973-2-27
fc-end: 973-2-27
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[1. DM Toolkit/Session Prep/The Hunt for Vecna/2026-05-30.md|2026-05-30]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Settlements/Bruokdon.md|Bruokdon]]"
session_number: 41
party_present:
  - "[[3. The Party/Players/Wisp.md|Wisp]]"
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
The party raids the warehouse and clears out the enemies. During the battle Faerah was able to capture the leader of the thieves, Tavish Ironwood.

```encounter-table
name: Warehouse
creatures:
- 4: [[Blackguard (MPMM)]]
- 3: [[Master Thief (MPMM)]]
- 1: [[Assassin]]
---
creatures:
- 1: [[Flesh Golem]]
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
