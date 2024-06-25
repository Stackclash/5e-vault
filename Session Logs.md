```dataviewjs
// const dv = app.plugins.getPlugin("dataview").api
const calendarName = dv.page(dv.page('Configuration').active_world).calendar
const calendarConfig = Calendarium.plugin.calendars.find(cal => cal.name === calendarName).static
const months = calendarConfig.months
const weekdays = calendarConfig.weekdays
const moons = calendarConfig.moons

function parseDate(date) {
	const dateArray = date.split('-'),
		month = parseInt(dateArray[1]),
		day = parseInt(dateArray[2]),
		year = parseInt(dateArray[0])
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

const journals = dv.pages('#session-journal').filter(page => page['fc-date']).sort(page => page.date)

journals.forEach(journal => {
	const date = new Date(journal.date).toDateString()
	const fantasyDate = parseDate(journal['fc-date'])
	const fantasyDateString = `${fantasyDate.prettyPrint.month} ${fantasyDate.original.day}, ${fantasyDate.original.year} (${fantasyDate.prettyPrint.day})`
	dv.header(2, `${journal.file.name} - ${fantasyDateString}`)
	dv.header(3, `${date}`)
	dv.paragraph(journal.summary)
})
```
