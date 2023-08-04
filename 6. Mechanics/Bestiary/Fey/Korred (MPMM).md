---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/size/small
- monster/type/fey
statblock: true
statblock-link: "#^statblock"
name: Korred
ac: 17
hp: 93
hit_dice: 11d6 + 55
cr: '7'
stats: [
  23,
  14,
  20,
  10,
  15,
  9
]
source: [
  MPMM,
  VGM
]
aliases: ["Korred"]
---
# Korred
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 166, Volo's Guide to Monsters p. 168*  

Korreds are unpredictable, secretive Fey with strong ties to earth and stone. Because of their magical hair and mystical understanding of minerals, they are sought after by treasure-hunting dwarves and others who desire wealth beneath the earth.

Korreds prefer to keep their own company but occasionally consort with creatures of elemental earth such as [[/6. Mechanics/Bestiary/Elemental/Galeb Duhr.md\|galeb duhr]]. They often gather with other korreds to perform ceremonial dances, beating out rhythms on stone with their hooves and clubs. In the depths of the Material Plane, korreds typically flee from other creatures, but they become aggressive when they feel insulted or are annoyed by the sounds of mining.

Korreds can hurl boulders far larger than it seems they should be able to, shape stone as though it were clay, and swim through rock. They also gain supernatural strength just from standing on the ground.

## Magical Hair

Korreds have hair all over their bodies, but the hair that grows from their heads is magical. When cut, it transforms into whatever material was used to cut it. Korreds use iron shears to cut lengths of this magical hair, then twist the strands together to create iron ropes that they can manipulate, animating them to bind or snake around creatures and objects. Korreds take great pride in their hair and equally great offense at anyone who attempts to cut it without permission.

## Stat Block

```ad-statblock
title: Korred
![[/6. Mechanics/Bestiary/Fey/Token/korred.png#token]]
*Small fey, Chaotic Neutral*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 11d6 + 55|text(93)` (11d6 + 55) 
- **Speed** walk 30 ft., burrow 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|23 (+6)|14 (+2)|20 (+5)|10 (+0)|15 (+2)| 9 (-1)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Athletics +9, Perception +5, Stealth +5
- **Senses** darkvision 120 ft., tremorsense 120 ft., passive Perception 15
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks
- **Languages** Dwarvish, Gnomish, Sylvan, Terran, Undercommon
- **Challenge** 7

## Traits

***Stone Camouflage.*** The korred has advantage on Dexterity ([[6. Mechanics/Rules/skills.md#Stealth\|Stealth]]) checks made to hide in rocky terrain.

***Spellcasting.*** The korred casts one of the following spells, requiring no spell components and using Wisdom as the spellcasting ability (spell save DC 13):

**At will**: [[/6. Mechanics/Spells/commune-with-nature.md\|commune with nature]] (as an action), [[/6. Mechanics/Spells/meld-into-stone.md\|meld into stone]], [[/6. Mechanics/Spells/stone-shape.md\|stone shape]]

**1/day**: [[/6. Mechanics/Spells/ottos-irresistible-dance.md\|Otto's irresistible dance]]

## Actions

***Multiattack.*** The korred makes two Greatclub or Rock attacks.

***Greatclub.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 6\|avg` (`1d8 + 6`) bludgeoning damage, or 19 (`dice: 3d8 + 6\|avg` (`3d8 + 6`)) bludgeoning damage if the korred is on the ground.

***Rock.*** *Ranged Weapon Attack:* `dice: d20+9` (+9 to hit), range 60/120 ft., one target. Hit: `dice: 1d8 + 6\|avg` (`1d8 + 6`) bludgeoning damage, or 19 (`dice: 3d8 + 6\|avg` (`3d8 + 6`)) bludgeoning damage if the korred is on the ground.

## Bonus Actions

***Command Hair.*** The korred has at least one 50-foot-long rope woven out of its hair. The korred commands one such rope within 30 feet of it to move up to 20 feet and entangle a Large or smaller creature that the korred can see. The target must succeed on a DC 13 Dexterity saving throw or become [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] by the rope (escape DC 13). Until this grapple ends, the target is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]]. The korred can use a bonus action to release the target, which is also freed if the korred dies or becomes [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

A rope of korred hair has AC 20 and 20 hit points. It regains 1 hit point at the start of each of the korred's turns while the rope has at least 1 hit point and the korred is alive. If the rope drops to 0 hit points, it is destroyed.
```
^statblock

## Environment

forest