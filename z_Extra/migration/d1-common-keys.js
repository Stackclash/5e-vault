// D1: add the common keys to existing notes (03 Migration Plan D1). Adds a key only if absent; never
// overwrites. PCs get no `revealed` (DM, 2026-11-17: a PC shows whenever it is in the campaign's party).
// Entity keys go after `location`/`condition` (whichever comes later), others at the end.
// Usage: node d1-common-keys.js [--dry-run]
const path = require('path')
const { VAULT, read, write, walk, moveKeyFirst, keyOf } = require('./fm')

const dryRun = process.argv.includes('--dry-run')
const ENTITY = { gist: '', summary: '', revealed: {}, reveal: {}, facts: [] }
const KEYS = {
  npc: ENTITY, region: ENTITY, settlement: ENTITY, 'place-of-interest': ENTITY, shop: ENTITY, world: ENTITY,
  quest: { kind: 'quest', gist: '', summary: '', revealed: {}, facts: [], giver: '', locations: [], items: [], factions: [], pcs: [] },
  player: { gist: '', summary: '', facts: [], tagline: '' },
  campaign: { summary: '', site_slug: '' },
  'session-journal': { factions: [], wrapped: false, publish: false },
  'session-prep': { session_number: null, journal: '' },
}
const AFTER_LOCATION = new Set(['npc', 'region', 'settlement', 'place-of-interest', 'shop', 'world', 'quest', 'player'])
const DIRS = ['4. World Almanac', '3. The Party', '1. DM Toolkit/Campaigns', '1. DM Toolkit/Session Journals', '1. DM Toolkit/Session Prep']

const counts = {}, skipped = []
for (const file of DIRS.flatMap(d => walk(path.join(VAULT, d)))) {
  const note = read(file)
  const rel = path.relative(VAULT, file)
  if (!note.doc || !note.doc.contents?.items) continue
  if (note.doc.errors.length) { skipped.push(`${rel}: YAML errors`); continue }
  const tags = [].concat(note.doc.toJS().tags ?? []).map(String)
  const type = Object.keys(KEYS).find(t => tags.includes(t))
  if (!type) continue
  if (note.doc.get('wrapped') === true) { skipped.push(`${rel}: wrapped`); continue }

  const items = note.doc.contents.items
  const added = []
  let at = items.length
  if (AFTER_LOCATION.has(type)) {
    const idx = Math.max(...['location', 'condition'].map(k => items.findIndex(p => keyOf(p) === k)))
    if (idx >= 0) at = idx + 1
  }
  for (const [k, v] of Object.entries(KEYS[type])) {
    if (note.doc.has(k)) continue
    items.splice(at++, 0, note.doc.createPair(k, v))
    added.push(k)
  }
  if (type === 'session-prep' && moveKeyFirst(note.doc, 'obsidianUIMode') !== 0) added.push('obsidianUIMode first')
  if (type === 'quest') {
    const steps = note.doc.get('steps')
    for (const st of steps?.items ?? []) {
      if (!st || typeof st.has !== 'function' || st.has('status')) continue
      const done = st.get('completed')
      const played = done && typeof done.toJSON === 'function' ? Object.values(done.toJSON() ?? {}).some(Boolean) : done === true
      st.set('status', played ? 'played' : 'planned')
      added.push('step status')
    }
  }
  if (!added.length) continue
  if (write(note, { dryRun })) {
    const c = counts[type] ??= { notes: 0, keys: {} }
    c.notes++
    for (const k of added) c.keys[k] = (c.keys[k] || 0) + 1
  }
}
for (const [t, c] of Object.entries(counts)) console.log(`${t}: ${c.notes} notes — ${Object.entries(c.keys).map(([k, n]) => `${k} ${n}`).join(', ')}`)
if (skipped.length) console.log('skipped:', skipped.join('; '))
console.log(dryRun ? '(dry run)' : 'written')
