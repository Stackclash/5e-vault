function costDisplay(cp) {
    let sp
}

let items = input.current.items
if (!Array.isArray(items)) items = [items]
items = items.map(item => {

    return [item, dv.page(item).cost * dv.page("Eldoria").economic_scale * input.current.cost_modifier]
})
dv.table(["Item", "Cost"], items)