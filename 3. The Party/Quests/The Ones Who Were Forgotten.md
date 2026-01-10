---
obsidianUIMode: preview
active: {}
completed: {}
campaign: "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"
description: ""
steps: []
npcs: []
tags:
  - quest
---
> [!infobox|n-th]
> | | |
> |---|---|
> | **Completed:** | `$=await dv.view('utils/metaBindInput', {type: 'toggle', field: ['completed', dv.page(dv.page('Configuration').active_party).file.name]})` |
> | **Active** | `$=await dv.view('utils/metaBindInput', {type: 'toggle', field: ['active', dv.page(dv.page('Configuration').active_party).file.name]})` |
# **`=this.file.name`**

## Description
`INPUT[textArea:description]`

## Quest Hooks
- 

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
      width: '15%',
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
      value: ({i}) => `\`$=await dv.view('utils/metaBindInput', {type: 'toggle', field: ['steps', ${i}, 'completed', dv.page(dv.page('Configuration').active_party).file.name]})\`` 
    },
    {
      id: 'Description',
      value: ({i}) => `\`INPUT[textArea:steps[${i}].text]\``
    },
    {
      id: 'Move Up',
      width: 'minimum',
      value: ({i}) => `\`\`\`meta-bind-button\nicon: move-up\ntooltip: Move Up?\nid: move-up\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/moveUp.js\n    args:\n      field: steps\n      index: ${i}\n\`\`\``
    },
    {
      id: 'Move Down',
      width: 'minimum',
      value: ({i}) => `\`\`\`meta-bind-button\nicon: move-down\ntooltip: Move Down\nid: move-down\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/moveDown.js\n    args:\n      field: steps\n      index: ${i}\n\`\`\``
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
