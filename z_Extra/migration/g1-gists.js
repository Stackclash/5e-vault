// G1 (2026-11-17): DM-facing gists drafted from each note's own fields, written in runs for the DM to skim.
// Usage: node g1-gists.js <run.json> [--dry-run]   run.json: { "<note path>": "<gist, 20 words or fewer>" }
const fs = require('fs')
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const run = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
for (const [rel, gist] of Object.entries(run)) {
  const words = gist.trim().split(/\s+/).length
  if (words > 20) throw new Error(`${rel}: ${words} words`)
  const note = read(path.join(VAULT, rel))
  if (note.doc.get('gist')) throw new Error(rel + ': gist already set')
  note.doc.set('gist', gist)
  write(note, { dryRun })
  console.log(`${dryRun ? '[dry] ' : ''}${words}w ${rel.split('/').pop()}`)
}
