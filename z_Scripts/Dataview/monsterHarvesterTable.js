let tablePage = dv.pages('"5. Mechanics/Tables"').filter(p => {
    return p.file.name.includes("Hhhvi") &&
        p.aliases[0] == input.current.aliases[0]
})[0]

if (tablePage) {
    dv.header(2, "Harvester Table")
    const table = await dv.io.load(dv.blockLink(tablePage.file.path, "dc-item-description-value-weight-crafting", true, input.current.aliases[0]))
    console.log(dv.fileLink(tablePage.file.path, true))

    // dv.el('span', table)
    dv.span(dv.fileLink(tablePage.file.path, true))
}