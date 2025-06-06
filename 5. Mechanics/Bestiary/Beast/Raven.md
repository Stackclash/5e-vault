---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: 'swamp, hill, urban'
size: Tiny
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/environment/hill
  - monster/environment/swamp
  - monster/environment/urban
  - monster/size/tiny
  - monster/type/beast
aliases:
  - Raven
---
# [[5. Mechanics\Bestiary\Beast\Raven.md|Raven]]
*Source: Monster Manual p. 335, Curse of Strahd, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Raven"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"modifier": !!int "2"
"stats":
  - !!int "2"
  - !!int "14"
  - !!int "8"
  - !!int "2"
  - !!int "12"
  - !!int "6"
"speed": "10 ft., fly 50 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
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
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing\
      \ damage."
    "name": "Beak"
"source":
  - "MM"
  - "CoS"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Beast/token/raven.webp"
```
^statblock

## Environment

swamp, hill, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
