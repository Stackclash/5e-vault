---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 
environments: 
size: Medium
tags:
- compendium/src/5e/kpdm
- monster/cr/
- monster/size/medium
- monster/type/construct
aliases: ["Animated Object Swarm"]
---
# [Animated Object Swarm](compendium\bestiary\construct/animated-object-swarm-kpdm.md)
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
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [frightened](/compendium/rules/conditions.md#Frightened),\
  \ [grappled](/compendium/rules/conditions.md#Grappled), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#Petrified), [prone](/compendium/rules/conditions.md#Prone),\
  \ [restrained](/compendium/rules/conditions.md#Restrained), [stunned](/compendium/rules/conditions.md#Stunned)"
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