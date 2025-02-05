---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: coastal
size: Tiny
tags:
- compendium/src/5e/mm
- monster/cr/0
- monster/environment/coastal
- monster/size/tiny
- monster/type/beast
aliases: ["Crab"]
---
# [Crab](compendium\bestiary\beast/crab.md)
*Source: Monster Manual p. 320, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Crab"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "2"
- !!int "11"
- !!int "10"
- !!int "1"
- !!int "8"
- !!int "2"
"speed": "20 ft., swim 20 ft."
"skillsaves":
  "Stealth": !!int "2"
"senses": "blindsight 30 ft., passive Perception 9"
"languages": ""
"cr": "0"
"traits":
- "desc": "The crab can breathe air and water."
  "name": "Amphibious"
"actions":
- "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning\
    \ damage."
  "name": "Claw"
"source":
- "MM"
- "VEoR"
"image": "compendium/bestiary/beast/token/crab.webp"
```
^statblock

## Environment

coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```