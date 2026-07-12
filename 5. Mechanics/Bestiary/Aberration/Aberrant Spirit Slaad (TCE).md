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
  - Aberrant Spirit (Slaad)
cr: null
---
# [[/5. Mechanics/Bestiary/Aberration/Aberrant Spirit Slaad (TCE).md|Aberrant Spirit (Slaad)]]
*Source: Tasha's Cauldron of Everything p. 109*

```statblock
"name": "Aberrant Spirit Slaad (TCE)"
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
"speed": "30 ft."
"damage_immunities": "psychic"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 10"
"languages": "Deep Speech, understands the languages you speak"
"traits":
  - "desc": "The aberration regains 5 hit points at the start of its turn if it has\
      \ at least 1 hit point."
    "name": "Regeneration"
"actions":
  - "desc": "The aberration makes a number of attacks equal to half this spell's level\
      \ (rounded down)."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* your spell attack modifier to hit, reach 5 ft.,\
      \ one target. *Hit:* 1d10 + 3 + the spell's level slashing damage. If the target\
      \ is a creature, it can't regain hit points until the start of the aberration's\
      \ next turn."
    "name": "Claws"
"source":
  - "TCE"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
