---
obsidianUIMode: preview
location: "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"
image: z_Assets/Barovia_Banner.webp
pronounced: Bar - o - via
resources: 
population: 
terrain: 
rulers:
  - "[[4. World Almanac/NPCs/Strahd Von Zarovich.md|Strahd Von Zarovich]]"
government: 
army: 
religions: 
imports: 
exports: 
aliases: 
tags:
  - region
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
> **Resource(s):** | `INPUT[inlineListSuggester(optionQuery("6. Resources"))]` |
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
> **Religions:** | `INPUT[inlineList:relgions]` |
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
> id: Barovia 
> ### Lock pins so they can't be moved  
> lock: true  
> ### If true, view of map will recenter as you zoom out.  
> recenter: true  
> ### If true, disables mouse scroll for zomming in and out of a map. Button controls still work.  
> noScrollZoom: true  
> image: [[Barovia.jpg]]
> ### Map Pixel Height x 1 / (Pixels between Bar Scale / 100)  
> ### Map Pixel Width x 1 / (Pixels between Bar Scale / 100)  
> ### Note that this formula requires adjustments depending on your map. The idea is to determine the number of units between your bar scale. We divide by 100 here because my bar scale measures in 100 units. If your maps scale bar measures in units of 50 them you should divide by 50 instead. The idea is to calculate how many pixels are equal to 1 unit.  
> ### Bounds is entered as [Height, Width]  
> bounds: [[0,0] ,[11.68,18.21]]
> height: 700px  
> width: 95%  
> ### This sets where the map starts by default. Set it to the middle (half) of your bounds.  
> lat: 5.84 
> long: 9.10 
> ### 0 is no zoom. Negative zoom steps away from the map. Positive zoom steps towards the map.  
> minZoom: 6
> ### Max zoom is 18.
> maxZoom: 8.5
> ### Hover mouse over the Reset Zoom icon to see your current zoom level.
> defaultZoom: 6
> ### How far it zooms in or out with each step. Can be in decimals.
> zoomDelta: 0.5
> ### This is a string so can be any text. Change it to match your maps measurement scale.
> unit: miles
> scale: 1
> darkMode: false
> marker:
> - village, 4.43, 14.37, [[Village of Barovia]]
> - village, 7.6, 7.2733, [[Vallaki]]
> - village, 8, 2.0379, [[Krezk]]
> - castle, 5.6302, 13.0019, [[Castle Ravenloft]]
> - village, 6.2077, 2.0323, [[The Wizard of Wines]]
> - village, 4.528, 11.9744, [[Tser Pool]]
> - tower, 8.3729, 4.2887, [[Van Richten's Tower]]
> - village, 8.6254, 7.7459, [[Lake Zarovich]]
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
