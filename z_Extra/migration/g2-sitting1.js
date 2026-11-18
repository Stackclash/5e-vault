// G2 sitting 1 (DM, 2026-11-18): S1-S5 ledgers, reveals, summaries, public names, learned edges, S5 body, wrap.
// Facts are written separately: node e8-facts.js g2-sitting1-facts.json. Usage: node g2-sitting1.js [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write, keyOf, YAML } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const P = 'Midnight Covenant'
const J = '1. DM Toolkit/Session Journals/The Hunt for Vecna'
const W = '4. World Almanac'
const link = (rel, alias) => `[[${rel}|${alias}]]`
const jl = name => link(`${J}/${name}.md`, name)
const E = {
  deathHouse: link(`${W}/Places of Interest/Death House.md`, 'Death House'),
  rose: link(`${W}/NPCs/Rosavalda Rose Durst (COS).md`, 'Rosavalda Rose Durst (COS)'),
  thorn: link(`${W}/NPCs/Thornboldt Thorn Durst (COS).md`, 'Thornboldt Thorn Durst (COS)'),
  donavich: link(`${W}/NPCs/Donavich (COS).md`, 'Donavich (COS)'),
  strahd: link(`${W}/NPCs/Strahd Von Zarovich (COS).md`, 'Strahd Von Zarovich (COS)'),
  ireena: link(`${W}/NPCs/Ireena Kolyana (COS).md`, 'Ireena Kolyana (COS)'),
  tavern: link(`${W}/Shops/Blood of the Vine Tavern.md`, 'Blood of the Vine Tavern'),
  bildrath: link(`${W}/Shops/Bildrath's Mercantile.md`, "Bildrath's Mercantile"),
  church: link(`${W}/Places of Interest/St. Andral's Church.md`, "St. Andral's Church"),
  vistani: link(`${W}/Factions/Vistani.md`, 'Vistani'),
  cmn: link(`${W}/Factions/Children of Mother Night.md`, 'Children of Mother Night'),
}
const PCS = ['Faerah Duskrane', 'Marin', 'Redgrave', "Seluvis Felo'melorn", 'Yevelda Ovak'].map(n => link(`3. The Party/Players/${n}.md`, n))

function open(rel) { return read(path.join(VAULT, rel)) }
function save(note, label) { console.log(`${dryRun ? '[dry] ' : ''}${label}: ${write(note, { dryRun }) ? 'changed' : 'UNCHANGED'}`) }
function setSeq(note, key, values) { const n = note.doc.createNode(values); n.flow = false; note.doc.set(key, n) }
function seq(note, key) { const v = note.doc.get(key); return v && v.toJSON ? v.toJSON() : (v || []) }
function setAfter(note, key, value, after) {
  const had = note.doc.has(key)
  note.doc.set(key, note.doc.createNode(value))
  if (had) return
  const items = note.doc.contents.items
  const p = items.pop()
  items.splice(items.findIndex(i => keyOf(i) === after) + 1, 0, p)
}

// Journals
const journals = {
  'S1 Welcome to Barovia': { add: { locations: [E.deathHouse], npcs: [E.rose, E.thorn] } },
  'S2 Secrets in the Dark': { add: { locations: [E.deathHouse] } },
  'S3 The Look of Desperation': { add: { locations: [E.deathHouse, E.tavern, E.bildrath], npcs: [E.donavich] }, remove: { npcs: [E.strahd] } },
  'S4 Knowing the Road': { add: { factions: [E.vistani] }, party: PCS },
  'S5 Never Trust a Hunter': { add: { npcs: [E.ireena], locations: [E.church], factions: [E.cmn] }, party: PCS, body: true },
}
const S5_OLD = fs.readFileSync(path.join(__dirname, 'g2-s5-old.md'), 'utf8')
const S5_NEW = fs.readFileSync(path.join(__dirname, 'g2-s5-new.md'), 'utf8')
for (const [name, spec] of Object.entries(journals)) {
  const note = open(`${J}/${name}.md`)
  for (const [k, vals] of Object.entries(spec.add || {})) {
    const cur = seq(note, k)
    for (const v of vals) if (!cur.includes(v)) cur.push(v)
    setSeq(note, k, cur)
  }
  for (const [k, vals] of Object.entries(spec.remove || {})) {
    const cur = seq(note, k)
    for (const v of vals) { if (!cur.includes(v)) throw new Error(`${name}: ${k} lacks ${v}`) }
    setSeq(note, k, cur.filter(v => !vals.includes(v)))
  }
  if (spec.party) setSeq(note, 'party_present', spec.party)
  if (spec.body) {
    if (note.body.split(S5_OLD).length !== 2) throw new Error('S5 body string not found exactly once')
    note.body = note.body.replace(S5_OLD, S5_NEW)
  }
  note.doc.set('wrapped', true)
  save(note, name)
}

// Entities
const ents = {
  'Settlements/Village of Barovia.md': { summary: 'A gloomy village where the mists first brought the party together, home to the haunted Death House, a tavern, a general store, and a church.' },
  'Places of Interest/Death House.md': { summary: 'A haunted house in the Village of Barovia, once home to a cult that revered Strahd. The party fought its ghosts and carried out the bones of the children Rose and Thorn.' },
  'NPCs/Rosavalda Rose Durst (COS).md': { summary: "The ghost of a girl who lived in Death House with her little brother Thorn. She guided the party to the house's hidden basement, and they carried her bones out to rest.", public_name: 'Rose',
    edges: { brother: E.thorn.replace('|Thornboldt Thorn Durst (COS)', '|Thornboldt Thorn Durst'), home: E.deathHouse } },
  'NPCs/Thornboldt Thorn Durst (COS).md': { summary: 'The ghost of a small boy who lived in Death House with his sister Rose. His crying drew the party to the house, and they carried his bones out to rest.', public_name: 'Thorn',
    edges: { home: E.deathHouse } },
  'Factions/Durst Family.md': { summary: null, public_name: 'The Death House Family' },
  'NPCs/Ismark Kolyanovich (COS).md': { summary: "Ireena's brother in the Village of Barovia, who asked the party to escort her to Vallaki." },
  'NPCs/Ireena Kolyana (COS).md': { summary: "Ismark's sister, whom Strahd wants and has bitten twice. The party escorted her from the Village of Barovia to St. Andral's Church in Vallaki.",
    edges: { brother: link(`${W}/NPCs/Ismark Kolyanovich (COS).md`, 'Ismark Kolyanovich'), enemy: link(`${W}/NPCs/Strahd Von Zarovich (COS).md`, 'Strahd Von Zarovich') }, edgeSession: 'S3 The Look of Desperation' },
  'NPCs/Donavich (COS).md': { summary: "The nervous priest of the Village of Barovia's church; screams rise from its basement, and he admits they come from his son." },
  'Places of Interest/Tser Pool.md': { summary: "A Vistani camp by a pool, where the seer Madam Eva reads fortunes. The party laid the Death House children's bones to rest beneath a willow nearby." },
  'NPCs/Madam Eva (COS).md': { summary: "A Vistani seer at Tser Pool who seemed to know the party's pasts and read their fortune with tarot cards.", reveal: ['occupation'] },
  'Factions/Vistani.md': { summary: "Barovia's travelling folk. At Tser Pool the party met Magda, who sells potions, Alek the storyteller, and Sergei the dollmaker." },
  'Settlements/Vallaki.md': { summary: 'keep' },
  "Places of Interest/St. Andral's Church.md": { summary: "Father Lucian's church in Vallaki, where the party brought Ireena for sanctuary. The saint's bones, which protected it from Barovia's evil, were stolen from its crypt." },
}
for (const [rel, spec] of Object.entries(ents)) {
  if (spec.summary === null) { console.log(`skip (summary pending): ${rel}`); continue }
  const note = open(`${W}/${rel}`)
  note.doc.set('revealed', note.doc.createNode({ [P]: true }))
  if (spec.summary === 'keep') { if (!note.doc.get('summary')) throw new Error(rel + ': expected a summary') }
  else if (spec.summary) { if (note.doc.get('summary')) throw new Error(rel + ': summary not empty'); note.doc.set('summary', spec.summary) }
  if (spec.public_name) setAfter(note, 'public_name', { [P]: spec.public_name }, 'reveal')
  if (spec.reveal) note.doc.set('reveal', note.doc.createNode({ [P]: spec.reveal }))
  if (spec.edges) {
    const rels = note.doc.get('relationships')
    rels.flow = false
    for (const [type, target] of Object.entries(spec.edges)) {
      const it = rels.items.find(i => i.get('type') === type && i.get('target') === target)
      if (!it) throw new Error(`${rel}: no ${type} edge to ${target}`)
      it.flow = false
      it.set('learned', note.doc.createNode({ [P]: jl(spec.edgeSession || 'S1 Welcome to Barovia') }))
    }
  }
  save(note, rel)
}

// Held back
const cmn = open(`${W}/Factions/Children of Mother Night.md`)
cmn.doc.set('revealed', cmn.doc.createNode({ [P]: false }))
save(cmn, 'Children of Mother Night (held back)')
