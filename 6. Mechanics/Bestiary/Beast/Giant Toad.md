---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
name: Giant Toad
ac: 11
hp: 39
hit_dice: 6d10 + 6
cr: '1'
stats: [
  15,
  13,
  13,
  2,
  10,
  3
]
source: [
  MM,
  WDMM,
  GoS,
  EGW,
  TCE,
  WBtW,
  KftGV
]
aliases: ["Giant Toad"]
---
# Giant Toad
*Source: Monster Manual p. 329, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything, The Wild Beyond the Witchlight, Keys from the Golden Vault*  

```ad-statblock
title: Giant Toad
![[/6. Mechanics/Bestiary/Beast/Token/giant-toad.png#token]]
*Large beast, Unaligned*

- **Armor Class** 11 
- **Hit Points** `dice: 6d10 + 6|text(39)` (6d10 + 6) 
- **Speed** walk 20 ft., swim 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|13 (+1)|13 (+1)| 2 (-4)|10 (+0)| 3 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 30 ft., passive Perception 10
- **Languages** —
- **Challenge** 1

## Traits

***Amphibious.*** The toad can breathe air and water.

***Standing Leap.*** The toad's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d10 + 2\|avg` (`1d10 + 2`) piercing damage plus `dice: 1d10\|avg` (`1d10`) poison damage, and the target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 13). Until this grapple ends, the target is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]], and the toad can't bite another target.

***Swallow.*** The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] and [[6. Mechanics/Rules/conditions.md#restrained\|restrained]], it has total cover against attacks and other effects outside the toad, and it takes `dice: 3d6\|avg` (`3d6`) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time.

If the toad dies, a swallowed creature is no longer [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] by it and can escape from the corpse using 5 feet of movement, exiting [[6. Mechanics/Rules/conditions.md#prone\|prone]].
```
^statblock

## Environment

underdark, forest, swamp, desert, coastal