---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 9
environments: 'desert, urban'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/9
  - monster/environment/desert
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid
aliases:
  - Necromancer Wizard
---
# [[5. Mechanics\Bestiary\Humanoid\Necromancer Wizard (MPMM).md|Necromancer Wizard]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 264, Volo's Guide to Monsters p. 217, Vecna: Eve of Ruin*

Necromancers study the interaction of life, death, and undeath. Some necromancers dig up or purchase corpses to create Undead servitors. A few instead use their powers for good, hunting Undead.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

```statblock
"name": "Necromancer Wizard (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "110"
"hit_dice": "20d8 + 20"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "12"
  - !!int "17"
  - !!int "12"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "intelligence": "+7"
  - "wisdom": "+5"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+7"
"damage_resistances": "necrotic"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "9"
"actions":
  - "desc": "The necromancer makes three Arcane Burst attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 120\
      \ ft., one target. Hit: 25 (4d10 + 3) necrotic damage."
    "name": "Arcane Burst"
  - "desc": "The necromancer casts one of the following spells, using Intelligence\
      \ as the spellcasting ability (spell save DC 15):\n\nAt will: [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]],\
      \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\
      \n2/day each: [[5. Mechanics/Spells/Bestow Curse.md|bestow curse]], [[5. Mechanics/Spells/Dimension Door.md|dimension\
      \ door]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]],\
      \ [[5. Mechanics/Spells/Web.md|web]]\n\n1/day each: [[5. Mechanics/Spells/Circle Of Death.md|circle of death]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The necromancer magically summons five [[5. Mechanics/Bestiary/Undead/Skeleton.md|skeletons]]\
      \ or [[5. Mechanics/Bestiary/Undead/Zombie.md|zombies]]. The summoned creatures\
      \ appear in unoccupied spaces within 60 feet of the necromancer, whom they obey.\
      \ They take their turns immediately after the necromancer. Each lasts for 1\
      \ hour, until it or the necromancer dies, or until the necromancer dismisses\
      \ it as a bonus action."
    "name": "Summon Undead (1/Day)"
"reactions":
  - "desc": "When the necromancer kills a creature with necrotic damage, the necromancer\
      \ regains 9 (2d8) hit points. "
    "name": "Grim Harvest (1/Turn)"
"source":
  - "MPMM"
  - "VGM"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Humanoid/token/necromancer-wizard-mpmm.webp"
```
^statblock

## Environment

desert, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
