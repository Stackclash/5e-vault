// F2-0 (DM, 2026-11-17): each note's legacy `secrets` text moves verbatim to the end of its DM tab's
// ### Hidden Details (lines prefixed "> > "), then the key is deleted. F2-19: Marrow's outdated corpse
// sentence is dropped. F2-8r, F2-14r: Hesper Crane and Lord Caldris Velmont revealed with summaries.
// Facts are written separately (e8-facts.js f2-sitting.json). Usage: node f2-secrets.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const NPCS = '4. World Almanac/NPCs'
const notes = ['Anastrasya Karelova (COS)', 'Anselm Corrow', 'Baba Lysaga (COS)', 'Hesper Crane', 'Izek Strazni (COS)',
  'Lord Caldris Velmont', 'Marrow', 'Naerissa', 'Ostwin Reyes']
const DROP = { Marrow: ' The party left the corpse in the street with the gem still in it and has examined neither — this is the live hook into the Amber Wardens thread.' }
const REVEAL = {
  'Hesper Crane': 'The Cinderworks quartermaster whose ledger pointed the party to Duskferry.',
  'Lord Caldris Velmont': 'The Bruokdon noble the party freed from the doppelganger who had taken his place.',
}

for (const n of notes) {
  const note = read(path.join(VAULT, NPCS, n + '.md'))
  let text = note.doc.get('secrets')
  if (typeof text !== 'string' || !text.trim()) throw new Error(n + ': no secrets text')
  if (DROP[n]) {
    if (text.split(DROP[n]).length !== 2) throw new Error(n + ': drop sentence not found once')
    text = text.replace(DROP[n], '')
  }
  const L = note.body.split('\n')
  const hd = L.indexOf('> > ### Hidden Details')
  const next = L.findIndex((l, i) => i > hd && /^> > ###? /.test(l))
  if (hd < 0 || next < 0 || L[next - 1] !== '> >') throw new Error(n + ': Hidden Details layout')
  const paras = text.split('\n').filter(l => l.trim())
  const block = paras.flatMap((p, i) => (i ? ['> >', '> > ' + p] : ['> > ' + p]))
  const sep = L[next - 2] !== '> >' && next - 2 !== hd ? ['> >'] : []
  L.splice(next - 1, 0, ...sep, ...block)
  note.body = L.join('\n')
  note.doc.delete('secrets')
  if (REVEAL[n]) {
    if (note.doc.get('summary')) throw new Error(n + ': summary is not empty')
    note.doc.set('revealed', note.doc.createNode({ 'Midnight Covenant': true }))
    note.doc.set('summary', REVEAL[n])
  }
  write(note, { dryRun })
  console.log(`${dryRun ? '[dry] ' : ''}${n}: ${paras.length} paragraphs moved${REVEAL[n] ? '; revealed' : ''}`)
}
