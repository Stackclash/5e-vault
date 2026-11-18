// G1 run 7 follow-ups (2026-11-18, DM): Zuleika's text brought up to date (Emil freed and leading the pack, Kiril dead);
// Vladimir's race links the Revenant bestiary note.
const path = require('path')
const { VAULT, read, write } = require('./fm')
const N = '4. World Almanac/NPCs/'
const edit = (rel, fn) => { const n = read(path.join(VAULT, rel)); fn(n.doc); write(n); console.log(rel) }
edit(N + 'Zuleika Toranescu (COS).md', d => {
  if (!String(d.get('goals')).startsWith('See Kiril Stoyanovich dead')) throw new Error('goals changed')
  d.set('goals', 'Stand beside Emil as he remakes the Children of Mother Night.')
  d.set('history', d.get('history') + '\n\nThat has since changed: the party freed Emil from Castle Ravenloft, and he returned to the pack and took control of it from Kiril.')
})
edit(N + 'Vladimir Horngaard (COS).md', d => {
  if (d.get('race') !== '[[Revenant|Revenant]]') throw new Error('race changed')
  d.set('race', '[[5. Mechanics/Bestiary/Undead/Revenant.md|Revenant]]')
})
