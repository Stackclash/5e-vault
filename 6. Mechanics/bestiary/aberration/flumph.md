---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/small
- monster/type/aberration
statblock: true
statblock-link: "#^statblock"
name: Flumph
ac: 12
hp: 7
hit_dice: 2d6
cr: 1/8
stats: [
  6,
  15,
  10,
  14,
  14,
  11
]
source: [
  MM,
  WDMM,
  LoX
]
aliases: ["Flumph"]
---
*Source: Monster Manual p. 135, Waterdeep: Dungeon of the Mad Mage, Light of Xaryxis*  

The mysterious flumphs drift through the Underdark, propelled through the air by the jets whose sound gives them their name. A flumph glows faintly, reflecting its moods in its color. Soft pink means it is amused, deep blue is sadness, green expresses curiosity, and crimson is anger.

## Intelligent and Wise

Flumphs communicate telepathically. Though they resemble jellyfish, flumphs are sentient beings of great intelligence and wisdom, possessing advanced knowledge of religion, philosophy, mathematics, and countless other subjects.

Flumphs are sensitive to the emotional states of nearby creatures. If a creature's thoughts suggest goodness, a flumph seeks that creature out. When facing creatures that exude evil, a flumph flees.

## Psionic Siphons

Flumphs feed by siphoning mental energy from psionic creatures, and they can be found lurking near communities of mind flayers, aboleths, githyanki, and githzerai. As passive parasites, they take only the mental energy they need, and most creatures feel no loss or discomfort from such feeding.

Consuming psionic energy reveals the thoughts and emotions of the creatures on which the flumphs feed. Since so many of those creatures are evil, flumphs are often subjected to thoughts, emotions, and hungers that sicken their pure nature. When flumphs encounter good-hearted adventurers, they eagerly share the dark secrets they have learned in the hopes of casting down their evil sources of energy, even if doing so means they must seek out new sources of nourishment.

## Flumph Society

Flumphs live in complex and organized groups called cloisters, within which each flumph has a place and purpose. These harmonious groupings have no need for leaders, since all flumphs contribute in their own way

## Stat Block

```ad-statblock
title: Flumph
![[token/flumph.png#token]]
*Small aberration, Lawful Good*

- **Armor Class** 12 
- **Hit Points** `dice: 2d6|text(7)` (2d6) 
- **Speed** walk 5 ft., fly 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6 (-2)|15 (+2)|10 (+0)|14 (+2)|14 (+2)|11 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Arcana +4, History +4, Religion +4
- **Senses** darkvision 60 ft., passive Perception 12
- **Damage Vulnerabilities** psychic
- **Languages** understands Undercommon but can't speak, telepathy 60 ft.
- **Challenge** 1/8

## Traits

***Advanced Telepathy.*** The flumph can perceive the content of any telepathic communication used within 60 feet of it, and it can't be surprised by creatures with any form of telepathy.

***Prone Deficiency.*** If the flumph is knocked [prone](/6. Mechanics/rules/conditions.md#prone), roll a die. On an odd result, the flumph lands upside-down and is [incapacitated](/6. Mechanics/rules/conditions.md#incapacitated). At the end of each of its turns, the flumph can make a DC 10 Dexterity saving throw, righting itself and ending the [incapacitated](/6. Mechanics/rules/conditions.md#incapacitated) condition if it succeeds.

***Telepathic Shroud.*** The flumph is immune to any effect that would sense its emotions or read its thoughts, as well as all divination spells.

## Actions

***Tendrils.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) piercing damage plus `dice: 1d4|avg` (`1d4`) acid damage. At the end of each of its turns, the target must make a DC 10 Constitution saving throw, taking 2 (`dice: 1d4|avg` (`1d4`)) acid damage on a failure or ending the recurring acid damage on a success. A [lesser restoration](/6. Mechanics/spells/lesser-restoration.md) spell cast on the target also ends the recurring acid damage.

***Stench Spray (1/Day).*** Each creature in a 15-foot cone originating from the flumph must succeed on a DC 10 Dexterity saving throw or be coated in a foul-smelling liquid. A coated creature exudes a horrible stench for `dice: 1d4|avg` (`1d4`) hours. The coated creature is [poisoned](/6. Mechanics/rules/conditions.md#poisoned) as long as the stench lasts, and other creatures are [poisoned](/6. Mechanics/rules/conditions.md#poisoned) while with in 5 feet of the coated creature. A creature can remove the stench on itself by using a short rest to bathe in water, alcohol, or vinegar.
```
^statblock

## Environment

underdark