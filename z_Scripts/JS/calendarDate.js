function getDate(app, date) {
	const dv = app.plugins.getPlugin("dataview").api
	const Calendarium = app.plugins.getPlugin("calendarium").api
	
	console.log(Calendarium)
    let month, day, year
    const calendarName = dv.page(dv.page('Configuration').active_world).calendar
    const calendarConfig = Calendarium.plugin.calendars.find(cal => cal.name === calendarName).static
    const months = calendarConfig.months
    const weekdays = calendarConfig.weekdays
    const moons = calendarConfig.moons
	if (typeof date === 'string') {
        const dateArray = date.split('-')
		month = parseInt(dateArray[1]),
		day = parseInt(dateArray[2]),
		year = parseInt(dateArray[0])
        } else if (!date) {
        const calendarApi = Calendarium.getAPI(calendarName)
        date = calendarApi.getCurrentDate()
            
		month = date.month
		day = date.day
		year = date.year
	}
	return {
		original: {
			month,
			day,
			year
		},
		prettyPrint: {
			month: months[month-1].name,
			day: weekdays[getDayNumberFromBeginning(month, day, year, months) % weekdays.length].name,
			year
		}
	}
}

function getDayNumberFromBeginning(month, day, year) {
	const numberDayInYear = months.reduce((accum, monthConfig, index) => {
		if ((month-1) === index) {
			return accum + day
		} else if (index < (month-1)) {
			return accum + monthConfig.length
		} else {
			return accum
		}
	}, 0)
	const numberOfDaysInYear = months.reduce((accum, monthConfig) => {
		return accum + monthConfig.length
	}, 0)
	return numberDayInYear + (numberOfDaysInYear * (year+1))
}

module.exports = {
    getDate
}