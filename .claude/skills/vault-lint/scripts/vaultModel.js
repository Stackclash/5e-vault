// Read-only model of the campaign vault: entities, edges, facts, sessions.
// Shared by buildIndex.js and lint.js (and, later, the site exporter).
// Tolerates legacy shapes and reports them in model.legacy so lint can flag them.
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const TYPE_TAGS = ['npc', 'region', 'settlement', 'place-of-interest', 'shop', 'world', 'faction',
  'story-item', 'story-deity', 'story-creature', 'quest', 'player', 'party', 'campaign', 'session-journal', 'session-prep']
const SCAN_DIRS = ['1. DM Toolkit/Campaigns', '1. DM Toolkit/Session Journals', '1. DM Toolkit/Session Prep',
  '3. The Party', '4. World Almanac']
const FLAT_LINK_FIELDS = { // field -> edge type
  location: 'location', owners: 'owner', staff: 'staff', rulers: 'ruler', holder: 'holder',
  giver: 'quest-giver', locations: 'quest-location', items: 'quest-item', factions: 'quest-faction',
  pcs: 'quest-pc', parent: 'parent', party: 'party', world: 'world', base_item: 'base-item', mechanics: 'mechanics',
}
const LEDGER = { party_present: 'present', locations: 'visited', npcs: 'met', quests: 'touched', items: 'found', factions: 'encountered' }

function findRoot(start) {
  let d = path.resolve(start || process.cwd())
  while (d !== path.dirname(d)) {
    if (fs.existsSync(path.join(d, '1. DM Toolkit', 'Configuration.md'))) return d
    d = path.dirname(d)
  }
  throw new Error('Vault root not found (no "1. DM Toolkit/Configuration.md" above ' + start + ')')
}

function walk(root, rel, out = []) {
  const abs = path.join(root, rel)
  if (!fs.existsSync(abs)) return out
  for (const e of fs.readdirSync(abs, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue
    const r = path.posix.join(rel, e.name)
    if (e.isDirectory()) walk(root, r, out)
    else out.push(r)
  }
  return out
}

const arr = v => (v === null || v === undefined || v === '') ? [] : Array.isArray(v) ? v : [v]
const linkTargets = s => [...String(s ?? '').matchAll(/!?\[\[([^\]|#]+)(#[^\]|]*)?(\|[^\]]*)?\]\]/g)].map(m => m[1].trim())
const isLink = s => typeof s === 'string' && /^\[\[[^\]]+\]\]$/.test(s.trim())
const hash = s => crypto.createHash('sha1').update(String(s)).digest('hex').slice(0, 10)

function load(rootArg) {
  const root = findRoot(rootArg)
  const matter = require(path.join(root, 'node_modules', 'gray-matter'))

  // Whole-vault path index for link resolution (names only; no file reads).
  const allFiles = walk(root, '')
  const byPath = new Set(), byBase = new Map()
  for (const f of allFiles) {
    byPath.add(f); byPath.add(f.replace(/\.md$/, ''))
    const b = path.posix.basename(f).replace(/\.md$/, '').toLowerCase()
    if (!byBase.has(b)) byBase.set(b, [])
    byBase.get(b).push(f)
  }
  const byAlias = new Map()

  const read = rel => {
    const raw = fs.readFileSync(path.join(root, rel), 'utf8')
    try { const m = matter(raw); return { fm: m.data || {}, body: m.content, error: null } }
    catch (e) { return { fm: {}, body: raw, error: e.message.split('\n')[0] } }
  }

  const config = read('1. DM Toolkit/Configuration.md').fm
  const relTypes = arr(config.relationship_types).map(t => t && t.type).filter(Boolean)

  const notes = []
  for (const dir of SCAN_DIRS) for (const rel of walk(root, dir)) {
    if (!rel.endsWith('.md')) continue
    const name = path.posix.basename(rel, '.md')
    if (name === path.posix.basename(path.posix.dirname(rel))) continue // folder note
    const { fm, body, error } = read(rel)
    const tags = arr(fm.tags).map(String)
    const type = TYPE_TAGS.find(t => tags.includes(t)) || null
    const n = { path: rel, name, type, tags, fm, body, error }
    notes.push(n)
    for (const a of arr(fm.aliases)) if (typeof a === 'string') byAlias.set(a.toLowerCase(), rel)
  }
  const noteByPath = new Map(notes.map(n => [n.path, n]))

  // Resolve a wikilink target (or bare name) to a vault path. strict: a target containing "/" must match exactly.
  function resolve(target) {
    let t = String(target).replace(/^\[\[|\]\]$/g, '').split('|')[0].split('#')[0].trim().replace(/^\//, '')
    if (!t) return null
    if (byPath.has(t)) return t.endsWith('.md') || !byPath.has(t + '.md') ? (byPath.has(t + '.md') && !t.includes('.') ? t + '.md' : t) : t + '.md'
    if (t.includes('/')) return null
    const b = byBase.get(t.replace(/\.md$/, '').toLowerCase())
    if (b) return b.find(f => !f.startsWith('5. Mechanics') && !f.startsWith('6. Resources')) || b[0]
    return byAlias.get(t.toLowerCase()) || null
  }

  const campaignPath = resolve(linkTargets(config.active_campaign)[0] || '')
  const campaign = campaignPath && noteByPath.get(campaignPath)
  const partyPath = campaign && resolve(linkTargets(campaign.fm.party)[0] || '')
  const party = partyPath ? path.posix.basename(partyPath, '.md') : null

  const model = { root, config, relTypes, notes, noteByPath, resolve, party, campaign: campaign ? campaign.name : null,
    entities: [], edges: [], facts: [], sessions: [], legacy: [], unresolved: [] }
  const legacy = (n, what) => model.legacy.push({ path: n.path, what })
  const edge = (n, type, target, extra = {}) => {
    const to = resolve(target)
    if (!to) model.unresolved.push({ path: n.path, field: extra.field || type, target: String(target) })
    model.edges.push({ source: n.path, type, target: to || String(target), resolved: !!to, learned: extra.learned || {}, note: extra.note || '', field: extra.field || type })
  }
  const learnedParties = l => (l && typeof l === 'object') ? Object.entries(l).filter(([, v]) => v).map(([k]) => k) : []

  for (const n of notes) {
    const fm = n.fm
    if (!n.type) continue

    if (n.type === 'session-journal') {
      const m = n.name.match(/^S(\d+)\s*(.*)$/)
      model.sessions.push({ path: n.path, number: fm.session_number ?? (m ? +m[1] : null), title: m ? m[2] : n.name,
        date: fm.date instanceof Date ? fm.date.toISOString().slice(0, 10) : String(fm.date ?? ''), fcDate: fm['fc-date'] ?? '', fcEnd: fm['fc-end'] ?? '',
        party: linkTargets(fm.party)[0] ? path.posix.basename(resolve(linkTargets(fm.party)[0]) || '', '.md') : null,
        wrapped: fm.wrapped === true, publish: fm.publish === true, summary: String(fm.summary ?? '').replace(/\s+/g, ' ').trim(),
        counts: Object.fromEntries(Object.keys(LEDGER).map(k => [k, arr(fm[k]).length])) })
      if ('campaign' in fm) legacy(n, 'journal uses campaign: (should be party:)')
      for (const [field, type] of Object.entries(LEDGER)) for (const v of arr(fm[field])) edge(n, 'session-' + type, v, { field })
      for (const v of linkTargets(fm.prep_notes)) edge(n, 'prep', v, { field: 'prep_notes' })
      continue
    }
    if (n.type === 'session-prep') { for (const v of linkTargets(fm.journal)) edge(n, 'journal', v, { field: 'journal' }); continue }

    // ---- entity
    const summary = fm.summary ?? fm.player_impression ?? fm.player_summary ?? fm.public_premise ?? ''
    for (const k of ['player_impression', 'player_summary', 'public_premise']) if (k in fm) legacy(n, `${k}: (should be summary:)`)
    const revealed = learnedParties(fm.revealed)
    const status = n.type === 'npc' ? (fm.condition ?? '') : n.type === 'quest'
      ? (fm.completed && Object.values(fm.completed).some(Boolean) ? 'completed' : fm.active && Object.values(fm.active).some(Boolean) ? 'active' : 'inactive')
      : n.type === 'player' ? (fm.active ? 'active' : 'inactive') : (fm.status ?? '')
    model.entities.push({ path: n.path, name: n.name, type: n.type, aliases: arr(fm.aliases).filter(a => typeof a === 'string' && a !== n.name),
      parent: resolve(linkTargets(fm.location)[0] || '') || '', status: String(status), revealed, heldBack: learnedParties(Object.fromEntries(Object.entries(fm.revealed || {}).map(([k, v]) => [k, v === false]))),
      gist: String(fm.gist ?? '').replace(/\s+/g, ' ').trim(), summary: String(summary ?? '').replace(/\s+/g, ' ').trim(), reveal: fm.reveal || {}, kind: fm.kind ?? '' })

    // flat link fields
    for (const [field, type] of Object.entries(FLAT_LINK_FIELDS)) {
      if (!(field in fm)) continue
      if (n.type !== 'quest' && ['locations', 'items', 'factions', 'pcs', 'giver'].includes(field)) continue
      if (n.type === 'shop' && field === 'items') continue
      for (const v of arr(fm[field])) for (const t of (isLink(v) ? linkTargets(v) : typeof v === 'string' && v ? [v] : [])) edge(n, type, t, { field })
    }
    if (n.type === 'shop') for (const v of arr(fm.items)) for (const t of linkTargets(v)) edge(n, 'stocks', t, { field: 'items' })
    if (n.type === 'quest') for (const q of arr(fm.npcs)) if (q && q.name) for (const t of linkTargets(q.name)) edge(n, 'quest-npc', t, { field: 'npcs', note: q.description || '' })

    // typed relationships (and the legacy "Name|type" strings)
    for (const r of arr(fm.relationships)) {
      if (typeof r === 'string') { const [nm, ty] = r.split('|'); legacy(n, 'relationships entry is a "Name|type" string'); edge(n, (ty || 'related').trim(), nm, { field: 'relationships' }) }
      else if (r && r.target) edge(n, String(r.type || 'related'), linkTargets(r.target)[0] || r.target, { field: 'relationships', learned: r.learned, note: r.note })
    }
    for (const g of arr(fm.groups)) { legacy(n, 'groups: (should be a member edge to a faction note)'); edge(n, 'member', isLink(g) ? linkTargets(g)[0] : g, { field: 'groups' }) }
    for (const g of arr(fm.religions)) { legacy(n, 'religions: (should be a worships edge to a deity note)'); edge(n, 'worships', isLink(g) ? linkTargets(g)[0] : g, { field: 'religions' }) }

    // routes (and legacy travel tuples)
    for (const r of arr(fm.routes)) if (r && r.to) edge(n, 'route', linkTargets(r.to)[0] || r.to, { field: 'routes', note: [r.miles && r.miles + ' mi', r.mode, r.note].filter(Boolean).join(', ') })
    for (const k of ['travel', 'travelDistances']) for (const t of arr(fm[k])) if (Array.isArray(t)) { legacy(n, `${k}: (should be routes:)`); edge(n, 'route', isLink(t[0]) ? linkTargets(t[0])[0] : t[0], { field: k, note: t[1] + ' mi' }) }
    if ('shop_type' in fm || 'shop_size' in fm) legacy(n, 'shop_type/shop_size (code reads type/size)')

    // facts
    for (const f of arr(fm.facts)) if (f && f.text) model.facts.push({ path: n.path, text: String(f.text).replace(/\s+/g, ' ').trim(), learned: f.learned || {}, locked: f.locked === true, hash: hash(f.text) })
  }
  model.sessions.sort((a, b) => (a.number ?? 0) - (b.number ?? 0))
  return model
}

module.exports = { load, findRoot, arr, linkTargets, isLink, hash, LEDGER, TYPE_TAGS }
