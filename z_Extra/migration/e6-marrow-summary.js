// E6 follow-up line 5 (DM, 2026-11-17): Marrow's summary no longer says the gem is uninvestigated. Usage: node e6-marrow-summary.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const note = read(path.join(VAULT, '4. World Almanac/NPCs/Marrow.md'))
const from = 'the party left the body in place and has not yet investigated the gem.'
const s = note.doc.get('summary')
if (s.split(from).length !== 2) throw new Error('expected exactly one match in summary')
note.doc.set('summary', s.replace(from, 'the party left the body in place; Redgrave later examined it and took the gem.'))
console.log(`${dryRun ? '[dry] ' : ''}Marrow summary: ${write(note, { dryRun }) ? 'changed' : 'unchanged'}`)
