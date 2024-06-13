const matter = require('gray-matter')
const fs = require('fs')
const getAllFiles = require('./z_Scripts/Templater/get_all_files')

function addTagsToPrepNotes() {
    const prepNotes = getAllFiles(__dirname, '1. DM Stuff/Session Prep')

    prepNotes.forEach(note => {
        const content = fs.readFileSync(note.path, 'utf-8')
        const tags = matter(content).data.tags

        if (!tags) {
            tags = ['session-prep']
        } else if (!tags.includes('prep')) {
            tags.push('session-prep')
            note.setContents(matter.stringify(content, { tags }))
        }
        process.exit()
    })
}

addTagsToPrepNotes()