const matter = require('gray-matter')
const fs = require('fs')
const path = require('path')

const { tempFlux, seasons, months, climates, precipitations, winds } = matter(fs.readFileSync(path.join(__dirname, '1. DM Stuff/DM To-Do/Weather Generation.md'), 'utf8')).data

/**
 * Returns the day of the year based on the date
 * @param {string} date - Date in the format 'MM-DD-YYYY'
 * @returns {number} - The day of the year
 */
const getDayInYear = (date) => {
    const [month, day, year] = date.split('-').map(Number)
    return months.slice(0, month - 1).reduce((acc, curr) => acc + curr.length, 0) + day
}

/**
 * Returns the total number of days in a year
 * @returns {number} - The total number of days in a year
 */
const getTotalDaysInYear = () => months.reduce((acc, curr) => acc + curr.length, 0)

/**
 * Returns the duration between two dates
 * @param {string} startDate - Date in the format 'MM-DD-YYYY'
 * @param {string} endDate - Date in the format 'MM-DD-YYYY'
 * @returns {number} - The duration between the two dates
 */
const getDuration = (startDate, endDate) => {
    const startDay = getDayInYear(startDate)
    const endDay = getDayInYear(endDate)
    return endDay < startDay ? endDay + getTotalDaysInYear() - startDay + 1 : endDay - startDay + 1
}

/**
 * Returns an array of dates between two dates
 * @param {string} startDate - Date in the format 'MM-DD-YYYY'
 * @param {string} endDate - Date in the format 'MM-DD-YYYY'
 * @returns {string[]} - An array of dates in the format 'MM-DD-YYYY' between the two dates
 */
const getDatesInRange = (startDate, endDate) => {
    const dateRangeLength = getDuration(startDate, endDate)
    const dateRange = [startDate]
    for (let i = 1; i < dateRangeLength; i++) {
        const [previousMonth, previousDay, previousYear] = dateRange[i - 1].split('-').map(Number)

        const month = previousDay + 1 > months[previousMonth - 1].length ? (previousMonth + 1 > months.length ? 1 : previousMonth + 1) : previousMonth
        const day = previousDay + 1 > months[previousMonth - 1].length ? 1 : previousDay + 1
        let year = ''
        if (previousYear) year = previousMonth === months.length && month === 1 ? previousYear + 1 : previousYear
        dateRange.push(`${month}-${day}${year ? `-${year}` : ''}`)
    }
    return dateRange
}

/**
 * Returns the season based on the date
 * @param {string} date - Date in the format 'MM-DD-YYYY'
 * @returns {string} - The season based on the date
 */
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

/**
 * Returns the next season based on the date
 * @param {string} date - Date in the format 'MM-DD-YYYY'
 * @returns {object} - The next season config object based on the date
 */
const getNextSeason = (date) => {
    const {name} = getSeason(date)
    const currentSeasonIndex = seasons.findIndex(season => season.name === name)
    return seasons[(currentSeasonIndex + 1) % seasons.length]
}

/**
 * Returns the previous season based on the date
 * @param {string} date - Date in the format 'MM-DD-YYYY'
 * @returns {object} - The previous season config object based on the date
 */
const getPrevSeason = (date) => {
    const {name} = getSeason(date)
    const currentSeasonIndex = seasons.findIndex(season => season.name === name)
    return seasons[(currentSeasonIndex - 1 + seasons.length) % seasons.length]
}

/**
 * Returns the base temperature for the climate and season
 * @param {string} climate - The climate name
 * @param {string} seasonName - The season name
 * @returns {number} - The base temperature for the climate and season
 */
const getTempBaseTemp = (climate, seasonName) => {
    const {tempLow, tempHigh} = climates.find(climateData => climateData.name === climate)
    const {tempMod} = seasons.find(season => season.name === seasonName)
    return ((tempHigh - tempLow) * tempMod) + tempLow
}

/**
 * Returns the percentage through the season based on the date
 * @param {string} date - Date in the format 'MM-DD-YYYY'
 * @returns {number} - The percentage through the season
 */
const getPercentThroughSeason = (date) => {
    const {start, end} = getSeason(date)
    const day = getDayInYear(date)
    const seasonStartDay = getDayInYear(start)
    const seasonEndDay = getDayInYear(end)
    return (day - seasonStartDay) / (seasonEndDay - seasonStartDay)
}

/**
 * Returns the base temperature based on the percentage through the season
 * @param {string} climate - The climate name
 * @param {string} date - Date in the format 'MM-DD-YYYY'
 * @returns {number} - The base temperature based on the percentage through the season
 */
const getTempBaseOnPrecentThroughSeason = (climate, date) => {
    const currentTempBase = getTempBaseTemp(climate, getSeason(date).name)
    const percentToNextSeason = getPercentThroughSeason(date)
    const tempFluxToClosestSeason = percentToNextSeason - .5
    const prevTempBase = getTempBaseTemp(climate, getPrevSeason(date).name)
    const nextTempBase = getTempBaseTemp(climate, getNextSeason(date).name)
    return tempFluxToClosestSeason < 0 ? currentTempBase + (prevTempBase - currentTempBase) * tempFluxToClosestSeason : currentTempBase + (nextTempBase - currentTempBase) * tempFluxToClosestSeason
}

/**
 * Returns the temperature range for the date
 * @param {string} climate - The climate name
 * @param {string} date - Date in the format 'MM-DD-YYYY'
 * @returns {object} - The temperature range for the date
 */
const getTempRange = (climate, date) => {
    const currentTempBase = getTempBaseOnPrecentThroughSeason(climate, date)
    const randomTempFlux = parseFloat((Math.random() * tempFlux).toFixed(2))
    return { 
        low: currentTempBase - randomTempFlux,
        high: currentTempBase + randomTempFlux
    }
}

/**
 * Returns the days that have precipitation for the climate and season
 * @param {string} climate - The climate name
 * @param {string} season - The season name
 * @returns {string[]} - An array of precipitation dates for the climate and season
 */
const getRainDaysInSeason = (climate, season) => {
    const { precipProb } = climates.find(climateData => climateData.name === climate)
    const { precipMod, start, end } = seasons.find(seasonData => seasonData.name === season)
    const seasonDays = getDatesInRange(start, end)
    const totalRainDaysInSeason = Math.floor(precipProb * seasonDays.length) * precipMod
    const precipitationDays = new Set()

    while (precipitationDays.size < totalRainDaysInSeason) {
        const randomDay = Math.floor(Math.random() * seasonDays.length)
        precipitationDays.add(seasonDays[randomDay])
    }
    return Array.from(precipitationDays)
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

/**
 * Returns the precipitation days for the climate and year
 * @param {string} climate - The climate name
 * @returns {string[]} - An array of precipitation dates for the climate and year
 */
const getRainDaysInYear = (climate) => {
    const rainDays = []
    seasons.forEach(season => {
        rainDays.push(...getRainDaysInSeason(climate, season.name))
    })
    return rainDays
}

/**
 * Returns the weather for the climate and date
 * @param {string} climate - The climate name
 * @param {string} date - Date in the format 'MM-DD-YYYY'
 * @returns {object} - The weather for the date
 */
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

/**
 * Returns the precipitation for the climate and date
 * @param {string} climate - The climate name
 * @param {string} year - The year
 * @returns {object[]} - An array of weather objects for the year
 */
const getWeatherForYear = (climate, year) => {
    const dateRange = getDatesInRange(`1-1-${year}`, `${months.length}-${months[months.length - 1].length}-${year}`)
    const rainDays = getRainDaysInYear(climate)
    return dateRange.map(date => {
        const weather = getWeatherForDate(climate, date)
        const monthDay = date.split('-').slice(0, 2).join('-')
        if (rainDays.includes(monthDay)) weather.precipitation = true
        return weather
    })
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
const yearWeather = getWeatherForYear('Coast', '213')
const totalDaysInYear = yearWeather.length
let totalRainDays = 0
yearWeather.forEach(weather => {
    if (weather.precipitation) totalRainDays++
})
fs.writeFileSync(path.join(__dirname, 'weather.json'), JSON.stringify(yearWeather, null, 2))

console.log(`Total Days in Year: ${totalDaysInYear}`)
console.log(`Total Rain Days in Year: ${totalRainDays}`)
console.log(`Rain Percentage: ${totalRainDays / totalDaysInYear * 100}%`)