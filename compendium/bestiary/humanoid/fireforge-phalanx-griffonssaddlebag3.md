---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/3
- monster/size/medium
- monster/type/humanoid/dwarf
aliases: ["Fireforge Phalanx"]
---
# [Fireforge Phalanx](compendium\bestiary\humanoid/fireforge-phalanx-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The dwarves of the Fireforge Phalanx are extremely militant and unwaveringly committed to Direstone's safety. They march in heavy armor and tall shields emblazoned with the gilded mark of Direstone.

```statblock
"name": "Fireforge Phalanx (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "19"
"ac_class": "[splint](compendium/items/splint-armor.md), [shield](compendium/items/shield.md)"
"hp": !!int "76"
"hit_dice": "9d8 + 36"
"stats":
- !!int "17"
- !!int "10"
- !!int "18"
- !!int "12"
- !!int "13"
- !!int "11"
"speed": "25 ft."
"damage_resistances": "fire, poison"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Dwarvish"
"cr": "3"
"traits":
- "desc": "The dwarf has advantage on saving throws against being [poisoned](/compendium/rules/conditions.md#Poisoned)."
  "name": "Dwarven Resilience"
"actions":
- "desc": "The dwarf makes two attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."
  "name": "Shield Bash"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two\
    \ hands."
  "name": "Warhammer"
"reactions":
- "desc": "When a creature attacks a target other than the elite that is within 5\
    \ feet of it, the elite imposes disadvantage on the attack roll. To do so, the\
    \ elite must see the attacker and be wielding a shield. If the attack hits, the\
    \ damage the target takes is reduced by 7 (2d6)."
  "name": "Protect"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```