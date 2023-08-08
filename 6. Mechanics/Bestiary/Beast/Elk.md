---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/large
- monster/type/beast
statblock: inline
---
# Elk
*Source: Monster Manual p. 322, Hoard of the Dragon Queen, Princes of the Apocalypse, Storm King's Thunder, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden*  

```statblock
"name": "Elk"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "13"
"hit_dice": "2d10 + 2"
"stats":
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "2"
- !!int "10"
- !!int "6"
"speed": "walk 50 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the elk moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra 7 (dice: 2d6|avg\
    \ (2d6)) damage. If the target is a creature, it must succeed on a DC 13 Strength\
    \ saving throw or be knocked [[6. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Charge"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) bludgeoning damage."
  "name": "Ram"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one [[6. Mechanics/Rules/Conditions.md#prone|prone]]\
    \ creature. Hit: dice: 2d4 + 3|avg (2d4 + 3) bludgeoning damage."
  "name": "Hooves"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "SKT"
- "EGW"
- "IDRotF"
"image": "6. Mechanics/Bestiary/Beast/token/elk.png"
```
^statblock

## Environment

grassland, forest, hill