---
obsidianUIMode: preview
date: 2026-09-26
session_number: 47
summary: |-
  The party found an elevator that carried them down into a cave system. They tried to explore the entrance area quietly, but were discovered and had to fight a group of guards. The party defeated them, closing out the session.
fc-date: 973-2-31
fc-end: 
timelines: 
  - COS
aat-render-enabled: true
fc-category: Session
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: ""
party_present:
  - "[[3. The Party/Players/Yevelda Ovak.md|Yevelda Ovak]]"
  - "[[3. The Party/Players/Wisp.md|Wisp]]"
  - "[[3. The Party/Players/Roark Battleborn.md|Roark Battleborn]]"
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[3. The Party/Players/Faerah Duskrane.md|Faerah Duskrane]]"
locations:
  - "[[4. World Almanac/Places of Interest/Greyfen Hollow.md|Greyfen Hollow]]"
npcs: []
quests:
  - "[[3. The Party/Quests/The Second Ledger.md|The Second Ledger]]"
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
> | **Prep Notes:** | `INPUT[suggester(optionQuery(#session-prep)):prep_notes]` |
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
> | **Items Found:** | `INPUT[inlineListSuggester(optionQuery(\"5. Mechanics/Items\")):items]` |
# `=this.file.name`
## Session Overview
> [!div|no-t clean]
> `INPUT[textArea:summary]`

## Key Learnings
- The party descended by elevator into a cave system, which is presumably beneath [[Greyfen Hollow]] (to confirm).
- The entrance area is guarded.

Who Did They Meet?
- Guards only, as far as recorded. Their numbers and details aren't written down yet.

## Items Of Importance
None recorded.

## What Happened
- The party found an elevator that carried them down into a cave system.
- They tried to explore the entrance area stealthily.
- They were discovered and had to fight a group of guards.
- The party defeated the guards. The session ended there.
