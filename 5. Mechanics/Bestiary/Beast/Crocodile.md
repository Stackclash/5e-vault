---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: 'swamp, urban'
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/1-2
  - monster/environment/swamp
  - monster/environment/urban
  - monster/size/large
  - monster/type/beast
aliases:
  - Crocodile
---
# [[5. Mechanics/Bestiary/Beast/Crocodile.md|Crocodile]]
*Source: Monster Manual p. 320. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Crocodile"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "20 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "2"
"senses": "passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The crocodile can hold its breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10\
    \ + 2) piercing damage, and the target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ (escape DC 12). Until this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
    \ and the crocodile can't bite another target"
  "name": "Bite"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/crocodile.webp"
```
^statblock

## Environment

swamp, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
