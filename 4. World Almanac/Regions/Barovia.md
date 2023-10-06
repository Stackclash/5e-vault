---
obsidianUIMode: preview
government: Monarchy
rulers:
  - "[[4. World Almanac/Eldoria/NPCs/Strahd von Zarovich.md|Strahd von Zarovich]]"
regions: ""
places_of_interest: ""
settlements: ""
---
region:: [[4. World Almanac/Settlements/Village of Barovia.md|Village of Barovia]]
region:: [[4. World Almanac/Settlements/Village of Barovia.md|Village of Barovia]]
world:: [[4. World Almanac/Worlds/Eldoria.md|Eldoria]]

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
> **Parent Location** | `=this.parent_location` |
> **Terrain** | `=this.terrain` |
> ###### Politics
>  |
> ---|---|
> **Ruler(s)** | TBD |
> **Govt Type** | `=this.government` |
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
table join(type, ", ") AS Type
FROM "4. World Almanac/Eldoria/Groups"
WHERE econtains(Location, this.file.name)
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


> ```dataview
>  TABLE
>  FROM "4. World Almanac/Eldoria/Places of Interest" OR "4. World Almanac/Eldoria/Settlements"
> ```