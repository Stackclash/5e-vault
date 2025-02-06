---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'underwater, underdark, forest, swamp, desert'
size: Huge
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\2
  - monster\Environment\Desert
  - monster\Environment\Forest
  - monster\Environment\Swamp
  - monster\Environment\Underdark
  - monster\Environment\Underwater
  - monster\Size\Huge
  - monster\Type\Beast
aliases:
  - Giant Constrictor Snake
---
# [[5. Mechanics\Bestiary\Beast\Giant Constrictor Snake.md|Giant Constrictor Snake]]
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
    \ (2d8 + 4) bludgeoning damage, and the target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ (escape DC 16). Until this grapple ends, the creature is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
    \ and the snake can't constrict another target."
  "name": "Constrict"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/giant-constrictor-snake.webp"
```
^statblock

## Environment

underwater, underdark, forest, swamp, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
