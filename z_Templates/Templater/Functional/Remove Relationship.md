<%*
const dv = app.plugins.getPlugin("dataview").api
const modalForm = app.plugins.getPlugin('modalforms').api

const currentRelationships = tp.frontmatter.relationships
const result = await modalForm.openForm({
    title: 'Remove Relationship',
    fields: [
        {
            name: 'npc',
            label: 'NPC',
            description: 'What NPC relationship would you like to remove?',
            isRequired: true,
            input: {
                type: 'select',
                allowUnknownValues: false,
                hidden: false,
                options: currentRelationships.map(r => ({
                    value: r.split('|')[0],
                    label: r.split('|')[0]
                })),
                source: 'fixed'
            }
        }
    ]
})
const { npc: selectedNpc } = result.getData()

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
-%>