---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\8
environments: 'coastal, hill, arctic, urban, forest, desert'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-8
  - monster/environment/arctic
  - monster/environment/coastal
  - monster/environment/desert
  - monster/environment/forest
  - monster/environment/hill
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Bandit
---
# [[5. Mechanics\Bestiary\Humanoid\Bandit.md|Bandit]]
*Source: Monster Manual p. 343, Curse of Strahd. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

Bandits rove in gangs and are sometimes led by thugs, veterans, or spellcasters. Not all bandits are evil. Oppression, drought, disease, or famine can often drive otherwise honest folk to a life of banditry.

Pirates are bandits of the high seas. They might be freebooters interested only in treasure and murder, or they might be privateers sanctioned by the crown to attack and plunder an enemy nation's vessels.

```statblock
"name": "Bandit"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Lawful alignment"
"ac": !!int "12"
"ac_class": "[[5. Mechanics/Items/Leather Armor.md|leather armor]]"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "12"
  - !!int "10"
  - !!int "10"
  - !!int "10"
"speed": "30 ft."
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "1/8"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
      \ + 1) slashing damage."
    "name": "Scimitar"
  - "desc": "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit:\
      \ 5 (1d8 + 1) piercing damage."
    "name": "Light Crossbow"
"source":
  - "MM"
  - "CoS"
"image": "5. Mechanics/Bestiary/Humanoid/token/bandit.webp"
```
^statblock

## Environment

coastal, hill, arctic, urban, forest, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
