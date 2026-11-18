// G1 run 6 follow-ups 2 (2026-11-18, DM): The Well of Many Worlds is not yet active; Savid (dead) has no location.
const path = require('path')
const { VAULT, read, write } = require('./fm')
const edit = (rel, fn) => { const n = read(path.join(VAULT, rel)); fn(n.doc); write(n); console.log(rel) }
edit('3. The Party/Quests/The Well of Many Worlds.md', d => {
  if (d.getIn(['active', 'Midnight Covenant']) !== true) throw new Error('active changed')
  d.setIn(['active', 'Midnight Covenant'], false)
})
edit('4. World Almanac/NPCs/Savid (COS).md', d => {
  if (!String(d.get('location')).includes('Settlements/Vallaki.md')) throw new Error('location changed')
  d.set('location', '')
})
