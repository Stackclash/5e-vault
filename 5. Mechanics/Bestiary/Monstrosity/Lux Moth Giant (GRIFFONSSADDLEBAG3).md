---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Small
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/1
  - monster/size/small
  - monster/type/monstrosity
aliases:
  - 'Lux Moth, Giant'
---
# [[5. Mechanics\Bestiary\Monstrosity\Lux Moth Giant (GRIFFONSSADDLEBAG3).md|Lux Moth, Giant]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

This mighty insect is the amalgamation of bioluminescence, hypnotic illusions, and mesmerizing spores and pheromones. Most sightings are from afar given the protective nature of the other lux moths near their queen, but by all accounts this large specimen has adapted marvelously in proximity to mirrorlight. They primarily use their abilities for defense from would-be predators, but have also been observed protecting mirrorlight deposits.

```statblock
"name": "Lux Moth, Giant (GriffonsSaddlebag3)"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "4d6 + 8"
"modifier": !!int "2"
"stats":
  - !!int "5"
  - !!int "14"
  - !!int "14"
  - !!int "2"
  - !!int "6"
  - !!int "1"
"speed": "5 ft., fly 30 ft. (hover)"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+0"
"senses": "blindsight 10 ft., darkvision 120 ft., passive Perception 10"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The moth doesn't provoke opportunity attacks when it flies out of an\
      \ enemy's reach."
    "name": "Flyby"
  - "desc": "The moth sheds dim light in a 15-foot radius."
    "name": "Illumination"
  - "desc": "Any non-moth creature that moves within 10 feet of the moth or starts\
      \ its turn there must make a DC 12 Constitution saving throw or take 7 (2d6)\
      \ poison damage and be [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
      \ for 1 minute. If a creature that fails this save is already [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
      \ by this effect, it is also [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
      \ until the [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] condition ends.\
      \ A [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] creature can repeat\
      \ its save at the end of each of its turns, ending the condition on a success."
    "name": "Wing Powder"
"actions":
  - "desc": "The moth makes two attacks with its claws."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
      \ + 2) slashing damage."
    "name": "Claws"
  - "desc": "The moth bristles its wings, causing the vibrating patterns to fog the\
      \ mind of one creature the moth can see within 30 feet that can see it. The\
      \ target creature must make a DC 12 Wisdom saving throw or be [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
      \ until the end of the moth's next turn.\n\nCreatures that can't be [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ are immune to this effect."
    "name": "Hypnotizing Wings (Recharge 5-6)"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
