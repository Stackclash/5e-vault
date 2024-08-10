const details = dv.pages("#session-journal").file.lists.where(t => t.text.includes("#remember")).array().reduce((acc, t) => {
    console.log(t)
    t.tags.forEach(tag => {
        if (!tag.includes('remember') && !acc.some(a => a.key === tag)) {
            acc.push({key: tag, rows: [t.text.replace('#remember', '') + ' ' + dv.sectionLink(t.link.path, t.link.subpath, false, 'Go To')]})
        } else if (!tag.includes('remember')) {
            acc.find(a => a.key === tag).rows.push(t.text.replace('#remember', '') + ' ' + dv.sectionLink(t.link.path, t.link.subpath, false, 'Go To'))
        }
    })
    
    return acc
}, [])

dv.list(dv.array(details))