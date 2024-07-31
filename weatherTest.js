const matter = require('gray-matter')
const fs = require('fs')
const path = require('path')
const { get } = require('http')

const { seasons, months, climates, precipitations, winds } = matter(fs.readFileSync(path.join(__dirname, '1. DM Stuff/DM To-Do/Weather Generation.md'), 'utf8')).data

const getDayInYear = (date) => {
    const [month, day, year] = date.split('-').map(Number)
    return months.slice(0, month - 1).reduce((acc, curr) => acc + curr.length, 0) + day
}

const getTotalDaysInYear = () => months.reduce((acc, curr) => acc + curr.length, 0)

const getDuration = (startDate, endDate) => {
    const startDay = getDayInYear(startDate)
    const endDay = getDayInYear(endDate)
    return endDay < startDay ? endDay + getTotalDaysInYear() - startDay + 1 : endDay - startDay + 1
}

const getDatesInRange = (start, end) => {
    const startDay = getDayInYear(start)
    const endDay = getDayInYear(end)
    return startDay < endDay ? Array.from({ length: endDay - startDay + 1 }, (_, i) => i + startDay) : Array.from({ length: getTotalDaysInYear() - startDay + endDay + 1 }, (_, i) => i + startDay > getTotalDaysInYear() ? i + startDay - getTotalDaysInYear() : i + startDay)
}

const getSeason = (date) => {
    let season = ''
    const day = getDayInYear(date)
    seasons.forEach(season => {
        console.log(season.name, getDayInYear(season.start) <= day, day <= getDayInYear(season.end), day)
        if ((getDayInYear(season.start) <= day) && day <= getDayInYear(season.end)) season = season.name
    })
    return season
}

const getTempRange = (climate, date) => {

}

console.log(getDatesInRange('1-4-213','2-20-213')) // should return 'Winter'