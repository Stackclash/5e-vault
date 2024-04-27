---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/environment/hill
  - monster/environment/swamp
  - monster/environment/urban
  - monster/size/tiny
  - monster/type/beast
statblock: inline
aliases:
  - Raven
---
# [[5. Mechanics\Bestiary\Beast\Raven.md|Raven]]
*Source: Monster Manual p. 335, Curse of Strahd. Available in the SRD and the Basic Rules.*

```statblock
"name": "Raven"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "14"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "6"
"speed": "10 ft., fly 50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- "desc": "The raven can mimic simple sounds it has heard, such as a person whispering,\
    \ a baby crying, or an animal chittering. A creature that hears the sounds can\
    \ tell they are imitations with a successful DC 10 Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]])\
    \ check."
  "name": "Mimicry"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: 1 piercing damage."
  "name": "Beak"
"source":
- "MM"
- "CoS"
- "IDRotF"
- "CM"
- "WBtW"
- "KftGV"
"image": "5. Mechanics/Bestiary/Beast/token/raven.webp"
```
^statblock

## Environment

swamp, hill, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
