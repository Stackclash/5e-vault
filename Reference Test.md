```dataviewjs
const page = dv.page("Quest Test")
page.steps.forEach((step, index) => {
  dv.paragraph(`\`INPUT[toggle:${page.file.name}#steps[${index}].completed]\` ${step.text}`)
})
```

