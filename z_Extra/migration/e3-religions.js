// E3: deity notes and `religions` -> worships / cleric-of edges, per the DM's decisions (2026-11-17).
//   - New story-deity notes: Mother Night, Dark Powers of the Shadowfell, The Nameless God of Secrets
//     (worlds: Eldoria; gist and body empty: no lore invented).
//   - The Morninglord links straight to the compendium's Lathander; Eilistraee to her compendium note.
//   - Ceithlenn and Fiona's devil worship stay as text: one DM Notes line each.
//   - `religions` deleted from NPC and location notes; the NPC Religion(s) row derives from the edges.
// Usage: node e3-religions.js [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write, walk } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const readRel = p => fs.readFileSync(path.join(VAULT, p), 'utf8')

// ---- deity notes
const DEITIES = ['Mother Night', 'Dark Powers of the Shadowfell', 'The Nameless God of Secrets']
function include(src) {
  return src.replace(/^<% tp\.file\.include\("\[\[(z_Templates\/Partials\/[^\]]+)\]\]"\) %>$/gm, (_, p) => include(readRel(p + '.md')).trimEnd())
}
const src = readRel('z_Templates/Templater/World Building/Deity.md')
const fmClose = src.indexOf('\n---\n', src.indexOf('\n---\n') + 1) + 5
const deityBody = include(src.slice(fmClose, src.lastIndexOf('<%* } else { -%>'))).trimEnd() + '\n'
if (/<%/.test(deityBody)) throw new Error('Templater syntax left in the Deity body')
for (const name of DEITIES) {
  const rel = `4. World Almanac/Deities/${name}.md`
  if (fs.existsSync(path.join(VAULT, rel))) { console.log(`exists, skipped: ${rel}`); continue }
  const fm = ['obsidianUIMode: preview', 'worlds:', '  - "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"', 'mechanics: ""', 'title: ""', 'symbol: ""',
    'alignment: ""', 'domains: []', 'images: []', 'gist: ""', 'summary: ""', 'revealed: {}', 'reveal: {}', 'facts: []', 'relationships: []',
    'aliases: []', 'tags:', '  - story-deity']
  if (!dryRun) fs.writeFileSync(path.join(VAULT, rel), '---\n' + fm.join('\n') + '\n---\n' + deityBody)
  console.log(`${dryRun ? 'would create' : 'created'}: ${rel}`)
}

// ---- religions -> edges
const D = n => `[[4. World Almanac/Deities/${n}.md|${n}]]`
const LATHANDER = '[[5. Mechanics/Deities/Forgotten Realms Lathander.md|The Morninglord]]'
const MAP = {
  'The Morninglord': { target: LATHANDER, type: 'worships' },
  'Morninglord': { target: LATHANDER, type: 'cleric-of' },  // Donavich, the Morninglord's priest
  'Mother Night': { target: D('Mother Night'), type: 'worships' },
  '[[Drow Eilistraee (MTF)|Eilistraee]]': { target: '[[5. Mechanics/Deities/Drow Eilistraee (MTF).md|Eilistraee]]', type: 'worships' },
  'Dark Powers of the Shadowfell (pact)': { target: D('Dark Powers of the Shadowfell'), type: 'worships', note: 'pact' },
  'The nameless god of secrets': { target: D('The Nameless God of Secrets'), type: 'worships' },
  'Ceithlenn of the Crooked Teeth': { dm: true },
  'Devil worship (a cult of her own founding)': { dm: true },
}
const OLD_ROW = '> **Religion(s)** | `INPUT[inlineList:religions]` |'
const NEW_ROW = '> **Religion(s)** | `$= (dv.current().relationships ?? []).filter(r => r && ["worships","cleric-of"].includes(r.type)).map(r => r.target).join(", ")` |'

if (!dryRun) for (const m of Object.values(MAP)) if (m.target && !fs.existsSync(path.join(VAULT, /\[\[([^|\]]+)/.exec(m.target)[1]))) throw new Error('missing target ' + m.target)

let notes = 0, edges = 0, rows = 0, dmLines = 0
const problems = []
for (const file of walk(path.join(VAULT, '4. World Almanac'))) {
  const note = read(file)
  if (!note.doc || !note.doc.has('religions')) continue
  const rel = path.relative(VAULT, file)
  const vals = [].concat(note.doc.toJS().religions ?? []).filter(Boolean).map(String)
  const unknown = vals.filter(v => !MAP[v])
  if (unknown.length) { problems.push(`${rel}: no mapping for ${unknown.join('; ')}`); continue }
  const dm = []
  if (vals.length) {
    let rels = note.doc.get('relationships')
    if (!rels || !rels.items) { note.doc.set('relationships', note.doc.createNode([])); rels = note.doc.get('relationships') }
    const have = new Set((note.doc.toJS().relationships ?? []).filter(r => r && r.target).map(r => r.type + '|' + r.target))
    for (const v of vals) {
      const m = MAP[v]
      if (m.dm) { dm.push(v); continue }
      if (have.has(m.type + '|' + m.target)) continue
      const e = { target: m.target, type: m.type }
      if (m.note) e.note = m.note
      rels.items.push(note.doc.createNode(e)); have.add(m.type + '|' + m.target); edges++
    }
  }
  note.doc.delete('religions')
  const n = note.body.split(OLD_ROW).length - 1
  if (n === 1) { note.body = note.body.replace(OLD_ROW, NEW_ROW); rows++ }
  if (dm.length) {
    const h = '> > ## DM Notes\n'
    if (note.body.split(h).length !== 2) { problems.push(`${rel}: DM Notes heading not found once; kept: ${dm.join('; ')}`); continue }
    note.body = note.body.replace(h, h + dm.map(v => `> > Religion (from the old religions field): ${v}`).join('\n') + '\n> >\n')
    dmLines += dm.length
  }
  write(note, { dryRun })
  notes++
}
console.log(`${dryRun ? 'would change' : 'changed'} ${notes} notes: ${edges} edges, ${rows} rows, ${dmLines} DM Notes lines`)
if (problems.length) console.log('problems:\n  ' + problems.join('\n  '))
