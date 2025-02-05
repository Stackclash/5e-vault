---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/4
environments: grassland, hill
size: Large
tags:
- compendium/src/5e/mm
- monster/cr/1-4
- monster/environment/grassland
- monster/environment/hill
- monster/size/large
- monster/type/beast
aliases: ["Axe Beak"]
---
# [Axe Beak](compendium\bestiary\beast/axe-beak.md)
*Source: Monster Manual p. 317. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

An axe beak is a tall flightless bird with strong legs and a heavy, wedge-shaped beak. It has a nasty disposition and tends to attack any unfamiliar creature that wanders too close.

```statblock
"name": "Axe Beak"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "14"
- !!int "12"
- !!int "12"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "50 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/4"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) slashing damage."
  "name": "Beak"
"source":
- "MM"
"image": "compendium/bestiary/beast/token/axe-beak.webp"
```
^statblock

## Environment

grassland, hill

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```