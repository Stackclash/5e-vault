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

const getDatesInRange = (startDate, endDate) => {
    const [startMonth, startDay, startYear] = startDate.split('-').map(Number)
    const dateRangeLength = getDuration(startDate, endDate)
    const dateRange = []
    for (let i = 0; i < dateRangeLength; i++) {
        const month = startMonth + Math.floor((day - 1) / months[startMonth - 1].length)
        const day = startDay + Math.floor(i % months.slice(0, month-1).reduce((acc, curr) => acc + curr.length, 0))
        const year = startYear + Math.floor((month - 1) / months.length)
        dateRange.push(`${month}-${day}-${year}`)
    }
    return dateRange
}

const getSeason = (date) => {
    let season = ''
    const day = getDayInYear(date)
    seasons.forEach(season => {
        if ((getDayInYear(season.start) <= day) && day <= getDayInYear(season.end)) season = season.name
    })
    return season
}

const getTempRange = (climate, date) => {

}

console.log(getDatesInRange('1-4-213','2-20-213')) // should return 'Winter'