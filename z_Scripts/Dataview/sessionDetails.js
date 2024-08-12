const getText = (item) => item.text.replace('#remember', '') + ' ' + dv.sectionLink(item.link.path, item.link.subpath, false, 'Go To')

const getKey = (key) => {
    key = key.replace('#', '')
    return key.charAt(0).toUpperCase() + key.slice(1)
}
console.log('HI')
const details = dv.pages("#session-journal").file.lists.where(t => t.text.includes("#remember")).array().reduce((acc, t) => {
    t.tags.forEach(tag => {
        if (!tag.includes('remember') && !acc.some(a => a.key === getKey(tag))) {
            acc.push({key: getKey(tag), rows: [getText(t)]})
        } else if (!tag.includes('remember') && acc.some(a => a.key === getKey(tag))) {
            acc.find(a => a.key === getKey(tag)).rows.push(getText(t))
        } else {
            if (acc.some(a => a.key === '')) {
                acc.find(a => a.key === '').rows.push(getText(t))
            } else {
                acc.push({key: '', rows: [getText(t)]})
            }
        }
    })
    
    return acc
}, [])
console.log(details)

details.forEach(d => {
    if (d.key) dv.header(2, d.key)
    dv.list(d.rows)
})