<%*
const dv = app.plugins.getPlugin("dataview").api

if (tp.config.run_mode !== 1) {
    tR += "This template can only be inserted"
} else {
    const currentRelationships = tp.frontmatter.relationships
    const selectedNpc = await tp.system.suggester(currentRelationships.map(r => r.split('|')[0]), currentRelationships.map(r => r.split('|')[0]), false, "What NPC should be used for the relationship?")
    
    if (selectedNpc) {
        let selectedNpcFile = tp.file.find_tfile(selectedNpc)

        app.fileManager.processFrontMatter(tp.config.active_file, (fm) => {
            if (Array.isArray(fm.relationships)) {
                const index = fm.relationships.findIndex(r => r.includes(selectedNpc))

                fm.relationships.splice(index, 1)
            }
        })
        app.fileManager.processFrontMatter(selectedNpcFile, (fm) => {
            if (Array.isArray(fm.relationships)) {
                const index = fm.relationships.findIndex(r => r.includes(tp.config.active_file.basename))

                fm.relationships.splice(index, 1)
            }
        })
    }
}
-%>