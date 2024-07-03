```dataviewjs
const activeParty = dv.pages('"Configuration"').active_party
const journals = dv.pages('#session-journal').filter(p => p.party.path === activeParty.file.path)

dv.span(journal)
```
