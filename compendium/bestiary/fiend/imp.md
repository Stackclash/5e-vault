---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/tiny
- monster/type/fiend/devil
statblock: true
statblock-link: "#^statblock"
name: Imp
ac: 13
hp: 10
hit_dice: 3d4 + 3
cr: '1'
stats: [
  6,
  17,
  13,
  11,
  12,
  14
]
source: [
  MM,
  CoS,
  SKT,
  ToA,
  WDH,
  GoS,
  BGDIA,
  EGW,
  TCE,
  CM,
  KftGV
]
aliases: ["Imp"]
---
# Imp
*Source: Monster Manual p. 76, Curse of Strahd, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything, Candlekeep Mysteries, Keys from the Golden Vault*  

```ad-statblock
title: Imp
![](/compendium/bestiary/fiend/token/imp.png#token)
*Tiny fiend(devil), Lawful Evil*

- **Armor Class** 13 
- **Hit Points** `dice: 3d4 + 3|text(10)` (3d4 + 3) 
- **Speed** walk 20 ft., fly 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6 (-2)|17 (+3)|13 (+1)|11 (+0)|12 (+1)|14 (+2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Deception +4, Insight +3, Persuasion +4, Stealth +5
- **Senses** darkvision 120 ft., passive Perception 11
- **Damage Resistances** cold; bludgeoning, piercing, slashing from nonmagical attacks not made with silvered weapons
- **Damage Immunities** fire, poison
- **Condition Immunities** poisoned
- **Languages** Infernal, Common
- **Challenge** 1

## Traits

***Shapechanger.*** The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.

***Devil's Sight.*** Magical darkness doesn't impede the imp's darkvision.

***Magic Resistance.*** The imp has advantage on saving throws against spells and other magical effects.

## Actions

***Sting (Bite in Beast Form).*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 3|avg` (`1d4 + 3`) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (`dice: 3d6|avg` (`3d6`)) poison damage on a failed save, or half as much damage on a successful one.

***Invisibility.*** The imp magically turns [invisible](compendium/rules/conditions.md#invisible) until it attacks, or until its [concentration](compendium/rules/status.md#concentration) ends (as if [concentration](compendium/rules/status.md#concentration) on a spell). Any equipment the imp wears or carries is [invisible](compendium/rules/conditions.md#invisible) with it.
```
^statblock