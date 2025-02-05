---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: grassland
size: Huge
tags:
  - compendium/src/5e/mm
  - monster/cr/4
  - monster/environment/grassland
  - monster/size/huge
  - monster/type/beast
aliases:
  - Elephant
---
# [[5. Mechanics\Bestiary\Beast\Elephant.md|Elephant]]
*Source: Monster Manual p. 322. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Elephant"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "76"
"hit_dice": "8d12 + 24"
"stats":
- !!int "22"
- !!int "9"
- !!int "17"
- !!int "3"
- !!int "11"
- !!int "6"
"speed": "40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "4"
"traits":
- "desc": "If the elephant moves at least 20 feet straight toward a creature and then\
    \ hits it with a gore attack on the same turn, that target must succeed on a DC\
    \ 12 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
    \ If the target is [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], the elephant\
    \ can make one stomp attack against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 19 (3d8\
    \ + 6) piercing damage."
  "name": "Gore"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]\
    \ creature. Hit: 22 (3d10 + 6) bludgeoning damage."
  "name": "Stomp"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/elephant.webp"
```
^statblock

## Environment

grassland

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
