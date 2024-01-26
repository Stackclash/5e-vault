<%*
const dv = app.plugins.getPlugin("dataview").api

if (tp.config.run_mode !== 1) {
    tR += "This template can only be inserted"
} else {
    const currentNpcs = tp.frontmatter.relationships.map(r => r.split('|')[0])
    const npcs = dv.pages('"4. World Almanac/NPCs"').filter(n => !currentNpcs.includes(n.file.name))
    const selectedNpc = await tp.system.suggester(npcs.map(n => n.file.name), npcs.map(p => [p.file.path, p.file.name]), false, "What NPC should be used for the relationship?")
    console.log(app.fileManager, tp.config.target_file, tp.frontmatter.relationships, npcs, selectedNpc)
}
-%>