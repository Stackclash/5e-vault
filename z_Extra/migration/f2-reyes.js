// F2-22r (DM, 2026-11-17): reveal Ostwin Reyes with a summary. Usage: node f2-reyes.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const note = read(path.join(VAULT, '4. World Almanac/NPCs/Ostwin Reyes.md'))
if (note.doc.get('summary')) throw new Error('summary is not empty')
note.doc.set('revealed', note.doc.createNode({ 'Midnight Covenant': true }))
note.doc.set('summary', "The Ferrymen's Guild clerk in Duskferry who was the Ascendency's contact, known by the code name 'the Tallyman.'")
console.log(`${dryRun ? '[dry] ' : ''}Reyes: ${write(note, { dryRun }) ? 'revealed, summary' : 'unchanged'}`)
