// G2 (DM-accepted lines only): apply one sitting's spec. Usage: node g2-apply.js <spec.json> [--dry-run]
// spec: {
//   journals: { "<journal name>": { add: {field: [vault path]}, remove: {field: [vault path]}, party: true, dedupe: true, body: "<new-sections file>", wrap: true } },
//   entities: { "<vault path>": { summary: "..." | "keep", public_name: "...", reveal: [fields], edges: [{ type, target: "<vault path>", learned: "<journal name>" }] } },
//   held_back: ["<vault path>"]
// }
// Paths are vault-relative with .md. Ledger links get the file's basename as alias. Edges are matched by type and target path.
// body replaces the template filler (or the text in the journal's "filler" file) (Key Learnings / Items Of Importance / What Happened) with the file's text; it must occur once.
const fs = require('fs')
const path = require('path')
const { VAULT, read, write, keyOf } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const specFile = process.argv[2]
const spec = JSON.parse(fs.readFileSync(specFile, 'utf8'))
const P = 'Midnight Covenant'
const J = '1. DM Toolkit/Session Journals/The Hunt for Vecna'
const PCS = ['Faerah Duskrane', 'Marin', 'Redgrave', "Seluvis Felo'melorn", 'Yevelda Ovak'].map(n => `3. The Party/Players/${n}.md`)
const FILLER = '## Key Learnings\nDescription of any important information that the party learned.\nWho Did They Meet?\n\n## Items Of Importance\nDescription\n\n## What Happened\nSmall description.\n'

const exists = rel => { if (!fs.existsSync(path.join(VAULT, rel))) throw new Error('missing ' + rel); return rel }
const link = rel => `[[${exists(rel)}|${path.basename(rel, '.md')}]]`
const linkPath = l => (/^\[\[([^|\]]+)/.exec(l || '') || [])[1]
const open = rel => read(path.join(VAULT, exists(rel)))
const save = (note, label) => console.log(`${dryRun ? '[dry] ' : ''}${label}: ${write(note, { dryRun }) ? 'changed' : 'UNCHANGED'}`)
const seq = (note, key) => { const v = note.doc.get(key); return v && v.toJSON ? v.toJSON() : (v || []) }
function setSeq(note, key, values) { const n = note.doc.createNode(values); n.flow = false; note.doc.set(key, n) }
function setAfter(note, key, value, after) {
  const had = note.doc.has(key)
  note.doc.set(key, note.doc.createNode(value))
  if (had) return
  const items = note.doc.contents.items
  const p = items.pop()
  items.splice(items.findIndex(i => keyOf(i) === after) + 1, 0, p)
}

for (const [name, js] of Object.entries(spec.journals || {})) {
  const note = open(`${J}/${name}.md`)
  for (const [k, vals] of Object.entries(js.remove || {})) {
    const cur = seq(note, k)
    for (const v of vals) if (!cur.some(c => linkPath(c) === v)) throw new Error(`${name}: ${k} lacks ${v}`)
    setSeq(note, k, cur.filter(c => !vals.includes(linkPath(c))))
  }
  if (js.dedupe) for (const k of ['locations', 'npcs', 'quests', 'items', 'factions']) {
    const cur = seq(note, k); const seen = new Set()
    const out = cur.filter(c => { const p = linkPath(c) || c; if (seen.has(p)) return false; seen.add(p); return true })
    if (out.length !== cur.length) setSeq(note, k, out)
  }
  for (const [k, vals] of Object.entries(js.add || {})) {
    const cur = seq(note, k)
    for (const v of vals) if (!cur.some(c => linkPath(c) === v)) cur.push(link(v))
    setSeq(note, k, cur)
  }
  if (js.party) setSeq(note, 'party_present', PCS.map(link))
  if (js.body) {
    const text = fs.readFileSync(path.join(path.dirname(specFile), js.body), 'utf8')
    const filler = js.filler ? fs.readFileSync(path.join(path.dirname(specFile), js.filler), 'utf8') : FILLER
    if (note.body.split(filler).length !== 2) throw new Error(`${name}: filler not found exactly once`)
    note.body = note.body.replace(filler, text)
  }
  if (js.wrap !== false) note.doc.set('wrapped', true)
  save(note, name)
}

for (const [rel, es] of Object.entries(spec.entities || {})) {
  const note = open(rel)
  if (es.reveal_entity !== false) note.doc.set('revealed', note.doc.createNode({ [P]: true }))
  if (es.summary === 'keep') { if (!note.doc.get('summary')) throw new Error(rel + ': expected a summary') }
  else if (es.summary) { if (note.doc.get('summary')) throw new Error(rel + ': summary not empty'); note.doc.set('summary', es.summary) }
  if (es.public_name) setAfter(note, 'public_name', { [P]: es.public_name }, 'reveal')
  if (es.reveal) note.doc.set('reveal', note.doc.createNode({ [P]: es.reveal }))
  for (const e of es.edges || []) {
    const rels = note.doc.get('relationships')
    rels.flow = false
    const it = rels.items.find(i => i.get('type') === e.type && linkPath(i.get('target')) === e.target)
    if (!it) throw new Error(`${rel}: no ${e.type} edge to ${e.target}`)
    if (it.get('learned')) throw new Error(`${rel}: ${e.type} edge already learned`)
    it.flow = false
    it.set('learned', note.doc.createNode({ [P]: link(`${J}/${e.learned}.md`) }))
  }
  save(note, rel)
}

for (const rel of spec.held_back || []) {
  const note = open(rel)
  note.doc.set('revealed', note.doc.createNode({ [P]: false }))
  save(note, rel + ' (held back)')
}
