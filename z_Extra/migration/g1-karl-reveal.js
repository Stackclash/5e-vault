// K-1 (DM, 2026-11-17): reveal Karl Wachter with a summary. Usage: node g1-karl-reveal.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const note = read(path.join(VAULT, '4. World Almanac/NPCs/Karl Wachter (COS).md'))
if (note.doc.get('summary')) throw new Error('summary is not empty')
note.doc.set('revealed', note.doc.createNode({ 'Midnight Covenant': true }))
note.doc.set('summary', "Lady Fiona Wachter's son, arrested by the party in Vallaki along with his mother and brother.")
console.log(`${dryRun ? '[dry] ' : ''}Karl: ${write(note, { dryRun }) ? 'revealed, summary' : 'unchanged'}`)
