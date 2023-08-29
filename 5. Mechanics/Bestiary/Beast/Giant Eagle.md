---
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/large
- monster/type/beast
aliases: ["Giant Eagle"]
---
# Giant Eagle
*Source: Monster Manual p. 324. Available in the SRD and the Basic Rules.*  

A giant eagle is a noble creature that speaks its own language and understands speech in the Common tongue. A mated pair of giant eagles typically has up to four eggs or young in their nest (treat the young as normal eagles).

```statblock
"name": "Giant Eagle"
"size": "Large"
"type": "beast"
"alignment": "Neutral Good"
"ac": !!int "13"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"stats":
- !!int "16"
- !!int "17"
- !!int "13"
- !!int "8"
- !!int "14"
- !!int "10"
"speed": "10 ft., fly 80 ft."
"skillsaves":
  "Perception": "+4"
"senses": "passive Perception 14"
"languages": "Giant Eagle, understands Common and Auran but can't speak them"
"cr": "1"
"traits":
- "desc": "The eagle has advantage on Wisdom ([[\5. Mechanics\Rules\Skills.md#Perception|Perception]])\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- "desc": "The eagle makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: 6 (dice: 1d6 + 3|avg (1d6 + 3)) piercing damage."
  "name": "Beak"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: 10 (dice: 2d6 + 3|avg (2d6 + 3)) slashing damage."
  "name": "Talons"
"source":
- "MM"
- "GoS"
- "WBtW"
"image": "compendium/bestiary/beast/token/giant-eagle.png"
```
^statblock

## Environment

mountain, grassland, hill, coastal