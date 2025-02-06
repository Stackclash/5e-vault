---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: urban
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MPMM)
  - monster\Cr\5
  - monster\Environment\Urban
  - monster\Size\Medium
  - monster\Type\Humanoid
aliases:
  - Enchanter Wizard
---
# [[5. Mechanics\Bestiary\Humanoid\Enchanter Wizard (MPMM).md|Enchanter Wizard]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 261, Volo's Guide to Monsters p. 213*

Enchanters know how to magically influence minds. Benign enchanters use this magic to defuse violence and sow peace, while malevolent enchanters are some of the most evil of all spellcasters.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

```statblock
"name": "Enchanter Wizard (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "49"
"hit_dice": "11d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "5"
"traits":
- "desc": "The enchanter casts one of the following spells, using Intelligence as\
    \ the spellcasting ability (spell save DC 14):\n\nAt will: [[5. Mechanics/Spells/Friends.md|friends]],\
    \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Message.md|message]]\n\
    \n2/day each: [[5. Mechanics/Spells/Charm Person.md|charm person]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]],\
    \ [[5. Mechanics/Spells/Hold Person.md|hold person]], [[5. Mechanics/Spells/Invisibility.md|invisibility]],\
    \ [[5. Mechanics/Spells/Suggestion.md|suggestion]], [[5. Mechanics/Spells/Tongues.md|tongues]]"
  "name": "Spellcasting"
"actions":
- "desc": "The enchanter makes three Arcane Burst attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: +6 to hit, reach 5 ft. or range 120 ft.,\
    \ one target. Hit: 19 (3d10 + 3) psychic damage."
  "name": "Arcane Burst"
"reactions":
- "desc": "When a visible creature within 30 feet of the enchanter makes an attack\
    \ roll against it, the enchanter forces the attacker to make a DC 14 Wisdom saving\
    \ throw. On a failed save, the attacker redirects the attack roll to the creature\
    \ closest to it, other than the enchanter or itself. If multiple eligible creatures\
    \ are closest, the attacker chooses which one to target."
  "name": "Instinctive Charm (Recharge 4-6)"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/enchanter-wizard-mpmm.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
