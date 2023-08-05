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
"name": "Abjurer Wizard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"stats":
- !!int "9"
- !!int "14"
- !!int "14"
- !!int "18"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "8"
"skillsaves":
  "History": !!int "8"
  "Arcana": !!int "8"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "9"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The abjurer casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 16):\n\nAt will: [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]],\
    \ [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/message.md\|message]],\
    \ [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]\n\n1/day each:\
    \ [[/6. Mechanics/Spells/arcane-lock.md\|arcane lock]], [[/6. Mechanics/Spells/banishment.md\|banishment]],\
    \ [[/6. Mechanics/Spells/globe-of-invulnerability.md\|globe of invulnerability]],\
    \ [[/6. Mechanics/Spells/invisibility.md\|invisibility]], [[/6. Mechanics/Spells/wall-of-force.md\|wall of force]]\n\
    \n2/day each: [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [lightning\
    \ bolt](/compendium/spells/lightning-bolt.md), [[/6. Mechanics/Spells/mage-armor.md\|mage armor]]"
  "name": "spells"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The abjurer makes three Arcane Burst attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: dice: d20+8 (+8 to hit), reach 5 ft.\
    \ or range 120 ft., one target. Hit: dice: 3d10 + 4|avg (3d10 + 4) force damage."
  "name": "Arcane Burst"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Each creature in a 20-foot cube originating from the abjurer must make\
    \ a DC 16 Constitution saving throw. On a failed save, a creature takes dice:\
    \ 8d8|avg (8d8) force damage and is pushed up to 10 feet away from the abjurer.\
    \ On a successful save, a creature takes half as much damage and isn't pushed."
  "name": "Force Blast"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the abjurer or a creature it can see within 30 feet of it takes damage,\
    \ the abjurer magically creates a protective barrier around itself or the other\
    \ creature. The barrier reduces the damage to the protected creature by 26 (dice:\
    \ 4d10 + 4|avg (4d10 + 4)), to a minimum of 0, and then vanishes."
  "name": "Arcane Ward (Recharge 4-6)"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/humanoid/token/abjurer-wizard.png"
aliases: ["Abjurer Wizard"]
---
# Abjurer Wizard
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 260, Volo's Guide to Monsters p. 209*  

Abjurers specialize in creating protective magical wards. Monarchs, nobles, and other wealthy individuals commonly hire abjurers to provide protection.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

## Stat Block

```ad-statblock
title: Abjurer Wizard
![[/6. Mechanics/Bestiary/Humanoid/Token/abjurer-wizard.png#token]]
*Medium humanoid, Any alignment*

- **Armor Class** 12 (15 with [[/6. Mechanics/Spells/mage-armor.md\|mage armor]])
- **Hit Points** `dice: 16d8 + 32|text(104)` (16d8 + 32) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 (-1)|14 (+2)|14 (+2)|18 (+4)|12 (+1)|11 (+0)|

- **Proficiency Bonus** +4
- **Saving Throws** Intelligence +8, Wisdom +5
- **Skills** Arcana +8, History +8
- **Senses** passive Perception 11
- **Languages** any four languages
- **Challenge** 9

***Spellcasting.*** The abjurer casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 16):

**At will**: [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/message.md\|message]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]

**1/day each**: [[/6. Mechanics/Spells/arcane-lock.md\|arcane lock]], [[/6. Mechanics/Spells/banishment.md\|banishment]], [[/6. Mechanics/Spells/globe-of-invulnerability.md\|globe of invulnerability]], [[/6. Mechanics/Spells/invisibility.md\|invisibility]], [[/6. Mechanics/Spells/wall-of-force.md\|wall of force]]

**2/day each**: [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/lightning-bolt.md\|lightning bolt]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]]

## Actions

***Multiattack.*** The abjurer makes three Arcane Burst attacks.

***Arcane Burst.*** *Melee or Ranged Spell Attack:* `dice: d20+8` (+8 to hit), reach 5 ft. or range 120 ft., one target. Hit: `dice: 3d10 + 4` (`3d10 + 4`) force damage.

***Force Blast.*** Each creature in a 20-foot cube originating from the abjurer must make a DC 16 Constitution saving throw. On a failed save, a creature takes `dice: 8d8` (`8d8`) force damage and is pushed up to 10 feet away from the abjurer. On a successful save, a creature takes half as much damage and isn't pushed.

## Reactions

***Arcane Ward (Recharge 4-6).*** When the abjurer or a creature it can see within 30 feet of it takes damage, the abjurer magically creates a protective barrier around itself or the other creature. The barrier reduces the damage to the protected creature by 26 (`dice: 4d10 + 4` (`4d10 + 4`)), to a minimum of 0, and then vanishes.
```
^statblock

## Environment

urban