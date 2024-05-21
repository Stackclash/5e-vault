const dv = app.plugins.getPlugin("dataview").api

module.exports = (text, path) => {
    const searchTerms = text.replace(/[\(\)]/gm,'').split(' ')
    console.log(searchTerms)
    return dv.pages(`"${path}"`).find(page => {
        let found = false
        for (const term of searchTerms) {
            if (text.includes(term)) {
                found = true
            } else {
                found = false
            }
        }

        return found
    })
}