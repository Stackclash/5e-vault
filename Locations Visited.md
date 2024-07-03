```dataviewjs
const activeParty = dv.page('Configuration').active_party
const journals = dv.pages('#session-journal').filter(p => p.party.path === activeParty.path).sort(p => p.date, 'desc')

const config = []
journals.forEach((p,i) => {
	console.log(i)
})
```
