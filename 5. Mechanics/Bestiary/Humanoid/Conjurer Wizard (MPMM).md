---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/6
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: inline
aliases: ["Conjurer Wizard"]
---
# [[5. Mechanics\Bestiary\Humanoid\Conjurer Wizard (MPMM).md|Conjurer Wizard]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 260*  

Conjurers summon creatures from other planes of existence and teleport themselves and others in the blink of an eye.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

```statblock
"name": "Conjurer Wizard (MPMM)"
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
"speed": "30 ft."
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
- "desc": "The conjurer casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 14):\n\nAt will: [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]],\
    \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\
    \n1/day each: [[5. Mechanics/Spells/Fly.md|fly]], [[5. Mechanics/Spells/Stinking Cloud.md|stinking cloud]],\
    \ [[5. Mechanics/Spells/Web.md|web]]\n\n2/day each: [[5. Mechanics/Spells/Fireball.md|fireball]],\
    \ [[5. Mechanics/Spells/Mage Armor.md|mage armor]], [[5. Mechanics/Spells/Unseen Servant.md|unseen servant]]"
  "name": "spells"
"actions":
- "desc": "The conjurer makes three Arcane Burst attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: dice: d20+8 (+8 to hit), reach 5 ft.\
    \ or range 120 ft., one target. Hit: dice: 3d10 + 3|avg (3d10 + 3) force\
    \ damage."
  "name": "Arcane Burst"
"bonus_actions":
- "desc": "The conjurer teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space that it can see. If it instead chooses\
    \ a space within range that is occupied by a willing Small or Medium creature,\
    \ they both teleport, swapping places."
  "name": "Benign Transportation (Recharge 4-6)"
- "desc": "The conjurer magically summons an [[5. Mechanics/Bestiary/Elemental/Air Elemental.md|air elemental]],\
    \ an [[5. Mechanics/Bestiary/Elemental/Earth Elemental.md|earth elemental]], a [fire\
    \ elemental](compendium/bestiary/elemental/fire-elemental.md), or a [[5. Mechanics/Bestiary/Elemental/Water Elemental.md|water elemental]].\
    \ The elemental appears in an unoccupied space within 60 feet of the conjurer,\
    \ whom it obeys. It takes its turn immediately after the conjurer. It lasts for\
    \ 1 hour, until it or the conjurer dies, or until the conjurer dismisses it as\
    \ a bonus action."
  "name": "Summon Elemental (1/Day)"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/humanoid/token/conjurer-wizard.png"
```
^statblock

## Environment

urban