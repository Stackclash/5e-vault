---
obsidianUIMode: preview
owners: 
staff: 
cost_modifier: 
location: 
items:
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

## Inventory
```dataviewjs
let items = dv.current().items
items = items.map(item => [dv.fileLink(item), Math.floor(Math.random() * 5), 0])
console.log(items)
dv.table(["Item", "Quantity", "Cost"], items)
```
