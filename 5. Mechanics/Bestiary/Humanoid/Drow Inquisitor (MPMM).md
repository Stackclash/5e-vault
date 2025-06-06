---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 14
environments: underdark
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/14
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/humanoid/cleric
  - monster/type/humanoid/elf
aliases:
  - Drow Inquisitor
---
# [[5. Mechanics\Bestiary\Humanoid\Drow Inquisitor (MPMM).md|Drow Inquisitor]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 102, Mordenkainen's Tome of Foes p. 184*

Lolth's worshipers expect treachery—the Spider Queen encourages it, after all. A certain amount of backstabbing and double-crossing can be managed, but too much can undermine an entire community. To keep some semblance of order and to root out traitors, priestesses of Lolth employ inquisitors. Inquisitors are chosen from the ranks of the priesthood, and their authority is equaled only by that of the [[5. Mechanics/Bestiary/Humanoid/Drow Matron Mother (MPMM).md|drow matron mothers]] (also in this book) of the noble houses. Anyone they decide is at odds with the hierarchy faces painful interrogation and usually an excruciating death.

```statblock
"name": "Drow Inquisitor (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric, elf"
"alignment": "Typically  Neutral Evil"
"ac": !!int "16"
"ac_class": "[[5. Mechanics/Items/Breastplate.md|breastplate]]"
"hp": !!int "149"
"hit_dice": "23d8 + 46"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "15"
  - !!int "14"
  - !!int "16"
  - !!int "21"
  - !!int "20"
"speed": "30 ft."
"saves":
  - "constitution": "+7"
  - "wisdom": "+10"
  - "charisma": "+10"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+10"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+10"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+7"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "darkvision 120 ft., passive Perception 20"
"languages": "Elvish, Undercommon"
"cr": "14"
"traits":
  - "desc": "The drow discerns when a creature in earshot speaks a lie in a language\
      \ the drow knows."
    "name": "Discern Lie"
  - "desc": "The drow has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
      \ and magic can't put the drow to sleep."
    "name": "Fey Ancestry"
  - "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well\
      \ as on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]]) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The drow makes three Death Lance attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 8\
      \ (1d6 + 5) piercing damage plus 18 (4d8) necrotic damage. The target's hit\
      \ point maximum is reduced by an amount equal to the necrotic damage taken.\
      \ This reduction lasts until the target finishes a long rest. The target dies\
      \ if its hit point maximum is reduced to 0."
    "name": "Death Lance"
  - "desc": "The drow's casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 18):\n\nAt\
      \ will: [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]], [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
      \ [[5. Mechanics/Spells/Message.md|message]], [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
      \n1/day each: [[5. Mechanics/Spells/Clairvoyance.md|clairvoyance]], [[5. Mechanics/Spells/Darkness.md|darkness]],\
      \ [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
      \ [[5. Mechanics/Spells/Faerie Fire.md|faerie fire]], [[5. Mechanics/Spells/Levitate.md|levitate]]\
      \ (self only), [[5. Mechanics/Spells/Silence.md|silence]], [[5. Mechanics/Spells/Suggestion.md|suggestion]],\
      \ [[5. Mechanics/Spells/True Seeing.md|true seeing]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The drow conjures a floating, spectral dagger within 60 feet of itself.\
      \ The drow can make a melee spell attack (+10 to hit) against one creature within\
      \ 5 feet of the dagger. On a hit, the target takes 9 (1d8 + 5) force damage.\n\
      \nThe dagger lasts for 1 minute. As a bonus action on later turns, the drow\
      \ can move the dagger up to 20 feet and repeat the attack against one creature\
      \ within 5 feet of the dagger."
    "name": "Spectral Dagger (Recharges after a Short or Long Rest)"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Humanoid/token/drow-inquisitor-mpmm.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
