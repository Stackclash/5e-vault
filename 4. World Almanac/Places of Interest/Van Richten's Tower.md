---
obsidianUIMode: preview
location: '[[4. World Almanac/Regions/Barovia.md|Barovia]]'
image: z_Assets/PlaceholderImage.png
pronounced: null
resources:
  - '[[13 Chapter-11 Van Richtens Tower|Van Richten''s Tower]]'
population: null
terrain: null
rulers: null
government: null
army: null
religions: null
imports: null
exports: null
aliases: null
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
> **Location:** | `INPUT[suggester(optionQuery("4. World Almanac/Places of Interest"),optionQuery("4. World Almanac/Regions"),optionQuery("4. World Almanac/Settlements"),optionQuery("4. World Almanac/Worlds")):location]` |
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
> ```leaflet  
> ### Tutorial: [https://youtu.be/54EyMzJP5DU](https://youtu.be/54EyMzJP5DU)  
> ### id must be unique  
> id: Faerun_Map  
> ### Lock pins so they can't be moved  
> lock: true  
> ### If true, view of map will recenter as you zoom out.  
> recenter: true  
> ### If true, disables mouse scroll for zomming in and out of a map. Button controls still work.  
> noScrollZoom: true  
> image: [[PlaceholderImage.png]]
> ### Map Pixel Height x 1 / (Pixels between Bar Scale / 100)  
> ### Map Pixel Width x 1 / (Pixels between Bar Scale / 100)  
> ### Note that this formula requires adjustments depending on your map. The idea is to determine the number of units between your bar scale. We divide by 100 here because my bar scale measures in 100 units. If your maps scale bar measures in units of 50 them you should divide by 50 instead. The idea is to calculate how many pixels are equal to 1 unit.  
> ### Bounds is entered as [Height, Width]  
> bounds: [[0,0], [1815.07, 2805.48]]  
> height: 900px  
> width: 95%  
> ### This sets where the map starts by default. Set it to the middle (half) of your bounds.  
> lat: 907.53  
> long: 1402.74  
> ### 0 is no zoom. Negative zoom steps away from the map. Positive zoom steps towards the map.  
> minZoom: -1.5  
> ### Max zoom is 18.  
> maxZoom: 1.5  
> ### Hover mouse over the Reset Zoom icon to see your current zoom level.  
> defaultZoom: -1  
> ### How far it zooms in or out with each step. Can be in decimals.  
> zoomDelta: 0.5  
> ### This is a string so can be any text. Change it to match your maps measurement scale.  
> unit: miles  
> scale: 1  
> darkMode: false  
> ```

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
