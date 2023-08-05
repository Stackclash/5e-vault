---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
"name": "Snow Maiden"
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
"speed": "walk 0 ft., fly 50 ft. (hover)"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, grappled, paralyzed, petrified, poisoned,\
  \ prone, restrained, unconscious"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands all languages it knew in life but can't speak"
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The specter can move through other creatures and objects as if they were\
    \ difficult terrain. It takes dice: 1d10|avg (1d10) force damage if it ends\
    \ its turn inside an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the specter has disadvantage on attack rolls, as well\
    \ as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Spell Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 3d6|avg (3d6) cold damage. The target must succeed on a DC 10\
    \ Constitution saving throw or its hit point maximum is reduced by an amount equal\
    \ to the damage taken. This reduction lasts until the creature finishes a long\
    \ rest. The target dies if this effect reduces its hit point maximum to 0."
  "name": "Life Drain"
"source":
- "CoS"
"image": "/compendium/bestiary/undead/token/snow-maiden.png"
aliases: ["Snow Maiden"]
---
# Snow Maiden
*Source: Curse of Strahd p. 159, Derived from Specter (MM)*  

```ad-statblock
title: Snow Maiden
![[/6. Mechanics/Bestiary/Undead/Token/snow-maiden.png#token]]
*Medium undead, Neutral*

- **Armor Class** 12 
- **Hit Points** `dice: 5d8|text(22)` (5d8) 
- **Speed** walk 0 ft., fly 50 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 (-5)|14 (+2)|11 (+0)|10 (+0)|10 (+0)|11 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Resistances** acid; cold; fire; lightning; thunder; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** cold, necrotic, poison
- **Condition Immunities** charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious
- **Languages** understands all languages it knew in life but can't speak
- **Challenge** 1

## Traits

***Incorporeal Movement.*** The specter can move through other creatures and objects as if they were difficult terrain. It takes `dice: 1d10` (`1d10`) force damage if it ends its turn inside an object.

***Sunlight Sensitivity.*** While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on sight.

## Actions

***Life Drain.*** *Melee Spell Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 3d6` (`3d6`) cold damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.
```
^statblock

## Environment

underdark, urban