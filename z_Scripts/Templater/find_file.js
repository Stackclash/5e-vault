const dv = app.plugins.getPlugin("dataview").api
const path = require('path')
// const MiniSearch = require(path.join(app.vault.adapter.getBasePath(), 'node_modules/minisearch/dist/cjs/index.cjs'))

module.exports = (text, searchPath) => {
    const pages = dv.pages(`"${searchPath}"`).array().map((p,i) => ({id: i,name: p.file.name, path: p.file.path, alias: p.aliases && p.aliases.length ? p.aliases[0] : ''}))
    const minisearch = new MiniSearch({
        fields: ['name', 'alias'],
        storeFields: ['name', 'path']
    })
    minisearch.addAll(pages)

    const results = minisearch.search(text)
    return results.length === 0 ? text :`[[${results[0].path}|${results[0].name}]]`
}