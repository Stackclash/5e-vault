---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/medium
- monster/type/fiend/gnoll
statblock: true
statblock-link: "#^statblock"
name: Flind
ac: 16
hp: 127
hit_dice: 15d8 + 60
cr: '9'
stats: [
  20,
  14,
  19,
  11,
  13,
  12
]
source: [
  MPMM,
  VGM
]
aliases: ["Flind"]
---
# Flind
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 127, Volo's Guide to Monsters p. 153*  

When the demon lord Yeenoghu wants to create a particularly fearsome war band leader, he transforms an excep tionally strong and vicious gnoll into a demonic warrior known as a flind.

A war band of demon-worshiping gnolls typically contains only one flind, and that creature sets the war band's path. Because of its special connection to Yeenoghu, a flind uses demonic insight to guide the gnolls toward weak prey ripe for slaughter.

Unlike other leaders who might skulk behind their minions, a flind leads the charge in battle. Its flail causes wracking pain, paralysis, and disorientation in those it strikes.

```ad-statblock
title: Flind
![](/compendium/bestiary/fiend/token/flind.png#token)
*Medium fiend(gnoll), Chaotic Evil*

- **Armor Class** 16 ([breastplate](/compendium/items/breastplate.md))
- **Hit Points** `dice: 15d8 + 60|text(127)` (15d8 + 60) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)|14 (+2)|19 (+4)|11 (+0)|13 (+1)|12 (+1)|

- **Proficiency Bonus** +4
- **Saving Throws** Constitution +8, Wisdom +5
- **Skills** Intimidation +5, Perception +5
- **Senses** darkvision 60 ft., passive Perception 15
- **Languages** Gnoll, Abyssal
- **Challenge** 9

## Traits

***Aura of Blood Thirst.*** If the flind isn't [incapacitated](compendium/rules/conditions.md#incapacitated), any creature with the Rampage trait can make a Bite attack as a bonus action while within 10 feet of the flind.

## Actions

***Multiattack.*** The flind makes one Flail of Chaos attack, one Flail of Pain attack, and one Flail of Paralysis attack, or it makes three Longbow attacks.

***Flail of Chaos.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 10 ft., one target. Hit: `dice: 1d10 + 5|avg` (`1d10 + 5`) bludgeoning damage, and the target must make a DC 16 Wisdom saving throw. On a failed save, the target must use its reaction, if available, to make one melee attack against a random creature, other than the flind, within its reach. If there's no creature within reach, the target instead moves half its speed in a random direction.

***Flail of Pain.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 10 ft., one target. Hit: `dice: 1d10 + 5|avg` (`1d10 + 5`) bludgeoning damage plus `dice: 3d10|avg` (`3d10`) psychic damage.

***Flail of Paralysis.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 10 ft., one target. Hit: `dice: 1d10 + 5|avg` (`1d10 + 5`) bludgeoning damage, and the target must succeed on a DC 16 Constitution saving throw or be [paralyzed](compendium/rules/conditions.md#paralyzed) until the end of its next turn.

***Longbow.*** *Ranged Weapon Attack:* `dice: d20+6` (+6 to hit), range 150/600 ft., one target. Hit: `dice: 1d8 + 2|avg` (`1d8 + 2`) piercing damage.
```
^statblock

## Environment

coastal, forest, grassland, hill