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
"name": "Conjurer Wizard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "58"
"hit_dice": "13d8"
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
"cr": "6"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The conjurer casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 14):\n\nAt will: [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]],\
    \ [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]\n\
    \n1/day each: [[/6. Mechanics/Spells/fly.md\|fly]], [[/6. Mechanics/Spells/stinking-cloud.md\|stinking cloud]],\
    \ [[/6. Mechanics/Spells/web.md\|web]]\n\n2/day each: [[/6. Mechanics/Spells/fireball.md\|fireball]],\
    \ [[/6. Mechanics/Spells/mage-armor.md\|mage armor]], [[/6. Mechanics/Spells/unseen-servant.md\|unseen servant]]"
  "name": "spells"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The conjurer makes three Arcane Burst attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: dice: d20+8 (+8 to hit), reach 5 ft.\
    \ or range 120 ft., one target. Hit: dice: 3d10 + 3|avg (3d10 + 3) force damage."
  "name": "Arcane Burst"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The conjurer teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space that it can see. If it instead chooses\
    \ a space within range that is occupied by a willing Small or Medium creature,\
    \ they both teleport, swapping places."
  "name": "Benign Transportation (Recharge 4-6)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The conjurer magically summons an [[/6. Mechanics/Bestiary/Elemental/Air Elemental.md\|air elemental]],\
    \ an [[/6. Mechanics/Bestiary/Elemental/Earth Elemental.md\|earth elemental]], a [fire\
    \ elemental](/compendium/bestiary/elemental/fire-elemental.md), or a [[/6. Mechanics/Bestiary/Elemental/Water Elemental.md\|water elemental]].\
    \ The elemental appears in an unoccupied space within 60 feet of the conjurer,\
    \ whom it obeys. It takes its turn immediately after the conjurer. It lasts for\
    \ 1 hour, until it or the conjurer dies, or until the conjurer dismisses it as\
    \ a bonus action."
  "name": "Summon Elemental (1/Day)"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/humanoid/token/conjurer-wizard.png"
aliases: ["Conjurer Wizard"]
---
# Conjurer Wizard
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 260, Volo's Guide to Monsters p. 212*  

Conjurers summon creatures from other planes of existence and teleport themselves and others in the blink of an eye.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

## Stat Block

```ad-statblock
title: Conjurer Wizard
![[/6. Mechanics/Bestiary/Humanoid/Token/conjurer-wizard.png#token]]
*Medium humanoid, Any alignment*

- **Armor Class** 12 (15 with [[/6. Mechanics/Spells/mage-armor.md\|mage armor]])
- **Hit Points** `dice: 13d8|text(58)` (13d8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 (-1)|14 (+2)|11 (+0)|17 (+3)|12 (+1)|11 (+0)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +6, Wisdom +4
- **Skills** Arcana +6, History +6
- **Senses** passive Perception 11
- **Languages** any four languages
- **Challenge** 6

***Spellcasting.*** The conjurer casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 14):

**At will**: [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]

**1/day each**: [[/6. Mechanics/Spells/fly.md\|fly]], [[/6. Mechanics/Spells/stinking-cloud.md\|stinking cloud]], [[/6. Mechanics/Spells/web.md\|web]]

**2/day each**: [[/6. Mechanics/Spells/fireball.md\|fireball]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]], [[/6. Mechanics/Spells/unseen-servant.md\|unseen servant]]

## Actions

***Multiattack.*** The conjurer makes three Arcane Burst attacks.

***Arcane Burst.*** *Melee or Ranged Spell Attack:* `dice: d20+8` (+8 to hit), reach 5 ft. or range 120 ft., one target. Hit: `dice: 3d10 + 3` (`3d10 + 3`) force damage.

## Bonus Actions

***Benign Transportation (Recharge 4-6).*** The conjurer teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space that it can see. If it instead chooses a space within range that is occupied by a willing Small or Medium creature, they both teleport, swapping places.

***Summon Elemental (1/Day).*** The conjurer magically summons an [[/6. Mechanics/Bestiary/Elemental/Air Elemental.md\|air elemental]], an [[/6. Mechanics/Bestiary/Elemental/Earth Elemental.md\|earth elemental]], a [[/6. Mechanics/Bestiary/Elemental/Fire Elemental.md\|fire elemental]], or a [[/6. Mechanics/Bestiary/Elemental/Water Elemental.md\|water elemental]]. The elemental appears in an unoccupied space within 60 feet of the conjurer, whom it obeys. It takes its turn immediately after the conjurer. It lasts for 1 hour, until it or the conjurer dies, or until the conjurer dismisses it as a bonus action.
```
^statblock

## Environment

urban