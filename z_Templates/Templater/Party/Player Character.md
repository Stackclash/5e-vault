<%*
const dv = app.plugins.getPlugin("dataview").api

let images = tp.user.get_all_files(app.vault.adapter.getBasePath(), "z_Assets")
let selectedImage = await tp.system.suggester(images.map(i => i.name), images.map(i => i.path), false, "What image to use?")
if (!selectedImage) selectedImage = "z_Assets/PlaceholderImage.png"

let parties = dv.pages('"3. The Party/Parties"')
let selectedParty = await tp.system.suggester(parties.map(p => p.file.name), parties.map(p => [p.file.path, p.file.name]), false, "What party is the character a part of?")

let dndBeyondInfo = await tp.system.prompt("Paste D&D Beyond character url or id here or press Enter to skip.")
let character = {}
if (dndBeyondInfo) {
  let dndBeyondId
  if (isNaN(dndBeyondInfo)) {
    dndBeyondId = dndBeyondInfo.match(/\d+$/)[0]
  } else {
    dndBeyondId = dndBeyondInfo
  }
  character = new tp.user.dndBeyondCharacter(dndBeyondId)
  await character.initialize()
  await tp.file.move('3. The Party/Players/' + character.name)
}
-%>
---
obsidianUIMode: previews
statblock: true
name: <% character.name %>
level: <% character.level %>
ac: <% character.armorClass %>
hp: <% character.healthPoints.current %>
modifier: <% character.initiative %>
proficiency: <% character.proficiencyBonus %>
url: <% character.url %>
image: <% selectedImage %>
race:
  name: <% character.race.name %>
  subRace: <% character.race.subRace %>
description:
  gender: <% character.description.gender %>
  age: <% character.description.age %>
  hair: <% character.description.hair %>
  eyes: <% character.description.eyes %>
  skin: <% character.description.skin %>
  height: <% character.description.height %>
  weight: <% character.description.weight %>
  size: <% character.description.size %>
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
classes:
<% tp.user.build_yaml_list(character.classes, 2) %>
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
> [!infobox|right]
> # `=this.file.name`
> ```meta-bind
> INPUT[imageSuggester(optionQuery("z_Assets")):image]
> ```
> ## Info
> | | |
> | ---- | ---- |
> | Level | `INPUT[inlineSelect(option(1),option(2),option(3),option(4),option(5),option(6),option(7),option(8),option(9),option(10),option(11),option(12),option(13),option(14),option(15),option(16),option(17),option(18),option(19),option(20)):level]` |
> | Class | `INPUT[suggester(optionQuery("5. Mechanics/Classes")):class]` |
> | Race | `INPUT[suggester(optionQuery("5. Mechanics/Races")):race]` |
> | HP | `INPUT[number:hp]` |
> | AC | `INPUT[number:ac]` |
> | Initiative Mod | `INPUT[number:modifier]` |
> ## Stats
> | | | |
> | ---- | ---- | ---- |
> | Strength | `INPUT[number:abilityScores.strength.value]` | `$=Math.floor((parseInt(dv.current().abilityScores.strength.value)-10)/2)` |
> | Dexterity | `INPUT[number:abilityScores.dexterity.value]` | `$=Math.floor((parseInt(dv.current().abilityScores.dexterity.value)-10)/2)` |
> | Constitution | `INPUT[number:abilityScores.constitution.value]` | `$=Math.floor((parseInt(dv.current().abilityScores.constitution.value)-10)/2)` |
> | Intelligence | `INPUT[number:abilityScores.intelligence.value]` | `$=Math.floor((parseInt(dv.current().abilityScores.intelligence.value)-10)/2)` |
> | Wisdom | `INPUT[number:abilityScores.wisdom.value]` | `$=Math.floor((parseInt(dv.current().abilityScores.wisdom.value)-10)/2)` |
> | Charisma | `INPUT[number:abilityScores.charisma.value]` | `$=Math.floor((parseInt(dv.current().abilityScores.charisma.value)-10)/2)` |
# DnD Beyond Character Sheet
```custom-frames
frame: 
```

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
