---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments:
  - urban
size: Medium
alignment: Any alignment
ac: 10
hp: 9
type: humanoid
tags:
  - monster
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Acolyte
---
# [[/5. Mechanics/Bestiary/Humanoid/Acolyte.md|Acolyte]]
*Source: Monster Manual p. 342. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

Acolytes are junior members of a clergy, usually answerable to a priest. They perform a variety of functions in a temple and are granted minor spellcasting power by their deities.

```statblock
"name": "Acolyte"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "9"
"hit_dice": "2d8"
"modifier": !!int "0"
"stats":
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "14"
  - !!int "11"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Medicine|Medicine]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+2"
"gear":
  - "[[/5. Mechanics/Items/Club.md|club]]"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "1/4"
"traits":
  - "desc": "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom\
      \ (spell save DC 12, +4 to hit with spell attacks). The acolyte has the following\
      \ cleric spells prepared:\n\n**Cantrips (at will):** [[/5. Mechanics/Spells/Light.md|light]],\
      \ [[/5. Mechanics/Spells/Sacred Flame.md|sacred flame]], [[/5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
      \n**1st level (3 slots):** [[/5. Mechanics/Spells/Bless.md|bless]], [[/5. Mechanics/Spells/Cure Wounds.md|cure wounds]],\
      \ [[/5. Mechanics/Spells/Sanctuary.md|sanctuary]]"
    "name": "Spellcasting"
"actions":
  - "desc": "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 2 (1d4)\
      \ bludgeoning damage."
    "name": "Club"
"source":
  - "MM"
"image": "/5. Mechanics/Bestiary/Humanoid/token/acolyte.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
