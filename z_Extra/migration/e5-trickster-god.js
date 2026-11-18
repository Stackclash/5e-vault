// E5 sitting 2 (DM, 2026-11-17): story-deity note for Roark's father, named in the vault only as "a Trickster
// God", so Martin Thricefold's worships edge has a target. Same shape as the E3 deity notes; gist and body empty.
// Usage: node e5-trickster-god.js [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const readRel = p => fs.readFileSync(path.join(VAULT, p), 'utf8')

function include(src) {
  return src.replace(/^<% tp\.file\.include\("\[\[(z_Templates\/Partials\/[^\]]+)\]\]"\) %>$/gm, (_, p) => include(readRel(p + '.md')).trimEnd())
}
const src = readRel('z_Templates/Templater/World Building/Deity.md')
const fmClose = src.indexOf('\n---\n', src.indexOf('\n---\n') + 1) + 5
const body = include(src.slice(fmClose, src.lastIndexOf('<%* } else { -%>'))).trimEnd() + '\n'
if (/<%/.test(body)) throw new Error('Templater syntax left in the Deity body')

const rel = '4. World Almanac/Deities/The Trickster God.md'
if (fs.existsSync(path.join(VAULT, rel))) { console.log(`exists, skipped: ${rel}`); process.exit(0) }
const fm = ['obsidianUIMode: preview', 'worlds:', '  - "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"', 'mechanics: ""', 'title: ""', 'symbol: ""',
  'alignment: ""', 'domains: []', 'images: []', 'gist: ""', 'summary: ""', 'revealed: {}', 'reveal: {}', 'facts: []', 'relationships: []',
  'aliases: []', 'tags:', '  - story-deity']
if (!dryRun) fs.writeFileSync(path.join(VAULT, rel), '---\n' + fm.join('\n') + '\n---\n' + body)
console.log(`${dryRun ? 'would create' : 'created'}: ${rel}`)
