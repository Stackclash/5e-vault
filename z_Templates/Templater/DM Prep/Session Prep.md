<%*
try {
  const path = require('path')
  const config = dv.page('Configuration')
  const dataview = app.plugins.getPlugin("dataview")
  const modalForm = app.plugins.getPlugin('modalforms')
  
  if (!dataview || !dataview.api) {
    throw new Error('Dataview plugin is not available')
  }
  
  if (!modalForm || !modalForm.api) {
    throw new Error('Modal Forms plugin is not available')
  }
  
  if (!config || !config.blah || !config.locations.preps) {
    throw new Error('Configuration for file locations is not set up correctly')
  }
  
  const result = await modalForm.api.openForm('session-setup')
  const data = result.getData()
  
  if (!data) {
    throw new Error('Modal was Cancelled')
  }
  
  const formattedDate = moment(data.date).format("YYYY-MM-DD")
  const selectedParty = dataview.api.page(data.party)
  
  await tp.file.move(path.join(locationConfig.locations.preps, selectedParty.file.name, formattedDate))
} catch (e) {
  new tp.obsidian.Notice(`Custom Message: ${e.message}`, 0)
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
