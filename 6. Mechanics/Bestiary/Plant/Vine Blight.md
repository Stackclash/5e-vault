---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/size/medium
- monster/type/plant
statblock: true
statblock-link: "#^statblock"
name: Vine Blight
ac: 12
hp: 26
hit_dice: 4d8 + 4
cr: 1/2
stats: [
  15,
  8,
  14,
  5,
  10,
  3
]
source: [
  MM,
  CoS,
  GoS,
  EGW
]
aliases: ["Vine Blight"]
---
# Vine Blight
*Source: Monster Manual p. 32, Curse of Strahd, Ghosts of Saltmarsh, Explorer's Guide to Wildemount*  

```ad-statblock
title: Vine Blight
![](/compendium/bestiary/plant/token/vine-blight.png#token)
*Medium plant, Neutral Evil*

- **Armor Class** 12 (natural armor)
- **Hit Points** `dice: 4d8 + 4|text(26)` (4d8 + 4) 
- **Speed** walk 10 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)| 8 (-1)|14 (+2)| 5 (-3)|10 (+0)| 3 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +1
- **Senses** blindsight 60 ft. (blind beyond this radius), passive Perception 10
- **Condition Immunities** blinded, deafened
- **Languages** Common
- **Challenge** 1/2

## Traits

***False Appearance.*** While the blight remains motionless, it is indistinguishable from a tangle of vines.

## Actions

***Constrict.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 10 ft., one target. Hit: `dice: 2d6 + 2\|avg` (`2d6 + 2`) bludgeoning damage, and a Large or smaller target is [[compendium/rules/conditions.md#grappled\|grappled]] (escape DC 12). Until this grapple ends, the target is [[compendium/rules/conditions.md#restrained\|restrained]], and the blight can't constrict another target.

***Entangling Plants (Recharge 5-6).*** Grasping roots and vines sprout in a 15-foot radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for nonplant creatures. In addition, each creature of the blight's choice in that area when the plants appear must succeed on a DC 12 Strength saving throw or become [[compendium/rules/conditions.md#restrained\|restrained]]. A creature can use its action to make a DC 12 Strength check, freeing itself or another entangled creature within reach on a success.
```
^statblock

## Environment

forest