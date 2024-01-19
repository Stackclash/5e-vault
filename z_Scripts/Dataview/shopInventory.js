let items = input.current.items
if (!Array.isArray(items)) items = [items]
console.log(this.cost_modifier)
items = items.map(item => [item, dv.page(item).cost * dv.page("Eldoria").economic_scale * input.current.cost_modifier])
dv.table(["Item", "Cost"], items)