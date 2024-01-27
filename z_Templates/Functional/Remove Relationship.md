<%*
const dv = app.plugins.getPlugin("dataview").api

if (tp.config.run_mode !== 1) {
    tR += "This template can only be inserted"
} else {
    const currentRelationships = tp.frontmatter.relationships
    const selectedNpc = await tp.system.suggester(currentRelationships.map(r => r.split('|')[0]), currentRelationships.map(r => r.split('|')[0]), false, "What NPC should be used for the relationship?")
    let selectedNpcFile = tp.file.find_tfile(selectedNpc)

    app.fileManager.processFrontMatter(tp.config.active_file, (fm) => {
        const index = fm.relationships.findIndex(r => r.includes(selectedNpc))

        fm.relationships.splice(index, 1)
    })
    app.fileManager.processFrontMatter(selectedNpcFile, (fm) => {
        const index = fm.relationships.findIndex(r => r.includes(tp.config.active_file.basename))

        fm.relationships.splice(index, 1)
    })
}
-%>