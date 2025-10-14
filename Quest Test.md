---
steps:
  - completed: true
    description: This is another test step
  - completed: true
    description: Hello
  - {}
tags:
  - quest
npcs:
  - {}
---

## Related NPCs
```meta-bind-button
label: Add NPC
id: add-npc
style: primary
actions:
  - type: js
    file: z_Scripts/Meta Bind/addItem.js
    args:
      field: npcs
```
```datacorejsx
return function View() {
  const currentPage = dc.useCurrentFile()
  const columns = [
    {
      id: 'NPC',
      value: ({i}) => `\`INPUT[suggester(optionQuery(#npc)):npcs[${i}].name]\``
    },
    {
      id: 'Description/Quest Hook',
      value: ({i}) => `\`INPUT[textArea:npcs[${i}].description]\``
    },
    {
      id: 'Delete',
      width: 'minimum',
      value: ({i}) => `\`\`\`meta-bind-button\nicon: x\ntooltip: Delete?\nid: remove-item\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/removeItem.js\n    args:\n      field: npcs\n      index: ${i}\n\`\`\``
    }
  ]

  return <dc.Table rows={currentPage.value('npcs').map((s,i) => ({...s, i}))} columns={columns}/>
}
```

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
      value: ({i}) => `\`INPUT[textArea:steps[${i}].description]\``
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
