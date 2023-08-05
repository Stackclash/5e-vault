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
"name": "Apprentice Wizard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "History": !!int "4"
  "Arcana": !!int "4"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The apprentice casts one of the following spells, using Intelligence as\
    \ the spellcasting ability (spell save DC 12)\n\nAt will: [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1/day each:\
    \ [burning hands](/compendium/spells/burning-hands.md), [disguise self](/compendium/spells/disguise-self.md),\
    \ [mage armor](/compendium/spells/mage-armor.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
    \ or range 120 ft., one target. Hit: dice: 1d10 + 2|avg (1d10 + 2) force damage."
  "name": "Arcane Burst"
"source":
- "MPMM"
- "VGM"
- "SjA"
"image": "/compendium/bestiary/humanoid/token/apprentice-wizard.png"
aliases: ["Apprentice Wizard"]
---
# Apprentice Wizard
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 259, Volo's Guide to Monsters p. 209, Spelljammer Academy*  

Apprentices are novice arcane spellcasters who serve more experienced wizards or attend school. They perform menial work like cooking or cleaning in exchange for education in the ways of magic.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

## Stat Block

```ad-statblock
title: Apprentice Wizard
![](/compendium/bestiary/humanoid/token/apprentice-wizard.png#token)
*Medium humanoid, Any alignment*

- **Armor Class** 10 (13 with [mage armor](/compendium/spells/mage-armor.md))
- **Hit Points** `dice: 3d8|text(13)` (3d8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|10 (+0)|10 (+0)|14 (+2)|10 (+0)|11 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Arcana +4, History +4
- **Senses** passive Perception 10
- **Languages** any one language (usually Common)
- **Challenge** 1/4

***Spellcasting.*** The apprentice casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 12)

**At will**: [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)

**1/day each**: [burning hands](/compendium/spells/burning-hands.md), [disguise self](/compendium/spells/disguise-self.md), [mage armor](/compendium/spells/mage-armor.md)

## Actions

***Arcane Burst.*** *Melee or Ranged Spell Attack:* `dice: d20+4` (+4 to hit), reach 5 ft. or range 120 ft., one target. Hit: `dice: 1d10 + 2|avg` (`1d10 + 2`) force damage.
```
^statblock

## Environment

urban