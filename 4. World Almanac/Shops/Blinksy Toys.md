---
obsidianUIMode: preview
owners: "[[Gadof Blinsky]]"
staff: 
cost_modifier: 1
items:
  - "[[Longbow]]"
location: "[[Vallaki]]"
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
await dv.view("shopInventory", {current: dv.current()})
```
