---
image: z_Assets/Locations/Maps/Tsolenka Pass.webp
distance_measure: 69
units: 100
actual_units_distance: 0
---


```meta-bind
INPUT[imageSuggester(optionQuery("z_Assets")):image]
```

**Width of Unit:** `INPUT[number:distance_measure]`
**Distance of Unit:** `INPUT[number:units]`
**Actual Units Distance:** `INPUT[number:actual_units_distance]`

```dataviewjs
const path = require('path')
const image = new Image()
image.src = path.join(app.vault.adapter.getBasePath(), dv.current().image)
const measure = dv.current().distance_measure,
units = dv.current().units,
actualUnitsDistance = dv.current().actual_units_distance,
height = parseFloat(image.height/(actualUnitsDistance ? ((measure * (actualUnitsDistance/units))/units) : (measure/units))).toFixed(2),
width = parseFloat(image.width/(actualUnitsDistance ? ((measure * (actualUnitsDistance/units))/units) : (measure/units))).toFixed(2)

dv.paragraph(`test: ${(actualUnitsDistance ? true : false)}`)
dv.paragraph(`Natural height, width: ${image.naturalHeight}, ${image.naturalWidth}`)
dv.paragraph(`Regular height, width: ${image.height}, ${image.width}`)
// dv.paragraph(`test original: ${(measure/units)}`)
// dv.paragraph(`test new: ${((measure * (actualUnitsDistance/units))/units)}`)
dv.paragraph(`bounds: [\\[0,0], [${height},${width}\\]]`)
dv.paragraph(`lat: ${height/2}`)
dv.paragraph(`long: ${width/2}`)
dv.paragraph(`zoom: ${parseFloat((height*width)*0.0013144922773579).toFixed(0)}`)
```
