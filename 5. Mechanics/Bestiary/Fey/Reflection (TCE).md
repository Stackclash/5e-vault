---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: null
size: Medium
tags:
  - compendium/src/5e/tce
  - monster/cr/1-2
  - monster/size/medium
  - monster/type/fey
aliases:
  - Reflection
---
# [[5. Mechanics\Bestiary\Fey\Reflection (TCE).md|Reflection]]
*Source: Tasha's Cauldron of Everything p. 158*

```statblock
"name": "Reflection (TCE)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "6"
- !!int "14"
- !!int "13"
- !!int "6"
- !!int "10"
- !!int "8"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "4"
"damage_vulnerabilities": "bludgeoning"
"damage_resistances": "acid; cold; fire; lightning; thunder; piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The reflection can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- "desc": "While in dim light or darkness, the reflection can take the Hide action\
    \ as a bonus action. Its stealth bonus is also improved to +6."
  "name": "Shadow Stealth"
- "desc": "While in sunlight, the reflection has disadvantage on attack rolls, ability\
    \ checks, and saving throws."
  "name": "Sunlight Weakness"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6\
    \ + 2) necrotic damage, and the target's Strength score is reduced by 1d4. The\
    \ target dies if this reduces its Strength to 0. Otherwise, the reduction lasts\
    \ until the target finishes a short or long rest.\n\nIf a non-evil humanoid dies\
    \ from this attack, a new reflection rises from the corpse 1d4 hours later."
  "name": "Strength Drain"
"source":
- "TCE"
"image": "5. Mechanics/Bestiary/Fey/token/reflection-tce.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
