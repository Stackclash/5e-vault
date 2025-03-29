// { "language": "TypeScript" }
export const getNameFromWikiLink = (wikiLink: string): string | null => {
    const match = wikiLink.match(/\[\[(.+)\]\]/)
    return match ? match[1] : null
}