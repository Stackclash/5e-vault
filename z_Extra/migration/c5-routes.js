// C5: travel / travelDistances [name, miles] tuples -> routes: [{to, miles}], in the same key position.
// Names resolve to a unique note under 4. World Almanac/. Usage: [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write, keyOf } = require('./fm')

const dryRun = process.argv.includes('--dry-run')
const almanac = path.join(VAULT, '4. World Almanac')
const files = ['Settlements/Vallaki.md', 'Regions/Barovia.md', 'Places of Interest/The Amber Temple.md']

const all = []
const walk = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e =>
  e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith('.md') && all.push(path.relative(VAULT, path.join(d, e.name))))
walk(almanac)
const resolve = ref => {
  const link = /^\[\[([^|\]]+)/.exec(ref)?.[1]
  if (link) return all.includes(link) ? link : null
  const hits = all.filter(p => path.basename(p, '.md') === ref)
  return hits.length === 1 ? hits[0] : null
}

let changed = 0
const problems = []
for (const rel of files) {
  const note = read(path.join(almanac, rel))
  const key = ['travel', 'travelDistances'].find(k => note.doc.has(k))
  if (!key) { problems.push(`${rel}: no travel key`); continue }
  const routes = []
  for (const [ref, miles] of note.doc.get(key).toJSON()) {
    const target = resolve(String(ref))
    const n = Number(miles)
    if (!target || !Number.isFinite(n)) { problems.push(`${rel}: cannot convert [${ref}, ${miles}]`); continue }
    routes.push({ to: `[[${target}|${path.basename(target, '.md')}]]`, miles: n })
  }
  if (problems.some(p => p.startsWith(rel))) continue
  const pair = note.doc.contents.items.find(p => keyOf(p) === key)
  pair.key = note.doc.createNode('routes')
  pair.value = note.doc.createNode(routes)
  routes.forEach(r => console.log(`${rel}: ${key} -> routes {to: ${r.to}, miles: ${r.miles}}`))
  write(note, { dryRun })
  changed++
}
console.log(`${dryRun ? 'would change' : 'changed'} ${changed} notes`)
problems.forEach(p => console.log('SKIP ' + p))
