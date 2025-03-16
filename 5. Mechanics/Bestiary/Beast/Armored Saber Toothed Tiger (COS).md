---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Large
tags:
  - compendium/src/5e/cos
  - monster/cr/3
  - monster/size/large
  - monster/type/beast
aliases:
  - Armored Saber-Toothed Tiger
---
# [[5. Mechanics/Bestiary/Beast/Armored Saber Toothed Tiger (COS).md|Armored Saber-Toothed Tiger]]
*Source: Curse of Strahd p. 115*

```statblock
"name": "Armored Saber Toothed Tiger (COS)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "[[5. Mechanics/Items/Half Plate Armor.md|half plate armor]]"
"hp": !!int "84"
"hit_dice": "7d10 + 14"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "3"
- !!int "12"
- !!int "8"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "3"
"traits":
- "desc": "The tiger has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on smell."
  "name": "Keen Smell"
- "desc": "If the tiger moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 14 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
    \ If the target is [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], the tiger can\
    \ make one bite attack against it as a bonus action."
  "name": "Pounce"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10\
    \ + 5) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage."
  "name": "Claw"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Beast/token/armored-saber-toothed-tiger-cos.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
