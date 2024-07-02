---
obsidianUIMode: preview
location: '[[4. World Almanac/Regions/Barovia.md|Barovia]]'
image: z_Assets/PlaceholderImage.png
pronounced: null
resources: []
population: null
terrain: null
rulers: []
government: null
army: null
religions: []
imports: []
exports: []
aliases: []
tags:
  - place-of-interest
  - location
---
> [!infobox]
> # `=this.file.name`
> ```meta-bind
> INPUT[imageSuggester(optionQuery("z_Assets")):image]
> ```
>  |
> ---|---|
> **Pronounced:** | `INPUT[text:pronounced]` |
> **Location:** | `INPUT[suggester(optionQuery(#location)):location]` |
> **Resource(s):** | `INPUT[inlineListSuggester(optionQuery("6. Resources")):resources]` |
> ###### Info
>  |
> ---|---|
> **Alias:** | `INPUT[inlineList:aliases]` |
> **Population:** | `INPUT[number:population]` |
> **Terrain:** | `INPUT[text:terrain]` |
> ###### Politics
>  |
> ---|---|
> **Ruler(s):** | `INPUT[inlineListSuggester(optionQuery("4. World Almanac/NPCs")):rulers]` |
> **Govt Type:** | `INPUT[text:government]` |
> **Army:** | `INPUT[text:army]` |
> **Religions:** | `INPUT[inlineList:religions]` |
> ###### Logistics
>  |
> ---|---|
> **Imports:** | `INPUT[inlineList:imports]` |
> **Exports:** | `INPUT[inlineList:exports]` |

`$= await dv.view("locationBreadcrumbs", {current: dv.current()})`
# **`=this.file.name`**
> [!info|bg-c-purple]- Overview
TBD

## Map
```leaflet  
id: AmberTemple 
lock: true  
recenter: true  
noScrollZoom: true  
image:
  - [[Amber Temple 1.webp|Level 2]]
  - [[Amber Temple 2.webp|Level 1]]
bounds: [[0,0], [160.00,160.00]]
height: 900px  
width: 100%  
lat: 80
long: 80  
minZoom: 3 
maxZoom: 4
defaultZoom: 3 
zoomDelta: 0.5  
unit: feet  
scale: 1  
darkMode: false
marker: default,73.6181640625,77.46782449725777,,,,
marker: default,74.8681640625,77.96800731261426,,,,
```

```dataviewjs
await dv.view("locations", {current: dv.current()})
```

```dataviewjs
await dv.view("npcsInLocation", {current: dv.current()})
```

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
