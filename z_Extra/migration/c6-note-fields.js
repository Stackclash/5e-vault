// C6: add Configuration.note_fields (one field list per type: templates, header chips, Edit all, Bases views)
// and the enums those fields need. Entry: {field, input, enum?, source?, tab, chip?, bulk?, per_party?, label?}.
//   input: Meta Bind input type. enum: a Configuration.enums key, or a top-level list of {name} (settlement_wealth,
//   shop_types, shop_sizes). source: an optionQuery for suggesters (a #tag or a "folder"). tab: header | gist |
//   infobox | the tab name. Usage: [--dry-run]
const path = require('path')
const { VAULT, read, write, YAML } = require('./fm')
const dryRun = process.argv.includes('--dry-run')

const NEW_ENUMS = {
  genders: ['male', 'female'],
  quest_kinds: ['arc', 'quest', 'thread'],
  step_statuses: ['planned', 'played', 'skipped', 'void'],
  campaign_statuses: ['planning', 'active', 'hiatus', 'finished'],
}

const f = (field, input, tab, opts = {}) => ({ field, input, tab, ...opts })
const gist = f('gist', 'text', 'gist', { bulk: true })
const summary = f('summary', 'textArea', 'Player-Facing')
const pronounced = f('pronounced', 'text', 'header')
const locationCommon = (parentTab = 'infobox') => [
  f('status', 'inlineSelect', 'header', { enum: 'location_statuses', chip: true, bulk: true }),
  pronounced, gist,
  f('location', 'suggester', parentTab, { source: '#location', label: 'Parent', bulk: true }),
  f('population', 'number', 'infobox', { bulk: true }),
  f('terrain', 'text', 'infobox', { bulk: true }),
  f('rulers', 'inlineListSuggester', 'infobox', { source: '#npc' }),
  f('government', 'text', 'infobox'),
  f('army', 'text', 'infobox'),
  f('imports', 'inlineList', 'infobox'),
  f('exports', 'inlineList', 'infobox'),
  f('atmosphere', 'textArea', 'At the Table'),
  f('hazards', 'textArea', 'At the Table'),
  f('climate', 'text', 'At the Table', { bulk: true }),
  summary,
]

const NOTE_FIELDS = {
  npc: [
    f('condition', 'inlineSelect', 'header', { enum: 'npc_conditions', chip: true, bulk: true }),
    f('party_relationships', 'inlineSelect', 'header', { enum: 'party_relationships', chip: true, bulk: true, per_party: true, label: 'Party relationship' }),
    pronounced, gist,
    f('race', 'suggester', 'infobox', { source: '"5. Mechanics/Races"', bulk: true }),
    f('gender', 'inlineSelect', 'infobox', { enum: 'genders', bulk: true }),
    f('age', 'number', 'infobox', { bulk: true }),
    f('alignment', 'inlineSelect', 'infobox', { enum: 'alignments', bulk: true }),
    f('occupation', 'inlineList', 'infobox'),
    f('location', 'suggester', 'infobox', { source: '#location', label: 'Current location', bulk: true }),
    f('appearance', 'text', 'At the Table'),
    f('voice', 'textArea', 'At the Table'),
    f('goals', 'textArea', 'At the Table'),
    f('personality', 'textArea', 'At the Table'),
    f('ideal', 'textArea', 'At the Table'),
    f('bond', 'textArea', 'At the Table'),
    f('flaw', 'textArea', 'At the Table'),
    f('likes', 'textArea', 'At the Table'),
    f('dislikes', 'textArea', 'At the Table'),
    f('description', 'textArea', 'Lore'),
    f('history', 'textArea', 'Lore'),
    summary,
  ],
  region: locationCommon(),
  settlement: [...locationCommon(), f('wealth', 'inlineSelect', 'infobox', { enum: 'settlement_wealth', bulk: true })],
  'place-of-interest': locationCommon(),
  shop: [
    f('status', 'inlineSelect', 'header', { enum: 'location_statuses', chip: true, bulk: true }),
    gist,
    f('location', 'suggester', 'infobox', { source: '#location', label: 'Parent', bulk: true }),
    f('type', 'inlineSelect', 'infobox', { enum: 'shop_types', label: 'Shop type', bulk: true }),
    f('size', 'inlineSelect', 'infobox', { enum: 'shop_sizes', label: 'Shop size', bulk: true }),
    f('cost_modifier', 'number', 'infobox', { bulk: true }),
    f('buy_rate', 'number', 'infobox', { bulk: true }),
    f('owners', 'inlineListSuggester', 'At the Table', { source: '#npc' }),
    f('staff', 'inlineListSuggester', 'At the Table', { source: '#npc' }),
    f('atmosphere', 'textArea', 'At the Table'),
    summary,
  ],
  world: [
    gist,
    f('economic_scale', 'number', 'infobox', { bulk: true }),
    f('calendar', 'text', 'infobox'),
    summary,
  ],
  faction: [
    f('standing', 'inlineSelect', 'header', { enum: 'party_standings', chip: true, bulk: true, per_party: true }),
    f('status', 'inlineSelect', 'header', { enum: 'faction_statuses', chip: true, bulk: true }),
    gist,
    f('kind', 'inlineSelect', 'infobox', { enum: 'faction_kinds', bulk: true }),
    f('location', 'suggester', 'infobox', { source: '#location', label: 'Base', bulk: true }),
    f('renown', 'number', 'infobox', { per_party: true }),
    f('goals', 'textArea', 'At the Table'),
    f('resources', 'textArea', 'At the Table'),
    f('symbol', 'text', 'At the Table'),
    f('motto', 'text', 'At the Table'),
    summary,
  ],
  'story-item': [
    gist,
    f('holder', 'suggester', 'Overview', { source: '#player' }),
    f('location', 'suggester', 'Overview', { source: '#location', label: 'Rests at' }),
    f('base_item', 'suggester', 'Overview', { source: '"5. Mechanics/Items"' }),
    f('rarity', 'text', 'Overview', { bulk: true }),
    f('attunement', 'toggle', 'Overview', { bulk: true }),
    f('curse', 'textArea', 'DM'),
    summary,
  ],
  'story-deity': [
    gist,
    f('title', 'text', 'Overview'),
    f('symbol', 'text', 'Overview'),
    f('alignment', 'inlineSelect', 'Overview', { enum: 'alignments', bulk: true }),
    f('domains', 'inlineList', 'Overview'),
    f('mechanics', 'suggester', 'Overview', { source: '"5. Mechanics/Deities"' }),
    summary,
  ],
  'story-creature': [
    gist,
    f('base_creature', 'suggester', 'Overview', { source: '"5. Mechanics/Bestiary"' }),
    f('cr', 'text', 'Overview', { bulk: true }),
    f('size', 'text', 'Overview', { bulk: true }),
    f('type', 'text', 'Overview', { bulk: true }),
    f('environments', 'inlineList', 'Overview'),
    f('description', 'textArea', 'Overview'),
    summary,
  ],
  quest: [
    f('active', 'toggle', 'header', { chip: true, bulk: true, per_party: true }),
    f('completed', 'toggle', 'header', { chip: true, bulk: true, per_party: true }),
    gist,
    f('kind', 'inlineSelect', 'infobox', { enum: 'quest_kinds', bulk: true }),
    f('parent', 'suggester', 'infobox', { source: '#quest', label: 'Arc' }),
    f('giver', 'suggester', 'NPCs & Links', { source: '#npc' }),
    f('description', 'textArea', 'Description'),
    f('stakes', 'textArea', 'Description'),
    f('reward', 'text', 'Description'),
    f('deadline', 'text', 'Description', { bulk: true }),
    summary,
  ],
  'session-journal': [
    f('party_level', 'number', 'header', { chip: true, bulk: true }),
    f('wrapped', 'toggle', 'header', { chip: true, bulk: true }),
    f('session_number', 'number', 'infobox', { bulk: true }),
    f('spotlight', 'inlineListSuggester', 'infobox', { source: '#player' }),
    f('summary', 'textArea', 'Recap'),
  ],
  party: [
    f('travel_multiplier', 'number', 'Travel'),
    f('travel_bonus', 'number', 'Travel'),
    f('travel_hours_per_day', 'number', 'Travel'),
    f('encumbered', 'toggle', 'Travel'),
    f('horseshoes_of_speed', 'toggle', 'Travel'),
    f('exhaustion_level', 'number', 'Travel'),
  ],
  campaign: [
    f('status', 'inlineSelect', 'infobox', { enum: 'campaign_statuses', bulk: true }),
    f('level_range', 'text', 'infobox'),
    f('site_slug', 'text', 'infobox'),
    f('summary', 'textArea', 'infobox'),
  ],
}

const note = read(path.join(VAULT, '1. DM Toolkit/Configuration.md'))
const enums = note.doc.get('enums')
for (const [k, v] of Object.entries(NEW_ENUMS)) {
  if (enums.has(k)) continue
  const node = note.doc.createNode(v); node.flow = true
  enums.set(k, node)
}
if (note.doc.has('note_fields')) throw new Error('note_fields already present')
const nf = new YAML.YAMLMap()
for (const [type, list] of Object.entries(NOTE_FIELDS)) {
  const seq = note.doc.createNode(list)
  seq.items.forEach(i => { i.flow = true })
  nf.set(type, seq)
}
note.doc.set('note_fields', nf)
const changed = write(note, { dryRun })
const count = Object.values(NOTE_FIELDS).reduce((n, l) => n + l.length, 0)
console.log(`${dryRun ? 'would add' : 'added'} note_fields: ${Object.keys(NOTE_FIELDS).length} types, ${count} fields; enums: ${Object.keys(NEW_ENUMS).join(', ')} (changed=${changed})`)
