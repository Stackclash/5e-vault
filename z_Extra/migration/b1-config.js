// B1: add new folders under Configuration.locations and the relationship_types vocabulary. Usage: [--dry-run]
const path = require('path')
const { VAULT, read, write, keyOf, YAML } = require('./fm')

const dryRun = process.argv.includes('--dry-run')
const note = read(path.join(VAULT, '1. DM Toolkit/Configuration.md'))
const { doc } = note

const g = (m, f) => ({ male: m, female: f })
const T = [
  ['father', 'family', g('son', 'daughter')], ['mother', 'family', g('son', 'daughter')],
  ['son', 'family', g('father', 'mother')], ['daughter', 'family', g('father', 'mother')],
  ['husband', 'family', 'wife'], ['wife', 'family', 'husband'],
  ['brother', 'family', g('brother', 'sister')], ['sister', 'family', g('brother', 'sister')],
  ['uncle', 'family', g('nephew', 'niece')], ['aunt', 'family', g('nephew', 'niece')],
  ['nephew', 'family', g('uncle', 'aunt')], ['niece', 'family', g('uncle', 'aunt')],
  ['cousin', 'family', 'cousin', true],
  ['friend', 'personal', 'friend', true], ['ally', 'personal', 'ally'], ['rival', 'personal', 'rival'],
  ['enemy', 'personal', 'enemy'], ['lover', 'personal', 'lover', true],
  ['mentor', 'personal', 'student'], ['student', 'personal', 'mentor'],
  ['employer', 'work', 'employee'], ['employee', 'work', 'employer'],
  ['serves', 'work', 'master'], ['master', 'work', 'serves'],
  ['handler', 'work', 'asset'], ['asset', 'work', 'handler'],
  ['patron', 'work', 'client'], ['client', 'work', 'patron'],
  ['member', 'faction'], ['leader', 'faction'], ['founder', 'faction'], ['agent', 'faction'], ['former-member', 'faction'],
  ['worships', 'faith'], ['cleric-of', 'faith'],
  ['home', 'place'], ['works-at', 'place'], ['origin', 'place'], ['imprisoned-at', 'place'],
]

const locs = doc.get('locations', true)
for (const [k, v] of [['factions', 'Factions'], ['items', 'Items'], ['deities', 'Deities'], ['creatures', 'Creatures']]) {
  if (locs.has(k)) { console.log(`locations.${k} already present: ${locs.get(k)}`); continue }
  locs.set(k, `4. World Almanac/${v}`)
}

if (doc.has('relationship_types')) throw new Error('relationship_types already present')
const seq = new YAML.YAMLSeq()
for (const [type, category, inverse, symmetric] of T) {
  const o = { type, category }
  if (inverse) o.inverse = inverse
  if (symmetric) o.symmetric = true
  const node = doc.createNode(o)
  node.flow = true
  seq.items.push(node)
}
const items = doc.contents.items
const at = items.findIndex(p => keyOf(p) === 'relationship_mapping')
items.splice(at + 1, 0, doc.createPair('relationship_types', seq))

console.log(`relationship_types: ${T.length} entries; locations now has ${locs.items.length} keys`)
console.log(write(note, { dryRun }) ? (dryRun ? 'would write' : 'written') : 'no change')
