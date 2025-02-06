---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: 'grassland, forest, hill, desert, coastal'
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\1 4
  - monster\Environment\Coast(AL)
  - monster\Environment\Desert
  - monster\Environment\Forest
  - monster\Environment\Grassland
  - monster\Environment\Hill
  - monster\Size\Medium
  - monster\Type\Beast
aliases:
  - Giant Wolf Spider
---
# [[5. Mechanics\Bestiary\Beast\Giant Wolf Spider.md|Giant Wolf Spider]]
*Source: Monster Manual p. 330, Curse of Strahd, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

Smaller than a giant spider, a giant wolf spider hunts prey across open ground or hides in a burrow or crevice, or in a hidden cavity beneath debris.

```statblock
"name": "Giant Wolf Spider"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "3"
- !!int "12"
- !!int "4"
"speed": "40 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "3"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The spider can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "While in contact with a web, the spider knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- "desc": "The spider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6\
    \ + 1) piercing damage, and the target must make a DC 11 Constitution saving throw,\
    \ taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful\
    \ one. If the poison damage reduces the target to 0 hit points, the target is\
    \ stable but [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] for 1 hour,\
    \ even after regaining hit points, and is [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] in this way."
  "name": "Bite"
"source":
- "MM"
- "CoS"
- "TCE"
"image": "5. Mechanics/Bestiary/Beast/token/giant-wolf-spider.webp"
```
^statblock

## Environment

grassland, forest, hill, desert, coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
