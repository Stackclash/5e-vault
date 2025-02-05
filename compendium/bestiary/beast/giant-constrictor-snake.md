---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: underwater, underdark, forest, swamp, desert
size: Huge
tags:
- compendium/src/5e/mm
- monster/cr/2
- monster/environment/desert
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/underwater
- monster/size/huge
- monster/type/beast
aliases: ["Giant Constrictor Snake"]
---
# [Giant Constrictor Snake](compendium\bestiary\beast/giant-constrictor-snake.md)
*Source: Monster Manual p. 324. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Giant Constrictor Snake"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "60"
"hit_dice": "8d12 + 8"
"stats":
- !!int "19"
- !!int "14"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "blindsight 10 ft., passive Perception 12"
"languages": ""
"cr": "2"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11\
    \ (2d6 + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13\
    \ (2d8 + 4) bludgeoning damage, and the target is [grappled](/compendium/rules/conditions.md#Grappled)\
    \ (escape DC 16). Until this grapple ends, the creature is [restrained](/compendium/rules/conditions.md#Restrained),\
    \ and the snake can't constrict another target."
  "name": "Constrict"
"source":
- "MM"
"image": "compendium/bestiary/beast/token/giant-constrictor-snake.webp"
```
^statblock

## Environment

underwater, underdark, forest, swamp, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```