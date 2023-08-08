---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/arctic
- monster/environment/mountain
- monster/size/large
- monster/type/beast
statblock: inline
---
# Armored Saber-Toothed Tiger
*Source: Curse of Strahd p. 115, Derived from Saber-Toothed Tiger (MM)*  

```statblock
"name": "Armored Saber-Toothed Tiger"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "84"
"hit_dice": "7d10 + 14"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "3"
- !!int "12"
- !!int "8"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The tiger has advantage on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the tiger moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 14 Strength saving throw or be knocked [[6. Mechanics/Rules/Conditions.md#prone|prone]].\
    \ If the target is [[6. Mechanics/Rules/Conditions.md#prone|prone]], the tiger can\
    \ make one bite attack against it as a bonus action."
  "name": "Pounce"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d10 + 5|avg (1d10 + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 5|avg (2d6 + 5) slashing damage."
  "name": "Claw"
"source":
- "CoS"
"image": "6. Mechanics/Bestiary/Beast/token/armored-saber-toothed-tiger.png"
```
^statblock

## Environment

mountain, arctic