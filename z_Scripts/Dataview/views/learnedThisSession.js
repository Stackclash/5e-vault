// Facts and relationship ties whose `learned` link points at this journal, for the active party.
const { getLinkPath } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")
const here = input.current.file.path
const config = dv.page("Configuration")
const party = dv.page(getLinkPath(dv.page(getLinkPath(config?.active_campaign) ?? "")?.party) ?? "")?.file.name ?? ""
const isHere = v => { const p = getLinkPath(v); return p && dv.page(p)?.file.path === here }
const rows = []
for (const p of dv.pages('#npc or #location or #faction or #story-item or #story-deity or #story-creature or #quest')) {
  for (const f of (Array.isArray(p.facts) ? p.facts : [])) if (f?.learned && isHere(f.learned[party])) rows.push([p.file.link, f.text])
  for (const r of (Array.isArray(p.relationships) ? p.relationships : [])) if (r && typeof r === "object" && r.learned && isHere(r.learned[party]))
    rows.push([p.file.link, `${r.type} → ${dv.page(getLinkPath(r.target) ?? "")?.file.link ?? r.target}`])
}
if (rows.length) dv.table(["About", "Learned"], rows)
else dv.paragraph("*Nothing marked as learned in this session yet.*")
