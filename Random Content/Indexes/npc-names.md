---
type: random-table-index
id: npc-names
title: NPC Names

category: npc-names
path: []

filters: {}

default-view: tables
status: active
---

# NPC Names

## Purpose
Index of all NPC name tables.

## Tables
```dataview
TABLE file.link AS Table, filters.ancestry AS Ancestry, filters.gender AS Gender, filters.namePart AS "Name Part"
FROM "Random Content/Tables"
WHERE type = "random-table"
AND category = "npc-names"
SORT file.name