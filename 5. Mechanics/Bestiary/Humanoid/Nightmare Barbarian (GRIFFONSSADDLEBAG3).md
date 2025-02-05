---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/4
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Nightmare Barbarian
---
# [[5. Mechanics\Bestiary\Humanoid\Nightmare Barbarian (GRIFFONSSADDLEBAG3).md|Nightmare Barbarian]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Barbarians that are driven by their innermost turmoil as much as they are their anger. Using bizarre magic pulled seemingly straight from The Grephearon, these brutal warriors are capable of striking bone-chilling fear into those whom they stalk from the shadows.

```statblock
"name": "Nightmare Barbarian (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "[[5. Mechanics/Items/Hide Armor.md|hide armor]]"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "17"
- !!int "16"
- !!int "16"
- !!int "9"
- !!int "11"
- !!int "14"
"speed": "40 ft."
"saves":
  "Dexterity": !!int "5"
"skillsaves":
  "Intimidation": !!int "4"
"senses": "passive Perception 10"
"languages": "Common plus one other language"
"cr": "4"
"traits":
- "desc": "As a bonus action, or as part of the bonus action the barbarian uses to\
    \ enter a rage, it can teleport up to 20 feet to an unoccupied space it can see\
    \ that is within 5 feet of another creature. That creature must succeed on a DC\
    \ 14 Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ of the barbarian until the start of the barbarian's next turn. A creature [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ in this way can speak only falteringly and can't make opportunity attacks against\
    \ the barbarian, and the barbarian has advantage on attack rolls against the creature."
  "name": "Apparition (Recharge 5-6)"
- "desc": "As a bonus action, the barbarian can enter a rage that lasts for 1 minute.\
    \ The rage ends early if the barbarian is knocked [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]\
    \ or if its turn ends and it hasn't attacked a hostile creature or taken damage\
    \ since its last turn. While raging, the barbarian gains the following benefits:\
    \ y It has advantage on Strength checks and Strength saving throws. y It gains\
    \ a +2 bonus to the damage roll of any melee weapon attacks it makes (included\
    \ in the attack). y The first creature it hits on each of its turns with a weapon\
    \ attack takes an extra 4 (1d8) psychic damage. y It has resistance to bludgeoning,\
    \ piercing, and slashing damage."
  "name": "Rage (3/Day)"
- "desc": "At the start of its turn, the barbarian can gain advantage on all melee\
    \ weapon attack rolls during that turn, but attack rolls against it have advantage\
    \ until the start of its next turn."
  "name": "Reckless"
"actions":
- "desc": "The barbarian makes two attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, or 12 (2d6 + 5) bludgeoning damage while raging."
  "name": "Maul"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
