---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/1
- monster/environment/forest
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/environment/urban
- monster/size/small
- monster/type/humanoid
statblock: inline
aliases: ["Kobold Scale Sorcerer"]
---
# [[5. Mechanics/Bestiary/Humanoid/Kobold Scale Sorcerer (MPMM).md|Kobold Scale Sorcerer]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 165*  

Kobold scale sorcerers have an innate talent for arcane magic, making them highly valuable members of their communities. These sorcerers typically fill the role of advisor, and when threatened, a scale sorcerer lashes out with colorful magic.

A scale sorcerer who resides in or near a dragon's lair may serve as that dragon's diplomat and mouthpiece—anticipating the dragon's needs, issuing commands to others on the dragon's behalf, and reporting information back to the dragon. Such scale sorcerers often wear artificial wings, which are a sign of their draconic office. Scale sorcerers are just as awed by and respectful of dragons as others who venerate these mighty creatures, but they know that duty requires them not to fawn over their master at all times. They also understand that their frequent proximity to their dragon master means they would probably be the first to die if their master became angry or displeased, so they frantically maintain a balance between adoration and terror in their behavior toward their master.

```statblock
"name": "Kobold Scale Sorcerer (MPMM)"
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
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "1"
  "Arcana": !!int "2"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, Draconic"
"cr": "1"
"traits":
- "desc": "The kobold casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 12):\n\nAt will:\
    \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\
    \n2/day each: [[5. Mechanics/Spells/Charm Person.md|charm person]], [[5. Mechanics/Spells/Fog Cloud.md|fog cloud]],\
    \ [[5. Mechanics/Spells/Levitate.md|levitate]]"
  "name": "spells"
- "desc": "The kobold has advantage on an attack roll against a creature if at least\
    \ one of the kobold's allies is within 5 feet of the creature and the ally isn't\
    \ [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Pack Tactics"
- "desc": "While in sunlight, the kobold has disadvantage on attack rolls, as well\
    \ as on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "The kobold makes two Dagger or Chromatic Bolt attacks. It can replace one\
    \ attack with a use of Spellcasting."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
- "desc": "Ranged Spell Attack: dice: d20+4 (+4 to hit), range 60 feet, one target.\
    \ Hit: dice: 2d6 + 2|avg (2d6 + 2) of a type of the kobold's choice: acid,\
    \ cold, fire, lightning, poison, or thunder."
  "name": "Chromatic Bolt"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/kobold-scale-sorcerer.png"
```
^statblock

## Environment

forest, hill, mountain, underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```