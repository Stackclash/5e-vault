// E7 (DM, 2026-11-17): quest links from description links (E7-1..5), quest parents (E7-11, 12), and three
// arc notes copied from the campaign note's "The Hunt — Campaign Arc" section (E7-6..10). Arc notes are
// rendered statically from the Quest template (tp.file.include inlined). Usage: node e7-quests.js [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write, YAML } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const readRel = p => fs.readFileSync(path.join(VAULT, p), 'utf8')
const L = (p, n) => `[[${p}.md|${n}]]`
const Q = '3. The Party/Quests'
const PARTY = 'Midnight Covenant'

const SA = L('4. World Almanac/Factions/Silent Ascendency', 'Silent Ascendency')
const HUNT = L(`${Q}/The Hunt`, 'The Hunt')
const ACT1 = L(`${Q}/Act I - The World-Truth Working`, 'Act I - The World-Truth Working')
const ACT2 = L(`${Q}/Act II - The Ascension Rite`, 'Act II - The Ascension Rite')
const ELDORIA = L('4. World Almanac/Worlds/Eldoria', 'Eldoria')
const S44 = L('1. DM Toolkit/Session Journals/The Hunt for Vecna/S44 The Other Roark', 'S44 The Other Roark')

// ---- existing quests ----
const edits = {
  'The Second Ledger': {
    parent: ACT1,
    giver: L('4. World Almanac/NPCs/Lord Caldris Velmont', 'Lord Caldris Velmont'),
    locations: [L('4. World Almanac/Places of Interest/The Cinderworks', 'The Cinderworks'),
      L('4. World Almanac/Settlements/Duskferry', 'Duskferry'),
      L('4. World Almanac/Places of Interest/Greyfen Hollow', 'Greyfen Hollow')],
    factions: [SA, L("4. World Almanac/Factions/Ferrymen's Guild", "Ferrymen's Guild")],
  },
  'The Well of Many Worlds': {
    parent: ACT1,
    giver: L('4. World Almanac/NPCs/Professor Gousse Windcaller', 'Professor Gousse Windcaller'),
    factions: [SA],
  },
}
for (const [name, set] of Object.entries(edits)) {
  const note = read(path.join(VAULT, Q, name + '.md'))
  for (const [k, v] of Object.entries(set)) {
    const cur = note.doc.get(k)
    if (cur && (typeof cur === 'string' ? cur : cur.items?.length)) throw new Error(`${name}: ${k} is not empty`)
    note.doc.set(k, typeof v === 'string' ? v : note.doc.createNode(v))
  }
  // parent sits right after kind, as in the template
  const items = note.doc.contents.items
  const pi = items.findIndex(p => p.key.value === 'parent'), [pair] = items.splice(pi, 1)
  items.splice(items.findIndex(p => p.key.value === 'kind') + 1, 0, pair)
  write(note, { dryRun })
  console.log(`${dryRun ? '[dry] ' : ''}${name}: ${Object.keys(set).join(', ')}`)
}

// ---- arc notes ----
const camp = readRel('1. DM Toolkit/Campaigns/The Hunt for Vecna.md').split('\n')
const at = (s, from = 0) => { const i = camp.indexOf(s, from); if (i < 0) throw new Error('missing heading ' + s); return i }
const hSection = at('# The Hunt — Campaign Arc'), hAct1 = at('## Act I — The World-Truth Working'),
  hAct2 = at('## Act II — The Ascension Rite'), hEnd = at('## Endings'), hNext = at('# Character Tie-Ins')
const nonEmpty = (a, b) => camp.slice(a + 1, b).filter(l => l.trim())
const numbered = (a, b) => camp.slice(a + 1, b).filter(l => /^\d+\. /.test(l)).map(l => l.replace(/^\d+\. /, ''))
const firstPara = (a, b) => nonEmpty(a, b)[0]

const act1Steps = numbered(hAct1, hAct2)
const act2Steps = numbered(hAct2, hEnd)
if (act1Steps.length !== 7 || act2Steps.length !== 7) throw new Error('expected 7 stages per act')
const calloutStart = camp.findIndex((l, i) => i > hAct1 && l.startsWith('> [!warning]- DM only'))
let calloutEnd = calloutStart; while (camp[calloutEnd + 1]?.startsWith('>')) calloutEnd++
const callout = camp.slice(calloutStart, calloutEnd + 1)
const endingsText = camp.slice(hEnd + 1, hNext).join('\n').trim()

const step = (text, played) => played
  ? { text, completed: { [PARTY]: true }, status: 'played', outcome: `Closed out in S44 with Marrow dead, its frame-man in custody, and the last Bruokdon shipment intercepted (${S44}).` }
  : { text, completed: { [PARTY]: false }, status: 'planned', outcome: '' }

const arcs = [
  { file: 'The Hunt', parent: '', active: true,
    description: firstPara(hSection, hAct1) + '\n\nEndings:\n\n' + endingsText, steps: [], dm: [] },
  { file: 'Act I - The World-Truth Working', parent: HUNT, active: true,
    description: firstPara(hAct1, hAct2), steps: act1Steps.map((t, i) => step(t, i === 0)), dm: callout },
  { file: 'Act II - The Ascension Rite', parent: HUNT, active: false,
    description: firstPara(hAct2, hEnd), steps: act2Steps.map(t => step(t, false)), dm: [] },
]

function include(src) {
  return src.replace(/^<% tp\.file\.include\("\[\[(z_Templates\/Partials\/[^\]]+)\]\]"\) %>$/gm, (_, p) => include(readRel(p + '.md')).trimEnd())
}
const src = readRel('z_Templates/Templater/Campaign/Quest.md')
const start = src.indexOf('<%* if (!templateError) { -%>\n') + '<%* if (!templateError) { -%>\n'.length
const scaffold = include(src.slice(start, src.lastIndexOf('<%* } else { -%>')))
const body = scaffold.slice(scaffold.indexOf('\n---\n', 4) + 5)
const DM_HEAD = '> > ## DM Notes\n'
if (body.split(DM_HEAD).length !== 2 || /<%/.test(body)) throw new Error('scaffold problem')

for (const a of arcs) {
  const rel = `${Q}/${a.file}.md`
  if (fs.existsSync(path.join(VAULT, rel))) throw new Error(rel + ' exists')
  const fm = {
    obsidianUIMode: 'preview', kind: 'arc', parent: a.parent, world: ELDORIA,
    active: { [PARTY]: a.active }, completed: { [PARTY]: false },
    gist: '', summary: '', revealed: {}, facts: [], description: a.description,
    stakes: '', reward: '', deadline: '', giver: '', npcs: [], locations: [], items: [], factions: [], pcs: [],
    steps: a.steps, tags: ['quest'],
  }
  const doc = new YAML.Document(fm)
  YAML.visit(doc, { Scalar(_, node) { if (typeof node.value === 'string' && /^\[\[/.test(node.value)) node.type = 'QUOTE_DOUBLE' } })
  doc.get('description', true).type = 'BLOCK_LITERAL'
  const dm = a.dm.map(l => '> > ' + l + '\n').join('')
  const out = '---\n' + doc.toString({ lineWidth: 0 }) + '---\n' +
    body.replace(DM_HEAD, DM_HEAD + dm + '> >\n> > ## Plan Changelog\n')
  console.log(`${dryRun ? '[dry] ' : ''}create ${rel}: ${a.steps.length} steps`)
  if (!dryRun) fs.writeFileSync(path.join(VAULT, rel), out)
}
