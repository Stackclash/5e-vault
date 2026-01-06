<%*
let templateError = false
let data = null
let typeLocations = {}
try {
  const path = require('path')
  const dataview = app.plugins.getPlugin("dataview")
  const modalForm = app.plugins.getPlugin('modalforms')
  typeLocations = {
    Region: 'regions',
    Settlement: 'settlements',
    "Place of Interest": 'pois'
  }

  if (tp.config.run_mode !== 0) {
    throw new Error('This template can only be used to create new files.')
  }

  if (!modalForm || !modalForm.api) {
    throw new Error('Modal Forms plugin is not available')
  }

  if (!dataview || !dataview.api) {
    throw new Error('Dataview plugin is not available')
  }

  const config = dataview.api.page('Configuration')

  if (!config || !config.locations || !config.locations.regions || !config.locations.settlements || !config.locations.pois) {
    throw new Error('Configuration for file locations is not set up correctly')
  }

  const parentLocations = dataview.api.pages('#location').sort(l => l.file.name, 'asc').array()

  const result = await modalForm.api.openForm({
    title: "Location Setup",
    name: "location-setup",
    fields: [
      {
        name: "name",
        label: "Location Name",
        description: "Name of Location",
        isRequired: true,
        input: {
          type: "text",
        }
      },
      {
        name: "type",
        label: "Location",
        description: "Type of Location",
        isRequired: true,
        input: {
          type: "select",
          options: Object.entries(typeLocations).map(([key, value]) => ({ label: key, value })),
          source: "fixed"
        }
      },
      {
        name: "location",
        label: "Location",
        description: "Where this location is located",
        isRequired: true,
        input: {
          type: "select",
          options: parentLocations.map(l => ({label: l.file.name, value: l.file.link.toString()})),
          source: "fixed"
        }
      }
    ],
    version: "1"
  })

  if (result.status === 'cancelled') {
    throw new Error('Modal was Cancelled')
  }

  data = result.getData()

  await tp.file.move(path.posix.join(config.locations[data.type], data.name), tp.file.find_tfile(tp.file.title))

} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
location: "<% data.location %>"
images:
- z_Assets/PlaceholderImage.png
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
  - <% Object.keys(typeLocations).find(k => typeLocations[k] === data.type) %>
---
> [!infobox]
> # `=this.file.name`
> ```dataviewjs
> await dv.view('imageCarousel', {current: dv.current()})
> ```
>```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
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
> dv.view('travelTimes', {current: dv.current()})
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

`$=await dv.view("locations", {current: dv.current()})`

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