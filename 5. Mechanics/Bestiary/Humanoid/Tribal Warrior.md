---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/8
environments: 'coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-8
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
  - Tribal Warrior
---
# [[5. Mechanics\Bestiary\Humanoid\Tribal Warrior.md|Tribal Warrior]]
*Source: Monster Manual p. 350. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Tribal warriors live beyond civilization, most often subsisting on fishing and hunting. Each tribe acts in accordance with the wishes of its chief, who is the greatest or oldest warrior of the tribe or a tribe member blessed by the gods.

```statblock
"name": "Tribal Warrior"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "[[5. Mechanics/Items/Hide Armor.md|hide armor]]"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "8"
- !!int "11"
- !!int "8"
"speed": "30 ft."
"senses": "passive Perception 10"
"languages": "any one language"
"cr": "1/8"
"traits":
- "desc": "The warrior has advantage on an attack roll against a creature if at least\
    \ one of the warrior's allies is within 5 feet of the creature and the ally isn't\
    \ [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing\
    \ damage if used with two hands to make a melee attack."
  "name": "Spear"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Humanoid/token/tribal-warrior.webp"
```
^statblock

## Environment

coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
