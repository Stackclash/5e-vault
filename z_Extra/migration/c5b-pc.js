// C5b group 4: D&D Beyond PC sheet keys to snake_case.
// PC notes: recursive key rename in frontmatter; one sync button for all; body reads renamed.
// Template: same body changes; the create step converts keys through the script's toFrontmatter.
// Usage: [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write, YAML } = require('./fm')

const dryRun = process.argv.includes('--dry-run')
const MAP = {
  abilityScores: 'ability_scores', savingThrows: 'saving_throws', racialTraits: 'racial_traits',
  classFeatures: 'class_features', raceSpells: 'race_spells', classSpells: 'class_spells',
  armorClass: 'armor_class', baseValue: 'base_value', canEquip: 'can_equip', canAttune: 'can_attune',
  damageType: 'damage_type', isPrepared: 'is_prepared', cantripsKnown: 'cantrips_known',
  spellSlots: 'spell_slots', subClass: 'subclass', 'animal-handling': 'animal_handling',
  'sleight-of-hand': 'sleight_of_hand',
}
const BODY = [
  ['dv.current().abilityScores', 'dv.current().ability_scores'],
  ['dv.current().savingThrows', 'dv.current().saving_throws'],
  ["skills['animal-handling']", 'skills.animal_handling'],
  ["skills['sleight-of-hand']", 'skills.sleight_of_hand'],
  ['classes.subClass', 'classes.subclass'],
  ['racialTraits', 'racial_traits'],
  ['classFeatures', 'class_features'],
  ['dv.current().classSpells', 'dv.current().class_spells'],
  ['dv.current().raceSpells', 'dv.current().race_spells'],
  ['classSpellConfig.spellSlots', 'classSpellConfig.spell_slots'],
  ['inv.damageType', 'inv.damage_type'],
  ['|| inv.armorClass', '|| inv.armor_class'],
]
const BUTTON_CODE = [
  "      const dndBeyondCharacter = await self.require.import('z_Scripts/Templater/dndBeyondCharacter.js')",
  '      const activeFile = app.workspace.getActiveFile()',
  '      const dndBeyondId = app.metadataCache.getFileCache(activeFile).frontmatter.url.match(/\\d+$/)[0]',
  '      const character = new dndBeyondCharacter(dndBeyondId)',
  '      await character.initialize()',
  '      const frontmatter = await character.generateFrontMatter()',
  '      await app.fileManager.processFrontMatter(activeFile, (fm) => {',
  '        for (const k of dndBeyondCharacter.LEGACY_KEYS) delete fm[k]',
  '        Object.assign(fm, frontmatter)',
  '      })',
  '      new Notice(`Updated ${character.name} from D&D Beyond`)',
].join('\n')
const RESIDUAL = new RegExp(Object.keys(MAP).map(k => k.replace(/-/g, '\\-')).join('|'))

function replaceButton(text, rel) {
  const start = text.indexOf('id: updateDnDBeyond')
  if (start < 0) throw new Error(rel + ': no sync button')
  const codeAt = text.indexOf('    code: |-\n', start)
  const end = text.indexOf('\n```', codeAt)
  if (codeAt < 0 || end < 0) throw new Error(rel + ': sync button code not found')
  const head = codeAt + '    code: |-\n'.length
  return text.slice(0, head) + BUTTON_CODE + text.slice(end)
}
function bodyEdits(text) {
  for (const [a, b] of BODY) text = text.split(a).join(b)
  return text
}
function residuals(text, rel) {
  // Item fields read from 5. Mechanics notes keep their names.
  return text.split('\n').map((l, i) => [i + 1, l])
    .filter(([, l]) => RESIDUAL.test(l) && !/dv\.page\(inv\.name\.path\)\.armorClass/.test(l))
    .map(([n, l]) => `${rel}:${n}: ${l.trim().slice(0, 120)}`)
}
function renameKeys(node) {
  let n = 0
  if (YAML.isMap(node)) for (const p of node.items) {
    const k = YAML.isScalar(p.key) ? p.key.value : p.key
    if (MAP[k]) { p.key = new YAML.Scalar(MAP[k]); n++ }
    n += renameKeys(p.value)
  } else if (YAML.isSeq(node)) for (const v of node.items) n += renameKeys(v)
  return n
}

const report = []
const dir = path.join(VAULT, '3. The Party/Players')
for (const name of fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== 'Players.md')) {
  const rel = '3. The Party/Players/' + name
  const note = read(path.join(dir, name))
  const keys = renameKeys(note.doc.contents)
  note.body = bodyEdits(replaceButton(note.body, rel))
  write(note, { dryRun })
  report.push(`${rel}: ${keys} keys renamed`)
  residuals(note.body, rel).forEach(r => report.push('  RESIDUAL ' + r))
}

const tRel = 'z_Templates/Templater/Party/Player Character.md'
const tFile = path.join(VAULT, tRel)
let t = fs.readFileSync(tFile, 'utf8')
const dumpOld = 'tR += yaml.dump(properties)'
if (t.split(dumpOld).length !== 2) throw new Error('template dump line')
t = t.replace(dumpOld, 'tR += yaml.dump(tp.user.dndBeyondCharacter.toFrontmatter(properties))')
const alignOld = 'alignment: "character.alignment",'
if (t.split(alignOld).length !== 2) throw new Error('template alignment line')
t = t.replace(alignOld, 'alignment: character.alignment,')
const bodyAt = t.indexOf('\n---\n', t.indexOf('yaml.dump(')) + 5
t = t.slice(0, bodyAt) + bodyEdits(replaceButton(t.slice(bodyAt), tRel))
if (!dryRun) fs.writeFileSync(tFile, t)
report.push(`${tRel}: create step converts keys; body updated`)
residuals(t.slice(bodyAt), tRel).forEach(r => report.push('  RESIDUAL ' + r))

console.log((dryRun ? '[dry run]\n' : '') + report.join('\n'))
