// Campaign "Now" panel: latest session, in-world date, active quests for the campaign's party.
const { getLinkPath } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")
const cur = input.current
const party = dv.page(getLinkPath(cur.party) ?? "")?.file.name ?? ""
const journals = dv.pages("#session-journal").where(j => getLinkPath(j.party) === getLinkPath(cur.party) && j.session_number != null)
  .sort(j => j.session_number, "desc").array()
const last = journals[0]
const quests = dv.pages("#quest").where(q => party && q.active?.[party] && !q.completed?.[party]).sort(q => q.file.name).array()
const lines = [
  `**Latest session** ${last ? last.file.link : "—"}`,
  `**In-world date** ${last ? (last["fc-end"] || last["fc-date"] || "—") : "—"}`,
  `**Active quests** ${quests.length ? quests.map(q => q.file.link).join(", ") : "—"}`,
]
dv.el("div", lines.join("<br>"))
