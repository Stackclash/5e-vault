// C6: rebuild the `{#if resource.isNpc}` branch of z_Extra/ttrpg-convert/templates/monster.txt as a mirror of
// z_Templates/Templater/World Building/NPC.md. Qute can't include partials, so the NPC tab box and the
// Player-Facing panel are inlined, and literal braces are escaped. Usage: [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT } = require('./fm')
const dryRun = process.argv.includes('--dry-run')

const read = p => fs.readFileSync(path.join(VAULT, p), 'utf8')
const npc = read('z_Templates/Templater/World Building/NPC.md')
const tabs = read('z_Templates/Partials/Tabs - NPC.md')
const player = read('z_Templates/Partials/Player-Facing.md')
const MONSTER = 'z_Extra/ttrpg-convert/templates/monster.txt'
const monster = read(MONSTER)

// NPC.md body: between the closing frontmatter fence and the error branch.
const fmEnd = npc.indexOf('\n---\n', npc.indexOf('\n---\n') + 1) + 5
let body = npc.slice(fmEnd, npc.indexOf('<%* } else { -%>'))
const INCLUDE = '<% tp.file.include("[[z_Templates/Partials/Tabs - NPC]]") %>'
const PLAYER_INCLUDE = '<% tp.file.include("[[z_Templates/Partials/Player-Facing]]") %>'
if (!body.includes(INCLUDE) || !tabs.includes(PLAYER_INCLUDE)) throw new Error('include lines not found')
body = body.replace(INCLUDE, tabs.replace(PLAYER_INCLUDE, player).trimEnd())
if (/<%/.test(body)) throw new Error('Templater syntax left in the NPC body')

const esc = s => s.replace(/[{}]/g, c => '\\' + c)
body = esc(body)
// Qute expressions go in after escaping.
// The stat block sits in the Stats tab, so every YAML line needs the callout prefix (Java replaceAll, as the converter's own templates use).
if (!body.includes('> > ```statblock\n> >\n> > ```')) throw new Error('stats block not found')
body = body.replace('> > ```statblock\n> >\n> > ```', "> > ```statblock\n{resource.5eStatblockYaml.replaceAll('(?m)^', '> > ')}\n> > ```")
// Module text is multi-line and Qute can't prefix it into the DM tab callout, so it gets its own section.
body = body.replace('```meta-bind-button\nlabel: Edit all', '## Source\n*Source: {resource.source}*\n\n{#if resource.description }\n{resource.description}\n{/if}\n\n```meta-bind-button\nlabel: Edit all')
if (!body.includes('## Source')) throw new Error('source anchor not found')

const frontmatter = `{#if resource.isNpc}
---
obsidianUIMode: preview
statblock: inline
location: ""
condition: healthy
{#if resource.fluffImages && resource.fluffImages.size > 0 }
images:
{#for image in resource.fluffImages}
  - {image.vaultPath}
{/for}
{#else}
images: []
{/if}
relationships: []
tags:
  - npc
{#for tag in resource.tags}
  - {tag}
{/for}
aliases:
  - {resource.name}
pronounced: ""
gist: ""
summary: ""
revealed: \\{\\}
reveal: \\{\\}
facts: []
race: ""
gender: ""
age: ""
alignment: {resource.alignment}
occupation: []
appearance: ""
voice: ""
description: ""
history: ""
personality: ""
ideal: ""
bond: ""
flaw: ""
goals: ""
likes: ""
dislikes: ""
party_relationships: \\{\\}
---
`
const elseAt = monster.indexOf('\n{#else}\n---\nobsidianUIMode: preview\ncssclasses: json5e-monster')
if (!monster.startsWith('{#if resource.isNpc}') || elseAt < 0) throw new Error('monster.txt structure not recognised')
const out = frontmatter + body.trimEnd() + '\n' + monster.slice(elseAt + 1)
if (dryRun) console.log(`would rewrite the isNpc branch: ${elseAt} -> ${frontmatter.length + body.trimEnd().length + 1} chars`)
else { fs.writeFileSync(path.join(VAULT, MONSTER), out); console.log('rewrote the isNpc branch of monster.txt') }
