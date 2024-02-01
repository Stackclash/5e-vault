---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tce
- monster/cr/1-2
- monster/size/medium
- monster/type/fey
statblock: inline
aliases: ["Reflection"]
---
# [[5. Mechanics/Bestiary/Fey/Reflection (TCE).md|Reflection]]
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
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]"
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
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 2d6 + 2|avg (2d6 + 2) necrotic damage, and the target's Strength\
    \ score is reduced by dice: 1d4|avg (1d4). The target dies if this reduces\
    \ its Strength to 0. Otherwise, the reduction lasts until the target finishes\
    \ a short or long rest.\n\nIf a non-evil humanoid dies from this attack, a new\
    \ reflection rises from the corpse dice: 1d4|avg (1d4) hours later."
  "name": "Strength Drain"
"source":
- "TCE"
"image": "5. Mechanics/Bestiary/Fey/token/reflection.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```