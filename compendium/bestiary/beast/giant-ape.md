---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: forest
size: Huge
tags:
- compendium/src/5e/mm
- monster/cr/7
- monster/environment/forest
- monster/size/huge
- monster/type/beast
aliases: ["Giant Ape"]
---
# [Giant Ape](compendium\bestiary\beast/giant-ape.md)
*Source: Monster Manual p. 323. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Giant Ape"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "157"
"hit_dice": "15d12 + 60"
"stats":
- !!int "23"
- !!int "14"
- !!int "18"
- !!int "7"
- !!int "12"
- !!int "7"
"speed": "40 ft., climb 40 ft."
"skillsaves":
  "Athletics": !!int "9"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "7"
"actions":
- "desc": "The ape makes two fist attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10\
    \ + 6) bludgeoning damage."
  "name": "Fist"
- "desc": "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit:\
    \ 30 (7d6 + 6) bludgeoning damage."
  "name": "Rock"
"source":
- "MM"
"image": "compendium/bestiary/beast/token/giant-ape.webp"
```
^statblock

## Environment

forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```