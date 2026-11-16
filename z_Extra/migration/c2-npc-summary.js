// C2: NPC player_impression -> summary. Renames the frontmatter key as text (value bytes untouched,
// checked by re-parsing) and swaps the Meta Bind binding in NPC bodies and both templates. Usage: [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, YAML } = require('./fm')

const dryRun = process.argv.includes('--dry-run')
const OLD_BIND = 'INPUT[textArea:player_impression]'
const NEW_BIND = 'INPUT[textArea:summary]'
const npcDir = path.join(VAULT, '4. World Almanac/NPCs')
const files = [
  ...fs.readdirSync(npcDir).filter(f => f.endsWith('.md')).map(f => path.join(npcDir, f)),
  path.join(VAULT, 'z_Templates/Templater/World Building/NPC.md'),
  path.join(VAULT, 'z_Extra/ttrpg-convert/templates/monster.txt'),
]
let keys = 0, binds = 0, changed = 0
const skipped = []

for (const file of files) {
  const rel = path.relative(VAULT, file)
  let raw = fs.readFileSync(file, 'utf8')
  const note = file.endsWith('.md') ? read(file) : null
  let out = raw

  if (note?.doc?.has('player_impression')) {
    if (note.doc.has('summary')) { skipped.push(`${rel}: has both keys`); continue }
    const before = note.doc.get('player_impression', true)
    const fmEnd = 4 + note.fm.length
    const fm = raw.slice(0, fmEnd)
    const n = (fm.match(/^player_impression:/gm) || []).length
    if (n !== 1) { skipped.push(`${rel}: key line found ${n} times`); continue }
    out = fm.replace(/^player_impression:/m, 'summary:') + raw.slice(fmEnd)
    const after = YAML.parseDocument(out.slice(4, fmEnd - 'player_impression'.length + 'summary'.length))
    if (JSON.stringify(after.get('summary')) !== JSON.stringify(YAML.isNode(before) ? before.toJSON() : before)) {
      skipped.push(`${rel}: value changed on re-parse`); continue
    }
    keys++
  }

  const b = out.split(OLD_BIND).length - 1
  if (b === 1) { out = out.replace(OLD_BIND, NEW_BIND); binds++ }
  else if (b > 1) { skipped.push(`${rel}: binding found ${b} times`); continue }

  if (out !== raw) {
    changed++
    if (dryRun) console.log('would change ' + rel)
    else fs.writeFileSync(file, out)
  }
}
console.log(`${dryRun ? 'would change' : 'changed'} ${changed} files (${keys} keys renamed, ${binds} bindings swapped)`)
skipped.forEach(s => console.log('SKIP ' + s))
