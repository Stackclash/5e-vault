---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/7
- monster/environment/arctic
- monster/environment/desert
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: inline
aliases: ["Warlock of the Fiend"]
---
# [Warlock of the Fiend](compendium/bestiary/humanoid/warlock-of-the-fiend-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 255, Volo's Guide to Monsters p. 219*

Warlocks of the Fiend gain their powers through magical pacts forged with archfiends of the Lower Planes. These warlocks often keep [imps](compendium/bestiary/fiend/imp.md) or [quasits](compendium/bestiary/fiend/quasit.md) as companions, and they tend toward philosophical extremes: consorting with fiendish cults or dedicating their lives to destroying such cults.

## Warlocks

Warlocks gain arcane might through magical pacts with mysterious entities. While some use their abilities to serve the sources of their power, others use them to undermine or even destroy these entities.

```statblock
"name": "Warlock of the Fiend (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "10"
- !!int "16"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "7"
  "Religion": !!int "4"
  "Arcana": !!int "4"
  "Persuasion": !!int "7"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any two languages (usually Abyssal or Infernal)"
"cr": "7"
"traits":
- "desc": "The warlock casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 15): \n\nAt will: [alter self](compendium/spells/alter-self.md),\
    \ [mage armor](compendium/spells/mage-armor.md) (self only), [mage hand](compendium/spells/mage-hand.md),\
    \ [minor illusion](compendium/spells/minor-illusion.md), [prestidigitation](compendium/spells/prestidigitation.md)\n\
    \n1/day each: [banishment](compendium/spells/banishment.md), [plane shift](compendium/spells/plane-shift.md),\
    \ [suggestion](compendium/spells/suggestion.md)"
  "name": "spells"
- "desc": "When the warlock makes an ability check or saving throw, it can add a dice:\
    \ d10|avg (d10) to the roll. It can do this after the roll is made but before\
    \ any of the roll's effects occur."
  "name": "Dark One's Own Luck (Recharges after a Short or Long Rest)"
"actions":
- "desc": "The warlock makes three Scimitar attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) slashing damage plus dice: 4d6|avg\
    \ (4d6) fire damage."
  "name": "Scimitar"
- "desc": "Green flame explodes in a 10-foot-radius sphere centered on a point within\
    \ 120 feet of the warlock. Each creature in that area must make a DC 15 Dexterity\
    \ saving throw, taking dice: 3d10|avg (3d10) fire damage and dice: 2d10|avg\
    \ (2d10) necrotic damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Hellfire"
"reactions":
- "desc": "In response to being damaged by a visible creature within 60 feet of it,\
    \ the warlock forces that creature to make a DC 15 Constitution saving throw,\
    \ taking dice: 4d10|avg (4d10) necrotic damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Fiendish Rebuke (3/Day)"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/humanoid/token/warlock-of-the-fiend-mpmm.webp"
```
^statblock

## Environment

arctic, desert, underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```