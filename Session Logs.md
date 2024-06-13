```dataviewjs
const months = {
	1: 'Winterwane',
	2: 'Rainmoot',
	3: 'Palesun',
	4: 'Highsun',
	5: 'Firewane',
	6: 'Lowsun',
	7: 'Redfall',
	8: 'Snowmoot',
	9: 'Fellnight'
}
const days = {
	1: 'Cinderday',
	2: 'Terraday',
	3: 'Twilightday',
	4: 'Rainday',
	5: 'Sonnetday',
	6: 'Windday',
	7: 'Phoenixday'
}

const journals = dv.pages('#session-journal').filter(page => page['fc-date']).sort(page => page.date)
const calendarApi = Calendarium.getAPI('Eldoria Calendar')
console.log(calendarApi.getStore().staticStore.months.subscribe, Calendarium)

journals.forEach(journal => {
	const date = new Date(journal.date).toDateString()
	const temp = journal['fc-date'].split('-')
	const fantasyDate = `${months[temp[1]]} ${temp[2]} ${temp[0]}`
	dv.header(2, `${journal.file.name} - ${fantasyDate}`)
	dv.header(3, `${date}`)
	dv.paragraph(journal.summary)
})
```
