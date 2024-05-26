```dataviewjs
const journals = dv.pages('"1. DM Stuff/Session Journals"').sort((a, b) => new Date(a.date) - new Date(b.date))

journals.forEach(journal => {
	dv.header()
})
```
