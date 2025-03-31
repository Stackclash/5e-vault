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

const leafletMapConfig = `id: MapCalcExample ### Must be unique with no spaces
image: [[${currentPage.image}]] 
bounds: [[0,0], [${imageHeight}, ${imageWidth}]]  
height: 900px  
width: 95% 
lat: ${imageHeight/2}  
long: ${imageWidth/2} 
minZoom: ${currentPage.minZoom}  
maxZoom: ${currentPage.maxZoom} 
defaultZoom: ${currentPage.defaultZoom} 
zoomDelta: ${currentPage.zoomDelta}
unit: ${currentPage.unit}
scale: ${scale} 
lock: true
noScrollZoom: true
recenter: true  
darkmode: false`

dv.paragraph(`${backticks}leaflet  
${leafletMapConfig}
${backticks}`)

console.log(error)
if (error) dv.span('**ERROR:** ' + error)

console.log(leafletMapConfig.replace('MapCalcExample', currentPage.id))

dv.paragraph(`${backticks}
${leafletMapConfig.replace('MapCalcExample', currentPage.id)}
${backticks}`)
