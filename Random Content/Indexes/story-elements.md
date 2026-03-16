---
type: random-table-index
id: story-elements
title: Story Elements

category: story-elements
path: []

filters: {}

default-view: tables
status: active
---

# Story Elements

## Purpose
Index of random tables used for storytelling and NPC generation.

## Tables
```dataview
TABLE file.link AS Table, path AS Path
FROM "Random Content/Tables"
WHERE type = "random-table"
AND category = "story-elements"
SORT file.name
```