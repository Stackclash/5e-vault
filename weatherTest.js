const matter = require('gray-matter')
const fs = require('fs')
const path = require('path')

const { seasons, months, climates, precipitations, winds } = matter(fs.readFileSync(path.join(__dirname, '1. DM Stuff/DM To-Do/Weather Generation.md'), 'utf8')).data

console.log(seasons, months, climates, precipitations, winds)