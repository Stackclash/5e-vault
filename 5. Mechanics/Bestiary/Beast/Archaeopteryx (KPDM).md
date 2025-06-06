---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: null
size: Tiny
tags:
  - compendium/src/5e/kpdm
  - monster/cr/1-4
  - monster/size/tiny
  - monster/type/beast
aliases:
  - Archaeopteryx
---
# [[5. Mechanics\Bestiary\Beast\Archaeopteryx (KPDM).md|Archaeopteryx]]
*Source: Deep Magic p. 291*

A prehistoric bird native to warm climates except for mountains and deserts, the archaeopteryx makes a faithful familiar.

```statblock
"name": "Archaeopteryx (KPDM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "7"
"hit_dice": "3d4"
"modifier": !!int "1"
"stats":
  - !!int "6"
  - !!int "13"
  - !!int "10"
  - !!int "2"
  - !!int "14"
  - !!int "6"
"speed": "5 ft., fly 50 ft."
"senses": "passive Perception 12"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The archaeopteryx doesn't provoke [[/5. Mechanics/Rules/Actions.md#Opportunity%20Attack|opportunity attacks]]\
      \ when it flies out of an enemy's reach."
    "name": "Flyby"
"actions":
  - "desc": "The archaeopteryx makes two attacks: one with its beak and one with its\
      \ talons."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
      \ + 1) piercing damage."
    "name": "Beak"
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
      \ + 1) slashing damage."
    "name": "Talons"
"source":
  - "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
