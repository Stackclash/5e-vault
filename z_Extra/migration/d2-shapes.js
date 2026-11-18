// D2: goals list -> one string ("; "-joined); age string -> number, or null with "Age: <text>." appended to
// description. Only those keys change. Usage: node d2-shapes.js [--dry-run]
const path = require('path')
const { VAULT, read, write, walk } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
for (const file of walk(path.join(VAULT, '4. World Almanac/NPCs'))) {
  const note = read(file)
  if (!note.doc || note.doc.errors.length) continue
  const js = note.doc.toJS() || {}
  const done = []
  if (Array.isArray(js.goals)) { note.doc.set('goals', js.goals.map(String).join('; ')); done.push('goals') }
  if (typeof js.age === 'string' && js.age.trim()) {
    const n = Number(js.age.trim())
    if (Number.isFinite(n)) note.doc.set('age', n)
    else {
      note.doc.set('age', null)
      const d = String(js.description ?? '').trimEnd()
      note.doc.set('description', (d ? d + '\n\n' : '') + `Age: ${js.age.trim()}.`)
    }
    done.push('age')
  }
  if (done.length && write(note, { dryRun })) console.log(`${dryRun ? 'would fix' : 'fixed'} ${done.join(', ')}: ${path.basename(file)}`)
}
