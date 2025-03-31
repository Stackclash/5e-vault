const currentPage = input.current
const {imageDimensionsFromStream} = await self.require.import('https://esm.sh/image-dimensions')
const {createReadStream} = await self.require.import('fs')
const path = await self.require.import('path')
const leafletConfig = app.plugins.getPlugin('obsidian-leaflet-plugin').data
let error = null

function calcDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

const backticks = "```"

const readStream = createReadStream(path.join(app.vault.adapter.getBasePath(), currentPage.image))
const { height: imageHeight, width: imageWidth } = await imageDimensionsFromStream(readStream)

const mapShapes = leafletConfig.mapMarkers.find(m => m.id === 'MapCalcExample').shapes
console.log(mapShapes)
if (mapShapes.length === 0 || mapShapes.length > 1) {
    error = 'Multiple or no map shapes found'
}
const point1 = mapShapes[0].vertices[0]
const point2 = mapShapes[0].vertices[1]

let scale = .1
if (point1 && point2) {
    const distance = calcDistance(point1.lng, point1.lat, point2.lng, point2.lat)
    scale = 1/(distance/currentPage.unitCount)
}

console.log('Distance:', calcDistance(point1.lng, point1.lat, point2.lng, point2.lat))
console.log(currentPage.unitCount)
console.log(calcDistance(point1.lng, point1.lat, point2.lng, point2.lat)/currentPage.unitCount)
console.log(1/(calcDistance(point1.lng, point1.lat, point2.lng, point2.lat)/currentPage.unitCount))

const leafletMapConfig = `id: MapCalcExample ### Must be unique with no spaces  
image: [[${currentPage.image}]] ### Link to the map image file. Do not add a ! in front of the image  
bounds: [[0,0], [${imageHeight}, ${imageWidth}]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
height: 750px ### Size of the leaflet embed in px on your screen  
width: 95% ### Size of the leaflet embed in your note  
lat: ${imageHeight/2} ### To center the map, make this half of the map height.  
long: ${imageWidth/2} ### To center the map, make this half of the map width.  
minZoom: ${currentPage.minZoom} ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
maxZoom: ${currentPage.maxZoom} ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
defaultZoom: ${currentPage.defaultZoom} ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
zoomDelta: ${currentPage.zoomDelta} ### Adjust how much the zoom changes when you zoom in or out.  
unit: ${currentPage.unit} ### The value displayed when measuring so you know what type of unit is being measure.  
scale: ${scale} ### Real units/px (resolution) of your map  
recenter: false  
darkmode: false ### marker`

dv.paragraph(`${backticks}leaflet  
${leafletMapConfig}
${backticks}`)

console.log(error)
if (error) dv.span('**ERROR:** ' + error)

dv.paragraph(`${backticks}
${leafletMapConfig}
${backticks}`)
