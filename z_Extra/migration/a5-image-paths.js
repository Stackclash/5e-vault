// A5: normalize images[] paths: "\" -> "/", leading "Z_Assets/" -> "z_Assets/".
// A value changes only if the new path exists with exact case. Usage: [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write, walk, YAML } = require('./fm')

const dryRun = process.argv.includes('--dry-run')

function existsExact(rel) {
  let dir = VAULT
  for (const part of rel.split('/')) {
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return false
    if (!fs.readdirSync(dir).includes(part)) return false
    dir = path.join(dir, part)
  }
  return true
}

let files = 0, values = 0
const leftovers = []
for (const root of ['3. The Party', '4. World Almanac']) {
  for (const f of walk(path.join(VAULT, root))) {
    const note = read(f)
    if (!note.doc || note.doc.errors.length) continue
    const seq = note.doc.get('images', true)
    if (!YAML.isSeq(seq)) continue
    let touched = false
    for (const node of seq.items) {
      if (!YAML.isScalar(node) || typeof node.value !== 'string') continue
      const next = node.value.replace(/\\/g, '/').replace(/^Z_Assets\//, 'z_Assets/')
      if (next === node.value) continue
      const rel = path.relative(VAULT, f)
      if (!existsExact(next)) { leftovers.push(`${rel}: ${node.value}`); continue }
      node.value = next
      values++; touched = true
    }
    if (touched) { write(note, { dryRun }); files++ }
  }
}
console.log(`${dryRun ? 'would change' : 'changed'} ${values} values in ${files} files`)
console.log(`left unchanged (new path not found): ${leftovers.length}`)
leftovers.forEach(l => console.log('  ' + l))
