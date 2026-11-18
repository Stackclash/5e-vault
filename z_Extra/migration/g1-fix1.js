// G1 run 1 fixes (DM, 2026-11-17): gist rewrites for The Nameless God of Secrets and The Ones Who Were Forgotten.
const path = require('path')
const { VAULT, read, write } = require('./fm')
const fixes = {
  '4. World Almanac/Deities/The Nameless God of Secrets.md': 'A nameless god of secrets, worshipped by Patrina Velikovna; possibly Vecna, not decided.',
  '3. The Party/Quests/The Ones Who Were Forgotten.md': 'Completed quest in Thornmere (S35): the villagers were made to forget Eamon Morcant, by a rune buried under his home.',
}
for (const [rel, gist] of Object.entries(fixes)) {
  if (gist.split(/\s+/).length > 20) throw new Error(rel + ': over 20 words')
  const note = read(path.join(VAULT, rel)); note.doc.set('gist', gist); write(note); console.log(rel.split('/').pop())
}
