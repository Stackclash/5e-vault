// C8: generate z_Templates/Partials/ (tab boxes per note type and the Player-Facing panel).
// Templates include them with tp.file.include (T5b passed). Usage: [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT } = require('./fm')

const dryRun = process.argv.includes('--dry-run')
const OUT = path.join(VAULT, 'z_Templates/Partials')
const P = '> > '  // panel content depth (inside [!tabbed-box] > panel callout)

const buttons = new Map()
const popButton = (field, label) => {
  const id = 'pop-' + field.replace(/[^a-z0-9]+/gi, '-')
  buttons.set(id, ['```meta-bind-button', 'label: ""', 'icon: maximize-2', `tooltip: Edit ${label} in a larger window`,
    'style: default', `id: ${id}`, 'hidden: true', 'actions:', '  - type: js',
    '    file: z_Scripts/Meta Bind/popOutEditor.js', '    args:', `      field: ${field}`, `      label: ${label}`, '```'])
  return `\`BUTTON[${id}]\``
}
const defButton = (id, lines) => { buttons.set(id, lines); return `\`BUTTON[${id}]\`` }
const textArea = (field, label) => [`**${label}** ${popButton(field, label)}`, `\`INPUT[textArea:${field}]\``, '']
const text = (field, label) => [`**${label}** \`INPUT[text:${field}]\``, '']
const derived = label => `**${label}**`
const block = lines => lines  // code blocks are written as plain lines; panel() adds the prefix

function panel(title, lines, { type = 'tab' } = {}) {
  const head = type === 'tab' ? `> > [!tab|no-t] ${title}` : `> > [!${type}] ${title}`
  while (lines.length && lines[lines.length - 1] === '') lines.pop()
  return [head, ...lines.map(l => (l === '' ? '> >' : P + l))]
}
const INCLUDE_PLAYER = '<% tp.file.include("[[z_Templates/Partials/Player-Facing]]") %>'

function tabBox(panels) {
  const names = panels.map(p => p.name)
  const out = ['```meta-bind', `INPUT[select(class(tabbed), ${names.map(n => `option(${n})`).join(', ')}):memory^tab]`, '```',
    '> [!tabbed-box]']
  panels.forEach((p, i) => {
    if (i) out.push('>')
    if (p.include) out.push(p.include)
    else out.push(...panel(p.name, p.lines, p))
  })
  return out
}
function file(name, panels) {
  const body = tabBox(panels)
  const defs = [...buttons.values()].flatMap(b => b)
  return [...body, '', ...defs].join('\n').trimEnd() + '\n'
}

// Derived lists shared by several types.
const sessionsWith = field => block(['```dataview', `LIST FROM #session-journal WHERE contains(${field}, this.file.link) SORT session_number ASC`, '```'])
const relationshipButtons = () => [
  defButton('add-relationship', ['```meta-bind-button', 'style: primary', 'label: Add Relationship', 'id: add-relationship',
    'hidden: true', 'actions:', '  - type: runTemplaterFile', '    templateFile: "z_Templates/Templater/Functional/Add Relationship.md"', '```']) + ' ' +
  defButton('remove-relationship', ['```meta-bind-button', 'style: destructive', 'label: Remove Relationship', 'id: remove-relationship',
    'hidden: true', 'actions:', '  - type: runTemplaterFile', '    templateFile: "z_Templates/Templater/Functional/Remove Relationship.md"', '```']),
  '']
const inbound = (types, label) => [derived(label), ...block(['```datacorejsx',
  'return function View() {',
  '  const here = dc.useCurrentFile()',
  '  const pages = dc.useQuery(`@page and (#npc or #faction or #player) and connected(${here.$link})`)',
  `  const rows = pages.flatMap(p => (p.value("relationships") ?? []).filter(r => r && typeof r === "object" && ${JSON.stringify(types)}.includes(r.type) && r.target?.path === here.$path).map(r => ({ p, r })))`,
  '  if (!rows.length) return <p>None recorded.</p>',
  '  return <dc.Table rows={rows} columns={[{ id: "Who", value: x => x.p.$link }, { id: "Tie", value: x => x.r.type }, { id: "Note", value: x => x.r.note ?? "" }]} />',
  '}', '```']), '']
// DM panel (secrets field dropped 2026-11-16): unlearned facts, type extras, legacy secrets until batch F.
// DM Notes prose lives in this tab too (DM, 2026-11-16): the heading keeps the #DM Notes anchor.
const dm = (extra = []) => ({ name: 'DM', type: 'dm', lines: [...extra, ...block(['```dataviewjs', 'await dv.view("views/dmPanel", {current: dv.current()})', '```']), '',
  defButton('edit-dm-notes', ['```meta-bind-button', 'label: Edit DM Notes', 'icon: pencil', 'style: default', 'id: edit-dm-notes', 'hidden: true',
    'actions:', '  - type: js', '    file: z_Scripts/Meta Bind/editSection.js', '    args:', '      heading: DM Notes', '      prefix: "> > "', '```']),
  '## DM Notes', ''] })
// Stat block in a tab (T12: Fantasy Statblocks and the Initiative Tracker still read it; block embeds don't).
const stats = () => ({ name: 'Stats', lines: block(['```statblock', '', '```']) })
const player = { name: 'Player-Facing', include: INCLUDE_PLAYER }

const locationRoutes = () => [derived('Routes'), ...block(['```dataviewjs', "await dv.view('views/travelTimes', {current: dv.current()})", '```']),
  defButton('addtravel', ['```meta-bind-button', 'style: primary', 'label: Add Route', 'id: addtravel', 'hidden: true', 'actions:',
    '  - type: runTemplaterFile', '    templateFile: "z_Templates/Templater/Functional/Add Travel Distance.md"', '```']) + ' ' +
  defButton('removetravel', ['```meta-bind-button', 'style: destructive', 'label: Remove Route', 'id: removetravel', 'hidden: true', 'actions:',
    '  - type: runTemplaterFile', '    templateFile: "z_Templates/Templater/Functional/Remove Travel Distance.md"', '```']), '']

const PARTIALS = {
  'Tabs - NPC': () => [
    { name: 'At the Table', lines: [...text('appearance', 'Appearance'), ...textArea('voice', 'Voice'), ...textArea('goals', 'Goals'),
      ...textArea('personality', 'Personality'), ...textArea('ideal', 'Ideal'), ...textArea('bond', 'Bond'), ...textArea('flaw', 'Flaw'),
      ...textArea('likes', 'Likes'), ...textArea('dislikes', 'Dislikes')] },
    { name: 'Lore', lines: [...textArea('description', 'Description'), ...textArea('history', 'History')] },
    player,
    { name: 'Connections', lines: [...relationshipButtons(), ...block(['```dataviewjs', 'await dv.view("views/npcRelationships", { current: dv.current() })', '```']), '',
      derived('Quests'), ...block(['```dataview', 'LIST FROM #quest WHERE contains(npcs.name, this.file.link)', '```']), '',
      derived('Sessions'), ...sessionsWith('npcs')] },
    stats(),
    dm(),
  ],
  'Tabs - Location': () => [
    { name: 'At the Table', lines: [...textArea('atmosphere', 'Atmosphere'), ...textArea('hazards', 'Hazards'), ...text('climate', 'Climate'), ...locationRoutes()] },
    { name: "What's Here", lines: [...block(['```dataviewjs', 'await dv.view("views/locations", {current: dv.current()})', '```']), '',
      ...block(['```dataviewjs', 'await dv.view("views/npcsInLocation", {current: dv.current()})', '```']), '',
      derived('Factions based here'), ...block(['```dataview', 'LIST FROM #faction WHERE location = this.file.link', '```']), '',
      derived('Visits'), ...sessionsWith('locations')] },
    player,
    { name: 'Map', lines: block(['```leaflet', 'id: <% tp.file.title.replace(/[^A-Za-z0-9]/g, "") %>', 'image: [[z_Assets/PlaceholderImage.png]]',
      'bounds: [[0,0], [1815.07, 2805.48]]', 'height: 900px', 'width: 95%', 'lat: 907.53', 'long: 1402.74', 'minZoom: -1.5', 'maxZoom: 1.5',
      'defaultZoom: -1', 'zoomDelta: 0.5', 'unit: miles', 'scale: 1', 'lock: true', 'recenter: true', 'noScrollZoom: true', 'darkMode: false', '```']) },
    dm(),
  ],
  'Tabs - Shop': () => [
    { name: 'Inventory', lines: [
      defButton('generate-inventory', ['```meta-bind-button', 'style: primary', 'label: Generate Inventory', 'id: generate-inventory', 'hidden: true',
        'actions:', '  - type: js', '    file: z_Scripts/Meta Bind/generateShopInventory.js', '```']) + ' ' +
      defButton('add-item', ['```meta-bind-button', 'style: default', 'label: Add Item', 'id: add-item', 'hidden: true', 'actions:', '  - type: js',
        '    file: z_Scripts/Meta Bind/addShopItem.js', '    args:', '      field: items', '      folder: 5. Mechanics/Items', '```']), '',
      ...block(['```datacorejsx', 'const { ShopInventory } = await dc.require("z_Scripts/Datacore/ShopInventory.tsx")',
        'return function View() { return <ShopInventory /> }', '```'])] },
    { name: 'At the Table', lines: [`**Owners** \`INPUT[inlineListSuggester(optionQuery(#npc)):owners]\``, '',
      `**Staff** \`INPUT[inlineListSuggester(optionQuery(#npc)):staff]\``, '', ...textArea('atmosphere', 'Atmosphere')] },
    player,
    dm(),
  ],
  'Tabs - World': () => [
    { name: 'Overview', lines: [derived('Regions'), ...block(['```dataviewjs', 'await dv.view("views/locations", {current: dv.current()})', '```']), '',
      derived('Factions'), ...block(['```dataview', 'LIST FROM #faction', '```']), '',
      derived('Deities'), ...block(['```dataview', 'LIST FROM #story-deity', '```'])] },
    player,
    { name: 'Map', lines: block(['```leaflet', 'id: <% tp.file.title.replace(/[^A-Za-z0-9]/g, "") %>', 'image: [[z_Assets/PlaceholderImage.png]]',
      'bounds: [[0,0], [1815.07, 2805.48]]', 'height: 900px', 'width: 95%', 'lat: 907.53', 'long: 1402.74', 'minZoom: -1.5', 'maxZoom: 1.5',
      'defaultZoom: -1', 'zoomDelta: 0.5', 'unit: miles', 'scale: 1', 'lock: true', 'recenter: true', 'noScrollZoom: true', 'darkMode: false', '```']) },
    dm(),
  ],
  'Tabs - Faction': () => [
    { name: 'At the Table', lines: [...textArea('goals', 'Goals'), ...textArea('resources', 'Resources'), ...text('symbol', 'Symbol'), ...text('motto', 'Motto')] },
    { name: 'Members', lines: inbound(['leader', 'founder', 'member', 'agent', 'former-member'], 'Members') },
    { name: 'Clock', lines: ['Faction clocks arrive with J8. Until then, `clock` steps live in frontmatter.'] },
    player,
    dm(),
  ],
  'Tabs - Story Item': () => [
    { name: 'Overview', lines: [`**Holder** \`INPUT[suggester(optionQuery(#player), optionQuery(#npc), optionQuery(#faction), optionQuery(#party)):holder]\``, '',
      `**Rests at** \`INPUT[suggester(optionQuery(#location)):location]\``, '',
      `**Base item** \`INPUT[suggester(optionQuery("5. Mechanics/Items")):base_item]\``, '',
      `**Rarity** \`INPUT[text:rarity]\` **Attunement** \`INPUT[toggle:attunement]\``, '',
      `**Charges** \`INPUT[number:charges.current]\` of \`INPUT[number:charges.max]\` · recharge \`INPUT[text:charges.recharge]\``] },
    player,
    { name: 'Connections', lines: [derived('Sessions'), ...sessionsWith('items')] },
    dm(textArea('curse', 'Curse')),
  ],
  'Tabs - Deity': () => [
    { name: 'Overview', lines: [...text('title', 'Title'), ...text('symbol', 'Symbol'), ...text('alignment', 'Alignment'),
      `**Domains** \`INPUT[inlineList:domains]\``, '', `**Mechanics** \`INPUT[suggester(optionQuery("5. Mechanics/Deities")):mechanics]\``] },
    player,
    { name: 'Connections', lines: inbound(['worships', 'cleric-of'], 'Worshippers') },
    dm(),
  ],
  'Tabs - Creature': () => [
    { name: 'Overview', lines: [`**Base creature** \`INPUT[suggester(optionQuery("5. Mechanics/Bestiary")):base_creature]\``, '',
      `**CR** \`INPUT[text:cr]\` **Size** \`INPUT[text:size]\` **Type** \`INPUT[text:type]\``, '',
      `**Environments** \`INPUT[inlineList:environments]\``, '', ...textArea('description', 'Description')] },
    player,
    { name: 'Connections', lines: [...relationshipButtons(), derived('Named individuals'),
      ...block(['```dataview', 'LIST FROM #npc WHERE contains(file.outlinks, this.file.link)', '```'])] },
    stats(),
    dm(),
  ],
  'Tabs - Quest': () => [
    { name: 'Steps', lines: [
      ...block(['```datacorejsx', 'const { QuestSteps } = await dc.require("z_Scripts/Datacore/QuestSteps.tsx")',
        'return function View() { return <QuestSteps /> }', '```'])] },
    { name: 'NPCs & Links', lines: [`**Giver** \`INPUT[suggester(optionQuery(#npc), optionQuery(#faction)):giver]\``, '',
      `**Locations** \`INPUT[inlineListSuggester(optionQuery(#location)):locations]\``, '',
      `**Items** \`INPUT[inlineListSuggester(optionQuery(#story-item), optionQuery("5. Mechanics/Items")):items]\``, '',
      `**Factions** \`INPUT[inlineListSuggester(optionQuery(#faction)):factions]\``, '',
      `**PCs** \`INPUT[inlineListSuggester(optionQuery(#player)):pcs]\``, '',
      derived('Sessions'), ...sessionsWith('quests')] },
    { name: 'Description', lines: [...textArea('description', 'Description'), ...textArea('stakes', 'Stakes'), ...text('reward', 'Reward'), ...text('deadline', 'Deadline')] },
    player,
    dm(),
  ],
}

// Party-keyed controls go through utils/metaBindInput so the key is the active party's name.
const partyInput = (type, field, extra = '') => `\`$=await dv.view('utils/metaBindInput', {type: '${type}', field: ['${field}', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]${extra}})\``
const PLAYER_FACING = [
  '> > [!player] Player-Facing',
  `> > **Revealed to the party** ${partyInput('toggle', 'revealed')}`,
  '> >',
  `> > **Public name** ${partyInput('text', 'public_name')} (optional: shown instead of the note name)`,
  '> >',
  `> > **Also show** ${partyInput('inlineList', 'reveal')} (extra fields the site may show, e.g. images, occupation)`,
  '> >',
  `> > **Summary** ${'`BUTTON[pop-summary]`'}`,
  '> > `INPUT[textArea:summary]`',
  '> >',
  '> > **Facts**',
  '> > ```datacorejsx',
  '> > const { FactsTable } = await dc.require("z_Scripts/Datacore/FactsTable.tsx")',
  '> > return function View() { return <FactsTable /> }',
  '> > ```',
].join('\n')  // no trailing newline: the include sits inside the tab box
const PLAYER_FACING_BUTTON = ['```meta-bind-button', 'label: ""', 'icon: maximize-2', 'tooltip: Edit Summary in a larger window', 'style: default',
  'id: pop-summary', 'hidden: true', 'actions:', '  - type: js', '    file: z_Scripts/Meta Bind/popOutEditor.js', '    args:', '      field: summary',
  '      label: Summary', '```'].join('\n')

const outputs = { 'Player-Facing': PLAYER_FACING }
for (const [name, build] of Object.entries(PARTIALS)) {
  buttons.clear()
  let content = file(name, build())
  if (content.includes(INCLUDE_PLAYER)) content = content.trimEnd() + (buttons.size ? '\n' : '\n\n') + PLAYER_FACING_BUTTON + '\n'
  outputs[name] = content
}
for (const [name, content] of Object.entries(outputs)) {
  const f = path.join(OUT, name + '.md')
  if (dryRun) console.log(`would write ${path.relative(VAULT, f)} (${content.split('\n').length} lines)`)
  else fs.writeFileSync(f, content)
}
if (!dryRun) console.log(`wrote ${Object.keys(outputs).length} partials`)
