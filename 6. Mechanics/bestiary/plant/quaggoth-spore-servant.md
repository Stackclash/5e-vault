---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/medium
- monster/type/plant
statblock: true
statblock-link: "#^statblock"
name: Quaggoth Spore Servant
ac: 13
hp: 45
hit_dice: 6d8 + 18
cr: '1'
stats: [
  17,
  12,
  16,
  2,
  6,
  1
]
source: [
  MM,
  WDMM,
  IDRotF
]
aliases: ["Quaggoth Spore Servant"]
---
*Source: Monster Manual p. 230, Waterdeep: Dungeon of the Mad Mage, Icewind Dale: Rime of the Frostmaiden*  

A spore servant is any Large or smaller creature brought back to life by the animating spores of a myconid sovereign. A creature that was never flesh and blood to begin with (such as a construct, elemental, ooze, plant, or undead) can't be turned into a spore servant.

## Retained Characteristics

The servant retains its Armor Class, hit points, Hit Dice, Strength, Dexterity, Constitution, vulnerabilities, resistances, and immunities.

## Lost Characteristics

The servant loses its original saving throw and skill bonuses, special senses, and special traits. It loses any action that isn't Multiattack or a melee weapon attack that deals bludgeoning, piercing, or slashing damage. If it has an action or a melee weapon attack that deals some other type of damage, it loses the ability to deal damage of that type, unless the damage comes from a piece of equipment, such as a magic item.

## Type

The servant's type is plant, and it loses any tags.

## Alignment

The servant is unaligned.

## Speed

Reduce all the servant's speeds by 10 feet, to a minimum of 5 feet.

## Ability Scores

The servant's ability scores change as follows: Int 2 (-4), Wis 6 (-2), Cha 1 (-5).

## Senses

The servant has [blindsight](/6. Mechanics/rules/senses.md#blindsight) with a radius of 30 feet, and it is blind beyond this radius.

## Condition Immunities

The servant can't be [blinded](/6. Mechanics/rules/conditions.md#blinded), [charmed](/6. Mechanics/rules/conditions.md#charmed), [frightened](/6. Mechanics/rules/conditions.md#frightened), or [paralyzed](/6. Mechanics/rules/conditions.md#paralyzed).

## Languages

The servant loses all known languages, but it responds to orders given to it by myconids using rapport spores. The servant gives highest priority to orders received from the most powerful myconid.

## Attacks

If the servant has no other means of dealing damage, it can use its fists or limbs to make unarmed strikes. On a hit, an unarmed strike deals bludgeoning damage equal to `dice: 1d4|avg` (`1d4`) + the servant's Strength modifier, or, if the servant is Large, `dice: 2d4|avg` (`2d4`) + its Strength modifier.

## Stat Block

```ad-statblock
title: Quaggoth Spore Servant
![[token/quaggoth-spore-servant.png#token]]
*Medium plant, Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 6d8 + 18|text(45)` (6d8 + 18) 
- **Speed** walk 20 ft., climb 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|12 (+1)|16 (+3)| 2 (-4)| 6 (-2)| 1 (-5)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 30 ft. (blind beyond this radius), passive Perception 8
- **Damage Immunities** poison
- **Condition Immunities** blinded, charmed, frightened, paralyzed, poisoned
- **Languages** —
- **Challenge** 1

## Actions

***Multiattack.*** The spore servant makes two claw attacks.

***Claw.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 3|avg` (`1d6 + 3`) slashing damage.
```
^statblock

## Environment

underdark