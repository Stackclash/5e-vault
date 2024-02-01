---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cos
- monster/cr/1
- monster/size/medium
- monster/type/undead
statblock: inline
aliases: ["Snow Maiden"]
---
# [[5. Mechanics/Bestiary/Undead/Snow Maiden (COS).md|Snow Maiden]]
*Source: Curse of Strahd p. 159*  

```statblock
"name": "Snow Maiden (CoS)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "1"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "0 ft., fly 50 ft. (hover)"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#prone|prone]], [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]],\
  \ [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands all languages it knew in life but can't speak"
"cr": "1"
"traits":
- "desc": "The specter can move through other creatures and objects as if they were\
    \ difficult terrain. It takes dice: 1d10|avg (1d10) force damage if it ends\
    \ its turn inside an object."
  "name": "Incorporeal Movement"
- "desc": "While in sunlight, the specter has disadvantage on attack rolls, as well\
    \ as on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "Melee Spell Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 3d6|avg (3d6) cold damage. The target must succeed on a DC\
    \ 10 Constitution saving throw or its hit point maximum is reduced by an amount\
    \ equal to the damage taken. This reduction lasts until the creature finishes\
    \ a long rest. The target dies if this effect reduces its hit point maximum to\
    \ 0."
  "name": "Life Drain"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Undead/token/snow-maiden.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```