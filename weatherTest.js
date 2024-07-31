const matter = require('gray-matter')
const fs = require('fs')
const path = require('path')

const weatherData = matter(fs.readFileSync(path.join(__dirname, '1. DM Stuff/DM To-Do/Weather Generation.md'), 'utf8')).data

console.log(weatherData)