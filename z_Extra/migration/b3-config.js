// B3 change 1: add enums, settlement_wealth, shop_defaults, rules_lookup to Configuration (04 Expansion §1.2).
// Change 2 (weather) was deferred to J7 by the DM on 2026-11-16. Usage: [--dry-run]
const path = require('path')
const { VAULT, read, write, YAML } = require('./fm')

const dryRun = process.argv.includes('--dry-run')
const SNIPPET = `enums:
  npc_roles: [villain, lieutenant, patron, ally, contact, rival, minor]
  npc_conditions: [healthy, injured, captured, missing, dead, unknown]
  party_relationships: [Acquaintance, Friendly, Ally, Disgruntled, Enemy]
  party_standings: [Hostile, Unfriendly, Neutral, Friendly, Allied]
  location_statuses: [thriving, stable, wary, besieged, occupied, ruined]
  faction_kinds: [guild, cult, order, house, court, family, company, other]
  faction_statuses: [active, broken, dormant, destroyed]
  alignments: [Lawful Good, Neutral Good, Chaotic Good, Lawful Neutral, Neutral, Chaotic Neutral, Lawful Evil, Neutral Evil, Chaotic Evil]
settlement_wealth:
  - {name: destitute, price: 0.8}
  - {name: poor, price: 0.9}
  - {name: modest, price: 1}
  - {name: prosperous, price: 1.15}
  - {name: rich, price: 1.3}
shop_defaults: {buy_rate: 0.5}
rules_lookup:
  sources:
    - {path: "5. Mechanics/Spells", kind: Spell}
    - {path: "5. Mechanics/Rules", kind: Rule, sections: true}
    - {path: "6. Resources/Books/Players Handbook 2014", kind: Rule, sections: true}
    - {path: "6. Resources/Books/Dungeon Masters Guide 2014", kind: Rule, sections: true}
    - {path: "5. Mechanics/Items", kind: Item, default_off: true}
`
const note = read(path.join(VAULT, '1. DM Toolkit/Configuration.md'))
const add = YAML.parseDocument(SNIPPET)
for (const pair of add.contents.items) {
  const k = pair.key.value
  if (note.doc.has(k)) throw new Error(`${k} already present`)
  note.doc.contents.items.push(pair)
  console.log(`add ${k}`)
}
console.log(write(note, { dryRun }) ? (dryRun ? 'would write' : 'written') : 'no change')
