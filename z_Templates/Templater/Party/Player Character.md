<%*
const dv = app.plugins.getPlugin("dataview").api

const currentPage = dv.page((tp.config.active_file && tp.config.active_file.path) || '') || {}
let selectedParty
let dndBeyondInfo

if (!currentPage.party) {
  let parties = dv.pages('"3. The Party/Parties"')
  selectedParty = await tp.system.suggester(parties.map(p => p.file.name), parties.map(p => `[[${p.file.path}|${p.file.name}]]`), false, "What party is the character a part of?")
} else {
  selectedParty = currentPage.party.toString()
}

if (!currentPage.url) {
  dndBeyondInfo = await tp.system.prompt("Paste D&D Beyond character url or id here or press Enter to skip.")
} else {
  dndBeyondInfo = currentPage.url
}

let dndBeyondId
if (isNaN(dndBeyondInfo)) {
  dndBeyondId = dndBeyondInfo.match(/\d+$/)[0]
} else {
  dndBeyondId = dndBeyondInfo
}
const character = new tp.user.dndBeyondCharacter(dndBeyondId)
await character.initialize()

const filePath = '3. The Party/Players/' + character.name

if (await tp.file.exists(`${filePath}.md`)) {
  await app.vault.delete(tp.file.find_tfile(currentPage.file.name))
}
await tp.file.move('3. The Party/Players/' + character.name)
-%>
---
obsidianUIMode: preview
statblock: true
name: <% character.name %>
level: <% character.level %>
ac: <% character.armorClass %>
hp: <% character.healthPoints.current %>
modifier: <% character.initiative %>
proficiency: <% character.proficiencyBonus %>
url: <% character.url %>
image: <% character.image %>
race: "<% tp.user.find_file(character.race.fullName, '5. Mechanics/Races') %>"
alignment: "<% character.alignment %>"
description: <% tp.user.build_yaml(character.description, 2) %>
passives: <% tp.user.build_yaml(character.passives, 2) %>
proficiencies: <% tp.user.build_yaml(character.proficiencies, 2) %>
speed: <% character.speeds.walk %>
defences: <% tp.user.build_yaml(character.defences, 2) %>
background: <% tp.user.build_yaml(character.background, 2) %>
classes: <% tp.user.build_yaml(character.classes, 2, {name: '5. Mechanics/Classes', subClass: '5. Mechanics/Classes'}) %>
abilityScores: <% tp.user.build_yaml(character.abilityScores, 2) %>
savingThrows: <% tp.user.build_yaml(character.savingThrows, 2) %>
skills: <% tp.user.build_yaml(character.skills, 2) %>
racialTraits: <% tp.user.build_yaml(character.racialTraits, 2) %>
classFeatures: <% tp.user.build_yaml(character.classFeatures, 2) %>
feats: <% tp.user.build_yaml(character.feats, 2) %>
raceSpells: <% tp.user.build_yaml(character.spells.race, 2) %>
classSpells: <% tp.user.build_yaml(character.spells.class, 2, {name: '5. Mechanics/Spells'}) %>
currencies: <% tp.user.build_yaml(character.currencies, 2) %>
inventory: <% tp.user.build_yaml(character.inventory, 2, {name: '5. Mechanics/Items'}) %>
party: "<% selectedParty%>"
condition:
location:
---
`$="![Char Image\|clear left circle hsmall wsmall lp](" + dv.current().image + ")"`
## `$=[dv.current().alignment, dv.current().race, dv.current().classes[0].name].join(' ')`

> [!infobox|n-th center wm-sm]
> ### Status
> |||||||
> |:---:|:---:|:---:|:---:|:---:|:---:|
> | **Party** | `$=dv.current().party` | **Condition** | `$=dv.current().condition` | **Location** | `$=dv.current().location` |

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
>  **Insight** | `$=dv.current().passives.insight` |

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
