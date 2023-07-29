---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/environment/underwater
- monster/size/medium
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Kraken Priest
ac: 15
hp: 75
hit_dice: 10d8 + 30
cr: '5'
stats: [
  12,
  10,
  16,
  10,
  15,
  14
]
source: [
  MPMM,
  VGM
]
aliases: ["Kraken Priest"]
---
# Kraken Priest
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 167, Volo's Guide to Monsters p. 215*  

A kraken can seem godlike to folk who have faced its fury. Those who mistake its might for divine power and those who seek to appease the monster through veneration are sometimes rewarded with power, to serve thereafter as kraken priests.

Every kraken priest undergoes a change in appearance that reflects the kraken's influence, although each one differs in how their reverence is displayed. One kraken priest might have ink-black eyes and a suckered tentacle for a tongue, while another has a featureless face and a body covered in eyes and mouths that dribble seawater. These horrific manifestations intensify when the kraken possesses its minion to utter dire pronouncements.

```ad-statblock
title: Kraken Priest
![](/compendium/bestiary/monstrosity/token/kraken-priest.png#token)
*Medium monstrosity, Chaotic Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 10d8 + 30|text(75)` (10d8 + 30) 
- **Speed** walk 30 ft., swim 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|10 (+0)|16 (+3)|10 (+0)|15 (+2)|14 (+2)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Perception +5
- **Senses** passive Perception 15
- **Languages** any two languages
- **Challenge** 5

## Traits

***Amphibious.*** The priest can breathe air and water.

***Spellcasting.*** The priest casts one of the following spells, requiring no material components and using Wisdom as the spellcasting ability (spell save DC 13):

**At will**: [command](/compendium/spells/command.md), [create or destroy water](/compendium/spells/create-or-destroy-water.md)

**1/day**: [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md)

**3/day each**: [control water](/compendium/spells/control-water.md), [darkness](/compendium/spells/darkness.md), [water breathing](/compendium/spells/water-breathing.md), [water walk](/compendium/spells/water-walk.md)

## Actions

***Multiattack.*** The priest makes two Thunderous Touch or Thunderbolt attacks.

***Thunderous Touch.*** *Melee Spell Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 5d10|avg` (`5d10`) thunder damage.

***Thunderbolt.*** *Ranged Spell Attack:* `dice: d20+5` (+5 to hit), range 60 ft., one target. Hit: `dice: 2d10|avg` (`2d10`) lightning damage plus 11 (`dice: 2d10|avg` (`2d10`)) thunder damage, and the target is knocked [prone](compendium/rules/conditions.md#prone).

***Voice of the Kraken (Recharges after a Short or Long Rest).*** A kraken speaks through the priest with a thunderous voice audible within 300 feet. Creatures of the priest's choice that can hear the kraken's words (which are spoken in Abyssal, Infernal, or Primordial) must succeed on a DC 14 Wisdom saving throw or be [frightened](compendium/rules/conditions.md#frightened) of the priest for 1 minute. A [frightened](compendium/rules/conditions.md#frightened) target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
^statblock

## Environment

coastal, underwater