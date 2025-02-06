---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: null
size: Tiny
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\0
  - monster\Size\Tiny
  - monster\Type\Beast
aliases:
  - Spider
---
# [[5. Mechanics\Bestiary\Beast\Spider.md|Spider]]
*Source: Monster Manual p. 337. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Spider"
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
- !!int "1"
- !!int "10"
- !!int "2"
"speed": "20 ft., climb 20 ft."
"skillsaves":
  "Stealth": !!int "4"
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "0"
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
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing\
    \ damage, and the target must succeed on a DC 9 Constitution saving throw or take\
    \ 2 (1d4) poison damage."
  "name": "Bite"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/spider.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
