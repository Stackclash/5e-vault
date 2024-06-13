const matter = require('gray-matter')
const fs = require('fs')
const getAllFiles = require('./z_Scripts/Templater/get_all_files')

function addTagsToNotes(path, tag) {
    const prepNotes = getAllFiles(__dirname, path)

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

addTagsToNotes('1. DM Stuff/Session Prep', 'session-prep')
addTagsToNotes('1. DM Stuff/Session Journals', 'session-journal')
addTagsToNotes('3. The Party/Parties', 'party')
addTagsToNotes('3. The Party/Players', 'player')
addTagsToNotes('4. World Almanac/Places of Interest', 'place-of-interest')
addTagsToNotes('4. World Almanac/Regions', 'location')
addTagsToNotes('4. World Almanac/Settlements', 'location')
addTagsToNotes('4. World Almanac/Shops', 'shop')
addTagsToNotes('4. World Almanac/Worlds', 'location')