const dv = app.plugins.getPlugin("dataview").api
const MiniSearch = self.require('https://esm.sh/minisearch')

module.exports = (text, searchPath) => {
    console.log(typeof MiniSearch.default)
    const pages = dv.pages(`"${searchPath}"`).array().map((p,i) => ({id: i,name: p.file.name, path: p.file.path, alias: p.aliases && p.aliases.length ? p.aliases[0] : ''}))
    const minisearch = new MiniSearch.default({
        fields: ['name', 'alias'],
        storeFields: ['name', 'path']
    })
    minisearch.addAll(pages)

    const results = minisearch.search(text)
    return results.length === 0 ? text :`[[${results[0].path}|${results[0].name}]]`
}