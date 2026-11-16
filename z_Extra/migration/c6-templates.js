// C6: generate the entity templates on the 04 Expansion §2 skeleton. Creation forms ask only name, gist, and
// location/parent (plus level for locations); everything else is edited in the note. Usage: [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const T = path.join(VAULT, 'z_Templates/Templater')

const q = expr => `<% JSON.stringify(${expr}) %>`   // YAML-safe scalar from a Templater expression
const row = (label, field) => `> **${label}** | \`$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: '${field}'})\` |`
const rawRow = (label, input) => `> **${label}** | \`${input}\` |`
const group = (title, rows) => [`> ###### ${title}`, '>  |', '>  ---|---|', ...rows]
const imagesBlock = ['> ```dataviewjs', "> await dv.view('views/imageCarousel', {current: dv.current()})", '> ```', '> ```meta-bind', '> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]', '> ```']

const HEADER = [
  '```dataviewjs',
  "await dv.view('views/entityHeader', {current: dv.current()})",
  '```',
  '',
]
const EDIT_ALL = ['```meta-bind-button', 'label: Edit all', 'icon: pencil', 'style: default', 'id: edit-all', 'hidden: true',
  'actions:', '  - type: js', '    file: z_Scripts/Meta Bind/editAll.js', '```']
const STATS = ['## Stats', '```statblock', '', '```', '^statblock', '']

function creation({ title, locationKey, fields, prelude = '', after = '' }) {
  return `<%*
let templateError = false
let data = {}
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { dataview, modalForm, config, path } = init.getPlugins(tp, [${locationKey ? `'${locationKey}'` : ''}])
${prelude}
  data = await init.openForm(modalForm, {
    title: "${title}",
    fields: [
${fields.map(f => '      ' + f).join(',\n')}
    ],
    version: "2"
  })
${after || `  await init.moveFile(tp, config.locations.${locationKey}, data.name)`}
} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>`
}
const ERROR = `<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>
`
const GIST_FIELD = 'fields.text("gist", "Gist", "One line: who or what this is and why it matters")'
const COMMON_FM = ['gist: ' + q('data.gist ?? ""'), 'summary: ""', 'revealed: {}', 'reveal: {}', 'facts: []']

function template({ create, fm, infobox, tabs, stats = false }) {
  return [
    create, '---', 'obsidianUIMode: preview', ...fm, '---',
    // Infobox first: it floats right, so the header and the tabs sit beside it.
    '> [!infobox]', ...imagesBlock, ...(infobox ?? []), '',
    ...HEADER,
    `<% tp.file.include("[[z_Templates/Partials/Tabs - ${tabs}]]") %>`, '',
    ...(stats ? STATS : []),
    '## DM Notes', '', '',
    ...EDIT_ALL,
    ERROR,
  ].join('\n')
}

const TEMPLATES = {
  'World Building/NPC.md': template({
    create: creation({ title: 'NPC Setup', locationKey: 'npcs', fields: ['fields.name("NPC Name", "Name of NPC")', GIST_FIELD,
      'fields.tagSelect(dataview, "location", "Location", \'#location\', "Where this NPC is now", false)'] }),
    fm: ['statblock: inline', 'location: ' + q('data.location ?? ""'), 'condition: healthy', 'images:', '  - z_Assets/PlaceholderImage.png',
      'relationships: []', 'tags:', '  - npc', 'aliases:', '  - ' + q('data.name'), 'pronounced: ""', ...COMMON_FM,
      'race: ""', 'gender: ""', 'age: ""', 'alignment: ""', 'occupation: []', 'appearance: ""', 'voice: ""', 'description: ""', 'history: ""',
      'personality: ""', 'ideal: ""', 'bond: ""', 'flaw: ""', 'goals: ""', 'likes: ""', 'dislikes: ""', 'party_relationships: {}'],
    infobox: [...group('Bio', [row('Race', 'race'), row('Gender', 'gender'), row('Age', 'age'), row('Alignment', 'alignment')]),
      ...group('Info', [rawRow('Alias(es)', 'INPUT[inlineList:aliases]'), row('Occupation(s)', 'occupation'), row('Current Location', 'location'),
        rawRow('Group(s)', 'INPUT[inlineList:groups]'), rawRow('Religion(s)', 'INPUT[inlineList:religions]')])],
    tabs: 'NPC', stats: true,
  }),
  'World Building/Location.md': template({
    create: creation({ title: 'Location Setup', locationKey: '',
      prelude: `  const typeLocations = { Region: 'regions', Settlement: 'settlements', 'Place of Interest': 'pois' }`,
      fields: ['fields.name("Location Name", "Name of Location")',
        `{ name: "type", label: "Level", description: "Region, settlement, or place of interest", isRequired: true, input: { type: "select", source: "fixed", options: Object.entries(typeLocations).map(([label, value]) => ({ label, value })) } }`,
        GIST_FIELD, 'fields.tagSelect(dataview, "location", "Parent Location", \'#location\', "What this location sits inside", false)'],
      after: `  data.tag = Object.keys(typeLocations).find(k => typeLocations[k] === data.type).toLowerCase().replaceAll(' ', '-')
  await tp.file.move(path.posix.join(config.locations[data.type], data.name), tp.file.find_tfile(tp.file.title))` }),
    fm: ['location: ' + q('data.location ?? ""'), 'images:', '  - z_Assets/PlaceholderImage.png', 'pronounced: ""', ...COMMON_FM,
      'status: ""', 'atmosphere: ""', 'hazards: ""', 'climate: ""', 'resources: []', 'population: ""', 'terrain: ""', 'rulers: []',
      'government: ""', 'army: ""', 'imports: []', 'exports: []', 'routes: []',
      "<%* if (data.type === 'settlements') { -%>", 'wealth: ""', '<%* } -%>',
      'aliases: []', 'tags:', '  - location', '  - <% data.tag %>'],
    infobox: [...group('Overview', [row('Parent', 'location'), row('Population', 'population'), row('Terrain', 'terrain'),
        rawRow('Resources', 'INPUT[inlineListSuggester(optionQuery("5. Mechanics/Items")):resources]')]),
      ...group('Politics', [row('Ruler(s)', 'rulers'), row('Government', 'government'), row('Army', 'army')]),
      "<%* if (data.type === 'settlements') { -%>",
      ...group('Trade', [row('Wealth', 'wealth'), row('Imports', 'imports'), row('Exports', 'exports')]),
      "<%* } else { -%>",
      ...group('Trade', [row('Imports', 'imports'), row('Exports', 'exports')]),
      '<%* } -%>'],
    tabs: 'Location',
  }),
  'World Building/Shop.md': template({
    create: creation({ title: 'Shop Setup', locationKey: 'shops', fields: ['fields.name("Shop Name", "Name of Shop")', GIST_FIELD,
      'fields.tagSelect(dataview, "location", "Location", \'#location\', "Where this shop is", false)'] }),
    fm: ['location: ' + q('data.location ?? ""'), ...COMMON_FM, 'status: ""', 'atmosphere: ""', 'resources: []', 'owners: []', 'staff: []',
      'cost_modifier: 1', 'buy_rate: <% dataview.page("Configuration")?.shop_defaults?.buy_rate ?? 0.5 %>', 'type: ""', 'size: ""',
      'items: []', 'pinned_items: []', 'last_stocked: ""', 'tags:', '  - location', '  - shop'],
    infobox: [...group('Pricing', [row('Shop type', 'type'), row('Shop size', 'size'), row('Cost modifier', 'cost_modifier'), row('Buy rate', 'buy_rate')]),
      ...group('Where', [row('Location', 'location')])],
    tabs: 'Shop',
  }),
  'World Building/World.md': template({
    create: creation({ title: 'World Setup', locationKey: 'worlds', fields: ['fields.name("World Name", "Name of World")', GIST_FIELD] }),
    fm: ['images:', '  - z_Assets/PlaceholderImage.png', ...COMMON_FM, 'economic_scale: 1', 'calendar: ""', 'aliases: []', 'tags:', '  - location', '  - world'],
    infobox: [...group('Settings', [row('Economic scale', 'economic_scale'), row('Calendar', 'calendar')])],
    tabs: 'World',
  }),
  'World Building/Faction.md': template({
    create: creation({ title: 'Faction Setup', locationKey: 'factions', fields: ['fields.name("Faction Name", "Name of Faction")', GIST_FIELD,
      'fields.tagSelect(dataview, "location", "Base", \'#location\', "Where the faction is based (optional)", false)'] }),
    fm: ['kind: ""', 'status: active', 'location: ' + q('data.location ?? ""'), 'images: []', ...COMMON_FM, 'goals: ""', 'resources: ""',
      'symbol: ""', 'motto: ""', 'clock: []', 'standing: {}', 'renown: {}', 'relationships: []', 'aliases: []', 'tags:', '  - faction'],
    infobox: [...group('Overview', [row('Kind', 'kind'), row('Base', 'location'), row('Renown', 'renown')])],
    tabs: 'Faction',
  }),
  'World Building/Item.md': template({
    create: creation({ title: 'Story Item Setup', locationKey: 'items', fields: ['fields.name("Item Name", "Name of Item")', GIST_FIELD,
      'fields.tagSelect(dataview, "location", "Rests at", \'#location\', "Where it rests when not held (optional)", false)'] }),
    fm: ['base_item: ""', 'holder: ""', 'location: ' + q('data.location ?? ""'), 'rarity: ""', 'attunement: false', 'curse: ""', 'images: []',
      ...COMMON_FM, 'relationships: []', 'aliases: []', 'tags:', '  - story-item'],
    tabs: 'Story Item',
  }),
  'World Building/Deity.md': template({
    create: creation({ title: 'Deity Setup', locationKey: 'deities', fields: ['fields.name("Deity Name", "Name of Deity")', GIST_FIELD] }),
    fm: ['mechanics: ""', 'title: ""', 'symbol: ""', 'alignment: ""', 'domains: []', 'images: []', ...COMMON_FM, 'relationships: []',
      'aliases: []', 'tags:', '  - story-deity'],
    tabs: 'Deity',
  }),
  'World Building/Creature.md': template({
    create: creation({ title: 'Creature Setup', locationKey: 'creatures', fields: ['fields.name("Creature Name", "Name of the kind of creature")', GIST_FIELD] }),
    fm: ['statblock: inline', 'base_creature: ""', 'cr: ""', 'size: ""', 'type: ""', 'environments: []', 'description: ""', 'images: []',
      ...COMMON_FM, 'relationships: []', 'aliases: []', 'tags:', '  - story-creature'],
    tabs: 'Creature', stats: true,
  }),
  'Campaign/Quest.md': template({
    create: creation({ title: 'Quest Setup', locationKey: 'quests', fields: ['fields.name("Quest Name", "What is the name of the quest?")', GIST_FIELD,
      'fields.tagSelect(dataview, "parent", "Arc", \'#quest\', "The arc this belongs to (optional)", false)'],
      prelude: `  const campaign = dataview.page(config.active_campaign?.path ?? '')`,
      after: `  data.world = campaign?.world ? \`[[\${campaign.world.path}|\${dataview.page(campaign.world.path)?.file.name ?? ''}]]\` : ''
  await init.moveFile(tp, config.locations.quests, data.name)` }),
    fm: ['kind: quest', 'parent: ' + q('data.parent ?? ""'), 'world: ' + q('data.world ?? ""'), 'active: {}', 'completed: {}', ...COMMON_FM.filter(l => !l.startsWith('reveal:')),
      'description: ""', 'stakes: ""', 'reward: ""', 'deadline: ""', 'giver: ""', 'npcs: []', 'locations: []', 'items: []', 'factions: []', 'pcs: []',
      'steps: []', 'tags:', '  - quest'],
    infobox: [...group('Hook', [row('Kind', 'kind'), row('Arc', 'parent'), row('Giver', 'giver'), row('Reward', 'reward')])],
    tabs: 'Quest',
  }),
}

for (const [rel, content] of Object.entries(TEMPLATES)) {
  const f = path.join(T, rel)
  if (dryRun) console.log(`would write ${rel} (${content.split('\n').length} lines${fs.existsSync(f) ? ', replaces existing' : ', new'})`)
  else fs.writeFileSync(f, content)
}
if (!dryRun) console.log(`wrote ${Object.keys(TEMPLATES).length} templates`)
