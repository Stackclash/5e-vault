---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/6
- monster/environment/arctic
- monster/size/huge
- monster/type/beast
statblock: inline
aliases: ["Mammoth"]
---
# [Mammoth](compendium/bestiary/beast/mammoth.md)
*Source: Monster Manual p. 332. Available in the SRD and the Basic Rules.*

A mammoth is an elephantine creature with thick fur and long tusks. Stockier and fiercer than normal elephants, mammoths inhabit a wide range of climes, from subarctic to subtropical.

```statblock
"name": "Mammoth"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
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
- "desc": "If the mammoth moves at least 20 feet straight toward a creature and then\
    \ hits it with a gore attack on the same turn, that target must succeed on a DC\
    \ 18 Strength saving throw or be knocked [prone](/compendium/rules/conditions.md#prone).\
    \ If the target is [prone](/compendium/rules/conditions.md#prone), the mammoth\
    \ can make one stomp attack against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+10 (+10 to hit), reach 10 ft., one target.\
    \ Hit: dice: 4d8 + 7|avg (4d8 + 7) piercing damage."
  "name": "Gore"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10 to hit), reach 5 ft., one [prone](/compendium/rules/conditions.md#prone)\
    \ creature. Hit: dice: 4d10 + 7|avg (4d10 + 7) bludgeoning damage."
  "name": "Stomp"
"source":
- "MM"
- "EGW"
- "IDRotF"
- "CRCotN"
"image": "compendium/bestiary/beast/token/mammoth.webp"
```
^statblock

## Environment

arctic

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```