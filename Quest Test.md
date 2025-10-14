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
], currentPage.steps.map((step) => [
  `\`INPUT[toggle(class(mb-toggle)):steps[${index}].completed]\``,
  `\`INPUT[textArea(class(mb-45)):steps[${index}].text]\``
]))
currentPage.steps.forEach((step, index) => {
  dv.paragraph( )
})
```
