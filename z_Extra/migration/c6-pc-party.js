// C6: re-lay the Player Character and Party Dashboard templates on tabs (04 Expansion §2.2). Existing sections
// move into tab panels unchanged apart from the callout prefix. Usage: [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT } = require('./fm')
const dryRun = process.argv.includes('--dry-run')

const prefix = lines => lines.map(l => (l.trim() === '' ? '> >' : '> > ' + l))
const trimBlank = lines => { while (lines.length && !lines[0].trim()) lines.shift(); while (lines.length && !lines[lines.length - 1].trim()) lines.pop(); return lines }
const panel = (title, lines, type = 'tab|no-t') => [`> > [!${type}] ${title}`, ...prefix(trimBlank([...lines]))]
const tabBox = panels => ['```meta-bind', `INPUT[select(class(tabbed), ${panels.map(p => `option(${p.name})`).join(', ')}):memory^tab]`, '```', '> [!tabbed-box]',
  ...panels.flatMap((p, i) => [...(i ? ['>'] : []), ...(p.raw ?? panel(p.name, p.lines, p.type))])]
const between = (lines, from, to) => {
  const a = lines.findIndex(l => from.test(l)); const b = to ? lines.findIndex((l, i) => i > a && to.test(l)) : lines.length
  if (a < 0 || b < 0) throw new Error(`section not found: ${from}`)
  return lines.slice(a, b)
}
const dropHeading = lines => lines.filter((l, i) => !(i === 0 && /^#+ /.test(l)))
const button = (id, label, icon, file, args = []) => ['```meta-bind-button', `label: ${label}`, `icon: ${icon}`, 'style: default', `id: ${id}`, 'hidden: true',
  'actions:', '  - type: js', `    file: ${file}`, ...(args.length ? ['    args:', ...args.map(a => '      ' + a)] : []), '```']
const DM_NOTES_BUTTON = button('edit-dm-notes', 'Edit DM Notes', 'pencil', 'z_Scripts/Meta Bind/editSection.js', ['heading: DM Notes', 'prefix: "> > "'])
const POP_SUMMARY = ['```meta-bind-button', 'label: ""', 'icon: maximize-2', 'tooltip: Edit Summary in a larger window', 'style: default', 'id: pop-summary',
  'hidden: true', 'actions:', '  - type: js', '    file: z_Scripts/Meta Bind/popOutEditor.js', '    args:', '      field: summary', '      label: Summary', '```']
const PLAYER_INCLUDE = '<% tp.file.include("[[z_Templates/Partials/Player-Facing]]") %>'

function relay(rel, build) {
  const f = path.join(VAULT, 'z_Templates/Templater', rel)
  const text = fs.readFileSync(f, 'utf8')
  if (text.includes('[!tabbed-box]')) { console.log(`skip ${rel}: already tabbed`); return }
  const out = build(text)
  if (dryRun) console.log(`would rewrite ${rel}: ${text.split('\n').length} -> ${out.split('\n').length} lines`)
  else { fs.writeFileSync(f, out); console.log(`rewrote ${rel}`) }
}

relay('Party/Player Character.md', text => {
  const lines = text.split('\n')
  const bodyEnd = lines.findIndex(l => l.startsWith('<%* } else { -%>'))
  const sheetStart = lines.findIndex(l => l.startsWith('> [!infobox|n-th center wm-tl]'))
  if (sheetStart < 0 || bodyEnd < 0) throw new Error('PC template structure not recognised')
  const head = lines.slice(0, sheetStart)
  const body = lines.slice(sheetStart, bodyEnd)
  const sheet = between(body, /^> \[!infobox\|n-th center wm-tl\]/, /^## Spells$/)
  const spells = dropHeading(between(body, /^## Spells$/, /^## Weapons$/))
  const inventory = between(body, /^## Weapons$/, /^# Background$/)
  const story = [...dropHeading(between(body, /^# Background$/, /^# Notes$/)),
    ...dropHeading(between(body, /^# Notes$/, /^## Hidden Details$/))]
  const hidden = dropHeading(between(body, /^## Hidden Details$/, /^## Notes$/))
  const dm = ['`BUTTON[edit-dm-notes]`', '## DM Notes', ...hidden]
  return [...head, ...tabBox([
    { name: 'Sheet', lines: sheet },
    { name: 'Spells', lines: spells },
    { name: 'Inventory', lines: inventory },
    { name: 'Story', lines: story },
    { name: 'Player-Facing', raw: [PLAYER_INCLUDE] },
    { name: 'DM', lines: dm, type: 'dm' },
  ]), '', ...DM_NOTES_BUTTON, ...POP_SUMMARY, ...lines.slice(bodyEnd)].join('\n')
})

relay('Party/Party Dashboard.md', text => {
  const lines = text.split('\n')
  const fmEnd = lines.findIndex((l, i) => i > 49 && l === '---')
  const bodyEnd = lines.findIndex(l => l.startsWith('<%* } else { -%>'))
  if (fmEnd < 0 || bodyEnd < 0) throw new Error('Party template structure not recognised')
  const fm = lines.slice(0, fmEnd)
  if (!fm.some(l => l.startsWith('funds:'))) fm.push('funds: {cp: 0, sp: 0, ep: 0, gp: 0, pp: 0}')
  const body = lines.slice(fmEnd + 1, bodyEnd)
  const infoboxEnd = body.findIndex(l => l.startsWith('> ###### Lazy DM Encounter Benchmark'))
  const infobox = body.slice(0, infoboxEnd)
  const benchmark = between(body, /^> ###### Lazy DM Encounter Benchmark/, /^## Transport Services$/).map(l => l.replace(/^> ?/, ''))
  const transport = dropHeading(between(body, /^## Transport Services$/, /^## \*\*Characters\*\*$/))
    .map(l => l.replace(/^> \[!info\]- Travel time and transport costs$/, '> [!info] Travel time and transport costs'))
  const characters = dropHeading(between(body, /^## \*\*Characters\*\*$/, /^## NPC Relationships$/))
  const standing = dropHeading(between(body, /^## NPC Relationships$/, /^## Quests$/))
  const quests = dropHeading(between(body, /^## Quests$/, /^## Session Log$/))
  const log = dropHeading(between(body, /^## Session Log$/, /^# \*\*Notes\*\*$/))
  const treasury = ['> ###### Treasury', '>  |', '>  ---|---|',
    ...['cp', 'sp', 'ep', 'gp', 'pp'].map(c => `> **${c}** | \`INPUT[number:funds.${c}]\` |`)]
  return [...fm, '---', ...infobox, ...treasury, '',
    '```dataviewjs', "await dv.view('views/entityHeader', {current: dv.current(), pronounced: false, editAll: false})", '```', '',
    ...tabBox([
      { name: 'Overview', lines: [...characters, '', '**Encounter benchmark**', ...benchmark] },
      { name: 'Travel', lines: transport },
      { name: 'Quests', lines: quests },
      { name: 'Standing', lines: standing },
      { name: 'Session Log', lines: log },
      { name: 'Timelines', lines: ['```aat-vertical', '<% tp.file.title %>', '```'] },
    ]), '', '# Notes', '', ...lines.slice(bodyEnd)].join('\n')
})
