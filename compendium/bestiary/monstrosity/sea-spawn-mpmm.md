---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/environment/underwater
- monster/size/medium
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Sea Spawn
ac: 11
hp: 32
hit_dice: 5d8 + 10
cr: '1'
stats: [
  15,
  8,
  15,
  6,
  10,
  8
]
source: [
  MPMM,
  VGM
]
aliases: ["Sea Spawn"]
---
# Sea Spawn
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 211, Volo's Guide to Monsters p. 189*  

Many of the stories sung as sea chanteys and recounted in dockside taverns tell of people lost to the sea—but not merely drowned and gone. Some unfortunates taken by the ocean live on as sea spawn, haunting the waves like tortured reflections of their former selves. Coral encrusts them. Barnacles cling to their cold skin. Lungs that once filled with air can now breathe in water as well.

Tales provide myriad reasons for these strange transformations. Folklore warns against falling in love with a sea elf or merfolk, braving storms in hopes of a bounteous catch, and promising your heart to a sea god. Such cautionary tales disguise the deeper truth: things lurking beneath the waves strive to claim the hearts and minds of land dwellers.

[Krakens](/compendium/bestiary/monstrosity/kraken.md), morkoths, [sea hags](/compendium/bestiary/fey/sea-hag.md), [marids](/compendium/bestiary/elemental/marid.md), [storm giants](/compendium/bestiary/giant/storm-giant.md), [dragon turtles](/compendium/bestiary/dragon/dragon-turtle.md)—all of these and more can mark mortals as their own and claim them as minions. Unlucky folk might become beholden to such a master through a bleak bargain, or they might find themselves cursed by one. Once warped into a fishlike form, a sea spawn can't leave the water for long without courting death.

Sea spawn come in a wide variety of forms. An individual might have a tentacle for an arm, the jaws of a shark, a sea urchin's spines, a whale's fin, octopus eyes, seaweed hair, or any combination of such qualities. Some of these piscine body parts provide them with special abilities.

## The Sea Spawn of Purple Rocks

Visitors to a string of islands called the Purple Rocks (in the Forgotten Realms setting) might notice one curious fact about the islands' human inhabitants: no infants or elderly are among them. This is because babies born to the Rocklanders are claimed by a [kraken](/compendium/bestiary/monstrosity/kraken.md) named Slarkrethel. The experience transforms the children into fanatics dedicated to the kraken. They return from the sea as humans, but when they reach old age, they transform into sea spawn and rejoin their master in the depths. Some children return having suffered partial transformations and must conceal themselves from strangers until their full transformation in order to keep the secret of the Purple Rocks.

Kraken priests (in this book) tend to the kraken's flock. Most of the priests are island natives, but some are other sorts of creatures that live in the water around the Purple Rocks, such as [merfolk](/compendium/bestiary/humanoid/merfolk.md) or [merrow](/compendium/bestiary/monstrosity/merrow.md), or even sea elves.

## Stat Block

```ad-statblock
title: Sea Spawn
![](/compendium/bestiary/monstrosity/token/sea-spawn.png#token)
*Medium monstrosity, Neutral Evil*

- **Armor Class** 11 (natural armor)
- **Hit Points** `dice: 5d8 + 10|text(32)` (5d8 + 10) 
- **Speed** walk 20 ft., swim 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)| 8 (-1)|15 (+2)| 6 (-2)|10 (+0)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 10
- **Languages** understands Aquan and Common but can't speak
- **Challenge** 1

## Traits

***Limited Amphibiousness.*** The sea spawn can breathe air and water, but it needs to be submerged in the sea at least once a day for 1 minute to avoid suffocating.

## Actions

***Multiattack.*** The sea spawn makes two Unarmed Strike attacks and one Piscine Anatomy attack.

***Unarmed Strike.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) bludgeoning damage.

***Piscine Anatomy.*** The sea spawn uses one of the following options (choose one or roll a `dice: d6|avg` (`d6`)):

- **1–2 Bite.** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) piercing damage.  
- **3–4 Poison Quills.** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 1d6|avg` (`1d6`) poison damage, and the target must succeed on a DC 12 Constitution saving throw or be [poisoned](compendium/rules/conditions.md#poisoned) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.  
- **5–6 Tentacle.** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 10 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) bludgeoning damage, and the target is [grappled](compendium/rules/conditions.md#grappled) (escape DC 12) if it is a Medium or smaller creature. Until this grapple ends, the sea spawn can't use this tentacle on another target.  
```
^statblock

## Environment

coastal, underwater