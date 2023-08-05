---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/elf
- monster/type/humanoid/wizard
statblock: true
statblock-link: "#^statblock"
"name": "Drow Favored Consort"
"size": "Medium"
"type": "humanoid"
"subtype": "elf, wizard"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "240"
"hit_dice": "32d8 + 96"
"stats":
- !!int "15"
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "11"
  "Constitution": !!int "9"
"skillsaves":
  "Athletics": !!int "8"
  "Stealth": !!int "11"
  "Perception": !!int "8"
  "Acrobatics": !!int "11"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Elvish, Undercommon"
"cr": "18"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 18):\n\nAt\
    \ will: [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]],\
    \ [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/message.md\|message]]\n\
    \n1/day each: [[/6. Mechanics/Spells/darkness.md\|darkness]], [[/6. Mechanics/Spells/faerie-fire.md\|faerie fire]],\
    \ [[/6. Mechanics/Spells/levitate.md\|levitate]] (self only)\n\n3/day each: [dimension\
    \ door](/compendium/spells/dimension-door.md), [[/6. Mechanics/Spells/fireball.md\|fireball]],\
    \ [[/6. Mechanics/Spells/invisibility.md\|invisibility]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]],\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow makes three Scimitar or Arcane Eruption attacks. The drow can\
    \ replace one of the attacks with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+11 (+11 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 5|avg (1d6 + 5) slashing damage plus dice: 6d8|avg (6d8)\
    \ poison damage."
  "name": "Scimitar"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Spell Attack: dice: d20+10 (+10 to hit), range 120 ft., one\
    \ target. Hit: dice: 8d8|avg (8d8) force damage, and the drow can push the\
    \ target up to 10 feet away if it is a Large or smaller creature."
  "name": "Arcane Eruption"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the drow or a creature within 10 feet of it is hit by an attack roll,\
    \ the drow gives the target a +5 bonus to its AC until the start of the drow's\
    \ next turn, which can cause the triggering attack roll to miss."
  "name": "Protective Shield (3/Day)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/humanoid/token/drow-favored-consort.png"
aliases: ["Drow Favored Consort"]
---
# Drow Favored Consort
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 100, Mordenkainen's Tome of Foes p. 183*  

Nearly every priestess of Lolth, including the powerful [[/6. Mechanics/Bestiary/Humanoid/drow-matron-mother-mpmm.md\|drow matron mother]] in this book, takes an attractive drow as consort. Chosen as much for beauty as for magical might, a drow favored consort can hold their own in both conversation and combat. Combining the roles of advisor, protector, and beloved, some favored consorts are content with a supporting role, while more ambitious consorts aspire to be the power behind the throne—or even to claim the throne themselves.

Those favored consorts who prove their cunning gain the ear, and perhaps even the heart, of their priestess and are relied on to provide useful advice. No position of consort is assured for long, though; Lolth's priestesses are notoriously fickle, and a consort must often contend with rivals.

Some favored consorts work behind the scenes to undermine the evils encouraged by Lolth. Others can be found in Underdark cities free of Lolth's influence, where these powerful spellcasters apply their might toward ending her tyranny.

```ad-statblock
title: Drow Favored Consort
![[/6. Mechanics/Bestiary/Humanoid/Token/drow-favored-consort.png#token]]
*Medium humanoid(elf, wizard), Any alignment*

- **Armor Class** 15 
- **Hit Points** `dice: 32d8 + 96|text(240)` (32d8 + 96) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|20 (+5)|16 (+3)|18 (+4)|15 (+2)|18 (+4)|

- **Proficiency Bonus** +6
- **Saving Throws** Dexterity +11, Constitution +9, Charisma +10
- **Skills** Acrobatics +11, Athletics +8, Perception +8, Stealth +11
- **Senses** darkvision 120 ft., passive Perception 18
- **Languages** Elvish, Undercommon
- **Challenge** 18

## Traits

***Fey Ancestry.*** The drow has advantage on saving throws against being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]], and magic can't put the drow to sleep.

***Sunlight Sensitivity.*** While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on sight.

***Spellcasting.*** The drow casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability (spell save DC 18):

**At will**: [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/message.md\|message]]

**1/day each**: [[/6. Mechanics/Spells/darkness.md\|darkness]], [[/6. Mechanics/Spells/faerie-fire.md\|faerie fire]], [[/6. Mechanics/Spells/levitate.md\|levitate]] (self only)

**3/day each**: [[/6. Mechanics/Spells/dimension-door.md\|dimension door]], [[/6. Mechanics/Spells/fireball.md\|fireball]], [[/6. Mechanics/Spells/invisibility.md\|invisibility]]

## Actions

***Multiattack.*** The drow makes three Scimitar or Arcane Eruption attacks. The drow can replace one of the attacks with a use of Spellcasting.

***Scimitar.*** *Melee Weapon Attack:* `dice: d20+11` (+11 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 5` (`1d6 + 5`) slashing damage plus `dice: 6d8` (`6d8`) poison damage.

***Arcane Eruption.*** *Ranged Spell Attack:* `dice: d20+10` (+10 to hit), range 120 ft., one target. Hit: `dice: 8d8` (`8d8`) force damage, and the drow can push the target up to 10 feet away if it is a Large or smaller creature.

## Reactions

***Protective Shield (3/Day).*** When the drow or a creature within 10 feet of it is hit by an attack roll, the drow gives the target a +5 bonus to its AC until the start of the drow's next turn, which can cause the triggering attack roll to miss.
```
^statblock

## Environment

underdark