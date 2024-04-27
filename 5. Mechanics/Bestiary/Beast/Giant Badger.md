---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/forest
  - monster/size/medium
  - monster/type/beast
statblock: inline
aliases:
  - Giant Badger
---
# [[5. Mechanics\Bestiary\Beast\Giant Badger.md|Giant Badger]]
*Source: Monster Manual p. 323. Available in the SRD and the Basic Rules.*

```statblock
"name": "Giant Badger"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "13"
"hit_dice": "2d8 + 4"
"stats":
- !!int "13"
- !!int "10"
- !!int "15"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "30 ft., burrow 10 ft."
"senses": "darkvision 30 ft., passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The badger has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- "desc": "The badger makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+3 (+3) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6 + 1|text(4) (1d6 + 1) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+3 (+3) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d4 + 1|text(6) (2d4 + 1) slashing damage."
  "name": "Claws"
"source":
- "MM"
- "WDMM"
- "JttRC"
- "PaBTSO"
"image": "5. Mechanics/Bestiary/Beast/token/giant-badger.webp"
```
^statblock

## Environment

forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
