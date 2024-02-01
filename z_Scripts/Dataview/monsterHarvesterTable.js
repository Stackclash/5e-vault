let tablePage = dv.pages('"5. Mechanics/Tables"').filter(p => {
    return p.file.name.includes("Hhhvi") &&
        p.aliases[0] == input.current.aliases[0]
})[0]

if (tablePage) {
    dv.header(2, "Harvester Table")
    console.log(tablePage.file.path, dv.blockLink(tablePage.file.path, "dc-item-description-value-weight-crafting", true))
    dv.paragraph(dv.blockLink(tablePage.file.path, "dc-item-description-value-weight-crafting", true))
}