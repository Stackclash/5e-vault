---
obsidianUIMode: preview
date: 2026-10-17
session_number: 48
summary:
fc-date: 973-2-31
fc-end: 
timelines: 
  - COS
aat-render-enabled: true
fc-category: Session
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep-notes: ""
party_present: []
locations: []
npcs: []
quests: []
items: []
tags:
  - session-journal
---
> [!infobox]
> ## Info
> | | |
> |---|---|
> | **Session #:** | `INPUT[number:session_number]` |
> | **Party:** | `INPUT[suggester(optionQuery(#party)):party]` |
> | **Session Date:** | `INPUT[datePicker:date]` |
> | **Prep Notes:** | `INPUT[suggester(optionQuery(#session-prep)):prep-notes]` |
> ## Fantasy Dates
> | | |
> |---|---|
> | **Start Date:** | `INPUT[text:fc-date]` |
> | **End Date:** | `INPUT[text:fc-end]` |
> | **Timelines:** | `INPUT[inlineList:timelines]` |
> ## Session Links
> | | |
> |---|---|
> | **Party Present:** | `INPUT[inlineListSuggester(optionQuery(#player)):party_present]` |
> | **Locations:** | `INPUT[inlineListSuggester(optionQuery(#location)):locations]` |
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
Small description.
