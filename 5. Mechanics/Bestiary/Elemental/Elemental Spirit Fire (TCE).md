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
  - monster\Type\Element(AL)
aliases:
  - Elemental Spirit (Fire)
---
# [[5. Mechanics\Bestiary\Elemental\Elemental Spirit Fire (TCE).md|Elemental Spirit (Fire)]]
*Source: Tasha's Cauldron of Everything p. 111*

```statblock
"name": "Elemental Spirit Fire (TCE)"
"size": "Medium"
"type": "elemental"
"alignment": "Unaligned"
"ac_class": "11 + the level of the spell (natural armor)"
"stats":
- !!int "18"
- !!int "15"
- !!int "17"
- !!int "4"
- !!int "10"
- !!int "16"
"speed": "40 ft."
"damage_resistances": "lightning, thunder (Air only)"
"damage_immunities": "poison, fire"
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
- "desc": "Melee Weapon Attack: YourSpellAttack to hit, reach 5 ft., one target.\
    \ Hit: 1d10 + 4 + the spell's level fire damage."
  "name": "Slam"
"source":
- "TCE"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
