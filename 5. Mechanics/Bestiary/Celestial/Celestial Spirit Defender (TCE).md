---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
environments: []
size: Large
alignment: Unaligned
ac: null
hp: 40 + 10 for each spell level above 5th
type: celestial
tags:
  - monster
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/large
  - monster/type/celestial
aliases:
  - Celestial Spirit (Defender)
cr: null
---
# [[/5. Mechanics/Bestiary/Celestial/Celestial Spirit Defender (TCE).md|Celestial Spirit (Defender)]]
*Source: Tasha's Cauldron of Everything p. 110*

```statblock
"name": "Celestial Spirit Defender (TCE)"
"size": "Large"
"type": "celestial"
"alignment": "Unaligned"
"ac_class": "13 + the level of the spell (natural armor)"
"hp": "40 + 10 for each spell level above 5th"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "16"
  - !!int "10"
  - !!int "14"
  - !!int "16"
"speed": "30 ft., fly 40 ft."
"damage_resistances": "radiant"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 12"
"languages": "Celestial, understands the languages you speak"
"actions":
  - "desc": "The celestial makes a number of attacks equal to half this spell's level\
      \ (rounded down)."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* your spell attack modifier to hit, reach 5 ft.,\
      \ one target. *Hit:* 1d10 + 3 + the spell's level radiant damage, and the celestial\
      \ can choose itself or another creature it can see within 10 feet of the target.\
      \ The chosen creature gains 1d10 temporary hit points."
    "name": "Radiant Mace"
  - "desc": "The celestial touches another creature. The target magically regains\
      \ hit points equal to 2d8 + the spell's level."
    "name": "Healing Touch (1/Day)"
"source":
  - "TCE"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
