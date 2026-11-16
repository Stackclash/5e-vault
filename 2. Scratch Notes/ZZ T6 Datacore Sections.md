---
obsidianUIMode: preview
---
**T6.** Do (1) a list of section titles from `5. Mechanics/Rules` and (2) the embedded Prone condition text both appear?

```datacorejsx
return function View() {
  const sections = dc.useQuery('@section and path("5. Mechanics/Rules")')
  return <div>
    <p>{sections.length} sections found. First 10:</p>
    <ul>{sections.slice(0, 10).map(s => <li>{s.$title}</li>)}</ul>
    <dc.Markdown content={"![[Conditions#Prone]]"} sourcePath={dc.currentPath()} />
  </div>
}
```
