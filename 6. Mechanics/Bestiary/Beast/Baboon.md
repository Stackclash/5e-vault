---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/hill
- monster/size/small
- monster/type/beast
statblock: inline
---
# Baboon
*Source: Monster Manual p. 318, Tales from the Yawning Portal, Tomb of Annihilation, Candlekeep Mysteries, Curse of Strahd, The Wild Beyond the Witchlight, Keys from the Golden Vault*  

```statblock
"name": "Baboon"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "3"
"hit_dice": "1d6"
"stats":
- !!int "8"
- !!int "14"
- !!int "11"
- !!int "4"
- !!int "12"
- !!int "6"
"speed": "walk 30 ft., climb 30 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The baboon has advantage on an attack roll against a creature if at least\
    \ one of the baboon's allies is within 5 feet of the creature and the ally isn't\
    \ [[6. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+1 (+1 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 - 1|avg (1d4 - 1) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "TftYP"
- "ToA"
- "CM"
- "CoS"
- "WBtW"
- "KftGV"
"image": "6. Mechanics/Bestiary/Beast/token/baboon.png"
```
^statblock

## Environment

forest, hill