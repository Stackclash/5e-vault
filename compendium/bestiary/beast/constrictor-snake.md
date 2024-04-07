---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/1-4
- monster/environment/desert
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underwater
- monster/size/large
- monster/type/beast
statblock: inline
aliases: ["Constrictor Snake"]
---
# [Constrictor Snake](compendium/bestiary/beast/constrictor-snake.md)
*Source: Monster Manual p. 320. Available in the SRD and the Basic Rules.*

```statblock
"name": "Constrictor Snake"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "2d10 + 2"
"stats":
- !!int "15"
- !!int "14"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "30 ft., swim 30 ft."
"senses": "blindsight 10 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d8 + 2|avg (1d8 + 2) bludgeoning damage, and the target is\
    \ [grappled](/compendium/rules/conditions.md#grappled) (escape DC 14). Until this\
    \ grapple ends, the creature is [restrained](/compendium/rules/conditions.md#restrained),\
    \ and the snake can't constrict another target."
  "name": "Constrict"
"source":
- "MM"
- "TftYP"
- "ToA"
- "WDMM"
"image": "compendium/bestiary/beast/token/constrictor-snake.webp"
```
^statblock

## Environment

underwater, forest, swamp, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```