---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/3
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: inline
aliases: ["Illusionist Wizard"]
---
# [Illusionist Wizard](compendium\bestiary\humanoid/illusionist-wizard-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 263*  

Illusionists twist light, sound, and even thought to create illusory effects. Some illusionists are delightful entertainers, while others are devilish tricksters.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

```statblock
"name": "Illusionist Wizard (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "9"
- !!int "14"
- !!int "13"
- !!int "16"
- !!int "11"
- !!int "12"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "2"
  "Intelligence": !!int "5"
"skillsaves":
  "History": !!int "5"
  "Arcana": !!int "5"
"senses": "passive Perception 10"
"languages": "any four languages"
"cr": "3"
"traits":
- "desc": "The illusionist casts one of the following spells, using Intelligence as\
    \ the spellcasting ability (spell save DC 13):\n\nAt will: [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]],\
    \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]]\n\
    \n2/day each: [[5. Mechanics/Spells/Disguise Self.md|disguise self]], [[5. Mechanics/Spells/Invisibility.md|invisibility]],\
    \ [[5. Mechanics/Spells/Mage Armor.md|mage armor]], [[5. Mechanics/Spells/Major Image.md|major image]],\
    \ [[5. Mechanics/Spells/Phantasmal Force.md|phantasmal force]], [[5. Mechanics/Spells/Phantom Steed.md|phantom steed]]"
  "name": "spells"
"actions":
- "desc": "The illusionist makes two Arcane Burst attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 120 ft., one target. Hit: dice: 2d10 + 3|avg (2d10 + 3) psychic\
    \ damage."
  "name": "Arcane Burst"
"bonus_actions":
- "desc": "The illusionist projects an illusion that makes the illusionist appear\
    \ to be standing in a place a few inches from its actual location, causing any\
    \ creature to have disadvantage on attack rolls against the illusionist. The effect\
    \ lasts for 1 minute, and it ends early if the illusionist takes damage, if it\
    \ is [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]], or if its\
    \ speed becomes 0."
  "name": "Displacement (Recharge 5-6)"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/humanoid/token/illusionist-wizard.png"
```
^statblock

## Environment

urban