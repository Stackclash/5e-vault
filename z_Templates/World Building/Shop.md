---
obsidianUIMode: preview
owners: 
staff: 
cost_modifier: 
items: 
location:
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