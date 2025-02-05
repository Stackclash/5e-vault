---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/4
environments: underwater, forest, swamp, desert
size: Large
tags:
- compendium/src/5e/mm
- monster/cr/1-4
- monster/environment/desert
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underwater
- monster/size/large
- monster/type/beast
aliases: ["Constrictor Snake"]
---
# [Constrictor Snake](compendium\bestiary\beast/constrictor-snake.md)
*Source: Monster Manual p. 320. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

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
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8\
    \ + 2) bludgeoning damage, and the target is [grappled](/compendium/rules/conditions.md#Grappled)\
    \ (escape DC 14). Until this grapple ends, the creature is [restrained](/compendium/rules/conditions.md#Restrained),\
    \ and the snake can't constrict another target."
  "name": "Constrict"
"source":
- "MM"
"image": "compendium/bestiary/beast/token/constrictor-snake.webp"
```
^statblock

## Environment

underwater, forest, swamp, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```