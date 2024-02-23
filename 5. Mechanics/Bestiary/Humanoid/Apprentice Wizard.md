---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/1-4
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid
statblock: inline
aliases:
  - Apprentice Wizard
---
# [[5. Mechanics\Bestiary\Humanoid\Apprentice Wizard.md|Apprentice Wizard]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 259*

Apprentices are novice arcane spellcasters who serve more experienced wizards or attend school. They perform menial work like cooking or cleaning in exchange for education in the ways of magic.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

```statblock
"name": "Apprentice Wizard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "History": !!int "4"
  "Arcana": !!int "4"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "1/4"
"traits":
- "desc": "The apprentice casts one of the following spells, using Intelligence as\
    \ the spellcasting ability (spell save DC 12)\n\nAt will: [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
    \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n1/day each:\
    \ [[5. Mechanics/Spells/Burning Hands.md|burning hands]], [[5. Mechanics/Spells/Disguise Self.md|disguise self]],\
    \ [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
  "name": "spells"
"actions":
- "desc": "Melee or Ranged Spell Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
    \ or range 120 ft., one target. Hit: dice: 1d10 + 2|avg (1d10 + 2) force\
    \ damage."
  "name": "Arcane Burst"
"source":
- "MPMM"
- "VGM"
- "SjA"
"image": "5. Mechanics/Bestiary/Humanoid/token/apprentice-wizard-mpmm.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
