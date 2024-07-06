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
image = sizeOf(image)

console.log(`bounds: [[0,0], [${image.height},${image.width}]]`)
console.log(`lat: ${image.height/2}`)
console.log(`long: ${image.width/2}`)
console.log(`scale: ${parseFloat(units/actual_units_distance).toFixed(2)}`)