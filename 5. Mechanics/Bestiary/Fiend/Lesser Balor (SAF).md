---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/10
- monster/size/large
- monster/type/fiend/demon
statblock: inline
aliases: ["Lesser Balor"]
---
# [Lesser Balor](compendium\bestiary\fiend/lesser-balor-saf.md)
*Source: Strongholds and Followers p. 153*  

```statblock
"name": "Lesser Balor (SaF)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"stats":
- !!int "20"
- !!int "14"
- !!int "18"
- !!int "16"
- !!int "15"
- !!int "18"
"speed": "40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "6"
  "Strength": !!int "9"
  "Constitution": !!int "8"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 60 ft., passive Perception 13"
"languages": "Abyssal, telepathy 60 ft."
"cr": "10"
"traits":
- "desc": "When the lesser balor dies, it explodes. Each creature within 20 feet of\
    \ it must make a DC 16 Dexterity saving throw. On a failed save, a creature takes\
    \ dice: 10d6|avg (10d6) fire damage, or half as much damage on a successful\
    \ one. The explosion destroys the lesser balor's weapons."
  "name": "Fiery End"
- "desc": "At the start of each of the lesser balor's turns, each creature within\
    \ 5 feet of it takes dice: 2d6|avg (2d6) fire damage. A creature that touches\
    \ the lesser balor or hits it with a melee attack while within 5 feet of it takes\
    \ dice: 2d6|avg (2d6) fire damage."
  "name": "Singeing Aura"
- "desc": "The lesser balor has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "The lesser balor's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The lesser balor makes one attack with its longsword and one attack with\
    \ its whip."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d8 + 5|avg (2d8 + 5) slashing damage plus dice: 2d8|avg\
    \ (2d8) lightning damage. If the lesser balor scores a critical hit, it rolls\
    \ damage dice three times, instead of twice."
  "name": "Longsword"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 30 ft., one target.\
    \ Hit: dice: 2d6 + 5|avg (2d6 + 5) slashing damage plus dice: 2d6|avg\
    \ (2d6) fire damage, and the target must succeed on a DC 16 Strength saving\
    \ throw or be pulled up to 15 feet toward the lesser balor."
  "name": "Whip"
"source":
- "SaF"
```
^statblock