---
obsidianUIMode: preview
owners: 
staff: 
cost_modifier: 
location: 
items:
  - Alchemy Jug
  - Amber
---

> [!infobox]
> # `=this.file.name`
> |||
> |---|---|
> | Owner(s) | `=this.owners` |
> | Staff | `=this.staff` |
> | Location | `=this.location` |
# `=this.file.name`
```dataviewjs
let items = dv.current().items
items = items.map(item => [item, 0])
console.log(items)
dv.table(["Item", "Cost"], items)
```
