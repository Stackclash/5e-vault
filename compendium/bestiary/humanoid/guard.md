---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/8
environments: coastal, mountain, grassland, hill, urban, forest, desert
size: Medium
tags:
- compendium/src/5e/mm
- monster/cr/1-8
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Guard"]
---
# [Guard](compendium\bestiary\humanoid/guard.md)
*Source: Monster Manual p. 347, Curse of Strahd. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

Guards include members of a city watch, sentries in a citadel or fortified town, and the bodyguards of merchants and nobles.

```statblock
"name": "Guard"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "[chain shirt](compendium/items/chain-shirt.md), [shield](compendium/items/shield.md)"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "1/8"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing\
    \ damage if used with two hands to make a melee attack."
  "name": "Spear"
"source":
- "MM"
- "CoS"
"image": "compendium/bestiary/humanoid/token/guard.webp"
```
^statblock

## Environment

coastal, mountain, grassland, hill, urban, forest, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```