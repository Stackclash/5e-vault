// E6b (DM, 2026-11-17): Amber Warden and Unfinished Amber Warden become story-creature notes.
// The DM had the files moved to 4. World Almanac/Creatures/ through Obsidian first. Frontmatter is rebuilt
// in the Creature template's key order; NPC-only text (history, personality, flaw, goals) is appended to
// description; secrets moves to DM Notes > Hidden Details. Body = Creature template scaffold (partial
// inlined) with the note's own Stats tab and DM Notes carried over. Usage: node e6b-creatures.js [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, YAML } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const readRel = p => fs.readFileSync(path.join(VAULT, p), 'utf8')

function include(src) {
  return src.replace(/^<% tp\.file\.include\("\[\[(z_Templates\/Partials\/[^\]]+)\]\]"\) %>$/gm, (_, p) => include(readRel(p + '.md')).trimEnd())
}
const src = readRel('z_Templates/Templater/World Building/Creature.md')
const start = src.indexOf('<%* if (!templateError) { -%>\n') + '<%* if (!templateError) { -%>\n'.length
const scaffold = include(src.slice(start, src.lastIndexOf('<%* } else { -%>')))
const scaffoldBody = scaffold.slice(scaffold.indexOf('\n---\n', 4) + 5)

const STATS_EMPTY = '> > [!tab|no-t] Stats\n> > ```statblock\n> >\n> > ```\n'
const DM_HEAD = '> > ## DM Notes\n'
if (!scaffoldBody.includes(STATS_EMPTY) || !scaffoldBody.includes(DM_HEAD)) throw new Error('scaffold anchors missing')

const GREYFEN = '[[4. World Almanac/Places of Interest/Greyfen Hollow.md|Greyfen Hollow]]'
const notes = [
  { name: 'Amber Warden', seeSecrets: 'See Secrets above: the Amber Conduits', replaced: 'The Amber Conduits' },
  { name: 'Unfinished Amber Warden', seeSecrets: 'See Secrets above. The exposed conduit', replaced: 'The exposed conduit' },
]

for (const n of notes) {
  const rel = `4. World Almanac/Creatures/${n.name}.md`
  const note = read(path.join(VAULT, rel))
  const d = note.doc.toJSON()
  if (d.location !== GREYFEN) throw new Error(`${rel}: unexpected location ${d.location}`)

  const tags = d.tags.filter(t => t !== 'npc')
  const cr = tags.find(t => t.startsWith('monster/cr/')).slice('monster/cr/'.length)
  const size = tags.find(t => t.startsWith('monster/size/')).slice('monster/size/'.length)
  const type = tags.find(t => t.startsWith('monster/type/')).slice('monster/type/'.length)
  const description = [
    d.description.replace(/\n\nAge: unknown\.$/, ''),
    d.history,
    `Personality: ${d.personality}`,
    `Flaw: ${d.flaw}`,
    `Goals: ${d.goals}`,
  ].join('\n\n')

  const fm = {
    obsidianUIMode: d.obsidianUIMode,
    statblock: d.statblock,
    base_creature: d.race,
    cr,
    size: size[0].toUpperCase() + size.slice(1),
    type,
    environments: [],
    description,
    images: d.images,
    gist: d.gist,
    relationships: [...d.relationships, { target: GREYFEN, type: 'home' }],
    aliases: d.aliases,
    tags: ['story-creature', ...tags],
  }
  const doc = new YAML.Document(fm)
  YAML.visit(doc, { Scalar(key, node) { if (typeof node.value === 'string' && /^\[\[/.test(node.value)) node.type = 'QUOTE_DOUBLE' } })
  doc.get('description', true).type = 'BLOCK_LITERAL'
  const fmText = doc.toString({ lineWidth: 0 })

  const body = note.body
  const statsStart = body.indexOf('> > [!tab|no-t] Stats\n')
  const statsEnd = body.indexOf('>\n> > [!dm] DM\n', statsStart)
  const dmStart = body.indexOf(DM_HEAD) + DM_HEAD.length
  const dmEnd = body.indexOf('\n```meta-bind-button', dmStart)
  if (statsStart < 0 || statsEnd < 0 || dmStart < DM_HEAD.length || dmEnd < 0) throw new Error(`${rel}: body anchors missing`)
  const stats = body.slice(statsStart, statsEnd)
  let dm = body.slice(dmStart, dmEnd).replace(/\n+$/, '\n')
  if (!dm.includes(n.seeSecrets)) throw new Error(`${rel}: "${n.seeSecrets}" not found`)
  const secretLines = d.secrets.split('\n').map(l => `> > - ${l}\n`).join('') + '> >\n'
  dm = dm.replace('> > ### Hidden Details\n', '> > ### Hidden Details\n' + secretLines).replace(n.seeSecrets, n.replaced)

  const newBody = scaffoldBody.replace(STATS_EMPTY, stats).replace(DM_HEAD, DM_HEAD + dm)
  const out = '---\n' + fmText + '---\n' + newBody
  console.log(`${dryRun ? '[dry] ' : ''}${rel}: ${note.raw.length} -> ${out.length} bytes`)
  if (!dryRun) fs.writeFileSync(path.join(VAULT, rel), out)
}
