---
obsidianUIMode: preview
location: "[[4. World Almanac/Regions/Greenfall.md|Greenfall]]"
images:
  - z_Assets/Locations/Maps/thornmere.png
pronounced:
resources: []
population:
terrain:
rulers: []
government:
army:
religions: []
imports: []
exports: []
aliases: []
tags:
  - location
  - settlement
---
> [!infobox]
> # `=this.file.name`
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
>```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
>  |
> ---|---|
> **Pronounced:** | `INPUT[text:pronounced]` |
> **Summary:** | `INPUT[text:summary]` |
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
> **Ruler(s):** | `INPUT[inlineListSuggester(optionQuery("#npc")):rulers]` |
> **Govt Type:** | `INPUT[text:government]` |
> **Army:** | `INPUT[text:army]` |
> **Religions:** | `INPUT[inlineList:religions]` |
> ###### Logistics
>  |
> ---|---|
> **Imports:** | `INPUT[inlineList:imports]` |
> **Exports:** | `INPUT[inlineList:exports]` |
> ###### Travel Distances
> ```dataviewjs
> dv.view('views/travelTimes', {current: dv.current()})
> ```
> `BUTTON[addtravel,removetravel]`
> ```meta-bind-button
> style: primary
> id: addtravel
> label: Add Travel Distance
> hidden: true
> actions:
>   - type: runTemplaterFile
>     templateFile: "z_Templates/Templater/Functional/Add Travel Distance.md"
> ```
> ```meta-bind-button
> style: primary
> id: removetravel
> label: Remove Travel Distance
> hidden: true
> actions:
>   - type: runTemplaterFile
>     templateFile: "z_Templates/Templater/Functional/Remove Travel Distance.md"
> ```

`$= await dv.view("views/locationBreadcrumbs", {current: dv.current()})`
# **`=this.file.name`**
> [!info|bg-c-purple]- Overview
> Thornmere is a low-lying farming village pressed between open grasslands and the dark treeline of the Barovian forest. Its fields are orderly, its people quiet, and its boundaries carefully respected. Life here is intentionally small. The villagers survive by avoiding what lies beyond the tree line—and by pretending that history is stable if left unexamined.

## Map
> [!div | no-t clean]
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
> image: [[thornmere.png]]
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

`$=await dv.view("views/locations", {current: dv.current()})`

`$=await dv.view("npcsInLocation", {current: dv.current()})`

## History
Thornmere was founded generations ago as a frontier farming outpost meant to supply grain and livestock to passing caravans skirting the forest road. Early settlers learned quickly that the forest was not merely dangerous but _attentive_. Entire families vanished during the first decade.

Rather than abandon the land, the survivors adapted. Thornmere shifted inward—fewer roads, no expansion toward the woods, and strict communal rules about travel and nightfall. Old records suggest a shrine once stood near the forest edge, but its stones were dismantled after a calamity now remembered only as _the Long Harvest Night_.

No one in Thornmere can fully recount what happened that year. They only know that remembering too closely brings unease.

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
