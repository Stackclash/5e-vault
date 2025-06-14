---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: null
environments: null
size: Tiny
tags:
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/tiny
  - monster/type/construct
aliases:
  - Homunculus Servant
---
# [[5. Mechanics\Bestiary\Construct\Homunculus Servant (TCE).md|Homunculus Servant]]
*Source: Tasha's Cauldron of Everything p. 22*

```statblock
"name": "Homunculus Servant (TCE)"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"modifier": !!int "2"
"stats":
  - !!int "4"
  - !!int "15"
  - !!int "12"
  - !!int "10"
  - !!int "10"
  - !!int "7"
"speed": "20 ft., fly 30 ft."
"saves":
  - "name": "Dexterity"
    "desc": "+2 plus PB"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+0 plus PB × 2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+2 plus PB"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 0"
"languages": "understands the languages you speak"
"traits":
  - "desc": "If the homunculus is subjected to an effect that allows it to make a\
      \ Dexterity saving throw to take only half damage, it instead takes no damage\
      \ if it succeeds on the saving throw, and only half damage if it fails. It can't\
      \ use this trait if it's [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
    "name": "Evasion"
"actions":
  - "desc": "Ranged Weapon Attack: your spell attack modifier to hit, range 30 ft.,\
      \ one target you can see. Hit: 1d4 + PB force damage."
    "name": "Force Strike"
"reactions":
  - "desc": "The homunculus delivers a spell you cast that has a range of touch. The\
      \ homunculus must be within 120 feet of you."
    "name": "Channel Magic"
"source":
  - "TCE"
"image": "5. Mechanics/Bestiary/Construct/token/homunculus-servant-tce.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
