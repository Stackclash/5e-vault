// Shared reader for Configuration.note_fields (one field list per note type; 04 Expansion §2.6).
// ESM: import with self.require.import("z_Scripts/Dataview/utils/noteFields.js").

export const TYPES = ["npc", "region", "settlement", "place-of-interest", "shop", "world", "faction", "story-item",
    "story-deity", "story-creature", "quest", "player", "party", "session-journal", "session-prep", "campaign"]

/** Canonical note type from a page's tags (Dataview page or plain frontmatter tags array). */
export function noteType(tags) {
    const list = (tags ?? []).map(t => String(t).replace(/^#/, ""))
    return TYPES.find(t => list.includes(t)) ?? null
}

/** The note_fields entries for a type ([] if none). */
export function fieldsFor(config, type) {
    return config?.note_fields?.[type] ?? []
}

/** Option values for an entry's enum: Configuration.enums[key], or the `name`s of a top-level list. */
export function enumOptions(config, key) {
    if (!key) return []
    const fromEnums = config?.enums?.[key]
    if (Array.isArray(fromEnums)) return fromEnums.map(String)
    const list = config?.[key]
    if (Array.isArray(list)) return [...new Set(list.map(o => (o && typeof o === "object" ? o.name : o)).filter(Boolean).map(String))]
    return []
}

/** Meta Bind input markdown for one entry. Per-party fields bind to [field][party]. */
export function inputMarkdown(config, entry, party) {
    const args = []
    if (entry.enum) args.push(...enumOptions(config, entry.enum).map(o => `option(${o})`))
    if (entry.source) args.push(`optionQuery(${entry.source})`)
    const target = entry.per_party
        ? `["${entry.field}"]["${party}"]`
        : entry.field
    return `\`INPUT[${entry.input}${args.length ? `(${args.join(", ")})` : ""}:${target}]\``
}

export function labelFor(entry) {
    return entry.label ?? entry.field.replace(/_/g, " ").replace(/^./, c => c.toUpperCase())
}
