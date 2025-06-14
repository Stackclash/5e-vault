---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: null
environments: null
size: Large
tags:
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/large
  - monster/type/construct
aliases:
  - Dancing Item
---
# [[5. Mechanics\Bestiary\Construct\Dancing Item (TCE).md|Dancing Item]]
*Source: Tasha's Cauldron of Everything p. 29*

```statblock
"name": "Dancing Item (TCE)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "16"
  - !!int "4"
  - !!int "10"
  - !!int "6"
"speed": "30 ft., fly 30 ft. (hover)"
"damage_immunities": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
  - "desc": "The item is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "When any creature starts its turn within 10 feet of the item, the item\
      \ can increase or decrease (your choice) the walking speed of that creature\
      \ by 10 feet until the end of the turn, provided the item isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
    "name": "Irrepressible Dance"
"actions":
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one target you can see. Hit: 1d10 + PB force damage."
    "name": "Force-Empowered Slam"
"source":
  - "TCE"
"image": "5. Mechanics/Bestiary/Construct/token/dancing-item-tce.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
