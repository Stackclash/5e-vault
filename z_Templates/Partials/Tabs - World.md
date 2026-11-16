```meta-bind
INPUT[select(class(tabbed), option(Overview), option(Player-Facing), option(Map), option(DM)):memory^tab]
```
> [!tabbed-box]
> > [!tab|no-t] Overview
> > **Regions** <span class="derived">derived</span>
> > ```dataviewjs
> > await dv.view("views/locations", {current: dv.current()})
> > ```
> >
> > **Factions** <span class="derived">derived</span>
> > ```dataview
> > LIST FROM #faction
> > ```
> >
> > **Deities** <span class="derived">derived</span>
> > ```dataview
> > LIST FROM #story-deity
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
