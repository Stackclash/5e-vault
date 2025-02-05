---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: mountain, arctic
size: Large
tags:
- compendium/src/5e/mm
- monster/cr/2
- monster/environment/arctic
- monster/environment/mountain
- monster/size/large
- monster/type/beast
aliases: ["Saber-Toothed Tiger"]
---
# [Saber-Toothed Tiger](compendium\bestiary\beast/saber-toothed-tiger.md)
*Source: Monster Manual p. 336, Curse of Strahd. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Saber-Toothed Tiger"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "52"
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
"cr": "2"
"traits":
- "desc": "The tiger has advantage on Wisdom ([Perception](/compendium/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- "desc": "If the tiger moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 14 Strength saving throw or be knocked [prone](/compendium/rules/conditions.md#Prone).\
    \ If the target is [prone](/compendium/rules/conditions.md#Prone), the tiger can\
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
- "MM"
- "CoS"
"image": "compendium/bestiary/beast/token/saber-toothed-tiger.webp"
```
^statblock

## Environment

mountain, arctic

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```