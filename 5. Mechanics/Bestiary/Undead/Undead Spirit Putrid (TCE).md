---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: null
environments: null
size: Medium
tags:
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/medium
  - monster/type/undead
aliases:
  - Undead Spirit (Putrid)
---
# [[5. Mechanics\Bestiary\Undead\Undead Spirit Putrid (TCE).md|Undead Spirit (Putrid)]]
*Source: Tasha's Cauldron of Everything p. 114*

```statblock
"name": "Undead Spirit Putrid (TCE)"
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
"traits":
- "desc": "Any creature, other than you, that starts its turn within 5 feet of the\
    \ spirit must succeed on a Constitution saving throw against your spell save DC\
    \ or be [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] until the start of\
    \ its next turn."
  "name": "Festering Aura"
"actions":
- "desc": "The spirit makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: YourSpellAttack to hit, reach 5 ft., one target.\
    \ Hit: 1d6 + 3 + the spell's level slashing damage. If the target is [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]],\
    \ it must succeed on a Constitution saving throw against your spell save DC or\
    \ be [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]] until the end of its\
    \ next turn."
  "name": "Rotting Claw"
"source":
- "TCE"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
