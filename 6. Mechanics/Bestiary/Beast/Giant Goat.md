---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/large
- monster/type/beast
statblock: inline
---
# Giant Goat
*Source: Monster Manual p. 326, Storm King's Thunder, Storm Lord's Wrath, Icewind Dale: Rime of the Frostmaiden, Curse of Strahd, The Wild Beyond the Witchlight*  

```statblock
"name": "Giant Goat"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "17"
- !!int "11"
- !!int "12"
- !!int "3"
- !!int "12"
- !!int "6"
"speed": "walk 40 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the goat moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 5 (dice: 2d4|avg\
    \ (2d4)) bludgeoning damage. If the target is a creature, it must succeed on\
    \ a DC 13 Strength saving throw or be knocked [[6. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Charge"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The goat has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [[6. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Sure-Footed"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 3|avg (2d4 + 3) bludgeoning damage."
  "name": "Ram"
"source":
- "MM"
- "SKT"
- "SLW"
- "IDRotF"
- "CoS"
- "WBtW"
"image": "6. Mechanics/Bestiary/Beast/token/giant-goat.png"
```
^statblock

## Environment

mountain, grassland, hill