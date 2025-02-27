---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/7
  - monster/size/medium
  - monster/type/humanoid/dwarf
aliases:
  - Fireforge Phalanx Elite
---
# [[5. Mechanics\Bestiary\Humanoid\Fireforge Phalanx Elite (GRIFFONSSADDLEBAG3).md|Fireforge Phalanx Elite]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The dwarves of the Fireforge Phalanx are extremely militant and unwaveringly committed to Direstone's safety. They march in heavy armor and tall shields emblazoned with the gilded mark of Direstone.

```statblock
"name": "Fireforge Phalanx Elite (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "20"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"stats":
- !!int "20"
- !!int "11"
- !!int "19"
- !!int "14"
- !!int "15"
- !!int "14"
"speed": "25 ft."
"saves":
  "Strength": !!int "8"
  "Constitution": !!int "7"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "8"
"damage_resistances": "fire, poison"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Dwarvish"
"cr": "7"
"traits":
- "desc": "In addition to its normal reaction, the elite can take a special reaction\
    \ each round that can only be used for its Protect reaction option."
  "name": "Active Defense"
- "desc": "If the elite moves at least 10 feet straight toward a Large or smaller\
    \ target and then hits it with a melee weapon attack on the same turn, the target\
    \ takes an extra 3 (1d6) bludgeoning damage. If the target is a creature, it must\
    \ succeed on a DC 16 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Charge"
- "desc": "The elite has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]."
  "name": "Dwarven Resilience"
"actions":
- "desc": "The elite makes three attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 8 (1d6 + 5) bludgeoning damage."
  "name": "Shield Bash"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) bludgeoning damage, or 10 (1d10 + 5) bludgeoning damage if used with two\
    \ hands."
  "name": "Warhammer"
- "desc": "The elite lets loose a raucous taunt. Each creature of the elite's choice\
    \ within 30 feet of it that can hear it must make a DC 16 Wisdom saving throw.\
    \ On a failed save, the taunted creature has disadvantage on attack rolls against\
    \ targets other than the elite for 1 minute or until the creature takes damage\
    \ from a creature other than the elite. For each creature affected by the taunt,\
    \ the elite gains a +1 bonus to AC, to a maximum of +5. A taunted creature can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success."
  "name": "Taunt (Recharges After a Short or Long Rest)"
"reactions":
- "desc": "When a creature attacks the elite or another target within 5 feet of it,\
    \ the elite imposes disadvantage on the attack roll. To do so, the elite must\
    \ see the attacker and be wielding a shield. If the attack hits, the damage the\
    \ target takes is reduced by 14 (4d6). If the attack misses, the elite immediately\
    \ makes a shield bash attack against the attacker, provided that the attacker\
    \ is within 5 feet of the elite."
  "name": "Protect"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
