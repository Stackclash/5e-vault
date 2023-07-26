---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/small
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
name: Magmin
ac: 14
hp: 9
hit_dice: 2d6 + 2
cr: 1/2
stats: [
  7,
  15,
  12,
  8,
  11,
  10
]
source: [
  MM,
  PotA,
  SKT,
  ToA,
  BGDIA,
  WBtW
]
aliases: ["Magmin"]
---
*Source: Monster Manual p. 212, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Baldur's Gate: Descent Into Avernus, The Wild Beyond the Witchlight*  

A grinning, mischievous magmin resembles a stumpy humanoid sculpted from a black shell of magma. Even when it isn't ablaze and radiating heat like a bonfire, small jets of flame erupt from its porous skin.

## Summoned Pyromaniacs

Magmins are fire elemental spirits bound into physical forms by magic, and they appear in the Material Plane only when summoned. They view flammable objects as kindling for a grand conflagration, and only the magical control exerted by their summoners keeps them from setting everything they touch ablaze. Their propensity for fire and havoc makes them ideal for spreading chaos and destruction. A mob of magmins summoned inside a castle can reduce it to a burning shell within minutes. 

### Fiery Destruction

Although its flame is potent, the magmin's hard magma shell prevents it from instantly igniting everything it comes into contact with. However, like the fires inside them, magmins are capricious and unpredictable. Moreover, as simple elemental creations, they are oblivious to the harm their native element causes creatures of the Material Plane.

If it has the opportunity while in service to its master, a magmin seeks out areas of great heat, such as forest fires or the bubbling magma of an active volcano. At other times, a magmin compulsively looses fire from its fingertips, delighting in setting objects ablaze.

## Stat Block

```ad-statblock
title: Magmin
![[token/magmin.png#token]]
*Small elemental, Chaotic Neutral*

- **Armor Class** 14 (natural armor)
- **Hit Points** `dice: 2d6 + 2|text(9)` (2d6 + 2) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 7 (-2)|15 (+2)|12 (+1)| 8 (-1)|11 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** fire
- **Languages** Ignan
- **Challenge** 1/2

## Traits

***Death Burst.*** When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 feet of it must make a DC 11 Dexterity saving throw, taking 7 (`dice: 2d6|avg` (`2d6`)) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited.

***Ignited Illumination.*** As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 feet.

## Actions

***Touch.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 2d6|avg` (`2d6`) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes `dice: 1d6|avg` (`1d6`) fire damage at the end of each of its turns.
```
^statblock