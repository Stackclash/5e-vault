---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
statblock: true
statblock-link: "#^statblock"
name: Knight
ac: 18
hp: 52
hit_dice: 8d8 + 16
cr: '3'
stats: [
  16,
  11,
  14,
  11,
  11,
  15
]
source: [
  MM,
  CoS,
  HotDQ,
  PotA,
  RoT,
  SKT,
  TftYP,
  ToA,
  WDH,
  GoS,
  DC,
  DIP,
  BGDIA,
  EGW,
  MOT,
  CM,
  WBtW,
  CRCotN,
  JttRC,
  DSotDQ,
  KftGV
]
aliases: ["Knight"]
---
*Source: Monster Manual p. 347, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Divine Contention, Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Candlekeep Mysteries, The Wild Beyond the Witchlight, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel, Dragonlance: Shadow of the Dragon Queen, Keys from the Golden Vault*  

Knights are warriors who pledge service to rulers, religious orders, and noble causes. A knight's alignment determines the extent to which a pledge is honored. Whether undertaking a quest or patrolling a realm, a knight often travels with an entourage that includes squires and hirelings who are commoners.

```ad-statblock
title: Knight
![[token/knight.png#token]]
*Medium humanoid(any race), Any alignment*

- **Armor Class** 18 ([plate armor](/6. Mechanics/items/plate-armor.md))
- **Hit Points** `dice: 8d8 + 16|text(52)` (8d8 + 16) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|11 (+0)|14 (+2)|11 (+0)|11 (+0)|15 (+2)|

- **Proficiency Bonus** +2
- **Saving Throws** Constitution +4, Wisdom +2
- **Skills** ⏤
- **Senses** passive Perception 10
- **Languages** any one language (usually Common)
- **Challenge** 3

## Traits

***Brave.*** The knight has advantage on saving throws against being [frightened](/6. Mechanics/rules/conditions.md#frightened).

## Actions

***Multiattack.*** The knight makes two melee attacks.

***Greatsword.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 3|avg` (`2d6 + 3`) slashing damage.

***Heavy Crossbow.*** *Ranged Weapon Attack:* `dice: d20+2` (+2 to hit), range 100/400 ft., one target. Hit: `dice: 1d10|avg` (`1d10`) piercing damage.

***Leadership (Recharges after a Short or Long Rest).*** For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a `dice: d4|avg` (`d4`) to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is [incapacitated](/6. Mechanics/rules/conditions.md#incapacitated).

## Reactions

***Parry.*** The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon.
```
^statblock

## Environment

urban