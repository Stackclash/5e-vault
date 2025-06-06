---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: null
size: Huge
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/7
  - monster/size/huge
  - monster/type/construct
aliases:
  - Wicked Wagon
---
# [[5. Mechanics\Bestiary\Construct\Wicked Wagon (GRIFFONSSADDLEBAG3).md|Wicked Wagon]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

A favored and bewitched ally of hags, wicked wagons are animated carts with sickly demiplanes inside that hold captured souls. These souls can then be used by its hag allies to transform their appearances, taking on the forms and basic knowledge of the souls captured within.

```statblock
"name": "Wicked Wagon (GRIFFONSSADDLEBAG3)"
"size": "Huge"
"type": "construct"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "104"
"hit_dice": "11d12 + 33"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "16"
  - !!int "5"
  - !!int "13"
  - !!int "7"
"speed": "40 ft."
"saves":
  - "intelligence": "+0"
  - "wisdom": "+4"
  - "charisma": "+1"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+1"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 14"
"languages": "understands Common but can't speak"
"cr": "7"
"traits":
  - "desc": "The wagon counts as a hag for the purpose of forming a coven with two\
      \ other hags."
    "name": "Coven Cart"
  - "desc": "The wagon has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "If the wagon or one of its allies riding in it kills a humanoid, that\
      \ creature's soul becomes trapped in the demiplane inside the wagon. A trapped\
      \ soul remains in the demiplane until the wagon is destroyed, or until it is\
      \ targeted by a [[5. Mechanics/Spells/Dispel Evil And Good.md|dispel evil and good]]\
      \ spell or similar magic, releasing all trapped souls.\n\nWhile a creature's\
      \ soul is trapped in the demiplane, a hag riding in the wagon can use an action\
      \ to magically transform, assuming that creature's appearance. While transformed,\
      \ the hag gains access to enough information that it can reliably pass itself\
      \ off as that creature to a casual acquaintance of the creature.\n\nA creature\
      \ can discern the hag's true nature by succeeding on a Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]])\
      \ check contested by the hag's Charisma ([[/5. Mechanics/Rules/Skills.md#Deception|Deception]])\
      \ check. The hag reverts to its normal form if it is ever more than 1 mile away\
      \ from the wagon."
    "name": "Soul Capture"
  - "desc": "The wagon can use a bonus action to assume its Gargantuan spire form,\
      \ standing on chicken-like legs and raising the wagon 30 feet into the air.\
      \ It stays in this form until it uses a bonus action to revert to its wagon\
      \ form. Its statistics, other than its size, are the same in each form."
    "name": "Witch's Spire"
"actions":
  - "desc": "The wagon makes two snatch attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 15 ft., one target. Hit: 18\
      \ (2d12 + 5) bludgeoning damage. If the target is a Large or smaller creature,\
      \ it is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] (escape DC 15).\
      \ Until this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]].\
      \ The wagon has two arms, each of which can grapple only one target. A humanoid\
      \ reduced to 0 hit points while [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ in this way dies and is subjected to the wagon's Soul Capture trait."
    "name": "Snatch (Spire Form Only)"
  - "desc": "The wagon moves up to its speed in a straight line.\n\nDuring this movement,\
      \ it can move through the space of any creature or object that is Large or smaller,\
      \ and it doesn't provoke opportunity attacks. Each target in its path must make\
      \ a DC 16 Dexterity saving throw. On a failed save, a target takes 19 (3d12)\
      \ bludgeoning damage and is knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
      \ On a successful save, a target takes half as much damage and isn't knocked\
      \ [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Overrun"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
