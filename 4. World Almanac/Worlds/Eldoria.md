---
obsidianUIMode: preview
economic_scale: 0.08
calendar: Eldoria Calendar
tags:
  - world
  - location
---
> [!infobox]
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
> ###### Settings
>  |
>  ---|---|
> **Economic scale** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'economic_scale'})` |
> **Calendar** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'calendar'})` |

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```

> [!tabs]
> ```meta-bind
> INPUT[select(class(tabbed), option(Overview), option(Player-Facing), option(Map), option(DM)):memory^tab]
> ```
>
> > [!tab|no-t] Overview
> > **Regions**
> > ```dataviewjs
> > await dv.view("views/locations", {current: dv.current()})
> > ```
> >
> > ```dataviewjs
> > await dv.view("views/worldMembers", {current: dv.current()})
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
> > id: Eldoria
> > image: [[z_Assets/PlaceholderImage.png]]
> > bounds: [[0,0], [1815.07, 2805.48]]
> > height: 900px
> > width: 95%
> > lat: 907.53
> > long: 1402.74
> > minZoom: -1.5
> > maxZoom: 1.5
> > defaultZoom: -1
> > zoomDelta: 0.5
> > unit: miles
> > scale: 1
> > lock: true
> > recenter: true
> > noScrollZoom: true
> > darkMode: false
> > ```
>
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes

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
