---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: urban
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/6
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Mage (Familiar)
---
# [[5. Mechanics/Bestiary/Humanoid/Mage Familiar.md|Mage (Familiar)]]
*Source: Monster Manual p. 347, Curse of Strahd, Tasha's Cauldron of Everything, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Mage Familiar"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "40"
"hit_dice": "9d8"
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
- "desc": "The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). The mage has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Fire Bolt.md|fire bolt]],\
    \ [[5. Mechanics/Spells/Light.md|light]], [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
    \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n1st level (4\
    \ slots): [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Find Familiar.md|find familiar]]\
    \ (one of the creatures described in the spell or some other Tiny monster, such\
    \ as a [[5. Mechanics/Bestiary/Undead/Crawling Claw.md|crawling claw]], [[5. Mechanics/Bestiary/Fiend/Imp.md|imp]],\
    \ [[5. Mechanics/Bestiary/Dragon/Pseudodragon.md|pseudodragon]], or [[5. Mechanics/Bestiary/Fiend/Quasit.md|quasit]]),\
    \ [[5. Mechanics/Spells/Mage Armor.md|mage armor]], [[5. Mechanics/Spells/Magic Missile.md|magic missile]],\
    \ [[5. Mechanics/Spells/Shield.md|shield]]\n\n2nd level (3 slots): [[5. Mechanics/Spells/Misty Step.md|misty step]],\
    \ [[5. Mechanics/Spells/Suggestion.md|suggestion]]\n\n3rd level (3 slots): [[5. Mechanics/Spells/Counterspell.md|counterspell]],\
    \ [[5. Mechanics/Spells/Fireball.md|fireball]], [[5. Mechanics/Spells/Fly.md|fly]]\n\
    \n4th level (3 slots): [[5. Mechanics/Spells/Greater Invisibility.md|greater invisibility]],\
    \ [[5. Mechanics/Spells/Ice Storm.md|ice storm]]\n\n5th level (1 slots): [[5. Mechanics/Spells/Cone Of Cold.md|cone\
    \ of cold]]"
  "name": "Spellcasting"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "MM"
- "CoS"
- "TCE"
- "VEoR"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
