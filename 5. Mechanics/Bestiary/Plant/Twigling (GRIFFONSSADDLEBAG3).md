---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/8
environments: null
size: Tiny
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/1-8
  - monster/size/tiny
  - monster/type/plant
aliases:
  - Twigling
---
# [[5. Mechanics/Bestiary/Plant/Twigling (GRIFFONSSADDLEBAG3).md|Twigling]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Even less aware and considerably smaller than [[5. Mechanics/Bestiary/Plant/Branchling (GRIFFONSSADDLEBAG3).md|branchlings]], twiglings resemble the small stick-figures that a child might draw. These devious little pranksters have very little perception of their fragile mortality. As a result, they tend to draw the ire of larger creatures and meet an early end. If they persist long enough by chance or other factors, they can undergo a metamorphosis. In this process, they bond with several other twiglings to form a [[5. Mechanics/Bestiary/Plant/Branchling (GRIFFONSSADDLEBAG3).md|branchling]]: the next stage in their life cycle.

```statblock
"name": "Twigling (GRIFFONSSADDLEBAG3)"
"size": "Tiny"
"type": "plant"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "7"
"hit_dice": "2d4 + 2"
"stats":
- !!int "5"
- !!int "14"
- !!int "13"
- !!int "5"
- !!int "12"
- !!int "10"
"speed": "15 ft., climb 15 ft."
"skillsaves":
  "Sleight of Hand": !!int "4"
  "Stealth": !!int "4"
"damage_vulnerabilities": "fire"
"senses": "passive Perception 11"
"languages": "understands Druidic and Sylvan but can't speak"
"cr": "1/8"
"traits":
- "desc": "While the twigling remains motionless, it is indistinguishable from an\
    \ ordinary stick."
  "name": "False Appearance"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) bludgeoning damage."
  "name": "Slam"
- "desc": "Ranged Weapon Attack: +4 to hit, range 10/20 ft., one target. Hit:\
    \ 3 bludgeoning damage."
  "name": "Throw Seed"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
