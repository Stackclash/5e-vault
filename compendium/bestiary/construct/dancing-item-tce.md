---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 
environments: 
size: Large
tags:
- compendium/src/5e/tce
- monster/cr/
- monster/size/large
- monster/type/construct
aliases: ["Dancing Item"]
---
# [Dancing Item](compendium\bestiary\construct/dancing-item-tce.md)
*Source: Tasha's Cauldron of Everything p. 29*

```statblock
"name": "Dancing Item (TCE)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"stats":
- !!int "18"
- !!int "14"
- !!int "16"
- !!int "4"
- !!int "10"
- !!int "6"
"speed": "30 ft., fly 30 ft. (hover)"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned), [frightened](/compendium/rules/conditions.md#Frightened)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- "desc": "The item is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "When any creature starts its turn within 10 feet of the item, the item\
    \ can increase or decrease (your choice) the walking speed of that creature by\
    \ 10 feet until the end of the turn, provided the item isn't [incapacitated](/compendium/rules/conditions.md#Incapacitated)."
  "name": "Irrepressible Dance"
"actions":
- "desc": "Melee Weapon Attack: YourSpellAttack to hit, reach 5 ft., one target\
    \ you can see. Hit: 1d10 + PB force damage."
  "name": "Force-Empowered Slam"
"source":
- "TCE"
"image": "compendium/bestiary/construct/token/dancing-item-tce.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```