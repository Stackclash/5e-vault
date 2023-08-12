---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: inline
---
# Diviner Wizard
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 261, Volo's Guide to Monsters p. 213*  

Diviners peer into the future and know that knowledge is power. They might act aloof and mysterious, hinting at omens and secrets, or they might be know-it-alls, spilling insights to advance their own status.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

## Stat Block

```statblock
"name": "Diviner Wizard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "90"
"hit_dice": "20d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "18"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "7"
"skillsaves":
  "History": !!int "7"
  "Arcana": !!int "7"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The diviner casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 15):\n\nAt will: [[/5. Mechanics/Spells/Mage Hand.md|mage hand]],\
    \ [[/5. Mechanics/Spells/Message.md|message]], [[/5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\
    \n1/day each: [[/5. Mechanics/Spells/True Seeing.md|true seeing]]\n\n2/day\
    \ each: [[/5. Mechanics/Spells/Arcane Eye.md|arcane eye]], [[/5. Mechanics/Spells/Detect Magic.md|detect magic]],\
    \ [[/5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[/5. Mechanics/Spells/Fly.md|fly]],\
    \ [[/5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]], [[/5. Mechanics/Spells/Locate Object.md|locate object]],\
    \ [[/5. Mechanics/Spells/Mage Armor.md|mage armor]], [[/5. Mechanics/Spells/Rarys Telepathic Bond.md|Rary's telepathic bond]]"
  "name": "spells"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The diviner makes three Arcane Burst attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: dice: d20+7 (+7 to hit), reach 5 ft.\
    \ or range 120 ft., one target. Hit: dice: 3d10 + 4|avg (3d10 + 4) radiant\
    \ damage."
  "name": "Arcane Burst"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The diviner magically creates a burst of illumination in a 10-foot-radius\
    \ sphere centered on a point within 120 feet of it. Each creature in that area\
    \ must make a DC 15 Wisdom saving throw. On a failed save, a creature takes dice:\
    \ 10d8|avg (10d8) psychic damage and is [[5. Mechanics/Rules/Conditions.md#stunned|stunned]]\
    \ until the end of the diviner's next turn. On a successful save, the creature\
    \ takes half as much damage and isn't [[5. Mechanics/Rules/Conditions.md#stunned|stunned]]."
  "name": "Overwhelming Revelation (Recharge 5-6)"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the diviner or a creature it can see makes an attack roll, a saving\
    \ throw, or an ability check, the diviner rolls a dice: d20|avg (d20) and\
    \ chooses whether to use that roll in place of the dice: d20|avg (d20) rolled\
    \ for the attack roll, saving throw, or ability check. "
  "name": "Portent (3/Day)"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/diviner-wizard.png"
```
^statblock

## Environment

urban