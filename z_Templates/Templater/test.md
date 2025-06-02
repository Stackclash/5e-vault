<%*
const path = require('path')
const dv = app.plugins.getPlugin("dataview").api
const modalForm = app.plugins.getPlugin('modalforms').api
const locationConfig = dv.page('Configuration').locations

let parties = dv.pages('#party')
console.log(parties.array())
const result = await modalForm.openForm({
  title: 'Character Party',
  name: 'Character Party',
  fields: [
    {
      name: 'party',
      label: 'Party',
      description: 'What party is the character a part of?',
      input: {
        type: 'select',
        allowUnknownValues: false,
        hidden: false,
        options: parties.map(p => ({
          value: `[[${p.file.path}|${p.file.name}]]`,
          label: p.file.name
        })).array(),
        source: 'static'
      },
      isRequired: false
    }
  ]
})
-%>