---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/size/medium
- monster/type/beast
statblock: inline
---
# Black Bear
*Source: Monster Manual p. 318, Princes of the Apocalypse, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Infernal Machine Rebuild*  

```statblock
"name": "Black Bear"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"stats":
- !!int "15"
- !!int "10"
- !!int "14"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft., climb 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bear has advantage on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bear makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 2|avg (2d4 + 2) slashing damage."
  "name": "Claws"
"source":
- "MM"
- "PotA"
- "SKT"
- "WDMM"
- "GoS"
- "IMR"
"image": "6. Mechanics/Bestiary/Beast/token/black-bear.png"
```
^statblock

## Environment

forest