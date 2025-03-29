// { "language": "TypeScript" }
const path = await self.require.import('path')
const matter = await self.require.import('https://esm.sh/gray-matter')

const main = () => {
    const data = matter.read(path.resolve(__dirname, '../../1. DM Stuff/Configuration.md')).data
    return data
}

export default main