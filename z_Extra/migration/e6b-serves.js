// E6b (DM, 2026-11-17): the Wardens' Silent Ascendency edge is `serves`, not `member`. Usage: node e6b-serves.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const SA = '[[4. World Almanac/Factions/Silent Ascendency.md|Silent Ascendency]]'
for (const n of ['Amber Warden', 'Unfinished Amber Warden']) {
  const note = read(path.join(VAULT, '4. World Almanac/Creatures', n + '.md'))
  const item = note.doc.get('relationships').items.find(it => it.get('target') === SA && it.get('type') === 'member')
  if (!item) throw new Error(n + ': no member edge to Silent Ascendency')
  item.set('type', 'serves')
  write(note, { dryRun })
  console.log(`${dryRun ? '[dry] ' : ''}${n}: member -> serves`)
}
