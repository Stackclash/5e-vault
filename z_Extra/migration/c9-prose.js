// C9, prose notes (campaign, session journals, session prep): add the current template's right-hand panel,
// shared header, and section bar; leave every line of the existing prose byte-identical.
//   - An old top infobox is replaced by the new panel, but only if every line of it is input scaffolding.
//   - A "# `=this.file.name`" title line right after it is dropped: the shared header shows the name.
//   - The template's hidden meta-bind-button definitions (Edit all, Wrap session) are appended if the note
//     does not define that id already.
// Frontmatter is untouched. Usage: node c9-prose.js [--write] [--type session-journal] [--only "<name>"]
const fs = require('fs')
const path = require('path')
const { VAULT } = require('./fm')

const arg = k => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : null }
const write = process.argv.includes('--write')
const read = p => fs.readFileSync(path.join(VAULT, p), 'utf8')
const TPL = {
  'session-journal': 'z_Templates/Templater/DM Prep/Session Journal.md',
  'session-prep': 'z_Templates/Templater/DM Prep/Session Prep.md',
  campaign: 'z_Templates/Templater/Campaign/Campaign.md',
}
const DIRS = ['1. DM Toolkit/Session Journals', '1. DM Toolkit/Session Prep', '1. DM Toolkit/Campaigns']

function parts(type) {
  const src = read(TPL[type])
  const fmClose = src.indexOf('\n---\n', src.indexOf('\n---\n') + 1) + 5
  const lines = src.slice(fmClose, src.lastIndexOf('<%* } else { -%>')).split('\n')
  let i = 0
  while (i < lines.length && lines[i].startsWith('>')) i++
  const panel = lines.slice(0, i)
  const bar = lines.findIndex(l => l.includes("views/sectionBar"))
  if (!panel.length || bar < 0) throw new Error(`${type}: template panel or section bar not found`)
  const header = lines.slice(i, bar + 1)
  while (header.length && !header[0].trim()) header.shift()
  const buttons = []
  for (let j = 0; j < lines.length; j++) if (lines[j] === '```meta-bind-button') {
    const end = lines.indexOf('```', j + 1)
    const block = lines.slice(j, end + 1)
    buttons.push({ id: (block.find(l => l.startsWith('id: ')) || '').slice(4).trim(), block })
    j = end
  }
  const body = lines.join('\n')
  if (/<%/.test(panel.join('\n') + header.join('\n'))) throw new Error(`${type}: Templater syntax in the panel or header`)
  return { panel, header, buttons, body }
}

// A line of an old infobox that is only scaffolding: headings, table rules, labels with inputs or views.
const SCAFFOLD = l => /^>\s*$/.test(l) || /^>\s*#{1,6}\s/.test(l) || /^>\s*\|?\s*\|\s*\|?\s*$/.test(l) || /^>\s*\|?\s*-{3}\|-{3}\|?\s*$/.test(l)
  || /^>\s*\|?\s*-+\s*\|\s*-+\s*\|?\s*$/.test(l) || /^> \[!infobox[^\]]*\]\s*$/.test(l) || /INPUT\[|`\$=|BUTTON\[/.test(l)

function reskin(rel, type) {
  const raw = read(rel)
  const m = /^---\n[\s\S]*?\n---[ \t]*\n/.exec(raw)
  if (!m) throw new Error('no frontmatter')
  const fmText = m[0]
  let body = raw.slice(fmText.length)
  if (/views\/entityHeader/.test(body)) return { skip: 'already re-skinned' }
  const t = parts(type)
  const lines = body.split('\n')
  let start = 0
  const removed = []
  if (/^> \[!infobox/.test(lines[0] || '')) {
    while (start < lines.length && lines[start].startsWith('>')) start++
    const box = lines.slice(0, start)
    const odd = box.filter(l => !SCAFFOLD(l))
    if (odd.length) return { skip: `old infobox has non-input lines: ${odd.slice(0, 2).join(' / ')}` }
    removed.push(...box)
  }
  while (start < lines.length && !lines[start].trim()) start++
  if (/^# `=this\.file\.name`\s*$/.test(lines[start] || '')) { removed.push(lines[start]); start++ }
  const rest = lines.slice(start).join('\n')
  const buttons = t.buttons.filter(b => b.id && !new RegExp(`^id: ${b.id}\\s*$`, 'm').test(body))
  const out = [...t.panel, ...t.header, '', rest.replace(/\n+$/, ''), '', ...buttons.flatMap(b => b.block)].join('\n') + '\n'
  // Safety: the kept prose is the old body minus only the removed scaffolding, byte for byte.
  if (!out.includes(rest.replace(/\n+$/, ''))) throw new Error('prose not carried over intact')
  return { text: fmText + out, removed: removed.length, buttons: buttons.map(b => b.id) }
}

function walk(rel, out = []) {
  for (const e of fs.readdirSync(path.join(VAULT, rel), { withFileTypes: true })) {
    const r = path.posix.join(rel, e.name)
    if (e.isDirectory()) walk(r, out); else if (r.endsWith('.md')) out.push(r)
  }
  return out
}
const typeOf = raw => {
  const m = /^---\n([\s\S]*?)\n---/.exec(raw)
  const tags = m ? [...m[1].matchAll(/^\s*-\s*([a-z-]+)\s*$/gm)].map(x => x[1]) : []
  return Object.keys(TPL).find(t => tags.includes(t))
}
const onlyType = arg('--type'), onlyName = arg('--only')
const counts = {}
for (const rel of DIRS.flatMap(d => walk(d))) {
  const raw = read(rel)
  const type = typeOf(raw)
  if (!type || (onlyType && type !== onlyType) || (onlyName && path.posix.basename(rel, '.md') !== onlyName)) continue
  if (/^wrapped: true\s*$/m.test(raw)) { (counts[type] ??= { done: 0, skipped: [] }).skipped.push(`${path.posix.basename(rel, '.md')} (wrapped: ask the DM)`); continue }
  let r
  try { r = reskin(rel, type) } catch (e) { r = { skip: 'error: ' + e.message } }
  const c = counts[type] ??= { done: 0, skipped: [] }
  if (r.skip) { c.skipped.push(`${path.posix.basename(rel, '.md')} (${r.skip})`); continue }
  c.done++
  if (onlyName) console.log(`  ${rel} — removed ${r.removed} scaffold line(s); buttons ${r.buttons.join(', ') || 'none'}`)
  if (write) fs.writeFileSync(path.join(VAULT, rel), r.text)
  else if (onlyName && arg('--preview')) fs.writeFileSync(arg('--preview'), r.text)
}
for (const [t, c] of Object.entries(counts)) console.log(`${t}: ${c.done} ${write ? 'written' : 'ready'}${c.skipped.length ? `; skipped ${c.skipped.length}: ${c.skipped.join('; ')}` : ''}`)
