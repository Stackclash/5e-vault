// E8-17..19 (DM, 2026-11-17): reveal The Trickster God, Silent Ascendency, and Marrow to the Midnight Covenant.
// Marrow keeps its existing summary. Usage: node e8-reveals.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const reveals = [
  ['4. World Almanac/Deities/The Trickster God.md', "The god who is Roark Battleborn's father."],
  ['4. World Almanac/Factions/Silent Ascendency.md', "The cult behind the stolen-magic smuggling in Bruokdon, draining the items' magic to fuel a ritual."],
  ['4. World Almanac/NPCs/Marrow.md', null],
]
for (const [rel, summary] of reveals) {
  const note = read(path.join(VAULT, rel))
  note.doc.set('revealed', note.doc.createNode({ 'Midnight Covenant': true }))
  if (summary) {
    if (note.doc.get('summary')) throw new Error(rel + ': summary is not empty')
    note.doc.set('summary', summary)
  } else if (!note.doc.get('summary')) throw new Error(rel + ': expected an existing summary')
  write(note, { dryRun })
  console.log(`${dryRun ? '[dry] ' : ''}${rel}: revealed${summary ? ', summary' : ''}`)
}
