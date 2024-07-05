const sizeOf = require('image-size')
const readline = require('readline')
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

console.log(image.height, image.width)

// const height = parseFloat(img.height/(actualUnitsDistance ? ((measure * (actualUnitsDistance/units))/units) : (measure/units))).toFixed(2),
// width = parseFloat(img.width/(actualUnitsDistance ? ((measure * (actualUnitsDistance/units))/units) : (measure/units))).toFixed(2)

// const measure = dv.current().distance_measure,
// units = dv.current().units,
// actualUnitsDistance = dv.current().actual_units_distance,
// img = sizeOf(document.querySelector(".mb-image-card-image").href),
// height = parseFloat(img.height/(actualUnitsDistance ? ((measure * (actualUnitsDistance/units))/units) : (measure/units))).toFixed(2),
// width = parseFloat(img.width/(actualUnitsDistance ? ((measure * (actualUnitsDistance/units))/units) : (measure/units))).toFixed(2)