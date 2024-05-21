const dv = app.plugins.getPlugin("dataview").api

module.exports = (text, path) => {
    const searchTerms = text.replace(/[\(\)]/gm,'').split(' ')
    console.log(searchTerms)
    const scores = dv.pages(`"${path}"`).reduce((accum, page) => {
        let score = 0
        for (const term of searchTerms) {
            if (text.includes(term)) score++
        }
        accum.push({
            value: page,
            score
        })

        return accum
    }, []).sort((a, b) => a.score - b.score)
    console.log(scores)

    return scores[0].value
}