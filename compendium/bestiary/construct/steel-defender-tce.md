---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 
environments: 
size: Medium
tags:
- compendium/src/5e/tce
- monster/cr/
- monster/size/medium
- monster/type/construct
aliases: 
- Steel Defender
---
# [Steel Defender](compendium/bestiary/construct/steel-defender-tce.md)
*Source: Tasha's Cauldron of Everything p. 19*

```statblock
"name": "Steel Defender (TCE)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"modifier": !!int "1"
"stats":
  - !!int "14"
  - !!int "12"
  - !!int "14"
  - !!int "4"
  - !!int "10"
  - !!int "6"
"speed": "40 ft."
"saves":
  - "name": "Dexterity"
    "desc": "+1 plus PB"
  - "name": "Constitution"
    "desc": "+2 plus PB"
"skillsaves":
  - "name": "[Athletics](/compendium/rules/skills.md#Athletics)"
    "desc": "+2 plus PB"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+0 plus PB × 2"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 0"
"languages": "understands the languages you speak"
"traits":
  - "desc": "The defender can't be [surprised](/compendium/rules/conditions.md#Surprised)."
    "name": "Vigilant"
"actions":
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one target you can see. Hit: 1d8 + PB force damage."
    "name": "Force-Empowered Rend"
  - "desc": "The magical mechanisms inside the defender restore 2d8 + PB hit points\
      \ to itself or to one construct or object within 5 feet of it."
    "name": "Repair (3/Day)"
"reactions":
  - "desc": "The defender imposes disadvantage on the attack roll of one creature\
      \ it can see that is within 5 feet of it, provided the attack roll is against\
      \ a creature other than the defender."
    "name": "Deflect Attack"
"source":
  - "TCE"
"image": "/compendium/bestiary/construct/token/steel-defender-tce.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```