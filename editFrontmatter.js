const matter = require('gray-matter')
const fs = require('fs')
const getAllFiles = require('./z_Scripts/Templater/get_all_files')

function addTagToNotes(path, tag) {
    const notes = getAllFiles(__dirname, path).filter(file => file.path.endsWith('.md'))

    notes.forEach(note => {
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
    const notes = getAllFiles(__dirname, path).filter(file => file.path.endsWith('.md'))

    notes.forEach(note => {
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

function editFrontmatter(path, field) {
    const notes = getAllFiles(__dirname, path).filter(file => file.path.endsWith('.md'))

    notes.forEach(note => {
        const content = fs.readFileSync(note.path, 'utf-8')
        const data = matter(content).data

        // if (!Object.hasOwnProperty.call(data[field], 'Eldoria')) {
        //     data[field] = { Eldoria: data[field] }
        //     fs.writeFileSync(note.path, matter.stringify(content, data))
        // }
        if (!Object.hasOwnProperty.call(data, field) || !Object.hasOwnProperty.call(data[field], 'Curse of Strahd')) {
            data[field] = { 'Curse of Strahd': '' }
            fs.writeFileSync(note.path, matter.stringify(content, data))
            
        }
        console.log(note.path)
        process.exit()
    })
}

// addTagToNotes('1. DM Stuff/Session Prep', 'session-prep')
// addTagToNotes('1. DM Stuff/Session Journals', 'session-journal')
// addTagToNotes('3. The Party/Parties', 'party')
// addTagToNotes('3. The Party/Players', 'player')
// addTagToNotes('4. World Almanac/Places of Interest', 'location')
// addTagToNotes('4. World Almanac/Regions', 'location')
// addTagToNotes('4. World Almanac/Settlements', 'location')
// addTagToNotes('4. World Almanac/Shops', 'location')
// addTagToNotes('4. World Almanac/Worlds', 'location')
// addTagToNotes('4. World Almanac/NPCs', 'npc')

editFrontmatter('4. World Almanac/NPCs', 'partyRelationships')