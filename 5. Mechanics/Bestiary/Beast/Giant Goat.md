---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: 'mountain, grassland, hill'
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/1-2
  - monster/environment/grassland
  - monster/environment/hill
  - monster/environment/mountain
  - monster/size/large
  - monster/type/beast
aliases:
  - Giant Goat
---
# [[5. Mechanics\Bestiary\Beast\Giant Goat.md|Giant Goat]]
*Source: Monster Manual p. 326, Curse of Strahd. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Giant Goat"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "11"
  - !!int "12"
  - !!int "3"
  - !!int "12"
  - !!int "6"
"speed": "40 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "If the goat moves at least 20 feet straight toward a target and then\
      \ hits it with a ram attack on the same turn, the target takes an extra 5 (2d4)\
      \ bludgeoning damage. If the target is a creature, it must succeed on a DC 13\
      \ Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Charge"
  - "desc": "The goat has advantage on Strength and Dexterity saving throws made against\
      \ effects that would knock it [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Sure-Footed"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\
      \ + 3) bludgeoning damage."
    "name": "Ram"
"source":
  - "MM"
  - "CoS"
"image": "5. Mechanics/Bestiary/Beast/token/giant-goat.webp"
```
^statblock

## Environment

mountain, grassland, hill

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
