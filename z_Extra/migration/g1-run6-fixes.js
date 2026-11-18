// G1 run 6 follow-ups (2026-11-18, DM): Gousse has not given The Well of Many Worlds yet (planned);
// Savid is dead (killed by a ghost, S17); Danika Dorakova is a wereraven.
const path = require('path'), fs = require('fs')
const { VAULT, read, write } = require('./fm')
const N = '4. World Almanac/NPCs/'
const edit = (rel, fn) => { const n = read(path.join(VAULT, rel)); fn(n.doc); write(n); console.log(rel) }
const gists = {
  'Professor Gousse Windcaller.md': 'Aarakocra Councilor of Conjuration at the Umbral Athenaeum studying the Barovian surge; planned giver of The Well of Many Worlds.',
  'Savid (COS).md': 'Dead dusk elf under Kasimir\'s protection, met at Argynvostholt (S16); killed by a ghost while the party was away (S17).',
}
const run = JSON.parse(fs.readFileSync(path.join(__dirname, 'g1-run6.json')))
for (const [f, g] of Object.entries(gists)) {
  if (g.split(/\s+/).length > 20) throw new Error(f)
  edit(N + f, d => d.set('gist', g)); run[N + f] = g
}
fs.writeFileSync(path.join(__dirname, 'g1-run6.json'), JSON.stringify(run, null, 2) + '\n')
edit(N + 'Savid (COS).md', d => { if (d.get('condition') !== 'healthy') throw new Error('condition'); d.set('condition', 'dead') })
edit(N + 'Danika Dorakova (COS).md', d => d.set('race', '[[5. Mechanics/Bestiary/Humanoid/Wereraven (VRGR).md|Wereraven]]'))
