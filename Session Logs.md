```dataviewjs
const journals = dv.pages('"1. DM Stuff/Session Journals"').sort((a, b) => new Date(a.date) - new Date(b.date)).filter(page => page['fc-date'])
const calendarApi = Calendarium.getAPI('Eldoria Calendar')

journals.forEach(journal => {
	dv.header(2, journal.file.name)
})
```
