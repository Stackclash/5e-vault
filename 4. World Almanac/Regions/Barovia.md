---
obsidianUIMode: preview
government: Monarchy
rulers:
  - "[[4. World Almanac/NPCs/Strahd von Zarovich.md|Strahd von Zarovich]]"
world_region:
  - "[[Eldoria]]"
region_settlement:
  - "[[Vallaki]]"
  - "[[Village of Barovia]]"
region_PoI: "[[Old BoneGrinder]]"
---
> [!infobox]
> # `=this.file.name`
> ![[PlaceholderImage.png|wm-tl]]
> **Pronounced:**  "`=this.Pronounced`"
> ###### Info
>  |
> ---|---|
> **Alias** | `=this.alias` |
> **Population** | `=this.population` |
> ###### Politics
>  |
> ---|---|
> **Ruler(s)** | `=link(this.rulers)` |
> **Govt Type** | `=this.government` |
> **Army** | `=this.army` |

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
**[[Settlements|Add New Settlement]]**
**[[Places of Interest|Add New Place of Interest]]**
> ```dataview
>  TABLE WITHOUT ID link(file.name) AS "Name", file.frontmatter.pronounced as "Pronounced"
>  FROM "4. World Almanac/Places of Interest" OR "4. World Almanac/Settlements"
>  WHERE contains(file.frontmatter.region_PoI, this.file.name) OR contains(file.frontmatter.region_settlement, this.file.name)
> ```


## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
