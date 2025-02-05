---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: 
size: Huge
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/4
- monster/size/huge
- monster/type/beast
aliases: ["Fen Serpent"]
---
# [Fen Serpent](compendium\bestiary\beast/fen-serpent-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

```statblock
"name": "Fen Serpent (GriffonsSaddlebag3)"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "102"
"hit_dice": "12d12 + 24"
"stats":
- !!int "15"
- !!int "19"
- !!int "14"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "2"
"damage_resistances": "poison"
"senses": "blindsight 10 ft., passive Perception 12"
"languages": ""
"cr": "4"
"traits":
- "desc": "In the first round of a combat, the serpent has advantage on attack rolls\
    \ against any creature it [surprised](/compendium/rules/conditions.md#Surprised)."
  "name": "Ambusher"
- "desc": "While the serpent is in water, a creature that hasn't observed it move\
    \ or act must succeed on a DC 16 Intelligence ([Investigation](/compendium/rules/skills.md#Investigation))\
    \ check to discern that it isn't a row of cat tails or swamp grass."
  "name": "False Appearance"
- "desc": "The serpent can hold its breath for up to 30 minutes."
  "name": "Hold Breath"
- "desc": "If the serpent hasn't moved on its turn, it can use its Death Roll as a\
    \ bonus action. After it uses this bonus action, its speed is 0 until the end\
    \ of the current turn."
  "name": "Rapid Spin"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage, and the target must make a DC 12 Constitution saving throw,\
    \ taking 10 (4d4) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage, and if the target is a Large or smaller creature, it\
    \ is [grappled](/compendium/rules/conditions.md#Grappled) (escape DC 14).\n\n\
    Until this grapple ends, the creature is [restrained](/compendium/rules/conditions.md#Restrained),\
    \ and the serpent can't constrict another target."
  "name": "Constrict"
- "desc": "The serpent thrashes and spins violently. When it does so, it can make\
    \ a DC 12 Strength check, freeing itself from all effects causing it to be [grappled](/compendium/rules/conditions.md#Grappled)\
    \ or [restrained](/compendium/rules/conditions.md#Restrained) on a success. If\
    \ the serpent is grappling another creature when it performs this maneuver, that\
    \ creature must succeed on a DC 14 Constitution saving throw or become [stunned](/compendium/rules/conditions.md#Stunned)\
    \ until the end of the serpent's next turn."
  "name": "Death Roll"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```