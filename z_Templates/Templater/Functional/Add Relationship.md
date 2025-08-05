<%*
const dv = app.plugins.getPlugin("dataview").api
const modalForm = app.plugins.getPlugin('modalforms').api

const config = dv.page('Configuration')
const relationshipMapping = config['relationship_mapping'] || []

const currentNpcs = tp.frontmatter.relationships && tp.frontmatter.relationships.map(r => r.split('|')[0]),

// UPDATE THE PATH TO YOUR NPCs HERE!!!
npcs = dv.pages('"4. World Almanac/NPCs"').filter(n => !currentNpcs.includes(n.file.name))

const result = await modalForm.openForm({
    title: 'Add Relationship',
    fields: [
        {
            name: 'npc',
            label: 'NPC',
            description: 'What NPC should be used for the relationship?',
            isRequired: true,
            input: {
                type: 'select',
                allowUnknownValues: false,
                hidden: false,
                options: npcs.map(n => ({
                    value: n.file.name,
                    label: n.file.name
                })),
                source: 'fixed'
            }
        },
        {
            name: 'relationship',
            label: 'Relationship',
            description: `What relationship does the selected NPC have to ${tp.config.active_file.basename}?`,
            input: {
                type: 'select',
                allowUnknownValues: false,
                hidden: false,
                options: relationshipMapping.map(r => ({
                    value: r,
                    label: r.to
                })),
                source: 'fixed'
            }
        }
    ]
})

const { npc: selectedNpc, relationship: selectedRelationship } = result.getData()

// Get relationship for related NPC
let otherSelectedRelationship
if (typeof selectedRelationship.from === 'object' && !Array.isArray(selectedRelationship.from)) {
    if (tp.frontmatter.gender) {
        otherSelectedRelationship = selectedRelationship.from[tp.frontmatter.gender]
    } else {
        const result = await modalForm.openForm({
            title: 'Add Relationship',
            fields: [
                {
                    name: 'relationship',
                    label: 'Relationship',
                    description: `What relationship does ${tp.config.active_file.basename} have to ${selectedNpc}?`,
                    isRequired: true,
                    input: {
                        type: 'select',
                        allowUnknownValues: false,
                        hidden: false,
                        options: Object.values(selectedRelationship.from).map(v => ({
                            value: v,
                            label: v
                        })),
                        source: 'fixed'
                    }
                }
            ]
        })
        const { relationship: otherSelectedRelationship } = result.getData()
    }
} else {
    otherSelectedRelationship = selectedRelationship.from
}

// Update current NPC and related NPC with relationship
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
-%>