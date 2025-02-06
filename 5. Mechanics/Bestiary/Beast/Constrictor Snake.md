---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: 'underwater, forest, swamp, desert'
size: Large
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\1 4
  - monster\Environment\Desert
  - monster\Environment\Forest
  - monster\Environment\Swamp
  - monster\Environment\Underwater
  - monster\Size\Large
  - monster\Type\Beast
aliases:
  - Constrictor Snake
---
# [[5. Mechanics\Bestiary\Beast\Constrictor Snake.md|Constrictor Snake]]
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
    \ + 2) bludgeoning damage, and the target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ (escape DC 14). Until this grapple ends, the creature is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
    \ and the snake can't constrict another target."
  "name": "Constrict"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/constrictor-snake.webp"
```
^statblock

## Environment

underwater, forest, swamp, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
