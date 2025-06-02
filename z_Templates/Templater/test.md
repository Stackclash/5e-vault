<%*
const path = require('path')
const dv = app.plugins.getPlugin("dataview").api
const modalForm = app.plugins.getPlugin('modalforms').api
const locationConfig = dv.page('Configuration').locations

const parties = dv.pages('#party').array()
const options = parties.map(p => ({
  value: `[[${p.file.path}|${p.file.name}]]`,
  label: p.file.name
}))

const result = await modalForm.openForm({
  title: 'Character Party',
  fields: [
    {
      name: 'party',
      label: 'Party',
      description: 'What party is the character a part of?',
      input: {
        type: 'select',
        allowUnknownValues: false,
        hidden: false,
        options,
        source: 'static'
      },
      isRequired: false
    }
  ]
})
-%>