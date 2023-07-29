---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/cleric
- monster/type/humanoid/elf
statblock: true
statblock-link: "#^statblock"
name: Drow Inquisitor
ac: 16
hp: 149
hit_dice: 23d8 + 46
cr: '14'
stats: [
  11,
  15,
  14,
  16,
  21,
  20
]
source: [
  MPMM,
  MTF
]
aliases: ["Drow Inquisitor"]
---
# Drow Inquisitor
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 102, Mordenkainen's Tome of Foes p. 184*  

Lolth's worshipers expect treachery—the Spider Queen encourages it, after all. A certain amount of backstabbing and double-crossing can be managed, but too much can undermine an entire community. To keep some semblance of order and to root out traitors, priestesses of Lolth employ inquisitors. Inquisitors are chosen from the ranks of the priesthood, and their authority is equaled only by that of the [drow matron mothers](/compendium/bestiary/humanoid/drow-matron-mother-mpmm.md) (also in this book) of the noble houses. Anyone they decide is at odds with the hierarchy faces painful interrogation and usually an excruciating death.

```ad-statblock
title: Drow Inquisitor
![](/compendium/bestiary/humanoid/token/drow-inquisitor.png#token)
*Medium humanoid(cleric, elf), Neutral Evil*

- **Armor Class** 16 ([breastplate](/compendium/items/breastplate.md))
- **Hit Points** `dice: 23d8 + 46|text(149)` (23d8 + 46) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|15 (+2)|14 (+2)|16 (+3)|21 (+5)|20 (+5)|

- **Proficiency Bonus** +5
- **Saving Throws** Constitution +7, Wisdom +10, Charisma +10
- **Skills** Insight +10, Perception +10, Religion +8, Stealth +7
- **Senses** darkvision 120 ft., passive Perception 20
- **Condition Immunities** frightened
- **Languages** Elvish, Undercommon
- **Challenge** 14

## Traits

***Discern Lie.*** The drow discerns when a creature in earshot speaks a lie in a language the drow knows.

***Fey Ancestry.*** The drow has advantage on saving throws against being [charmed](compendium/rules/conditions.md#charmed), and magic can't put the drow to sleep.

***Sunlight Sensitivity.*** While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on sight.

***Spellcasting.*** The drow's casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 18):

**At will**: [dancing lights](/compendium/spells/dancing-lights.md), [detect magic](/compendium/spells/detect-magic.md), [message](/compendium/spells/message.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)

**1/day each**: [clairvoyance](/compendium/spells/clairvoyance.md), [darkness](/compendium/spells/darkness.md), [detect thoughts](/compendium/spells/detect-thoughts.md), [dispel magic](/compendium/spells/dispel-magic.md), [faerie fire](/compendium/spells/faerie-fire.md), [levitate](/compendium/spells/levitate.md) (self only), [silence](/compendium/spells/silence.md), [suggestion](/compendium/spells/suggestion.md), [true seeing](/compendium/spells/true-seeing.md)

## Actions

***Multiattack.*** The drow makes three Death Lance attacks.

***Death Lance.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 5|avg` (`1d6 + 5`) piercing damage plus `dice: 4d8|avg` (`4d8`) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0.

## Bonus Actions

***Spectral Dagger (Recharges after a Short or Long Rest).*** The drow conjures a floating, spectral dagger within 60 feet of itself. The drow can make a melee spell attack (`dice: d20+10` (+10 to hit)) against one creature within 5 feet of the dagger. On a hit, the target takes `dice: 1d8 + 5|avg` (`1d8 + 5`) force damage.

The dagger lasts for 1 minute. As a bonus action on later turns, the drow can move the dagger up to 20 feet and repeat the attack against one creature within 5 feet of the dagger.
```
^statblock

## Environment

underdark