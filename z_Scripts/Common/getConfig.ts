// { "language": "TypeScript" }
const path = await self.require.import('path')
const fs = await self.require.import('fs')
const matter = await self.require.import('https://esm.sh/gray-matter')

const dv = app.plugins.getPlugin('dataview').api

const getConfig = () => {
    const content = fs.readFileSync(path.join(app.vault.adapter.getBasePath(), '1. DM Stuff/Configuration.md'), 'utf-8')
    const data = matter.default(content).data
    return data
}

export const getActiveParty = () => {
    const config = getConfig()
    return dv.page(`"${config.active_party}"`)
}

export const getActiveWorld = () => {
    const config = getConfig()
    return config.active_world
}