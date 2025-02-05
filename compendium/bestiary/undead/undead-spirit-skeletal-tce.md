---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 
environments: 
size: Medium
tags:
- compendium/src/5e/tce
- monster/cr/
- monster/size/medium
- monster/type/undead
aliases: ["Undead Spirit (Skeletal)"]
---
# [Undead Spirit (Skeletal)](compendium\bestiary\undead/undead-spirit-skeletal-tce.md)
*Source: Tasha's Cauldron of Everything p. 114*

```statblock
"name": "Undead Spirit (Skeletal) (TCE)"
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
"condition_immunities": "[exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned)"
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