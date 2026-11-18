// G1 follow-ups (DM, 2026-11-17). V-1..V-4: Vallaki is governed by a council of elders with Urwin as head elder.
// The Ones Who Were Forgotten: step outcome rewritten in the DM's words. Usage: node g1-fix3.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const tag = s => console.log((dryRun ? '[dry] ' : '') + s)
const URWIN = '[[4. World Almanac/NPCs/Urwin Martikov (COS).md|Urwin Martikov]]'
{
  const note = read(path.join(VAULT, '4. World Almanac/Settlements/Vallaki.md'))
  if (note.doc.get('summary') !== 'Hello') throw new Error('Vallaki summary is not the placeholder')
  note.doc.set('summary', 'A Barovian town governed by a council of elders that the party set up after Strahd\'s fall, with Urwin Martikov as head elder.')
  note.doc.set('rulers', note.doc.createNode([URWIN]))
  note.doc.set('government', 'Council of elders')
  write(note, { dryRun }); tag('Vallaki: summary, rulers, government')
}
{
  const note = read(path.join(VAULT, '4. World Almanac/NPCs/Urwin Martikov (COS).md'))
  note.doc.get('occupation').items.push(note.doc.createNode('Head Elder of Vallaki'))
  write(note, { dryRun }); tag('Urwin: occupation + Head Elder of Vallaki')
}
{
  const note = read(path.join(VAULT, '3. The Party/Quests/The Ones Who Were Forgotten.md'))
  note.doc.getIn(['steps', 0]).set('outcome', "The party broke the magic rune that hid Eamon from the villagers' memories, and Redgrave cured the children of their unnatural knowledge with Remove Curse ([[1. DM Toolkit/Session Journals/The Hunt for Vecna/S35 The Forgotten Man of Thornmere.md|S35]]).")
  write(note, { dryRun }); tag('The Ones Who Were Forgotten: outcome')
}
