---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: 'forest, hill'
size: Small
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\0
  - monster\Environment\Forest
  - monster\Environment\Hill
  - monster\Size\Small
  - monster\Type\Beast
aliases:
  - Baboon
---
# [[5. Mechanics\Bestiary\Beast\Baboon.md|Baboon]]
*Source: Monster Manual p. 318, Curse of Strahd. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Baboon"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "3"
"hit_dice": "1d6"
"stats":
- !!int "8"
- !!int "14"
- !!int "11"
- !!int "4"
- !!int "12"
- !!int "6"
"speed": "30 ft., climb 30 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "0"
"traits":
- "desc": "The baboon has advantage on an attack roll against a creature if at least\
    \ one of the baboon's allies is within 5 feet of the creature and the ally isn't\
    \ [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4\
    \ - 1) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "CoS"
"image": "5. Mechanics/Bestiary/Beast/token/baboon.webp"
```
^statblock

## Environment

forest, hill

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
