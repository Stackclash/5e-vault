---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/hill
- monster/environment/mountain
- monster/size/medium
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
name: Galeb Duhr
ac: 16
hp: 85
hit_dice: 9d8 + 45
cr: '6'
stats: [
  20,
  14,
  20,
  11,
  12,
  11
]
source: [
  MM,
  PotA,
  WDMM,
  TCE,
  WBtW,
  KftGV
]
aliases: ["Galeb Duhr"]
---
# Galeb Duhr
*Source: Monster Manual p. 139, Princes of the Apocalypse, Waterdeep: Dungeon of the Mad Mage, Tasha's Cauldron of Everything, The Wild Beyond the Witchlight, Keys from the Golden Vault*  

The galeb duhr is a boulder-like creature with stumpy appendages that act as arms and legs. It has the ability to animate the rocks and boulders around it, and is thus usually encountered in rocky terrain.

Powerful magic allows a spellcaster to summon a galeb duhr from the Plane of Earth. Some galeb duhr also form naturally in places touched by that plane. The galeb duhr is imbued with greater intelligence than most elementals, allowing it to better assess threats and to communicate with creatures entering its guarded area.

## Stone Guardian

A galeb duhr doesn't age or require sustenance, making it an excellent sentinel. A powerful druid might charge a galeb duhr with protecting a stone circle or sacred hilltop. Another galeb duhr might be created to guard an underground tomb or a wizard's tower. When it chooses to, the galeb duhr can make itself look like an ordinary boulder, remaining perfectly still for years at a time.

A galeb duhr is permanently bound to the Material Plane, so that when it dies, it doesn't return to the Plane of Earth. It has an excellent memory and is more than happy to share information regarding its environment with creatures it doesn't regard as threats.

## Stone Connection

A galeb duhr can become one with the earth around it, allowing it to imbue nearby rocks and boulders with a semblance of life. The galeb duhr uses its animated boulders to frighten away interlopers and defend whatever it has been charged to protect. When it needs to move close to those intruders, it presses its limbs tight to its body and rolls forward at a furious pace.

## Stat Block

```ad-statblock
title: Galeb Duhr
![](/compendium/bestiary/elemental/token/galeb-duhr.png#token)
*Medium elemental, Neutral*

- **Armor Class** 16 (natural armor)
- **Hit Points** `dice: 9d8 + 45|text(85)` (9d8 + 45) 
- **Speed** walk 15 ft. (30 ft. when rolling, 60 ft. rolling downhill)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)|14 (+2)|20 (+5)|11 (+0)|12 (+1)|11 (+0)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., tremorsense 60 ft., passive Perception 11
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** exhaustion, paralyzed, petrified, poisoned
- **Languages** Terran
- **Challenge** 6

## Traits

***False Appearance.*** While the galeb duhr remains motionless, it is indistinguishable from a normal boulder.

***Rolling Charge.*** If the galeb duhr rolls at least 20 feet straight toward a target and then hits it with a slam attack on the same turn, the target takes an extra 7 (`dice: 2d6|avg` (`2d6`)) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone).

## Actions

***Slam.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 5|avg` (`2d6 + 5`) bludgeoning damage.

***Animate Boulders (1/Day).*** The galeb duhr magically animates up to two boulders it can see within 60 feet of it. A boulder has statistics like those of a galeb duhr, except it has Intelligence 1 and Charisma 1, it can't be [charmed](compendium/rules/conditions.md#charmed) or [frightened](compendium/rules/conditions.md#frightened), and it lacks this action option. A boulder remains animated as long as the galeb duhr maintains [concentration](compendium/rules/status.md#concentration), up to 1 minute (as if [concentration](compendium/rules/status.md#concentration) on a spell).
```
^statblock

## Environment

mountain, hill