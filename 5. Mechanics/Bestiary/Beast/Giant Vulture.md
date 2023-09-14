---
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/grassland
- monster/size/large
- monster/type/beast
aliases: ["Giant Vulture"]
---
# Giant Vulture
*Source: Monster Manual p. 329. Available in the SRD and the Basic Rules.*  

A giant vulture has advanced intelligence and a malevolent bent. Unlike its smaller kin, it will attack a wounded creature to hasten its end. Giant vultures have been known to haunt a thirsty, starving creature for days to enjoy its suffering.

```statblock
"name": "Giant Vulture"
"size": "Large"
"type": "beast"
"alignment": "Neutral Evil"
"ac": !!int "10"
"hp": !!int "22"
"hit_dice": "3d10 + 6"
"stats":
- !!int "15"
- !!int "10"
- !!int "15"
- !!int "6"
- !!int "12"
- !!int "7"
"speed": "10 ft., fly 60 ft."
"skillsaves":
  "Perception": "+3"
"senses": "passive Perception 13"
"languages": "understands Common but can't speak"
"cr": "1"
"traits":
- "desc": "The vulture has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on sight or smell."
  "name": "Keen Sight and Smell"
- "desc": "The vulture has advantage on an attack roll against a creature if at least\
    \ one of the vulture's allies is within 5 feet of the creature and the ally isn't\
    \ [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- "desc": "The vulture makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: 7 (dice: 2d4 + 2|avg (2d4 + 2)) piercing damage."
  "name": "Beak"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: 9 (dice: 2d6 + 2|avg (2d6 + 2)) slashing damage."
  "name": "Talons"
"source":
- "MM"
- "PotA"
- "SKT"
- "WDH"
- "MOT"
- "IDRotF"
- "CRCotN"
"image": "compendium/bestiary/beast/token/giant-vulture.png"
```
^statblock

## Environment

grassland, desert