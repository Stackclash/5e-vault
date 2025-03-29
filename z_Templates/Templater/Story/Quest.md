<%*
const modalForm = app.plugins.getPlugin('modalforms').api

let parties = dv.pages("#party")
const result = await modalForm.openForm({
    title: 'Quest',
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
            name: 'party',
            label: 'Party',
            description: 'What party is this Session for?',
            isRequired: true,
            input: {
                type: 'select',
                allowUnknownValues: false,
                hidden: false,
                options: parties.map(p => ({
                  label: p.file.name,
                  value: p
                })),
                source: 'fixed'
            }
        }
    ]
})
const { name: title, party: selectedParty } = result.getData()

await tp.file.move(`4. World Almanac/Quests/` + title)
-%>
---
obsidianUIMode: preview
party: "<% selectedParty.file.link %>"
description: ""
tags:
  - quest
---
# **`=this.file.name`**

## Description
`INPUT[textArea:description]`

## Quest Hooks
- 

## Related NPCs
- 

## Quest Steps
- [ ] 