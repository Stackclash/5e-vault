// C9 [J] dry run: for each field note, compare the body above its anchor (## Stats on NPCs, ## DM Notes
// elsewhere; the whole body when there is no anchor) with every pre-C6 version of the templates that
// could have produced it. A line is template output if it matches a template line, with Templater
// <% %> and Qute { } expressions as wildcards. Notes whose every line matches are re-skinned
// mechanically; the rest are listed with their non-template lines for the DM.
// Read-only. Usage: node c9-dryrun.js [--out report.md] [--type npc]
const fs = require('fs')
const path = require('path')
const { execFileSync } = require('child_process')
const { VAULT } = require('./fm')

const arg = k => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : null }
const OLD = '642502fba'  // last commit before C6 touched the templates
const T = 'z_Templates/Templater/World Building/', O = 'z_Templates/World Building/'
const TEMPLATES = {
  npc: [T + 'NPC.md', O + 'NPC.md', 'z_Templates/Text Generator/NPC.md', 'z_Extra/ttrpg-convert/templates/monster.txt'],
  region: [T + 'Location.md', O + 'Location.md', O + 'Region.md'],
  settlement: [T + 'Location.md', O + 'Location.md', O + 'Settlement.md'],
  'place-of-interest': [T + 'Location.md', O + 'Location.md', O + 'Place of Interest.md'],
  world: [T + 'Location.md', O + 'Location.md'],
  shop: [T + 'Shop.md', O + 'Shop.md'],
  quest: ['z_Templates/Templater/Campaign/Quest.md'],
}
const DIRS = ['4. World Almanac', '3. The Party/Quests']
// Layout variants found in notes but in no committed template version: scaffolding, not content.
const SCAFFOLD = [
  /^> \[!infobox ?\| ?wsmall\]$/,
  /^> \*\*Party Relationship\*\* \| `\$=await dv\.view\('utils\/metaBindInput'.*party_relationships.*\|$/,
  /^`INPUT\[number\(title\("Economic Scale"\)\):economic_scale\]`$/,
  /^`\$=await dv\.view\("views\/locations", \{current: dv\.current\(\)\}\)`$/,
]

const git = (...a) => execFileSync('git', a, { cwd: VAULT, encoding: 'utf8', maxBuffer: 64 << 20 })
const norm = l => l.replace(/\s+/g, ' ').trim()
const WILD = '\u0000'

function patternsFor(files) {
  const exact = new Set(), regex = new Set()
  for (const f of files) {
    let revs = []
    try { revs = git('rev-list', OLD, '--', f).split('\n').filter(Boolean) } catch { continue }
    for (const r of revs) {
      let src
      try { src = git('show', `${r}:${f}`) } catch { continue }
      for (let line of src.split('\n')) {
        line = line.replace(/<%[\s\S]*?%>/g, WILD)
        if (f.endsWith('.txt')) line = line.replace(/(?<!\\)\{[^{}]*?(?<!\\)\}/g, WILD).replace(/\\([{}])/g, '$1')
        const n = norm(line)
        if (!n || n === WILD || /^<%/.test(n)) continue
        // A wildcard line must keep real literal text, or "> <% x %>" would match any callout line.
        if (n.includes(WILD) && n.split(WILD).join('').replace(/[\s>|*#\-`'"()[\]{}:,.=]/g, '').length < 4) continue
        if (n.includes(WILD)) regex.add('^' + n.split(WILD).map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('.*') + '$')
        else exact.add(n)
      }
    }
  }
  return { exact, regex: [...regex].map(s => new RegExp(s)) }
}

function walk(rel, out = []) {
  for (const e of fs.readdirSync(path.join(VAULT, rel), { withFileTypes: true })) {
    const r = path.posix.join(rel, e.name)
    if (e.isDirectory()) walk(r, out); else if (r.endsWith('.md')) out.push(r)
  }
  return out
}

const only = arg('--type')
const notes = DIRS.flatMap(d => walk(d)).map(rel => {
  const raw = fs.readFileSync(path.join(VAULT, rel), 'utf8')
  const m = /^---\n([\s\S]*?)\n---[ \t]*\n?/.exec(raw)
  const tags = m ? [...m[1].matchAll(/^\s*-\s*([a-z-]+)\s*$/gm)].map(x => x[1]) : []
  const type = Object.keys(TEMPLATES).find(t => tags.includes(t))
  return type && { rel, type, body: m ? raw.slice(m[0].length) : raw }
}).filter(n => n && (!only || n.type === only))

const cache = {}
const results = notes.map(n => {
  const pats = cache[n.type] ??= patternsFor(TEMPLATES[n.type])
  const anchor = n.type === 'npc' ? /^## Stats\b/m : /^(> )*#+ DM Notes\b/m
  const a = anchor.exec(n.body)
  let above = a ? n.body.slice(0, a.index) : n.body
  // Leaflet blocks move into the Map tab unchanged (minus tutorial comments), so their lines are kept, not lost.
  const hasMap = /```leaflet/.test(above)
  above = above.replace(/^(>\s?)*```leaflet[\s\S]*?^(>\s?)*```\s*$/gm, '')
  const differing = above.split('\n').map(norm)
    .filter(l => l && !SCAFFOLD.some(r => r.test(l)) && !pats.exact.has(l) && !pats.regex.some(r => r.test(l)))
  return { ...n, anchored: !!a, hasMap, differing }
})

const lines = [`# C9 dry run (${new Date().toISOString().slice(0, 10)})`, '',
  `Templates compared: every version up to ${OLD}. ${results.length} notes.`, '']
for (const type of Object.keys(TEMPLATES)) {
  const rs = results.filter(r => r.type === type)
  if (!rs.length) continue
  const clean = rs.filter(r => !r.differing.length)
  lines.push(`## ${type}: ${clean.length} of ${rs.length} match`, '')
  for (const r of rs.filter(r => r.differing.length)) {
    lines.push(`### ${r.rel}${r.anchored ? '' : ' (no anchor: whole body compared)'}`, '')
    for (const d of r.differing.slice(0, 25)) lines.push('    ' + d.slice(0, 200))
    if (r.differing.length > 25) lines.push(`    … ${r.differing.length - 25} more`)
    lines.push('')
  }
}
const out = arg('--out')
if (out) fs.writeFileSync(out, lines.join('\n') + '\n')
for (const type of Object.keys(TEMPLATES)) {
  const rs = results.filter(r => r.type === type)
  if (rs.length) console.log(`${type}: ${rs.filter(r => !r.differing.length).length}/${rs.length} match; differ: ${rs.filter(r => r.differing.length).map(r => path.posix.basename(r.rel, '.md') + ` (${r.differing.length})`).join(', ')}`)
}
