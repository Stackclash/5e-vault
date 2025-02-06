---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: null
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(KPDM)
  - monster\Cr
  - monster\Size\Medium
  - monster\Type\Construct
aliases:
  - Animated Object Swarm
---
# [[5. Mechanics\Bestiary\Construct\Animated Object Swarm (KPDM).md|Animated Object Swarm]]
*Source: Deep Magic p. 37*

```statblock
"name": "Animated Object Swarm (KPDM)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "20"
"stats":
- !!int "4"
- !!int "18"
- !!int "10"
- !!int "3"
- !!int "3"
- !!int "1"
"speed": "30 ft., fly 30 ft. (hover)"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "blindsight 30 ft. (blind beyond this distance), passive Perception 6"
"languages": ""
"actions":
- "desc": "Melee Weapon Attack: +8 to hit, reach 0 ft., one target in the swarm's\
    \ space. Hit: 6 (1d4 + 4) damage."
  "name": "Attack"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
