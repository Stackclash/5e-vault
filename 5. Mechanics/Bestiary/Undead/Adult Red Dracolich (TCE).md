---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tce
- monster/cr/17
- monster/size/huge
- monster/type/undead
statblock: inline
aliases: ["Adult Red Dracolich"]
---
# [Adult Red Dracolich](compendium\bestiary\undead/adult-red-dracolich-tce.md)
*Source: Tasha's Cauldron of Everything p. 137, Derived from *  

```statblock
"name": "Adult Red Dracolich (TCE)"
"size": "Huge"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "256"
"hit_dice": "19d12 + 133"
"stats":
- !!int "27"
- !!int "10"
- !!int "25"
- !!int "16"
- !!int "13"
- !!int "21"
"speed": "40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "13"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "13"
"damage_resistances": "necrotic"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]]"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Common, Draconic"
"cr": "17"
"traits":
- "desc": "If the dracolich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The dracolich has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The dracolich can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d10 + 8|avg (2d10 + 8) piercing damage plus dice: 2d6|avg\
    \ (2d6) fire damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 8|avg (2d6 + 8) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14 to hit), reach 15 ft., one target.\
    \ Hit: dice: 2d8 + 8|avg (2d8 + 8) bludgeoning damage."
  "name": "Tail"
- "desc": "Each creature of the dracolich's choice that is within 120 feet of the\
    \ dracolich and aware of it must succeed on a DC 19 Wisdom saving throw or become\
    \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]] for 1 minute. A creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success. If a creature's saving throw is successful or the effect\
    \ ends for it, the creature is immune to the dracolich's Frightful Presence for\
    \ the next 24 hours."
  "name": "Frightful Presence"
- "desc": "The dracolich exhales fire in a 60-foot cone. Each creature in that area\
    \ must make a DC 21 Dexterity saving throw, taking dice: 18d6|avg (18d6) fire\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"legendary_actions":
- "desc": "The dracolich makes a Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ check."
  "name": "Detect"
- "desc": "The dracolich makes a tail attack."
  "name": "Tail Attack"
- "desc": "The dracolich beats its wings. Each creature within 10 feet of the dracolich\
    \ must succeed on a DC 22 Dexterity saving throw or take dice: 2d6 + 8|avg (2d6\
    \ + 8) bludgeoning damage and be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]].\
    \ The dracolich can then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "TCE"
"image": "compendium/bestiary/undead/token/adult-red-dracolich.png"
```
^statblock