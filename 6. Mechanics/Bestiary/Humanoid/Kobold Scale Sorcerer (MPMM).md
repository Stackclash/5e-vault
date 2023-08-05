---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/environment/urban
- monster/size/small
- monster/type/humanoid
statblock: true
statblock-link: "#^statblock"
"name": "Kobold Scale Sorcerer"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "27"
"hit_dice": "5d6 + 10"
"stats":
- !!int "7"
- !!int "15"
- !!int "14"
- !!int "10"
- !!int "9"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Medicine": !!int "1"
  "Arcana": !!int "2"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, Draconic"
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The kobold casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 12):\n\nAt will:\
    \ [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]\n\
    \n2/day each: [[/6. Mechanics/Spells/charm-person.md\|charm person]], [[/6. Mechanics/Spells/fog-cloud.md\|fog cloud]],\
    \ [[/6. Mechanics/Spells/levitate.md\|levitate]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The kobold has advantage on an attack roll against a creature if at least\
    \ one of the kobold's allies is within 5 feet of the creature and the ally isn't\
    \ [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]."
  "name": "Pack Tactics"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the kobold has disadvantage on attack rolls, as well\
    \ as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The kobold makes two Dagger or Chromatic Bolt attacks. It can replace one\
    \ attack with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Spell Attack: dice: d20+4 (+4 to hit), range 60 feet, one target.\
    \ Hit: dice: 2d6 + 2|avg (2d6 + 2) of a type of the kobold's choice: acid,\
    \ cold, fire, lightning, poison, or thunder."
  "name": "Chromatic Bolt"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/humanoid/token/kobold-scale-sorcerer.png"
aliases: ["Kobold Scale Sorcerer"]
---
# Kobold Scale Sorcerer
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 165, Volo's Guide to Monsters p. 167*  

Kobold scale sorcerers have an innate talent for arcane magic, making them highly valuable members of their communities. These sorcerers typically fill the role of advisor, and when threatened, a scale sorcerer lashes out with colorful magic.

A scale sorcerer who resides in or near a dragon's lair may serve as that dragon's diplomat and mouthpiece—anticipating the dragon's needs, issuing commands to others on the dragon's behalf, and reporting information back to the dragon. Such scale sorcerers often wear artificial wings, which are a sign of their draconic office. Scale sorcerers are just as awed by and respectful of dragons as others who venerate these mighty creatures, but they know that duty requires them not to fawn over their master at all times. They also understand that their frequent proximity to their dragon master means they would probably be the first to die if their master became angry or displeased, so they frantically maintain a balance between adoration and terror in their behavior toward their master.

```ad-statblock
title: Kobold Scale Sorcerer
![[/6. Mechanics/Bestiary/Humanoid/Token/kobold-scale-sorcerer.png#token]]
*Small humanoid, Any alignment*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 5d6 + 10|text(27)` (5d6 + 10) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 7 (-2)|15 (+2)|14 (+2)|10 (+0)| 9 (-1)|14 (+2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Arcana +2, Medicine +1
- **Senses** darkvision 60 ft., passive Perception 9
- **Languages** Common, Draconic
- **Challenge** 1

## Traits

***Pack Tactics.*** The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

***Sunlight Sensitivity.*** While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on sight.

***Spellcasting.*** The kobold casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 12):

**At will**: [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]

**2/day each**: [[/6. Mechanics/Spells/charm-person.md\|charm person]], [[/6. Mechanics/Spells/fog-cloud.md\|fog cloud]], [[/6. Mechanics/Spells/levitate.md\|levitate]]

## Actions

***Multiattack.*** The kobold makes two Dagger or Chromatic Bolt attacks. It can replace one attack with a use of Spellcasting.

***Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d4 + 2` (`1d4 + 2`) piercing damage.

***Chromatic Bolt.*** *Ranged Spell Attack:* `dice: d20+4` (+4 to hit), range 60 feet, one target. Hit: `dice: 2d6 + 2` (`2d6 + 2`) of a type of the kobold's choice: acid, cold, fire, lightning, poison, or thunder.
```
^statblock

## Environment

forest, hill, mountain, underdark, urban