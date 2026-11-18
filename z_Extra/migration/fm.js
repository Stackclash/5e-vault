// Shared frontmatter helper for the vault migration (03 Migration Plan, working rule 4).
// Parse and edit with the yaml v2 Document API. On write, every top-level key whose
// value is unchanged is emitted as its original source text (toString would re-wrap
// folded scalars and drop trailing spaces); only changed or new keys are re-serialized.
// The body is always byte-identical.
const fs = require('fs')
const path = require('path')
const YAML = require('yaml')

const VAULT = path.resolve(__dirname, '..', '..')
const OPEN = '---\n'
const CLOSE = /\n---[ \t]*(\n|$)/

function split(raw) {
  if (!raw.startsWith(OPEN)) return null
  const m = CLOSE.exec(raw.slice(OPEN.length - 1))
  if (!m) return null
  const fmEnd = OPEN.length - 1 + m.index + 1
  const closeLen = m[0].length - 1
  return {
    fm: raw.slice(OPEN.length, fmEnd),
    close: raw.slice(fmEnd, fmEnd + closeLen),
    body: raw.slice(fmEnd + closeLen),
  }
}

const keyOf = p => String(YAML.isScalar(p.key) ? p.key.value : p.key)
const valOf = p => JSON.stringify(YAML.isNode(p.value) ? p.value.toJSON() : p.value)
const lineStart = (s, i) => s.lastIndexOf('\n', i - 1) + 1

function read(file) {
  const raw = fs.readFileSync(file, 'utf8')
  const parts = split(raw)
  if (!parts) return { file, raw, doc: null }
  const doc = YAML.parseDocument(parts.fm)
  const note = { file, raw, doc, ...parts, prefix: '', slices: new Map() }
  if (doc.errors.length || !YAML.isMap(doc.contents)) return note
  const items = doc.contents.items
  const starts = items.map(p => lineStart(parts.fm, p.key.range[0]))
  note.prefix = parts.fm.slice(0, starts[0] ?? parts.fm.length)
  items.forEach((p, i) => {
    note.slices.set(keyOf(p), { text: parts.fm.slice(starts[i], starts[i + 1] ?? parts.fm.length), val: valOf(p) })
  })
  return note
}

function pairText(pair) {
  const d = new YAML.Document()
  d.contents = new YAML.YAMLMap()
  d.contents.items.push(pair)
  return d.toString({ lineWidth: 0 })
}

function serializeFm(note) {
  const { doc } = note
  if (!YAML.isMap(doc.contents)) return doc.toString({ lineWidth: 0 })
  let out = note.prefix
  for (const p of doc.contents.items) {
    const s = note.slices.get(keyOf(p))
    out += s && s.val === valOf(p) ? s.text : pairText(p)
  }
  return out
}

function serialize(note) {
  if (!note.doc) return note.raw
  if (note.doc.errors.length) throw new Error('note has YAML errors: ' + note.file)
  return OPEN + serializeFm(note) + note.close + note.body
}

function write(note, { dryRun = false } = {}) {
  const out = serialize(note)
  if (out === note.raw) return false
  if (!dryRun) fs.writeFileSync(note.file, out)
  return true
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, out)
    else if (e.name.endsWith('.md')) out.push(p)
  }
  return out
}

function moveKeyFirst(doc, key) {
  const items = doc.contents.items
  const i = items.findIndex(p => keyOf(p) === key)
  if (i > 0) items.unshift(...items.splice(i, 1))
  return i
}

module.exports = { VAULT, split, read, serialize, write, walk, moveKeyFirst, keyOf, YAML }
