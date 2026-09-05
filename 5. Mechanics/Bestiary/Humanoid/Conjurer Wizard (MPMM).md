---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments:
  - urban
size: Medium
alignment: Any alignment
ac: 12
hp: 58
type: humanoid
tags:
  - monster
  - compendium/src/5e/mpmm
  - monster/cr/6
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid
aliases:
  - Conjurer Wizard
---
# [[/5. Mechanics/Bestiary/Humanoid/Conjurer Wizard (MPMM).md|Conjurer Wizard]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 260, Volo's Guide to Monsters p. 212*

Conjurers summon creatures from other planes of existence and teleport themselves and others in the blink of an eye.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

```statblock
"name": "Conjurer Wizard (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [[/5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "58"
"hit_dice": "13d8"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "11"
  - !!int "17"
  - !!int "12"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "6"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+6"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "6"
"actions":
  - "desc": "The conjurer makes three Arcane Burst attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Spell Attack:* +8 to hit, reach 5 ft. or range 120\
      \ ft., one target. *Hit:* 19 (3d10 + 3) force damage."
    "name": "Arcane Burst"
  - "desc": "The conjurer casts one of the following spells, using Intelligence as\
      \ the spellcasting ability (spell save DC 14):\n\n**At will:** [[/5. Mechanics/Spells/Dancing Lights.md|dancing lights]],\
      \ [[/5. Mechanics/Spells/Mage Hand.md|mage hand]], [[/5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\
      \n**2/day each:** [[/5. Mechanics/Spells/Fireball.md|fireball]], [[/5. Mechanics/Spells/Mage Armor.md|mage armor]],\
      \ [[/5. Mechanics/Spells/Unseen Servant.md|unseen servant]]\n\n**1/day each:**\
      \ [[/5. Mechanics/Spells/Fly.md|fly]], [[/5. Mechanics/Spells/Stinking Cloud.md|stinking cloud]],\
      \ [[/5. Mechanics/Spells/Web.md|web]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The conjurer teleports, along with any equipment it is wearing or carrying,\
      \ up to 30 feet to an unoccupied space that it can see. If it instead chooses\
      \ a space within range that is occupied by a willing Small or Medium creature,\
      \ they both teleport, swapping places."
    "name": "Benign Transportation (Recharge 4-6)"
  - "desc": "The conjurer magically summons an [[/5. Mechanics/Bestiary/Elemental/Air Elemental.md|air elemental]],\
      \ an [[/5. Mechanics/Bestiary/Elemental/Earth Elemental.md|earth elemental]], a\
      \ [[/5. Mechanics/Bestiary/Elemental/Fire Elemental.md|fire elemental]], or a [[/5. Mechanics/Bestiary/Elemental/Water Elemental.md|water\
      \ elemental]]. The elemental\
      \ appears in an unoccupied space within 60 feet of the conjurer, whom it obeys.\
      \ It takes its turn immediately after the conjurer. It lasts for 1 hour, until\
      \ it or the conjurer dies, or until the conjurer dismisses it as a bonus action."
    "name": "Summon Elemental (1/Day)"
"source":
  - "MPMM"
  - "VGM"
"image": "/5. Mechanics/Bestiary/Humanoid/token/conjurer-wizard-mpmm.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
