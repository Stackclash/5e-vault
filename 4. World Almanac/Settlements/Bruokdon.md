---
obsidianUIMode: preview
location: "[[4. World Almanac/Regions/Greenfall.md|Greenfall]]"
gist: "Council-run Greenfall charm-making city of 3,700, where the party broke the Ascendency's cell (S40-S44)."
summary: ""
revealed: {}
reveal: {}
facts: []
images:
  - z_Assets/Locations/bruokdon.png
pronounced:
resources: []
population: 3700
terrain: flat
rulers: []
government: Council
army:
imports: []
exports:
  - Charms
aliases:
  - The Spellforge City
tags:
  - location
  - settlement
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
> **Wealth** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'wealth'})` |
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
> > id: Bruokdon
> > image: [[z_Assets/Locations/bruokdon.png]] 
> > bounds: [[0,0], [3686, 4144]]  
> > height: 900px  
> > width: 95% 
> > lat: 1843  
> > long: 2072 
> > minZoom: -2  
> > maxZoom: -1 
> > defaultZoom: -2 
> > zoomDelta: 0.5
> > unit: ft
> > scale: 1.004833577375885 
> > lock: true
> > noScrollZoom: true
> > recenter: true  
> > darkmode: false
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
