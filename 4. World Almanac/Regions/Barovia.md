---
obsidianUIMode: preview
location: "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
images:
  - z_Assets/Barovia_Banner.webp
pronounced: Bar - o - via
resources:
population:
terrain:
rulers:
  - "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich]]"
government:
army:
religions:
imports:
exports:
routes: []
aliases:
tags:
  - region
  - location
---
> [!infobox]
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
> ###### Overview
>  |
>  ---|---|
> **Parent** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'location'})` |
> **Population** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'population'})` |
> **Terrain** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'terrain'})` |
> **Resources** | `INPUT[inlineListSuggester(optionQuery("5. Mechanics/Items")):resources]` |
> ###### Politics
>  |
>  ---|---|
> **Ruler(s)** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'rulers'})` |
> **Government** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'government'})` |
> **Army** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'army'})` |
> ###### Trade
>  |
>  ---|---|
> **Imports** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'imports'})` |
> **Exports** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'exports'})` |

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```

> [!tabs]
> ```meta-bind
> INPUT[select(class(tabbed), option(At the Table), option(What’s Here), option(Player-Facing), option(Map), option(DM)):memory^tab]
> ```
>
> > [!tab|no-t] At the Table
> > **Atmosphere** `BUTTON[pop-atmosphere]`
> > `INPUT[textArea:atmosphere]`
> >
> > **Hazards** `BUTTON[pop-hazards]`
> > `INPUT[textArea:hazards]`
> >
> > **Climate** `INPUT[text:climate]`
> >
> > **Routes**
> > ```dataviewjs
> > await dv.view('views/travelTimes', {current: dv.current()})
> > ```
> > `BUTTON[addtravel]` `BUTTON[removetravel]`
>
> > [!tab|no-t] What’s Here
> > ```dataviewjs
> > await dv.view("views/locations", {current: dv.current()})
> > ```
> >
> > ```dataviewjs
> > await dv.view("views/npcsInLocation", {current: dv.current()})
> > ```
> >
> > **Factions based here**
> > ```dataview
> > LIST FROM #faction WHERE location = this.file.link OR contains(bases, this.file.link)
> > ```
> >
> > **Visits**
> > ```dataview
> > LIST FROM #session-journal WHERE contains(locations, this.file.link) SORT session_number ASC
> > ```
>
> > [!player] Player-Facing
> > **Revealed to the party** `$=await dv.view('utils/metaBindInput', {type: 'toggle', field: ['revealed', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})`
> >
> > **Public name** `$=await dv.view('utils/metaBindInput', {type: 'text', field: ['public_name', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` (optional: shown instead of the note name)
> >
> > **Also show** `$=await dv.view('utils/metaBindInput', {type: 'inlineList', field: ['reveal', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` (extra fields the site may show, e.g. images, occupation)
> >
> > **Summary** `BUTTON[pop-summary]`
> > `INPUT[textArea:summary]`
> >
> > **Facts**
> > ```datacorejsx
> > const { FactsTable } = await dc.require("z_Scripts/Datacore/FactsTable.tsx")
> > return function View() { return <FactsTable /> }
> > ```
>
> > [!tab|no-t] Map
> > ```leaflet   
> > id: Barovia 
> > lock: true  
> > recenter: true  
> > noScrollZoom: true  
> > image: [[Locations/Maps/Barovia.jpg|Barovia]]
> > bounds: [[0,0] ,[46.72,72.84]]
> > height: 700px  
> > width: 95%  
> > lat: 23.36 
> > long: 36.4
> > minZoom: 4
> > maxZoom: 6.5
> > defaultZoom: 4
> > zoomDelta: 0.5
> > unit: miles
> > scale: 1
> > darkMode: false
> > marker:
> > - village, 17.72, 57.48, [[Village of Barovia]]
> > - village, 30.4, 29.0932, [[Vallaki]]
> > - village, 32, 8.1516, [[Krezk]]
> > - castle, 22.5208, 52.0076, [[Castle Ravenloft]]
> > - village, 24.8308, 8.1292, [[The Wizard of Wines]]
> > - village, 18.112, 47.8976, [[Tser Pool]]
> > - tower, 33.4916, 17.1548, [[Van Richten's Tower]]
> > - default, 34.5016, 30.9836, [[Lake Zarovich]]
> > - dungeon, 7.818, 25.1388, [[The Amber Temple]]
> > - castle, 24.0882, 24.1528, [[Argynvostholt]]
> > - ruins, 18.1554, 24.3143, [[Ruins of Berez]]
> > - default, 17.5366, 5.0856, [[Yester Hill]]
> > - cave, 35.4037, 13.1939, [[Werewolf Den]]
> > ```
>
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes
> > ### Plot Hooks
> >
> >
> > ### Hidden Details
> >
> >
> > ### General Notes

```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Atmosphere in a larger window
style: default
id: pop-atmosphere
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: atmosphere
      label: Atmosphere
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Hazards in a larger window
style: default
id: pop-hazards
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: hazards
      label: Hazards
```
```meta-bind-button
style: primary
label: Add Route
id: addtravel
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Add Travel Distance.md"
```
```meta-bind-button
style: destructive
label: Remove Route
id: removetravel
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Remove Travel Distance.md"
```
```meta-bind-button
label: Edit DM Notes
icon: pencil
style: default
id: edit-dm-notes
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/editSection.js
    args:
      heading: DM Notes
      prefix: "> > "
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Summary in a larger window
style: default
id: pop-summary
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: summary
      label: Summary
```

```meta-bind-button
label: Edit all
icon: pencil
style: default
id: edit-all
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/editAll.js
```
