// C9: re-skin field-note bodies onto the C6 skeleton (03 Migration Plan C9; DM decisions 2026-11-17).
// Frontmatter is untouched (bytes kept). The new body is the current template's output, with:
//   - the note's own Leaflet block in the Map tab (tutorial "###" comment lines removed),
//   - an NPC's stat block in the Stats tab (the unused ^statblock anchor dropped: block embeds don't
//     resolve inside callouts, and no note embeds one),
//   - the old ## DM Notes content in the DM tab, below "> > ## DM Notes", with the "> > " prefix,
//   - hand-written prose (lines no pre-C6 template produced) at the top of DM Notes, under its old
//     section heading; headings demoted one level; images moved to the Map tab,
//   - an import's "*Source: …*" block (sourcebook text) in a "## Source" section after the tabs.
// Safety: every content line of the old body must appear in the new one, or the note is skipped.
// Usage: node c9-reskin.js [--write] [--type npc] [--only "<file name>"]
const fs = require('fs')
const path = require('path')
const { execFileSync } = require('child_process')
const { VAULT } = require('./fm')

const arg = k => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : null }
const write = process.argv.includes('--write')
const read = p => fs.readFileSync(path.join(VAULT, p), 'utf8')
const P = '> > '
const prefix = l => (l.trim() === '' ? '> >' : P + l)

// ---------- template rendering (static: no form data, frontmatter not used)
const TPL = {
  npc: 'z_Templates/Templater/World Building/NPC.md',
  region: 'z_Templates/Templater/World Building/Location.md',
  settlement: 'z_Templates/Templater/World Building/Location.md',
  'place-of-interest': 'z_Templates/Templater/World Building/Location.md',
  world: 'z_Templates/Templater/World Building/World.md',
  shop: 'z_Templates/Templater/World Building/Shop.md',
  quest: 'z_Templates/Templater/Campaign/Quest.md',
  player: 'z_Templates/Templater/Party/Player Character.md',
}
function include(src) {
  return src.replace(/^<% tp\.file\.include\("\[\[(z_Templates\/Partials\/[^\]]+)\]\]"\) %>$/gm, (_, p) => include(read(p + '.md')).trimEnd())
}
function render(type, title) {
  const src = read(TPL[type])
  const fmClose = src.indexOf('\n---\n', src.indexOf('\n---\n') + 1) + 5
  let body = src.slice(fmClose, src.lastIndexOf('<%* } else { -%>'))
  const out = []
  let branch = null
  for (const line of body.split('\n')) {
    if (/^<%\* if \(data\.type === 'settlements'\) \{ -%>$/.test(line)) { branch = 'A'; continue }
    if (branch && /^<%\* \} else \{ -%>$/.test(line)) { branch = 'B'; continue }
    if (branch && /^<%\* \} -%>$/.test(line)) { branch = null; continue }
    if (branch === 'A' && type !== 'settlement') continue
    if (branch === 'B' && type === 'settlement') continue
    out.push(line)
  }
  body = include(out.join('\n'))
  body = body.replace(/<% tp\.file\.title\.replace\(\/\[\^A-Za-z0-9\]\/g, ""\) %>/g, title.replace(/[^A-Za-z0-9]/g, ''))
  if (/<%/.test(body)) throw new Error(`Templater syntax left in the ${type} body`)
  return body.trimEnd() + '\n'
}

// ---------- old-template line patterns (as c9-dryrun.js)
const OLD = '642502fba'
const T = 'z_Templates/Templater/World Building/', O = 'z_Templates/World Building/'
const HIST = {
  npc: [T + 'NPC.md', O + 'NPC.md', 'z_Templates/Text Generator/NPC.md', 'z_Extra/ttrpg-convert/templates/monster.txt'],
  region: [T + 'Location.md', O + 'Location.md', O + 'Region.md'],
  settlement: [T + 'Location.md', O + 'Location.md', O + 'Settlement.md'],
  'place-of-interest': [T + 'Location.md', O + 'Location.md', O + 'Place of Interest.md'],
  world: [T + 'Location.md', O + 'Location.md'],
  shop: [T + 'Shop.md', O + 'Shop.md'],
  quest: ['z_Templates/Templater/Campaign/Quest.md'],
  player: ['z_Templates/Templater/Party/Player Character.md', 'z_Templates/Party/Player Character.md', 'z_Templates/Templater/PC_template.md'],
}
const SCAFFOLD = [
  /^> \[!infobox ?\| ?wsmall\]$/,
  /^> \*\*Party Relationship\*\* \| `\$=await dv\.view\('utils\/metaBindInput'.*party_relationships.*\|$/,
  /^`INPUT\[number\(title\("Economic Scale"\)\):economic_scale\]`$/,
  /^`\$=await dv\.view\("views\/locations", \{current: dv\.current\(\)\}\)`$/,
  /^> \*\*Resource\(s\):\*\* \| `INPUT\[inlineListSuggester\(optionQuery\("6\. Resources"\)\)\]` \|$/,  // Barovia: no bind target
]
const git = (...a) => execFileSync('git', a, { cwd: VAULT, encoding: 'utf8', maxBuffer: 64 << 20, stdio: ['ignore', 'pipe', 'ignore'] })
const norm = l => l.replace(/\s+/g, ' ').trim()
const WILD = '\u0000'
const patCache = {}
function patterns(type) {
  if (patCache[type]) return patCache[type]
  const exact = new Set(), regex = new Set()
  for (const f of HIST[type]) {
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
        if (n.includes(WILD) && n.split(WILD).join('').replace(/[\s>|*#\-`'"()[\]{}:,.=]/g, '').length < 4) continue
        if (n.includes(WILD)) regex.add('^' + n.split(WILD).map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('.*') + '$')
        else exact.add(n)
      }
    }
  }
  return (patCache[type] = { exact, regex: [...regex].map(s => new RegExp(s)) })
}
const isTemplate = (type, line) => {
  const n = norm(line)
  if (!n) return true
  const p = patterns(type)
  return SCAFFOLD.some(r => r.test(n)) || p.exact.has(n) || p.regex.some(r => r.test(n))
}

// ---------- old body parsing
const FENCE = /^((?:>\s?)*)(```+)(.*)$/
function units(lines) {  // fenced blocks are one unit; everything else one line per unit
  const out = []
  for (let i = 0; i < lines.length; i++) {
    const m = FENCE.exec(lines[i])
    if (m && m[3].trim()) {
      let j = i + 1
      while (j < lines.length && !(FENCE.exec(lines[j]) && FENCE.exec(lines[j])[2] === m[2] && !FENCE.exec(lines[j])[3].trim())) j++
      out.push({ lines: lines.slice(i, j + 1), lang: m[3].trim() }); i = j
    } else out.push({ lines: [lines[i]] })
  }
  return out
}
const unprefix = (lines, depth) => lines.map(l => l.replace(new RegExp(`^(>\\s?){${depth}}`), ''))
function leafletOf(above) {
  const u = units(above.split('\n')).find(x => x.lang === 'leaflet')
  if (!u) return null
  const depth = (/^((?:>\s?)*)/.exec(u.lines[0])[1].match(/>/g) || []).length
  return unprefix(u.lines, depth).filter((l, i, a) => i === 0 || i === a.length - 1 || !/^\s*###/.test(l))
}

function headingText(line) {
  const h = /^(#{1,6})\s+(.*)$/.exec(line)
  if (h) return h[2].replace(/\*\*/g, '').trim()
  const c = /^>\s*\[![^\]]+\][-+]?\s*(.*)$/.exec(line)
  return c ? c[1].trim() : null
}

// Hand-written prose above the anchor, grouped under the old section headings.
function handProse(type, lines) {
  const out = [], images = []
  let heading = null, emitted = false, calloutBody = false, pendingBlank = false
  for (const u of units(lines)) {
    const first = u.lines[0]
    if (u.lang === 'leaflet' || /^> \[!infobox/.test(first)) { if (!u.lang) heading = null; continue }
    const content = u.lines.some(l => !isTemplate(type, l))
    const ht = u.lines.length === 1 ? headingText(first) : null
    if (ht !== null && !content) { heading = ht; emitted = false; calloutBody = /^>/.test(first); pendingBlank = false; continue }
    if (u.lines.length === 1 && first.trim() === '') { pendingBlank = emitted; continue }
    if (!content) continue
    let ls = u.lines
    if (calloutBody && ls.every(l => /^>/.test(l))) ls = unprefix(ls, 1)
    if (ls.length === 1 && /^!\[\[[^\]]+\.(svg|png|jpe?g|webp|gif)\]\]$/i.test(ls[0].trim())) { images.push(ls[0].trim()); continue }
    if (heading && !emitted && ht === null) { if (out.length) out.push(''); out.push(`### ${heading}`); emitted = true }
    else if (pendingBlank) out.push('')
    for (const l of ls) out.push(/^#{1,5}\s/.test(l) ? '#' + l : l)
    if (ht !== null) { emitted = true }
    pendingBlank = false
  }
  return { prose: out, images }
}

// PC DM sections: Hidden Details text first, then each later section under its heading demoted one level;
// a section with no text is dropped.
function pcDmNotes(lines) {
  const sections = [{ heading: null, body: [] }]
  for (const l of lines) {
    if (/^## \S/.test(l)) sections.push({ heading: l, body: [] })
    else sections[sections.length - 1].body.push(/^#{1,5}\s/.test(l) ? '#' + l : l)
  }
  const out = []
  for (const s of sections) {
    const body = [...s.body]
    while (body.length && !body[0].trim()) body.shift()
    while (body.length && !body[body.length - 1].trim()) body.pop()
    if (!body.length) continue
    if (out.length) out.push('')
    if (s.heading) out.push('#' + s.heading)
    out.push(...body)
  }
  return out
}

// ---------- per note
function reskin(rel, type) {
  const raw = read(rel)
  const m = /^---\n[\s\S]*?\n---[ \t]*\n/.exec(raw)
  if (!m) throw new Error('no frontmatter')
  const fmText = m[0], body = raw.slice(fmText.length)
  const title = path.posix.basename(rel, '.md')
  if (/views\/entityHeader|^> \[!tabs\]/m.test(body)) return { skip: 'already re-skinned' }

  // PCs keep their DM text under ## Hidden Details and ## Notes at the end of the body.
  const dmIdx = body.search(type === 'player' ? /^## Hidden Details[ \t]*$/m : /^## DM Notes[ \t]*$/m)
  const statsIdx = type === 'npc' ? body.search(/^## Stats[ \t]*$/m) : -1
  const aboveEnd = statsIdx >= 0 ? statsIdx : dmIdx >= 0 ? dmIdx : body.length
  const above = body.slice(0, aboveEnd)
  const statsPart = statsIdx >= 0 ? body.slice(statsIdx, dmIdx >= 0 ? dmIdx : body.length) : ''
  const dmPart = dmIdx >= 0 ? body.slice(dmIdx) : ''

  let aboveLines = above.split('\n')
  // Import source block: from "*Source: …*" to the first "> [!column" (NPCs).
  let source = []
  const si = aboveLines.findIndex(l => /^\*Source: .*\*\s*$/.test(l))
  if (type === 'npc' && si >= 0) {
    let ei = aboveLines.findIndex((l, i) => i > si && /^> \[!column/.test(l))
    if (ei < 0) throw new Error('source block has no end')
    source = aboveLines.slice(si, ei)
    while (source.length && !source[source.length - 1].trim()) source.pop()
    aboveLines = [...aboveLines.slice(0, si), ...aboveLines.slice(ei)]
  }
  const { prose, images } = handProse(type, aboveLines)

  // Stats section: the stat block plus any design notes around it (reskin source, CR rationale), in order.
  let statblock = null
  if (statsPart) {
    const ls = statsPart.split('\n').slice(1).filter(l => l.trim() !== '^statblock')
    while (ls.length && !ls[ls.length - 1].trim()) ls.pop()
    while (ls.length && !ls[0].trim()) ls.shift()
    if (units(ls).filter(x => x.lang === 'statblock').length > 1) throw new Error('more than one stat block under ## Stats')
    statblock = ls.length ? ls : null
  }
  let dmLines = dmPart ? dmPart.split('\n').slice(1) : []
  if (type === 'player') dmLines = pcDmNotes(dmLines)
  while (dmLines.length && !dmLines[dmLines.length - 1].trim()) dmLines.pop()
  while (dmLines.length && !dmLines[0].trim()) dmLines.shift()

  // Build
  let nb = render(type, title)
  const leaflet = leafletOf(above)
  if (leaflet || images.length) {
    const tm = /^> > ```leaflet\n[\s\S]*?^> > ```$/m.exec(nb)
    if (!tm) throw new Error('template has no Map tab leaflet block')
    const mapLines = [...(leaflet || unprefix(tm[0].split('\n'), 2)), ...images.flatMap(i => ['', i])]
    nb = nb.replace(tm[0], mapLines.map(prefix).join('\n'))
  }
  if (statblock) {
    if (!nb.includes('> > ```statblock\n> >\n> > ```')) throw new Error('template has no empty Stats block')
    nb = nb.replace('> > ```statblock\n> >\n> > ```', statblock.map(prefix).join('\n'))
  }
  const dmContent = [...prose, ...(prose.length && dmLines.length ? [''] : []), ...dmLines]
  if (dmContent.length) {
    if (nb.split('\n').filter(l => l === '> > ## DM Notes').length !== 1) throw new Error('template DM Notes heading not found once')
    nb = nb.replace('> > ## DM Notes\n', '> > ## DM Notes\n' + dmContent.map(prefix).join('\n') + '\n')
  }
  if (source.length) {
    const anchor = '```meta-bind-button\nlabel: Edit all'
    if (!nb.includes(anchor)) throw new Error('Edit all button not found')
    nb = nb.replace(anchor, '## Source\n' + source.join('\n') + '\n\n' + anchor)
  }

  // Safety: every content line of the old body appears in the new one (prefixes stripped, normalized).
  const strip = l => norm(l.replace(/^(>\s?)+/, '').replace(/^#+\s*/, ''))
  const have = new Set(nb.split('\n').map(strip))
  const must = [
    ...above.replace(/^(>\s?)*```leaflet[\s\S]*?^(>\s?)*```\s*$/gm, '').split('\n').filter(l => !isTemplate(type, l)),
    ...(leaflet ? leaflet : []), ...(statblock || []), ...dmLines,
  ].map(strip).filter(Boolean)
  const lost = must.filter(l => !have.has(l))
  if (lost.length) return { skip: `would lose ${lost.length} line(s): ${lost.slice(0, 2).join(' / ')}` }
  return { text: fmText + nb, prose: prose.length, source: source.length, map: !!leaflet, stats: !!statblock, dm: dmLines.length }
}

// ---------- run
function walk(rel, out = []) {
  for (const e of fs.readdirSync(path.join(VAULT, rel), { withFileTypes: true })) {
    const r = path.posix.join(rel, e.name)
    if (e.isDirectory()) walk(r, out); else if (r.endsWith('.md')) out.push(r)
  }
  return out
}
const typeOf = raw => {
  const m = /^---\n([\s\S]*?)\n---/.exec(raw)
  const tags = m ? [...m[1].matchAll(/^\s*-\s*([a-z-]+)\s*$/gm)].map(x => x[1]) : []
  return Object.keys(TPL).find(t => tags.includes(t))
}
const onlyType = arg('--type'), onlyName = arg('--only')
const files = ['4. World Almanac', '3. The Party/Quests', '3. The Party/Players'].flatMap(d => walk(d))
const counts = {}
for (const rel of files) {
  const type = typeOf(read(rel))
  if (!type || (onlyType && type !== onlyType) || (onlyName && path.posix.basename(rel, '.md') !== onlyName)) continue
  let r
  try { r = reskin(rel, type) } catch (e) { r = { skip: 'error: ' + e.message } }
  const c = counts[type] ??= { done: 0, skipped: [] }
  if (r.skip) { c.skipped.push(`${path.posix.basename(rel, '.md')} (${r.skip})`); continue }
  c.done++
  const notes = [r.map && 'map', r.stats && 'stats', r.dm && `dm:${r.dm}`, r.prose && `prose:${r.prose}`, r.source && `source:${r.source}`].filter(Boolean).join(' ')
  if (r.prose || r.source || onlyName) console.log(`  ${rel} — ${notes}`)
  if (write) fs.writeFileSync(path.join(VAULT, rel), r.text)
  else if (onlyName) fs.writeFileSync(arg('--preview') || '/dev/null', r.text)
}
for (const [t, c] of Object.entries(counts)) console.log(`${t}: ${c.done} ${write ? 'written' : 'ready'}${c.skipped.length ? `; skipped ${c.skipped.length}: ${c.skipped.join('; ')}` : ''}`)
