---
steps:
  - completed: false
    text: This is a test step
  - completed: true
    text: This is another test step
tags:
  - quest
---

```dataviewjs
const currentPage = dv.current()

dv.table([
  'Complete',
  'Description',
  'Delete'
], currentPage.steps.map((step, i) => [
  `\`INPUT[toggle:steps[${i}].completed]\``,
  `\`INPUT[textArea(class(mb-45)):steps[${i}].text]\``,
  `\`\`\`meta-bind-button\nicon: x\ntooltip: Delete?\nid: remove-item\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/removeItem.js\n    args:\n      field: steps\n      index: ${i}\n\`\`\``
]))
```


```datacorejsx
return function View() {
  const currentPage = dc.useCurrentFile()
  const columns = [
    {
      id: 'Complete',
      width: 'minimum',
      render: (value) => <input type="checkbox" checked={value}/>,
      value: (row) => row.completed
    },
    {
      id: 'Description',
      value: (row) => row.text
    }
  ]

  return <dc.Table rows={currentPage.value('steps')} columns={columns}/>
}
```
