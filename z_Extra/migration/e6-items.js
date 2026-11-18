// E6 (DM, 2026-11-17): story-item notes for the 13 accepted lines. Rendered statically from the Item
// template (tp.file.include inlined). summary, revealed, reveal, facts left empty. rarity/attunement
// copied from base_item. Usage: node e6-items.js [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const readRel = p => fs.readFileSync(path.join(VAULT, p), 'utf8')

function include(src) {
  return src.replace(/^<% tp\.file\.include\("\[\[(z_Templates\/Partials\/[^\]]+)\]\]"\) %>$/gm, (_, p) => include(readRel(p + '.md')).trimEnd())
}
const src = readRel('z_Templates/Templater/World Building/Item.md')
const start = src.indexOf('<%* if (!templateError) { -%>\n') + '<%* if (!templateError) { -%>\n'.length
const scaffold = src.slice(start, src.lastIndexOf('<%* } else { -%>'))

const L = (p, n) => `[[${p}.md|${n}]]`
const MI = n => L(`5. Mechanics/Items/${n}`, n.replace(/ \([A-Z0-9]+\)$/, ''))
const PARTY = L('3. The Party/Parties/Midnight Covenant', 'Midnight Covenant')
const PC = n => L(`3. The Party/Players/${n}`, n)
const DM = '(DM, 2026-11-17)'

const items = [
  { name: 'Tome of Strahd', base: 'Tome Of Strahd (COS)', holder: PARTY,
    gist: "Strahd's own history, written in his hand; the party found it in Van Richten's Tower (S12) and has been reading it chapter by chapter.",
    notes: ['Found on the top floor of Van Richten\'s Tower in S12.', 'Chapters read in S13, S21, S22, S24.'] },
  { name: 'Sunsword', base: 'Sunsword (COS)', holder: PC('Redgrave'), rarity: 'legendary', attunement: true,
    gist: 'The radiant blade of the Fortunes of Ravenloft; Redgrave carries it.',
    notes: [`Found with one of the Wizard of Wines gems in Baba Lysaga's Creeping Hut ${DM}.`, 'Held by Redgrave per the S36 inventory.'] },
  { name: 'Holy Symbol of Ravenkind', base: 'Holy Symbol Of Ravenkind (COS)', holder: PC('Redgrave'), rarity: 'legendary', attunement: true,
    gist: 'The sun-bright amulet of the Fortunes of Ravenloft; Redgrave used it to hold Strahd for the stake (S33).',
    notes: [`Found in a treasure hoard in the Amber Temple ${DM}.`, 'S33: Redgrave raised it to freeze Strahd in place before staking him.'] },
  { file: 'The Hand of Vecna', base: 'Hand Of Vecna', holder: L('4. World Almanac/NPCs/Vecna', 'Vecna'), rarity: 'artifact', attunement: true,
    gist: "Vecna's severed hand, grafted to Izek Strazni as his fiend arm until Redgrave cut it off (S49); it has escaped back to Vecna.",
    notes: ['Was Izek Strazni\'s arm (DM decision, 2026-11-13).',
      'S49 (Greyfen Hollow): Redgrave cut it off as the recall pulled Izek away. It levitated, grabbed Izek, and teleported; Redgrave and Yevelda grabbed on and were dumped in Limbo with Izek.',
      `The Hand escaped back to Vecna ${DM}.`] },
  { name: "Kahkan's Wand of Secrets", base: 'Wand Of Secrets', holder: PARTY, rarity: 'uncommon',
    gist: 'A wand of secrets the party has carried since S13.',
    notes: ['S13: used once to find the freezer.'] },
  { name: 'Skull of Argynvost', location: L('4. World Almanac/Places of Interest/Argynvostholt', 'Argynvostholt'),
    gist: 'The dragon Argynvost\'s skull, which the party placed in Argynvostholt.',
    notes: [`Recorded in S33; placed in Argynvostholt ${DM}.`] },
  { name: 'Yester Hill Axe', base: 'Yester Hill Axe (COS)', holder: PC('Yevelda Ovak'),
    gist: 'The greataxe taken from the Gulthias Tree on Yester Hill (S29); Yevelda carries it.',
    notes: ['S29: recovered at the base of the Gulthias Tree with the second gem and the Gulthias Staff.', 'Held by Yevelda per the S36 inventory.'] },
  { name: 'Gulthias Staff', base: 'Gulthias Staff (COS)', holder: PARTY, rarity: 'rare', attunement: true,
    gist: 'The blighted staff taken from the Gulthias Tree on Yester Hill (S29).',
    notes: ['S29: recovered at the base of the Gulthias Tree.'] },
  { name: 'Wizard of Wines Gems', holder: L('4. World Almanac/Factions/Keepers of the Feather', 'Keepers of the Feather'),
    gist: "The Martikovs' stolen vineyard gems, now returned to the Keepers of the Feather.",
    notes: ['One was found with the Sunsword in Baba Lysaga\'s Creeping Hut; the second at the Gulthias Tree on Yester Hill (S29).', `Returned to the Martikovs ${DM}.`] },
  { name: 'Teleportation Gem', holder: PARTY,
    gist: "A gem keyed to Strahd's teleportation network; dead since Castle Ravenloft fell.",
    notes: ['S20: used to escape the Amber Temple to the Tsolenka Pass (with Victor\'s teleportation notes). S25: used to reach Krezk.',
      `The party still has it, but it no longer works: Strahd's teleportation network went down with the destruction of Castle Ravenloft ${DM}.`] },
  { name: 'Dusk Dagger', base: 'Dusk Dagger Rare (GRIFFONSSADDLEBAG2)', holder: PC('Roark Battleborn'), rarity: 'rare',
    gist: "A dusk dagger found with the Feeblemind papers under Velmont's house (S43); Roark has it, unidentified.",
    notes: ['S43: found with the papers and reagents to reverse the Feeblemind on Lord Caldris Velmont; not yet identified.', `Held by Roark ${DM}.`] },
  { name: "Marrow's Amber Gem", holder: PC('Redgrave'),
    gist: "The amber graft from the nape of Marrow's neck: a sliver of Eludrax's soul-craft, the same craft behind the Amber Wardens.",
    notes: [`Redgrave investigated the body and took the gem in S44 ${DM}.`,
      'DM-only: it is the Marrow-rite graft, tying Marrow to the Amber Wardens and Eludrax\'s soul-vessel craft (campaign note, Active Threads).'] },
  { name: 'Soul-Vessel Core', holder: PARTY,
    gist: 'An inert, half-formed soul-vessel core from a locked crate at the Cinderworks (S45); the party has not identified it.',
    notes: ['S45: found in the loft office of the Cinderworks.',
      'DM-only: the same Eludrax soul-craft behind the Amber Wardens and Marrow\'s graft (S45 Key Learnings).'] },
]

const created = []
for (const it of items) {
  const file = it.file ?? it.name
  const fm = {
    base_item: it.base ? MI(it.base) : '',
    holder: it.holder ?? '',
    location: it.location ?? '',
    rarity: it.rarity ?? '',
    gist: it.gist,
  }
  let text = scaffold
    .replace('base_item: ""', `base_item: ${JSON.stringify(fm.base_item)}`)
    .replace('holder: ""', `holder: ${JSON.stringify(fm.holder)}`)
    .replace('location: <% JSON.stringify(data.location ?? "") %>', `location: ${JSON.stringify(fm.location)}`)
    .replace('rarity: ""', `rarity: ${JSON.stringify(fm.rarity)}`)
    .replace('attunement: false', `attunement: ${!!it.attunement}`)
    .replace('gist: <% JSON.stringify(data.gist ?? "") %>', `gist: ${JSON.stringify(fm.gist)}`)
  text = include(text).trimEnd() + '\n'
  text = text.replace('> > ## DM Notes\n', '> > ## DM Notes\n' + it.notes.map(n => `> > - ${n}\n`).join(''))
  if (/<%/.test(text)) throw new Error(`Templater syntax left in ${file}`)
  if (!text.includes(`> > - ${it.notes[0]}`)) throw new Error(`DM Notes not placed in ${file}`)
  const rel = `4. World Almanac/Items/${file}.md`
  if (fs.existsSync(path.join(VAULT, rel))) { console.log(`exists, skipped: ${rel}`); continue }
  if (!dryRun) fs.writeFileSync(path.join(VAULT, rel), text)
  created.push(rel)
  console.log(`${dryRun ? 'would create' : 'created'}: ${rel}`)
}
