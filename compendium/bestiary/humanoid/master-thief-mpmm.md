---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: true
statblock-link: "#^statblock"
name: Master Thief
ac: 16
hp: 84
hit_dice: 13d8 + 26
cr: '5'
stats: [
  11,
  18,
  14,
  11,
  11,
  12
]
source: [
  MPMM,
  VGM
]
aliases: ["Master Thief"]
---
# Master Thief
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 174, Volo's Guide to Monsters p. 216*  

Master thieves are known for perpetrating daring heists. They tend to develop a romanticized reputation. A master thief might "retire" from hands-on work to run a thieves' guild, spearhead some covert enterprise, or enjoy a quiet life of luxury.

When a master thief completes a challenging heist, they often leave behind a calling card to taunt their victims. You may roll on the Master Thief Calling Cards table to determine what a master thief leaves behind.

**Master Thief Calling Cards**

| dice: d10 | Calling Card |
|-----------|--------------|
| 1 | Tiny, folded paper cat |
| 2 | Red bird feather |
| 3 | Rose petal |
| 4 | Figurine made from twigs and twine |
| 5 | Small note with the words "It's been fun!" written on it in an ornate script |
| 6 | Glass bead that looks like an eye |
| 7 | Pistachio shells |
| 8 | Two playing cards balanced against each other, resembling a tent |
| 9 | Worthless coin with a bite mark in it |
| 10 | Chalk or charcoal sketch of a domino mask |
^master-thief-calling-cards

```ad-statblock
title: Master Thief
![](/compendium/bestiary/humanoid/token/master-thief.png#token)
*Medium humanoid, Any alignment*

- **Armor Class** 16 ([studded leather](/compendium/items/studded-leather-armor.md))
- **Hit Points** `dice: 13d8 + 26|text(84)` (13d8 + 26) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|18 (+4)|14 (+2)|11 (+0)|11 (+0)|12 (+1)|

- **Proficiency Bonus** +3
- **Saving Throws** Dexterity +7, Intelligence +3
- **Skills** Acrobatics +7, Athletics +3, Perception +3, Sleight of Hand +7, Stealth +7
- **Senses** passive Perception 13
- **Languages** any one language (usually Common) plus thieves' cant
- **Challenge** 5

## Traits

***Evasion.*** If the thief is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the thief instead takes no damage if it succeeds on the saving throw and only half damage if it fails, provided the thief isn't [incapacitated](compendium/rules/conditions.md#incapacitated).

## Actions

***Multiattack.*** The thief makes three Shortsword or Shortbow attacks.

***Shortsword.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 4|avg` (`1d6 + 4`) piercing damage plus `dice: 1d6|avg` (`1d6`) poison damage.

***Shortbow.*** *Ranged Weapon Attack:* `dice: d20+7` (+7 to hit), range 80/320 ft., one target. Hit: `dice: 1d6 + 4|avg` (`1d6 + 4`) piercing damage plus `dice: 1d6|avg` (`1d6`) poison damage.

## Bonus Actions

***Cunning Action.*** The thief takes the Dash, Disengage, or Hide action.

## Reactions

***Uncanny Dodge.*** The thief halves the damage that it takes from an attack that hits it. The thief must be able to see the attacker.
```
^statblock

## Environment

urban