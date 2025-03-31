---
image: z_Assets/Locations/Maps/Castle Ravenloft Courtyard.webp
---


```meta-bind
INPUT[imageSuggester(optionQuery("z_Assets")):image]
```

```dataviewjs
await dv.view('leafletGenerator', {current:dv.current()})
```

```dataviewjs
const {imageDimensionsFromStream} = await self.require.import('https://esm.sh/image-dimensions'),
    {createReadStream} = await self.require.import('fs'),
    path = await self.require.import('path'),
    readStream = createReadStream(path.join(app.vault.adapter.getBasePath(), dv.current().image)),
    { height: imageHeight, width: imageWidth } = await imageDimensionsFromStream(readStream),
    measure = dv.current().distance_measure,
    units = dv.current().units,
    actualUnitsDistance = dv.current().actual_units_distance,
    height = imageHeight/2,
    width = imageWidth/2

dv.paragraph(`test: ${(actualUnitsDistance ? true : false)}`)
dv.paragraph(`height, width: ${imageHeight}, ${imageWidth}`)
// dv.paragraph(`test original: ${(measure/units)}`)
// dv.paragraph(`test new: ${((measure * (actualUnitsDistance/units))/units)}`)
dv.paragraph(`bounds: [\\[0,0], [${height},${width}\\]]`)
dv.paragraph(`lat: ${height/2}`)
dv.paragraph(`long: ${width/2}`)
```


```leaflet  
id: MapCalcExample ### Must be unique with no spaces  
image: [[z_Assets/Locations/Maps/Castle Ravenloft Courtyard.webp]] ### Link to the map image file. Do not add a ! in front of the image  
bounds: [[0,0], [2048, 1642]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
height: 850px ### Size of the leaflet embed in px on your screen  
width: 95% ### Size of the leaflet embed in your note  
lat: 1024 ### To center the map, make this half of the map height.  
long: 821 ### To center the map, make this half of the map width.  
minZoom: -1.5 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
maxZoom: 1 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
defaultZoom: -1 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
zoomDelta: 0.5 ### Adjust how much the zoom changes when you zoom in or out.  
unit: mi ### The value displayed when measuring so you know what type of unit is being measure.  
scale: 0.09328358208955223 ### Real units/px (resolution) of your map  
recenter: false  
darkmode: false ### marker
```