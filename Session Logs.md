```dataviewjs
const journals = dv.pages('"1. DM Stuff/Session Journals"').filter(page => page['fc-date']).sort((a, b) => new Date(b.date) - new Date(a.date))
const calendarApi = Calendarium.getAPI('Eldoria Calendar')

journals.forEach(journal => {
	dv.header(2, `${journal.file.name} (${journal.date}) - `)
	//dv.header(2, journal.date)
	dv.header(3, `${journal.date}`)
})
```
