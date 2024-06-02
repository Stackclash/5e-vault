const dv = app.plugins.getPlugin("dataview").api
const path = require('path')
const MiniSearch = require(path.join(app.vault.adapter.getBasePath(), 'node_modules/minisearch/dist/cjs/index.cjs'))

module.exports = (text, searchPath) => {
    console.log(text, searchPath)
    // const searchTerms = text.replace(/[\(\)']/gm,'').replace(/s$/, '').split(' ')
    // const scores = dv.pages(`"${path}"`).array().reduce((accum, page) => {
    //     let score = 0
    //     for (const term of searchTerms) {
    //         if (page.file.name === text ||
    //             (page.aliases && page.aliases[0] === text) ||
    //             page.file.name === searchTerms.join(' ') ||
    //             page.file.name === `${searchTerms.join(' ')} Armor`) {
    //             score += 5
    //         } else if (page.file.name.includes(term)) {
    //             score++
    //         }
    //     }
    //     accum.push({
    //         value: page,
    //         score
    //     })

    //     return accum
    // }, []).sort((a, b) => b.score - a.score)
    const pages = dv.pages(`"${searchPath}"`).array().map((p,i) => ({id: i,name: p.file.name, path: p.file.path}))
    const minisearch = new MiniSearch({
        fields: ['name'],
        storeFields: ['name', 'path']
    })
    minisearch.addAll(pages)

    const results = minisearch.search(text)
    console.log(text, results)
    return `[[${results[0].path}|${results[0].name}]]`
    // return scores[0].score === 0 || scores.filter(item => item.score === scores[0].score).length > 5 || scores[0].value.file.name.length > text.length * 2 ?
    //     text :
    //     `[[${scores[0].value.file.path}|${scores[0].value.file.name}]]`
}