```dataviewjs
const calendarConfig = Calendarium.plugin.calendars.find(cal => cal.name === 'Eldoria Calendar')
console.log(calendarConfig)
const months = calendarConfig.months.reduce((accum, month) => month.name, [])
const weekdays = calendarConfig.weekdays.reduce((accum, weekday) => weekday.name, [])
const moons = calendarConfig.moons.reduce((accum, moon) => ({name: moon.name, cycle: moon.cycle, offset: moon.offset }), [])

console.log(months, weekdays, moons)

const journals = dv.pages('#session-journal').filter(page => page['fc-date']).sort(page => page.date)
const calendarApi = Calendarium.getAPI('Eldoria Calendar')

journals.forEach(journal => {
	const date = new Date(journal.date).toDateString()
	const temp = journal['fc-date'].split('-')
	const fantasyDate = `${months[temp[1]]} ${temp[2]} ${temp[0]}`
	dv.header(2, `${journal.file.name} - ${fantasyDate}`)
	dv.header(3, `${date}`)
	dv.paragraph(journal.summary)
})
```
