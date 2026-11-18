// E5: write DM-accepted relationship edges drawn from prose. Edges carry no `learned`; prose is untouched.
// A "replace" edge changes the type of the existing edge to that target (in place) instead of adding one.
// Usage: node e5-edges.js <sitting.json> [--dry-run]
// sitting.json: [{ "source": "<NPC note name>", "type": "...", "target": "[[full/path.md|Name]]", "note"?: "...", "replace"?: "member" }]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const list = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
const types = (read(path.join(VAULT, '1. DM Toolkit/Configuration.md')).doc.toJS().relationship_types || []).map(t => t.type)
const bySource = {}
for (const e of list) {
  if (!types.includes(e.type)) throw new Error('unknown type ' + e.type)
  if (!fs.existsSync(path.join(VAULT, /\[\[([^|\]]+)/.exec(e.target)[1]))) throw new Error('missing target ' + e.target)
  ;(bySource[e.source] ??= []).push(e)
}
let added = 0, replaced = 0
for (const [source, edges] of Object.entries(bySource)) {
  const file = path.join(VAULT, '4. World Almanac/NPCs', source + '.md')
  const note = read(file)
  let rels = note.doc.get('relationships')
  if (!rels || !rels.items) { note.doc.set('relationships', note.doc.createNode([])); rels = note.doc.get('relationships') }
  for (const e of edges) {
    if (e.replace) {
      const item = rels.items.find(it => it.get && it.get('target') === e.target && it.get('type') === e.replace)
      if (!item) throw new Error(`${source}: no ${e.replace} edge to ${e.target} to replace`)
      item.set('type', e.type); if (e.note) item.set('note', e.note); replaced++
    } else {
      if (rels.items.some(it => it.get && it.get('target') === e.target && it.get('type') === e.type)) continue
      const n = { target: e.target, type: e.type }; if (e.note) n.note = e.note
      rels.items.push(note.doc.createNode(n)); added++
    }
  }
  write(note, { dryRun })
}
console.log(`${dryRun ? 'would write' : 'wrote'}: ${added} added, ${replaced} retyped, ${Object.keys(bySource).length} notes`)
