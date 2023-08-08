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
# Giant Badger
*Source: Monster Manual p. 323, Waterdeep: Dungeon of the Mad Mage, Journeys through the Radiant Citadel*  

```statblock
"name": "Giant Badger"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "13"
"hit_dice": "2d8 + 4"
"stats":
- !!int "13"
- !!int "10"
- !!int "15"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 30 ft., burrow 10 ft."
"senses": "darkvision 30 ft., passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The badger has advantage on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The badger makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 1|avg (2d4 + 1) slashing damage."
  "name": "Claws"
"source":
- "MM"
- "WDMM"
- "JttRC"
"image": "6. Mechanics/Bestiary/Beast/token/giant-badger.png"
```
^statblock

## Environment

forest