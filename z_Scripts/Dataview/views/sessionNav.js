// Previous / next session links for a journal, by session_number within the same folder.
const cur = input.current
const journals = dv.pages(`"${cur.file.folder}"`).where(p => (p.file.tags ?? []).includes("#session-journal") && p.session_number != null)
  .sort(p => p.session_number).array()
const i = journals.findIndex(p => p.file.path === cur.file.path)
const prev = i > 0 ? journals[i - 1] : null
const next = i >= 0 && i < journals.length - 1 ? journals[i + 1] : null
dv.el("div", [prev ? `← ${prev.file.link}` : "", next ? `${next.file.link} →` : ""].filter(Boolean).join("  ·  "), { cls: "session-nav" })
