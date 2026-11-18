// F-8 / F-3c-ii (DM, 2026-11-17): reveal Emil Toranescu with a summary in the DM's words. Usage: node f-emil.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const note = read(path.join(VAULT, '4. World Almanac/NPCs/Emil Toranescu (COS).md'))
if (note.doc.get('summary')) throw new Error('summary is not empty')
note.doc.set('revealed', note.doc.createNode({ 'Midnight Covenant': true }))
note.doc.set('summary', 'The werewolf the party freed from Castle Ravenloft, who went back to lead the werewolf pack.')
console.log(`${dryRun ? '[dry] ' : ''}Emil: ${write(note, { dryRun }) ? 'revealed, summary' : 'unchanged'}`)
