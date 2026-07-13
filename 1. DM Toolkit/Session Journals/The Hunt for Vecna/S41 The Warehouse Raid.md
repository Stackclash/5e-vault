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
campaign: "[[1. DM Toolkit/Campaigns/The Hunt for Vecna.md|The Hunt for Vecna]]"
prep-notes: "[[1. DM Toolkit/Session Prep/Midnight Covenant/2026-05-30.md|2026-05-30]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Settlements/Bruokdon.md|Bruokdon]]"
---
> [!infobox]
> ## Info
> | | |
> |---|---|
> | **Campaign:** | `INPUT[suggester(optionQuery(#campaign)):campaign]` |
> | **Session #:** | `INPUT[number:session_number]` |
> | **Session Date:** | `INPUT[datePicker:date]` |
> | **Prep Notes:** | `INPUT[suggester(optionQuery(#session-prep)):prep-notes]` |
> ## Fantasy Dates
> | | |
> |---|---|
> | **Start Date:** | `INPUT[text:fc-date]` |
> | **End Date:** | `INPUT[text:fc-end]` |
> | **Timelines:** | `INPUT[inlineList:timelines]` |
> | **Locations:** | `INPUT[inlineListSuggester(optionQuery(#location)):locations]` |
> ## Session Links
> | | |
> |---|---|
> | **Party Present:** | `INPUT[inlineListSuggester(optionQuery(#player)):party_present]` |
> | **NPCs Met:** | `INPUT[inlineListSuggester(optionQuery(#npc)):npcs]` |
> | **Quests Touched:** | `INPUT[inlineListSuggester(optionQuery(#quest)):quests]` |
> | **Items Found:** | `INPUT[inlineListSuggester(optionQuery("5. Mechanics/Items")):items]` |
# `=this.file.name`
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