<%*
let templateError = false
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
  
  if (!config || !config.locations || !config.locations.quests || !config.locations.campaigns) {
    throw new Error('Configuration for file locations is not set up correctly')
  }

  const result = await modalForm.openForm({
    title: 'Quest Setup',
    fields: [
      {
        name: 'name',
        label: 'Quest Name',
        description: 'What is the name of the Quest?',
        isRequired: true,
        input: {
          type: 'text'
        }
      },
      {
        name: 'campaign',
        label: 'Campaign',
        description: 'What campaign is this Quest for?',
        isRequired: true,
        "input": {
          "type": "dataview",
          "query": "dv.pages('\"" + config.locations.campaigns + "\"').file.name"
        }
      }
    ]
  })

  if (result.status === 'cancelled') {
    throw new Error('Modal was Cancelled')
  }

  const { name: title, campaign: selectedCampaign } = result.getData()

  await tp.file.move(path.posix.join(config.locations.journals, selectedCampaign.file.name, title), tp.file.find_tfile(tp.file.title))

} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
campaign: "<% selectedCampaign.file.link %>"
description: ""
steps: []
tags:
  - quest
---
# **`=this.file.name`**

## Description
`INPUT[textArea:description]`

## Quest Hooks
- 

## Related NPCs


## Quest Steps
```meta-bind-button
label: Add Step
id: add-step
style: primary
actions:
  - type: js
    file: z_Scripts/Meta Bind/addItem.js
    args:
      field: steps
```
```datacorejsx
return function View() {
  const currentPage = dc.useCurrentFile()
  const columns = [
    {
      id: 'Complete',
      width: 'minimum',
      value: ({i}) => `\`INPUT[toggle:steps[${i}].completed]\``
    },
    {
      id: 'Description',
      value: ({i}) => `\`INPUT[textArea:steps[${i}].text]\``
    },
    {
      id: 'Delete',
      width: 'minimum',
      value: ({i}) => `\`\`\`meta-bind-button\nicon: x\ntooltip: Delete?\nid: remove-item\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/removeItem.js\n    args:\n      field: steps\n      index: ${i}\n\`\`\``
    }
  ]

  return <dc.Table rows={currentPage.value('steps').map((s,i) => ({...s, i}))} columns={columns}/>
}
```
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>