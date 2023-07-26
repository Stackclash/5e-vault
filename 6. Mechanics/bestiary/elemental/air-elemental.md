---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/mountain
- monster/size/large
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
name: Air Elemental
ac: 15
hp: 90
hit_dice: 12d10 + 24
cr: '5'
stats: [
  14,
  20,
  14,
  6,
  10,
  6
]
source: [
  MM,
  HotDQ,
  PotA,
  RoT,
  SKT,
  TftYP,
  ToA,
  WDMM,
  GoS,
  DIP,
  SLW,
  ERLW,
  IMR,
  MOT,
  TCE,
  CM,
  WBtW,
  JttRC,
  DSotDQ,
  KftGV
]
aliases: ["Air Elemental"]
---
*Source: Monster Manual p. 124, Hoard of the Dragon Queen, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Eberron: Rising from the Last War, Infernal Machine Rebuild, Mythic Odysseys of Theros, Tasha's Cauldron of Everything, Candlekeep Mysteries, The Wild Beyond the Witchlight, Journeys through the Radiant Citadel, Dragonlance: Shadow of the Dragon Queen, Keys from the Golden Vault*  

An air elemental is a funneling cloud of whirling air with a vague semblance of a face. Although it likes to race across the ground, picking up dust and debris as it goes, it can also fly and attack from above.

An air elemental can turn itself into a screaming cyclone, creating a whirlwind that batters creatures even as it flings them away.

## Elementals

Elementals are incarnations of the elements that make up the universe: air, earth, fire, and water. Though little more than animated energy on their own planes of existence, they can be called on by spellcasters and powerful beings to take shape and perform tasks.

### Living Elements

On its home plane, an elemental is a bodiless life force. Its dim consciousness manifests as a physical shape only when focused by the power of magic. A wild spirit of elemental force has no desire except to course through the element of its native plane. Like beasts of the Material Plane, these elemental spirits have no society or culture, and little sense of being.

### Conjured by Magic

Certain spells and magic items can conjure an elemental, summoning it from the Inner Planes to the Material Plane. Elementals instinctively resent being pulled from their native planes and bound into service. A creature that summons an elemental must assert force of will to control it.

### Bound and Shaped

Powerful magic can bind an elemental spirit into a material template that defines a specific use and function. Invisible stalkers are air elementals bound to a specific form, in the same way that water elementals can be shaped into water weirds.

### Elemental Nature

An elemental doesn't require air, food, drink, or sleep.

## Stat Block

```ad-statblock
title: Air Elemental
![[token/air-elemental.png#token]]
*Large elemental, Neutral*

- **Armor Class** 15 
- **Hit Points** `dice: 12d10 + 24|text(90)` (12d10 + 24) 
- **Speed** fly 90 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|20 (+5)|14 (+2)| 6 (-2)|10 (+0)| 6 (-2)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Resistances** lightning; thunder; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious
- **Languages** Auran
- **Challenge** 5

## Traits

***Air Form.*** The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.

## Actions

***Multiattack.*** The elemental makes two slam attacks.

***Slam.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 5|avg` (`2d8 + 5`) bludgeoning damage.

***Whirlwind (Recharge 4-6).*** Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes `dice: 3d8 + 2|avg` (`3d8 + 2`) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked [prone](/6. Mechanics/rules/conditions.md#prone). If a thrown target strikes an object, such as a wall or floor, the target takes `dice: 1d6|avg` (`1d6`) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked [prone](/6. Mechanics/rules/conditions.md#prone).

If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked [prone](/6. Mechanics/rules/conditions.md#prone).
```
^statblock

## Environment

mountain, desert