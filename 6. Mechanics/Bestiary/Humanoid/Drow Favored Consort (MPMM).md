---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/elf
- monster/type/humanoid/wizard
statblock: inline
---
# Drow Favored Consort
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 100, Mordenkainen's Tome of Foes p. 183*  

Nearly every priestess of Lolth, including the powerful [[/6. Mechanics/Bestiary/Humanoid/Drow Matron Mother (MPMM).md|drow matron mother]] in this book, takes an attractive drow as consort. Chosen as much for beauty as for magical might, a drow favored consort can hold their own in both conversation and combat. Combining the roles of advisor, protector, and beloved, some favored consorts are content with a supporting role, while more ambitious consorts aspire to be the power behind the throne—or even to claim the throne themselves.

Those favored consorts who prove their cunning gain the ear, and perhaps even the heart, of their priestess and are relied on to provide useful advice. No position of consort is assured for long, though; Lolth's priestesses are notoriously fickle, and a consort must often contend with rivals.

Some favored consorts work behind the scenes to undermine the evils encouraged by Lolth. Others can be found in Underdark cities free of Lolth's influence, where these powerful spellcasters apply their might toward ending her tyranny.

```statblock
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
    \ will: [[/6. Mechanics/Spells/Dancing Lights.md|dancing lights]], [[/6. Mechanics/Spells/Mage Armor.md|mage armor]],\
    \ [[/6. Mechanics/Spells/Mage Hand.md|mage hand]], [[/6. Mechanics/Spells/Message.md|message]]\n\
    \n1/day each: [[/6. Mechanics/Spells/Darkness.md|darkness]], [[/6. Mechanics/Spells/Faerie Fire.md|faerie fire]],\
    \ [[/6. Mechanics/Spells/Levitate.md|levitate]] (self only)\n\n3/day each: [dimension\
    \ door](/compendium/spells/dimension-door.md), [[/6. Mechanics/Spells/Fireball.md|fireball]],\
    \ [[/6. Mechanics/Spells/Invisibility.md|invisibility]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [[6. Mechanics/Rules/Conditions.md#charmed|charmed]],\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]]) checks that\
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
"image": "6. Mechanics/Bestiary/Humanoid/token/drow-favored-consort.png"
```
^statblock

## Environment

underdark