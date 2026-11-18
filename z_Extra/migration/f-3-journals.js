// F follow-up (DM, 2026-11-17).
//  S10: move ## Errata back out of the leftover-prep callout (f-dm-text.js wrapped it by mistake)
//  F-3a S14: the Khazan sub-bullet in a [!dm] callout; Errata line added (DM's account)
//  F-3b S15: Seluvis cure line loses #remember #secret (the party knows; S18)
//  F-3c-i S15: werewolf power-struggle line in a [!dm] callout
// Usage: node f-3-journals.js [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const J = path.join(VAULT, '1. DM Toolkit/Session Journals/The Hunt for Vecna')
const open = n => read(path.join(J, fs.readdirSync(J).find(x => x.startsWith(`S${n} `))))
const one = (L, pred, what) => { const i = L.findIndex(pred); if (i < 0 || L.filter(pred).length !== 1) throw new Error('not found once: ' + what); return i }
const done = (note, label) => { write(note, { dryRun }); console.log(`${dryRun ? '[dry] ' : ''}${label}`) }

{ // S10
  const note = open(10); const L = note.body.split('\n')
  const i = one(L, l => l === '> ## Errata', 'S10 errata')
  let e = i; while (L[e + 1]?.startsWith('>')) e++
  const errata = L.slice(i, e + 1).map(l => l.replace(/^> ?/, ''))
  let s = i; while (L[s - 1] === '>') s--                       // drop the callout's trailing empty quote lines
  L.splice(s, e + 1 - s, '', ...errata)
  note.body = L.join('\n'); done(note, 'S10: Errata moved out of the callout')
}
{ // S14
  const note = open(14); const L = note.body.split('\n')
  const i = one(L, l => l.startsWith('\t- Khazan is now bound to'), 'S14 Khazan')
  L.splice(i, 1, '', '> [!dm]', '> ' + L[i].replace(/^\t/, ''), '')
  const b = L.indexOf('```meta-bind-button')
  const errata = ['## Errata', "- 2026-11-17: After the party defeated Khazan in Van Richten's Tower, he was bound to Strahd in Castle Ravenloft. The party never encountered him in the castle, and with Castle Ravenloft destroyed he is gone (DM).", '']
  if (L.some(l => l === '## Errata')) throw new Error('S14 already has Errata')
  L.splice(b, 0, ...errata)
  note.body = L.join('\n'); done(note, 'S14: Khazan callout, Errata')
}
{ // S15
  const note = open(15); let L = note.body.split('\n')
  const c = one(L, l => l.includes('[[Ezmerelda Davenir]] knows of this cure. #remember #secret'), 'S15 cure')
  L[c] = L[c].replace('knows of this cure. #remember #secret', 'knows of this cure.')
  const w = one(L, l => l.startsWith('- There is a internal power struggle among the werewolves'), 'S15 struggle')
  L.splice(w, 1, ...(L[w - 1].trim() ? [''] : []), '> [!dm]', '> ' + L[w], ...(L[w + 1]?.trim() ? [''] : []))
  note.body = L.join('\n'); done(note, 'S15: cure tags dropped, struggle callout')
}
