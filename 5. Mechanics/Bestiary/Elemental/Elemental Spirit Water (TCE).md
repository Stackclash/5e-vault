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
  - monster/type/elemental
aliases:
  - Elemental Spirit (Water)
---
# [[5. Mechanics\Bestiary\Elemental\Elemental Spirit Water (TCE).md|Elemental Spirit (Water)]]
*Source: Tasha's Cauldron of Everything p. 111*

```statblock
"name": "Elemental Spirit Water (TCE)"
"size": "Medium"
"type": "elemental"
"alignment": "Unaligned"
"ac_class": "11 + the level of the spell (natural armor)"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "17"
  - !!int "4"
  - !!int "10"
  - !!int "16"
"speed": "40 ft., swim 40 ft."
"damage_resistances": "acid"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Primordial, understands the languages you speak"
"traits":
  - "desc": "The elemental can move through a space as narrow as 1 inch wide without\
      \ squeezing."
    "name": "Amorphous Form"
"actions":
  - "desc": "The elemental makes a number of attacks equal to half this spell's level\
      \ (rounded down)."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one target. Hit: 1d10 + 4 + the spell's level bludgeoning damage."
    "name": "Slam"
"source":
  - "TCE"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
