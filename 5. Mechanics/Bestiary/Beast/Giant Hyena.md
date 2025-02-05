---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 'grassland, forest, hill, desert'
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/1
  - monster/environment/desert
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/hill
  - monster/size/large
  - monster/type/beast
aliases:
  - Giant Hyena
---
# [[5. Mechanics\Bestiary\Beast\Giant Hyena.md|Giant Hyena]]
*Source: Monster Manual p. 326. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Giant Hyena"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- "desc": "When the hyena reduces a creature to 0 hit points with a melee attack on\
    \ its turn, the hyena can take a bonus action to move up to half its speed and\
    \ make a bite attack."
  "name": "Rampage"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage."
  "name": "Bite"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/giant-hyena.webp"
```
^statblock

## Environment

grassland, forest, hill, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
