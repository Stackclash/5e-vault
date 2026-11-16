// DM tab content (secrets field dropped 2026-11-16): the facts the active party has not learned,
// and, until batch F moves it to `## DM Notes`, any legacy `secrets` text as an editable box.
const { getLinkPath } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")
const current = input.current
const config = dv.page("Configuration")
const party = dv.page(getLinkPath(dv.page(getLinkPath(config?.active_campaign) ?? "")?.party) ?? "")?.file.name ?? ""

const facts = (Array.isArray(current.facts) ? current.facts : [])
  .filter(f => f && f.text && !(party && f.learned?.[party]))
dv.paragraph("**Not yet learned**")
if (facts.length) dv.list(facts.map(f => f.text + (f.locked ? " *(locked)*" : "")))
else dv.paragraph("*Every fact is learned, or there are none yet.*")

if (typeof current.secrets === "string" && current.secrets.trim()) {
  dv.paragraph("**Secrets (legacy: moves to `## DM Notes` in batch F)**")
  dv.paragraph("`INPUT[textArea:secrets]`")
}
dv.paragraph("*Other DM-only prose (motives, plans, contingencies) goes under `## DM Notes` below the tabs.*")
