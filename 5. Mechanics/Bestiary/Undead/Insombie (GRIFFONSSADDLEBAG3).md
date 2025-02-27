---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/1-4
  - monster/size/medium
  - monster/type/undead
aliases:
  - Insombie
---
# [[5. Mechanics\Bestiary\Undead\Insombie (GRIFFONSSADDLEBAG3).md|Insombie]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Insombies are the risen undead of those who have died of exhaustion. These wandering zombie-like creatures radiate tiredness and inflict levels of exhaustion to those within their reach.

```statblock
"name": "Insombie (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "7"
"hp": !!int "25"
"hit_dice": "3d8 + 12"
"stats":
- !!int "13"
- !!int "5"
- !!int "18"
- !!int "3"
- !!int "6"
- !!int "6"
"speed": "20 ft."
"saves":
  "Wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands all languages it knew in life but can't speak"
"cr": "1/4"
"traits":
- "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit; the zombie has advantage on this saving throw if it\
    \ has inflicted at least one level of [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]]\
    \ since the start of its last turn. On a success, the zombie drops to 1 hit point\
    \ instead."
  "name": "Undead Fortitude"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage plus 3 (1d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 12 Constitution saving throw or suffer one level of\
    \ [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]]. Any levels of [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]]\
    \ inflicted by this effect go away when the target finishes a short or long rest."
  "name": "Slam"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
