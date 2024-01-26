<%*
const dv = app.plugins.getPlugin("dataview").api

const relationshipMapping = [
    {to: "Father", from: {male: "Son", female: "Daughter"}},
    {to: "Mother", from: {male: "Son", female: "Daughter"}},
    {to: "Husband", from: "Wife"},
    {to: "Wife", from: "Husband"},
    {to: "Son", from: {male: "Father", female: "Mother"}},
    {to: "Daughter", from: {male: "Father", female: "Mother"}}
]

if (tp.config.run_mode !== 1) {
    tR += "This template can only be inserted"
} else {
    const currentNpcs = tp.frontmatter.relationships.map(r => r.split('|')[0]),
    npcs = dv.pages('"4. World Almanac/NPCs"').filter(n => !currentNpcs.includes(n.file.name)),
    selectedNpc = await tp.system.suggester(npcs.map(n => n.file.name), npcs.map(p => [p.file.path, p.file.name]), false, "What NPC should be used for the relationship?"),
    selectedRelationship = await tp.system.suggester(relationshipMapping.map(r => r.to), relationshipMapping.map(r => r.to), false, `What relationship does ${tp.config.active_file.basename} have to ${selectedNpc[1]}?`)


}
-%>