---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: null
environments: null
size: Medium
tags:
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/medium
  - monster/type/undead
aliases:
  - Undead Spirit (Ghostly)
---
# [[5. Mechanics\Bestiary\Undead\Undead Spirit Ghostly (TCE).md|Undead Spirit (Ghostly)]]
*Source: Tasha's Cauldron of Everything p. 114*

```statblock
"name": "Undead Spirit Ghostly (TCE)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac_class": "11 + the level of the spell (natural armor)"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "15"
  - !!int "4"
  - !!int "10"
  - !!int "9"
"speed": "30 ft., fly 40 ft. (hover)"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
  - "desc": "The spirit can move through other creatures and objects as if they were\
      \ difficult terrain. If it ends its turn inside an object, it is shunted to\
      \ the nearest unoccupied space and takes d10 force damage for every 5 feet traveled."
    "name": "Incorporeal Passage"
"actions":
  - "desc": "The spirit makes a number of attacks equal to half this spell's level\
      \ (rounded down)."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one creature. Hit: 1d8 + 3 + the spell's level necrotic damage, and the\
      \ creature must succeed on a Wisdom saving throw against your spell save DC\
      \ or be [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] of the undead\
      \ until the end of the target's next turn."
    "name": "Deathly Touch"
"source":
  - "TCE"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
