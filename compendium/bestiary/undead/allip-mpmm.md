---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/swamp
- monster/environment/urban
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Allip
ac: 13
hp: 40
hit_dice: 9d8
cr: '5'
stats: [
  6,
  17,
  10,
  17,
  15,
  16
]
source: [
  MPMM,
  MTF
]
aliases: ["Allip"]
---
# Allip
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 45, Mordenkainen's Tome of Foes p. 116*  

When a creature uncovers a secret that a powerful being has protected with a mighty curse, the result is often the creation of an allip. Secrets protected in this manner range in scope from a demon lord's true name to the hidden truths of the cosmic order. The creature acquires the secret, but the curse annihilates its body and leaves behind a spectral being composed of fragments from the victim's psyche and overwhelming psychic agony.

Every allip is wracked with a horrifying insight that torments what remains of its mind. In the presence of other creatures, an allip seeks to relieve this burden by sharing its secret. The creature can impart only a shard of the knowledge that doomed it, but that piece is enough to wrack the recipient with temporary mental anguish and violent compulsions. The survivors of an allip's attack are sometimes left with a compulsion to learn more about what spawned this monstrosity. Strange phrases echo through their minds, and weird visions occupy their dreams. The sense that some colossal truth sits just outside their recall plagues them for days, months, and sometimes years after their fateful encounter.

## Insidious Lore

An allip might attempt to share its lore to escape its curse and enter the afterlife. It can transfer knowledge from its mind by guiding another creature to write down what it knows. This process takes days or possibly weeks. An allip can accomplish this task by lurking in the study or workplace of a scholar. If the allip remains hidden, its victim is gradually overcome by frantic energy. A scholar, driven by sudden insights to work night and day, produces reams of text with little memory of exactly what the documents contain. If the allip succeeds, it passes from the world—and its terrible secret hides somewhere in the scholar's text, waiting to be discovered by its next victim.

## Stat Block

```ad-statblock
title: Allip
![](/compendium/bestiary/undead/token/allip.png#token)
*Medium undead, Neutral Evil*

- **Armor Class** 13 
- **Hit Points** `dice: 9d8|text(40)` (9d8) 
- **Speed** walk 0 ft., fly 40 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6 (-2)|17 (+3)|10 (+0)|17 (+3)|15 (+2)|16 (+3)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +6, Wisdom +5
- **Skills** Perception +5, Stealth +6
- **Senses** darkvision 60 ft., passive Perception 15
- **Damage Resistances** acid; fire; lightning; thunder; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** cold, necrotic, poison
- **Condition Immunities** charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained
- **Languages** the languages it knew in life
- **Challenge** 5

## Traits

***Incorporeal Movement.*** The allip can move through other creatures and objects as if they were difficult terrain. It takes `dice: 1d10|avg` (`1d10`) force damage if it ends its turn inside an object.

***Unusual Nature.*** The allip doesn't require air, food, drink, or sleep.

## Actions

***Maddening Touch.*** *Melee Spell Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 4d6 + 3|avg` (`4d6 + 3`) psychic damage.

***Howling Babble (Recharge 6).*** Each creature within 30 feet of the allip that can hear it must make a DC 14 Wisdom saving throw. On a failed save, a target takes `dice: 2d8 + 3|avg` (`2d8 + 3`) psychic damage, and it is [stunned](compendium/rules/conditions.md#stunned) until the end of its next turn. On a successful save, it takes half as much damage and isn't [stunned](compendium/rules/conditions.md#stunned). Constructs and Undead are immune to this effect.

***Whispers of Compulsion.*** The allip chooses up to three creatures it can see within 60 feet of it. Each target must succeed on a DC 14 Wisdom saving throw, or it takes `dice: 2d8 + 3|avg` (`2d8 + 3`) psychic damage and must use its reaction to make a melee weapon attack against one creature of the allip's choice that the allip can see. Constructs and Undead are immune to this effect.
```
^statblock

## Environment

swamp, urban