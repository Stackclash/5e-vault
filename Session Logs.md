```dataviewjs
const calendarConfig = Calendarium.plugin.calendars.find(cal => cal.name === 'Eldoria Calendar').static
console.log(calendarConfig)
const months = calendarConfig.months
const weekdays = calendarConfig.weekdays
const moons = calendarConfig.moons

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
