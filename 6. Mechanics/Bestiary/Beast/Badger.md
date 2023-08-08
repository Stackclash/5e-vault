---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/size/tiny
- monster/type/beast
statblock: inline
---
# Badger
*Source: Monster Manual p. 318, The Wild Beyond the Witchlight*  

```statblock
"name": "Badger"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "3"
"hit_dice": "1d4 + 1"
"stats":
- !!int "4"
- !!int "11"
- !!int "12"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 20 ft., burrow 5 ft."
"senses": "darkvision 30 ft., passive Perception 11"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The badger has advantage on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one target.\
    \ Hit: 1 piercing damage."
  "name": "Bite"
"source":
- "MM"
- "WBtW"
"image": "6. Mechanics/Bestiary/Beast/token/badger.png"
```
^statblock

## Environment

forest