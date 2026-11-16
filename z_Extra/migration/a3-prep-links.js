// A3 [M]: repoint journal prep-notes from Session Prep/Midnight Covenant/ to Session Prep/The Hunt for Vecna/
// only where the new target exists. Usage: [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write } = require('./fm')

const dryRun = process.argv.includes('--dry-run')
const dir = path.join(VAULT, '1. DM Toolkit/Session Journals/The Hunt for Vecna')
const OLD = 'Session Prep/Midnight Covenant/'
const NEW = 'Session Prep/The Hunt for Vecna/'
let changed = 0

for (const name of fs.readdirSync(dir).filter(f => /^S\d+ .*\.md$/.test(f))) {
  const note = read(path.join(dir, name))
  const v = note.doc.get('prep-notes')
  if (typeof v !== 'string' || !v.includes(OLD)) continue
  const next = v.replace(OLD, NEW)
  const target = /^\[\[([^|\]]+)/.exec(next)?.[1]
  if (!target || !fs.existsSync(path.join(VAULT, target))) { console.log(`SKIP ${name}: target missing (${target})`); continue }
  note.doc.set('prep-notes', next)
  console.log(`${name}: -> ${next}`)
  write(note, { dryRun })
  changed++
}
console.log(`${dryRun ? 'would change' : 'changed'} ${changed} journals`)
