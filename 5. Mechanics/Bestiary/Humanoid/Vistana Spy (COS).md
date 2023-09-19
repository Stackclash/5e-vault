---
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Vistana Spy"]
---
# Vistana Spy
*Source: Curse of Strahd p. 28, Derived from *  

```statblock
"name": "Vistana Spy"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "10"
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Sleight of Hand": "+4"
  "Deception": "+5"
  "Stealth": "+4"
  "Investigation": "+5"
  "Insight": "+4"
  "Perception": "+6"
  "Persuasion": "+5"
"senses": "passive Perception 16"
"languages": "any two languages"
"cr": "1"
"traits":
- "desc": "On each of its turns, the spy can use a bonus action to take the Dash,\
    \ Disengage, or Hide action."
  "name": "Cunning Action"
- "desc": "The spy deals an extra dice: 2d6|avg (2d6) damage when it hits a target\
    \ with a weapon attack and has advantage on the attack roll, or when the target\
    \ is within 5 feet of an ally of the spy that isn't [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ and the spy doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- "desc": "The spy makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), range 30/120 ft., one\
    \ target. Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Hand Crossbow"
"source":
- "CoS"
"image": "compendium/bestiary/humanoid/token/vistana-spy.png"
```
^statblock