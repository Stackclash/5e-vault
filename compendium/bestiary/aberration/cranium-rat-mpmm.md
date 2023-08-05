---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/environment/urban
- monster/size/tiny
- monster/type/aberration
statblock: true
statblock-link: "#^statblock"
"name": "Cranium Rat"
"size": "Tiny"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "2"
- !!int "14"
- !!int "10"
- !!int "4"
- !!int "11"
- !!int "8"
"speed": "walk 30 ft."
"senses": "darkvision 30 ft., passive Perception 10"
"languages": "telepathy 30 ft."
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The cranium rat is immune to any effect that would sense its emotions or\
    \ read its thoughts, as well as to all divination spells."
  "name": "Telepathic Shroud"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: 1 piercing damage."
  "name": "Bite"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The cranium rat sheds dim light from its exposed brain in a 5-foot radius\
    \ or extinguishes the light."
  "name": "Illumination"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/aberration/token/cranium-rat.png"
aliases: ["Cranium Rat"]
---
# Cranium Rat
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 83, Volo's Guide to Monsters p. 133*  

## Cranium Rat

Mind flayers create cranium rats by bombarding rats with psionic energy. Cranium rats are somewhat smarter than ordinary rats and behave as such. If enough cranium rats come together to form a swarm, they merge their minds into a single intelligence with the accumulated memories of all the swarm's constituents. The rats become smarter as a result, and retain their heightened intelligence for as long as the swarm persists. The swarm also awakens latent psionic abilities implanted within each cranium rat by its mind flayer creators, bestowing upon the swarm psionic powers.

A single cranium rat uses its natural telepathy to communicate hunger, fear, and other base emotions. A swarm of cranium rats communicating telepathically "speaks" as one creature, often referring to itself using the collective pronouns "we" and "us." Some mind flayer colonies use cranium rats as spies. The rats invade communities and act as eyes and ears for the colony's elder brain, transmitting their thoughts when they swarm and are within range of the elder brain's telepathy.

## Stat Block

```ad-statblock
title: Cranium Rat
![](/compendium/bestiary/aberration/token/cranium-rat.png#token)
*Tiny aberration, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 1d4|text(2)` (1d4) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 2 (-4)|14 (+2)|10 (+0)| 4 (-3)|11 (+0)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 30 ft., passive Perception 10
- **Languages** telepathy 30 ft.
- **Challenge** 0

## Traits

***Telepathic Shroud.*** The cranium rat is immune to any effect that would sense its emotions or read its thoughts, as well as to all divination spells.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: 1 piercing damage.

## Bonus Actions

***Illumination.*** The cranium rat sheds dim light from its exposed brain in a 5-foot radius or extinguishes the light.
```
^statblock

## Environment

underdark, urban