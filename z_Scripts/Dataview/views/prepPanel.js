// Session prep side panel: where we left off, plan in play, spotlight lately, live logs.
const { getLinkPath } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")
const config = dv.page("Configuration")
const campaign = dv.page(getLinkPath(config?.active_campaign) ?? "")
const partyPath = getLinkPath(campaign?.party)
const party = dv.page(partyPath ?? "")?.file.name ?? ""
const journals = dv.pages("#session-journal").where(j => getLinkPath(j.party) === partyPath && j.session_number != null)
  .sort(j => j.session_number, "desc").array()
const last = journals[0]
const quests = dv.pages("#quest").where(q => party && q.active?.[party] && !q.completed?.[party]).sort(q => q.file.name).array()
const spotlight = journals.slice(0, 3).flatMap(j => (j.spotlight ?? []).map(s => dv.page(getLinkPath(s) ?? "")?.file.link ?? s))
const logs = dv.pages('"2. Scratch Notes"').where(p => /Live Session/i.test(p.file.name)).sort(p => p.file.name, "desc").limit(3).array()
dv.el("div", [
  `**Where we left off** ${last ? `${last.file.link}${last.summary ? ` — ${String(last.summary).slice(0, 160)}` : ""}` : "—"}`,
  `**Plan in play** ${quests.length ? quests.map(q => q.file.link).join(", ") : "—"}`,
  `**Spotlight lately** ${spotlight.length ? [...new Set(spotlight.map(String))].join(", ") : "— (no spotlight recorded)"}`,
  `**Live logs** ${logs.length ? logs.map(l => l.file.link).join(", ") : "—"}`,
].join("<br>"))
