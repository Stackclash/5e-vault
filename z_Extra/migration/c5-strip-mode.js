// C5 follow-up: delete `mode` from every route (DM, 2026-11-16). Usage: [--dry-run] <files...>
const path = require('path')
const { VAULT, read, write, YAML } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
for (const rel of process.argv.slice(2).filter(a => a !== '--dry-run')) {
  const note = read(path.join(VAULT, rel))
  const routes = note.doc.get('routes')
  let n = 0
  if (YAML.isSeq(routes)) for (const r of routes.items) if (YAML.isMap(r) && r.has('mode')) { r.delete('mode'); n++ }
  if (n) write(note, { dryRun })
  console.log(`${dryRun ? 'would strip' : 'stripped'} ${n} from ${rel}`)
}
