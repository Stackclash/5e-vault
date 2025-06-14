---
obsidianUIMode: preview
location: "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"
images:
  - z_Assets/Barovia_Banner.webp
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
travel:
  - - Blinsky Toys
    - "60"
aliases: 
tags:
  - region
  - location
---
> [!infobox | wsmall]
> # `=this.file.name`
> ```dataviewjs
> await dv.view('imageCarousel', {current: dv.current()})
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
> [!div | no-t clean]
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
> image: [[Locations/Maps/Barovia.jpg|Barovia]]
> ### Map Pixel Height x 1 / (Pixels between Bar Scale / 100)  
> ### Map Pixel Width x 1 / (Pixels between Bar Scale / 100)  
> ### Note that this formula requires adjustments depending on your map. The idea is to determine the number of units between your bar scale. We divide by 100 here because my bar scale measures in 100 units. If your maps scale bar measures in units of 50 them you should divide by 50 instead. The idea is to calculate how many pixels are equal to 1 unit.  
> ### Bounds is entered as [Height, Width]  
> bounds: [[0,0] ,[46.72,72.84]]
> height: 700px  
> width: 95%  
> ### This sets where the map starts by default. Set it to the middle (half) of your bounds.  
> lat: 23.36 
> long: 36.4
> ### 0 is no zoom. Negative zoom steps away from the map. Positive zoom steps towards the map.  
> minZoom: 4
> ### Max zoom is 18.
> maxZoom: 6.5
> ### Hover mouse over the Reset Zoom icon to see your current zoom level.
> defaultZoom: 4
> ### How far it zooms in or out with each step. Can be in decimals.
> zoomDelta: 0.5
> ### This is a string so can be any text. Change it to match your maps measurement scale.
> unit: miles
> scale: 1
> darkMode: false
> marker:
> - village, 17.72, 57.48, [[Village of Barovia]]
> - village, 30.4, 29.0932, [[Vallaki]]
> - village, 32, 8.1516, [[Krezk]]
> - castle, 22.5208, 52.0076, [[Castle Ravenloft]]
> - village, 24.8308, 8.1292, [[The Wizard of Wines]]
> - village, 18.112, 47.8976, [[Tser Pool]]
> - tower, 33.4916, 17.1548, [[Van Richten's Tower]]
> - default, 34.5016, 30.9836, [[Lake Zarovich]]
> - dungeon, 7.818, 25.1388, [[The Amber Temple]]
> - castle, 24.0882, 24.1528, [[Argynvostholt]]
> - ruins, 18.1554, 24.3143, [[Ruins of Berez]]
> - default, 17.5366, 5.0856, [[Yester Hill]]
> - cave, 35.4037, 13.1939, [[Werewolf Den]]
> ```

`$=await dv.view("locations", {current: dv.current()})`

`$=await dv.view("npcsInLocation", {current: dv.current()})`

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
