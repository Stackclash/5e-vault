// G2 sitting 3 follow-ups (DM, 2026-11-18): Izek summary; S13 Errata and wand spelling; S1-S4 item ledgers; Ireena in S14.
// Usage: node g2-s3-followups.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const J = '1. DM Toolkit/Session Journals/The Hunt for Vecna'
const save = (n, l) => console.log(`${dryRun ? '[dry] ' : ''}${l}: ${write(n, { dryRun }) ? 'changed' : 'UNCHANGED'}`)
const open = rel => read(path.join(VAULT, rel))
const link = rel => `[[${rel}|${path.basename(rel, '.md')}]]`
function once(body, a, b, label) { if (body.split(a).length !== 2) throw new Error(label + ': string not found once'); return body.replace(a, b) }

const izek = open('4. World Almanac/NPCs/Izek Strazni (COS).md')
if (izek.doc.get('summary') !== 'A man in Vallaki whom Yevelda flirted with on the night the mob gathered.') throw new Error('Izek summary changed')
izek.doc.set('summary', 'A man from Vallaki whom Yevelda flirted with during the mob; he left town with the party and fought beside them in the werewolf siege at the tower.')
save(izek, 'Izek summary')

const s13 = open(`${J}/S13 The History of Strahd.md`)
s13.body = once(s13.body, "- Kahkan's Wand of Secrets\n", "- Khazan's Wand of Secrets\n", 'S13 wand')
s13.body = once(s13.body, '- The party reads the second chapter of the Tome of Strahd\n',
  "- The party reads the second chapter of the Tome of Strahd\n\n## Errata\n- 2026-11-18: Marin's pact to wake Yan's head, and learning that Rictavio killed him, happened in S14, not this session (DM).\n", 'S13 errata')
save(s13, 'S13 body')

const I = '5. Mechanics/Items'
const items = {
  'S1 Welcome to Barovia': ['Spell Scroll 1st Level', 'Spell Scroll 2nd Level'],
  'S2 Secrets in the Dark': ['Cloak Of Protection', 'Chain Shirt', 'Spellbook', 'Thieves Tools', 'Bullseye Lantern', 'Mess Kit', 'Alchemists Fire Flask', 'Potion Of Healing'],
  'S3 The Look of Desperation': ['Dagger'],
  'S4 Knowing the Road': ['Potion Of Growth', 'Potion Of Healing'],
}
for (const [name, list] of Object.entries(items)) {
  const n = open(`${J}/${name}.md`)
  const cur = n.doc.get('items')?.toJSON?.() || []
  for (const it of list) { const rel = `${I}/${it}.md`; read(path.join(VAULT, rel)); if (!cur.includes(link(rel))) cur.push(link(rel)) }
  const node = n.doc.createNode(cur); node.flow = false; n.doc.set('items', node)
  save(n, name + ' items')
}

const s14 = open(`${J}/S14 Secrets of the Tower.md`)
const npcs = s14.doc.get('npcs').toJSON()
npcs.push(link('4. World Almanac/NPCs/Ireena Kolyana (COS).md'))
const node = s14.doc.createNode(npcs); node.flow = false; s14.doc.set('npcs', node)
save(s14, 'S14 npcs')
