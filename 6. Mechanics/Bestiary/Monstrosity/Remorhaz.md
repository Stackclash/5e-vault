---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/arctic
- monster/size/huge
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Remorhaz
ac: 17
hp: 195
hit_dice: 17d12 + 85
cr: '11'
stats: [
  24,
  13,
  21,
  4,
  10,
  5
]
source: [
  MM,
  SKT,
  TftYP,
  WDMM,
  BGDIA,
  IMR,
  EGW,
  IDRotF,
  LoX
]
aliases: ["Remorhaz"]
---
# Remorhaz
*Source: Monster Manual p. 258, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Light of Xaryxis*  

From beneath the snow and ice bursts a remorhaz in a cloud of steam, its body pulsing with internal fire. Wing like fins flare from the back of the creature's head, and its wide mouth brims with jagged teeth.

## Arctic Predators

Remorhazes live in arctic climes, preying on elk, polar bears, and other creatures sharing their territory. They can't tolerate warm weather, having adapted to the cold by generating a furnace-like heat within their bodies. When hunting, a remorhaz burrows deep below the snow and ice and lies in wait for the faint vibrations created by a creature moving above it. While hidden under the ice and snow, it can lower its body temperature so that it doesn't melt its cover.

## Young Ones

Frost giant hunters scour the icy wastes for remorhaz nests and eggs. The giants prize young remorhazes, which can be trained from hatching to obey commands and guard the giants' icy citadels. Unlike fully grown specimens, young remorhazes gnaw on their victims instead of swallowing them whole.

## Stat Block

```ad-statblock
title: Remorhaz
![[/6. Mechanics/Bestiary/Monstrosity/Token/remorhaz.png#token]]
*Huge monstrosity, Unaligned*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 17d12 + 85|text(195)` (17d12 + 85) 
- **Speed** walk 30 ft., burrow 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|24 (+7)|13 (+1)|21 (+5)| 4 (-3)|10 (+0)| 5 (-3)|

- **Proficiency Bonus** +4
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., tremorsense 60 ft., passive Perception 10
- **Damage Immunities** cold, fire
- **Languages** —
- **Challenge** 11

## Traits

***Heated Body.*** A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes `dice: 3d6\|avg` (`3d6`) fire damage.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+11` (+11 to hit), reach 10 ft., one target. Hit: `dice: 6d10 + 7\|avg` (`6d10 + 7`) piercing damage plus `dice: 3d6\|avg` (`3d6`) fire damage. If the target is a creature, it is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 17). Until this grapple ends, the target is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]], and the remorhaz can't bite another target.

***Swallow.*** The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] and [[6. Mechanics/Rules/conditions.md#restrained\|restrained]], it has total cover against attacks and other effects outside the remorhaz, and it takes `dice: 6d6\|avg` (`6d6`) acid damage at the start of each of the remorhaz's turns.

If the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall [[6. Mechanics/Rules/conditions.md#prone\|prone]] in a space within 10 feet of the remorhaz. If the remorhaz dies, a swallowed creature is no longer [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] by it and can escape from the corpse using 15 feet of movement, exiting [[6. Mechanics/Rules/conditions.md#prone\|prone]].
```
^statblock

## Environment

arctic