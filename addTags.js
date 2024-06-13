const matter = require('gray-matter')

function addTagsToPrepNotes() {
    const prepNotes = app.valut.getFiles()//.filter(file => file.name.startsWith('prep_'))
    console.log(prepNotes[0])


    // prepNotes.forEach(note => {
    //     const content = note.getContents()
    //     const tags = matter(content).data.tags

    //     if (!tags.includes('prep')) {
    //         tags.push('prep')
    //         note.setContents(matter.stringify(content, { tags }))
    //     }
    // })
}