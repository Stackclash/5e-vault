<%*
const dv = app.plugins.getPlugin("dataview").api

if (tp.config.run_mode !== 1) {
    tR += "This template can only be inserted"
} else {
    const currentRelationships = tp.frontmatter.relationships
    const selectedNpc = await tp.system.suggester(currentRelationships.map(n => n.split('|')[0]), currentRelationships.map(p => n.split('|')[0]), false, "What NPC should be used for the relationship?")
    let selectedNpcFile = tp.file.find_tfile(selectedNpc)

    app.fileManager.processFrontMatter(tp.config.active_file, (fm) => {

    })
    app.fileManager.processFrontMatter(selectedNpcFile, (fm) => {

    })
}
-%>