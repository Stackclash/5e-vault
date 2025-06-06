---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: null
size: Tiny
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/1-2
  - monster/size/tiny
  - monster/type/elemental
aliases:
  - Gargoyle Impling
---
# [[5. Mechanics\Bestiary\Elemental\Gargoyle Impling (GRIFFONSSADDLEBAG3).md|Gargoyle Impling]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Gargoyles that have survived for centuries become ancient, all-knowing statues. Some adventurers turn to such gargoyles, despite the risks, in hopes of gleaning information from their wisdom and lasting memories. Their gaze can even create new statues by petrifying living creatures.

Conversely, small statuettes posessed by the same sentience granted by the Elemental Plane of Earth are called gargoyle implings. These stone pranksters are sometimes employed as chaotic familiars of warlocks, who enact no shortage of mischief together.

```statblock
"name": "Gargoyle Impling (GRIFFONSSADDLEBAG3)"
"size": "Tiny"
"type": "elemental"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "13"
"hit_dice": "3d4 + 6"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "13"
  - !!int "15"
  - !!int "8"
  - !!int "12"
  - !!int "7"
"speed": "20 ft., fly 40 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't adamantine"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Terran"
"cr": "1/2"
"traits":
  - "desc": "While the gargoyle remains motionless, it is indistinguishable from an\
      \ inanimate statue."
    "name": "False Appearance"
  - "desc": "The gargoyle has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
      \ + 3) piercing damage."
    "name": "Bite"
"reactions":
  - "desc": "When a creature within 60 feet of the gargoyle deals damage to the gargoyle\
      \ or one of its allies it can see, the gargoyle weaves a magical insult at the\
      \ creature. If the target can hear the gargoyle (though it need not understand\
      \ the gargoyle), it must make a DC 12 Wisdom saving throw. On a failed save,\
      \ the next time the target makes an ability check, attack roll, or saving throw\
      \ before the end of its next turn, it must roll a d6 and subtract the number\
      \ rolled from the result."
    "name": "Mocking Rebuke (Recharges After a Short or Long Rest)"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
