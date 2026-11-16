// A2: point owners/staff/rulers links at the existing "<Name> (COS).md" files. Usage: [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write, YAML } = require('./fm')

const dryRun = process.argv.includes('--dry-run')
const targets = {
  '4. World Almanac/Shops/Blue Water Inn.md': ['owners', 'staff'],
  '4. World Almanac/Regions/Barovia.md': ['rulers'],
}
const LINK = /^\[\[(4\. World Almanac\/NPCs\/)([^|\]]+)\.md\|([^\]]+)\]\]$/
let changed = 0

for (const [rel, keys] of Object.entries(targets)) {
  const note = read(path.join(VAULT, rel))
  for (const key of keys) {
    const seq = note.doc.get(key, true)
    if (!YAML.isSeq(seq)) { console.log(`SKIP ${rel} ${key}: not a list`); continue }
    seq.items.forEach((node, i) => {
      const m = LINK.exec(node.value ?? '')
      if (!m || m[2].endsWith(' (COS)')) return
      const cos = `${m[1]}${m[2]} (COS).md`
      if (fs.existsSync(path.join(VAULT, `${m[1]}${m[2]}.md`))) return
      if (!fs.existsSync(path.join(VAULT, cos))) { console.log(`SKIP ${rel} ${key}[${i}]: no ${cos}`); return }
      const next = `[[${cos}|${m[3]}]]`
      console.log(`${rel} ${key}[${i}]: ${node.value} -> ${next}`)
      node.value = next
      changed++
    })
  }
  write(note, { dryRun })
}
console.log(`${dryRun ? 'would change' : 'changed'} ${changed} links`)
