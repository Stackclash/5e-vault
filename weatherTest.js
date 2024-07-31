const matter = require('gray-matter')
const fs = require('fs')
const path = require('path')

const { seasons, months, climates, precipitations, winds } = matter(fs.readFileSync(path.join(__dirname, '1. DM Stuff/DM To-Do/Weather Generation.md'), 'utf8')).data

const getDayInYear = (date) => {
    const [month, day] = date.split('-').map(Number)
    return months.slice(0, month - 1).reduce((acc, curr) => acc + curr.length, 0) + day
}

const getTotalDaysInYear = () => months.reduce((acc, curr) => acc + curr.length, 0)

const getDuration = (startDay, endDay) => endDay < startDay ? endDay + getTotalDaysInYear() - startDay + 1 : endDay - startDay + 1 

seasons.forEach(season => {
    const { name, start, end } = season
    const startDay = getDayInYear(start)
    const endDay = getDayInYear(end)
    console.log(`Season: ${name}`)
    console.log(`Start: ${startDay}`)
    console.log(`End: ${endDay}`)
    console.log(`Duration: ${getDuration(startDay, endDay)} days`)
    console.log()
})