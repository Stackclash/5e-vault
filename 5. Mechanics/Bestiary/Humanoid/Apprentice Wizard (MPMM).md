---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: urban
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/1-4
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid
aliases:
  - Apprentice Wizard
---
# [[5. Mechanics\Bestiary\Humanoid\Apprentice Wizard (MPMM).md|Apprentice Wizard]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 259, Volo's Guide to Monsters p. 209*

Apprentices are novice arcane spellcasters who serve more experienced wizards or attend school. They perform menial work like cooking or cleaning in exchange for education in the ways of magic.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

```statblock
"name": "Apprentice Wizard (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "10"
"ac_class": "13 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "13"
"hit_dice": "3d8"
"modifier": !!int "0"
"stats":
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "14"
  - !!int "10"
  - !!int "11"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+4"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "1/4"
"actions":
  - "desc": "Melee  or Ranged Spell Attack: +4 to hit, reach 5 ft. or range 120\
      \ ft., one target. Hit: 7 (1d10 + 2) force damage."
    "name": "Arcane Burst"
  - "desc": "The apprentice casts one of the following spells, using Intelligence\
      \ as the spellcasting ability (spell save DC 12)\n\nAt will: [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
      \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n1/day each:\
      \ [[5. Mechanics/Spells/Burning Hands.md|burning hands]], [[5. Mechanics/Spells/Disguise Self.md|disguise self]],\
      \ [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/apprentice-wizard-mpmm.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
