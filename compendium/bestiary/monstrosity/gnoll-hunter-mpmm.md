---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/arctic
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/medium
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Gnoll Hunter
ac: 13
hp: 22
hit_dice: 4d8 + 4
cr: 1/2
stats: [
  14,
  14,
  12,
  8,
  12,
  8
]
source: [
  MPMM,
  VGM
]
aliases: ["Gnoll Hunter"]
---
# Gnoll Hunter
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 144, Volo's Guide to Monsters p. 154*  

Hunters are the stealthiest gnolls in a war band. In the vanguard, they creep around, picking off isolated opposition while clearing the way for the rest of the force to advance.

Hunters are particularly skilled with the longbow, and they fire arrows with viciously barbed heads. Even when a hunter doesn't kill their target with their first shot, the arrow strike brings so much pain that the victim is hobbled in its attempt to run away.

## Gnolls

The first gnolls were hyenas transformed by magic. Many of them were then corrupted by the demon lord Yeenoghu. Whether in service to Yeenoghu or dedicated to the survival of their kin, gnoll war bands seek to soften up foes with surprise attacks and to leave no survivors alive.

## Stat Block

```ad-statblock
title: Gnoll Hunter
![](/compendium/bestiary/monstrosity/token/gnoll-hunter.png#token)
*Medium monstrosity, Chaotic Evil*

- **Armor Class** 13 ([leather armor](/compendium/items/leather-armor.md))
- **Hit Points** `dice: 4d8 + 4|text(22)` (4d8 + 4) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|14 (+2)|12 (+1)| 8 (-1)|12 (+1)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +4
- **Senses** darkvision 60 ft., passive Perception 13
- **Languages** Gnoll
- **Challenge** 1/2

## Actions

***Multiattack.*** The gnoll makes two Bite, Spear, or Longbow attacks.

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) piercing damage.

***Spear.*** *Melee or Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage, or 6 (`dice: 1d8 + 2|avg` (`1d8 + 2`)) piercing damage when used with two hands to make a melee attack.

***Longbow.*** *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), range 150/600 ft., one target. Hit: `dice: 1d8 + 2|avg` (`1d8 + 2`) piercing damage, and the target's speed is reduced by 10 feet until the end of its next turn.

## Bonus Actions

***Rampage.*** After the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll moves up to half its speed and makes a Bite attack.
```
^statblock

## Environment

arctic, forest, grassland, hill