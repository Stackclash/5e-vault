---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/large
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
name: Rug of Smothering
ac: 12
hp: 33
hit_dice: 6d10
cr: '2'
stats: [
  17,
  14,
  10,
  1,
  3,
  1
]
source: [
  MM,
  CoS,
  HotDQ,
  SKT,
  ToA,
  WDH,
  GoS,
  DIP,
  SDW,
  BGDIA,
  EGW,
  CM,
  WBtW,
  KftGV
]
aliases: ["Rug of Smothering"]
---
# Rug of Smothering
*Source: Monster Manual p. 20, Curse of Strahd, Hoard of the Dragon Queen, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Dragon of Icespire Peak, Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Candlekeep Mysteries, The Wild Beyond the Witchlight, Keys from the Golden Vault*  

```ad-statblock
title: Rug of Smothering
![](/compendium/bestiary/construct/token/rug-of-smothering.png#token)
*Large construct, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 6d10|text(33)` (6d10) 
- **Speed** walk 10 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|14 (+2)|10 (+0)| 1 (-5)| 3 (-4)| 1 (-5)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 60 ft. (blind beyond this radius), passive Perception 6
- **Damage Immunities** poison, psychic
- **Condition Immunities** blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned
- **Languages** —
- **Challenge** 2

## Traits

***Antimagic Susceptibility.*** The rug is [incapacitated](compendium/rules/conditions.md#incapacitated) while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall [unconscious](compendium/rules/conditions.md#unconscious) for 1 minute.

***Damage Transfer.*** While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature [grappled](compendium/rules/conditions.md#grappled) by the rug takes the other half.

***False Appearance.*** While the rug remains motionless, it is indistinguishable from a normal rug.

## Actions

***Smother.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one Medium or smaller creature. Hit: The creature is [grappled](compendium/rules/conditions.md#grappled) (escape DC 13). Until this grapple ends, the target is [restrained](compendium/rules/conditions.md#restrained), [blinded](compendium/rules/conditions.md#blinded), and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes `dice: 2d6 + 3|avg` (`2d6 + 3`) bludgeoning damage.
```
^statblock