---
obsidianUIMode: preview
location: "[[4. World Almanac/Regions/Barovia.md|Barovia]]"
images:
  - z_Assets/Amber Temple.png
  - Z_Assets/Locations/Maps/Amber Temple 1
pronounced: 
resources: 
population: 
terrain: 
rulers: 
government: 
army: 
religions: 
imports: 
exports: 
aliases: 
travelDistances:
  - - "[[4. World Almanac/Regions/Barovia.md|Barovia]]"
    - 5
tags:
  - place-of-interest
  - location
---
> [!infobox|wsmall]
> # `=this.file.name`
> ```dataviewjs
> await dv.view('imageCarousel', {current: dv.current()})
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
> [!div | no-t clean]
> ```leaflet   
> ### Tutorial: [https://youtu.be/54EyMzJP5DU](https://youtu.be/54EyMzJP5DU)  
> ### id must be unique  
> id: AmberTemple 
> ### Lock pins so they can't be moved  
> lock: true  
> ### If true, view of map will recenter as you zoom out.  
> recenter: true  
> ### If true, disables mouse scroll for zomming in and out of a map. Button controls still work.  
> noScrollZoom: true  
> image:
>   - [[Locations/Maps/Amber Temple 1.webp|Level 2]]
>   - [[Locations/Maps/Amber Temple 2.webp|Level 1]]
> ### Map Pixel Height x 1 / (Pixels between Bar Scale / 100)  
> ### Map Pixel Width x 1 / (Pixels between Bar Scale / 100)  
> ### Note that this formula requires adjustments depending on your map. The idea is to determine the number of units between your bar scale. We divide by 100 here because my bar scale measures in 100 units. If your maps scale bar measures in units of 50 them you should divide by 50 instead. The idea is to calculate how many pixels are equal to 1 unit.  
> ### Bounds is entered as [Height, Width]  
> bounds: [[0,0], [160.00,160.00]]
> height: 900px  
> width: 100%  
> ### This sets where the map starts by default. Set it to the middle (half) of your bounds.  
> lat: 80
> long: 80  
> ### 0 is no zoom. Negative zoom steps away from the map. Positive zoom steps towards the map.  
> minZoom: 3 
> ### Max zoom is 18.  
> maxZoom: 4
> ### Hover mouse over the Reset Zoom icon to see your current zoom level.  
> defaultZoom: 3 
> ### How far it zooms in or out with each step. Can be in decimals.  
> zoomDelta: 0.5  
> ### This is a string so can be any text. Change it to match your maps measurement scale.  
> unit: feet  
> scale: 2.8  
> darkMode: false
> ```

`$=await dv.view("locations", {current: dv.current()})`

`$=await dv.view("npcsInLocation", {current: dv.current()})`

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
#### X17
> [!div | no-t clean]
> ![[15 Chapter 13 The Amber Temple#X17. Upper West Hall]]
#### X18
> [!div | no-t clean]
> ![[15 Chapter 13 The Amber Temple#X18. Hallway]]
#### X19
> [!div | no-t clean]
> ![[15 Chapter 13 The Amber Temple#X19. Potion Storage]]
#### X20
> [!div | no-t clean]
> ![[15 Chapter 13 The Amber Temple#X20. Architect's Room]]
#### X21
> [!div | no-t clean]
> ![[15 Chapter 13 The Amber Temple#X21. West Staircase]]
#### X22
> [!div | no-t clean]
> ![[15 Chapter 13 The Amber Temple#X22. Northwest Annex]]
#### X23
> [!div | no-t clean]
> ![[15 Chapter 13 The Amber Temple#X23. Northwest Balcony]]
#### X24
> [!div | no-t clean]
> ![[15 Chapter 13 The Amber Temple#X24. West Shrine]]
#### X25
> [!div | no-t clean]
> ![[15 Chapter 13 The Amber Temple#X25. West Archer Post]]
#### X26
> [!div | no-t clean]
> ![[15 Chapter 13 The Amber Temple#X26. Secret Alcove]]
#### X27
> [!div | no-t clean]
> ![[15 Chapter 13 The Amber Temple#X27. Lich's Lair]]
#### X28
> [!div | no-t clean]
> ![[15 Chapter 13 The Amber Temple#X28. Hidden Phylactery]]
#### X29
> [!div | no-t clean]
> ![[15 Chapter 13 The Amber Temple#X29. Secret Room]]
#### X30
> [!div | no-t clean]
> ![[15 Chapter 13 The Amber Temple#X30. Preserved Library]]
