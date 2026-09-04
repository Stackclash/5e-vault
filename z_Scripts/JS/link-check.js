const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const VAULT_ROOT = path.resolve(__dirname, '../../')

const SCAN_FOLDERS = [
  '1. DM Toolkit',
  '2. Scratch Notes',
  '3. The Party',
  '4. World Almanac'
]

const EXCLUDE_DIRS = new Set(['.git', '.obsidian', '.claude', 'node_modules'])

const EXCLUDE_FILES = new Set([
  '4. World Almanac/NPCs/Npc.md'
])

const NON_NOTE_EXTENSIONS = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.bmp', '.ico',
  '.pdf', '.zip', '.json', '.mp3', '.mp4', '.wav', '.mov', '.m4a', '.csv'
])

const WIKILINK_RE = /(!?)\[\[([^\[\]]+?)\]\]/g

function walk(dir, fileList = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (EXCLUDE_DIRS.has(entry.name)) continue
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath, fileList)
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      fileList.push(fullPath)
    }
  }
  return fileList
}

function toRelPath(filePath) {
  return path.relative(VAULT_ROOT, filePath).replace(/\\/g, '/')
}

// --- Build resolution index across the whole vault ---

const allFiles = walk(VAULT_ROOT)

const pathIndex = new Set()      // relative path w/o extension, exact case
const basenameIndex = new Set()  // basename w/o extension, exact case
const aliasIndex = new Set()     // alias strings, exact case

for (const filePath of allFiles) {
  const relPath = toRelPath(filePath)
  const relNoExt = relPath.replace(/\.md$/i, '')
  pathIndex.add(relNoExt)
  basenameIndex.add(path.basename(relNoExt))

  let raw
  try {
    raw = fs.readFileSync(filePath, 'utf-8')
  } catch (e) {
    console.error(`Failed to read ${relPath}: ${e.message}`)
    continue
  }

  let data = {}
  try {
    data = matter(raw).data || {}
  } catch (e) {
    console.error(`Failed to parse frontmatter: ${relPath}: ${e.message}`)
    continue
  }

  let aliases = data.aliases || data.alias
  if (!aliases) continue
  if (!Array.isArray(aliases)) aliases = [aliases]
  for (const alias of aliases) {
    if (typeof alias !== 'string' || !alias.trim()) continue
    aliasIndex.add(alias.trim())
  }
}

function resolves(target) {
  const raw = target.trim()
  if (!raw) return true // e.g. [[#heading]] self-link
  const noExt = raw.replace(/\.md$/i, '')
  return pathIndex.has(noExt) || basenameIndex.has(path.basename(noExt)) || aliasIndex.has(noExt)
}

function extractLinks(content) {
  const results = []
  let match
  WIKILINK_RE.lastIndex = 0
  while ((match = WIKILINK_RE.exec(content)) !== null) {
    if (match[1] === '!') continue // embed

    const inner = match[2]
    const targetPart = inner.split(/\\\||\|/)[0].split('#')[0].trim()
    if (!targetPart) continue

    const ext = path.extname(targetPart).toLowerCase()
    if (NON_NOTE_EXTENSIONS.has(ext)) continue

    results.push({ target: targetPart, index: match.index })
  }
  return results
}

function lineNumberAt(raw, content, index) {
  const prefixLen = raw.length - content.length
  const offsetLines = raw.slice(0, prefixLen).split('\n').length - 1
  const inContentLine = content.slice(0, index).split('\n').length
  return offsetLines + inContentLine
}

// --- Scan target folders for unresolved wikilinks in note bodies ---

const unresolved = new Map() // target -> { count, files: Map(relPath -> [lineNumbers]) }

for (const filePath of allFiles) {
  const relPath = toRelPath(filePath)
  if (!SCAN_FOLDERS.some(f => relPath === f || relPath.startsWith(f + '/'))) continue
  if (EXCLUDE_FILES.has(relPath)) continue

  const raw = fs.readFileSync(filePath, 'utf-8')
  let content
  try {
    content = matter(raw).content
  } catch (e) {
    console.error(`Failed to parse frontmatter: ${relPath}: ${e.message}`)
    continue
  }

  for (const { target, index } of extractLinks(content)) {
    if (resolves(target)) continue

    if (!unresolved.has(target)) unresolved.set(target, { count: 0, files: new Map() })
    const entry = unresolved.get(target)
    entry.count++

    const line = lineNumberAt(raw, content, index)
    if (!entry.files.has(relPath)) entry.files.set(relPath, [])
    entry.files.get(relPath).push(line)
  }
}

// --- Report ---

const targets = [...unresolved.keys()].sort((a, b) => a.localeCompare(b))
const totalInstances = [...unresolved.values()].reduce((sum, e) => sum + e.count, 0)
const totalFiles = new Set([...unresolved.values()].flatMap(e => [...e.files.keys()])).size

console.log(`Unresolved wikilink targets: ${targets.length}`)
console.log(`Total instances: ${totalInstances}`)
console.log(`Files affected: ${totalFiles}`)
console.log('')

for (const target of targets) {
  const entry = unresolved.get(target)
  console.log(`[[${target}]]  (x${entry.count})`)
  for (const [file, lines] of entry.files) {
    console.log(`  - ${file}:${lines.join(',')}`)
  }
}
