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
  - monster/type/fey
aliases:
  - Greille
---
# [[5. Mechanics\Bestiary\Fey\Greille (GRIFFONSSADDLEBAG3).md|Greille]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Commonly called pilfurrs, these chipmunk-like fey are a frequent nuisance to travelers and shoppers. Greille are incredibly adept at sneaking into purses and bags, stuffing whatever coins and small objects they can find into their expansive cheeks before running off again. Their burrows can contain anything from gold and gems to worthless collections of junk. Some burrows in Breezeport are already known to Duvra, having spent time disguised as a greille himself, and he'll help himself to anything of value he finds there to add to his own hoard.

```statblock
"name": "Greille (GRIFFONSSADDLEBAG3)"
"size": "Tiny"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"hp": !!int "21"
"hit_dice": "6d4 + 6"
"modifier": !!int "3"
"stats":
  - !!int "7"
  - !!int "16"
  - !!int "12"
  - !!int "9"
  - !!int "13"
  - !!int "10"
"speed": "30 ft., climb 30 ft."
"saves":
  - "dexterity": "+5"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Sleight%20of%20Hand|Sleight of Hand]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+7"
"senses": "passive Perception 11"
"languages": "understands Common and Sylvan but can't speak"
"cr": "1/2"
"traits":
  - "desc": "The inside of the greille's cheeks are connected to an extradimensional\
      \ space. This extradimensional space can hold up to 50 pounds of Tiny objects,\
      \ not exceeding a volume of 2 cubic feet. The greille can magically retrieve\
      \ any object it chooses from the extradimensional space as a bonus action on\
      \ its turn. If the greille dies, the contents of its extradimensional space\
      \ spill forth from its body in the nearest unoccupied space to it."
    "name": "Cheeky Thief"
  - "desc": "The greille has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The greille can take the Disengage or Hide action as a bonus action on\
      \ each of its turns."
    "name": "Nimble Escape"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
      \ + 3) piercing damage."
    "name": "Bite"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
