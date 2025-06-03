<%*
const path = require('path')
const { dump } = require('js-yaml')
const dv = app.plugins.getPlugin("dataview").api
const modalForm = app.plugins.getPlugin('modalforms').api
const locationConfig = dv.page('Configuration').locations

let parties = dv.pages('#party')
const result = await modalForm.openForm({
  title: "Character Setup",
  name: "character-setup",
  fields: [
    {
      name: 'party',
      label: 'Party',
      description: 'What party is this character a part of?',
      input: {
        type: 'select',
        allowUnknownValues: false,
        hidden: false,
        options: parties.map(p => ({
          value: `[[${p.file.path}|${p.file.name}]]`,
          label: p.file.name
        })),
        source: 'fixed'
      },
      isRequired: false
    },
    {
      name: 'dndbeyond',
      label: 'DnD Beyond',
      description: 'Paste D&D Beyond character url or id here',
      input: {
        type: 'text',
        hiddent: false
      }
    }
  ]
})
const { party: selectedParty, dndbeyond: dndBeyondInfo } = result.getData()

let dndBeyondId
if (isNaN(dndBeyondInfo)) {
  dndBeyondId = dndBeyondInfo.match(/\d+$/)[0]
} else {
  dndBeyondId = dndBeyondInfo
}
const character = new tp.user.dndBeyondCharacter(dndBeyondId)
await character.initialize()

await tp.file.move(path.join(locationConfig.players, character.name))

const properties = {
  obsidianUIMode: 'preview',
  statblock: true,
  name: character.name,
  level: character.level,
  ac: character.armorClass,
  hp: character.healthPoints.current,
  modifier: character.initiative,
  proficiency: character.proficiencyBonus,
  url: character.url,
  image: character.image,
  race: tp.user.find_file(character.race.fullName, '5. Mechanics/Races'),
  alignment: "character.alignment",
  description: character.description,
  passives: character.passives,
  proficiencies: character.proficiencies,
  speed: character.speeds.walk,
  defences: character.defences,
  background: character.background,
  classes: character.classes.map(function(class) {
    return {
      ...class,
      name: tp.user.find_file(class.name, '5. Mechanics/Classes'),
      subClass: tp.user.find_file(class.subClass, '5. Mechanics/Classes')
    }
  }),
  abilityScores: character.abilityScores,
  savingThrows: character.savingThrows,
  skills: character.skills,
  racialTraits: character.racialTraits,
  classFeatures: character.classFeatures,
  feats: character.feats,
  raceSpells: character.spells.race,
  classSpells: character.spells.class.map(function(classSpell) {
    return {
      ...classSpell,
      name: tp.user.find_file(classSpell.name, '5. Mechanics/Spells')
    }
  }),
  currencies: character.currencies,
  inventory: character.inventory.map(function(inv) {
    return {
      ...inv,
      name: tp.user.find_file(inv.name, '5. Mechanics/Items')
    }
  }),
  party: selectedParty,
  condition: condition,
  location: location,
  tags: ['player'],
}
-%>
---
<% dump(properties) %>
---
`$="[![Char Image\|clear left circle hsmall wsmall lp](" + dv.current().image + ")](" + dv.current().url + ")"`
## `$=[dv.current().alignment, dv.current().race, dv.current().classes[0].name].join(' ')` `BUTTON[updateDnDBeyond]`
```meta-bind-button
style: primary
label: Update From DnD Beyond
id: updateDnDBeyond
hidden: true
actions:
  - type: inlineJS
    code: |-
      const dndBeyondCharacter = await self.require.import('z_Scripts/Templater/dndBeyondCharacter.js')
      const activeFile = app.workspace.getActiveFile()
      const dndBeyondId = app.metadataCache.getFileCache(activeFile).frontmatter.url.match(/\d+$/)[0]
      const character = new dndBeyondCharacter(dndBeyondId)
      await character.initialize()
      const find_file = await self.require.import('z_Scripts/Templater/find_file.js')
      const build_yaml = await self.require.import('z_Scripts/Templater/build_yaml.js')

      app.fileManager.processFrontMatter(activeFile, async (fm) => {
        fm.name = character.name
        fm.level = character.level
        fm.ac = character.armorClass
        fm.hp = character.healthPoints.current
        fm.modifier = character.initiative
        fm.proficiency = character.proficiencyBonus
        fm.url = character.url
        fm.image = character.image
        fm.race = `"${await find_file(character.race.fullName, '5. Mechanics/Races')}"`
        fm.alignment = `"${character.alignment}"`
        fm.description = character.description
        fm.passives = character.passives
        fm.proficiencies = character.proficiencies
        fm.speed = character.speeds.walk
        fm.defences = character.defences
        fm.background = character.background
        // FIXME: Classes is not updating
        fm.classes = character.classes.map(async (characterClass) => {
          return {
            name: await find_file(characterClass.name, '5. Mechanics/Classes'),
            subClass: await find_file(characterClass.subClass, '5. Mechanics/Classes'),
            level: characterClass.level
          }
        })
        fm.abilityScores = character.abilityScores
        fm.savingThrows = character.savingThrows
        fm.skills = character.skills
        fm.racialTraits = character.racialTraits
        fm.classFeatures = character.classFeatures
        fm.feats = character.feats
        fm.raceSpells = character.spells.race
        fm.classSpells = character.spells.class.map(async (classSpell) => {
          return {
            name: await find_file(classSpell, '5. Mechanics/Spells'),
            level: classSpell.level,
            isPrepared: classSpell.isPrepared
          }
        })
        fm.currencies = character.currencies
        fm.inventory = character.inventory.map(async (inv) => {
          return {
            name: await find_file(inv.name, '5. Mechanics/Items'),
            type: inv.type,
            rarity: inv.rarity,
            quantity: inv.quantity,
            canEquip: inv.canEquip,
            equipped: inv.equipped,
            canAttune: inv.canAttune,
            attuned: inv.attuned,
            damage: inv.damage,
            damageType: inv.damageType,
            armorClass: inv.armorClass
          }
        })
      })
```

> [!infobox|n-th center wm-tl]
> ### Status
> |||||||
> |:---:|:---:|:---:|:---:|:---:|:---:|
> | **Party** | `INPUT[suggester(optionQuery(#party)):party]` | **Condition** | `INPUT[inlineSelect(option(healthy),option(injured),option(dead)):condition]` | **Location** | `INPUT[suggester(optionQuery(#location)):location]` |

> [!infobox|left clear n-th]
> 
> |||
> |:---:|:---:|
> | **Health Points** | `$=dv.current().hp` |
> | **Armor Class** | `$=dv.current().ac` |
> | **Initiative** | `$=dv.current().modifier` |
> | **Speed** | `$=dv.current().speed` |

> [!statblocks|columns]
> 
>> [!blank]
>> ## Ability Scores
>> ||| Mod ||| Mod |
>> |:---:|:---:|:---:|:---:|:---:|:---:|
>> | **Strength** | `$=dv.current().abilityScores.strength.value` | `$=dv.current().abilityScores.strength.modifier` | **Intelligence** | `$=dv.current().abilityScores.intelligence.value` | `$=dv.current().abilityScores.intelligence.modifier` |
>> | **Dexterity** | `$=dv.current().abilityScores.dexterity.value` | `$=dv.current().abilityScores.dexterity.modifier` | **Wisdom** | `$=dv.current().abilityScores.wisdom.value` | `$=dv.current().abilityScores.wisdom.modifier` |
>> | **Constitution** | `$=dv.current().abilityScores.constitution.value` | `$=dv.current().abilityScores.constitution.modifier` | **Charisma** | `$=dv.current().abilityScores.charisma.value` | `$=dv.current().abilityScores.charisma.modifier` |
>
>> [!blank]
>> ## Saving Throws
>> || Prof ||| Prof ||
>> |:---:|:---:|:---:|:---:|:---:|:---:|
>> | **Strength** | `$=dv.current().savingThrows.strength.proficiency ? '✅' : '❌'` | `$=dv.current().savingThrows.strength.value` | **Intelligence** | `$=dv.current().savingThrows.intelligence.proficiency ? '✅' : '❌'` | `$=dv.current().savingThrows.intelligence.value` |
>> | **Dexterity** | `$=dv.current().savingThrows.dexterity.proficiency ? '✅' : '❌'` | `$=dv.current().savingThrows.dexterity.value` | **Wisdom** | `$=dv.current().savingThrows.wisdom.proficiency ? '✅' : '❌'` | `$=dv.current().savingThrows.wisdom.value` |
>> | **Constitution** | `$=dv.current().savingThrows.constitution.proficiency ? '✅' : '❌'` | `$=dv.current().savingThrows.constitution.value` | **Charisma** | `$=dv.current().savingThrows.charisma.proficiency ? '✅' : '❌'` | `$=dv.current().savingThrows.charisma.value` |
>> **Notes**: `$=dv.current().savingThrows.notes`

> [!infobox|wfull]
> ## Skills
> || **Prof** | **Exp** ||| **Prof** | **Exp** ||
> |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | **Acrobatics (Dex)** | `$=dv.current().skills.acrobatics.proficiency ? '✅' : '❌'` | `$=dv.current().skills.acrobatics.expertise ? '✅' : '❌'` | `$=dv.current().skills.acrobatics.value` | **Medicine (Wis)** | `$=dv.current().skills.medicine.proficiency ? '✅' : '❌'` | `$=dv.current().skills.medicine.expertise ? '✅' : '❌'` | `$=dv.current().skills.medicine.value` |
> | **Animal Handling (Wis)** | `$=dv.current().skills['animal-handling'].proficiency ? '✅' : '❌'` | `$=dv.current().skills['animal-handling'].expertise ? '✅' : '❌'` | `$=dv.current().skills['animal-handling'].value` | **Nature (Int)** | `$=dv.current().skills.nature.proficiency ? '✅' : '❌'` | `$=dv.current().skills.nature.expertise ? '✅' : '❌'` | `$=dv.current().skills.nature.value` |
> | **Arcana (Int)** | `$=dv.current().skills.arcana.proficiency ? '✅' : '❌'` | `$=dv.current().skills.arcana.expertise ? '✅' : '❌'` | `$=dv.current().skills.arcana.value` | **Perception (Wis)** | `$=dv.current().skills.perception.proficiency ? '✅' : '❌'` | `$=dv.current().skills.perception.expertise ? '✅' : '❌'` | `$=dv.current().skills.perception.value` |
> | **Athletics (Str)** | `$=dv.current().skills.athletics.proficiency ? '✅' : '❌'` | `$=dv.current().skills.athletics.expertise ? '✅' : '❌'` | `$=dv.current().skills.athletics.value` | **Performance (Cha)** | `$=dv.current().skills.performance.proficiency ? '✅' : '❌'` | `$=dv.current().skills.performance.expertise ? '✅' : '❌'` | `$=dv.current().skills.performance.value` |
> | **Deception (Cha)** | `$=dv.current().skills.deception.proficiency ? '✅' : '❌'` | `$=dv.current().skills.deception.expertise ? '✅' : '❌'` | `$=dv.current().skills.deception.value` | **Persuasion (Cha)** | `$=dv.current().skills.persuasion.proficiency ? '✅' : '❌'` | `$=dv.current().skills.persuasion.expertise ? '✅' : '❌'` | `$=dv.current().skills.persuasion.value` |
> | **History (Int)** | `$=dv.current().skills.history.proficiency ? '✅' : '❌'` | `$=dv.current().skills.history.expertise ? '✅' : '❌'` | `$=dv.current().skills.history.value` | **Religion (Int)** | `$=dv.current().skills.religion.proficiency ? '✅' : '❌'` | `$=dv.current().skills.religion.expertise ? '✅' : '❌'` | `$=dv.current().skills.religion.value` |
> | **Insight (Wis)** | `$=dv.current().skills.insight.proficiency ? '✅' : '❌'` | `$=dv.current().skills.insight.expertise ? '✅' : '❌'` | `$=dv.current().skills.insight.value` | **Sleight of Hand (Dex)** | `$=dv.current().skills['sleight-of-hand'].proficiency ? '✅' : '❌'` | `$=dv.current().skills['sleight-of-hand'].expertise ? '✅' : '❌'` | `$=dv.current().skills['sleight-of-hand'].value` |
> | **Intimidation (Cha)** | `$=dv.current().skills.intimidation.proficiency ? '✅' : '❌'` | `$=dv.current().skills.intimidation.expertise ? '✅' : '❌'` | `$=dv.current().skills.intimidation.value` | **Stealth (Dex)** | `$=dv.current().skills.stealth.proficiency ? '✅' : '❌'` | `$=dv.current().skills.stealth.expertise ? '✅' : '❌'` | `$=dv.current().skills.stealth.value` |
> | **Investigation (Int)** | `$=dv.current().skills.investigation.proficiency ? '✅' : '❌'` | `$=dv.current().skills.investigation.expertise ? '✅' : '❌'` | `$=dv.current().skills.investigation.value` | **Survival (Wis)** | `$=dv.current().skills.survival.proficiency ? '✅' : '❌'` | `$=dv.current().skills.survival.expertise ? '✅' : '❌'` | `$=dv.current().skills.survival.value` |

> [!infobox|left n-th]
> ## Passive Skills
> |||
> |:---:|:---:|
> | **Perception** | `$=dv.current().passives.perception` |
> | **Investigation** | `$=dv.current().passives.investigation` |
> | **Insight** | `$=dv.current().passives.insight` |

> [!infobox|center n-th wm-tl]
> ## Description
> |||
> |:---:|:---:|:---:|:---:|:---:|:---:|
> | **Race** | `$=dv.current().race` | **Height** | `$=dv.current().description.height` | **Skin** | `$=dv.current().description.skin` |
> | **Gender** | `$=dv.current().description.gender` | **Weight** | `$=dv.current().description.weight` | **Hair** | `$=dv.current().description.hair` |
> | **Age** | `$=dv.current().description.age` | **Size** | `$=dv.current().description.size` | **Eyes** | `$=dv.current().description.eyes` |

> [!infobox|center wm-tl]
> ## Defences
> | **Imunities** | **Resistances** |
> |:---:|:---:|
> | `$=dv.current().defences.immunities.length > 0 ? dv.current().defences.immunities : ""` | `$=dv.current().defences.resistances.length > 0 ? dv.current().defences.resistances : ""` |

> [!cards|dataview wfull]
> ## Classes
> ```dataview
> TABLE WITHOUT ID "Class: " + classes.name AS Name, "SubClass: " + classes.subClass, "Level: " + classes.level AS Level
> FLATTEN classes
> WHERE this.file.name = file.name
> ```

> [!cards|dataview wfull]
> ## Racial Traits
> ```dataview
> TABLE WITHOUT ID "**"+racialTraits.name+"**" AS Name, racialTraits.description AS Description
> FLATTEN racialTraits
> WHERE this.file.name = file.name
> ```

> [!cards|dataview wfull]
> ## Class Features
> ```dataview
> TABLE WITHOUT ID "**"+classFeatures.name+"**",
> classFeatures.description
> FLATTEN classFeatures
> WHERE this.file.name = file.name
> ```

> [!cards|dataview wfull]
> ## Feats
> ```dataview
> TABLE WITHOUT ID "**"+feats.name+"**",
> feats.description
> FLATTEN feats
> WHERE this.file.name = file.name
> ```

## Spells
```dataviewjs
const result = []
const spellLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
dv.current().classSpells.map((classSpellConfig, classIndex) => {
  const classSpellLevels = spellLevels.filter(level => classSpellConfig.spellSlots.max[level-1] > 0 || level === 0)
  dv.header(3, classSpellConfig.name)
  classSpellLevels.forEach(level => {
    let levelText = ''
    levelText += `>> ### ${level === 0 ? `Cantrips` : `Level ${level}`}\n`
    if (level > 0) {
      const totalSlots = classSpellConfig.spellSlots.max[level-1]
      const usedSlots = classSpellConfig.spellSlots.used[level-1]
      levelText += `>> ${`<input type="checkbox" disabled=true checked=true/>`.repeat(usedSlots)}${`<input type="checkbox" disabled=true/>`.repeat(totalSlots-usedSlots)}\n>>\n`
    }
    levelText += `>> ${classSpellConfig.spells.filter(spell => spell.level === (level)).map(spell => spell.name).join(`\n>>\n>> `)}`
    result.push(levelText)
  })
})
dv.paragraph(`> [!cards|wfull]\n${result.join(`\n>\n`)}`)
```

## Weapons
```dataviewjs
const weapons = dv.current().inventory.filter(inv => inv.type === 'Weapon')

dv.table([
  'Name',
  'Equipped',
  'Attuned',
  'One Handed Damage',
  'Two Handed Damage',
  'Range',
  'Damage Type'
  ], weapons.map(inv => {
  return [
    inv.name,
    inv.equipped ? '✅' : '❌',
    inv.attuned ? '✅' : '❌',
    dv.page(inv.name.path)['one-hand-damage'],
    dv.page(inv.name.path)['two-hand-damage'],
    dv.page(inv.name.path).range,
    inv.damageType
  ]
}))
```

## Armor
```dataviewjs
const armor = dv.current().inventory.filter(inv => inv.type === 'Armor')

dv.table(['Name', 'Equipped', 'Attuned', 'Armor Class'], armor.map(inv => {
  return [
    inv.name,
    inv.equipped ? '✅' : '❌',
    inv.attuned ? '✅' : '❌',
    dv.page(inv.name.path).armorClass || inv.armorClass]
}))
```

<!-- Group by rarity? -->
> [!cards|dataview 4 wfull]
> ## Inventory
> ```dataview
> TABLE WITHOUT ID "**"+inventory.name+"**",
> "Quantity: "+inventory.quantity
> FLATTEN inventory
> WHERE this.file.name = file.name
> AND inventory.type != "Armor"
> AND inventory.type != "Weapon"
> ```

# Background
## Background (`$=dv.current().background.background.name`)
`$=dv.current().background.background.description`
## Backstory
`$=dv.current().background.backstory`
## Organization
`$=dv.current().background.organizations`
## Allies
`$=dv.current().background.allies`
## Enemies
`$=dv.current().background.enemies`

# Notes
## Additional Notes From Players
`$=dv.current().background.notes`

## Hidden Details

## Notes
