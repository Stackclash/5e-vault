---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/0
- monster/environment/desert
- monster/size/tiny
- monster/type/beast
statblock: inline
aliases: ["Scorpion"]
---
# [[5. Mechanics\Bestiary\Beast\Scorpion.md|Scorpion]]
*Source: Monster Manual p. 337. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Scorpion"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "11"
- !!int "8"
- !!int "1"
- !!int "8"
- !!int "2"
"speed": "10 ft."
"senses": "blindsight 10 ft., passive Perception 9"
"languages": ""
"cr": "0"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one creature.\
    \ Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving\
    \ throw, taking dice: 1d8|avg (1d8) poison damage on a failed save, or half\
    \ as much damage on a successful one."
  "name": "Sting"
"source":
- "MM"
- "WDMM"
- "PSX"
"image": "compendium/bestiary/beast/token/scorpion.png"
```
^statblock

## Environment

desert

```dataviewjs
await dv.view("monsterHarvesterTable", {current: dv.current()})
```