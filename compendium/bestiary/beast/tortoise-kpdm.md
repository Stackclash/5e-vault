---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: 
size: Tiny
tags:
- compendium/src/5e/kpdm
- monster/cr/0
- monster/size/tiny
- monster/type/beast
aliases: ["Tortoise"]
---
# [Tortoise](compendium\bestiary\beast/tortoise-kpdm.md)
*Source: Deep Magic p. 294*

The tortoise is a reptile with a thick shell on its back that grants it superior armor at the expense of speed. The tortoise is a popular familiar among abjurers, dragonborn, and lizardfolk [wizards](compendium/classes/wizard.md), despite its ponderous movement.

```statblock
"name": "Tortoise (KPDM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "3"
- !!int "7"
- !!int "8"
- !!int "2"
- !!int "10"
- !!int "4"
"speed": "5 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "0"
"traits":
- "desc": "The tortoise has advantage on Wisdom ([Perception](/compendium/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"source":
- "KPDM"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/CComp/Tortoise.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```