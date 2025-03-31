const currentPage = input.current
const {imageDimensionsFromStream} = await self.require.import('https://esm.sh/image-dimensions')
const {createReadStream} = await self.require.import('fs')
const path = await self.require.import('path')
const leafletConfig = app.plugins.getPlugin('obsidian-leaflet-plugin').data

console.log(leafletConfig)

const backticks = "```"
const readStream = createReadStream(path.join(app.vault.adapter.getBasePath(), currentPage.image))
const { height: imageHeight, width: imageWidth } = await imageDimensionsFromStream(readStream)

dv.paragraph(`${backticks}leaflet  
id: MapCalcExample ### Must be unique with no spaces  
image: [[${currentPage.image}]] ### Link to the map image file. Do not add a ! in front of the image  
bounds: [[0,0], [2048, 1642]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
height: 750px ### Size of the leaflet embed in px on your screen  
width: 95% ### Size of the leaflet embed in your note  
lat: ${imageHeight/2} ### To center the map, make this half of the map height.  
long: ${imageWidth/2} ### To center the map, make this half of the map width.  
minZoom: -1.5 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
maxZoom: 1 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
defaultZoom: -1 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
zoomDelta: 0.5 ### Adjust how much the zoom changes when you zoom in or out.  
unit: mi ### The value displayed when measuring so you know what type of unit is being measure.  
scale: 0.09328358208955223 ### Real units/px (resolution) of your map  
recenter: false  
darkmode: false ### marker
${backticks}`)
