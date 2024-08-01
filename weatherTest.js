const matter = require('gray-matter')
const fs = require('fs')
const path = require('path')
const { get } = require('http')

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
    return tempFluxToClosestSeason < 0 ? currentTempBase + (prevTempBase - currentTempBase) * tempFluxToClosestSeason : currentTempBase + (nextTempBase - currentTempBase) * tempFluxToClosestSeason
}

const getTempRange = (climate, date) => {
    const currentTempBase = getTempBaseOnPrecentThroughSeason(climate, date)
    const randomTempFlux = parseFloat((Math.random() * tempFlux).toFixed(2))
    return { 
        low: currentTempBase - randomTempFlux,
        high: currentTempBase + randomTempFlux
    }
}

// Not taking into account previous and next seasons
const getPrecipitation = (climate) => {
    const { precipProb } = climates.find(climateData => climateData.name === climate)
    return Math.random() < precipProb ? true : false
}

// Not taking into account seasons
const getWind = (climate) => {
    const { windLow, windHigh } = climates.find(climateData => climateData.name === climate)
    return Math.random() * (windHigh - windLow) + windLow
}

const getWeatherForDate = (climate, date) => {
    const tempRange = getTempRange(climate, date)
    const precipitation = getPrecipitation(climate, date)
    const wind = getWind(climate)
    const season = getSeason(date).name
    return {
        date,
        season,
        tempRange,
        precipitation,
        wind
    }
}

const assignRainDaysInSeason = (climate, season) => {
    const { precipProb } = climates.find(climateData => climateData.name === climate)
    const { precipMod, start, end } = seasons.find(season => season.name === season)
    const seasonDays = getDatesInRange(start, end)
    const totalRainDaysInSeason = Math.floor(precipProb * seasonLength) * precipMod
    const precipitationDays = new Set()

    for (let i = 0; i < seasonLength; i++) {
        if (Math.random() < precipProb) precipitationDays.push(i)
    }
    return precipitationDays
}

const getWeatherForDateRange = (climate, startDate, endDate) => {
    const dateRange = getDatesInRange(startDate, endDate)
    const weather = dateRange.map(date => getWeatherForDate(climate, date))
}

// console.log(getTempRange('Coast','5-5-213'))
const date = '3-20-213'
// console.log('Climate:', climates.find(climate => climate.name === 'Coast'))
// console.log(`Season:`, getSeason(date))
// console.log(`Next Season:`, getNextSeason(date))
// console.log(`Prev Season:`, getPrevSeason(date))
// console.log(`Percent Through Season: ${getPercentThroughSeason(date)}`)
// console.log(`Temp Base Based on Percent Through Season: ${getTempBaseOnPrecentThroughSeason('Coast', date)}`)
// console.log(`Temp Range: ${JSON.stringify(getTempRange('Coast', date))}`)
// console.log(`Precipitation: ${getPrecipitation('Coast', date)}`)
// console.log(`Wind: ${getWind('Coast')}`)

// console.log(getWeatherForDate('Coast', date))
const yearWeather = getWeatherForDateRange('Coast', '1-1-213', '9-40-213')
const totalDaysInYear = yearWeather.length
let totalRainDays = 0
yearWeather.forEach(weather => {
    if (weather.precipitation) totalRainDays++
})

console.log(`Total Days in Year: ${totalDaysInYear}`)
console.log(`Total Rain Days in Year: ${totalRainDays}`)
console.log(`Rain Percentage: ${totalRainDays / totalDaysInYear * 100}%`)