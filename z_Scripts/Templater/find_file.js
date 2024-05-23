const dv = app.plugins.getPlugin("dataview").api

module.exports = (text, path) => {
    const searchTerms = text.replace(/[\(\)]/gm,'').split(' ')
    const scores = dv.pages(`"${path}"`).array().reduce((accum, page) => {
        let score = 0
        for (const term of searchTerms) {
            if (page.file.name === term && searchTerms.length === 1) {
                score += 5
            } else if (page.file.name.includes(term)) {
                score++
            }
        }
        accum.push({
            value: page,
            score
        })

        return accum
    }, []).sort((a, b) => b.score - a.score)
    console.log(text, scores)

    return `[[${scores[0].value.file.path}|${scores[0].value.file.name}]]`
}