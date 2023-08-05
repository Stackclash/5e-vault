---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/fey
statblock: true
statblock-link: "#^statblock"
"name": "Reflection"
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
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
"damage_vulnerabilities": "bludgeoning"
"damage_resistances": "acid; cold; fire; lightning; thunder; piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "exhaustion, frightened, grappled, paralyzed, petrified, poisoned,\
  \ prone, restrained"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The reflection can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in dim light or darkness, the reflection can take the Hide action\
    \ as a bonus action. Its stealth bonus is also improved to +6."
  "name": "Shadow Stealth"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the reflection has disadvantage on attack rolls, ability\
    \ checks, and saving throws."
  "name": "Sunlight Weakness"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 2d6 + 2|avg (2d6 + 2) necrotic damage, and the target's Strength\
    \ score is reduced by dice: 1d4|avg (1d4). The target dies if this reduces\
    \ its Strength to 0. Otherwise, the reduction lasts until the target finishes\
    \ a short or long rest.\n\nIf a non-evil humanoid dies from this attack, a new\
    \ reflection rises from the corpse dice: 1d4|avg (1d4) hours later."
  "name": "Strength Drain"
"source":
- "TCE"
"image": "/compendium/bestiary/fey/token/reflection.png"
aliases: ["Reflection"]
---
# Reflection
*Source: Tasha's Cauldron of Everything p. 158, Derived from Shadow (MM)*  

```ad-statblock
title: Reflection
![](/compendium/bestiary/fey/token/reflection.png#token)
*Medium fey, Chaotic Evil*

- **Armor Class** 12 
- **Hit Points** `dice: 3d8 + 3|text(16)` (3d8 + 3) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6 (-2)|14 (+2)|13 (+1)| 6 (-2)|10 (+0)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +4
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Vulnerabilities** bludgeoning
- **Damage Resistances** acid; cold; fire; lightning; thunder; piercing, slashing from nonmagical attacks
- **Damage Immunities** necrotic, poison
- **Condition Immunities** exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained
- **Languages** —
- **Challenge** 1/2

## Traits

***Amorphous.*** The reflection can move through a space as narrow as 1 inch wide without squeezing.

***Shadow Stealth.*** While in dim light or darkness, the reflection can take the Hide action as a bonus action. Its stealth bonus is also improved to +6.

***Sunlight Weakness.*** While in sunlight, the reflection has disadvantage on attack rolls, ability checks, and saving throws.

## Actions

***Strength Drain.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 2d6 + 2|avg` (`2d6 + 2`) necrotic damage, and the target's Strength score is reduced by `dice: 1d4|avg` (`1d4`). The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.

If a non-evil humanoid dies from this attack, a new reflection rises from the corpse `dice: 1d4|avg` (`1d4`) hours later.
```
^statblock

## Environment

underdark, urban