// E5 (DM, 2026-11-17): Vecna as an NPC note, so prose ties to him (Marrow, Martin, Izek, the campaign) have
// a target. Created from the NPC template with its defaults; gist, location, and body text empty: no lore
// invented. Usage: node e5-vecna.js [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const readRel = p => fs.readFileSync(path.join(VAULT, p), 'utf8')

function include(src) {
  return src.replace(/^<% tp\.file\.include\("\[\[(z_Templates\/Partials\/[^\]]+)\]\]"\) %>$/gm, (_, p) => include(readRel(p + '.md')).trimEnd())
}
const src = readRel('z_Templates/Templater/World Building/NPC.md')
const start = src.indexOf('<%* if (!templateError) { -%>\n') + '<%* if (!templateError) { -%>\n'.length
const note = src.slice(start, src.lastIndexOf('<%* } else { -%>'))
  .replace('location: <% JSON.stringify(data.location ?? "") %>', 'location: ""')
  .replace('  - <% JSON.stringify(data.name) %>', '  - Vecna')
  .replace('gist: <% JSON.stringify(data.gist ?? "") %>', 'gist: ""')
const text = include(note).trimEnd() + '\n'
if (/<%/.test(text)) throw new Error('Templater syntax left in the NPC note')

const rel = '4. World Almanac/NPCs/Vecna.md'
if (fs.existsSync(path.join(VAULT, rel))) { console.log(`exists, skipped: ${rel}`); process.exit(0) }
if (!dryRun) fs.writeFileSync(path.join(VAULT, rel), text)
console.log(`${dryRun ? 'would create' : 'created'}: ${rel}`)
