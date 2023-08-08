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
# Giant Weasel
*Source: Monster Manual p. 329, Tales from the Yawning Portal, Ghosts of Saltmarsh*  

```statblock
"name": "Giant Weasel"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "16"
- !!int "10"
- !!int "4"
- !!int "12"
- !!int "5"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The weasel has advantage on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 3|avg (1d4 + 3) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "TftYP"
- "GoS"
"image": "6. Mechanics/Bestiary/Beast/token/giant-weasel.png"
```
^statblock

## Environment

grassland, forest, hill