// G1 run 4 follow-ups (2026-11-18, DM): hut gist; S23 party_present; Martikovs are wereravens;
// Emil's goals; Izek stopped the Blinsky dolls once he partnered with the party and learned Ireena is his sister.
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const N = '4. World Almanac/NPCs/'
const edit = (rel, fn) => { const n = read(path.join(VAULT, rel)); fn(n.doc); write(n, { dryRun }); console.log((dryRun ? '[dry] ' : '') + rel) }

edit(N + 'Baba Lysagas Creeping Hut (COS).md', d => d.set('gist', "Baba Lysaga's animated hut at the Ruins of Berez, inert since Seluvis pulled out its stolen Wizard of Wines gem (S23)."))

const pc = n => `[[3. The Party/Players/${n}.md|${n}]]`
edit('1. DM Toolkit/Session Journals/The Hunt for Vecna/S23 Thieves in the Bog.md', d => {
  const cur = d.get('party_present').toJSON()
  if (cur.length !== 1 || cur[0] !== pc('Redgrave')) throw new Error('S23 party_present changed: ' + cur)
  d.set('party_present', ['Redgrave', "Seluvis Felo'melorn", 'Yevelda Ovak', 'Marin', 'Faerah Duskrane'].map(pc))
})

const WR = '[[5. Mechanics/Bestiary/Humanoid/Wereraven (VRGR).md|Wereraven]]'
for (const f of ['Adrian Martikov', 'Bray Martikov (COS)', 'Brom Martikov (COS)', 'Davian Martikov (COS)', 'Elvir Martikov', 'Stefania Martikov', 'Urwin Martikov (COS)'])
  edit(N + f + '.md', d => d.set('race', WR))

edit(N + 'Emil Toranescu (COS).md', d => d.set('goals', 'Hold and grow the Children of Mother Night now that he leads them.'))

edit(N + 'Gadof Blinsky (COS).md', d => {
  const rel = d.get('relationships').toJSON()
  const izek = rel.find(r => r.target.includes('Izek Strazni'))
  if (izek.note !== 'forced to carve dolls of Ireena') throw new Error('Izek note changed')
  izek.note = 'formerly forced to carve dolls of Ireena'
  d.set('relationships', rel)
  d.set('history', d.get('history') + '\n\nThe commission has since ended: once Izek began working with the party and learned that Ireena, the woman in the dolls, is his long-lost sister, he stopped having them made.')
  const dl = d.get('dislikes')
  if (!dl.includes("Izek Strazni's threats, ")) throw new Error('dislikes changed')
  d.set('dislikes', dl.replace("Izek Strazni's threats, ", ''))
})
