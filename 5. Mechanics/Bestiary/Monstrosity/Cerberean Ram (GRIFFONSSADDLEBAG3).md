---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/4
  - monster/size/large
  - monster/type/monstrosity
aliases:
  - Cerberean Ram
---
# [[5. Mechanics\Bestiary\Monstrosity\Cerberean Ram (GRIFFONSSADDLEBAG3).md|Cerberean Ram]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Ridden by the dwarven Bim Thorum that patrol the wild mountains, these rams have three heads that, for the most part, get along with each other. These massive mounts can easily navigate the terrain and cliff faces of the mountains.

```statblock
"name": "Cerberean Ram (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"modifier": !!int "1"
"stats":
  - !!int "19"
  - !!int "12"
  - !!int "16"
  - !!int "3"
  - !!int "14"
  - !!int "7"
"speed": "40 ft., climb 30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
"senses": "passive Perception 19"
"languages": ""
"cr": "4"
"traits":
  - "desc": "If the ram moves at least 20 feet straight toward a target and then hits\
      \ it with its horns on the same turn, the target takes an extra 6 (d12) bludgeoning\
      \ damage. If the target is a creature, it must succeed on a DC 14 Strength saving\
      \ throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Charge"
  - "desc": "The ram has advantage on Strength and Dexterity saving throws made against\
      \ effects that would knock it [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Sure-Footed"
  - "desc": "The ram has advantage on Wisdom (Perception) checks and on saving throws\
      \ against being [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]], or knocked [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]."
    "name": "Three Heads"
"actions":
  - "desc": "The ram makes three attacks with its horns.\n\nIt can choose to simultaneously\
      \ make all three attacks against the same target; if it hits with at least two\
      \ of these attacks and uses its Charge, the target has disadvantage on its saving\
      \ throw against being knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10\
      \ (1d12 + 4) bludgeoning damage."
    "name": "Horns"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
