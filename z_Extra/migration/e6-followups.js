// E6 follow-ups (DM, 2026-11-17): Redgrave examined Marrow's body and took the amber gem in S44.
// Lines 1a-1e (S44 journal) and 2 (campaign note, with the party's knowledge of the gem). Line 5 held: its text is Marrow's summary, not history.
// Body edits are exact string replacements. Usage: node e6-followups.js [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')

const RG = '[[3. The Party/Players/Redgrave|Redgrave]]'
const S44 = '1. DM Toolkit/Session Journals/The Hunt for Vecna/S44 The Other Roark.md'
const CAMPAIGN = '1. DM Toolkit/Campaigns/The Hunt for Vecna.md'

function swap(text, from, to, where) {
  const n = text.split(from).length - 1
  if (n !== 1) throw new Error(`${where}: expected 1 match, found ${n}: ${from.slice(0, 70)}`)
  return text.replace(from, () => to)
}
function editFmString(note, key, from, to) {
  note.doc.set(key, swap(note.doc.get(key), from, to, `${note.file} ${key}`))
}

// S44: 1a, 1b, 1c (body), 1d (summary), 1e (items ledger)
{
  const note = read(path.join(VAULT, S44))
  let body = note.body
  body = swap(body, '- [[Marrow]] carried an amber gem lodged at the base of its neck. The party has not investigated it, or recovered the body #remember',
    `- [[Marrow]] carried an amber gem lodged at the base of its neck. ${RG} examined the body and took the gem #remember`, '1a')
  body = swap(body, "- An amber gem lodged at the base of [[Marrow|Marrow's]] neck — left with the body, uninvestigated",
    `- [[Marrow's Amber Gem]], lodged at the base of [[Marrow|Marrow's]] neck — taken by ${RG} after he examined the body`, '1b')
  body = swap(body, 'The party left the body in place to investigate later.',
    `The party left the body in place to investigate later; ${RG} later examined it and took the gem.`, '1c')
  note.body = body
  editFmString(note, 'summary', 'The party left the body where it fell to come back to.',
    'The party left the body where it fell to come back to, and Redgrave later examined it and took the gem.')
  note.doc.set('items', note.doc.createNode(["[[4. World Almanac/Items/Marrow's Amber Gem.md|Marrow's Amber Gem]]"]))
  write(note, { dryRun })
  console.log(`${dryRun ? '[dry] ' : ''}${S44}: 1a-1e`)
}

// Campaign note: 2, plus the Plan Changelog line
{
  const note = read(path.join(VAULT, CAMPAIGN))
  let body = note.body
  body = swap(body, 'the party left the body in the street and has not examined the amber gem, which is uninvestigated physical evidence tying the Marrow-rite to',
    "[[Redgrave]] examined the body and took the amber gem ([[Marrow's Amber Gem]], S44), physical evidence tying the Marrow-rite to", '2')
  body = swap(body, "whenever it's wanted.",
    "whenever it's wanted. The party knows the gem can hold a creature's essence and that it held Roark's (DM, 2026-11-17).", '2 knowledge')
  const log = "## Plan Changelog\n- 2026-11-17: Active Threads, Marrow bullet: the amber gem is no longer unexamined. Redgrave examined Marrow's body and took the gem in S44, and the party knows it can hold a creature's essence and held Roark's (DM correction, E6 follow-up).\n\n"
  body = swap(body, '\n```meta-bind-button\nlabel: Edit all\n', '\n' + log + '```meta-bind-button\nlabel: Edit all\n', 'changelog')
  note.body = body
  write(note, { dryRun })
  console.log(`${dryRun ? '[dry] ' : ''}${CAMPAIGN}: 2 + changelog`)
}
