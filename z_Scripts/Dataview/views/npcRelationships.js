// Relationship graph for the current note (03 Migration Plan E4 spec, pulled forward 2026-11-16).
// Outbound edges: this note's `relationships`. Inbound: npc/faction/player/story-deity notes whose
// `relationships` target this note. Each edge is drawn outward from the side nearer the current note;
// an edge drawn against its stored direction is labelled with the inverse from Configuration.
// Family edges recurse to depth 3; other categories stop at depth 1. Legacy "Name|type" strings are read
// until E4 converts them. Never throws on an unknown type or an unresolvable target.
const config = dv.page('Configuration')
const TYPES = new Map((config?.relationship_types ?? []).map(t => [t.type, t]))
const MAX_FAMILY_DEPTH = 3
const backticks = "```"

const pageFor = ref => {
  if (!ref) return null
  if (typeof ref === 'object' && ref.path) return dv.page(ref.path)
  const s = String(ref).replace(/^\[\[|\]\]$/g, '').split('|')[0]
  return dv.page(s) ?? null
}

// Edges stored on a page, normalised to {source, target, type, note}.
function storedEdges(page) {
  return (page.relationships ?? []).flatMap(r => {
    if (typeof r === 'string') {  // legacy "Name|type,condition"
      const [name, rest = ''] = r.split('|')
      const [type, note] = rest.split(',')
      const target = pageFor(name)
      return target && type ? [{ source: page, target, type: type.trim(), note: note?.trim() }] : []
    }
    const target = pageFor(r?.target)
    return target && r?.type ? [{ source: page, target, type: String(r.type), note: r.note }] : []
  })
}

let cachedInboundPages = null
function inboundEdges(page) {
  cachedInboundPages ??= dv.pages('#npc or #faction or #player or #story-deity').array()
  return cachedInboundPages
    .filter(p => p.file.path !== page.file.path)
    .flatMap(storedEdges)
    .filter(e => e.target.file.path === page.file.path)
}

const categoryOf = type => TYPES.get(type)?.category ?? 'other'
function inverseLabel(edge) {
  const inv = TYPES.get(edge.type)?.inverse
  if (!inv) return null
  if (typeof inv === 'string') return inv
  const gender = String(edge.source.gender ?? '').toLowerCase()
  return inv[gender] ?? null
}

// Breadth-first walk from the current page.
const current = input.current
const nodes = new Map()   // path -> {id, page, category}
const nodeFor = (page, category) => {
  if (!nodes.has(page.file.path)) nodes.set(page.file.path, { id: 'n' + nodes.size, page, category })
  return nodes.get(page.file.path)
}
nodeFor(current, 'self')

const lines = []
const seen = new Set()
const queue = [{ page: current, depth: 0 }]
const visited = new Set()
while (queue.length) {
  const { page, depth } = queue.shift()
  if (visited.has(page.file.path)) continue
  visited.add(page.file.path)
  const edges = [...storedEdges(page).map(e => ({ e, out: true })), ...inboundEdges(page).map(e => ({ e, out: false }))]
  for (const { e, out } of edges) {
    const category = categoryOf(e.type)
    if (depth > 0 && category !== 'family') continue
    const other = out ? e.target : e.source
    // One line per pair per category: legacy data often stores both sides (son on one note, father on the other).
    const key = [e.source.file.path, e.target.file.path].sort().join('|') + '|' + category
    if (seen.has(key)) continue
    seen.add(key)
    const from = nodeFor(page, 'self').id
    const to = nodeFor(other, category).id
    const note = e.note ? ` (${String(e.note).replace(/"/g, "'")})` : ''
    if (out) lines.push(`${from} -->|"${e.type}${note}"| ${to}`)
    else {
      const inv = inverseLabel(e)
      lines.push(inv ? `${from} -->|"${inv}${note}"| ${to}` : `${to} -->|"${e.type}${note}"| ${from}`)
    }
    if (category === 'family' && depth + 1 < MAX_FAMILY_DEPTH) queue.push({ page: other, depth: depth + 1 })
  }
}

if (lines.length === 0) {
  dv.paragraph('*No relationships recorded.*')
} else {
  const nodeLines = [...nodes.values()].map(n =>
    `${n.id}["${n.page.file.name.replace(/"/g, "'")}"]${n.category !== 'self' ? `:::${n.category}` : ''}`)
  dv.paragraph(`${backticks}mermaid
graph LR
${nodeLines.join('\n')}
${lines.join('\n')}
classDef family stroke:#2ea043
classDef personal stroke:#8250df
classDef work stroke:#bf8700
classDef faction stroke:#0969da
classDef faith stroke:#cf222e
classDef place stroke:#57606a
class ${[...nodes.values()].map(n => n.id).join(',')} internal-link;
${backticks}`)
}
