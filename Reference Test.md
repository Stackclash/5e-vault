```dataviewjs
const quests = dv.pages("#quest")
console.log(quests)
quests.forEach((quest) => {
  quest.steps.forEach((step, index) => {
    dv.paragraph(`\`INPUT[toggle:${page.file.name}#steps[${index}].completed]\` ${step.text}`)
  })
})
```

