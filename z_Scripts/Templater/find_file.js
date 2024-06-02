const dv = app.plugins.getPlugin("dataview").api
const minisearch = require('minisearch')

module.exports = (text, path) => {
    const searchTerms = text.replace(/[\(\)']/gm,'').replace(/s$/, '').split(' ')
    const scores = dv.pages(`"${path}"`).array().reduce((accum, page) => {
        let score = 0
        for (const term of searchTerms) {
            if (page.file.name === text ||
                (page.aliases && page.aliases[0] === text) ||
                page.file.name === searchTerms.join(' ') ||
                page.file.name === `${searchTerms.join(' ')} Armor`) {
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
    // console.log(text, scores)

    return scores[0].score === 0 || scores.filter(item => item.score === scores[0].score).length > 5 || scores[0].value.file.name.length > text.length * 2 ?
        text :
        `[[${scores[0].value.file.path}|${scores[0].value.file.name}]]`
}