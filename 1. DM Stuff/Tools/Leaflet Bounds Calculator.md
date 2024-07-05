---
image: z_Assets/Vallaki.jpg
distance_measure: 30
units: 
actual_units_distance: 0
---


```meta-bind
INPUT[imageSuggester(optionQuery("z_Assets")):image]
```

**Width of Unit:** `INPUT[number:distance_measure]`
**Distance of Unit:** `INPUT[number:units]`
**Actual Units Distance:** `INPUT[number:actual_units_distance]`

```dataviewjs
const measure = dv.current().distance_measure,
units = dv.current().units,
actualUnitsDistance = dv.current().actual_units_distance,
img = document.querySelector(".mb-image-card-image"),
height = parseFloat(img.naturalHeight/(actualUnitsDistance ? actualUnitsDistance : (measure/units))).toFixed(2),
width = parseFloat(img.naturalWidth/(actualUnitsDistance ? actualUnitsDistance : (measure/units))).toFixed(2)

dv.paragraph(`bounds: [\\[0,0], [${height},${width}\\]]`)
dv.paragraph(`lat: ${height/2}`)
dv.paragraph(`long: ${width/2}`)
```
