---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: 'arctic, everglacier'
size: Medium
tags:
  - compendium/src/5e/tgs1
  - monster/cr/3
  - monster/environment/arctic
  - monster/environment/everglacier
  - monster/size/medium
  - monster/type/elemental
aliases:
  - Ice Gargoyle
---
# [[5. Mechanics\Bestiary\Elemental\Ice Gargoyle (TGS1).md|Ice Gargoyle]]
*Source: The Griffon's Saddlebag, Book 1 p. 176*

```statblock
"name": "Ice Gargoyle (TGS1)"
"size": "Medium"
"type": "elemental"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "15"
  - !!int "5"
  - !!int "12"
  - !!int "8"
"speed": "30 ft., climb 20 ft., fly 60 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't adamantine"
"damage_immunities": "cold, poison"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Aquan, Auran"
"cr": "3"
"traits":
  - "desc": "While the gargoyle remains motionless, it is indistinguishable from an\
      \ inanimate ice statue."
    "name": "False Appearance"
"actions":
  - "desc": "The gargoyle makes two attacks: one with its bite and one with its claws."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) piercing damage plus 7 (2d6) cold damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) slashing damage."
    "name": "Claws"
  - "desc": "Ranged Weapon Attack: +4 to hit, range 30/60 ft., one target. Hit:\
      \ 7 (2d4 + 2) piercing damage."
    "name": "Ice Darts"
"source":
  - "tgs1"
```
^statblock

## Environment

arctic, everglacier

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
