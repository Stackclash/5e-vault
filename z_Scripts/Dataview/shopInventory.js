function costDisplay(cp) {
    let display = []
    let sp = gp = 0

    if (cp <= 0) return '1 cp'
    
    gp = Math.floor(cp / 100)
    cp = cp % 100
    sp = Math.floor(cp / 10)
    cp = cp % 10

    if (gp > 0) {
        display.push(`${gp} gp`)
    } else if (sp > 0) {
        display.push(`${sp} sp`)
    } else if (cp > 0) {
        display.push(`${cp} cp`)
    }

    return display.join(', ')
}

let items = input.current.items
if (!Array.isArray(items)) items = [items]
items = items.map(item => {
    let finalCost = (dv.page(item || "").cost || 0) * dv.page(dv.page("Configuration").active_world).economic_scale * input.current.cost_modifier

    return [item, costDisplay(finalCost)]
})
dv.table(["Item", "Cost"], items)