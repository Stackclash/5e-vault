---
obsidianUIMode: preview
---
> [!infobox]
> # `=this.file.name`
> ![[PlaceholderImage.png|wm-tl]]
> **Pronounced:**  "`=this.Pronounced`"

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

## Notable Locations
**[[Settlements|Add New Settlement]]**
**[[Places of Interest|Add New Place of Interest]]**
> ```dataview
>  TABLE link(file.name) AS "Name", file.frontmatter.pronounced as "Pronounced"
>  FROM "4. World Almanac/Places of Interest" OR "4. World Almanac/Settlements"
>  WHERE contains(file.frontmatter.region_PoI, this.file.name) OR contains(file.frontmatter.settlement_PoI, this.file.name)
> ```


## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
- Nearing the windmill there are no animal noises
	- Animals with an Int score lower than 5 has to make a DC 10 Wis Saving Throw or be frightened
- Effigies hanging on trees
- Raven warning players is Muriel Vinshaw 
	- [[Swarm Of Ravens]] sent in if players get in trouble
- Megaliths are protected grounds
- Hags ask if party want they want to buy pastries
- [[Morgantha (COS)]] is not home
- If captured the party is given a quest to deliver a [[Hag Eye]] to Castle Ravenloft
- If it's a nice encounter then the hags try to get the party to bring them children from [[Vallaki]] 