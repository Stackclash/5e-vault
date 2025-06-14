---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 10
environments: 'desert, mountain, urban'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/10
  - monster/environment/desert
  - monster/environment/mountain
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid/gith
aliases:
  - Githzerai Enlightened
---
# [[5. Mechanics\Bestiary\Humanoid\Githzerai Enlightened (MPMM).md|Githzerai Enlightened]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 143, Mordenkainen's Tome of Foes p. 208*

Some spiritual githzerai spend long hours in meditation to transcend the limits of their forms and to apprehend the nature of reality. Zerths who complete the next tier of their training become known as the enlightened.

## Githzerai

Githzerai are otherworldly folk with psionic powers who share an ancestral link to githyanki (also in this book). The githzerai followers of the great leader Zaerith Menyar-Ag-Gith are an ascetic people who live apart from the rest of the cosmos, within the confines of fortresses floating through the chaos of Limbo. Instead of imposing their will on other peoples, they focus on controlling and manipulating their endlessly malleable home.

```statblock
"name": "Githzerai Enlightened (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "psychic defense"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "19"
  - !!int "16"
  - !!int "17"
  - !!int "19"
  - !!int "13"
"speed": "40 ft."
"saves":
  - "strength": "+6"
  - "dexterity": "+8"
  - "intelligence": "+7"
  - "wisdom": "+8"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+8"
"senses": "passive Perception 18"
"languages": "Gith"
"cr": "10"
"traits":
  - "desc": "While the githzerai is wearing no armor and wielding no shield, its AC\
      \ includes its Wisdom modifier."
    "name": "Psychic Defense"
"actions":
  - "desc": "The githzerai makes three Unarmed Strike attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13\
      \ (2d8 + 4) bludgeoning damage plus 18 (4d8) psychic damage."
    "name": "Unarmed Strike"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 13\
      \ (2d8 + 4) bludgeoning damage plus 52 (8d12) psychic damage. The target must\
      \ succeed on a DC 16 Wisdom saving throw or move 1 round forward in time. A\
      \ target moved forward in time vanishes for the duration. When the effect ends,\
      \ the target reappears in the space it left or in an unoccupied space nearest\
      \ to that space if it's occupied."
    "name": "Temporal Strike (Recharge 6)"
  - "desc": "The githzerai casts one of the following spells, requiring no spell components\
      \ and using Wisdom as the spellcasting ability (spell save DC 16):\n\nAt will:\
      \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]] (the hand is invisible)\n\n3/day:\
      \ [[5. Mechanics/Spells/See Invisibility.md|see invisibility]]\n\n1/day each:\
      \ [[5. Mechanics/Spells/Plane Shift.md|plane shift]], [[5. Mechanics/Spells/Teleport.md|teleport]]"
    "name": "Spellcasting (Psionics)"
"reactions":
  - "desc": "When the githzerai falls, it reduces any falling damage it takes by 50."
    "name": "Slow Fall"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Humanoid/token/githzerai-enlightened-mpmm.webp"
```
^statblock

## Environment

desert, mountain, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
