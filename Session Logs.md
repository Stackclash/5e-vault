```dataviewjs
const journals = dv.pages('"1. DM Stuff/Session Journals"').sort((a, b) => new Date(a.date) - new Date(b.date))
console.log(Calendarium.calendars[0])

journals.forEach(journal => {
	dv.header()
})
```
