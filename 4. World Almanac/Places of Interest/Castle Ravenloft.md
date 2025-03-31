---
obsidianUIMode: preview
location: '[[4. World Almanac/Regions/Barovia.md|Barovia]]'
images:
  - z_Assets/PlaceholderImage.png
pronounced: 
resources:
  - '[[06 Chapter-4 Castle Ravenloft|Castle Ravenloft]]'
  - '[[Curse of Strahd Companion.pdf#page=82|To Dine at Castle Ravenloft]]'
population: 
terrain: 
rulers: 
government: 
army: 
religions: 
imports: 
exports: 
aliases: 
tags:
  - place-of-interest
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
> id: Faerun_Map  
> ### Lock pins so they can't be moved  
> lock: true  
> ### If true, view of map will recenter as you zoom out.  
> recenter: true  
> ### If true, disables mouse scroll for zomming in and out of a map. Button controls still work.  
> noScrollZoom: true  
> image:
>   - 
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

`$=await dv.view("locations", {current: dv.current()})`

`$=await dv.view("npcsInLocation", {current: dv.current()})`

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
- When entering [[Castle Ravenloft]] the disembodied voice introduces the party as follows:
	- "Behold, Redgrave, the construct of faith—one who seeks to save souls while having none of his own. A shining beacon of devotion, if only he had a heart to feel it."
	- "Faerah Duskrane, the shadow that moves within shadows. So skilled in staying hidden—perhaps it is why trust always seems to elude her."
	- "And here we have Marin, torn between two worlds and two souls. A pawn of greater powers, forever seeking what lies beyond, yet never satisfied with what she finds."
	- "Seluvis Felo'melorn, the brilliant artificer. So much knowledge in such a refined mind, yet always tinkering—perhaps in hopes of fixing that which cannot be mended."
	- "Yevelda Ovak, raw strength in human form, ever charging forward. But does she break chains, or simply wear new ones forged by her own hands?"