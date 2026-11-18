// A3 [J]: DM-approved 2026-11-15. Usage: [--dry-run]
const path = require('path')
const { VAULT, read, write, YAML } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const J = '1. DM Toolkit/Session Journals/The Hunt for Vecna/'
const prep = d => `[[1. DM Toolkit/Session Prep/The Hunt for Vecna/${d}.md|${d}]]`
const edits = {
  'S28 The Siege on the Winery.md': { date: ['2024-01-11', '2025-01-11'], 'prep-notes': ['', prep('2025-01-11')] },
  'S33 The Fall of Strahd.md': { 'prep-notes': [prep('2025-10-25'), ''] },
  'S37 The Vanishing Scholar.md': { 'prep-notes': ['[[2026-04-11|Session Prep]]', prep('2026-03-22')] },
  'S40 Secrets of the Silent Ascendency.md': { 'prep-notes': ['[[Session Prep.md|Session Prep]]', prep('2026-05-16')] },
  'S42 Unmasking Lord Velmont.md': { 'prep-notes': ['[[Session Prep.md|Session Prep]]', prep('2026-06-28')] },
  'S43 The Two Lord Velmonts.md': { 'prep-notes': ['[[Session Prep.md|Session Prep]]', prep('2026-07-11')] },
}
let n = 0
for (const [file, keys] of Object.entries(edits)) {
  const note = read(path.join(VAULT, J, file))
  let ok = true
  for (const [k, [from, to]] of Object.entries(keys)) {
    const node = note.doc.get(k, true)
    if (!YAML.isScalar(node) || String(node.value) !== from) { console.log(`SKIP ${file}: ${k} is ${JSON.stringify(node?.value)}, expected ${JSON.stringify(from)}`); ok = false; continue }
    node.value = to
    console.log(`${file}: ${k} ${JSON.stringify(from)} -> ${JSON.stringify(to)}`)
  }
  if (ok && write(note, { dryRun })) n++
}
console.log(`${dryRun ? 'would change' : 'changed'} ${n} journals`)
