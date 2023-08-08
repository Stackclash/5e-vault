---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/medium
- monster/type/beast
statblock: inline
---
# Panther
*Source: Monster Manual p. 333, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist*  

```statblock
"name": "Panther"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "14"
- !!int "15"
- !!int "10"
- !!int "3"
- !!int "14"
- !!int "7"
"speed": "walk 50 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The panther has advantage on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the panther moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 12 Strength saving throw or be knocked [[6. Mechanics/Rules/Conditions.md#prone|prone]].\
    \ If the target is [[6. Mechanics/Rules/Conditions.md#prone|prone]], the panther\
    \ can make one bite attack against it as a bonus action."
  "name": "Pounce"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) slashing damage."
  "name": "Claw"
"source":
- "MM"
- "TftYP"
- "ToA"
- "WDH"
"image": "6. Mechanics/Bestiary/Beast/token/panther.png"
```
^statblock

## Environment

grassland, forest, hill