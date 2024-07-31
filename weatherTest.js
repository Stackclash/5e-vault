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

const getNextSeason = (date) => {
    const {name} = getSeason(date)
    const currentSeasonIndex = seasons.findIndex(season => season.name === name)
    return seasons[(currentSeasonIndex + 1) % seasons.length]
}

const getPrevSeason = (date) => {
    const {name} = getSeason(date)
    const currentSeasonIndex = seasons.findIndex(season => season.name === name)
    return seasons[(currentSeasonIndex - 1 + seasons.length) % seasons.length]
}

const getTempBaseTemp = (climate, seasonName) => {
    const {tempLow, tempHigh} = climates.find(climateData => climateData.name === climate)
    const {tempMod} = seasons.find(season => season.name === seasonName)
    return ((tempHigh - tempLow) * tempMod) + tempLow
}

const getPercentThroughSeason = (date) => {
    const {start, end} = getSeason(date)
    const day = getDayInYear(date)
    const seasonStartDay = getDayInYear(start)
    const seasonEndDay = getDayInYear(end)
    return (day - seasonStartDay) / (seasonEndDay - seasonStartDay)
}

const getTempBaseOnPrecentThroughSeason = (climate, date) => {
    const currentTempBase = getTempBaseTemp(climate, getSeason(date).name)
    const percentToNextSeason = getPercentThroughSeason(date)
    const tempFluxToClosestSeason = percentToNextSeason - .5
    const prevTempBase = getTempBaseTemp(climate, getPrevSeason(date).name)
    const nextTempBase = getTempBaseTemp(climate, getNextSeason(date).name)
    console.log(currentTempBase, percentToNextSeason, tempFluxToClosestSeason, prevTempBase, nextTempBase)
    return tempFluxToClosestSeason < 0 ? currentTempBase - (currentTempBase - prevTempBase) * tempFluxToClosestSeason : currentTempBase + (nextTempBase - currentTempBase) * tempFluxToClosestSeason
}

const getTempRange = (climate, date) => {
    const currentTempBase = getTempBaseTemp(climate, getSeason(date).name)
    const percentToNextSeason = getPercentThroughSeason(date)
    const nextTempBase = getTempBaseTemp(climate, getNextSeason(date).name)
    const randomTempFlux = parseFloat((Math.random() * tempFlux).toFixed(2))
    console.log(currentTempBase, percentToNextSeason, nextTempBase, randomTempFlux)
    return { 
        low: currentTempBase,
        high: currentTempBase
    }
}

// console.log(getTempRange('Coast','5-5-213'))
const date = '5-5-213'
console.log(`Season: ${getSeason(date).name}`)
console.log(`Next Season: ${getNextSeason(date).name}`)
console.log(`Prev Season: ${getPrevSeason(date).name}`)
console.log(`Percent Through Season: ${getPercentThroughSeason(date)}`)
console.log(`Temp Base Based on Percent Through Season: ${getTempBaseOnPrecentThroughSeason('Coast', date)}`)