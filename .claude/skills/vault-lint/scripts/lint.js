#!/usr/bin/env node
// Read-only vault lint. Prints findings grouped by rule. Exit code 1 if any ERROR.
// Usage: node lint.js [--root <vault>] [--index <dir>] [--rule <id>] [--max <n per rule>] [--summary]
const fs = require('fs')
const path = require('path')
const { load, arr, linkTargets } = require('./vaultModel')

const arg = k => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : null }
const has = k => process.argv.includes(k)
const model = load(arg('--root') || process.cwd())
const indexDir = arg('--index') || path.join(model.root, 'z_Extra', 'index')
const max = +(arg('--max') || 15)
const only = arg('--rule')
const party = model.party

const findings = {}
const add = (level, rule, file, msg) => { (findings[rule] ??= { level, items: [] }).items.push(`${file}${msg ? ' — ' + msg : ''}`) }
const E = (r, f, m) => add('ERROR', r, f, m), W = (r, f, m) => add('WARN', r, f, m)
const ent = new Map(model.entities.map(e => [e.path, e]))
const isRevealed = p => { const e = ent.get(p); return !e || e.type === 'player' || e.type === 'party' || e.type === 'campaign' || e.type === 'world' || e.revealed.includes(party) }
const isJournal = p => { const n = model.noteByPath.get(p); return n && n.type === 'session-journal' }
const ENTITY_TYPES = ['npc', 'region', 'settlement', 'place-of-interest', 'shop', 'faction', 'story-item', 'story-deity', 'story-creature', 'quest']
const LOCATION_TYPES = ['region', 'settlement', 'place-of-interest', 'shop', 'world']

for (const n of model.notes) {
  if (n.error) E('yaml-parse', n.path, n.error)
  else if (!n.type) W('no-type-tag', n.path, 'no canonical type tag; queries will not find it')
  if (n.type && LOCATION_TYPES.includes(n.type) && !n.tags.includes('location')) E('location-cotag', n.path, 'missing the location co-tag')
  if (n.type && Object.keys(n.fm)[0] !== 'obsidianUIMode') W('uimode-first', n.path, 'obsidianUIMode is not the first key')
  const imgs = arr(n.fm.images).filter(i => typeof i === 'string')
  if (imgs.some(i => i.includes('\\') || /^Z_Assets/.test(i))) W('image-path', n.path, 'backslash or wrong-case image path')
}

// key-case: vault-owned frontmatter field names are snake_case (C5b). Scans every note outside the
// generated and source folders, since the model only loads entity folders.
const KEY_CASE = /^[a-z][a-z0-9]*(_[a-z0-9]+)*$/
const PLUGIN_KEYS = new Set(['tags', 'aliases', 'cssclasses', 'obsidianUIMode', 'obsidianEditingMode', 'aat-render-enabled'])
const VALUE_KEYED_MAPS = new Set(['revealed', 'reveal', 'standing', 'renown', 'party_relationships',
  'item_pricing.base_prices', 'item_pricing.recharge_modifiers', 'shop_types', 'active', 'completed', 'steps.completed'])
const KEY_CASE_SKIP = /^(5\. Mechanics|6\. Resources|z_Templates|z_Extra|node_modules|\.)/
function checkKeys(value, at, file) {
  if (Array.isArray(value)) return value.forEach(v => checkKeys(v, at, file))
  if (!value || typeof value !== 'object' || value instanceof Date || VALUE_KEYED_MAPS.has(at)) return
  for (const [k, v] of Object.entries(value)) {
    const p = at ? at + '.' + k : k
    if (!(at === '' && (PLUGIN_KEYS.has(k) || k.startsWith('fc-'))) && !KEY_CASE.test(k)) W('key-case', file, p)
    checkKeys(v, p, file)
  }
}
if (!only || only.startsWith('key-case')) {
  const YAML = require('yaml')
  const scan = rel => fs.readdirSync(path.join(model.root, rel), { withFileTypes: true }).forEach(e => {
    const r = rel ? rel + '/' + e.name : e.name
    if (KEY_CASE_SKIP.test(r)) return
    if (e.isDirectory()) return scan(r)
    if (!e.name.endsWith('.md')) return
    const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(fs.readFileSync(path.join(model.root, r), 'utf8'))
    if (!m) return
    try { checkKeys(YAML.parse(m[1]) || {}, '', r) } catch { /* yaml-parse reports entity notes */ }
  })
  scan('')
}

for (const u of model.unresolved) {
  const legacyString = ['groups', 'religions'].includes(u.field)
  if (legacyString) continue // reported under legacy
  E('unresolved-link', u.path, `${u.field}: ${u.target}`)
}

const legacyByWhat = {}
for (const l of model.legacy) (legacyByWhat[l.what] ??= new Set()).add(l.path)
for (const [what, set] of Object.entries(legacyByWhat)) for (const p of set) W('legacy: ' + what, p, '')

for (const e of model.entities) {
  if (ENTITY_TYPES.includes(e.type) && !e.gist) W('missing-gist', e.path, '')
  if (e.revealed.includes(party) && !e.summary && e.type !== 'player') E('revealed-no-summary', e.path, 'revealed to the party but summary is empty')
  if (e.revealed.includes(party)) for (const t of linkTargets(e.summary)) { const p = model.resolve(t); if (p && !isRevealed(p)) E('public-text-links-unrevealed', e.path, `summary links ${t}`) }
}

for (const f of model.facts) {
  for (const [who, v] of Object.entries(f.learned || {})) {
    if (!v) continue
    const p = model.resolve(linkTargets(v)[0] || '')
    if (!p || !isJournal(p)) E('learned-not-a-journal', f.path, `fact "${f.text.slice(0, 50)}" learned[${who}] = ${v}`)
    if (who === party && !isRevealed(f.path)) E('learned-on-unrevealed', f.path, `fact learned but the entity is not revealed`)
    if (who === party) for (const t of linkTargets(f.text)) { const tp = model.resolve(t); if (tp && !isRevealed(tp)) E('public-text-links-unrevealed', f.path, `learned fact links ${t}`) }
  }
}

const seenEdge = new Map()
for (const e of model.edges) {
  if (e.field === 'relationships') {
    if (model.relTypes.length && !model.relTypes.includes(e.type)) W('unknown-relationship-type', e.source, e.type)
    for (const [who, v] of Object.entries(e.learned || {})) {
      if (!v) continue
      const p = model.resolve(linkTargets(v)[0] || '')
      if (!p || !isJournal(p)) E('learned-not-a-journal', e.source, `edge ${e.type} → ${e.target}`)
      if (who === party && e.resolved && !isRevealed(e.target)) E('learned-edge-to-unrevealed', e.source, `${e.type} → ${e.target}`)
    }
    const k = [e.source, e.target].sort().join('|') + '|' + e.type
    if (seenEdge.has(k) && seenEdge.get(k) !== e.source) W('mirrored-edge', e.source, `${e.type} stored on both ends with ${e.target}`)
    seenEdge.set(k, e.source)
  }
  if (e.type === 'route') { const k = [e.source, e.target].sort().join('|'); if (seenEdge.has('r' + k) && seenEdge.get('r' + k) !== e.source) W('mirrored-route', e.source, e.target); seenEdge.set('r' + k, e.source) }
}

for (const s of model.sessions) {
  const n = model.noteByPath.get(s.path)
  if (/New Session Journal/.test(s.title)) W('journal-untitled', s.path, '')
  if (!s.party && s.number !== 0) E('journal-no-party', s.path, 'no party: link')
  if (!s.summary) W('journal-no-summary', s.path, '')
  if (!s.fcEnd && s.number !== 0) W('journal-no-fc-end', s.path, '')
  if (s.number !== 0 && !arr(n.fm.prep_notes).filter(Boolean).length) W('journal-no-prep-link', s.path, '')
  if (s.number !== 0 && s.counts.npcs + s.counts.locations === 0) W('journal-empty-ledger', s.path, '')
  if (s.wrapped || s.publish) for (const e of model.edges.filter(x => x.source === s.path && x.type.startsWith('session-') && x.resolved)) {
    const t = ent.get(e.target)
    if (t && ENTITY_TYPES.includes(t.type) && !t.revealed.includes(party) && !t.heldBack.includes(party)) W('ledger-entity-undecided', s.path, `${t.name} is in the ledger but neither revealed nor held back (revealed: false)`)
  }
}

for (const n of model.notes.filter(x => x.type === 'quest')) for (const st of arr(n.fm.steps)) if (st && st.status === 'played' && !st.outcome) W('step-played-no-outcome', n.path, String(st.text || '').slice(0, 50))

// Canon drift: learned/locked fact text that changed or vanished since the last index build.
const canonFile = path.join(indexDir, 'canon.tsv')
if (fs.existsSync(canonFile)) {
  const now = new Set(model.facts.map(f => f.path + '\t' + f.hash))
  for (const line of fs.readFileSync(canonFile, 'utf8').split('\n').slice(1)) {
    const [p, h, text] = line.split('\t'); if (!p) continue
    if (!now.has(p + '\t' + h)) E('canon-changed', p, `canon fact edited or removed since last index: "${(text || '').slice(0, 70)}"`)
  }
  const stamp = fs.statSync(canonFile).mtimeMs
  const newest = Math.max(...model.sessions.map(s => fs.statSync(path.join(model.root, s.path)).mtimeMs))
  if (newest > stamp) W('index-stale', 'z_Extra/index', 'a journal changed after the last index build; run buildIndex.js')
} else W('index-missing', 'z_Extra/index', 'no index yet; run buildIndex.js')

// ---- report
const rules = Object.entries(findings).filter(([r]) => !only || r === only || r.startsWith(only)).sort((a, b) => a[1].level.localeCompare(b[1].level) || b[1].items.length - a[1].items.length)
let errors = 0
console.log(`Vault lint — party: ${party}; ${model.notes.length} notes, ${model.entities.length} entities, ${model.edges.length} edges, ${model.facts.length} facts`)
for (const [rule, { level, items }] of rules) {
  if (level === 'ERROR') errors += items.length
  console.log(`\n${level} ${rule} (${items.length})`)
  if (!has('--summary')) { for (const i of items.slice(0, max)) console.log('  ' + i); if (items.length > max) console.log(`  … ${items.length - max} more (--rule "${rule}" --max 999)`) }
}
console.log(`\n${errors} errors, ${rules.filter(r => r[1].level === 'WARN').reduce((a, r) => a + r[1].items.length, 0)} warnings.`)
process.exit(errors ? 1 : 0)
