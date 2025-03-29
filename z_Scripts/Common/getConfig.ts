// { "language": "TypeScript" }
const path = await self.require.import('path')
const fs = await self.require.import('fs')
const matter = await self.require.import('https://esm.sh/gray-matter')
const config = await self.require.import('../../1. DM Stuff/Configuration.md')

const main = () => {
    const content = fs.readFileSync('../../1. DM Stuff/Configuration.md', 'utf-8')
    console.log(content)
    const data = matter(content).data
    console.log(data)
    return data
}

export default main