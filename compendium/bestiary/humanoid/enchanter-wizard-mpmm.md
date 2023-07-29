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
name: Enchanter Wizard
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
aliases: ["Enchanter Wizard"]
---
# Enchanter Wizard
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 261, Volo's Guide to Monsters p. 213*  

Enchanters know how to magically influence minds. Benign enchanters use this magic to defuse violence and sow peace, while malevolent enchanters are some of the most evil of all spellcasters.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

## Stat Block

```ad-statblock
title: Enchanter Wizard
![](/compendium/bestiary/humanoid/token/enchanter-wizard.png#token)
*Medium humanoid, Any alignment*

- **Armor Class** 12 (15 with [mage armor](/compendium/spells/mage-armor.md))
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

***Spellcasting.*** The enchanter casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 14):

**At will**: [friends](/compendium/spells/friends.md), [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md)

**2/day each**: [charm person](/compendium/spells/charm-person.md), [mage armor](/compendium/spells/mage-armor.md), [hold person](/compendium/spells/hold-person.md), [invisibility](/compendium/spells/invisibility.md), [suggestion](/compendium/spells/suggestion.md), [tongues](/compendium/spells/tongues.md)

## Actions

***Multiattack.*** The enchanter makes three Arcane Burst attacks.

***Arcane Burst.*** *Melee or Ranged Spell Attack:* `dice: d20+6` (+6 to hit), reach 5 ft. or range 120 ft., one target. Hit: `dice: 3d10 + 3|avg` (`3d10 + 3`) psychic damage.

## Reactions

***Instinctive Charm (Recharge 4-6).*** When a visible creature within 30 feet of the enchanter makes an attack roll against it, the enchanter forces the attacker to make a DC 14 Wisdom saving throw. On a failed save, the attacker redirects the attack roll to the creature closest to it, other than the enchanter or itself. If multiple eligible creatures are closest, the attacker chooses which one to target.
```
^statblock

## Environment

urban