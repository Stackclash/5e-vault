<%*
const dv = app.plugins.getPlugin("dataview").api

// This is the mapping of relationships
// The "to" key is used for the currently selected NPC
// Add more relationships here to be able to add them to NPCs
const relationshipMapping = [
    {to: "Father", from: {male: "Son", female: "Daughter"}},
    {to: "Mother", from: {male: "Son", female: "Daughter"}},
    {to: "Husband", from: "Wife"},
    {to: "Wife", from: "Husband"},
    {to: "Son", from: {male: "Father", female: "Mother"}},
    {to: "Daughter", from: {male: "Father", female: "Mother"}},
    {to: "Sister", from: {male: "Brother", female: "Sister"}},
    {to: "Brother", from: {male: "Brother", female: "Sister"}},
    {to: "Cousin", from: "Cousin"},
    {to: "Niece", from: {male: "Uncle", female: "Aunt"}},
    {to: "Nephew", from: {male: "Uncle", female: "Aunt"}},
    {to: "Uncle", from: {male: "Nephew", female: "Niece"}},
    {to: "Aunt", from: {male: "Nephew", female: "Niece"}}
]

// Makes sure this template can only be inserted
if (tp.config.run_mode !== 1) {
    tR += "This template can only be inserted"
} else {
    const currentNpcs = tp.frontmatter.relationships.map(r => r.split('|')[0]),
    npcs = dv.pages('"4. World Almanac/NPCs"').filter(n => !currentNpcs.includes(n.file.name)),
    selectedNpc = await tp.system.suggester(npcs.map(n => n.file.name), npcs.map(p => p.file.name), false, "What NPC should be used for the relationship?"),
    selectedRelationship = await tp.system.suggester(relationshipMapping.map(r => r.to), relationshipMapping, false, `What relationship does ${selectedNpc} have to ${tp.config.active_file.basename}?`)

    let otherSelectedRelationship
    if (typeof selectedRelationship.from === 'object' && !Array.isArray(selectedRelationship.from)) {
        if (tp.frontmatter.sex) {
            otherSelectedRelationship = selectedRelationship.from[tp.frontmatter.sex]
        } else {
            otherSelectedRelationship = await tp.system.suggester(Object.values(selectedRelationship.from), Object.values(selectedRelationship.from), false, `What relationship does ${tp.config.active_file.basename} have to ${selectedNpc}?`)
        }
    } else {
        otherSelectedRelationship = selectedRelationship.from
    }

    if (selectedNpc && selectedRelationship && otherSelectedRelationship) {
        app.fileManager.processFrontMatter(tp.config.active_file, (fm) => {
            if (!fm.relationships || !Array.isArray(fm.relationships)) {
                fm.relationships = []
            }
            if (!fm.relationships.includes(`${selectedNpc}|${selectedRelationship.to.toLowerCase()}`)) {
                fm.relationships.push(`${selectedNpc}|${selectedRelationship.to.toLowerCase()}`)
            }
        })

        let selectedNpcFile = tp.file.find_tfile(selectedNpc)
        if (selectedNpcFile) {
            app.fileManager.processFrontMatter(selectedNpcFile, (fm) => {
                if (!fm.relationships || !Array.isArray(fm.relationships)) {
                    fm.relationships = []
                }
                if (!fm.relationships.includes(`${tp.config.active_file.basename}|${otherSelectedRelationship.toLowerCase()}`)) {
                    fm.relationships.push(`${tp.config.active_file.basename}|${otherSelectedRelationship.toLowerCase()}`)
                }
            })
        }
    }
}
-%>