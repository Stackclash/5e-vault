---
steps:
  - completed: false
    text: This is a test step
  - completed: true
    text: This is another test step
---

```dataviewjs
const currentPage = dv.current()
currentPage.steps.forEach((step, index) => {
  dv.paragraph(`\`INPUT[toggle(class(mb-toggle)):${currentPage.file.name}#steps[${index}].completed]\` \`INPUT[textArea(class(mb-45)):${currentPage.file.name}#steps[${index}].text]\``)
})
```
