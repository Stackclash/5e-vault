---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/large
- monster/type/beast
statblock: inline
---
# Giant Eagle
*Source: Monster Manual p. 324, Ghosts of Saltmarsh, The Wild Beyond the Witchlight*  

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
"speed": "walk 10 ft., fly 80 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Giant Eagle, understands Common and Auran but can't speak them"
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The eagle has advantage on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The eagle makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing damage."
  "name": "Beak"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) slashing damage."
  "name": "Talons"
"source":
- "MM"
- "GoS"
- "WBtW"
"image": "6. Mechanics/Bestiary/Beast/token/giant-eagle.png"
```
^statblock

## Environment

mountain, grassland, hill, coastal