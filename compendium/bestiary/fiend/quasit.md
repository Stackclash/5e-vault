---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/tiny
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
name: Quasit
ac: 13
hp: 7
hit_dice: 3d4
cr: '1'
stats: [
  5,
  17,
  10,
  7,
  10,
  10
]
source: [
  MM,
  CoS,
  TftYP,
  WDMM,
  BGDIA,
  EGW,
  TCE,
  CM,
  WBtW,
  CRCotN,
  KftGV
]
aliases: ["Quasit"]
---
# Quasit
*Source: Monster Manual p. 63, Curse of Strahd, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything, Candlekeep Mysteries, The Wild Beyond the Witchlight, Critical Role: Call of the Netherdeep, Keys from the Golden Vault*  

```ad-statblock
title: Quasit
![](/compendium/bestiary/fiend/token/quasit.png#token)
*Tiny fiend(demon), Chaotic Evil*

- **Armor Class** 13 
- **Hit Points** `dice: 3d4|text(7)` (3d4) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 5 (-3)|17 (+3)|10 (+0)| 7 (-2)|10 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +5
- **Senses** darkvision 120 ft., passive Perception 10
- **Damage Resistances** cold; fire; lightning; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** Abyssal, Common
- **Challenge** 1

## Traits

***Shapechanger.*** The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 feet fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.

***Magic Resistance.*** The quasit has advantage on saving throws against spells and other magical effects.

## Actions

***Claw (Bite in Beast Form).*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 3|avg` (`1d4 + 3`) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take `dice: 2d4|avg` (`2d4`) poison damage and become [poisoned](compendium/rules/conditions.md#poisoned) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

***Scare (1/Day).*** One creature of the quasit's choice within 20 feet of it must succeed on a DC 10 Wisdom saving throw or be [frightened](compendium/rules/conditions.md#frightened) for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success.

***Invisibility.*** The quasit magically turns [invisible](compendium/rules/conditions.md#invisible) until it attacks or uses Scare, or until its [concentration](compendium/rules/status.md#concentration) ends (as if [concentration](compendium/rules/status.md#concentration) on a spell). Any equipment the quasit wears or carries is [invisible](compendium/rules/conditions.md#invisible) with it.
```
^statblock