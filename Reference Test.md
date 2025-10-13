```dataviewjs
const quests = dv.pages("#quest")
quests.forEach((quest) => {
  quest.steps && quest.steps.forEach((step, index) => {
    dv.paragraph(`\`INPUT[toggle:${quest.file.name}#steps[${index}].completed]\` ${step.text}`)
  })
})
```

```datacorejsx
return function View() {
  const quests = dc.useQuery("@page and #quest")

  return (
    <div>
      {quests.map(q => {
        return (
          <h3>{q.$name}</h3>
        )
      })}
    </div>
  )
}
```
