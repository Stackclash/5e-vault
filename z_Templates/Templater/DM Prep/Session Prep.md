<%*
try {
  const path = require('path')
  const config = dv.page('Configuration')
  let dv = app.plugins.getPlugin("dataview")
  let modalForm = app.plugins.getPlugin('modalforms')
  
  if (!dv || !dv.api) {
    throw new Error('Dataview plugin is not available')
  } else {
    dv = dv.api
  }
  
  if (!modalForm || !modalForm.api) {
    throw new Error('Modal Forms plugin is not available')
  } else {
    modalForm = modalForm.api
  }
  
  if (!config || !config.blah || !config.locations.preps) {
    throw new Error('Configuration for file locations is not set up correctly')
  }
  
  const locationConfig = config.locations
  
  const result = await modalForm.openForm('session-setup')
  const data = result.getData()
  
  if (!data) {
    throw new Error('Modal was Cancelled')
  }
  
  const formattedDate = moment(data.date).format("YYYY-MM-DD")
  const selectedParty = dv.page(data.party)
  
  await tp.file.move(path.join(locationConfig.preps, selectedParty.file.name, formattedDate))
} catch (e) {
  new tp.obsidian.Notice(e.message, 0)
}
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
