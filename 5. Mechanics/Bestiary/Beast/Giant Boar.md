---
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/large
- monster/type/beast
aliases: ["Giant Boar"]
---
# Giant Boar
*Source: Monster Manual p. 323. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Giant Boar"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "42"
"hit_dice": "5d10 + 15"
"stats":
- !!int "17"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "7"
- !!int "5"
"speed": "40 ft."
"senses": "passive Perception 8"
"languages": ""
"cr": "2"
"traits":
- "desc": "If the boar moves at least 20 feet straight toward a target and then hits\
    \ it with a tusk attack on the same turn, the target takes an extra 7 (dice:\
    \ 2d6|avg (2d6)) slashing damage. If the target is a creature, it must succeed\
    \ on a DC 13 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Charge"
- "desc": "If the boar takes 10 damage or less that would reduce it to 0 hit points,\
    \ it is reduced to 1 hit point instead."
  "name": "Relentless (Recharges after a Short or Long Rest)"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: 10 (dice: 2d6 + 3|avg (2d6 + 3)) slashing damage."
  "name": "Tusk"
"source":
- "MM"
- "SKT"
- "ToA"
- "GoS"
- "MOT"
- "PSI"
"image": "compendium/bestiary/beast/token/giant-boar.png"
```
^statblock

## Environment

grassland, forest, hill