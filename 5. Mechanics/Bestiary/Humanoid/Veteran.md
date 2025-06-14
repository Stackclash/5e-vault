---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: 'coastal, mountain, grassland, hill, arctic, urban, forest, underdark'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/3
  - monster/environment/arctic
  - monster/environment/coastal
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/hill
  - monster/environment/mountain
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Veteran
---
# [[5. Mechanics\Bestiary\Humanoid\Veteran.md|Veteran]]
*Source: Monster Manual p. 350, Curse of Strahd, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Veterans are professional fighters that take up arms for pay or to protect something they believe in or value. Their ranks include soldiers retired from long service and warriors who never served anyone but themselves.

```statblock
"name": "Veteran"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "[[5. Mechanics/Items/Splint Armor.md|splint armor]]"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "13"
  - !!int "14"
  - !!int "10"
  - !!int "11"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "3"
"actions":
  - "desc": "The veteran makes two longsword attacks. If it has a shortsword drawn,\
      \ it can also make a shortsword attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
    "name": "Longsword"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) piercing damage."
    "name": "Shortsword"
  - "desc": "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit:\
      \ 6 (1d10 + 1) piercing damage."
    "name": "Heavy Crossbow"
"source":
  - "MM"
  - "CoS"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Humanoid/token/veteran.webp"
```
^statblock

## Environment

coastal, mountain, grassland, hill, arctic, urban, forest, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
