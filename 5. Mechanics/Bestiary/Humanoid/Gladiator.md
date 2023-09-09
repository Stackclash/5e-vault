---
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Gladiator"]
---
# Gladiator
*Source: Monster Manual p. 346, Curse of Strahd. Available in the SRD.*  

Gladiators battle for the entertainment of raucous crowds. Some gladiators are brutal pit fighters who treat each match as a life-or-death struggle, while others are professional duelists who command huge fees but rarely fight to the death.

```statblock
"name": "Gladiator"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "15"
"speed": "30 ft."
"saves":
  "Dexterity": "+5"
  "Strength": "+7"
  "Constitution": "+6"
"skillsaves":
  "Intimidation": "+5"
  "Athletics": "+10"
"senses": "passive Perception 11"
"languages": "any one language (usually Common)"
"cr": "5"
"traits":
- "desc": "The gladiator has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]."
  "name": "Brave"
- "desc": "A melee weapon deals one extra die of its damage when the gladiator hits\
    \ with it (included in the attack)."
  "name": "Brute"
"actions":
- "desc": "The gladiator makes three melee attacks or two ranged attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft.\
    \ and range 20/60 ft., one target. Hit: 11 (dice: 2d6 + 4|avg (2d6 + 4))\
    \ piercing damage, or 13 (dice: 2d8 + 4|avg (2d8 + 4)) piercing damage if\
    \ used with two hands to make a melee attack."
  "name": "Spear"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one creature.\
    \ Hit: 9 (dice: 2d4 + 4|avg (2d4 + 4)) bludgeoning damage. If the target\
    \ is a Medium or smaller creature, it must succeed on a DC 15 Strength saving\
    \ throw or be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Shield Bash"
"reactions":
- "desc": "The gladiator adds 3 to its AC against one melee attack that would hit\
    \ it. To do so, the gladiator must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MM"
- "CoS"
- "RoT"
- "SKT"
- "ToA"
- "GoS"
- "DIP"
- "SLW"
- "BGDIA"
- "EGW"
- "MOT"
- "IDRotF"
- "CM"
- "CRCotN"
- "KftGV"
"image": "compendium/bestiary/humanoid/token/gladiator.png"
```
^statblock

## Environment

urban