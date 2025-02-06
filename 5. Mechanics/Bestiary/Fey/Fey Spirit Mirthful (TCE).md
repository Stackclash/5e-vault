---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: null
environments: null
size: Small
tags:
  - 5. Mechanics\Src\5e\(TCE)
  - monster\Cr
  - monster\Size\Small
  - monster\Type\Fey
aliases:
  - Fey Spirit (Mirthful)
---
# [[5. Mechanics\Bestiary\Fey\Fey Spirit Mirthful (TCE).md|Fey Spirit (Mirthful)]]
*Source: Tasha's Cauldron of Everything p. 112*

```statblock
"name": "Fey Spirit Mirthful (TCE)"
"size": "Small"
"type": "fey"
"alignment": "Unaligned"
"ac_class": "12 + the level of the spell (natural armor)"
"stats":
- !!int "13"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "16"
"speed": "40 ft."
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Sylvan, understands the languages you speak"
"actions":
- "desc": "The fey makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: YourSpellAttack to hit, reach 5 ft., one target.\
    \ Hit: 1d6 + 3 + the spell's level piercing damage + 1d6 force damage."
  "name": "Shortsword"
"bonus_actions":
- "desc": "The fey magically teleports up to 30 feet to an unoccupied space it can\
    \ see. The fey can force one creature it can see within 10 feet of it to make\
    \ a Wisdom saving throw against your spell save DC. Unless the save succeeds,\
    \ the target is [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]] by you and\
    \ the fey for 1 minute or until the target takes any damage."
  "name": "Fey Step"
"source":
- "TCE"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
