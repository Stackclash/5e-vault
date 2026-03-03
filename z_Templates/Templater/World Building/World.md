<%*
let templateError = false
let data = {}
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { modalForm, config } = init.getPlugins(tp, ['worlds'])

  data = await init.openForm(modalForm, {
    title: "World Setup",
    name: "world-setup",
    fields: [
      fields.name("World Name", "Name of World"),
      fields.textArea("calendar", "Calendar", "Name of the calendar used in this world", false),
    ],
    version: "1"
  })

  await init.moveFile(tp, config.locations.worlds, data.name)

} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
playerVisible: false
economic_scale: 0.5
calendar: "<% data.calendar %>"
images:
- z_Assets/PlaceholderImage.png
aliases: []
tags:
  - location
  - world
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
> **Alias:** | `INPUT[inlineList:aliases]` |
> **Economic Scale:** | `INPUT[number:economic_scale]` |
> **Calendar:** | `INPUT[text:calendar]` |

# **`=this.file.name`**
> [!info|bg-c-purple]- Overview
TBD

## Map
> [!div | no-t clean]
> ```leaflet   
> ### Tutorial: [https://youtu.be/54EyMzJP5DU](https://youtu.be/54EyMzJP5DU)  
> ### id must be unique  
> id: <% data.name.replace(/ /g, '_') %>_Map  
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

`$=await dv.view("views/locations", {current: dv.current()})`

`$=await dv.view("npcsInLocation", {current: dv.current()})`

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>
