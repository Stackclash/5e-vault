---
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/large
- monster/type/monstrosity
aliases: ["Worg"]
---
# Worg
*Source: Monster Manual p. 341. Available in the SRD and the Basic Rules.*  

A worg is an evil predator that delights in hunting and devouring creatures weaker than itself. Cunning and malevolent, worgs roam across the remote wilderness or are raised by goblins and hobgoblins. Those creatures use worgs as mounts, but a worg will turn on its rider if it feels mistreated or malnourished. Worgs speak in their own language and Goblin, and a few learn to speak Common as well.

```statblock
"name": "Worg"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"stats":
- !!int "16"
- !!int "13"
- !!int "13"
- !!int "7"
- !!int "11"
- !!int "8"
"speed": "50 ft."
"skillsaves":
  "Perception": "+4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Goblin, Worg"
"cr": "1/2"
"traits":
- "desc": "The worg has advantage on Wisdom ([[\5. Mechanics\Rules\Skills.md#Perception|Perception]])\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: 10 (dice: 2d6 + 3|avg (2d6 + 3)) piercing damage. If the target is\
    \ a creature, it must succeed on a DC 13 Strength saving throw or be knocked [[\5. Mechanics\Rules\Conditions.md#prone|prone]]."
  "name": "Bite"
"source":
- "MM"
- "PotA"
- "SKT"
- "WDMM"
- "ERLW"
- "IDRotF"
- "CM"
"image": "compendium/bestiary/monstrosity/token/worg.png"
```
^statblock

## Environment

grassland, forest, hill