// E4 (data half, pulled forward 2026-11-16): legacy "Name|type[,note]" relationship strings -> typed edges.
// Mirror rules: parent/child keeps the child's father/mother edge (a parent's son/daughter edge is dropped only
// when the child stores the matching father/mother); spouse pairs keep the edge on the alphabetically earlier
// note; "ally of convenience" -> {type: ally, note: "of convenience"} on every note that had it. Usage: [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write } = require('./fm')

const dryRun = process.argv.includes('--dry-run')
const dir = path.join(VAULT, '4. World Almanac/NPCs')
const notes = new Map()
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.md'))) {
  const note = read(path.join(dir, f))
  const rels = note.doc?.get('relationships')?.toJSON?.() ?? []
  if (Array.isArray(rels) && rels.some(r => typeof r === 'string')) notes.set(f.replace(/\.md$/, ''), { note, rels })
}

const parse = s => {
  const [name, rest = ''] = s.split('|')
  const [rawType, extra] = rest.split(',')
  let type = rawType.trim(), note = extra?.trim()
  if (type === 'ally of convenience') { type = 'ally'; note = 'of convenience' }
  return { name: name.trim(), type, note }
}
const PARENT = { son: ['father', 'mother'], daughter: ['father', 'mother'] }
const SPOUSE = new Set(['husband', 'wife'])
const stores = (name, target, types) => notes.get(name)?.rels.some(r => typeof r === 'string' && types.includes(parse(r).type) && parse(r).name === target)

let changed = 0
const report = []
for (const [name, { note, rels }] of notes) {
  const out = []
  for (const r of rels) {
    if (typeof r !== 'string') { out.push(r); continue }
    const e = parse(r)
    const file = path.join(dir, e.name + '.md')
    if (!fs.existsSync(file)) { report.push(`KEEP AS STRING ${name}: "${r}" (no note named ${e.name})`); out.push(r); continue }
    if (PARENT[e.type] && stores(e.name, name, PARENT[e.type])) { report.push(`drop ${name}: ${e.type} -> ${e.name} (child stores the parent edge)`); continue }
    if (SPOUSE.has(e.type) && stores(e.name, name, ['husband', 'wife']) && name > e.name) { report.push(`drop ${name}: ${e.type} -> ${e.name} (kept on ${e.name})`); continue }
    const edge = { target: `[[4. World Almanac/NPCs/${e.name}.md|${e.name.replace(/ \(COS\)$/, '')}]]`, type: e.type }
    if (e.note) edge.note = e.note
    out.push(edge)
    report.push(`keep ${name}: ${e.type} -> ${e.name}${e.note ? ` (${e.note})` : ''}`)
  }
  note.doc.set('relationships', note.doc.createNode(out))
  if (write(note, { dryRun })) changed++
}
console.log(report.join('\n'))
console.log(`${dryRun ? 'would change' : 'changed'} ${changed} notes`)
