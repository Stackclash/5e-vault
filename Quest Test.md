---
steps:
  - completed: true
    text: This is another test step
  - completed: true
    text: Hello
  - {}
tags:
  - quest
npcs:
  - "[[4. World Almanac/NPCs/Urwin Martikov (COS).md|Urwin Martikov (COS)]]"
  - "[[4. World Almanac/NPCs/Beucephalus (COS).md|Beucephalus (COS)]]"
  - "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich (COS)]]"
---

## Related NPCs
`INPUT[inlineListSuggester(optionQuery("4. World Almanac/NPCs")):npcs]`

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
