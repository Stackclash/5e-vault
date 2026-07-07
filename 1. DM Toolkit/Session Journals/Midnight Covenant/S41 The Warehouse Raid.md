---
obsidianUIMode: preview
date: 2026-05-30
summary: ""
fc-date: 973-2-27
fc-end: 973-2-27
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
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
> | **Party:** | `INPUT[suggester(optionQuery(#party)):party]` |
> | **Session Date:** | `INPUT[datePicker:date]` |
> | **Prep Notes:** | `INPUT[suggester(optionQuery(#session-prep)):prep-notes]` |
> ## Fantasy Dates
> | | |
> |---|---|
> | **Start Date:** | `INPUT[text:fc-date]` |
> | **End Date:** | `INPUT[text:fc-end]` |
> | **Timelines:** | `INPUT[inlineList:timelines]` |
> | **Locations:** | `INPUT[inlineListSuggester(optionQuery(#location)):locations]` |
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