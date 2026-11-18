// G1 follow-up (DM, 2026-11-17): Karl Wachter added to S33's npcs ledger. Usage: node g1-s33-karl.js [--dry-run]
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const KARL = '[[4. World Almanac/NPCs/Karl Wachter (COS).md|Karl Wachter (COS)]]'
const note = read(path.join(VAULT, '1. DM Toolkit/Session Journals/The Hunt for Vecna/S33 The Fall of Strahd.md'))
const npcs = note.doc.get('npcs')
if (npcs.items.some(i => String(i.value ?? i).includes('Karl Wachter'))) throw new Error('already listed')
npcs.items.push(note.doc.createNode(KARL))
console.log(`${dryRun ? '[dry] ' : ''}S33 npcs: ${write(note, { dryRun }) ? '+ Karl Wachter' : 'unchanged'}`)
