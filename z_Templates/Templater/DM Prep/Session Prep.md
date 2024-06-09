<%*
const path = require('path')
const dv = app.plugins.getPlugin("dataview").api
const locationConfig = dv.page('Configuration').locations

let date = await tp.system.prompt("What date is this session supposed to happen? (MM-DD-YYYY)")
let formattedDate = moment(date).format("YYYY-MM-DD")

let parties = dv.pages(`"${locationConfig.parties}"`)
let selectedParty = await tp.system.suggester(parties.map(p => p.file.name), parties.map(p => p.file.name), false, "What party is this Session for?")
console.log(path.join(locationConfig.preps, selectedParty, formattedDate))

await tp.file.move(path.join(locationConfig.preps, selectedParty, formattedDate))
-%>
---
date: <% formattedDate %>
---
## Resources


## Details to Remember
```dataviewjs
dv.list(dv.pages('"1. DM Stuff/Session Journals"').file.lists.where(t => t.text.includes("#remember")).map((t) => t.text))
```

## Strong Start  


## Scenes  


## Secrets and Clues  


## Fantastic Locations  


## Important NPCs  


## Potential Monsters  


## Potential Treasure  
