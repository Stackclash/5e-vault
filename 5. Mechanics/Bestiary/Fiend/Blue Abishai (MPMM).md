---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 17
environments: 'coastal, urban'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/17
  - monster/environment/coastal
  - monster/environment/urban
  - monster/size/medium
  - monster/type/fiend/devil
  - monster/type/fiend/wizard
aliases:
  - Blue Abishai
---
# [[5. Mechanics\Bestiary\Fiend\Blue Abishai (MPMM).md|Blue Abishai]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 39, Mordenkainen's Tome of Foes p. 161, Vecna: Eve of Ruin*

Seekers of forgotten lore and lost relics, blue abishais are the most cunning and learned of their kind. Their research into occult subjects gleaned from tomes plundered from across the multiverse enables them to become accomplished spellcasters. They use their magic to devastate Tiamat's enemies.

## Abishais

Each abishai was once a mortal who somehow won Tiamat's favor before death and, as a reward, found its soul transformed into a draconic devil to serve at her pleasure in the Nine Hells. Each type of abishai is associated with one of Tiamat's five dragon heads: black, blue, green, red, and white.

Tiamat deploys abishais as her agents, sending them forth to represent her interests in the Hells and across the multiverse. Some have simple tasks, such as delivering a message to cultists. Others have greater responsibilities, such as leading large groups, assassinating targets, and serving in armies. In all cases, abishais are fanatically loyal to Tiamat, ready to lay down their lives if needed.

Abishais stand outside the normal hierarchy of the Nine Hells, having their own chain of command and ultimately answering to Tiamat (and Asmodeus, when he chooses to use them). Other archdevils can command abishais to work for them, but most archdevils do so rarely, since it is never clear whether an abishai follows Tiamat's orders or Asmodeus's. There is inherent risk in countermanding an order given by Tiamat, but interfering with Asmodeus's plans invites certain destruction.

```statblock
"name": "Blue Abishai (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "devil, wizard"
"alignment": "Typically  Lawful Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "202"
"hit_dice": "27d8 + 81"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "17"
  - !!int "22"
  - !!int "23"
  - !!int "18"
"speed": "30 ft., fly 50 ft."
"saves":
  - "intelligence": "+12"
  - "wisdom": "+12"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+12"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, lightning, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Draconic, Infernal, telepathy 120 ft."
"cr": "17"
"traits":
  - "desc": "Magical darkness doesn't impede the abishai's [[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]]."
    "name": "Devil's Sight"
  - "desc": "The abishai has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The abishai makes three Bite or Lightning Strike attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13\
      \ (2d10 + 2) piercing damage plus 14 (4d6) lightning damage."
    "name": "Bite"
  - "desc": "Ranged Spell Attack: +12 to hit, range 120 ft., one target. Hit:\
      \ 36 (8d8) lightning damage."
    "name": "Lightning Strike"
  - "desc": "The abishai casts one of the following spells, using Intelligence as\
      \ the spellcasting ability (spell save DC 20):\n\nAt will: [[5. Mechanics/Spells/Disguise Self.md|disguise self]],\
      \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]]\n\
      \n2/day each: [[5. Mechanics/Spells/Charm Person.md|charm person]], [[5. Mechanics/Spells/Dispel Magic.md|dispel\
      \ magic]], [[5. Mechanics/Spells/Greater Invisibility.md|greater invisibility]],\
      \ [[5. Mechanics/Spells/Wall Of Force.md|wall of force]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The abishai teleports, along with any equipment it is wearing or carrying,\
      \ up to 30 feet to an unoccupied space that it can see."
    "name": "Teleport"
"source":
  - "MPMM"
  - "MTF"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Fiend/token/blue-abishai-mpmm.webp"
```
^statblock

## Environment

coastal, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
