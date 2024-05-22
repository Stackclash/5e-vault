<%*
const dv = app.plugins.getPlugin("dataview").api

let parties = dv.pages('"3. The Party/Parties"')
let selectedParty = await tp.system.suggester(parties.map(p => p.file.name), parties.map(p => [p.file.path, p.file.name]), false, "What party is the character a part of?")

let dndBeyondInfo = await tp.system.prompt("Paste D&D Beyond character url or id here or press Enter to skip.")

let dndBeyondId
if (isNaN(dndBeyondInfo)) {
  dndBeyondId = dndBeyondInfo.match(/\d+$/)[0]
} else {
  dndBeyondId = dndBeyondInfo
}
const character = new tp.user.dndBeyondCharacter(dndBeyondId)
await character.initialize()
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
description:
  gender: <% character.description.gender %>
  age: <% character.description.age %>
  hair: <% character.description.hair %>
  eyes: <% character.description.eyes %>
  skin: <% character.description.skin %>
  height: <% character.description.height %>
  weight: <% character.description.weight %>
  size: <% character.description.size %>
passives:
  perception: <% character.passives.perception %>
  investigation: <% character.passives.investigation %>
  insight: <% character.passives.insight %>
proficiencies:
  armor:
<% tp.user.build_yaml_list(character.proficiencies.armor, 4) %>
  weapons:
<% tp.user.build_yaml_list(character.proficiencies.weapons, 4) %>
  tools:
<% tp.user.build_yaml_list(character.proficiencies.tools, 4) %>
  languages:
<% tp.user.build_yaml_list(character.proficiencies.languages, 4) %>
speed: <% character.speeds.walk %>
defenses:
  immunities:
<% tp.user.build_yaml_list(character.defenses.immunities, 4) %>
  resistances:
<% tp.user.build_yaml_list(character.defenses.resistances, 4) %>
background:
  background:
    name:  
    description: 
  backstory: 
  organizations: 
  allies: 
  enemies: 
  notes: 
class: "<% tp.user.find_file(`${character.classes[0].name} ${character.classes[0].subClass}`, '5. Mechanics/Classes') %>"
abilityScores:
  strength:
    value: <% character.abilityScores.strength.value %>
    modifier: <% character.abilityScores.strength.modifier %>
  dexterity:
    value: <% character.abilityScores.dexterity.value %>
    modifier: <% character.abilityScores.dexterity.modifier %>
  constitution:
    value: <% character.abilityScores.constitution.value %>
    modifier: <% character.abilityScores.constitution.modifier %>
  intelligence:
    value: <% character.abilityScores.intelligence.value %>
    modifier: <% character.abilityScores.intelligence.modifier %>
  wisdom:
    value: <% character.abilityScores.wisdom.value %>
    modifier: <% character.abilityScores.wisdom.modifier %>
  charisma:
    value: <% character.abilityScores.charisma.value %>
    modifier: <% character.abilityScores.charisma.modifier %>
savingThrows:
  strength:
    value: <% character.savingThrows.strength.value %>
    proficiency: <% character.savingThrows.strength.proficiency %>
  dexterity:
    value: <% character.savingThrows.dexterity.value %>
    proficiency: <% character.savingThrows.dexterity.proficiency %>
  constitution:
    value: <% character.savingThrows.constitution.value %>
    proficiency: <% character.savingThrows.constitution.proficiency %>
  intelligence:
    value: <% character.savingThrows.intelligence.value %>
    proficiency: <% character.savingThrows.intelligence.proficiency %>
  wisdom:
    value: <% character.savingThrows.wisdom.value %>
    proficiency: <% character.savingThrows.wisdom.proficiency %>
  charisma:
    value: <% character.savingThrows.charisma.value %>
    proficiency: <% character.savingThrows.charisma.proficiency %>
  notes:
<% tp.user.build_yaml_list(character.savingThrows.notes, 4) %>
skills:
  acrobatics:
    value: <% character.skills.acrobatics.value %>
    proficiency: <% character.skills.acrobatics.proficiency %>
    expertise: <% character.skills.acrobatics.expertise %>
    advantage: <% character.skills.acrobatics.advantage %>
    disadvantage: <% character.skills.acrobatics.disadvantage %>
  animal-handling:
    value: <% character.skills['animal-handling'].value %>
    proficiency: <% character.skills['animal-handling'].proficiency %>
    expertise: <% character.skills['animal-handling'].expertise %>
    advantage: <% character.skills['animal-handling'].advantage %>
    disadvantage: <% character.skills['animal-handling'].disadvantage %>
  arcana:
    value: <% character.skills.arcana.value %>
    proficiency: <% character.skills.arcana.proficiency %>
    expertise: <% character.skills.arcana.expertise %>
    advantage: <% character.skills.arcana.advantage %>
    disadvantage: <% character.skills.arcana.disadvantage %>
  athletics:
    value: <% character.skills.athletics.value %>
    proficiency: <% character.skills.athletics.proficiency %>
    expertise: <% character.skills.athletics.expertise %>
    advantage: <% character.skills.athletics.advantage %>
    disadvantage: <% character.skills.athletics.disadvantage %>
  deception:
    value: <% character.skills.deception.value %>
    proficiency: <% character.skills.deception.proficiency %>
    expertise: <% character.skills.deception.expertise %>
    advantage: <% character.skills.deception.advantage %>
    disadvantage: <% character.skills.deception.disadvantage %>
  history:
    value: <% character.skills.history.value %>
    proficiency: <% character.skills.history.proficiency %>
    expertise: <% character.skills.history.expertise %>
    advantage: <% character.skills.history.advantage %>
    disadvantage: <% character.skills.history.disadvantage %>
  insight:
    value: <% character.skills.insight.value %>
    proficiency: <% character.skills.insight.proficiency %>
    expertise: <% character.skills.insight.expertise %>
    advantage: <% character.skills.insight.advantage %>
    disadvantage: <% character.skills.insight.disadvantage %>
  intimidation:
    value: <% character.skills.intimidation.value %>
    proficiency: <% character.skills.intimidation.proficiency %>
    expertise: <% character.skills.intimidation.expertise %>
    advantage: <% character.skills.intimidation.advantage %>
    disadvantage: <% character.skills.intimidation.disadvantage %>
  investigation:
    value: <% character.skills.investigation.value %>
    proficiency: <% character.skills.investigation.proficiency %>
    expertise: <% character.skills.investigation.expertise %>
    advantage: <% character.skills.investigation.advantage %>
    disadvantage: <% character.skills.investigation.disadvantage %>
  medicine:
    value: <% character.skills.medicine.value %>
    proficiency: <% character.skills.medicine.proficiency %>
    expertise: <% character.skills.medicine.expertise %>
    advantage: <% character.skills.medicine.advantage %>
    disadvantage: <% character.skills.medicine.disadvantage %>
  nature:
    value: <% character.skills.nature.value %>
    proficiency: <% character.skills.nature.proficiency %>
    expertise: <% character.skills.nature.expertise %>
    advantage: <% character.skills.nature.advantage %>
    disadvantage: <% character.skills.nature.disadvantage %>
  perception:
    value: <% character.skills.perception.value %>
    proficiency: <% character.skills.perception.proficiency %>
    expertise: <% character.skills.perception.expertise %>
    advantage: <% character.skills.perception.advantage %>
    disadvantage: <% character.skills.perception.disadvantage %>
  performance:
    value: <% character.skills.performance.value %>
    proficiency: <% character.skills.performance.proficiency %>
    expertise: <% character.skills.performance.expertise %>
    advantage: <% character.skills.performance.advantage %>
    disadvantage: <% character.skills.performance.disadvantage %>
  persuasion:
    value: <% character.skills.persuasion.value %>
    proficiency: <% character.skills.persuasion.proficiency %>
    expertise: <% character.skills.persuasion.expertise %>
    advantage: <% character.skills.persuasion.advantage %>
    disadvantage: <% character.skills.persuasion.disadvantage %>
  religion:
    value: <% character.skills.religion.value %>
    proficiency: <% character.skills.religion.proficiency %>
    expertise: <% character.skills.religion.expertise %>
    advantage: <% character.skills.religion.advantage %>
    disadvantage: <% character.skills.religion.disadvantage %>
  sleight-of-hand:
    value: <% character.skills['sleight-of-hand'].value %>
    proficiency: <% character.skills['sleight-of-hand'].proficiency %>
    expertise: <% character.skills['sleight-of-hand'].expertise %>
    advantage: <% character.skills['sleight-of-hand'].advantage %>
    disadvantage: <% character.skills['sleight-of-hand'].disadvantage %>
  stealth:
    value: <% character.skills.stealth.value %>
    proficiency: <% character.skills.stealth.proficiency %>
    expertise: <% character.skills.stealth.expertise %>
    advantage: <% character.skills.stealth.advantage %>
    disadvantage: <% character.skills.stealth.disadvantage %>
  survival:
    value: <% character.skills.survival.value %>
    proficiency: <% character.skills.survival.proficiency %>
    expertise: <% character.skills.survival.expertise %>
    advantage: <% character.skills.survival.advantage %>
    disadvantage: <% character.skills.survival.disadvantage %>
racialTraits:
<% tp.user.build_yaml_list(character.racialTraits, 2) %>
classFeatures:
<% tp.user.build_yaml_list(character.classFeatures, 2) %>
feats:
<% tp.user.build_yaml_list(character.feats, 2) %>
spells: []
currencies:
  cp: <% character.currencies.cp %>
  sp: <% character.currencies.sp %>
  gp: <% character.currencies.gp %>
  ep: <% character.currencies.ep %>
  pp: <% character.currencies.pp %>
inventory:
<% tp.user.build_yaml_list(character.inventory, 2) %>
ideal: 
bond: 
flaw: 
likes: 
dislikes: 
party: "[[<% selectedParty.join('|') %>]]"
condition:
location:
---
`$="![Char Image\|clear left circle hsmall wsmall lp](" + dv.current().image + ")"`
> [!infobox|left clear n-th]
> 
> |||
> |:---:|:---:|
> | **Health Points** | `$=dv.current().hp` |
> | **Armor Class** | `$=dv.current().ac` |
> | **Initiative** | `$=dv.current().modifier` |

# `$=dv.current().name`
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
>
> ## Passives
> | **Perception** | **Investigation** | **Insight** |
> |:---:|:---:|:---:|
> |  |  |  |

# Personality
## Loves

## Hates

# Goals
## Short-term

## Long-term

# History
## Backstory

## Religion

## Enemies

## Allies

# DM Notes
## Additional Notes From Players 

## Hidden Details

## Notes
