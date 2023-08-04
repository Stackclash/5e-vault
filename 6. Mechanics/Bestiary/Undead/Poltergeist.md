---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Poltergeist
ac: 12
hp: 22
hit_dice: 5d8
cr: '2'
stats: [
  1,
  14,
  11,
  10,
  10,
  11
]
source: [
  MM,
  CoS,
  IDRotF,
  CM,
  KftGV
]
aliases: ["Poltergeist"]
---
# Poltergeist
*Source: Monster Manual p. 279, Curse of Strahd, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, Keys from the Golden Vault*  

A poltergeist is the confused, invisible spirit of an individual with no sense of how he or she died. A poltergeist expresses its rage by hurling creatures and objects using the power of its shattered psyche.

```ad-statblock
title: Poltergeist
![[/6. Mechanics/Bestiary/Undead/Token/poltergeist.png#token]]
*Medium undead, Chaotic Evil*

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
- **Damage Immunities** necrotic, poison
- **Condition Immunities** charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious
- **Languages** understands all languages it knew in life but can't speak
- **Challenge** 2

## Traits

***Incorporeal Movement.*** The poltergeist can move through other creatures and objects as if they were difficult terrain. It takes `dice: 1d10\|avg` (`1d10`) force damage if it ends its turn inside an object.

***Sunlight Sensitivity.*** While in sunlight, the poltergeist has disadvantage on attack rolls, as well as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on sight.

***Invisibility.*** The poltergeist is [[6. Mechanics/Rules/conditions.md#invisible\|invisible]].

## Actions

***Forceful Slam.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 3d6\|avg` (`3d6`) force damage.

***Telekinetic Thrust.*** The poltergeist targets a creature or unattended object within 30 feet of it. A creature must be Medium or smaller to be affected by this magic, and an object can weigh up to 150 pounds.

If the target is a creature, the poltergeist makes a Charisma check contested by the target's Strength check. If the poltergeist wins the contest, the poltergeist hurls the target up to 30 feet in any direction, including upward. If the target then comes into contact with a hard surface or heavy object, the target takes `dice: 1d6\|avg` (`1d6`) damage per 10 feet moved.

If the target is an object that isn't being worn or carried, the poltergeist hurls it up to 30 feet in any direction. The poltergeist can use the object as a ranged weapon, attacking one creature along the object's path (`dice: d20+4` (+4 to hit)) and dealing 5 (`dice: 2d4\|avg` (`2d4`)) bludgeoning damage on a hit.
```
^statblock

## Environment

underdark, urban