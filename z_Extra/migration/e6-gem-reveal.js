// E6 proposal 13 (DM, 2026-11-17): Marrow's Amber Gem is revealed to the Midnight Covenant. Usage: node e6-gem-reveal.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const note = read(path.join(VAULT, "4. World Almanac/Items/Marrow's Amber Gem.md"))
note.doc.set('revealed', note.doc.createNode({ 'Midnight Covenant': true }))
console.log(`${dryRun ? '[dry] ' : ''}revealed: ${write(note, { dryRun }) ? 'changed' : 'unchanged'}`)
