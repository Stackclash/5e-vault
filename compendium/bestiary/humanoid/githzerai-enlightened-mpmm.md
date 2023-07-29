---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/mountain
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/gith
statblock: true
statblock-link: "#^statblock"
name: Githzerai Enlightened
ac: 18
hp: 112
hit_dice: 15d8 + 45
cr: '10'
stats: [
  14,
  19,
  16,
  17,
  19,
  13
]
source: [
  MPMM,
  MTF
]
aliases: ["Githzerai Enlightened"]
---
# Githzerai Enlightened
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 143, Mordenkainen's Tome of Foes p. 208*  

Some spiritual githzerai spend long hours in meditation to transcend the limits of their forms and to apprehend the nature of reality. Zerths who complete the next tier of their training become known as the enlightened.

## Githzerai

Githzerai are otherworldly folk with psionic powers who share an ancestral link to githyanki (also in this book). The githzerai followers of the great leader Zaerith Menyar-Ag-Gith are an ascetic people who live apart from the rest of the cosmos, within the confines of fortresses floating through the chaos of Limbo. Instead of imposing their will on other peoples, they focus on controlling and manipulating their endlessly malleable home.

## Stat Block

```ad-statblock
title: Githzerai Enlightened
![](/compendium/bestiary/humanoid/token/githzerai-enlightened.png#token)
*Medium humanoid(gith), Any alignment*

- **Armor Class** 18 (psychic defense)
- **Hit Points** `dice: 15d8 + 45|text(112)` (15d8 + 45) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|19 (+4)|16 (+3)|17 (+3)|19 (+4)|13 (+1)|

- **Proficiency Bonus** +4
- **Saving Throws** Strength +6, Dexterity +8, Intelligence +7, Wisdom +8
- **Skills** Arcana +7, Insight +8, Perception +8
- **Senses** passive Perception 18
- **Languages** Gith
- **Challenge** 10

## Traits

***Psychic Defense.*** While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier.

***Spellcasting (Psionics).*** The githzerai casts one of the following spells, requiring no spell components and using Wisdom as the spellcasting ability (spell save DC 16):

**At will**: [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible)

**1/day each**: [plane shift](/compendium/spells/plane-shift.md), [teleport](/compendium/spells/teleport.md)

**3/day**: [see invisibility](/compendium/spells/see-invisibility.md)

## Actions

***Multiattack.*** The githzerai makes three Unarmed Strike attacks.

***Unarmed Strike.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 4|avg` (`2d8 + 4`) bludgeoning damage plus `dice: 4d8|avg` (`4d8`) psychic damage.

***Temporal Strike (Recharge 6).*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one creature. Hit: `dice: 2d8 + 4|avg` (`2d8 + 4`) bludgeoning damage plus `dice: 8d12|avg` (`8d12`) psychic damage. The target must succeed on a DC 16 Wisdom saving throw or move 1 round forward in time. A target moved forward in time vanishes for the duration. When the effect ends, the target reappears in the space it left or in an unoccupied space nearest to that space if it's occupied.

## Reactions

***Slow Fall.*** When the githzerai falls, it reduces any falling damage it takes by 50.
```
^statblock

## Environment

desert, mountain, urban