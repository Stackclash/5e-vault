```dataviewjs
const journals = dv.pages('"1. DM Stuff/Session Journals"').filter(page => page['fc-date']).sort(page => page.date)
const calendarApi = Calendarium.getAPI('Eldoria Calendar')

journals.forEach(journal => {
	const date = new Date(journal.date).toDateString()
	const temp = journal['fc-date'].split('-')
	const fantasyDate = calendarApi.toDisplayDate(calendarApi.getDate(temp[0], temp[1],temp[2]))
	console.log(calendarApi.getStore())
	dv.header(2, `${journal.file.name} (${date}) - `)
	dv.header(3, `${journal.date}`)
})
```
