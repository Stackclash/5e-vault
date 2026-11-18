// E8 (DM, 2026-11-17): E8-16 reveal Vecna; E8-11f drop #secret from S44's cell-leader line;
// E8-8 and E8-11g Locked Canon bullets reopened by the DM (Izek, Marrow), logged in the Plan Changelog.
// Body edits are exact string replacements. Usage: node e8-canon.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
function swap(text, from, to, where) {
  const n = text.split(from).length - 1
  if (n !== 1) throw new Error(`${where}: expected 1 match, found ${n}: ${from.slice(0, 70)}`)
  return text.replace(from, () => to)
}
const tag = s => (dryRun ? '[dry] ' : '') + s

{ // E8-16
  const note = read(path.join(VAULT, '4. World Almanac/NPCs/Vecna.md'))
  if (note.doc.get('summary')) throw new Error('Vecna summary is not empty')
  note.doc.set('revealed', note.doc.createNode({ 'Midnight Covenant': true }))
  note.doc.set('summary', 'The power freed from the Amber Temple when Strahd died (S33); the party has hunted him ever since.')
  write(note, { dryRun }); console.log(tag('Vecna: revealed, summary'))
}
{ // E8-11f
  const note = read(path.join(VAULT, '1. DM Toolkit/Session Journals/The Hunt for Vecna/S44 The Other Roark.md'))
  note.body = swap(note.body, '[[Marrow]] was the cell leader #remember #secret', '[[Marrow]] was the cell leader #remember', '11f')
  write(note, { dryRun }); console.log(tag('S44: #secret dropped'))
}
{ // E8-8, E8-11g
  const note = read(path.join(VAULT, '1. DM Toolkit/Campaigns/The Hunt for Vecna.md'))
  let b = note.body
  b = swap(b, 'survived the fall of Castle Ravenloft and was claimed by Vecna\'s power in that moment; he now serves him.',
    'survived the fall of Castle Ravenloft and was claimed by Vecna\'s power in that moment; he served him until the party freed him from Vecna\'s control (S49).', '8')
  b = swap(b, '**The party doesn\'t know any of this yet** — it\'s the DM-only spine of that session.',
    'In S44 Faerah saw through the Roark disguise and killed it. **The party knows** it was the cell leader, that it wore Velmont, Gousse, and then Roark, and that it is dead; the Marrow-rite and the opportunism of the ambush are still DM-only.', '11g')
  b = swap(b, '(DM correction, E6 follow-up).\n',
    '(DM correction, E6 follow-up).\n- 2026-11-17: Locked Canon reopened by the DM (E8): the Izek bullet no longer says he serves Vecna (freed in S49); the Marrow bullet records its death in S44 and what the party knows.\n', 'changelog')
  note.body = b
  write(note, { dryRun }); console.log(tag('campaign: Izek and Marrow bullets, changelog'))
}
