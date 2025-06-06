---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: 'coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-2
  - monster/environment/arctic
  - monster/environment/coastal
  - monster/environment/desert
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/hill
  - monster/environment/mountain
  - monster/environment/swamp
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Scout
---
# [[5. Mechanics\Bestiary\Humanoid\Scout.md|Scout]]
*Source: Monster Manual p. 349, Curse of Strahd. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Scouts are skilled hunters and trackers who offer their services for a fee. Most hunt wild game, but a few work as bounty hunters, serve as guides, or provide military reconnaissance.

```statblock
"name": "Scout"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "[[5. Mechanics/Items/Leather Armor.md|leather armor]]"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "14"
  - !!int "12"
  - !!int "11"
  - !!int "13"
  - !!int "11"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Nature|Nature]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Survival|Survival]]"
    "desc": "+5"
"senses": "passive Perception 15"
"languages": "any one language (usually Common)"
"cr": "1/2"
"traits":
  - "desc": "The scout has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on hearing or sight."
    "name": "Keen Hearing and Sight"
"actions":
  - "desc": "The scout makes two melee attacks or two ranged attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) piercing damage."
    "name": "Shortsword"
  - "desc": "Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit:\
      \ 6 (1d8 + 2) piercing damage."
    "name": "Longbow"
"source":
  - "MM"
  - "CoS"
"image": "5. Mechanics/Bestiary/Humanoid/token/scout.webp"
```
^statblock

## Environment

coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
