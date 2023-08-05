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
"name": "Enchanter Wizard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "49"
"hit_dice": "11d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "5"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The enchanter casts one of the following spells, using Intelligence as\
    \ the spellcasting ability (spell save DC 14):\n\nAt will: [[/6. Mechanics/Spells/friends.md\|friends]],\
    \ [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/message.md\|message]]\n\
    \n2/day each: [[/6. Mechanics/Spells/charm-person.md\|charm person]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]],\
    \ [[/6. Mechanics/Spells/hold-person.md\|hold person]], [[/6. Mechanics/Spells/invisibility.md\|invisibility]],\
    \ [[/6. Mechanics/Spells/suggestion.md\|suggestion]], [[/6. Mechanics/Spells/tongues.md\|tongues]]"
  "name": "spells"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The enchanter makes three Arcane Burst attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: dice: d20+6 (+6 to hit), reach 5 ft.\
    \ or range 120 ft., one target. Hit: dice: 3d10 + 3|avg (3d10 + 3) psychic\
    \ damage."
  "name": "Arcane Burst"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When a visible creature within 30 feet of the enchanter makes an attack\
    \ roll against it, the enchanter forces the attacker to make a DC 14 Wisdom saving\
    \ throw. On a failed save, the attacker redirects the attack roll to the creature\
    \ closest to it, other than the enchanter or itself. If multiple eligible creatures\
    \ are closest, the attacker chooses which one to target."
  "name": "Instinctive Charm (Recharge 4-6)"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/humanoid/token/enchanter-wizard.png"
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
![[/6. Mechanics/Bestiary/Humanoid/Token/enchanter-wizard.png#token]]
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

***Spellcasting.*** The enchanter casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 14):

**At will**: [[/6. Mechanics/Spells/friends.md\|friends]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/message.md\|message]]

**2/day each**: [[/6. Mechanics/Spells/charm-person.md\|charm person]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]], [[/6. Mechanics/Spells/hold-person.md\|hold person]], [[/6. Mechanics/Spells/invisibility.md\|invisibility]], [[/6. Mechanics/Spells/suggestion.md\|suggestion]], [[/6. Mechanics/Spells/tongues.md\|tongues]]

## Actions

***Multiattack.*** The enchanter makes three Arcane Burst attacks.

***Arcane Burst.*** *Melee or Ranged Spell Attack:* `dice: d20+6` (+6 to hit), reach 5 ft. or range 120 ft., one target. Hit: `dice: 3d10 + 3` (`3d10 + 3`) psychic damage.

## Reactions

***Instinctive Charm (Recharge 4-6).*** When a visible creature within 30 feet of the enchanter makes an attack roll against it, the enchanter forces the attacker to make a DC 14 Wisdom saving throw. On a failed save, the attacker redirects the attack roll to the creature closest to it, other than the enchanter or itself. If multiple eligible creatures are closest, the attacker chooses which one to target.
```
^statblock

## Environment

urban