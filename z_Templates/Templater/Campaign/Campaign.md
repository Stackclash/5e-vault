<%*
let templateError = false
try {
  const path = require('path')
  const dataview = app.plugins.getPlugin("dataview")
  
  if (tp.config.run_mode !== 0) {
    throw new Error('This template can only be used to create new files.')
  }

  if (!dataview || !dataview.api) {
    throw new Error('Dataview plugin is not available')
  }
  
  const config = dataview.api.page('Configuration')

  if (!config || !config.locations || !config.locations.campaigns) {
    throw new Error('Configuration for file locations is not set up correctly')
  }

  const result = await modalForm.api.openForm({
    "title": "Campaign Setup",
    "name": "campaign-setup",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "description": "Campaign Name",
        "isRequired": true,
        "input": {
          "type": "text",
          "hidden": false,
        }
      }
    ],
    "version": "1"
  })

  if (result.status === 'cancelled') {
    throw new Error('Modal was Cancelled')
  }

  const data = result.getData()

  await tp.file.move(path.posix.join(config.locations.campaigns, data.name), tp.file.find_tfile(tp.file.title))
} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
  # Template Content
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>