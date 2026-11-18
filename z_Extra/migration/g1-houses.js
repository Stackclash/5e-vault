// G1 follow-ups (DM, 2026-11-17).
//  Z-1  Fiona is not a member of House von Zarovich (edge removed, no replacement)
//  Z-2  Strahd's brides are members of House von Zarovich (Anastrasya, Gertruda, Ludmilla, Volenta)
//  Z-3  Ludmilla and Volenta are dead; Z-4 and #13: House von Zarovich and House Wachter gists rewritten
//  W-1  Karl Wachter (COS) created from the NPC template; W-2 linked in S33; W-3 Fiona, Nikolai, Karl captured at Vallaki
// Usage: node g1-houses.js [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const readRel = p => fs.readFileSync(path.join(VAULT, p), 'utf8')
const tag = s => console.log((dryRun ? '[dry] ' : '') + s)
const NPC = n => path.join(VAULT, '4. World Almanac/NPCs', n + '.md')
const L = (p, n) => `[[${p}.md|${n}]]`
const HVZ = L('4. World Almanac/Factions/House von Zarovich', 'House von Zarovich')
const VALLAKI = L('4. World Almanac/Settlements/Vallaki', 'Vallaki')
const KARL = 'Karl Wachter (COS)'

// W-1: render the NPC template statically
{
  const rel = `4. World Almanac/NPCs/${KARL}.md`
  if (fs.existsSync(path.join(VAULT, rel))) throw new Error(rel + ' exists')
  const include = src => src.replace(/^<% tp\.file\.include\("\[\[(z_Templates\/Partials\/[^\]]+)\]\]"\) %>$/gm, (_, p) => include(readRel(p + '.md')).trimEnd())
  const src = readRel('z_Templates/Templater/World Building/NPC.md')
  const start = src.indexOf('<%* if (!templateError) { -%>\n') + '<%* if (!templateError) { -%>\n'.length
  let text = include(src.slice(start, src.lastIndexOf('<%* } else { -%>')))
    .replace('location: <% JSON.stringify(data.location ?? "") %>', 'location: ""')
    .replace('  - <% JSON.stringify(data.name) %>', '  - Karl Wachter')
    .replace('gist: <% JSON.stringify(data.gist ?? "") %>', 'gist: ""')
  const EMPTY_SB = '> > ```statblock\n> >\n> > ```\n'
  if (text.split(EMPTY_SB).length !== 2) throw new Error('statblock slot not found')
  text = text.replace(EMPTY_SB, '> > ```statblock\n> > monster: Noble\n> > name: Karl Wachter (COS)\n> > ```\n').trimEnd() + '\n'
  if (/<%/.test(text)) throw new Error('Templater syntax left')
  if (!dryRun) fs.writeFileSync(path.join(VAULT, rel), text)
  if (!dryRun) {
    const note = read(path.join(VAULT, rel))
    const set = (k, v) => note.doc.set(k, typeof v === 'object' ? note.doc.createNode(v) : v)
    set('location', VALLAKI)
    set('condition', 'captured')
    set('gist', "Fiona Wachter's son and Nikolai's brother, a drunken young noble of House Wachter; arrested by the party in S33.")
    set('race', L('5. Mechanics/Races/Human', 'Human'))
    set('gender', 'male')
    set('age', null)
    set('alignment', 'Neutral')
    set('description', "Karl Wachter is one of Lady Fiona Wachter's two grown sons, a brash, drunken young noble always looking for trouble. He knows of his mother's cult, but not that she sleeps with their dead father.")
    set('relationships', [
      { target: L('4. World Almanac/Factions/House Wachter', 'House Wachter'), type: 'member' },
      { target: L('4. World Almanac/NPCs/Lady Fiona Wachter (COS)', 'Lady Fiona Wachter'), type: 'mother' },
      { target: L('4. World Almanac/NPCs/Nikolai Wachter (COS)', 'Nikolai Wachter'), type: 'brother' },
      { target: L('4. World Almanac/NPCs/Stella Wachter (COS)', 'Stella Wachter'), type: 'sister' },
    ])
    note.doc.get('relationships').flow = false
    write(note)
  }
  tag('created ' + rel)
}
// Z-1
{
  const note = read(NPC('Lady Fiona Wachter (COS)'))
  const rels = note.doc.get('relationships')
  const it = rels.items.find(i => i.get('type') === 'member' && i.get('target').includes('House von Zarovich.md'))
  if (!it) throw new Error('Fiona: no member edge to House von Zarovich')
  rels.items.splice(rels.items.indexOf(it), 1)
  note.doc.set('condition', 'captured'); note.doc.set('location', VALLAKI)            // W-3
  write(note, { dryRun }); tag('Fiona: House von Zarovich edge removed; captured at Vallaki')
}
// Z-2, Z-3
for (const n of ['Anastrasya Karelova (COS)', 'Gertruda (COS)', 'Ludmilla Vilisevic (COS)', 'Volenta Popofsky (COS)']) {
  const note = read(NPC(n))
  const rels = note.doc.get('relationships')
  if (rels.items.some(i => i.get('target') === HVZ)) throw new Error(n + ': already linked')
  rels.items.push(note.doc.createNode({ target: HVZ, type: 'member' }))
  const dead = n.startsWith('Ludmilla') || n.startsWith('Volenta')
  if (dead) note.doc.set('condition', 'dead')
  write(note, { dryRun }); tag(`${n}: member of House von Zarovich${dead ? '; dead' : ''}`)
}
// W-3
{
  const note = read(NPC('Nikolai Wachter (COS)'))
  note.doc.set('condition', 'captured'); note.doc.set('location', VALLAKI)
  write(note, { dryRun }); tag('Nikolai: captured at Vallaki')
}
// Z-4, #13
for (const [n, gist] of [
  ['House von Zarovich', "Strahd's house: Rahadin and Strahd's brides, all dead but Anastrasya Karelova, who escaped, and Gertruda."],
  ['House Wachter', "Lady Fiona Wachter's noble house at Wachterhaus in Vallaki, with Nikolai, Karl, Stella, and the imp Majesto."],
]) {
  if (gist.split(/\s+/).length > 20) throw new Error(n + ' gist over 20 words')
  const note = read(path.join(VAULT, '4. World Almanac/Factions', n + '.md'))
  note.doc.set('gist', gist)
  write(note, { dryRun }); tag(n + ': gist')
}
// W-2
{
  const note = read(path.join(VAULT, '1. DM Toolkit/Session Journals/The Hunt for Vecna/S33 The Fall of Strahd.md'))
  const from = '[[Nikolai Wachter (COS)]], and Karl Wachter'
  if (note.body.split(from).length !== 2) throw new Error('S33 Karl mention not found once')
  note.body = note.body.replace(from, '[[Nikolai Wachter (COS)]], and [[Karl Wachter (COS)|Karl Wachter]]')
  write(note, { dryRun }); tag('S33: Karl linked')
}
