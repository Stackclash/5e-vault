const sizeOf = require('image-size')
const grayMatter = require('gray-matter')

const frontmatter = grayMatter.read('1. DM Stuff/Tools/Leaflet Bounds Calculator.md').data

let {
    measure,
    units,
    distance_measure,
    actual_units_distance,
    image
} = frontmatter
image = sizeOf('z_Assets/Barovia.jpg')

const height = parseFloat(image.height/(actual_units_distance ? ((distance_measure * (actual_units_distance/units))/units) : (distance_measure/units))).toFixed(2),
width = parseFloat(image.width/(actual_units_distance ? ((distance_measure * (actual_units_distance/units))/units) : (distance_measure/units))).toFixed(2)

console.log(`height: ${image.height}`)
console.log(`width: ${image.width}`)
console.log(`bounds: [[0,0], [${height},${width}]]`)
console.log(`lat: ${height/2}`)
console.log(`long: ${width/2}`)
console.log(`zoom: ${parseFloat((height*width)*0.0013144922773579).toFixed(0)}`)