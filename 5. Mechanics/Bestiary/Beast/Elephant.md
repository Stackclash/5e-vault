---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/grassland
- monster/size/huge
- monster/type/beast
statblock: inline
---
# Elephant
*Source: Monster Manual p. 322, Tomb of Annihilation*  

```statblock
"name": "Elephant"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "76"
"hit_dice": "8d12 + 24"
"stats":
- !!int "22"
- !!int "9"
- !!int "17"
- !!int "3"
- !!int "11"
- !!int "6"
"speed": "walk 40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the elephant moves at least 20 feet straight toward a creature and then\
    \ hits it with a gore attack on the same turn, that target must succeed on a DC\
    \ 12 Strength saving throw or be knocked [[5. Mechanics/Rules/Conditions.md#prone|prone]].\
    \ If the target is [[5. Mechanics/Rules/Conditions.md#prone|prone]], the elephant\
    \ can make one stomp attack against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 3d8 + 6|avg (3d8 + 6) piercing damage."
  "name": "Gore"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one [[5. Mechanics/Rules/Conditions.md#prone|prone]]\
    \ creature. Hit: dice: 3d10 + 6|avg (3d10 + 6) bludgeoning damage."
  "name": "Stomp"
"source":
- "MM"
- "ToA"
"image": "5. Mechanics/Bestiary/Beast/token/elephant.png"
```
^statblock

## Environment

grassland