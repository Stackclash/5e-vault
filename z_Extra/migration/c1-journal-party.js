// C1: journals campaign: -> party: (the party of the linked campaign note), in the same position,
// and swap the body's Campaign input row for the template's Party row. Usage: [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write, keyOf, YAML } = require('./fm')

const dryRun = process.argv.includes('--dry-run')
const dir = path.join(VAULT, '1. DM Toolkit/Session Journals/The Hunt for Vecna')
const OLD_ROW = '> | **Campaign:** | `INPUT[suggester(optionQuery(#campaign)):campaign]` |'
const NEW_ROW = '> | **Party:** | `INPUT[suggester(optionQuery(#party)):party]` |'
const partyOf = {}
let changed = 0, rows = 0
const skipped = []

for (const name of fs.readdirSync(dir).filter(f => f.endsWith('.md'))) {
  const note = read(path.join(dir, name))
  if (!note.doc || !note.doc.has('campaign')) continue
  if (note.doc.has('party')) { skipped.push(`${name}: already has party`); continue }
  if (note.doc.get('wrapped') === true) { skipped.push(`${name}: wrapped`); continue }
  const link = note.doc.get('campaign')
  const target = /^\[\[([^|\]]+)/.exec(link)?.[1]
  if (!(target in partyOf)) {
    const c = target && fs.existsSync(path.join(VAULT, target)) ? read(path.join(VAULT, target)) : null
    partyOf[target] = c?.doc?.get('party') ?? null
  }
  const party = partyOf[target]
  if (!party) { skipped.push(`${name}: campaign ${link} has no party`); continue }

  const pair = note.doc.contents.items.find(p => keyOf(p) === 'campaign')
  pair.key = note.doc.createNode('party')
  pair.value.value = party

  const n = note.body.split(OLD_ROW).length - 1
  if (n === 1) { note.body = note.body.replace(OLD_ROW, NEW_ROW); rows++ }
  else skipped.push(`${name}: Campaign row found ${n} times; body left unchanged`)

  write(note, { dryRun })
  changed++
}
console.log(`${dryRun ? 'would change' : 'changed'} ${changed} journals (${rows} body rows swapped)`)
skipped.forEach(s => console.log('SKIP ' + s))
