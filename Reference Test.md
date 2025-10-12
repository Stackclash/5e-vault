```dataviewjs
const quests = dv.pages("#quest")
quests.forEach((quest) => {
  quest.steps && quest.steps.forEach((step, index) => {
    dv.paragraph(`\`INPUT[toggle:${quest.file.name}#steps[${index}].completed]\` ${step.text}`)
  })
})
```

