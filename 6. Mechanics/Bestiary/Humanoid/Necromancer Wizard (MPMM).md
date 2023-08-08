---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: inline
---
# Necromancer Wizard
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 264, Volo's Guide to Monsters p. 217*  

Necromancers study the interaction of life, death, and undeath. Some necromancers dig up or purchase corpses to create Undead servitors. A few instead use their powers for good, hunting Undead.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

## Stat Block

```statblock
"name": "Necromancer Wizard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "110"
"hit_dice": "20d8 + 20"
"stats":
- !!int "9"
- !!int "14"
- !!int "12"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "7"
"skillsaves":
  "History": !!int "7"
  "Arcana": !!int "7"
"damage_resistances": "necrotic"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "9"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The necromancer casts one of the following spells, using Intelligence as\
    \ the spellcasting ability (spell save DC 15):\n\nAt will: [[/6. Mechanics/Spells/Dancing Lights.md|dancing lights]],\
    \ [[/6. Mechanics/Spells/Mage Hand.md|mage hand]], [[/6. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\
    \n1/day each: [[/6. Mechanics/Spells/Circle Of Death.md|circle of death]]\n\n\
    2/day each: [[/6. Mechanics/Spells/Bestow Curse.md|bestow curse]], [dimension\
    \ door](/compendium/spells/dimension-door.md), [[/6. Mechanics/Spells/Mage Armor.md|mage armor]],\
    \ [[/6. Mechanics/Spells/Web.md|web]]"
  "name": "spells"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The necromancer makes three Arcane Burst attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: dice: d20+7 (+7 to hit), reach 5 ft.\
    \ or range 120 ft., one target. Hit: dice: 4d10 + 3|avg (4d10 + 3) necrotic\
    \ damage."
  "name": "Arcane Burst"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The necromancer magically summons five [[/6. Mechanics/Bestiary/Undead/Skeleton.md|skeletons]]\
    \ or [[/6. Mechanics/Bestiary/Undead/Zombie.md|zombies]]. The summoned creatures\
    \ appear in unoccupied spaces within 60 feet of the necromancer, whom they obey.\
    \ They take their turns immediately after the necromancer. Each lasts for 1 hour,\
    \ until it or the necromancer dies, or until the necromancer dismisses it as a\
    \ bonus action."
  "name": "Summon Undead (1/Day)"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the necromancer kills a creature with necrotic damage, the necromancer\
    \ regains 9 (dice: 2d8|avg (2d8)) hit points. "
  "name": "Grim Harvest (1/Turn)"
"source":
- "MPMM"
- "VGM"
"image": "6. Mechanics/Bestiary/Humanoid/token/necromancer-wizard.png"
```
^statblock

## Environment

desert, urban