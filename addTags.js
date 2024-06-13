const matter = require('gray-matter')
const fs = require('fs')
const getAllFiles = require('./z_Scripts/Templater/get_all_files')

function addTagsToPrepNotes() {
    const prepNotes = getAllFiles(__dirname, '1. DM Stuff/Session Prep')

    prepNotes.forEach(note => {
        const content = fs.readFileSync(note.path, 'utf-8')
        const data = matter(content).data
        const tags = data.tags || []

        if (!tags.includes('session-prep')) {
            tags.push('session-prep')
            fs.writeFileSync(note.path, matter.stringify(content, { ...data, tags }))
        }
    })
}

addTagsToPrepNotes()