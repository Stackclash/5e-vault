---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
environments: []
size: Small
alignment: Unaligned
ac: null
hp: 30 + 5 for each spell level above 2nd
type: beast
tags:
  - monster
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/small
  - monster/type/beast
aliases:
  - Bestial Spirit (Land)
cr: null
---
# [[/5. Mechanics/Bestiary/Beast/Bestial Spirit Land (TCE).md|Bestial Spirit (Land)]]
*Source: Tasha's Cauldron of Everything p. 109*

```statblock
"name": "Bestial Spirit Land (TCE)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac_class": "11 + the level of the spell (natural armor)"
"hp": "30 + 5 for each spell level above 2nd"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "16"
  - !!int "4"
  - !!int "14"
  - !!int "5"
"speed": "30 ft., climb 30 ft."
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 12"
"languages": "understands the languages you speak"
"traits":
  - "desc": "The beast has advantage on an attack roll against a creature if at least\
      \ one of the beast's allies is within 5 feet of the creature and the ally isn't\
      \ [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
    "name": "Pack Tactics"
"actions":
  - "desc": "The beast makes a number of attacks equal to half this spell's level\
      \ (rounded down)."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* your spell attack modifier to hit, reach 5 ft.,\
      \ one target. *Hit:* 1d8 + 4 + the spell's level piercing damage."
    "name": "Maul"
"source":
  - "TCE"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
