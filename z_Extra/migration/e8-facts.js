// E8 (DM, 2026-11-17): Locked Canon bullets as locked facts, written only from accepted lines.
// Appends to each note's facts; learned is set only where the DM accepted a session.
// Usage: node e8-facts.js <sitting.json> [--dry-run]
// sitting.json: { "<note path>": [{ "text": "...", "learned": "<journal file name without .md>" | null }] }
const fs = require('fs')
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const sitting = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
const J = '1. DM Toolkit/Session Journals/The Hunt for Vecna'
const PARTY = 'Midnight Covenant'

for (const [rel, facts] of Object.entries(sitting)) {
  const note = read(path.join(VAULT, rel))
  let list = note.doc.get('facts')
  if (!list || !list.items) { note.doc.set('facts', note.doc.createNode([])); list = note.doc.get('facts') }
  list.flow = false
  for (const f of facts) {
    if (list.items.some(it => it.get && it.get('text') === f.text)) { console.log(`skip (exists): ${rel}: ${f.text.slice(0, 50)}`); continue }
    let learned = {}
    if (f.learned) {
      const jp = `${J}/${f.learned}.md`
      if (!fs.existsSync(path.join(VAULT, jp))) throw new Error('missing journal ' + jp)
      learned = { [PARTY]: `[[${jp}|${f.learned}]]` }
    }
    list.items.push(note.doc.createNode({ text: f.text, learned, locked: true }))
  }
  write(note, { dryRun })
  console.log(`${dryRun ? '[dry] ' : ''}${rel}: +${facts.length}`)
}
