---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
name: Giant Spider
ac: 14
hp: 26
hit_dice: 4d10 + 4
cr: '1'
stats: [
  14,
  16,
  12,
  2,
  11,
  4
]
source: [
  MM,
  CoS,
  HotDQ,
  LMoP,
  RoT,
  SKT,
  TftYP,
  ToA,
  WDH,
  WDMM,
  GoS,
  DIP,
  BGDIA,
  ERLW,
  RMBRE,
  EGW,
  MOT,
  TCE,
  CRCotN,
  DSotDQ,
  PSX
]
aliases: ["Giant Spider"]
---
# Giant Spider
*Source: Monster Manual p. 328, Curse of Strahd, Hoard of the Dragon Queen, Lost Mine of Phandelver, The Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, The Lost Dungeon of Rickedness: Big Rick Energy, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Tasha's Cauldron of Everything, Critical Role: Call of the Netherdeep, Dragonlance: Shadow of the Dragon Queen, Plane Shift: Ixalan*  

To snare its prey, a giant spider spins elaborate webs or shoots sticky strands of webbing from its abdomen. Giant spiders are most commonly found underground, making their lairs on ceilings or in dark, web-filled crevices. Such lairs are often festooned with web cocoons holding past victims.

```ad-statblock
title: Giant Spider
![](/compendium/bestiary/beast/token/giant-spider.png#token)
*Large beast, Unaligned*

- **Armor Class** 14 (natural armor)
- **Hit Points** `dice: 4d10 + 4|text(26)` (4d10 + 4) 
- **Speed** walk 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|16 (+3)|12 (+1)| 2 (-4)|11 (+0)| 4 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +7
- **Senses** blindsight 10 ft., darkvision 60 ft., passive Perception 10
- **Languages** —
- **Challenge** 1

## Traits

***Spider Climb.*** The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

***Web Sense.*** While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.

***Web Walker.*** The spider ignores movement restrictions caused by webbing.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one creature. Hit: `dice: 1d8 + 3|avg` (`1d8 + 3`) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (`dice: 2d8|avg` (`2d8`)) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but [poisoned](compendium/rules/conditions.md#poisoned) for 1 hour, even after regaining hit points, and is [paralyzed](compendium/rules/conditions.md#paralyzed) while [poisoned](compendium/rules/conditions.md#poisoned) in this way.

***Web (Recharge 5-6).*** *Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), range 30/60 ft., one creature. Hit: The target is [restrained](compendium/rules/conditions.md#restrained) by webbing. As an action, the [restrained](compendium/rules/conditions.md#restrained) target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).
```
^statblock

## Environment

underdark, forest, swamp, urban, desert