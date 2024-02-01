let tablePage = dv.pages('"5. Mechanics/Tables"').filter(p => {
    return p.file.name.includes("Hhhvi") &&
        p.aliases[0] == input.current.aliases[0]
})[0]

if (tablePage) {
    dv.header(2, "Harvester Table")
    const pageContent = await dv.io.load(tablePage.file.path)

    const table = pageContent.match(/\|(?:.*\n.*)+\|(?=\n\^dc-item-description-value-weight-crafting)/)[0]

    dv.paragraph(table)
}