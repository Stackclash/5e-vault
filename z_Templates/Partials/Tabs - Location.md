```meta-bind
INPUT[select(class(tabbed), option(At the Table), option(What's Here), option(Player-Facing), option(Map), option(DM)):memory^tab]
```
> [!tabbed-box]
> > [!tab|no-t] At the Table
> > **Atmosphere** `BUTTON[pop-atmosphere]`
> > `INPUT[textArea:atmosphere]`
> >
> > **Hazards** `BUTTON[pop-hazards]`
> > `INPUT[textArea:hazards]`
> >
> > **Climate** `INPUT[text:climate]`
> >
> > **Routes** <span class="derived">derived</span>
> > ```dataviewjs
> > await dv.view('views/travelTimes', {current: dv.current()})
> > ```
> > `BUTTON[addtravel]` `BUTTON[removetravel]`
>
> > [!tab|no-t] What's Here
> > ```dataviewjs
> > await dv.view("views/locations", {current: dv.current()})
> > ```
> >
> > ```dataviewjs
> > await dv.view("views/npcsInLocation", {current: dv.current()})
> > ```
> >
> > **Factions based here** <span class="derived">derived</span>
> > ```dataview
> > LIST FROM #faction WHERE location = this.file.link
> > ```
> >
> > **Visits** <span class="derived">derived</span>
> > ```dataview
> > LIST FROM #session-journal WHERE contains(locations, this.file.link) SORT session_number ASC
> > ```
>
<% tp.file.include("[[z_Templates/Partials/Player-Facing]]") %>
>
> > [!tab|no-t] Map
> > ```leaflet
> > id: <% tp.file.title.replace(/[^A-Za-z0-9]/g, "") %>
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
