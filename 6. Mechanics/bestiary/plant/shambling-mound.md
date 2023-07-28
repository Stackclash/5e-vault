---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/swamp
- monster/size/large
- monster/type/plant
statblock: true
statblock-link: "#^statblock"
name: Shambling Mound
ac: 15
hp: 136
hit_dice: 16d10 + 48
cr: '5'
stats: [
  18,
  8,
  16,
  5,
  10,
  5
]
source: [
  MM,
  CoS,
  HotDQ,
  TftYP,
  ToA,
  WDMM,
  GoS,
  BGDIA,
  MOT,
  CM,
  WBtW,
  JttRC,
  KftGV
]
aliases: ["Shambling Mound"]
---
# Shambling Mound
*Source: Monster Manual p. 270, Curse of Strahd, Hoard of the Dragon Queen, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Mythic Odysseys of Theros, Candlekeep Mysteries, The Wild Beyond the Witchlight, Journeys through the Radiant Citadel, Keys from the Golden Vault*  

```ad-statblock
title: Shambling Mound
![](/compendium/bestiary/plant/token/shambling-mound.png#token)
*Large plant, Unaligned*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 16d10 + 48|text(136)` (16d10 + 48) 
- **Speed** walk 20 ft., swim 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)| 8 (-1)|16 (+3)| 5 (-3)|10 (+0)| 5 (-3)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Stealth +2
- **Senses** blindsight 60 ft. (blind beyond this radius), passive Perception 10
- **Damage Resistances** cold, fire
- **Damage Immunities** lightning
- **Condition Immunities** blinded, deafened, exhaustion
- **Languages** —
- **Challenge** 5

## Traits

***Lightning Absorption.*** Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt.

## Actions

***Multiattack.*** The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is [[compendium/rules/conditions.md#grappled|grappled]] (escape DC 14), and the shambling mound uses its Engulf on it.

***Slam.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: 2d8 + 4\|avg (`2d8 + 4`) bludgeoning damage.

***Engulf.*** The shambling mound engulfs a Medium or smaller creature [[compendium/rules/conditions.md#grappled|grappled]] by it. The engulfed target is [[compendium/rules/conditions.md#blinded|blinded]], [[compendium/rules/conditions.md#restrained|restrained]], and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 2d8 + 4\|avg (`2d8 + 4`) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time.
```
^statblock

## Environment

forest, swamp