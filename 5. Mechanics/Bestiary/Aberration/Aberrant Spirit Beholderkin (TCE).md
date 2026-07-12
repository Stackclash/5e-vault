---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
environments: []
size: Medium
alignment: Unaligned
ac: null
hp: 40 + 10 for each spell level above 4th
type: aberration
tags:
  - monster
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/medium
  - monster/type/aberration
aliases:
  - Aberrant Spirit (Beholderkin)
cr: null
---
# [[/5. Mechanics/Bestiary/Aberration/Aberrant Spirit Beholderkin (TCE).md|Aberrant Spirit (Beholderkin)]]
*Source: Tasha's Cauldron of Everything p. 109*

```statblock
"name": "Aberrant Spirit Beholderkin (TCE)"
"size": "Medium"
"type": "aberration"
"alignment": "Unaligned"
"ac_class": "11 + the level of the spell (natural armor)"
"hp": "40 + 10 for each spell level above 4th"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "15"
  - !!int "16"
  - !!int "10"
  - !!int "6"
"speed": "30 ft., fly 30 ft. (hover)"
"damage_immunities": "psychic"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 10"
"languages": "Deep Speech, understands the languages you speak"
"actions":
  - "desc": "The aberration makes a number of attacks equal to half this spell's level\
      \ (rounded down)."
    "name": "Multiattack"
  - "desc": "*Ranged Spell Attack:* your spell attack modifier to hit, range 150 ft.,\
      \ one creature. *Hit:* 1d8 + 3 + the spell's level psychic damage."
    "name": "Eye Ray"
"source":
  - "TCE"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
