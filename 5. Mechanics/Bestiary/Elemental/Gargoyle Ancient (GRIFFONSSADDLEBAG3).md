---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 9
environments: null
size: Huge
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/9
  - monster/size/huge
  - monster/type/elemental
aliases:
  - 'Gargoyle, Ancient'
---
# [[5. Mechanics\Bestiary\Elemental\Gargoyle Ancient (GRIFFONSSADDLEBAG3).md|Gargoyle, Ancient]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Gargoyles that have survived for centuries become ancient, all-knowing statues. Some adventurers turn to such gargoyles, despite the risks, in hopes of gleaning information from their wisdom and lasting memories. Their gaze can even create new statues by petrifying living creatures.

Conversely, small statuettes posessed by the same sentience granted by the Elemental Plane of Earth are called gargoyle implings. These stone pranksters are sometimes employed as chaotic familiars of warlocks, who enact no shortage of mischief together.

```statblock
"name": "Gargoyle, Ancient (GriffonsSaddlebag3)"
"size": "Huge"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "149"
"hit_dice": "13d12 + 65"
"modifier": !!int "1"
"stats":
  - !!int "22"
  - !!int "13"
  - !!int "21"
  - !!int "8"
  - !!int "15"
  - !!int "8"
"speed": "30 ft., fly 60 ft."
"saves":
  - "constitution": "+9"
  - "charisma": "+3"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Terran"
"cr": "9"
"traits":
  - "desc": "While the gargoyle remains motionless, it is indistinguishable from an\
      \ inanimate statue."
    "name": "False Appearance"
  - "desc": "The gargoyle has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The gargoyle makes three attacks: one with its bite and two with its\
      \ fists."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16\
      \ (3d6 + 6) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19\
      \ (3d8 + 6) bludgeoning damage."
    "name": "Fist"
  - "desc": "The gargoyle glares at one creature it can see within 60 feet of it.\
      \ The target must make a DC 17 Constitution saving throw. On a failed save,\
      \ the target magically begins turning to stone and is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]].\n\
      \nThe [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]] target must repeat\
      \ the saving throw at the end of its next turn. On a success, the effect ends\
      \ on the target. On a failure, the target is [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]]\
      \ until freed by the [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
      \ spell or other magic."
    "name": "Petrifying Gaze (Recharge 6)"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
