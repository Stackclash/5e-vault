---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/large
- monster/type/plant
statblock: true
statblock-link: "#^statblock"
name: Gas Spore
ac: 5
hp: 1
hit_dice: 1d10 - 4
cr: 1/2
stats: [
  5,
  1,
  3,
  1,
  1,
  1
]
source: [
  MM,
  TftYP,
  WDH,
  WDMM
]
aliases: ["Gas Spore"]
---
*Source: Monster Manual p. 138, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage*  

The first gas spores are thought to have been spawned from dead beholders, whose moldering corpses fed a parasitic fungus with aberrant magic. Having long since adapted into a unique plant creature, a gas spore grows quickly and purposefully out of any corpse, creating a malevolent-looking mockery of the most feared denizen of the Underdark.

## Eye Tyrant's Form

A gas spore is a spherical, balloon-like fungus that resembles a beholder from a distance, though its true nature becomes increasingly obvious as one approaches it. The monster possesses a blind central "eye" and rhizome growths sprouting from its upper surface, superficially resembling a beholder's eyestalks.

## Death Burst

A gas spore is a hollow shell filled with a lighter-than-air gas that enables it to float as a beholder does. Piercing the shell with even the weakest attack causes the creature to burst apart, releasing a cloud of deadly spores. A creature that inhales the spores becomes host to them, and is often dead within a day. Its corpse then becomes the spawning ground from which new gas spores arise.

## Beholder Memories

A gas spore that sprouts from a beholder's corpse sometimes carries within it memories of its deceased parent. When the gas spore explodes, its deadly spores cast those memories adrift. Any creature that inhales the spores and survives inherits one or more of the beholder's fragmented memories, and might gain useful information about the beholder's former lair and other nearby places and creatures of interest.

## Fungi

With its sky of jagged stone and perpetual night, the Underdark is home to all manner of fungi. Taking the place of plants in the subterranean realm, fungi are vital to the survival of many underground species, providing nourishment and shelter in the unforgiving darkness.

Fungi spawn in organic matter, then break that matter down to consume it, feeding on filth and corpses. As they mature, fungi eject spores that drift on the lightest breeze to spawn new fungi.

Not needing sunlight or warmth to grow, fungi thrive in every corner and crevice of the Underdark. Transformed by the magic that permeates that underground realm, Underdark fungi often develop potent defensive mechanisms or abilities of mimicry and attack. The largest specimens can spread to create vast subterranean forests in which countless creatures live and feed.

## Stat Block

```ad-statblock
title: Gas Spore
![[token/gas-spore.png#token]]
*Large plant, Unaligned*

- **Armor Class** 5 
- **Hit Points** `dice: 1d10 - 4|text(1)` (1d10 - 4) 
- **Speed** walk 0 ft., fly 10 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 5 (-3)| 1 (-5)| 3 (-4)| 1 (-5)| 1 (-5)| 1 (-5)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 30 ft. (blind beyond this radius), passive Perception 5
- **Damage Immunities** poison
- **Condition Immunities** blinded, deafened, frightened, paralyzed, poisoned, prone
- **Languages** —
- **Challenge** 1/2

## Traits

***Death Burst.*** The gas spore explodes when it drops to 0 hit points. Each creature within 20 feet of it must succeed on a DC 15 Constitution saving throw or take `dice: 3d6|avg` (`3d6`) poison damage and become infected with a disease on a failed save. Creatures immune to the [poisoned](/6. Mechanics/rules/conditions.md#poisoned) condition are immune to this disease.

Spores invade an infected creature's system, killing the creature in a number of hours equal to `dice: 1d12|avg` (`1d12`) + the creature's Constitution score, unless the disease is removed. In half that time, the creature becomes [poisoned](/6. Mechanics/rules/conditions.md#poisoned) for the rest of the duration. After the creature dies, it sprouts `dice: 2d4|avg` (`2d4`) Tiny gas spores that grow to full size in 7 days.

***Eerie Resemblance.*** The gas spore resembles a beholder. A creature that can see the gas spore can discern its true nature with a successful DC 15 Intelligence (Nature) check.

## Actions

***Touch.*** *Melee Weapon Attack:* `dice: d20+0` (+0 to hit), reach 5 ft., one creature. Hit: 1 poison damage, and the creature must succeed on a DC 10 Constitution saving throw or become infected with the disease described in the Death Burst trait.
```
^statblock

## Environment

underdark