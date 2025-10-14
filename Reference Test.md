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
  quests[2].$frontmatter.steps

  return (
    <div>
      {quests.map(q => {
        return (
          <>
          <h3>{q.$name}</h3>
          {q.$frontmatter.steps && q.$frontmatter.steps.value.map(s => {
            return (
              <div>
              <input type="checkbox" value={s.completed}/><span>{s.text}</span>
              </div>
            )
          })}
          </>
        )
      })}
    </div>
  )
}
```
