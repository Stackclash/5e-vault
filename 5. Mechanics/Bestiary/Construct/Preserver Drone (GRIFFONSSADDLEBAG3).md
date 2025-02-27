---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/1
  - monster/size/medium
  - monster/type/construct
aliases:
  - Preserver Drone
---
# [[5. Mechanics\Bestiary\Construct\Preserver Drone (GRIFFONSSADDLEBAG3).md|Preserver Drone]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Preserver drones are smaller than their other constructed counterparts. These automotons fly through the air, suspended by something between magic and technology, and emit guiding beams of light that assist their larger construct brethren.

```statblock
"name": "Preserver Drone (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "13"
- !!int "15"
- !!int "14"
- !!int "4"
- !!int "10"
- !!int "5"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't adamantine"
"damage_immunities": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages of its creator but can't speak"
"cr": "1"
"traits":
- "desc": "Whenever the drone hits a target with an attack, the next attack roll a\
    \ preserver makes against that target before the end of the drone's next turn\
    \ has advantage."
  "name": "Guidance System"
- "desc": "The drone is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The drone can take the Disengage, Hide, or Search action as a bonus action."
  "name": "Scout"
"actions":
- "desc": "The drone makes two attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
  "name": "Slam"
- "desc": "Ranged Weapon Attack: +4 to hit, range 60 ft., one target. Hit: 5 (1d6\
    \ + 2) force damage."
  "name": "Laser"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
