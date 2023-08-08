---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/grassland
- monster/size/large
- monster/type/beast
statblock: inline
---
# Giant Vulture
*Source: Monster Manual p. 329, Princes of the Apocalypse, Storm King's Thunder, Waterdeep: Dragon Heist, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Critical Role: Call of the Netherdeep*  

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
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": "understands Common but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vulture has advantage on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on sight or smell."
  "name": "Keen Sight and Smell"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vulture has advantage on an attack roll against a creature if at least\
    \ one of the vulture's allies is within 5 feet of the creature and the ally isn't\
    \ [[6. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vulture makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 2|avg (2d4 + 2) piercing damage."
  "name": "Beak"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 2|avg (2d6 + 2) slashing damage."
  "name": "Talons"
"source":
- "MM"
- "PotA"
- "SKT"
- "WDH"
- "MOT"
- "IDRotF"
- "CRCotN"
"image": "6. Mechanics/Bestiary/Beast/token/giant-vulture.png"
```
^statblock

## Environment

grassland, desert