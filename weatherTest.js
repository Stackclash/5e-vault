const matter = require('gray-matter')
const fs = require('fs')
const path = require('path')

const { seasons, months, climates, precipitations, winds } = matter(fs.readFileSync(path.join(__dirname, '1. DM Stuff/DM To-Do/Weather Generation.md'), 'utf8')).data

const getDayInYear = (date) => {
    const [month, day] = date.split('-').map(Number)
    return months.slice(0, month - 1).reduce((acc, curr) => acc + curr.length, 0) + day
}

console.log(getDayInYear('2-15')) // 365