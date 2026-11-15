#!/usr/bin/env node
// Builds the agent index from frontmatter. Writes only to <vault>/z_Extra/index (or --out <dir>).
// Usage: node buildIndex.js [--root <vault>] [--out <dir>]
const fs = require('fs')
const path = require('path')
const { load } = require('./vaultModel')

const arg = k => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : null }
const model = load(arg('--root') || process.cwd())
const out = arg('--out') || path.join(model.root, 'z_Extra', 'index')
fs.mkdirSync(out, { recursive: true })

const clean = v => String(v ?? '').replace(/[\t\r\n]+/g, ' ').trim()
const tsv = (file, header, rows) => fs.writeFileSync(path.join(out, file), [header, ...rows].map(r => r.map(clean).join('\t')).join('\n') + '\n')
const parties = l => Object.entries(l || {}).filter(([, v]) => v).map(([k]) => k).join(',')
const sessionOf = v => { const m = String(v ?? '').match(/S(\d+)/); return m ? 'S' + m[1] : '' }
const learnedIn = l => Object.entries(l || {}).filter(([, v]) => v).map(([k, v]) => `${k}:${sessionOf(v) || 'yes'}`).join(',')

tsv('entities.tsv', ['type', 'name', 'aliases', 'path', 'parent', 'status', 'revealed_to', 'gist'],
  model.entities.sort((a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name))
    .map(e => [e.type + (e.kind ? ':' + e.kind : ''), e.name, e.aliases.join('; '), e.path, e.parent, e.status, e.revealed.join(','), e.gist || e.summary.slice(0, 160)]))

tsv('edges.tsv', ['source', 'type', 'target', 'learned_by', 'note'],
  model.edges.map(e => [e.source, e.type, e.target + (e.resolved ? '' : ' (UNRESOLVED)'), learnedIn(e.learned), e.note]))

tsv('sessions.tsv', ['number', 'title', 'date', 'fc_date', 'fc_end', 'party', 'wrapped', 'publish', 'path', 'ledger_counts', 'summary'],
  model.sessions.map(s => [s.number, s.title, s.date, s.fcDate, s.fcEnd, s.party || '', s.wrapped, s.publish, s.path,
    Object.entries(s.counts).map(([k, v]) => `${k}=${v}`).join(' '), s.summary]))

tsv('facts.tsv', ['entity', 'learned_by', 'locked', 'text'], model.facts.map(f => [f.path, learnedIn(f.learned), f.locked, f.text]))

// Canon snapshot: learned or locked fact text. lint.js diffs the vault against this file.
tsv('canon.tsv', ['entity', 'hash', 'text'], model.facts.filter(f => f.locked || parties(f.learned)).map(f => [f.path, f.hash, f.text]))

// state.md
const last = model.sessions[model.sessions.length - 1]
const lastNote = last && model.noteByPath.get(last.path)
const quests = model.entities.filter(e => e.type === 'quest' && e.status === 'active')
const scratch = fs.existsSync(path.join(model.root, '2. Scratch Notes'))
  ? fs.readdirSync(path.join(model.root, '2. Scratch Notes')).filter(f => /Live Session/i.test(f) && !/filed:\s*true/.test(fs.readFileSync(path.join(model.root, '2. Scratch Notes', f), 'utf8').slice(0, 400))) : []
const where = lastNote ? [].concat(lastNote.fm.locations || []).map(l => String(l).replace(/^\[\[|\]\]$/g, '').split('|').pop().replace(/\.md$/, '')).join(', ') : ''
fs.writeFileSync(path.join(out, 'state.md'), [
  `built: ${new Date().toISOString()}`,
  `campaign: ${model.campaign}`, `party: ${model.party}`,
  last ? `latest session: S${last.number} ${last.title} (played ${last.date}; in-world ${last.fcDate}${last.fcEnd ? ' to ' + last.fcEnd : ''}; wrapped: ${last.wrapped})` : 'latest session: none',
  `latest session locations: ${where}`,
  `latest session path: ${last ? last.path : ''}`,
  `active quests: ${quests.map(q => q.name).join('; ') || 'none'}`,
  `unfiled live-session logs: ${scratch.join('; ') || 'none'}`,
  `counts: ${model.entities.length} entities, ${model.edges.length} edges, ${model.facts.length} facts, ${model.sessions.length} sessions`,
  `legacy shapes still present: ${model.legacy.length} (run lint.js for detail)`,
].join('\n') + '\n')

console.log(`Index written to ${out}: ${model.entities.length} entities, ${model.edges.length} edges, ${model.facts.length} facts, ${model.sessions.length} sessions.`)
