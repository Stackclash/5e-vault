// G2 sitting 1, follow-up (DM, 2026-11-18): reveal Durst Family, Blood of the Vine Tavern, Bildrath's Mercantile with summaries.
// Usage: node g2-sitting1b.js [--dry-run]
const path = require('path')
const { VAULT, read, write, keyOf } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const P = 'Midnight Covenant'
const W = '4. World Almanac'
const ents = {
  'Factions/Durst Family.md': { summary: 'The family who owned Death House. The party found their crypts beneath it and fought the ghosts of the parents, Carl and Elisabeth.', public_name: 'The Death House Family' },
  'Shops/Blood of the Vine Tavern.md': { summary: 'A tavern in the Village of Barovia, where the party took a room to rest Marin and Ismark first asked for their help.' },
  "Shops/Bildrath's Mercantile.md": { summary: 'A general store in the Village of Barovia, where Marin bought a dagger.' },
}
for (const [rel, spec] of Object.entries(ents)) {
  const note = read(path.join(VAULT, W, rel))
  if (note.doc.get('summary')) throw new Error(rel + ': summary not empty')
  note.doc.set('revealed', note.doc.createNode({ [P]: true }))
  note.doc.set('summary', spec.summary)
  if (spec.public_name) {
    const had = note.doc.has('public_name')
    note.doc.set('public_name', note.doc.createNode({ [P]: spec.public_name }))
    if (!had) { const items = note.doc.contents.items; const p = items.pop(); items.splice(items.findIndex(i => keyOf(i) === 'reveal') + 1, 0, p) }
  }
  console.log(`${dryRun ? '[dry] ' : ''}${rel}: ${write(note, { dryRun }) ? 'changed' : 'UNCHANGED'}`)
}
