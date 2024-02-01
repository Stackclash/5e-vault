let tablePage = dv.pages('"5. Mechanics/Tables"').filter(p => {
    return p.file.name.includes("Hhhvi") &&
        p.aliases[0] == input.current.aliases[0]
})[0]

if (tablePage) {
    dv.header(2, "Harvester Table")
    console.log(dv.blockLink(tablePage.file.path, "dc-item-description-value-weight-crafting", true, input.current.aliases[0]).toString().replace(' > ', '#^'))
    dv.span(dv.blockLink(tablePage.file.path, "dc-item-description-value-weight-crafting", true, input.current.aliases[0]).toString().replace(' > ', '#^'))
}