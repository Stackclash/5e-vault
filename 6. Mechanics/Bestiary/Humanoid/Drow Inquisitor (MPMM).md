---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/cleric
- monster/type/humanoid/elf
statblock: inline
---
# Drow Inquisitor
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 102, Mordenkainen's Tome of Foes p. 184*  

Lolth's worshipers expect treachery—the Spider Queen encourages it, after all. A certain amount of backstabbing and double-crossing can be managed, but too much can undermine an entire community. To keep some semblance of order and to root out traitors, priestesses of Lolth employ inquisitors. Inquisitors are chosen from the ranks of the priesthood, and their authority is equaled only by that of the [[/6. Mechanics/Bestiary/Humanoid/Drow Matron Mother (MPMM).md|drow matron mothers]] (also in this book) of the noble houses. Anyone they decide is at odds with the hierarchy faces painful interrogation and usually an excruciating death.

```statblock
"name": "Drow Inquisitor"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric, elf"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "149"
"hit_dice": "23d8 + 46"
"stats":
- !!int "11"
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "21"
- !!int "20"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "10"
  "Wisdom": !!int "10"
  "Constitution": !!int "7"
"skillsaves":
  "Stealth": !!int "7"
  "Religion": !!int "8"
  "Insight": !!int "10"
  "Perception": !!int "10"
"condition_immunities": "frightened"
"senses": "darkvision 120 ft., passive Perception 20"
"languages": "Elvish, Undercommon"
"cr": "14"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow's casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 18):\n\nAt will:\
    \ [[/6. Mechanics/Spells/Dancing Lights.md|dancing lights]], [[/6. Mechanics/Spells/Detect Magic.md|detect magic]],\
    \ [[/6. Mechanics/Spells/Message.md|message]], [[/6. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
    \n1/day each: [[/6. Mechanics/Spells/Clairvoyance.md|clairvoyance]], [[/6. Mechanics/Spells/Darkness.md|darkness]],\
    \ [[/6. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[/6. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
    \ [[/6. Mechanics/Spells/Faerie Fire.md|faerie fire]], [[/6. Mechanics/Spells/Levitate.md|levitate]]\
    \ (self only), [[/6. Mechanics/Spells/Silence.md|silence]], [[/6. Mechanics/Spells/Suggestion.md|suggestion]],\
    \ [[/6. Mechanics/Spells/True Seeing.md|true seeing]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow discerns when a creature in earshot speaks a lie in a language\
    \ the drow knows."
  "name": "Discern Lie"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [[6. Mechanics/Rules/Conditions.md#charmed|charmed]],\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow makes three Death Lance attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+10 (+10 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 5|avg (1d6 + 5) piercing damage plus dice: 4d8|avg (4d8)\
    \ necrotic damage. The target's hit point maximum is reduced by an amount equal\
    \ to the necrotic damage taken. This reduction lasts until the target finishes\
    \ a long rest. The target dies if its hit point maximum is reduced to 0."
  "name": "Death Lance"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow conjures a floating, spectral dagger within 60 feet of itself.\
    \ The drow can make a melee spell attack (dice: d20+10 (+10 to hit)) against\
    \ one creature within 5 feet of the dagger. On a hit, the target takes dice:\
    \ 1d8 + 5|avg (1d8 + 5) force damage.\n\nThe dagger lasts for 1 minute. As\
    \ a bonus action on later turns, the drow can move the dagger up to 20 feet and\
    \ repeat the attack against one creature within 5 feet of the dagger."
  "name": "Spectral Dagger (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "MTF"
"image": "6. Mechanics/Bestiary/Humanoid/token/drow-inquisitor.png"
```
^statblock

## Environment

underdark