<%*
let templateError = false
let formattedDate = ''
let selectedParty = null
try {
  const path = require('path')
  const dataview = app.plugins.getPlugin("dataview")
  const modalForm = app.plugins.getPlugin('modalforms')
  
  if (tp.config.run_mode !== 0) {
    throw new Error('This template can only be used to create new files.')
  }

  if (!modalForm || !modalForm.api) {
    throw new Error('Modal Forms plugin is not available')
  }

  if (!dataview || !dataview.api) {
    throw new Error('Dataview plugin is not available')
  }
  
  const config = dataview.api.page('Configuration')
  
  if (!config || !config.locations || !config.locations.preps || !config.locations.parties) {
    throw new Error('Configuration for file locations is not set up correctly')
  }
  
  const result = await modalForm.api.openForm({
      title: "Session Prep Setup",
      name: "session-setup",
      fields: [
        {
          name: "party",
          label: "Party",
          description: "Campaign Party",
          isRequired: true,
          input: {
            type: "dataview",
            query: "dv.pages('\"" + config.locations.parties + "\"').file.name"
          }
        },
        {
          name: "date",
          label: "Date",
          description: "Date of Session",
          isRequired: false,
          input: {
            type: "date",
            hidden: false
          }
        }
      ],
      version: "1"
    })

  if (result.status === 'cancelled') {
    throw new Error('Modal was Cancelled')
  }

  const data = result.getData()
  
  formattedDate = moment(data.date).format("YYYY-MM-DD")
  selectedParty = dataview.api.page(data.party)
  
  await tp.file.move(path.join(config.locations.preps, selectedParty.file.name, formattedDate), tp.file.find_tfile(tp.file.title))
} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
date: <% formattedDate || '' %>
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
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>