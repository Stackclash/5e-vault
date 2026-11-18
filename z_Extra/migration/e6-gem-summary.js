// E6 proposal 15 (DM, 2026-11-17): player-facing summary for Marrow's Amber Gem. Usage: node e6-gem-summary.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const note = read(path.join(VAULT, "4. World Almanac/Items/Marrow's Amber Gem.md"))
if (note.doc.get('summary')) throw new Error('summary is not empty')
note.doc.set('summary', "An amber gem that was lodged at the base of Marrow's neck. Redgrave took it from the body after Faerah killed Marrow in Bruokdon (S44).")
console.log(`${dryRun ? '[dry] ' : ''}summary: ${write(note, { dryRun }) ? 'changed' : 'unchanged'}`)
