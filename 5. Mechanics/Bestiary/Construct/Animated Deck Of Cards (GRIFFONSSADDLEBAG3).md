---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: null
size: Tiny
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/1-2
  - monster/size/tiny
  - monster/type/construct
aliases:
  - Animated Deck of Cards
---
# [[5. Mechanics/Bestiary/Construct/Animated Deck Of Cards (GRIFFONSSADDLEBAG3).md|Animated Deck of Cards]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Like other animated constructs, the animated deck of cards exists seemingly only to surprise unknowing creatures. Swirling around a central deck of cards, these sharp, flying cards fling themselves haphazardly toward targets to inflict wicked paper cuts and ruin game nights.

```statblock
"name": "Animated Deck Of Cards (GRIFFONSSADDLEBAG3)"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "10"
"hit_dice": "4d4"
"stats":
- !!int "5"
- !!int "18"
- !!int "10"
- !!int "3"
- !!int "5"
- !!int "1"
"speed": "0 ft., fly 50 ft. (hover)"
"saves":
  "Dexterity": !!int "5"
"damage_immunities": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 7"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The deck of cards is incapacitated while in the area of an [[5. Mechanics/Spells/Antimagic Field.md|antimagic field]].\
    \ If targeted by [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], the deck of\
    \ cards must succeed on a Constitution saving throw against the caster's spell\
    \ save DC or fall unconscious for 1 minute."
  "name": "Antimagic Susceptibility"
- "desc": "While the deck of cards remains motionless and isn't flying, it is indistinguishable\
    \ from a normal deck of cards."
  "name": "False Appearance"
"actions":
- "desc": "Ranged Weapon Attack: +6 to hit, range 30/120 ft., one target. Hit:\
    \ 6 (1d4 + 4) slashing damage."
  "name": "Fling Card"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
