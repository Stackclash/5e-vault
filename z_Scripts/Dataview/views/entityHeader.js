// Shared note header (04 Expansion §2.1): breadcrumb, images, name, pronounced, state chips, knowledge badge.
// Reads frontmatter only. Chips are Meta Bind inputs (Q1); per-party fields use the active party's key.
// Usage: `$= await dv.view('views/entityHeader', {current: dv.current()})` or a dataviewjs block.
const { getLocationBreadcrumbs } = await self.require.import("z_Scripts/Dataview/data/locations.js")
const { getLinkPath } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")
const { generateMetaBindInput } = await self.require.import("z_Scripts/Dataview/utils/generateMetaBindInput.js")

const current = input.current
const config = dv.page("Configuration")
const campaign = dv.page(getLinkPath(config?.active_campaign) ?? "")
const partyPage = dv.page(getLinkPath(campaign?.party) ?? "")
const party = partyPage?.file.name ?? ""
const enums = config?.enums ?? {}

const TYPES = ["npc", "region", "settlement", "place-of-interest", "shop", "world", "faction", "story-item",
    "story-deity", "story-creature", "quest", "player", "party", "session-journal", "session-prep", "campaign"]
const LOCATION_TYPES = ["region", "settlement", "place-of-interest", "shop", "world"]
const ENTITY_TYPES = ["npc", "region", "settlement", "place-of-interest", "shop", "faction", "story-item",
    "story-deity", "story-creature", "quest"]
const tags = (current.file.tags ?? []).map(t => t.replace(/^#/, ""))
const type = TYPES.find(t => tags.includes(t))

// Chips until Configuration.note_fields exists (C6); after that, `chip: true` entries win.
const DEFAULT_CHIPS = {
    npc: [{ field: "condition", input: "inlineSelect", enum: "npc_conditions" },
          { field: "party_relationships", input: "inlineSelect", enum: "party_relationships", per_party: true }],
    region: [{ field: "status", input: "inlineSelect", enum: "location_statuses" }],
    settlement: [{ field: "status", input: "inlineSelect", enum: "location_statuses" }],
    "place-of-interest": [{ field: "status", input: "inlineSelect", enum: "location_statuses" }],
    shop: [{ field: "status", input: "inlineSelect", enum: "location_statuses" }],
    faction: [{ field: "standing", input: "inlineSelect", enum: "party_standings", per_party: true },
              { field: "status", input: "inlineSelect", enum: "faction_statuses" }],
    quest: [{ field: "active", input: "toggle", per_party: true, label: "Active" },
            { field: "completed", input: "toggle", per_party: true, label: "Completed" }],
    "session-journal": [{ field: "party_level", input: "number", label: "Party level" },
                        { field: "wrapped", input: "toggle", label: "Wrapped" }],
}
const PER_PARTY = new Set(["party_relationships", "standing", "renown", "active", "completed"])
const configured = (config?.note_fields?.[type] ?? []).filter(f => f.chip)
const chips = configured.length ? configured : (DEFAULT_CHIPS[type] ?? [])

const label = f => f.label ?? f.field.replace(/_/g, " ").replace(/^./, c => c.toUpperCase())
const chipMarkdown = f => {
    const perParty = f.per_party ?? PER_PARTY.has(f.field)
    if (perParty && !party) return ""
    const options = f.enum ? (enums[f.enum] ?? []).map(o => `option(${o})`) : []
    const input = generateMetaBindInput({ type: f.input ?? "text", options, field: perParty ? [f.field, party] : f.field })
    return `<span class="entity-chip"><span class="entity-chip-label">${label(f)}</span> ${input}</span>`
}

function linkMd(page) { return page ? `[[${page.file.path}|${page.file.name}]]` : "" }
function breadcrumb() {
    if (LOCATION_TYPES.includes(type)) return getLocationBreadcrumbs(current.file.path).slice(0, -1)
        .map(b => `[[${b.path}|${b.name}]]`)
    if (["npc", "faction", "story-item", "story-creature"].includes(type) && current.location) {
        const at = getLinkPath(current.location)
        return at ? getLocationBreadcrumbs(at).map(b => `[[${b.path}|${b.name}]]`) : []
    }
    if (type === "quest") {
        const chain = []
        let p = dv.page(getLinkPath(current.parent) ?? "")
        while (p && chain.length < 6) { chain.unshift(linkMd(p)); p = dv.page(getLinkPath(p.parent) ?? "") }
        return chain.length ? chain : [linkMd(campaign)]
    }
    if (type === "player") return [linkMd(dv.page(getLinkPath(current.party) ?? ""))]
    if (type === "party") return [linkMd(dv.pages("#campaign").where(c => getLinkPath(c.party) === current.file.path).first())]
    if (type === "session-journal") return [linkMd(campaign), linkMd(dv.page(getLinkPath(current.party) ?? ""))]
    if (type === "session-prep") return [linkMd(dv.page(current.file.folder.split("/").pop()) ?? campaign)]
    if (type === "campaign") return [linkMd(dv.page(getLinkPath(current.world) ?? ""))]
    return []
}

// Knowledge badge: a Revealed toggle for the active party (manual control; off writes false = held back)
// plus the learned-facts count.
function badge() {
    if (!ENTITY_TYPES.includes(type) || !party) return ""
    const revealed = current.revealed?.[party] === true
    const facts = Array.isArray(current.facts) ? current.facts : []
    const learned = facts.filter(f => f?.learned?.[party]).length
    const toggle = generateMetaBindInput({ type: "toggle", field: ["revealed", party] })
    return `<span class="knowledge-badge ${revealed ? "is-revealed" : "is-hidden"}">${revealed ? "Revealed" : "Hidden"} ${toggle}${revealed ? ` · ${learned} of ${facts.length} facts learned` : ""}</span>`
}

function imagesMd() {
    let images = current.images ?? (typeof current.image === "string" && current.image ? [current.image] : [])
    if (typeof images === "string") images = images.trim() ? [images] : []
    images = images.filter(i => typeof i === "string" && i.trim()).map(i => i.replaceAll("\\", "/"))
    return images.length ? "```carousel\nheight: 15rem\nimages: " + images.join(",") + "\n```" : ""
}

const crumbs = breadcrumb().filter(Boolean)
const root = dv.el("div", "", { cls: "entity-header" })
if (crumbs.length) dv.el("div", crumbs.join(" › "), { cls: "entity-breadcrumb", container: root })
const img = imagesMd()
if (img) dv.el("div", img, { cls: "entity-images", container: root })
dv.el("h1", current.file.name, { cls: "entity-name", container: root })
dv.el("div", "`INPUT[text(placeholder(pronounced)):pronounced]`", { cls: "entity-pronounced", container: root })
// Per-party select chips get a clear button: it deletes the party's key so the value goes back to unset.
async function clearPartyKey(field) {
    const file = app.vault.getAbstractFileByPath(current.file.path)
    await app.fileManager.processFrontMatter(file, fm => {
        if (fm[field] && typeof fm[field] === "object") delete fm[field][party]
    })
}
const chipsEl = dv.el("div", "", { cls: "entity-chips", container: root })
for (const f of chips) {
    const md = chipMarkdown(f)
    if (!md) continue
    const el = dv.el("span", md, { container: chipsEl })
    const perParty = f.per_party ?? PER_PARTY.has(f.field)
    if (perParty && f.input !== "toggle" && current[f.field]?.[party] != null) {
        const btn = el.createEl("button", { cls: "entity-chip-clear", text: "×", attr: { "aria-label": `Clear ${label(f)}` } })
        btn.onclick = () => clearPartyKey(f.field)
    }
}
const b = badge()
if (b) dv.el("span", b, { container: chipsEl })
