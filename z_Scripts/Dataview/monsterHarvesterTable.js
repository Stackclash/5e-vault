let tablePage = dv.pages('"5. Mechanics/Tables"').filter(p => {
    return p.file.name.includes("Hhhvi") &&
        p.aliases[0] == input.current.aliases[0]
})[0]

if (tablePage) {
    dv.header(2, "Harvester Table")
    const blockLink = dv.blockLink(tablePage.file.path, "dc-item-description-value-weight-crafting", true, input.current.aliases[0])
    const blockLinkString = blockLink.toString()
    const pageContent = await dv.io.load(blockLink)

    console.log(blockLink)
    console.log(blockLinkString)
    console.log(pageContent)

    dv.paragraph(blockLink)
    dv.paragraph(blockLinkString)
    dv.paragraph(pageContent)
}

console.log(app)