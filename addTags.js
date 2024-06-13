const matter = require('gray-matter')
const fs = require('fs')
const getAllFiles = require('./z_Scripts/Templater/get_all_files')

function addTagToNotes(path, tag) {
    const prepNotes = getAllFiles(__dirname, path).filter(file => file.path.endsWith('.md')

    prepNotes.forEach(note => {
        const content = fs.readFileSync(note.path, 'utf-8')
        const data = matter(content).data
        const tags = data.tags || []

        if (!tags.includes(tag)) {
            tags.push(tag)
            fs.writeFileSync(note.path, matter.stringify(content, { ...data, tags }))
        }
    })
}

function removeTagFromNotes(path, tag) {
    const prepNotes = getAllFiles(__dirname, path)

    prepNotes.forEach(note => {
        const content = fs.readFileSync(note.path, 'utf-8')
        const data = matter(content).data
        const tags = data.tags || []

        if (tags.includes(tag)) {
            const index = tags.indexOf(tag)
            tags.splice(index, 1)
            fs.writeFileSync(note.path, matter.stringify(content, { ...data, tags }))
        }
    })
}

addTagToNotes('1. DM Stuff/Session Prep', 'session-prep')
addTagToNotes('1. DM Stuff/Session Journals', 'session-journal')
addTagToNotes('3. The Party/Parties', 'party')
addTagToNotes('3. The Party/Players', 'player')
addTagToNotes('4. World Almanac/Places of Interest', 'place-of-interest')
addTagToNotes('4. World Almanac/Regions', 'location')
addTagToNotes('4. World Almanac/Settlements', 'location')
addTagToNotes('4. World Almanac/Shops', 'shop')
addTagToNotes('4. World Almanac/Worlds', 'location')