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
  dv.paragraph(`\`INPUT[toggle:${currentPage.file.name}#steps[${index}].completed]\` \`INPUT[text:${currentPage.file.name}#steps[${index}].text]\``)
})
```
