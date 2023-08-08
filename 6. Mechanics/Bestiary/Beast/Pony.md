---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/urban
- monster/size/medium
- monster/type/beast
statblock: inline
---
# Pony
*Source: Monster Manual p. 335, Storm King's Thunder, The Wild Beyond the Witchlight*  

```statblock
"name": "Pony"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "11"
- !!int "7"
"speed": "walk 40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/8"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 2|avg (2d4 + 2) bludgeoning damage."
  "name": "Hooves"
"source":
- "MM"
- "SKT"
- "WBtW"
"image": "6. Mechanics/Bestiary/Beast/token/pony.png"
```
^statblock

## Environment

urban