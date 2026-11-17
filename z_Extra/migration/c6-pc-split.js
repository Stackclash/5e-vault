// C6 follow-up: split the PC Sheet tab into Sheet, Skills, Features, Class Features (a single tall, late-growing
// panel made reading view unload it and Live Preview jump to the top). Description moves to Story. Usage: [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const f = path.join(VAULT, 'z_Templates/Templater/Party/Player Character.md')
const lines = fs.readFileSync(f, 'utf8').split('\n')
const at = re => { const i = lines.findIndex(l => re.test(l)); if (i < 0) throw new Error('not found: ' + re); return i }
const sheetHead = at(/^> > \[!tab\|no-t\] Sheet$/)
const spellsHead = at(/^> > \[!tab\|no-t\] Spells$/)
const storyHead = at(/^> > \[!tab\|no-t\] Story$/)
// Groups: runs of inner-callout lines separated by "> >" lines, inside the Sheet panel (drop the trailing ">" separator).
let end = spellsHead; while (lines[end - 1] === '>' || lines[end - 1] === '') end--
const groups = []; let cur = []
for (const l of lines.slice(sheetHead + 1, end)) { if (l === '> >') { if (cur.length) groups.push(cur); cur = [] } else cur.push(l) }
if (cur.length) groups.push(cur)
const titled = t => { const g = groups.find(g => g.some(l => new RegExp(`^> > >+ ?#+ ${t}$`).test(l))); if (!g) throw new Error('group not found: ' + t); return g }
const join = gs => gs.flatMap((g, i) => [...(i ? ['> >'] : []), ...g])
const panel = (title, gs) => [`> > [!tab|no-t] ${title}`, ...join(gs)]
const sheet = [groups[0], groups[1], titled('Ability Scores'), titled('Defences')]
const used = new Set([...sheet, titled('Skills'), titled('Passive Skills'), titled('Description'), titled('Classes'), titled('Racial Traits'), titled('Class Features'), titled('Feats')])
if (used.size !== groups.length) throw new Error(`expected ${groups.length} groups accounted for, got ${used.size}`)
const replacement = [
  ...panel('Sheet', sheet), '>',
  ...panel('Skills', [titled('Skills'), titled('Passive Skills')]), '>',
  ...panel('Features', [titled('Classes'), titled('Racial Traits'), titled('Feats')]), '>',
  ...panel('Class Features', [titled('Class Features')]), '>',
]
const out = [...lines.slice(0, sheetHead), ...replacement, ...lines.slice(spellsHead, storyHead + 1), ...titled('Description'), '> >', ...lines.slice(storyHead + 1)]
const sel = out.findIndex(l => l.startsWith('INPUT[select(class(tabbed), option(Sheet)'))
out[sel] = out[sel].replace('option(Sheet), option(Spells)', 'option(Sheet), option(Skills), option(Features), option(Class Features), option(Spells)')
if (dryRun) console.log(`would split Sheet (${groups.length} groups) into 4 tabs; ${lines.length} -> ${out.length} lines`)
else { fs.writeFileSync(f, out.join('\n')); console.log('split the Sheet tab') }
