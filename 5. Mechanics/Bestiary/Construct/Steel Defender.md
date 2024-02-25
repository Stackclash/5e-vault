---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/medium
  - monster/type/construct
statblock: inline
aliases:
  - Steel Defender
---
# [[5. Mechanics\Bestiary\Construct\Steel Defender.md|Steel Defender]]
*Source: Tasha's Cauldron of Everything p. 19, Eberron: Rising from the Last War p. 61*

```statblock
"name": "Steel Defender"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"stats":
- !!int "14"
- !!int "12"
- !!int "14"
- !!int "4"
- !!int "10"
- !!int "6"
"speed": "40 ft."
"saves":
  "Dexterity": !!int "0"
  "Constitution": !!int "0"
"skillsaves":
  "Athletics": !!int "0"
  "Perception": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 0"
"languages": "understands the languages you speak"
"traits":
- "desc": "The defender can't be surprised."
  "name": "Vigilant"
"actions":
- "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target you can see. Hit: 1d8 + PB force damage."
  "name": "Force-Empowered Rend"
- "desc": "The magical mechanisms inside the defender restore 2d8 + PB hit points\
    \ to itself or to one construct or object within 5 feet of it."
  "name": "Repair (3/Day)"
"reactions":
- "desc": "The defender imposes disadvantage on the attack roll of one creature it\
    \ can see that is within 5 feet of it, provided the attack roll is against a creature\
    \ other than the defender."
  "name": "Deflect Attack"
"source":
- "TCE"
- "ERLW"
"image": "5. Mechanics/Bestiary/Construct/token/steel-defender-tce.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
