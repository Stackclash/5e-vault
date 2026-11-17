// C9 follow-up (T13, 2026-11-17): move each tab bar inside its tab box and rename [!tabbed-box] to [!tabs].
// Reading view unloads off-screen blocks; a tab bar in its own block was unloaded while a long panel was
// read, and every panel hid. Usage: node c9-tabs-inside.js [--write] <file>...
const fs = require('fs')
const path = require('path')
const { VAULT } = require('./fm')
const write = process.argv.includes('--write')
const RE = /^```meta-bind\n(INPUT\[select\([^\n]*class\(tabbed\)[^\n]*)\n```\n> ?\[!tabbed-box\][^\n]*\n/gm
for (const rel of process.argv.slice(2).filter(a => a !== '--write')) {
  const f = path.join(VAULT, rel)
  const raw = fs.readFileSync(f, 'utf8')
  let n = 0
  const out = raw.replace(RE, (_, input) => { n++; return '> [!tabs]\n> ```meta-bind\n> ' + input + '\n> ```\n>\n' })
  console.log(`${n} tab box(es): ${rel}`)
  if (write && n) fs.writeFileSync(f, out)
}
