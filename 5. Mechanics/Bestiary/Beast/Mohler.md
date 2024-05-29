---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/1-4
- monster/size/small
- monster/type/beast/controller
statblock: inline
aliases: ["Mohler"]
---
# [[5. Mechanics/Bestiary/Beast/Mohler.md|Mohler]]
*Source: Flee, Mortals! (Packet 1) p. 7*

```statblock
"name": "Mohler"
"size": "Small"
"type": "beast"
"subtype": "Controller"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "9"
"hit_dice": "2d6 + 2"
"stats":
- !!int "7"
- !!int "14"
- !!int "12"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "20 ft., burrow 40 ft."
"senses": "blindsight 20 ft., tremorsense 40 ft., passive Perception 11"
"languages": ""
"cr": "1/4"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Claw"
- "desc": "As the mohler burrows under a Large or smaller creature on the ground within\
    \ 5 feet of them, the mohler shifts the ground. The creature above them must succeed\
    \ on a DC 12 Dexterity saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Earth Bump"
- "desc": "The mohler burrows up to their burrowing speed. Ground within 5 feet of\
    \ where the mohler burrows becomes difficult terrain."
  "name": "Ground Grinder"
"reactions":
- "desc": "If the mohler fails a Dexterity saving throw while burrowing, they succeed\
    \ instead."
  "name": "Zip"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```