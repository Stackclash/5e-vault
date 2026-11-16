// J4: move the Travel calculator's transport-cost section onto the party note and the Party Dashboard
// template, with snake_case keys (C5b group 5). Usage: [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const KEYS = { travel_distance: 12, danger_level: 3, familiar_route: true, party_members: 6, lifestyle_cost_sp: 10,
  include_meals: true, coach_cost: 2, coach_cost_per_mile: 100, messenger_cost_per_mile: 5, ship_cost_per_mile: 5 }
const ANCHOR = '## **Characters**\n'
const section = fs.readFileSync(path.join(__dirname, 'j4-section.md'), 'utf8')
const insert = body => {
  if (body.includes('## Transport Services')) throw new Error('section already present')
  if (body.split(ANCHOR).length !== 2) throw new Error('anchor not found exactly once')
  return body.replace(ANCHOR, section + ANCHOR)
}

const party = read(path.join(VAULT, '3. The Party/Parties/Midnight Covenant.md'))
for (const [k, v] of Object.entries(KEYS)) { if (party.doc.has(k)) throw new Error('party has ' + k); party.doc.set(k, v) }
party.body = insert(party.body)
write(party, { dryRun })

const tf = path.join(VAULT, 'z_Templates/Templater/Party/Party Dashboard.md')
let t = fs.readFileSync(tf, 'utf8')
const fmLine = 'travel_calc: 19.999333355554814\n'
if (t.split(fmLine).length !== 2) throw new Error('template fm anchor')
t = t.replace(fmLine, fmLine + Object.entries(KEYS).map(([k, v]) => `${k}: ${v}`).join('\n') + '\n')
t = insert(t).replace('path.join(locationConfig.parties, title)', 'path.join(config.locations.parties, title)')
if (!dryRun) fs.writeFileSync(tf, t)
console.log(`${dryRun ? 'would change' : 'changed'} party note and Party Dashboard template (${Object.keys(KEYS).length} keys, 1 section)`)
