---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: swamp, forest, hearth
size: Medium
tags:
- compendium/src/5e/tgs1
- monster/cr/1-2
- monster/environment/forest
- monster/environment/hearth
- monster/environment/swamp
- monster/size/medium
- monster/type/monstrosity
aliases: ["Winged Wretch"]
---
# [Winged Wretch](compendium\bestiary\monstrosity/winged-wretch-tgs1.md)
*Source: The Griffon's Saddlebag, Book 1 p. 195*

Winged wretches are swarming bat-humanoid hybrids native to subterranean realms and tropical jungles. Although they resemble certain shapechangers and vampires, they are not blood-drinkers. Regardless, they are cruel creatures who delight in the torture of weaker prey.

```statblock
"name": "Winged Wretch (tgs1)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "13"
- !!int "16"
- !!int "12"
- !!int "7"
- !!int "12"
- !!int "7"
"speed": "30 ft., fly 50 ft."
"senses": "blindsight 60 ft., passive Perception 11"
"languages": "Undercommon"
"cr": "1/2"
"traits":
- "desc": "The winged wretch can't use its blindsight while [deafened](/compendium/rules/conditions.md#Deafened)."
  "name": "Echolocation"
- "desc": "The winged wretch has advantage on Wisdom ([Perception](/compendium/rules/skills.md#Perception))\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
"actions":
- "desc": "The winged wretch makes two attacks: one with its bite and one with its\
    \ claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) slashing damage."
  "name": "Claws"
"source":
- "tgs1"
```
^statblock

## Environment

swamp, forest, hearth

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```