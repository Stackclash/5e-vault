const matter = require('gray-matter')
const fs = require('fs')
const path = require('path')

const { tempFlux, seasons, months, climates, precipitations, winds } = matter(fs.readFileSync(path.join(__dirname, '1. DM Stuff/DM To-Do/Weather Generation.md'), 'utf8')).data

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
    const dateRangeLength = getDuration(startDate, endDate)
    const dateRange = [startDate]
    for (let i = 1; i < dateRangeLength; i++) {
        const [previousMonth, previousDay, previousYear] = dateRange[i - 1].split('-').map(Number)

        const month = previousDay + 1 > months[previousMonth - 1].length ? previousMonth + 1 : previousMonth
        const day = previousDay + 1 > months[previousMonth - 1].length ? 1 : previousDay + 1
        let year = ''
        if (previousYear) year = previousMonth === months.length && month === 1 ? previousYear + 1 : previousYear
        dateRange.push(`${month}-${day}${year ? `-${year}` : ''}`)
    }
    return dateRange
}

const getSeason = (date) => {
    let seasonResult = ''
    const day = getDayInYear(date)
    seasons.forEach(season => {
        const seasonStart = getDayInYear(season.start)
        const seasonEnd = getDayInYear(season.end)
        if (seasonStart > seasonEnd) {
            if (seasonStart <= day || day <= seasonEnd) seasonResult = season
        } else {
            if (seasonStart <= day && day <= seasonEnd) seasonResult = season
        }
    })
    return seasonResult
}

const getTempRange = (climate, date) => {
    const {tempMod} = getSeason(date)
    const {tempLow, tempHigh} = climates.find(climateData => climateData.name === climate)
    const baseTemp = ((tempHigh - tempLow) * tempMod) + tempLow
    const randomTempFlux = parseFloat((Math.random() * tempFlux).toFixed(2))
    return { low: baseTemp-randomTempFlux, high: baseTemp+randomTempFlux  }
}

console.log(getTempRange('Coast','5-5-213')) // should return 'Winter'