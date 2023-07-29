---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/large
- monster/type/giant
statblock: true
statblock-link: "#^statblock"
name: Ogre Chain Brute
ac: 11
hp: 59
hit_dice: 7d10 + 21
cr: '3'
stats: [
  19,
  8,
  16,
  5,
  7,
  7
]
source: [
  MPMM,
  MTF
]
aliases: ["Ogre Chain Brute"]
---
# Ogre Chain Brute
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 201, Mordenkainen's Tome of Foes p. 221*  

An ogre chain brute wields a great spiked chain, swinging it with both hands in a wide circle to knock foes off their feet. Alternatively, the ogre can swing the chain in a crushing overhead smash.

## Ogres of War

Ogres love to rush headlong into battle, but with enough time and patience, some of them learn to carry out specialized missions. The names they are given—the battering ram, the bolt launcher, the chain brute, and the howdah—reflect their particular functions. These jobs are tailored to take advantage of an ogre's strengths.

## Stat Block

```ad-statblock
title: Ogre Chain Brute
![](/compendium/bestiary/giant/token/ogre-chain-brute.png#token)
*Large giant, Chaotic Evil*

- **Armor Class** 11 ([hide armor](/compendium/items/hide-armor.md))
- **Hit Points** `dice: 7d10 + 21|text(59)` (7d10 + 21) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)| 8 (-1)|16 (+3)| 5 (-3)| 7 (-2)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 8
- **Languages** Common, Giant
- **Challenge** 3

## Actions

***Fist.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d4 + 4|avg` (`2d4 + 4`) bludgeoning damage.

***Chain Smash (Recharge 6).*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 10 ft., one target. Hit: `dice: 2d8 + 4|avg` (`2d8 + 4`) bludgeoning damage, and the target must make a DC 14 Constitution saving throw or be [stunned](compendium/rules/conditions.md#stunned) for 1 minute. The target repeats the saving throw if it takes damage and at the end of each of its turns, ending the effect on itself on a success.

***Chain Sweep.*** The ogre swings its chain, and every creature within 10 feet of it must make a DC 14 Dexterity saving throw. On a failed saving throw, a creature takes `dice: 1d8 + 4|avg` (`1d8 + 4`) bludgeoning damage and is knocked [prone](compendium/rules/conditions.md#prone). On a successful save, the creature takes half as much damage and isn't knocked [prone](compendium/rules/conditions.md#prone).
```
^statblock

## Environment

grassland, hill, mountain