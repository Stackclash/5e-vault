function getDate(app, date) {
	const calendarConfig = getCalendarConfig(app)

	if (typeof date === 'string') {
        const dateArray = date.split('-')
		month = parseInt(dateArray[1]),
		day = parseInt(dateArray[2]),
		year = parseInt(dateArray[0])
	} else if (!date) {
        date = getCurrentDate(app)
            
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
			month: calendarConfig.months[month-1].name,
			day: calendarConfig.weekdays[getDayNumberFromBeginning(app, month, day, year) % calendarConfig.weekdays.length].name,
			year
		}
	}
}

function getCalendarName(app) {
	const dv = app.plugins.getPlugin("dataview").api
	return dv.page(dv.page('Configuration').active_world).calendar
}

function getCalendarConfig (app) {
	const Calendarium = app.plugins.getPlugin("calendarium").api
	const calendarName = getCalendarName(app)
    const calendarConfig = Calendarium.plugin.calendars.find(cal => cal.name === calendarName).static

	return {
		months: calendarConfig.months,
		weekdays: calendarConfig.weekdays,
		moons: calendarConfig.moons
	}
}

function getCurrentDate(app) {
	const Calendarium = app.plugins.getPlugin("calendarium").api
	const calendarName = getCalendarName(app)
	const calendarApi = Calendarium.getAPI(calendarName)
	const date = calendarApi.getCurrentDate()
	return date
}

function getDayNumberFromBeginning(app, month, day, year) {
	const calendarConfig = getCalendarConfig(app)
	const numberDayInYear = calendarConfig.months.reduce((accum, monthConfig, index) => {
		if ((month-1) === index) {
			return accum + day
		} else if (index < (month-1)) {
			return accum + monthConfig.length
		} else {
			return accum
		}
	}, 0)
	const numberOfDaysInYear = calendarConfig.months.reduce((accum, monthConfig) => {
		return accum + monthConfig.length
	}, 0)
	return numberDayInYear + (numberOfDaysInYear * (year+1))
}

module.exports = {
    getDate
}