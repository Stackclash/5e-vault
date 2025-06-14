---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: urban
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/8
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid
aliases:
  - Diviner Wizard
---
# [[5. Mechanics\Bestiary\Humanoid\Diviner Wizard (MPMM).md|Diviner Wizard]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 261, Volo's Guide to Monsters p. 213*

Diviners peer into the future and know that knowledge is power. They might act aloof and mysterious, hinting at omens and secrets, or they might be know-it-alls, spilling insights to advance their own status.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

```statblock
"name": "Diviner Wizard (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "90"
"hit_dice": "20d8"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "11"
  - !!int "18"
  - !!int "12"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "intelligence": "+7"
  - "wisdom": "+4"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+7"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "8"
"actions":
  - "desc": "The diviner makes three Arcane Burst attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 120\
      \ ft., one target. Hit: 20 (3d10 + 4) radiant damage."
    "name": "Arcane Burst"
  - "desc": "The diviner magically creates a burst of illumination in a 10-foot-radius\
      \ sphere centered on a point within 120 feet of it. Each creature in that area\
      \ must make a DC 15 Wisdom saving throw. On a failed save, a creature takes\
      \ 45 (10d8) psychic damage and is [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
      \ until the end of the diviner's next turn. On a successful save, the creature\
      \ takes half as much damage and isn't [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]."
    "name": "Overwhelming Revelation (Recharge 5-6)"
  - "desc": "The diviner casts one of the following spells, using Intelligence as\
      \ the spellcasting ability (spell save DC 15):\n\nAt will: [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
      \ [[5. Mechanics/Spells/Message.md|message]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\
      \n2/day each: [[5. Mechanics/Spells/Arcane Eye.md|arcane eye]], [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
      \ [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[5. Mechanics/Spells/Fly.md|fly]],\
      \ [[5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]], [[5. Mechanics/Spells/Locate Object.md|locate object]],\
      \ [[5. Mechanics/Spells/Mage Armor.md|mage armor]], [[5. Mechanics/Spells/Rarys Telepathic Bond.md|Rary's telepathic bond]]\n\
      \n1/day each: [[5. Mechanics/Spells/True Seeing.md|true seeing]]"
    "name": "Spellcasting"
"reactions":
  - "desc": "When the diviner or a creature it can see makes an attack roll, a saving\
      \ throw, or an ability check, the diviner rolls a d20 and chooses whether to\
      \ use that roll in place of the d20 rolled for the attack roll, saving throw,\
      \ or ability check. "
    "name": "Portent (3/Day)"
"source":
  - "MPMM"
  - "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/diviner-wizard-mpmm.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
