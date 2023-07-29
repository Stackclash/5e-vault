---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/size/gargantuan
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
name: Zaratan
ac: 21
hp: 307
hit_dice: 15d20 + 150
cr: '22'
stats: [
  30,
  10,
  30,
  2,
  21,
  18
]
source: [
  MPMM,
  MTF
]
aliases: ["Zaratan"]
---
# Zaratan
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 278, Mordenkainen's Tome of Foes p. 201*  

When a zaratan is summoned from the Elemental Plane of Earth, the ground rises up to take the shape of a hulking, armored reptile. A zaratan's steps trigger shock waves severe enough to level structures. It expresses its rage through trumpeting calls and the occasional boulder or blast of debris it spews from its cavernous maw. If seriously injured, a zaratan retracts its appendages to gain shelter beneath its impervious shell, biding its time until it recovers and can resume its march.

```ad-statblock
title: Zaratan
![](/compendium/bestiary/elemental/token/zaratan.png#token)
*Gargantuan elemental, Neutral*

- **Armor Class** 21 (natural armor)
- **Hit Points** `dice: 15d20 + 150|text(307)` (15d20 + 150) 
- **Speed** walk 40 ft., swim 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|30 (+10)|10 (+0)|30 (+10)| 2 (-4)|21 (+5)|18 (+4)|

- **Proficiency Bonus** +7
- **Saving Throws** Wisdom +12, Charisma +11
- **Skills** ⏤
- **Senses** darkvision 60 ft., tremorsense 60 ft., passive Perception 15
- **Damage Resistances** cold; fire; lightning; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** exhaustion, paralyzed, petrified, poisoned, stunned
- **Languages** —
- **Challenge** 22

## Traits

***Legendary Resistance (3/Day).*** If the zaratan fails a saving throw, it can choose to succeed instead.

***Siege Monster.*** The elemental deals double damage to objects and structures (included in Earth-Shaking Movement).

## Actions

***Multiattack.*** The zaratan makes one Bite attack and one Stomp attack.

***Bite.*** *Melee Weapon Attack:* `dice: d20+17` (+17 to hit), reach 20 ft., one target. Hit: `dice: 4d8 + 10|avg` (`4d8 + 10`) force damage.

***Stomp.*** *Melee Weapon Attack:* `dice: d20+17` (+17 to hit), reach 20 ft., one target. Hit: `dice: 3d10 + 10|avg` (`3d10 + 10`) thunder damage.

***Spit Rock.*** *Ranged Weapon Attack:* `dice: d20+17` (+17 to hit), range 120 ft./240 ft., one target. Hit: `dice: 6d8 + 10|avg` (`6d8 + 10`) force damage.

***Spew Debris (Recharge 5-6).*** The zaratan exhales rocky debris in a 90-foot cube. Each creature in that area must make a DC 25 Dexterity saving throw. A creature takes `dice: 6d10|avg` (`6d10`) bludgeoning damage on a failed save, or half as much damage on a successful one. A creature that fails the save by 5 or more is knocked [prone](compendium/rules/conditions.md#prone).

## Bonus Actions

***Earth-Shaking Movement.*** After moving at least 10 feet on the ground, the zaratan sends a shock wave through the ground in a 120-foot-radius circle centered on itself. That area becomes difficult terrain for 1 minute. Each creature on the ground that is [concentration](compendium/rules/status.md#concentration) must succeed on a DC 25 Constitution saving throw or the creature's [concentration](compendium/rules/status.md#concentration) is broken. The shock wave deals 100 thunder damage to all structures in contact with the ground in the area. If a creature is near a structure that collapses, the creature might be buried; a creature within half the distance of the structure's height must make a DC 25 Dexterity saving throw. On a failed save, the creature takes `dice: 5d6|avg` (`5d6`) bludgeoning damage, is knocked [prone](compendium/rules/conditions.md#prone), and is trapped in the rubble. A trapped creature is [restrained](compendium/rules/conditions.md#restrained), requiring a successful DC 20 Strength ([Athletics](compendium/rules/skills.md#Athletics)) check as an action to escape. Another creature within 5 feet of the buried creature can use its action to clear rubble and grant advantage on the check. If three creatures use their actions in this way, the check is an automatic success. On a successful save, the creature takes half as much damage and doesn't fall [prone](compendium/rules/conditions.md#prone) or become trapped.

## Legendary Actions

***Stomp.*** The zaratan makes one Stomp attack.

***Move.*** The zaratan moves up to its speed.

***Spit (Costs 2 Actions).*** The zaratan makes one Spit Rock attack.

***Retract (Costs 2 Actions).*** The zaratan retracts into its shell. Until it takes its Emerge action, it has resistance to all damage, and it is [restrained](compendium/rules/conditions.md#restrained). The next time it takes a legendary action, it must take its Revitalize or Emerge action.

***Revitalize (Costs 2 Actions).*** The zaratan can use this option only if it is retracted in its shell. It regains 52 (`dice: 5d20|avg` (`5d20`)) hit points. The next time it takes a legendary action, it must take its Emerge action.

***Emerge (Costs 2 Actions).*** The zaratan emerges from its shell and makes one Spit Rock attack. It can use this option only if it is retracted in its shell.
```
^statblock

## Environment

desert, forest, grassland, hill, mountain, underdark