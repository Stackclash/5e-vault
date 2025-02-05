---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: forest, hill
size: Large
tags:
- compendium/src/5e/mm
- monster/cr/1
- monster/environment/forest
- monster/environment/hill
- monster/size/large
- monster/type/beast
aliases: ["Dire Wolf"]
---
# [Dire Wolf](compendium\bestiary\beast/dire-wolf.md)
*Source: Monster Manual p. 321, Curse of Strahd. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Dire Wolf"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "37"
"hit_dice": "5d10 + 10"
"stats":
- !!int "17"
- !!int "15"
- !!int "15"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "50 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- "desc": "The wolf has advantage on Wisdom ([Perception](/compendium/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- "desc": "The wolf has advantage on an attack roll against a creature if at least\
    \ one of the wolf's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/compendium/rules/conditions.md#Incapacitated)."
  "name": "Pack Tactics"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage. If the target is a creature, it must succeed on a DC 13\
    \ Strength saving throw or be knocked [prone](/compendium/rules/conditions.md#Prone)."
  "name": "Bite"
"source":
- "MM"
- "CoS"
"image": "compendium/bestiary/beast/token/dire-wolf.webp"
```
^statblock

## Environment

forest, hill

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```