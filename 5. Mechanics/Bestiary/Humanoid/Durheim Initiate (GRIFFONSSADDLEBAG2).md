---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/1-2
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Durheim Initiate
---
# [[5. Mechanics/Bestiary/Humanoid/Durheim Initiate (GRIFFONSSADDLEBAG2).md|Durheim Initiate]]
*Source: The Griffon's Saddlebag, Book 2 p. 353*

Those who have only recently begun to follow the teachings of Attiskin are referred to as initiates. These individuals have begun to open their eyes to the wonders and dangers of the Ethereal, but they are only fledglings. Some of these inexperienced monks feel the call to Walk the Liminal Path earlier than is typical—these brave souls are destined to accomplish greatness or fall to tragedy.

```statblock
"name": "Durheim Initiate (GRIFFONSSADDLEBAG2)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Good"
"ac": !!int "14"
"hp": !!int "38"
"hit_dice": "7d8 + 7"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "11"
"speed": "40 ft."
"skillsaves":
  "Insight": !!int "4"
  "Acrobatics": !!int "4"
"senses": "passive Perception 12"
"languages": "Common, plus one other language"
"cr": "1/2"
"traits":
- "desc": "The initiate can cast [[5. Mechanics/Spells/Mage Hand.md|mage hand]] at will,\
    \ requiring no verbal or somatic components. The initiate can cast this spell\
    \ and control the hand as a bonus action, and when the initiate casts the spell,\
    \ it can make the hand [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]."
  "name": "Spirit Hand"
- "desc": "While the initiate is wearing no armor and wielding no shield, its AC includes\
    \ its Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- "desc": "The initiate makes two attacks."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: +4 to hit, reach 30 ft., one target. Hit: 4 (1d4\
    \ + 2) force damage."
  "name": "Spirit Strike"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
