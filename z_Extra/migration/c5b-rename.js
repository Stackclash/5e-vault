// C5b: rename top-level frontmatter keys in place (text rename of the key token; the value bytes are
// untouched and checked by re-parsing) and apply exact body replacements.
// Usage: node c5b-rename.js <group> [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, YAML } = require('./fm')

const GROUPS = {
  1: {
    dirs: ['4. World Almanac/NPCs'],
    keys: { partyRelationships: 'party_relationships' },
    body: [["field: ['partyRelationships',", "field: ['party_relationships',"]],
    expectKeys: 94, expectBody: 94,
  },
  2: {
    dirs: ['1. DM Toolkit/Session Journals'],
    keys: { 'prep-notes': 'prep_notes' },
    body: [['):prep-notes]', '):prep_notes]']],
    expectKeys: 49, expectBody: 48,
  },
}

const group = GROUPS[process.argv[2]]
if (!group) throw new Error('unknown group')
const dryRun = process.argv.includes('--dry-run')
const files = []
const walk = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e =>
  e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith('.md') && files.push(path.join(d, e.name)))
group.dirs.forEach(d => walk(path.join(VAULT, d)))

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
let keyCount = 0, bodyCount = 0, changed = 0
const skipped = []
for (const file of files) {
  const rel = path.relative(VAULT, file)
  const note = read(file)
  if (!note.doc || note.doc.errors.length) continue
  const raw = note.raw
  const fmEnd = 4 + note.fm.length
  let fm = raw.slice(0, fmEnd)
  let body = raw.slice(fmEnd)
  let ok = true
  const renamed = []
  for (const [oldK, newK] of Object.entries(group.keys)) {
    if (!note.doc.has(oldK)) continue
    if (note.doc.has(newK)) { skipped.push(`${rel}: has both ${oldK} and ${newK}`); ok = false; break }
    const re = new RegExp('^' + esc(oldK) + ':', 'gm')
    const n = (fm.match(re) || []).length
    if (n !== 1) { skipped.push(`${rel}: ${oldK} key line found ${n} times`); ok = false; break }
    fm = fm.replace(re, newK + ':')
    renamed.push([oldK, newK])
  }
  if (!ok) continue
  if (renamed.length) {
    const after = YAML.parseDocument(fm.slice(4))
    for (const [oldK, newK] of renamed) {
      if (JSON.stringify(after.toJS()[newK]) !== JSON.stringify(note.doc.toJS()[oldK])) { skipped.push(`${rel}: value changed on re-parse`); ok = false }
    }
    if (!ok) continue
    keyCount++
  }
  let bodyHit = false
  for (const [a, b] of group.body) if (body.includes(a)) { body = body.split(a).join(b); bodyHit = true }
  if (bodyHit) bodyCount++
  const out = fm + body
  if (out !== raw) {
    changed++
    if (dryRun) console.log('would change ' + rel)
    else fs.writeFileSync(file, out)
  }
}
console.log(`${dryRun ? 'would change' : 'changed'} ${changed} files: ${keyCount} key renames (expected ${group.expectKeys}), ${bodyCount} body edits (expected ${group.expectBody})`)
skipped.forEach(s => console.log('SKIP ' + s))
