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
name: Transmuter Wizard
ac: 12
hp: 49
hit_dice: 11d8
cr: '5'
stats: [
  9,
  14,
  11,
  17,
  12,
  11
]
source: [
  MPMM,
  VGM
]
aliases: ["Transmuter Wizard"]
---
# Transmuter Wizard
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 265, Volo's Guide to Monsters p. 218*  

Transmuters are masters at transforming physical forms. They typically view magical transmutation as a path to riches, enlightenment, or apotheosis.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

## Stat Block

```ad-statblock
title: Transmuter Wizard
![[/6. Mechanics/Bestiary/Humanoid/Token/transmuter-wizard.png#token]]
*Medium humanoid, Any alignment*

- **Armor Class** 12 (15 with [[/6. Mechanics/Spells/mage-armor.md\|mage armor]])
- **Hit Points** `dice: 11d8|text(49)` (11d8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 (-1)|14 (+2)|11 (+0)|17 (+3)|12 (+1)|11 (+0)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +6, Wisdom +4
- **Skills** Arcana +6, History +6
- **Senses** passive Perception 11
- **Languages** any four languages
- **Challenge** 5

## Traits

***Transmuter's Stone.*** The transmuter carries a magic stone it crafted. The stone grants it one of the following benefits while bearing the stone; the transmuter chooses the benefit at the end of each long rest:

- **Darkvision.** The transmuter has [[6. Mechanics/Rules/senses.md#darkvision\|darkvision]] out to a range of 60 feet.  
- **Resilience.** The transmuter has proficiency in Constitution saving throws.   
- **Resistance.** Resistance. The transmuter has resistance to acid, cold, fire, lightning, or thunder damage (transmuter's choice whenever choosing this benefit).  
- **Speed.** The transmuter's walking speed is increased by 10 feet.  

***Spellcasting.*** The transmuter casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 14):

**At will**: [[/6. Mechanics/Spells/light.md\|light]], [[/6. Mechanics/Spells/message.md\|message]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]

**1/day each**: [[/6. Mechanics/Spells/telekinesis.md\|telekinesis]]

**2/day each**: [[/6. Mechanics/Spells/fireball.md\|fireball]], [[/6. Mechanics/Spells/hold-person.md\|hold person]], [[/6. Mechanics/Spells/knock.md\|knock]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]], [[/6. Mechanics/Spells/polymorph.md\|polymorph]], [[/6. Mechanics/Spells/slow.md\|slow]]

## Actions

***Multiattack.*** The transmuter makes three Arcane Burst attacks.

***Arcane Burst.*** *Melee or Ranged Spell Attack:* `dice: d20+6` (+6 to hit), reach 5 ft. or range 120 ft., one target. Hit: `dice: 3d10 + 3\|avg` (`3d10 + 3`) acid damage.

## Bonus Actions

***Transmute (Recharge 4-6).*** The transmuter casts [[/6. Mechanics/Spells/alter-self.md\|alter self]] or changes the benefit of Transmuter's Stone if bearing the stone.
```
^statblock

## Environment

urban