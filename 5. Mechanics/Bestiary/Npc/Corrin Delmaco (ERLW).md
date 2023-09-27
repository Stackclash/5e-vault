---
cssclass: json5e-monster
tags:
- compendium/src/5e/erlw
- monster/size/small
- monster/type/humanoid/stout-halfling
aliases: ["Corrin Delmaco"]
---
# Corrin Delmaco
*Source: Eberron: Rising from the Last War p. 271, Derived from *  

```statblock
"name": "Corrin Delmaco"
"size": "Small"
"type": "humanoid"
"subtype": "Stout halfling"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "21"
"hit_dice": "6d6"
"stats":
- !!int "10"
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "25 ft."
"skillsaves":
  "Sleight of Hand": "+4"
  "Deception": "+5"
  "Stealth": "+4"
  "Investigation": "+5"
  "Insight": "+4"
  "Perception": "+6"
  "Persuasion": "+5"
"senses": "passive Perception 16"
"languages": "any two languages, Halfling"
"cr": "1"
"traits":
- "desc": "On each of its turns, Corrin can use a bonus action to take the Dash, Disengage,\
    \ or Hide action."
  "name": "Cunning Action"
- "desc": "Corrin deals an extra dice: 2d6|avg (2d6) damage when it hits a target\
    \ with a weapon attack and has advantage on the attack roll, or when the target\
    \ is within 5 feet of an ally of Corrin that isn't [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ and Corrin doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- "desc": "Corrin makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), range 30/120 ft., one\
    \ target. Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Hand Crossbow"
"source":
- "ERLW"
"image": "compendium/bestiary/npc/token/corrin-delmaco.png"
```
^statblock