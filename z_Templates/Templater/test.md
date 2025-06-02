<%*
const path = require('path')
const dv = app.plugins.getPlugin("dataview").api
const modalForm = app.plugins.getPlugin('modalforms').api
const locationConfig = dv.page('Configuration').locations

let parties = dv.pages('#party')
const result = await modalForm.openForm({
  title: 'Add Travel Distance',
  fields: [
    {
      name: 'party',
      label: 'Party',
      description: 'What party is the character a part of?',
      isRequired: true,
      input: {
        type: 'select',
        allowUnknownValues: false,
        hidden: false,
        options: parties.map(p => ({
          label: p.file.name
          value: `[[${p.file.path}|${p.file.name}]]`
        })),
        source: 'fixed'
      }
    }
  ]
})
-%>