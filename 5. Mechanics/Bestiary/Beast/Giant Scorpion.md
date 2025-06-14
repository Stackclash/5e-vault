---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: desert
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/3
  - monster/environment/desert
  - monster/size/large
  - monster/type/beast
aliases:
  - Giant Scorpion
---
# [[5. Mechanics\Bestiary\Beast\Giant Scorpion.md|Giant Scorpion]]
*Source: Monster Manual p. 327. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Giant Scorpion"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "7d10 + 14"
"modifier": !!int "1"
"stats":
  - !!int "15"
  - !!int "13"
  - !!int "15"
  - !!int "1"
  - !!int "9"
  - !!int "3"
"speed": "40 ft."
"senses": "blindsight 60 ft., passive Perception 9"
"languages": ""
"cr": "3"
"actions":
  - "desc": "The scorpion makes three attacks: two with its claws and one with its\
      \ sting."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
      \ + 2) bludgeoning damage, and the target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ (escape DC 12). The scorpion has two claws, each of which can grapple only\
      \ one target."
    "name": "Claw"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7\
      \ (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution\
      \ saving throw, taking 22 (4d10) poison damage on a failed save, or half as\
      \ much damage on a successful one."
    "name": "Sting"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Beast/token/giant-scorpion.webp"
```
^statblock

## Environment

desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
