```dataviewjs
const activeParty = dv.page('Configuration').active_party
const journals = dv.pages('#session-journal').filter(p => p.party.path === activeParty.path).sort(p => p.date, 'asc')

const history = []
journals.forEach((p,i) => {
	const previousJournal = i-1 >= 0 ? journals[i-1] : null

    p.locations && p.locations.forEach((l,i2) => {
        if (previousJournal && previousJournal.locations.length && l.path !== previousJournal.locations[previousJournal.locations.length-1].path) {
            const previousHistory = history[history.length-1]
            history[history.length-1] = {
                ...previousHistory,
                end: p['fc-date']
            }
        } else {
            history.push({
                location: l,
                start: p['fc-date']
            })
        }
    })
})

console.log(history)
```
