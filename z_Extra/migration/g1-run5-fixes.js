// G1 run 5 follow-ups (2026-11-18, DM): Izek's service to Vecna is former; Lydia is in the Village of Barovia.
const path = require('path')
const { VAULT, read, write } = require('./fm')
const N = '4. World Almanac/NPCs/'
const edit = (rel, fn) => { const n = read(path.join(VAULT, rel)); fn(n.doc); write(n); console.log(rel) }
edit(N + 'Izek Strazni (COS).md', d => {
  const rel = d.get('relationships').toJSON()
  const v = rel.find(r => r.target.includes('/Vecna.md') && r.type === 'serves')
  if (!v || v.note) throw new Error('Vecna edge changed')
  v.note = 'former; freed from Vecna\'s control (S49)'
  d.set('relationships', rel)
})
edit(N + 'Lady Lydia Petrovna (COS).md', d => {
  if (!String(d.get('location')).includes('Settlements/Vallaki.md')) throw new Error('location changed')
  d.set('location', '[[4. World Almanac/Settlements/Village of Barovia.md|Village of Barovia]]')
})
