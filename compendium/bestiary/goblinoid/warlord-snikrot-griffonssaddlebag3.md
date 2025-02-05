---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/8
- monster/size/medium
- monster/type/goblinoid/goblin
aliases: ["Warlord Snikrot"]
---
# [Warlord Snikrot](compendium\bestiary\goblinoid/warlord-snikrot-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

A colossal brute of a goblin, Snikrot is the imposing leader of the goblin horde beneath Direstone and the secret sworn enemy of Bressir Emberheart. His unwavering conviction and hatred of Direstone, coupled with his incredible military prowess, makes him a deadly adversary.

```statblock
"name": "Warlord Snikrot (GriffonsSaddlebag3)"
"size": "Medium"
"type": "goblinoid"
"subtype": "goblin"
"alignment": "Neutral Evil"
"ac": !!int "18"
"ac_class": "[plate](compendium/items/plate-armor.md)"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "20"
- !!int "13"
- !!int "19"
- !!int "16"
- !!int "14"
- !!int "15"
"speed": "30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "5"
  "Strength": !!int "8"
"skillsaves":
  "Intimidation": !!int "5"
  "Insight": !!int "5"
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Goblin"
"cr": "8"
"traits":
- "desc": "A melee weapon deals one extra die of its damage when the warlord hits\
    \ with it (included in the attack)."
  "name": "Brute"
- "desc": "The warlord can take the Help or Search action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Mind"
- "desc": "The warlord has advantage on an attack roll against a creature if at least\
    \ one of the warlord's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/compendium/rules/conditions.md#Incapacitated)."
  "name": "Pack Tactics"
"actions":
- "desc": "The warlord makes three attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 12 (2d6 + 5) piercing damage in melee or 8 (1d6 + 5)\
    \ piercing damage at range."
  "name": "Javelin"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6\
    \ + 5) bludgeoning damage."
  "name": "Maul"
"reactions":
- "desc": "The warlord adds 3 to its AC against one melee attack that would hit it.\
    \ To do so, the warlord must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```