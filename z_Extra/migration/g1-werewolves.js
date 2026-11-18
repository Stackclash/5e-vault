// G-1 (DM, 2026-11-17): Emil leads the Children of Mother Night now; Kiril (dead, S15) is a former member.
// Emil's imprisoned-at Castle Ravenloft edge is dropped: he was freed (S33). Usage: node g1-werewolves.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const N = n => path.join(VAULT, '4. World Almanac/NPCs', n + '.md')
const CMN = 'Children of Mother Night.md|'
const find = (note, type, frag) => {
  const it = note.doc.get('relationships').items.find(i => i.get('type') === type && i.get('target').includes(frag))
  if (!it) throw new Error(`${note.file}: no ${type} edge to ${frag}`); return it
}
{
  const note = read(N('Kiril Stoyanovich (COS)'))
  find(note, 'leader', CMN).set('type', 'former-member')
  write(note, { dryRun }); console.log((dryRun ? '[dry] ' : '') + 'Kiril: leader -> former-member')
}
{
  const note = read(N('Emil Toranescu (COS)'))
  find(note, 'member', CMN).set('type', 'leader')
  const rels = note.doc.get('relationships')
  const prison = find(note, 'imprisoned-at', 'Castle Ravenloft')
  rels.items.splice(rels.items.indexOf(prison), 1)
  write(note, { dryRun }); console.log((dryRun ? '[dry] ' : '') + 'Emil: member -> leader; imprisoned-at Castle Ravenloft removed')
}
