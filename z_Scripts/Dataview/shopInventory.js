let items = input.current.items
if (!Array.isArray(items)) items = [items]
console.log(items)
items = items.map(item => [item, dv.page(item).cost * dv.page("Eldoria").economic_scale * this.file.cost_modifier])
dv.table(["Item", "Cost"], items)