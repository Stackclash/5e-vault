// { "language": "TypeScript" }
const dv = app.plugins.getPlugin("dataview").api

export const getRelationships = (search: string, frontMatter: string, options) => {
    const activeFile = dv.page(app.workspace.getActiveFile().path)
    const searchPages = dv.pages(search)

    if (typeof activeFile[frontMatter] === 'string') {
        return searchPages.where(p => {
            return activeFile[frontMatter]
        })
    }
}