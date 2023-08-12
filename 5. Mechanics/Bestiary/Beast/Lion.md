---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/large
- monster/type/beast
statblock: inline
---
# Lion
*Source: Monster Manual p. 331, Tales from the Yawning Portal, Tomb of Annihilation, Keys from the Golden Vault*  

```statblock
"name": "Lion"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"stats":
- !!int "17"
- !!int "15"
- !!int "13"
- !!int "3"
- !!int "12"
- !!int "8"
"speed": "walk 50 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The lion has advantage on Wisdom ([[5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The lion has advantage on an attack roll against a creature if at least\
    \ one of the lion's allies is within 5 feet of the creature and the ally isn't\
    \ [[5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Pack Tactics"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the lion moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 13 Strength saving throw or be knocked [[5. Mechanics/Rules/Conditions.md#prone|prone]].\
    \ If the target is [[5. Mechanics/Rules/Conditions.md#prone|prone]], the lion can\
    \ make one bite attack against it as a bonus action."
  "name": "Pounce"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "With a 10-foot running start, the lion can long jump up to 25 feet."
  "name": "Running Leap"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) slashing damage."
  "name": "Claw"
"source":
- "MM"
- "TftYP"
- "ToA"
- "KftGV"
"image": "5. Mechanics/Bestiary/Beast/token/lion.png"
```
^statblock

## Environment

mountain, grassland, hill, desert