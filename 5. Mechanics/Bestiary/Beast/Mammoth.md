---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: arctic
size: Huge
tags:
  - compendium/src/5e/mm
  - monster/cr/6
  - monster/environment/arctic
  - monster/size/huge
  - monster/type/beast
aliases:
  - Mammoth
---
# [[5. Mechanics\Bestiary\Beast\Mammoth.md|Mammoth]]
*Source: Monster Manual p. 332. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

A mammoth is an elephantine creature with thick fur and long tusks. Stockier and fiercer than normal elephants, mammoths inhabit a wide range of climes, from subarctic to subtropical.

```statblock
"name": "Mammoth"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"modifier": !!int "-1"
"stats":
  - !!int "24"
  - !!int "9"
  - !!int "21"
  - !!int "3"
  - !!int "11"
  - !!int "6"
"speed": "40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "6"
"traits":
  - "desc": "If the mammoth moves at least 20 feet straight toward a creature and\
      \ then hits it with a gore attack on the same turn, that target must succeed\
      \ on a DC 18 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
      \ If the target is [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], the mammoth\
      \ can make one stomp attack against it as a bonus action."
    "name": "Trampling Charge"
"actions":
  - "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25\
      \ (4d8 + 7) piercing damage."
    "name": "Gore"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]\
      \ creature. Hit: 29 (4d10 + 7) bludgeoning damage."
    "name": "Stomp"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/mammoth.webp"
```
^statblock

## Environment

arctic

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
