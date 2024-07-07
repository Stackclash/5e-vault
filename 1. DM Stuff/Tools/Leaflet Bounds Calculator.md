---
image: z_Assets/Vallaki.jpg
distance_measure: 69
units: 250
actual_units_distance: 42
---


```meta-bind
INPUT[imageSuggester(optionQuery("z_Assets")):image]
```

**Width of Unit:** `INPUT[number:distance_measure]`
**Distance of Unit:** `INPUT[number:units]`
**Actual Units Distance:** `INPUT[number:actual_units_distance]`

```dataviewjs
const sizeOf = await self.require.import("https://esm.sh/lodash-es"),
measure = dv.current().distance_measure,
units = dv.current().units,
actualUnitsDistance = dv.current().actual_units_distance,
img = sizeOf(document.querySelector(".mb-image-card-image").href),
height = parseFloat(img.height/(actualUnitsDistance ? ((measure * (actualUnitsDistance/units))/units) : (measure/units))).toFixed(2),
width = parseFloat(img.width/(actualUnitsDistance ? ((measure * (actualUnitsDistance/units))/units) : (measure/units))).toFixed(2)

dv.paragraph(`test: ${(actualUnitsDistance ? true : false)}`)
dv.paragraph(`height, width: ${img.naturalHeight}, ${img.naturalWidth}`)
dv.paragraph(`test original: ${(measure/units)}`)
dv.paragraph(`test new: ${((measure * (actualUnitsDistance/units))/units)}`)
dv.paragraph(`bounds: [\\[0,0], [${height},${width}\\]]`)
dv.paragraph(`lat: ${height/2}`)
dv.paragraph(`long: ${width/2}`)
dv.paragraph(`zoom: ${parseFloat((height*width)*0.0013144922773579).toFixed(0)}`)
```
