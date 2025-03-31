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
> id: CastleRavenloft ### Must be unique with no spaces
> image: 
>   - [[Caste Ravenloft Main Floor.webp|Main Floor]]
>   - [[Castle Ravenloft Courtyard.webp|Courtyard]]
>   - [[Castle Ravenloft 2nd Floor.webp|2nd Floor]]
>   - [[Castle Raventloft 3rd Floor.webp|3rd Floor]]
>   - [[Castle Ravenloft 4th Floor.webp|4th Floor]]
>   - [[Castle Ravenloft Basement 1.webp|Basement 1]]
>   - [[Castle Ravenloft Basement 2.webp|Basement 2]]
> bounds: 
>  - [[0,0], [2072, 3000]]
>  - [[0,0], [5211, 3840]]  
> height: 750px  
> width: 95% 
> lat: 2605.5  
> long: 1920 
> minZoom: -2.5  
> maxZoom: 1.5 
> defaultZoom: -1 
> zoomDelta: 0.5
> unit: ft
> scale: 0.22903019978834843 
> lock: true
> noScrollZoom: true
> recenter: true  
> darkmode: false 
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