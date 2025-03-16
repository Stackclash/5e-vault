---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 21
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/21
  - monster/size/medium
  - monster/type/undead
aliases:
  - Righteous Spirit
---
# [[5. Mechanics/Bestiary/Undead/Righteous Spirit (GRIFFONSSADDLEBAG3).md|Righteous Spirit]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Standing in stark contrast to most ethereal undead, a righteous spirit forgoes moving on to the afterlife in order to accomplish a greater good on the Material Plane. Often, these individuals are highly devoted knights and warriors, but virtually any good-aligned creature that dies with an unfinished, righteous purpose could follow this path. Compared to more typical spirits, they often retain elements of their past abilities such as skill with magic and the like. As goals are completed and time passes, they may decide to pass on, or they may take up a new purpose, such as guarding a graveyard, temple, or a particular lineage.

```statblock
"name": "Righteous Spirit (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "undead"
"alignment": "Any Non-Evil alignment"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "380"
"hit_dice": "40d8 + 200"
"stats":
- !!int "20"
- !!int "20"
- !!int "20"
- !!int "20"
- !!int "20"
- !!int "20"
"speed": "0 ft., fly 30 ft. (hover)"
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "12"
"skillsaves":
  "Perception": !!int "12"
  "History": !!int "12"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "any languages it knew in life"
"cr": "21"
"traits":
- "desc": "The spirit can see 120 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- "desc": "The spirit can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- "desc": "The spirit has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The spirit is immune to any effect that turns undead."
  "name": "Turn Immunity"
"actions":
- "desc": "The spirit makes two attacks."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: +12 to hit, reach 5 ft., one target. Hit: 23 (4d8\
    \ + 5) force damage."
  "name": "Spectral Strike"
- "desc": "The spirit enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
"legendary_actions":
- "desc": "The spirit makes a Spectral Strike attack."
  "name": "Attack"
- "desc": "The spirit moves up to its speed."
  "name": "Move"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
