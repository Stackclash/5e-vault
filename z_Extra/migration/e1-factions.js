// E1: create the faction notes the DM approved (2026-11-17) from the Faction template. No lore is invented:
// gist and DM Notes stay empty; location (headquarters) only where the vault already states it or the
// name contains it. Never overwrites an existing note. Usage: node e1-factions.js [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const read = p => fs.readFileSync(path.join(VAULT, p), 'utf8')

const POI = n => `[[4. World Almanac/Places of Interest/${n}.md|${n}]]`
const FACTIONS = [
  ['Umbral Athenaeum Council', 'order', POI('The Umbral Athenaeum')],
  ['Keepers of the Feather', 'order'],
  ['Silent Ascendency', 'cult'],
  ["Ferrymen's Guild", 'guild', '[[4. World Almanac/Settlements/Duskferry.md|Duskferry]]'],
  ['Order of the Silver Dragon', 'order'],
  ['Belview Family', 'family'],
  ['Durst Family', 'family'],
  ['House Vallakovich', 'house'],
  ['House Wachter', 'house', POI('Wachterhaus')],
  ['House von Zarovich', 'house'],
  ['House Petrovich', 'house'],
  ["Strahd's Brides", 'other'],
  ['Children of Mother Night', 'other'],
  ["Morgantha's Coven", 'other'],
  ['Vallaki Wolf Hunters', 'other'],
  ['Gloaming Court', 'other'],
  ['The Unbroken Circle', 'other'],
  ['Circle of Eight', 'other'],
  ['Clergy of the Morninglord', 'other'],
  ['Vistani', 'other'],
  ['Dusk Elves of Barovia', 'other', '[[4. World Almanac/Regions/Barovia.md|Barovia]]'],
  ['Dusk Elves of Duskferry', 'other', '[[4. World Almanac/Settlements/Duskferry.md|Duskferry]]'],
  ['Eternal Watch', 'other'],
]

// Faction template body, rendered statically (as c9-reskin.js does).
function include(src) {
  return src.replace(/^<% tp\.file\.include\("\[\[(z_Templates\/Partials\/[^\]]+)\]\]"\) %>$/gm, (_, p) => include(read(p + '.md')).trimEnd())
}
const src = read('z_Templates/Templater/World Building/Faction.md')
const fmClose = src.indexOf('\n---\n', src.indexOf('\n---\n') + 1) + 5
const body = include(src.slice(fmClose, src.lastIndexOf('<%* } else { -%>'))).trimEnd() + '\n'
if (/<%/.test(body)) throw new Error('Templater syntax left in the Faction body')

const q = s => JSON.stringify(s)
for (const [name, kind, location = ''] of FACTIONS) {
  const rel = `4. World Almanac/Factions/${name}.md`
  if (fs.existsSync(path.join(VAULT, rel))) { console.log(`exists, skipped: ${rel}`); continue }
  if (location && !fs.existsSync(path.join(VAULT, /\[\[([^|\]]+)/.exec(location)[1]))) throw new Error(`location not found: ${location}`)
  const fm = [
    'obsidianUIMode: preview', `kind: ${kind}`, 'status: active', `location: ${q(location)}`, 'bases: []', 'images: []',
    'gist: ""', 'summary: ""', 'revealed: {}', 'reveal: {}', 'facts: []', 'goals: ""', 'resources: ""', 'symbol: ""', 'motto: ""',
    'clock: []', 'standing: {}', 'renown: {}', 'relationships: []', 'aliases: []', 'tags:', '  - faction',
  ]
  if (!dryRun) fs.writeFileSync(path.join(VAULT, rel), '---\n' + fm.join('\n') + '\n---\n' + body)
  console.log(`${dryRun ? 'would create' : 'created'}: ${rel}`)
}
