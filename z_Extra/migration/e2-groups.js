// E2: `groups` strings -> relationship edges per the E1 table the DM approved (2026-11-17); delete `groups`.
// Body: the Group(s) infobox row becomes a Faction(s) row derived from the edges. Strings with no faction
// (the DM chose to keep them as text) go to one line under "> > ## DM Notes". Usage: node e2-groups.js [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write, walk, keyOf } = require('./fm')
const dryRun = process.argv.includes('--dry-run')

const F = n => `[[4. World Almanac/Factions/${n}.md|${n}]]`
const P = n => `[[4. World Almanac/Places of Interest/${n}.md|${n}]]`
const MAP = {
  'Abbey of Saint Markovia': { target: P('Abbey of Saint Markovia'), type: 'home' },
  "Baron Vallakovich's household (former)": { target: F('House Vallakovich'), type: 'former-member', note: "Baron Vallakovich's household" },
  'Belview family': { target: F('Belview Family'), type: 'member' },
  'Children of Mother Night': { target: F('Children of Mother Night'), type: 'member' },
  'Circle of Eight': { target: F('Circle of Eight'), type: 'member' },
  'Clergy of the Morninglord': { target: F('Clergy of the Morninglord'), type: 'member' },
  'Durst Family': { target: F('Durst Family'), type: 'member' },
  'Dusk elves (last of)': { target: F('Dusk Elves of Barovia'), type: 'member', note: 'last of' },
  'Dusk elves of Barovia': { target: F('Dusk Elves of Barovia'), type: 'member' },
  'Dusk Elves of Duskferry': { target: F('Dusk Elves of Duskferry'), type: 'member' },
  "Ferrymen's Guild": { target: F("Ferrymen's Guild"), type: 'member' },
  'Fiona Wachter’s Cult': { target: F('House Wachter'), type: 'member', note: "Fiona Wachter's cult" },
  'Gloaming Court': { target: F('Gloaming Court'), type: 'member' },
  'House Petrovich': { target: F('House Petrovich'), type: 'member' },
  'House Vallakovich': { target: F('House Vallakovich'), type: 'member' },
  'House von Zarovich': { target: F('House von Zarovich'), type: 'member' },
  'House Wachter': { target: F('House Wachter'), type: 'member' },
  'Keepers of the Feather': { target: F('Keepers of the Feather'), type: 'member' },
  'Keepers of the Feather (ally)': { target: F('Keepers of the Feather'), type: 'ally' },
  'Loyalists of House von Zarovich': { target: F('House von Zarovich'), type: 'member', note: 'loyalist' },
  "Morgantha's Coven": { target: F("Morgantha's Coven"), type: 'member' },
  'Order of the Silver Dragon': { target: F('Order of the Silver Dragon'), type: 'member' },
  'Silent Ascendency': { target: F('Silent Ascendency'), type: 'member' },
  "St. Andral's Church": { target: P("St. Andral's Church"), type: 'works-at' },
  "Strahd's brides": { target: F("Strahd's Brides"), type: 'member' },
  'The Unbroken Circle': { target: F('The Unbroken Circle'), type: 'member' },
  'Umbral Athenaeum Council': { target: F('Umbral Athenaeum Council'), type: 'member' },
  'Vallaki wolf hunters': { target: F('Vallaki Wolf Hunters'), type: 'member' },
  'Vistani (adopted)': { target: F('Vistani'), type: 'member', note: 'adopted' },
  'Vistani (Tser Pool camp)': { target: F('Vistani'), type: 'member', note: 'Tser Pool camp' },
  'Vistani (Vallaki camp, allied)': { target: F('Vistani'), type: 'member', note: 'Vallaki camp, allied' },
  'Vistani (Vallaki camp)': { target: F('Vistani'), type: 'member', note: 'Vallaki camp' },
  'Von Zarovich family (honorary)': { target: F('House von Zarovich'), type: 'member', note: 'honorary family' },
  "Vecna's claimed": { dm: true },
  "Jakarion's expedition (Amber Temple)": { dm: true },
  "The Amber Temple's original order of wizards (last survivor)": { dm: true },
}
const OLD_ROW = '> **Group(s)** | `INPUT[inlineList:groups]` |'
const NEW_ROW = '> **Faction(s)** | `$= (dv.current().relationships ?? []).filter(r => r && ["member","leader","founder","agent","former-member"].includes(r.type)).map(r => r.target).join(", ")` |'

for (const [, m] of Object.entries(MAP)) if (m.target && !fs.existsSync(path.join(VAULT, /\[\[([^|\]]+)/.exec(m.target)[1]))) throw new Error('missing target ' + m.target)

let notes = 0, edges = 0, dmLines = 0, rows = 0
const problems = []
for (const file of walk(path.join(VAULT, '4. World Almanac/NPCs'))) {
  const note = read(file)
  if (!note.doc || !note.doc.has('groups')) continue
  const rel = path.relative(VAULT, file)
  const groups = [].concat(note.doc.toJS().groups ?? []).filter(Boolean).map(String)
  const unknown = groups.filter(g => !MAP[g])
  if (unknown.length) { problems.push(`${rel}: no mapping for ${unknown.join('; ')}`); continue }
  let rels = note.doc.get('relationships')
  if (!rels || !rels.items) { note.doc.set('relationships', note.doc.createNode([])); rels = note.doc.get('relationships') }
  const have = new Set((note.doc.toJS().relationships ?? []).filter(r => r && r.target).map(r => r.type + '|' + r.target))
  const dm = []
  for (const g of groups) {
    const m = MAP[g]
    if (m.dm) { dm.push(g); continue }
    if (have.has(m.type + '|' + m.target)) continue
    const e = { target: m.target, type: m.type }
    if (m.note) e.note = m.note
    rels.items.push(note.doc.createNode(e)); have.add(m.type + '|' + m.target); edges++
  }
  note.doc.delete('groups')
  const n = note.body.split(OLD_ROW).length - 1
  if (n === 1) { note.body = note.body.replace(OLD_ROW, NEW_ROW); rows++ }
  else if (n > 1) problems.push(`${rel}: Group(s) row found ${n} times; body row left`)
  if (dm.length) {
    const h = '> > ## DM Notes\n'
    if (note.body.split(h).length !== 2) { problems.push(`${rel}: DM Notes heading not found once; kept groups text: ${dm.join('; ')}`); continue }
    note.body = note.body.replace(h, h + dm.map(g => `> > Group (from the old groups field): ${g}`).join('\n') + '\n> >\n')
    dmLines += dm.length
  }
  write(note, { dryRun })
  notes++
}
console.log(`${dryRun ? 'would change' : 'changed'} ${notes} NPCs: ${edges} edges, ${rows} rows, ${dmLines} DM Notes lines`)
if (problems.length) console.log('problems:\n  ' + problems.join('\n  '))
