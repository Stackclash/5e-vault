---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: null
size: Tiny
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/1-4
  - monster/size/tiny
  - monster/type/monstrosity
aliases:
  - Jackalope
---
# [[5. Mechanics\Bestiary\Monstrosity\Jackalope (GRIFFONSSADDLEBAG3).md|Jackalope]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

These antlered rabbits appear often in folktales and storybooks, but the reality is much more grim than those stories. As prey animals, jackalopes normally survive by hiding and running from predators. But in the Safire Wood, these cunning creatures have learned to keep larger predators at bay by leading naive travelers into their paths, to be eaten in their stead. As such, the jackalopes in this region know the safest and most dangerous areas and routes—but they are far more likely to lead to death unless their trust can be assured.

```statblock
"name": "Jackalope (GRIFFONSSADDLEBAG3)"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "7"
"hit_dice": "3d4"
"modifier": !!int "3"
"stats":
  - !!int "5"
  - !!int "17"
  - !!int "10"
  - !!int "7"
  - !!int "12"
  - !!int "6"
"speed": "30 ft., burrow 20 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
"senses": "passive Perception 13"
"languages": "Common, Sylvan Challenge 1/4 (50 XP)"
"cr": "1/4"
"traits":
  - "desc": "The jackalope has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on hearing or smell."
    "name": "Keen Hearing and Smell"
  - "desc": "The jackalope can take the Disengage or Hide action as a bonus action\
      \ on each of its turns."
    "name": "Nimble Escape"
  - "desc": "The jackalope's long jump is up to 10 feet and its high jump is up to\
      \ 5 feet, with or without a running start."
    "name": "Standing Leap"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
      \ + 3) bludgeoning damage."
    "name": "Ram"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
