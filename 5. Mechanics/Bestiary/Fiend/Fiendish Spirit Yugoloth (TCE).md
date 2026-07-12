---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
environments: []
size: Large
alignment: Unaligned
ac: null
hp: 60 + 15 for each spell level above 6th
type: fiend
tags:
  - monster
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/large
  - monster/type/fiend
aliases:
  - Fiendish Spirit (Yugoloth)
cr: null
---
# [[/5. Mechanics/Bestiary/Fiend/Fiendish Spirit Yugoloth (TCE).md|Fiendish Spirit (Yugoloth)]]
*Source: Tasha's Cauldron of Everything p. 112*

```statblock
"name": "Fiendish Spirit Yugoloth (TCE)"
"size": "Large"
"type": "fiend"
"alignment": "Unaligned"
"ac_class": "12 + the level of the spell (natural armor)"
"hp": "60 + 15 for each spell level above 6th"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "16"
  - !!int "15"
  - !!int "10"
  - !!int "10"
  - !!int "16"
"speed": "40 ft."
"damage_resistances": "fire"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 10"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"traits":
  - "desc": "The fiend has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The fiend makes a number of attacks equal to half this spell's level\
      \ (rounded down)."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* your spell attack modifier to hit, reach 5 ft.,\
      \ one target. *Hit:* 1d8 + 3 + the spell's level slashing damage. Immediately\
      \ after the attack hits or misses, the fiend can magically teleport up to 30\
      \ feet to an unoccupied space it can see."
    "name": "Claws"
"source":
  - "TCE"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
