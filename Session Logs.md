```dataviewjs
// const dv = app.plugins.getPlugin("dataview").api
const calendarName = dv.page(dv.page('Configuration').active_world.path).calendar
const calendarConfig = Calendarium.plugin.calendars.find(cal => cal.name === calendarName).static
const months = calendarConfig.months
const weekdays = calendarConfig.weekdays
const moons = calendarConfig.moons

function parseDate(date) {
	const dateArray = date.split('-')
	return {
		original: {
			month: parseInt(dateArray[1]),
			day: parseInt(dateArray[2]),
			year: parseInt(dateArray[0])
		},
		prettyPrint: {
			month: months[parseInt(dateArray[1])-1].name,
			day: weekdays[parseInt(dateArray[2])-1].name,
			year: dateArray[0]
		}
	}
}

function getDayNumberFromBeginning(month, day, year, monthsConfig) {
	const numberDayInYear = monthsConfig.reduce((accum, monthConfig, index) => {
		if ((month-1) === index) {
			return accum + day
		} else if (index < (month-1)) {
			return accum + monthConfig.length
		} else {
			return accum
		}
	}, 0)
	const numberOfDaysInYear = monthsConfig.reduce((accum, monthConfig) => {
		return accum + monthConfig.length
	}, 0)
	return numberDayInYear + (numberOfDaysInYear * year)
}
console.log(getDayNumberFromBeginning(2, 20, 973, months) % weekdays.length)

// console.log(parseDate('973-2-11'))

// console.log(months, weekdays, moons)

// const journals = dv.pages('#session-journal').filter(page => page['fc-date']).sort(page => page.date)

// journals.forEach(journal => {
// 	const date = new Date(journal.date).toDateString()
// 	const temp = journal['fc-date'].split('-')
// 	const fantasyDate = `${months[temp[1]]} ${temp[2]} ${temp[0]}`
// 	dv.header(2, `${journal.file.name} - ${fantasyDate}`)
// 	dv.header(3, `${date}`)
// 	dv.paragraph(journal.summary)
// })
```
