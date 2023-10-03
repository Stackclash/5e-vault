---
obsidianUIMode: preview
Type: Region
government: Monarchy
imports:
  - None
exports:
  - None
---
> [!infobox]
> # `=this.file.name`
> **Pronounced:**  "`=this.Pronounced`"
> ![[Barovia.jpg|cover hm-sm]]
> ###### Info
>  |
> ---|---|
> **Alias** | `=this.alias` |
> **Type** | `=this.type` |
> **Population** | `=this.population` |
> **Theme** | `=this.theme` |
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
>```leaflet
> id: Barovia
> image: [[Barovia.jpg]]
> lock: true
> recenter: true
> width: 95%
> height: 700px
> bounds: 
> - [0,0]
> - [11.68,18.21]
> lat: 5.84
> long: 9.10
> minZoom: 6
> maxZoom: 8.5
> defaultZoom: 6
> zoomDelta: 0.5
> unit: miles
> markerFolder: "4. World Almanac/Eldoria/Locations/Barovia/"
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

> ###### Notable Points of Interest
> [[POI Database|Add New Point of Interest]]
> ```dataview
table join(Type, ", ") AS Type, join(link(AffiliatedGroup), ", ") AS "Affiliated Group(s)"
WHERE Location = this.file.name AND contains(NoteIcon, "POI")
SORT file.name ASC

## Notable Characters

> ###### Notable Characters
> [[NPC Database|Add New NPC]]
> ```dataview
table Art, Pronouns, Party1Standing AS "Party 1 Standing", join(Occupation, ", ") AS "Occupation(s)", join(link(AssociatedGroup), ", ") AS "Associated Group(s)", join(link(AssociatedReligion), ", ") AS "Associated Religion(s)"
WHERE Location = this.file.name AND contains(NoteIcon, "Character") AND !contains(Condition, "Dead")
SORT file.name ASC

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
