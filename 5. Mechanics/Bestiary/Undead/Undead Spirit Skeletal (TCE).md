---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: null
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(TCE)
  - monster\Cr
  - monster\Size\Medium
  - monster\Type\Undead
aliases:
  - Undead Spirit (Skeletal)
---
# [[5. Mechanics\Bestiary\Undead\Undead Spirit Skeletal (TCE).md|Undead Spirit (Skeletal)]]
*Source: Tasha's Cauldron of Everything p. 114*

```statblock
"name": "Undead Spirit Skeletal (TCE)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac_class": "11 + the level of the spell (natural armor)"
"stats":
- !!int "12"
- !!int "16"
- !!int "15"
- !!int "4"
- !!int "10"
- !!int "9"
"speed": "30 ft."
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"actions":
- "desc": "The spirit makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- "desc": "Ranged Spell Attack: YourSpellAttack to hit, range 150 ft., one target.\
    \ Hit: 2d4 + 3 + the spell's level necrotic damage."
  "name": "Grave Bolt"
"source":
- "TCE"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
