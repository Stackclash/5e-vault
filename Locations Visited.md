```dataviewjs
const activeParty = dv.page('Configuration').active_party
const journals = dv.pages('#session-journal').filter(p => p.party.path === activeParty.path).sort(p => p.date, 'asc')

const history = []
journals.forEach((p,i) => {

    p.locations && p.locations.forEach((l,i2) => {
        if (history.length > 0 && l.path !== history[history.length-1].location.path) {
            const previousHistory = history[history.length-1]
            history[history.length-1] = {
                ...previousHistory,
                end: p['fc-date']
            }
            history.push({
                location: l,
                start: p['fc-date']
            })
        } else if (history.length === 0) {
            history.push({
                location: l,
                start: p['fc-date']
            })
        }
    })
})

console.log(history)
```
