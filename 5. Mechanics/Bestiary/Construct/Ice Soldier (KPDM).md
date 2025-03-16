---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: null
size: Medium
tags:
  - compendium/src/5e/kpdm
  - monster/cr/2
  - monster/size/medium
  - monster/type/construct
aliases:
  - Ice Soldier
---
# [[5. Mechanics/Bestiary/Construct/Ice Soldier (KPDM).md|Ice Soldier]]
*Source: Deep Magic p. 82*

```statblock
"name": "Ice Soldier (KPDM)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "72"
"hit_dice": "16d8"
"stats":
- !!int "21"
- !!int "9"
- !!int "10"
- !!int "7"
- !!int "12"
- !!int "7"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "3"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "cold"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- "desc": "Creatures struck by two slam attacks from an ice soldier in the same round\
    \ must make a DC 13 Strength save or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Heavy Blows"
"actions":
- "desc": "The ice soldier makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) cold damage."
  "name": "Slam"
"source":
- "KPDM"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/TEB/Ice_Elemental.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
