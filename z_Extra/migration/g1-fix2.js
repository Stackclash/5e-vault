// G1 follow-ups (DM, 2026-11-17). Q-1..Q-3: The Ones Who Were Forgotten gets Thornmere, an Eamon sentence, and
// its played step's outcome. V-5: the Vallakovichs are alive in the Village of Barovia. Usage: node g1-fix2.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const L = (p, n) => `[[${p}.md|${n}]]`
const tag = s => console.log((dryRun ? '[dry] ' : '') + s)

{
  const note = read(path.join(VAULT, '3. The Party/Quests/The Ones Who Were Forgotten.md'))
  if (note.doc.get('locations').items.length) throw new Error('locations not empty')
  note.doc.set('locations', note.doc.createNode([L('4. World Almanac/Settlements/Thornmere', 'Thornmere')]))
  const desc = note.doc.get('description', true)
  desc.value = desc.value + '\n\nThe village is [[Thornmere]], and the elderly villager is [[Eamon Morcant]] (S35).'
  const step = note.doc.getIn(['steps', 0])
  if (step.get('text') !== 'The party enters the village and meets Eamon.' || step.get('outcome')) throw new Error('step not as expected')
  step.set('outcome', `Met Eamon Morcant in Thornmere (${L('1. DM Toolkit/Session Journals/The Hunt for Vecna/S35 The Forgotten Man of Thornmere', 'S35')}).`)
  write(note, { dryRun }); tag('The Ones Who Were Forgotten: locations, description, step outcome')
}
const VOB = L('4. World Almanac/Settlements/Village of Barovia', 'Village of Barovia')
for (const n of ['Baron Vargas Vallakovich (COS)', 'Victor Vallakovich (COS)']) {
  const note = read(path.join(VAULT, '4. World Almanac/NPCs', n + '.md'))
  if (note.doc.get('condition') !== 'healthy') throw new Error(n + ': condition is not healthy')
  note.doc.set('location', VOB)
  write(note, { dryRun }); tag(`${n}: location -> Village of Barovia`)
}
