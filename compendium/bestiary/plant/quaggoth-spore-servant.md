---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: underdark
size: Medium
tags:
- compendium/src/5e/mm
- monster/cr/1
- monster/environment/underdark
- monster/size/medium
- monster/type/plant
aliases: ["Quaggoth Spore Servant"]
---
# [Quaggoth Spore Servant](compendium\bestiary\plant/quaggoth-spore-servant.md)
*Source: Monster Manual p. 230*

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

The servant has [blindsight](/compendium/rules/senses.md#Blindsight) with a radius of 30 feet, and it is blind beyond this radius.

## Condition Immunities

The servant can't be [blinded](/compendium/rules/conditions.md#Blinded), [charmed](/compendium/rules/conditions.md#Charmed), [frightened](/compendium/rules/conditions.md#Frightened), or [paralyzed](/compendium/rules/conditions.md#Paralyzed).

## Languages

The servant loses all known languages, but it responds to orders given to it by myconids using rapport spores. The servant gives highest priority to orders received from the most powerful myconid.

## Attacks

If the servant has no other means of dealing damage, it can use its fists or limbs to make unarmed strikes. On a hit, an unarmed strike deals bludgeoning damage equal to `dice:1d4|noform|avg` (`1d4`) + the servant's Strength modifier, or, if the servant is Large, `dice:2d4|noform|avg` (`2d4`) + its Strength modifier.

```statblock
"name": "Quaggoth Spore Servant"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "17"
- !!int "12"
- !!int "16"
- !!int "2"
- !!int "6"
- !!int "1"
"speed": "20 ft., climb 20 ft."
"damage_immunities": "poison"
"condition_immunities": "[blinded](/compendium/rules/conditions.md#Blinded), [charmed](/compendium/rules/conditions.md#Charmed),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "1"
"actions":
- "desc": "The spore servant makes two claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Claw"
"source":
- "MM"
"image": "compendium/bestiary/plant/token/quaggoth-spore-servant.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```