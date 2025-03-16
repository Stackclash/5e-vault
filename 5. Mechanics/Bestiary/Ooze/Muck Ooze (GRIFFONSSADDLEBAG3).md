---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/2
  - monster/size/medium
  - monster/type/ooze
aliases:
  - Muck Ooze
---
# [[5. Mechanics/Bestiary/Ooze/Muck Ooze (GRIFFONSSADDLEBAG3).md|Muck Ooze]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

```statblock
"name": "Muck Ooze (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "7"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "15"
- !!int "5"
- !!int "16"
- !!int "1"
- !!int "6"
- !!int "1"
"speed": "10 ft., climb 10 ft., swim 10 ft."
"skillsaves":
  "Stealth": !!int "1"
"damage_resistances": "poison"
"damage_immunities": "acid"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "2"
"traits":
- "desc": "Whenever the ooze is subjected to acid damage, it takes no damage and instead\
    \ regains a number of hit points equal to the acid damage dealt."
  "name": "Acid Absorption"
- "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "While enveloping a creature, the ooze takes only half the damage dealt\
    \ to it (rounded down), and that creature takes the other half."
  "name": "Damage Transfer"
- "desc": "While the ooze remains motionless, it is indistinguishable from a puddle\
    \ of swamp muck."
  "name": "False Appearance"
- "desc": "Moving through nonmagical difficult terrain costs the ooze no extra movement.\
    \ It can also pass through nonmagical plants without being slowed by them and\
    \ without taking damage from them if they have thorns, spines, or a  similar hazard."
  "name": "Swamp Stride"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage plus 13 (3d8) acid damage."
  "name": "Pseudopod"
- "desc": "The ooze lunges at a Large or smaller creature it can see within 10 feet\
    \ of it. The target must make a DC 12 Dexterity saving throw. On a successful\
    \ save, the ooze lands in an unoccupied space within 5 feet of the target. On\
    \ a failed save, the ooze enters the target's space as it envelops the target's\
    \ body with its mucky form, and the target takes 13 (3d8) acid damage.\n\nWhile\
    \ enveloped, the target's speed is halved, it has disadvantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks and Dexterity saving throws, and it takes 13 (3d8) acid damage at the\
    \ start of each of the ooze's turns. When the target moves, the ooze moves with\
    \ it. If the ooze exits the target's space, the target is no longer enveloped\
    \ and this effect ends.\n\nAn enveloped target can try to escape by taking an\
    \ action to make a DC 12 Strength check. On a success, the ooze falls to the ground\
    \ in its space, and the target escapes and enters a space of its choice within\
    \ 5 feet of the ooze."
  "name": "Envelop"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
