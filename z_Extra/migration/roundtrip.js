// No-op round-trip gate: parse and re-serialize every note; report any that would change.
// Usage: node z_Extra/migration/roundtrip.js [--diff]
const path = require('path')
const { VAULT, read, serialize, walk } = require('./fm')

const roots = ['1. DM Toolkit', '3. The Party', '4. World Almanac']
const showDiff = process.argv.includes('--diff')
let total = 0, noFm = 0, errors = 0
const differ = []

for (const r of roots) {
  for (const f of walk(path.join(VAULT, r))) {
    total++
    const note = read(f)
    if (!note.doc) { noFm++; continue }
    if (note.doc.errors.length) { errors++; console.log('PARSE ERROR ' + path.relative(VAULT, f)); continue }
    if (serialize(note) !== note.raw) differ.push(note)
  }
}

console.log(`files: ${total}, no frontmatter: ${noFm}, parse errors: ${errors}, differ: ${differ.length}`)
for (const n of differ) {
  console.log('DIFF ' + path.relative(VAULT, n.file) + (n.doc.errors.length ? '  [parse error]' : ''))
  if (showDiff) {
    const a = n.raw.split('\n'), b = serialize(n).split('\n')
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      if (a[i] !== b[i]) console.log(`  L${i + 1}\n  - ${JSON.stringify(a[i])}\n  + ${JSON.stringify(b[i])}`)
    }
  }
}
process.exit(differ.length ? 1 : 0)
