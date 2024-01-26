<%*
if (tp.config.run_mode !== 1) {
    tR += "This template can only be inserted"
} else {
    const currentNpcs = tp.frontmatter.relationships.map(r => r.split('|')[0])
    const npcs = tp.user.get_all_files(app.vault.adapter.getBasePath(), "4. World Almanac/NPCs").filter(n => !currentNpcs.includes(n))
    <!-- const npcs = await tp.system.suggester(parentLocations.map(p => p.file.name), parentLocations.map(p => [p.file.path, p.file.name]), false, "Where is this place located?") -->
    console.log(app.fileManager, tp.config.target_file, tp.frontmatter.relationships, npcs)
}
-%>