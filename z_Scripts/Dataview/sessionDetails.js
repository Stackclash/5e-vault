const details = dv.pages("#session-journal").file.lists.where(t => t.text.includes("#remember")).map((t) => {
    return t.text.replace('#remember', '') + ' ' + dv.sectionLink(t.link.path, t.link.subpath, false, 'Go To')
})

dv.list(dv.array(details))