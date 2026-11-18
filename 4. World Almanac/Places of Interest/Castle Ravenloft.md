---
obsidianUIMode: preview
location: "[[4. World Almanac/Regions/Barovia.md|Barovia]]"
gist: "Strahd's castle in Barovia, where the party broke up his wedding (S32); Rahadin and Helga Ruvak work there."
summary: ""
revealed: {}
reveal: {}
facts: []
images:
  - z_Assets/PlaceholderImage.png
pronounced: 
resources: []
population: 
terrain: 
rulers: 
government: 
army: 
imports: 
exports: 
aliases: 
tags:
  - place-of-interest
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
> > id: CastleRavenloft ### Must be unique with no spaces
> > image: 
> >   - [[Caste Ravenloft Main Floor.webp|Main Floor]]
> >   - [[Castle Ravenloft Courtyard.webp|Courtyard]]
> >   - [[Castle Ravenloft 2nd Floor.webp|2nd Floor]]
> >   - [[Castle Raventloft 3rd Floor.webp|3rd Floor]]
> >   - [[Castle Ravenloft 4th Floor.webp|4th Floor]]
> >   - [[Castle Ravenloft Basement 1.webp|Basement 1]]
> >   - [[Castle Ravenloft Basement 2.webp|Basement 2]]
> > bounds: 
> >  - [[0,0], [5211,5560]]  
> > height: 750px  
> > width: 95% 
> > lat: 2605.5 
> > long: 2780
> > minZoom: -2  
> > maxZoom: -0.5
> > defaultZoom: -1.5 
> > zoomDelta: 0.5
> > unit: ft
> > scale: 0.11451509989417422
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
> > - When entering [[Castle Ravenloft]] the disembodied voice introduces the party as follows:
> > 	- "Behold, Redgrave, the construct of faith—one who seeks to save souls while having none of his own. A shining beacon of devotion, if only he had a heart to feel it."
> > 	- "Faerah Duskrane, the shadow that moves within shadows. So skilled in staying hidden—perhaps it is why trust always seems to elude her."
> > 	- "And here we have Marin, torn between two worlds and two souls. A pawn of greater powers, forever seeking what lies beyond, yet never satisfied with what she finds."
> > 	- "Seluvis Felo'melorn, the brilliant artificer. So much knowledge in such a refined mind, yet always tinkering—perhaps in hopes of fixing that which cannot be mended."
> > 	- "Yevelda Ovak, raw strength in human form, ever charging forward. But does she break chains, or simply wear new ones forged by her own hands?"

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
