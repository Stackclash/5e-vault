const dv = app.plugins.getPlugin("dataview").api

module.exports = (text, path) => {
    const searchTerms = text.replace(/[\(\)]/gm,'').split(' ')
    const scores = dv.pages(`"${path}"`).array().reduce((accum, page) => {
        let score = 0
        for (const term of searchTerms) {
            console.log(page.file.name, term, page.file.name.includes(term))
            if (page.file.name.includes(term)) score++
        }
        console.log(score)
        accum.push({
            value: page,
            score
        })

        return accum
    }, []).sort((a, b) => a.score - b.score)
    console.log(scores)

    return scores[0].value
}