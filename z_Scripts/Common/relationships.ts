// { "language": "TypeScript" }
const dv = app.plugins.getPlugin("dataview").api

export const getRelationships = (search: string, frontMatter: string) => {
    const activeFile = dv.page(app.workspace.getActiveFile().path)

    console.log(activeFile)
}