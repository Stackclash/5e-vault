---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/arctic
- monster/environment/coastal
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/gargantuan
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
name: Elder Tempest
ac: 19
hp: 264
hit_dice: 16d20 + 96
cr: '23'
stats: [
  23,
  28,
  23,
  2,
  21,
  18
]
source: [
  MPMM,
  MTF
]
aliases: ["Elder Tempest"]
---
# Elder Tempest
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 121, Mordenkainen's Tome of Foes p. 200*  

Terrifying storms manifest in the bodies of elder tempests. Beings carved from clouds, wind, rain, and lightning, elder tempests assume the shape of serpents that slither through the sky. They drown the land beneath them with rain and stab the earth with lances of lightning. Punishing winds scream around them as they fly, feeding the chaos they create.

```ad-statblock
title: Elder Tempest
![[/6. Mechanics/Bestiary/Elemental/Token/elder-tempest.png#token]]
*Gargantuan elemental, Neutral*

- **Armor Class** 19 
- **Hit Points** `dice: 16d20 + 96|text(264)` (16d20 + 96) 
- **Speed** walk 0 ft., fly 120 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|23 (+6)|28 (+9)|23 (+6)| 2 (-4)|21 (+5)|18 (+4)|

- **Proficiency Bonus** +7
- **Saving Throws** Wisdom +12, Charisma +11
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 15
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** lightning, poison, thunder
- **Condition Immunities** exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, stunned
- **Languages** —
- **Challenge** 23

## Traits

***Air Form.*** The tempest can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.

***Flyby.*** The tempest doesn't provoke opportunity attack||opportunity attacks when it flies out of an enemy's reach.

***Legendary Resistance (3/Day).*** If the tempest fails a saving throw, it can choose to succeed instead.

***Living Storm.*** The tempest is always at the center of a storm `dice: 1d6 + 4\|avg` (`1d6 + 4`) miles in diameter. Heavy precipitation in the form of either rain or snow falls there, causing the area to be lightly obscured. Heavy rain also extinguishes open flames and imposes disadvantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on hearing. In addition, strong winds swirl in the area covered by the storm. The winds impose disadvantage on ranged attack rolls. They also extinguish open flames and disperse fog.

***Siege Monster.*** The tempest deals double damage to objects and structures.

## Actions

***Multiattack.*** The tempest makes two Thunderous Slam attacks.

***Thunderous Slam.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 20 ft., one target. Hit: `dice: 4d6 + 9\|avg` (`4d6 + 9`) thunder damage.

***Lightning Storm (Recharge 6).*** Each creature within 120 feet of the tempest must make a DC 21 Dexterity saving throw, taking 27 (`dice: 6d8\|avg` (`6d8`)) lightning damage on a failed save, or half as much damage on a successful one. If a target's saving throw fails by 5 or more, the creature is also [[6. Mechanics/Rules/conditions.md#stunned\|stunned]] until the end of its next turn.

## Legendary Actions

***Move.*** The tempest moves up to its speed.

***Lightning Strike (Costs 2 Actions).*** The tempest can cause a bolt of lightning to strike a point on the ground anywhere under its storm. Each creature within 5 feet of that point must make a DC 21 Dexterity saving throw, taking 16 (`dice: 3d10\|avg` (`3d10`)) lightning damage on a failed save, or half as much damage on a successful one.

***Screaming Gale (Costs 3 Actions).*** The tempest releases a blast of thunder and wind in a line that is 300 feet long and 20 feet wide. Objects in that area take `dice: 4d10\|avg` (`4d10`) thunder damage. Each creature there must succeed on a DC 21 Dexterity saving throw or take `dice: 4d10\|avg` (`4d10`) thunder damage and be flung up to 60 feet in a direction away from the line. If a thrown target collides with an immovable object (such as a wall or floor) or another creature, the target takes `dice: 1d6\|avg` (`1d6`) bludgeoning damage for every 10 feet it was thrown before impact. If the target collides with another creature, that other creature must succeed on a DC 19 Dexterity saving throw or take the same impact damage and be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]].
```
^statblock

## Environment

arctic, coastal, grassland, hill, mountain