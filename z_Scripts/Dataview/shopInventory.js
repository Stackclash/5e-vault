function costDisplay(cp) {
    let display = []
    let sp = gp = 0
    
    gp = Math.floor(cp / 100)
    cp = cp % 100
    sp = Math.floor(cp / 10)
    cp = cp % 10

    if (gp > 0) display.push(`${gp} gp`)
    if (sp > 0) display.push(`${sp} sp`)
    if (cp > 0) display.push(`${cp} cp`)

    return display.join(', ')
}

let items = input.current.items
if (!Array.isArray(items)) items = [items]
items = items.map(item => {
    return [item, costDisplay(dv.page(item).cost || 0) * dv.page(dv.page("Configuration").active_world.path).economic_scale * input.current.cost_modifier]
})
dv.table(["Item", "Cost"], items)