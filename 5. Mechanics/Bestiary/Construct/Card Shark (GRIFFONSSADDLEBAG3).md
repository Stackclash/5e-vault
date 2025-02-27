---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/3
  - monster/size/medium
  - monster/type/construct
aliases:
  - Card Shark
---
# [[5. Mechanics\Bestiary\Construct\Card Shark (GRIFFONSSADDLEBAG3).md|Card Shark]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

When animated decks of cards collect in large enough groups, they sometimes form an even larger, shark-like form. These cards fly in tandem and work together under a shared consciousness like a school of fish. In this form, the card shark can fling cards like a normal animated deck, but also bite down and viciously slice its prey with its hundreds of blade-like cards.

```statblock
"name": "Card Shark (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "9"
- !!int "18"
- !!int "10"
- !!int "3"
- !!int "10"
- !!int "1"
"speed": "0 ft., fly 50 ft. (hover)"
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "3"
"traits":
- "desc": "The card shark is incapacitated while in the area of an [[5. Mechanics/Spells/Antimagic Field.md|antimagic field]].\
    \ If targeted by [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], the card shark\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall unconscious for 1 minute."
  "name": "Antimagic Susceptibility"
- "desc": "While the card shark remains motionless and isn't flying, it is indistinguishable\
    \ from a normal pile of scattered playing cards."
  "name": "False Appearance"
- "desc": "The card shark can occupy another creature's space and vice versa, and\
    \ the card shark can move through any opening large enough for a Tiny playing\
    \ card. The card shark can't regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "The card shark makes four fling card attacks. If it has half of its hit\
    \ points or fewer, it instead makes two fling card attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 27 (6d8)\
    \ piercing damage, or 13 (3d8) piercing damage if the card shark has half of its\
    \ hit points or fewer."
  "name": "Bite"
- "desc": "Ranged Weapon Attack: +6 to hit, range 30/120 ft., one target. Hit:\
    \ 6 (1d4 + 4) slashing damage."
  "name": "Fling Card"
- "desc": "The card shark hurls a flurry of cards in a 60-foot line that is 5 feet\
    \ wide. Each creature in the line must make a DC 14 Dexterity saving throw, taking\
    \ 22 (4d10) slashing damage on a failed save, or half as much damage on a successful\
    \ one. If the card shark has half its hit points or fewer, each creature instead\
    \ takes 11 (2d10) slashing damage on a failed save, or half as much damage on\
    \ a successful one."
  "name": "Card Volley (1/Day)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
