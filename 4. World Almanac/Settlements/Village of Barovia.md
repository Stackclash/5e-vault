---
obsidianUIMode: preview
mapmarker: village
region:
  - "[[4. World Almanac/Regions/Barovia.md|Barovia]]"
world: ""
settlements: ""
---
region::  [[4. World Almanac/Regions/Barovia.md|Barovia]]
> [!infobox]
> # `=this.file.name`
> **Pronounced:**  "`=this.Pronounced`"
> ###### Info
>  |
> ---|---|
> **Alias** | `=this.alias` |
> **Type** | `=this.type` |
> **Population** | `=this.population` |
> **Region** | `=link(this.Region)` |
> **Terrain** | `=this.terrain` |
> ###### Politics
>  |
> ---|---|
> **Ruler(s)** | TBD |
> **Leaders** | TBD |
> **Govt Type** | `=this.GovtType` |
> **Defenses** | `=this.defences` |
> **Religion(s)** | `=link(this.religions)` |
> ###### Commerce
>  |
> ---|---|
> **Imports** | `=this.imports` |
> **Exports** | `=this.exports` |
> ###### Groups
> [[Group Database|Add New Group]]
> ```dataview 
table join(Type, ", ") AS Type
WHERE econtains(Location, this.file.name) AND contains(NoteIcon, "Group")
SORT Type ASC

# **`=this.file.name`**
> [!info|bg-c-purple]- Overview
TBD

## Map
> ```leaflet
> id: village-of-barovia
> image: [[Village of Barovia.jpg]]
> height: 800px
> minZoom: 0
> maxZoom: 1
> defaultZoom: 0
> lat: 412.5
> long: 325
> bounds:
> - [0,0]
> - [825,650]
> noUI: false
> unit: feet
> marker: haunted-house, 435.875, 552.25, [[Village of Barovia#Death House]]
> marker: shop, 311.75, 313.5, [[Village of Barovia#Bildrath's Mercantile]]
> marker: house, 260.875, 285.5, [[Village of Barovia#Mad Mary's Townhouse]]
> marker: tavern, 412.875, 322.5, [[Village of Barovia#Blood of the Vine Tavern]]
> marker: church, 565.875, 171.5, [[Village of Barovia#Church]]
> marker: graveyard, 679.875, 170.5, [[Village of Barovia#Cemetery]]
> marker: house, 77.875, 271.5, [[Village of Barovia#Burgomaster's Mansion]]
> ```

## Notable Locations

> [!info|bg-c-purple]- Districts
TBD

> ###### Notable Shops/Services
> [[Shop & Service Database|Add New Shop/Service]]
> ```dataview
table join(Type, ", ") AS Type, join(link(AffiliatedGroup), ", ") AS "Affiliated Group(s)"
WHERE Location = this.file.name AND contains(NoteIcon, "Shop")
SORT file.name ASC

## Notable Characters

> ###### Notable Characters
> [[NPC Database|Add New NPC]]
> ```dataview
table art
> FROM "4. World Almanac/Eldoria/NPCs"
WHERE location = this.file.name AND !contains(condition, "Dead")
SORT file.name ASC

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
