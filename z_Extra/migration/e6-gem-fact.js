// E6 proposal 14 (DM, 2026-11-17): the essence fact on Marrow's Amber Gem, learned in S44. Usage: node e6-gem-fact.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const note = read(path.join(VAULT, "4. World Almanac/Items/Marrow's Amber Gem.md"))
if ((note.doc.get('facts')?.items ?? []).length) throw new Error('facts is not empty')
note.doc.set('facts', note.doc.createNode([{
  text: "The gem can hold a creature's essence, and it held Roark Battleborn's.",
  learned: { 'Midnight Covenant': '[[1. DM Toolkit/Session Journals/The Hunt for Vecna/S44 The Other Roark.md|S44 The Other Roark]]' },
}]))
console.log(`${dryRun ? '[dry] ' : ''}facts: ${write(note, { dryRun }) ? 'changed' : 'unchanged'}`)
