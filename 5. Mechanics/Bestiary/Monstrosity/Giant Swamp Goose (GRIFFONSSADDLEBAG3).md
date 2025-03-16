---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/3
  - monster/size/large
  - monster/type/monstrosity
aliases:
  - Giant Swamp Goose
---
# [[5. Mechanics/Bestiary/Monstrosity/Giant Swamp Goose (GRIFFONSSADDLEBAG3).md|Giant Swamp Goose]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

```statblock
"name": "Giant Swamp Goose (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "18"
- !!int "16"
- !!int "17"
- !!int "5"
- !!int "14"
- !!int "9"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  "Intimidation": !!int "1"
  "Perception": !!int "4"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "3"
"traits":
- "desc": "As a bonus action, the goose can move up to its speed toward a hostile\
    \ creature that it can see."
  "name": "Aggressive"
- "desc": "If the goose is within 5 feet of a [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]\
    \ creature, it can make one attack with its wings against the creature as a bonus\
    \ action."
  "name": "Batter"
- "desc": "The goose has advantage on Wisdom (Perception) checks that rely on sight."
  "name": "Keen Sight"
"actions":
- "desc": "The goose makes two attacks: one with its beak and one with its wings."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10\
    \ + 4) piercing damage."
  "name": "Beak"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4\
    \ + 4) bludgeoning damage."
  "name": "Wings"
- "desc": "The goose releases a terrifying blast of sonic energy. Each creature within\
    \ 60 feet of it must make a DC 13 Constitution saving throw. On a failed save,\
    \ a creature takes 9 (2d8) thunder damage and is knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
    \ On a successful save, the creature takes half as much damage and isn't knocked\
    \ [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]. If a creature fails the saving\
    \ throw by 5 or more, it is also [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ until the end of the goose's next turn. While [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ in this way, the creature's speed is reduced to 0."
  "name": "Frightful Honk (Recharge 5-6)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
