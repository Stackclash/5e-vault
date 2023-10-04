---
obsidianUIMode: preview
alias: 
pronounced: 
rulers: 
population: 
government: 
army:
---
> [!infobox]
> # `=this.file.name`
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
> ```leaflet
> id: Faerun_Map
> lock: true  
> recenter: true  
> noScrollZoom: true  
> image: [[PlaceholderImage.png]] 
> bounds: [[0,0], [1815.07, 2805.48]]  
> height: 900px  
> width: 95%
> lat: 907.53  
> long: 1402.74  
> minZoom: -1.5
> maxZoom: 1.5  
> defaultZoom: -1
> zoomDelta: 0.5
> unit: miles  
> scale: 1  
> darkMode: false  
> ```

## Notable Locations

> ```dataview
>  TABLE
>  FROM "4. World Almanac/Eldoria/Places of Interest" OR "4. World Almanac/Eldoria/Settlements"
>  WHERE file.region = this.file.name OR file.location = this.file.name
> ```


## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
