---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 
size: Medium
tags:
- compendium/src/5e/kpdm
- monster/cr/2
- monster/size/medium
- monster/type/construct
aliases: ["Ice Soldier"]
---
# [Ice Soldier](compendium\bestiary\construct/ice-soldier-kpdm.md)
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
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened)"
"senses": "passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- "desc": "Creatures struck by two slam attacks from an ice soldier in the same round\
    \ must make a DC 13 Strength save or be knocked [prone](/compendium/rules/conditions.md#Prone)."
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