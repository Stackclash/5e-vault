---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/4
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/1-4
- monster/size/medium
- monster/type/undead
aliases: ["Insombie"]
---
# [Insombie](compendium\bestiary\undead/insombie-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Insombies are the risen undead of those who have died of exhaustion. These wandering zombie-like creatures radiate tiredness and inflict levels of exhaustion to those within their reach.

```statblock
"name": "Insombie (GriffonsSaddlebag3)"
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
"condition_immunities": "[exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned), [unconscious](/compendium/rules/conditions.md#Unconscious)"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands all languages it knew in life but can't speak"
"cr": "1/4"
"traits":
- "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit; the zombie has advantage on this saving throw if it\
    \ has inflicted at least one level of [exhaustion](/compendium/rules/conditions.md#Exhaustion)\
    \ since the start of its last turn. On a success, the zombie drops to 1 hit point\
    \ instead."
  "name": "Undead Fortitude"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage plus 3 (1d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 12 Constitution saving throw or suffer one level of\
    \ [exhaustion](/compendium/rules/conditions.md#Exhaustion). Any levels of [exhaustion](/compendium/rules/conditions.md#Exhaustion)\
    \ inflicted by this effect go away when the target finishes a short or long rest."
  "name": "Slam"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```