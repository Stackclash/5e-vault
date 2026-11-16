// A6: make obsidianUIMode the first key (add "obsidianUIMode: preview" where missing)
// for the notes listed by `lint.js --rule uimode-first`. Usage: [--dry-run]
const path = require('path')
const { execFileSync } = require('child_process')
const { VAULT, read, write, moveKeyFirst, YAML } = require('./fm')

const dryRun = process.argv.includes('--dry-run')
let out = ''
try {
  out = execFileSync('node', ['.claude/skills/vault-lint/scripts/lint.js', '--rule', 'uimode-first', '--max', '999'], { cwd: VAULT, encoding: 'utf8' })
} catch (e) { out = e.stdout }
const files = out.split('\n').filter(l => l.endsWith('— obsidianUIMode is not the first key')).map(l => l.trim().replace(/ — .*$/, ''))

let moved = 0, added = 0
for (const rel of files) {
  const note = read(path.join(VAULT, rel))
  if (moveKeyFirst(note.doc, 'obsidianUIMode') === -1) {
    note.doc.contents.items.unshift(note.doc.createPair('obsidianUIMode', 'preview'))
    added++
    console.log(`add  ${rel}`)
  } else {
    moved++
    console.log(`move ${rel}`)
  }
  write(note, { dryRun })
}
console.log(`${dryRun ? 'would change' : 'changed'} ${files.length} notes (${moved} moved, ${added} added)`)
