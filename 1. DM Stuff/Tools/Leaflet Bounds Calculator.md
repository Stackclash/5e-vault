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
const {imageDimensionsFromStream} = await self.require.import('https://esm.sh/image-dimensions'),
    {createReadStream} = await self.require.import('fs'),
    path = await self.require.import('path'),
    readStream = createReadStream(path.join(app.vault.adapter.getBasePath(), dv.current().image)),
    { height: imageHeight, width: imageWidth } = await imageDimensionsFromStream(readStream),
    measure = dv.current().distance_measure,
    units = dv.current().units,
    actualUnitsDistance = dv.current().actual_units_distance,
    height = parseFloat(imageHeight/(actualUnitsDistance ? ((measure * (actualUnitsDistance/units))/units) : (measure/units))).toFixed(2),
    width = parseFloat(imageWidth/(actualUnitsDistance ? ((measure * (actualUnitsDistance/units))/units) : (measure/units))).toFixed(2)

dv.paragraph(`test: ${(actualUnitsDistance ? true : false)}`)
dv.paragraph(`height, width: ${imageHeight}, ${imageWidth}`)
// dv.paragraph(`test original: ${(measure/units)}`)
// dv.paragraph(`test new: ${((measure * (actualUnitsDistance/units))/units)}`)
dv.paragraph(`bounds: [\\[0,0], [${height},${width}\\]]`)
dv.paragraph(`lat: ${height/2}`)
dv.paragraph(`long: ${width/2}`)
```
