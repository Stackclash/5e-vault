---
aliases:
  - Vampire Spawn
---

```dataviewjs
let tablePage = dv.pages('"5. Mechanics/Tables"').filter(p => {
  return p.file.name.includes("Hhhvi") &&
    p.aliases[0] == dv.current().aliases[0]
})[0]

dv.paragraph(dv.blockLink(tablePage.file.path, "dc-item-description-value-weight-crafting", true))
```


