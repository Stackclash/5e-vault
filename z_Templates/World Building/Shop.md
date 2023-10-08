---
obsidianUIMode: preview
owners: 
staff: 
cost_modifier: 
items: []
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
items = items.map(item => [dv.fileLink(item), dv.page(item).cost * dv.page("Eldoria").economic_scale * this.file.frontmatter.cost_modifier])
dv.table(["Item", "Cost"], items)
```