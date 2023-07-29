---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/huge
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
name: Hellfire Engine
ac: 18
hp: 216
hit_dice: 16d12 + 112
cr: '16'
stats: [
  20,
  16,
  24,
  2,
  10,
  1
]
source: [
  MPMM,
  MTF
]
aliases: ["Hellfire Engine"]
---
# Hellfire Engine
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 152, Mordenkainen's Tome of Foes p. 165*  

Hellfire engines are semiautonomous bringers of destruction. Amnizus (in this book) and other devilish generals hold them in reserve until they are needed to repel an incursion by demons or crusading mortals, but occasionally one of these magical-mechanical hybrids gets loose, driven berserk by its need to destroy.

Hellfire engines take many forms, but all of them have one purpose: to mow down foes in waves. They are incapable of subtlety or trickery, but their destructive capability is immense.

Mortal creatures slain by hellfire engines are doomed to join the infernal legions in mere hours unless powerful magic-wielders intervene on their behalf. The archdukes of the Nine Hells would like nothing better than to modify this magic so it works against demons, too, but that discovery has eluded them so far.

```ad-statblock
title: Hellfire Engine
![](/compendium/bestiary/construct/token/hellfire-engine.png#token)
*Huge construct, Lawful Evil*

- **Armor Class** 18 (natural armor)
- **Hit Points** `dice: 16d12 + 112|text(216)` (16d12 + 112) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)|16 (+3)|24 (+7)| 2 (-4)|10 (+0)| 1 (-5)|

- **Proficiency Bonus** +5
- **Saving Throws** Dexterity +8, Wisdom +5, Charisma 0
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 10
- **Damage Resistances** cold; psychic; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered
- **Damage Immunities** fire, poison
- **Condition Immunities** charmed, deafened, exhaustion, frightened, paralyzed, poisoned, unconscious
- **Languages** understands Infernal but can't speak
- **Challenge** 16

## Traits

***Immutable Form.*** The hellfire engine is immune to any spell or effect that would alter its form.

***Magic Resistance.*** The hellfire engine has advantage on saving throws against spells and other magical effects.

***Unusual Nature.*** The hellfire engine doesn't require air, food, drink, or sleep.

## Actions

***Flesh-Crushing Stride.*** The hellfire engine moves up to its speed in a straight line. During this move, it can enter Large or smaller creatures' spaces. A creature whose space the hellfire engine enters must make a DC 18 Dexterity saving throw. On a successful save, the creature is pushed to the nearest space out of the hellfire engine's path. On a failed save, the creature falls [prone](compendium/rules/conditions.md#prone) and takes `dice: 8d6|avg` (`8d6`) bludgeoning damage.

If the hellfire engine remains in the [prone](compendium/rules/conditions.md#prone) creature's space, the creature is also [restrained](compendium/rules/conditions.md#restrained) until it's no longer in the same space as the hellfire engine. While [restrained](compendium/rules/conditions.md#restrained) in this way, the creature, or another creature within 5 feet of it, can make a DC 18 Strength check. On a success, the creature is shunted to an unoccupied space of its choice within 5 feet of the hellfire engine and is no longer [restrained](compendium/rules/conditions.md#restrained).

***Hellfire Weapons.*** The hellfire engine uses one of the following options (choose one or roll a `dice: d6|avg` (`d6`)):

- **1–2 Bonemelt Sprayer.** The hellfire engine spews acidic flame in a 60-foot cone. Each creature in the cone must make a DC 20 Dexterity saving throw, taking 11 (`dice: 2d10|avg` (`2d10`)) fire damage plus `dice: 4d8|avg` (`4d8`) acid damage on a failed save, or half as much damage on a successful one. Creatures that fail the saving throw are drenched in burning acid and take `dice: 1d10|avg` (`1d10`) fire damage plus `dice: 2d8|avg` (`2d8`) acid damage at the end of their turns. An affected creature or another creature within 5 feet of it can take an action to scrape off the burning fuel.  
- **3–4 Lightning Flail.** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 15 ft., one creature. Hit: `dice: 3d8 + 5|avg` (`3d8 + 5`) bludgeoning damage plus `dice: 5d8|avg` (`5d8`) lightning damage. Up to three other creatures of the hellfire engine's choice that it can see within 30 feet of the target must each make a DC 20 Dexterity saving throw, taking 22 (`dice: 5d8|avg` (`5d8`)) lightning damage on a failed save, or half as much damage on a successful one.  
- **5–6 Thunder Cannon.** The hellfire engine targets a point within 120 feet of it that it can see. Each creature within 30 feet of that point must make a DC 20 Dexterity saving throw, taking 27 (`dice: 5d10|avg` (`5d10`)) bludgeoning damage plus `dice: 3d12|avg` (`3d12`) thunder damage on a failed save, or half as much damage on a successful one.  

    If the chosen option kills a creature, the creature's soul rises from the River Styx as a [lemure](/compendium/bestiary/fiend/lemure.md) in Avernus in `dice: 1d4|avg` (`1d4`) hours. If the creature isn't revived before then, only a [wish](/compendium/spells/wish.md) spell or killing the [lemure](/compendium/bestiary/fiend/lemure.md) and casting true resurrection on the creature's original body can restore it to life. Constructs and devils are immune to this effect.  
```
^statblock