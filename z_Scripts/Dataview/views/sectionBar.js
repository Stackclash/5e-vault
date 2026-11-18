// One line of links to the note's level-2 headings (prose notes: campaign, journal, prep; 04 Expansion §2.2).
// Usage: `$= await dv.view('views/sectionBar', {current: dv.current()})`
const file = app.vault.getAbstractFileByPath(input.current.file.path)
const headings = (app.metadataCache.getFileCache(file)?.headings ?? []).filter(h => h.level === (input.level ?? 2))
if (headings.length) dv.el("div", headings.map(h => `[[#${h.heading}|${h.heading}]]`).join(" · "), { cls: "section-bar" })
