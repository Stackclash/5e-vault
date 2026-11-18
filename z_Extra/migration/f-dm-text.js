// F (DM, 2026-11-17): move DM text where it belongs. Wording unchanged; only position, the callout prefix,
// and heading levels change. Frontmatter untouched.
//  F-4  Izek: delete the superseded 2026-09-05 design (heading, stat-block redesign, CR math, solo action economy)
//  F-1  all 70 (COS) NPCs: the trailing "## Source" block moves to the end of DM tab > ### General Notes
//       (## -> ####, ### -> #####, every line prefixed "> > ")
//  F-2  journals S6-S12: "## Session Prep:" through the end of the notes, wrapped in a collapsed [!dm] callout
//  F-3d/e S45: the Tallyman and soul-vessel-core lines wrapped in place in [!dm] callouts
//  F-6  Duskferry: "Not yet visited by the party." -> "The party visited in S46."
// Usage: node f-dm-text.js [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const NPCS = '4. World Almanac/NPCs'
const J = '1. DM Toolkit/Session Journals/The Hunt for Vecna'
let changed = 0
function save(note, label) { if (write(note, { dryRun })) changed++; console.log(`${dryRun ? '[dry] ' : ''}${label}`) }
function swap(text, from, to, where) {
  const n = text.split(from).length - 1
  if (n !== 1) throw new Error(`${where}: expected 1 match, found ${n}: ${from.slice(0, 70)}`)
  return text.replace(from, () => to)
}
const editAllIndex = L => { const i = L.lastIndexOf('label: Edit all') - 1; if (L[i] !== '```meta-bind-button') throw new Error('no Edit all button'); return i }

// F-4 then F-1
for (const f of fs.readdirSync(path.join(VAULT, NPCS)).filter(f => f.endsWith('(COS).md'))) {
  const note = read(path.join(VAULT, NPCS, f))
  let L = note.body.split('\n')
  if (f === 'Izek Strazni (COS).md') {
    const a = L.indexOf('> > **Previous design (2026-09-05), superseded:**')
    const b = L.findIndex(l => l.startsWith('> > **His Barovia-era stat block**'))
    if (a < 0 || b < a || !L[a + 2].startsWith('> > **Stat block redesign (2026-09-05).**') || !L[b - 2].startsWith('> > **Solo action economy**'))
      throw new Error('Izek superseded block not as expected')
    L.splice(a, b - a)
  }
  const s = L.indexOf('## Source'), e = editAllIndex(L)
  const gn = L.indexOf('> > ### General Notes')
  if (s < 0 || gn < 0) throw new Error(f + ': anchors missing')
  let ge = gn; while (L[ge + 1]?.startsWith('>')) ge++
  if (ge > s) throw new Error(f + ': General Notes after Source')
  const tail = L.slice(s, e); while (tail.length && !tail[tail.length - 1].trim()) tail.pop()
  if (tail.some(l => l.startsWith('```'))) throw new Error(f + ': code fence in moved block')
  const moved = tail.map(l => {
    const h = /^(#{2,3}) (.*)$/.exec(l)
    if (h) return `> > ${'#'.repeat(h[1].length + 2)} ${h[2]}`
    return l.trim() ? '> > ' + l : '> >'
  })
  L.splice(s, e - s)                                   // remove from below the tabs
  L.splice(ge + 1, 0, '> >', ...moved)                 // append to General Notes
  note.body = L.join('\n')
  save(note, `${f}: Source block (${tail.length} lines) -> General Notes`)
}

// F-2
for (const n of [6, 7, 8, 9, 10, 11, 12]) {
  const f = fs.readdirSync(path.join(VAULT, J)).find(x => x.startsWith(`S${n} `))
  const note = read(path.join(VAULT, J, f))
  const L = note.body.split('\n')
  const s = L.indexOf('## Session Prep:'), e = editAllIndex(L)
  if (s < 0 || L.slice(e + 1).some(l => l.startsWith('## '))) throw new Error(f + ': prep anchors')
  const run = L.slice(s, e); while (run.length && !run[run.length - 1].trim()) run.pop()
  L.splice(s, run.length, '> [!dm]- Session prep (leftover)', ...run.map(l => l.trim() ? '> ' + l : '>'))
  note.body = L.join('\n')
  save(note, `${f}: prep (${run.length} lines) wrapped`)
}

// F-3d, F-3e
{
  const f = fs.readdirSync(path.join(VAULT, J)).find(x => x.startsWith('S45 '))
  const note = read(path.join(VAULT, J, f))
  for (const start of ["- The Tallyman's real identity is [[Ostwin Reyes]]", '- **DM-only:** the amber-cored device']) {
    const L = note.body.split('\n')
    const i = L.findIndex(l => l.startsWith(start))
    if (i < 0 || L.filter(l => l.startsWith(start)).length !== 1) throw new Error('S45 line not found: ' + start)
    const before = L[i - 1].trim() ? [''] : [], after = L[i + 1]?.trim() ? [''] : []
    L.splice(i, 1, ...before, '> [!dm]', '> ' + L[i], ...after)
    note.body = L.join('\n')
  }
  save(note, `${f}: 2 lines wrapped`)
}

// F-6
{
  const note = read(path.join(VAULT, '4. World Almanac/Settlements/Duskferry.md'))
  note.body = swap(note.body, ' Not yet visited by the party.', ' The party visited in S46.', 'F-6')
  save(note, 'Duskferry: visited in S46')
}
console.log(`${dryRun ? '[dry] ' : ''}${changed} files`)
