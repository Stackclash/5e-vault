---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: underdark
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\8
  - monster\Environment\Underdark
  - monster\Size\Medium
  - monster\Type\Humanoid\Elf
aliases:
  - Drow Priestess of Lolth (Magic Equipment)
---
# [[5. Mechanics\Bestiary\Humanoid\Drow Priestess Of Lolth Magic Equipment.md|Drow Priestess of Lolth (Magic Equipment)]]
*Source: Monster Manual p. 129*

```statblock
"name": "Drow Priestess Of Lolth Magic Equipment"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "19"
"ac_class": "[[5. Mechanics/Items/Drow 3 Armor.md|+3 scale mail]]"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "13"
- !!int "17"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "5"
  "Religion": !!int "4"
  "Insight": !!int "6"
  "Perception": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Undercommon"
"cr": "8"
"traits":
- "desc": "The drow's spellcasting ability is Charisma (spell save DC 15). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]]\n\n1/day each:\
    \ [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Faerie Fire.md|faerie fire]],\
    \ [[5. Mechanics/Spells/Levitate.md|levitate]] (self only)"
  "name": "Innate Spellcasting"
- "desc": "The drow is a 10th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (save DC 14, +6 to hit with spell attacks). The drow has the following cleric\
    \ spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Guidance.md|guidance]],\
    \ [[5. Mechanics/Spells/Poison Spray.md|poison spray]], [[5. Mechanics/Spells/Resistance.md|resistance]],\
    \ [[5. Mechanics/Spells/Spare The Dying.md|spare the dying]], [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
    \n1st level (4 slots): [[5. Mechanics/Spells/Animal Friendship.md|animal friendship]],\
    \ [[5. Mechanics/Spells/Cure Wounds.md|cure wounds]], [[5. Mechanics/Spells/Detect Poison And Disease.md|detect poison and disease]],\
    \ [[5. Mechanics/Spells/Ray Of Sickness.md|ray of sickness]]\n\n2nd level (3 slots):\
    \ [[5. Mechanics/Spells/Lesser Restoration.md|lesser restoration]], [[5. Mechanics/Spells/Protection From Poison.md|protection from\
    \ poison]], [[5. Mechanics/Spells/Web.md|web]]\n\
    \n3rd level (3 slots): [[5. Mechanics/Spells/Conjure Animals.md|conjure animals]]\
    \ (2 [[5. Mechanics/Bestiary/Beast/Giant Spider.md|giant spiders]]), [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]]\n\
    \n4th level (3 slots): [[5. Mechanics/Spells/Divination.md|divination]], [[5. Mechanics/Spells/Freedom Of Movement.md|freedom\
    \ of movement]]\n\n5th level (2 slots):\
    \ [[5. Mechanics/Spells/Insect Plague.md|insect plague]], [[5. Mechanics/Spells/Mass Cure Wounds.md|mass cure wounds]]"
  "name": "Spellcasting"
- "desc": "The drow has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
- "desc": "The drow wears [[5. Mechanics/Items/Drow 3 Armor.md|+3 scale mail]]. This\
    \ armor loses its enhancement bonuses permanently if it is exposed to sunlight\
    \ for 1 hour or longer."
  "name": "Special Equipment"
"actions":
- "desc": "The drow makes two scourge attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage plus 17 (5d6) poison damage."
  "name": "Scourge"
- "desc": "The drow attempts to magically summon a [[5. Mechanics/Bestiary/Fiend/Yochlol.md|yochlol]]\
    \ with a 30 percent chance of success. If the attempt fails, the drow takes 5\
    \ (1d10) psychic damage. Otherwise, the summoned demon appears in an unoccupied\
    \ space within 60 feet of its summoner, acts as an ally of its summoner, and can't\
    \ summon other demons. It remains for 10 minutes, until it or its summoner dies,\
    \ or until its summoner dismisses it as an action."
  "name": "Summon Demon (1/Day)"
"source":
- "MM"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
