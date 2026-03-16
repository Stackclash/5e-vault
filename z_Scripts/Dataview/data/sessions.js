// Session journal data queries. Returns plain objects, never renders.
// Retrieves the Dataview API internally — do not pass dv as a parameter.

/**
 * Get session journals that contain an outlink to the given file path.
 * Returns sessions sorted by date, as plain objects.
 * @param {string} filePath - Vault-relative path of the file to search for
 */
export function getSessionsMentioning(filePath) {
    const dv = app.plugins.getPlugin("dataview").api
    return dv.pages('"3. The Party/Session Journals"')
        .filter(p => p.file.outlinks.array().some(l => l.path === filePath))
        .sort(p => p.date)
        .map(p => ({
            name: p.file.name,
            path: p.file.path,
            link: p.file.link,
            worldStartDate: p["fc-date"],
            worldEndDate: p["fc-end"],
            date: p.date,
        }))
        .array()
}

/**
 * Get all list items tagged #remember from session journals.
 * Returns raw DataviewJS list item objects for further processing in the calling view.
 */
export function getRememberItems() {
    const dv = app.plugins.getPlugin("dataview").api
    return dv.pages("#session-journal").file.lists
        .where(t => t.tags.includes("remember"))
        .array()
}

/**
 * Get sessions that mention the given file, with their content pre-loaded.
 * Each result includes a `mentions` array of lines that reference the file by name.
 * @param {string} filePath - Vault-relative path of the file to search for
 * @param {string} fileName - File name used to match lines in content (without extension)
 */
export async function getSessionsMentioningWithContent(filePath, fileName) {
    const sessions = getSessionsMentioning(filePath)
    const results = []

    for (const session of sessions) {
        const content = await app.vault.adapter.read(session.path)
        const mentions = content
            .split("\n")
            .filter(line => new RegExp(fileName).test(line))
            .map(line => line.replace(/^\s*-*\s*/, ""))
        results.push({ ...session, mentions })
    }

    return results
}
