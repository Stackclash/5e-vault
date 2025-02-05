---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/4
environments: urban
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Acolyte
---
# [[5. Mechanics\Bestiary\Humanoid\Acolyte.md|Acolyte]]
*Source: Monster Manual p. 342, Curse of Strahd. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

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
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "14"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "4"
  "Religion": !!int "2"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "1/4"
"traits":
- "desc": "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 12, +4 to hit with spell attacks). The acolyte has following\
    \ cleric spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Light.md|light]],\
    \ [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]], [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
    \n1st level (3 slots): [[5. Mechanics/Spells/Bless.md|bless]], [[5. Mechanics/Spells/Cure Wounds.md|cure wounds]],\
    \ [[5. Mechanics/Spells/Sanctuary.md|sanctuary]]"
  "name": "Spellcasting"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ bludgeoning damage."
  "name": "Club"
"source":
- "MM"
- "CoS"
"image": "5. Mechanics/Bestiary/Humanoid/token/acolyte.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
