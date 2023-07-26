---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/environment/swamp
- monster/environment/underwater
- monster/size/large
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
name: Water Elemental
ac: 14
hp: 114
hit_dice: 12d10 + 48
cr: '5'
stats: [
  18,
  14,
  18,
  5,
  10,
  8
]
source: [
  MM,
  PotA,
  RoT,
  SKT,
  GoS,
  DIP,
  SLW,
  BGDIA,
  IMR,
  MOT,
  TCE,
  CM,
  JttRC,
  DSotDQ
]
aliases: ["Water Elemental"]
---
*Source: Monster Manual p. 125, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Mythic Odysseys of Theros, Tasha's Cauldron of Everything, Candlekeep Mysteries, Journeys through the Radiant Citadel, Dragonlance: Shadow of the Dragon Queen*  

A water elemental is a cresting wave that rolls across the ground, becoming nearly invisible at it courses through a larger body of water. It engulfs creatures that stand against it, filling their mouths and lungs as easily as it smothers flame.

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
title: Water Elemental
![[token/water-elemental.png#token]]
*Large elemental, Neutral*

- **Armor Class** 14 (natural armor)
- **Hit Points** `dice: 12d10 + 48|text(114)` (12d10 + 48) 
- **Speed** walk 30 ft., swim 90 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|14 (+2)|18 (+4)| 5 (-3)|10 (+0)| 8 (-1)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Resistances** acid; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious
- **Languages** Aquan
- **Challenge** 5

## Traits

***Water Form.*** The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.

***Freeze.*** If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 feet until the end of its next turn.

## Actions

***Multiattack.*** The elemental makes two slam attacks.

***Slam.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 4|avg` (`2d8 + 4`) bludgeoning damage.

***Whelm (Recharge 4-6).*** Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes `dice: 2d8 + 4|avg` (`2d8 + 4`) bludgeoning damage. If it is Large or smaller, it is also [grappled](/6. Mechanics/rules/conditions.md#grappled) (escape DC 14). Until this grapple ends, the target is [restrained](/6. Mechanics/rules/conditions.md#restrained) and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.

The elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target [grappled](/6. Mechanics/rules/conditions.md#grappled) by it takes `dice: 2d8 + 4|avg` (`2d8 + 4`) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength check and succeeding.
```
^statblock

## Environment

underwater, swamp, coastal