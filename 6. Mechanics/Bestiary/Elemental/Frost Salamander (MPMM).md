---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/arctic
- monster/size/huge
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
name: Frost Salamander
ac: 17
hp: 168
hit_dice: 16d12 + 64
cr: '9'
stats: [
  20,
  12,
  18,
  7,
  11,
  7
]
source: [
  MPMM,
  MTF
]
aliases: ["Frost Salamander"]
---
# Frost Salamander
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 132, Mordenkainen's Tome of Foes p. 223*  

Frost salamanders are natives of the Plane of Ice, also called the Frostfell, which rests between the Plane of Air and the Plane of Water. Frost salamanders especially like to hunt warm-blooded creatures. They sometimes travel to frigid climes on the Material Plane by wandering through planar gates.

Frost salamanders' aggressive appetite for any heat source leads them to attack expeditions and settlements that other predators would avoid, as they often mistake the fire of a forge or a campfire for a large, tasty meal. [[/6. Mechanics/Bestiary/Elemental/Azer.md\|Azers]] use this predilection to hunt frost salamanders. Venturing into the Frostfell, they use large fires to lure these creatures into traps, then kill them and collect their hides and fangs for use in crafting weapons and armor.

Although frost salamanders can burrow their way through loose soil, they prefer to dig into ice. They roll around in piles of broken chunks of ice, allowing it to scratch their backs as they grind it down. This habit leads them to create extensive networks of ice caves, which become ever larger as they claw fresh chunks of ice from the walls of their lairs.

A frost salamander that dwells in a lair for a while carves out enough space to allow a small army to camp within. Inexperienced travelers who come across these caves see them as a welcome shelter, though they are anything but. Frost salamanders greedily devour any prey foolhardy enough to try sleeping in their lairs.

On rare occasions, [[/6. Mechanics/Bestiary/Giant/frost-giant.md\|frost giants]] capture and tame these creatures, using them to burrow into the ice to help create outposts and fortresses.

```ad-statblock
title: Frost Salamander
![[/6. Mechanics/Bestiary/Elemental/Token/frost-salamander.png#token]]
*Huge elemental, Unaligned*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 16d12 + 64|text(168)` (16d12 + 64) 
- **Speed** walk 60 ft., burrow 40 ft., climb 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)|12 (+1)|18 (+4)| 7 (-2)|11 (+0)| 7 (-2)|

- **Proficiency Bonus** +4
- **Saving Throws** Constitution +8, Wisdom +4
- **Skills** Perception +4
- **Senses** darkvision 60 ft., tremorsense 60 ft., passive Perception 14
- **Damage Vulnerabilities** fire
- **Damage Immunities** cold
- **Languages** Primordial
- **Challenge** 9

## Traits

***Burning Fury.*** When the salamander takes fire damage, its

Freezing Breath automatically recharges.

## Actions

***Multiattack.*** The salamander makes one Bite attack and four Claw attacks.

***Bite.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 15 ft., one target. Hit: `dice: 1d8 + 5\|avg` (`1d8 + 5`) piercing damage plus `dice: 1d10\|avg` (`1d10`) cold damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 10 ft., one target. Hit: `dice: 1d6 + 5\|avg` (`1d6 + 5`) piercing damage.

***Freezing Breath (Recharge 6).*** The salamander exhales chill wind in a 60-foot cone. Each creature in that area must make a DC 17 Constitution saving throw, taking 44 (`dice: 8d10\|avg` (`8d10`)) cold damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

arctic