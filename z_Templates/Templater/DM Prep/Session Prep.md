<%*
const path = require('path')
const dv = app.plugins.getPlugin("dataview").api
const modalForm = app.plugins.getPlugin('modalforms').api
const locationConfig = dv.page('Configuration').locations

const result = await modalForm.openForm('session-setup')
console.log(result, result.getData())

let date = await tp.system.prompt("What date is this session supposed to happen? (MM-DD-YYYY)")
let formattedDate = moment(date).format("YYYY-MM-DD")

let parties = dv.pages("#party")
let selectedParty = await tp.system.suggester(parties.map(p => p.file.name), parties.map(p => p.file.name), false, "What party is this Session for?")

await tp.file.move(path.join(locationConfig.preps, selectedParty, formattedDate))
-%>
---
date: <% formattedDate %>
tags:
  - session-prep
---
## Resources


## Details to Remember
```dataviewjs
await dv.view('listsGroupedByTag', {searchTag: '#session-journal', listTag: '#remember'})
```

## Strong Start  


## Scenes  


## Secrets and Clues  


## Fantastic Locations  


## Important NPCs  


## Potential Monsters  


## Potential Treasure  
