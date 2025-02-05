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
aliases: ["Mage (Familiar)"]
---
# [Mage (Familiar)](compendium\bestiary\humanoid/mage-familiar.md)
*Source: Monster Manual p. 347, Curse of Strahd, Tasha's Cauldron of Everything, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Mage (Familiar)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [mage armor](compendium/spells/mage-armor.md)"
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
    \ wizard spells prepared:\n\nCantrips (at will): [fire bolt](compendium/spells/fire-bolt.md),\
    \ [light](compendium/spells/light.md), [mage hand](compendium/spells/mage-hand.md),\
    \ [prestidigitation](compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ slots): [detect magic](compendium/spells/detect-magic.md), [find familiar](compendium/spells/find-familiar.md)\
    \ (one of the creatures described in the spell or some other Tiny monster, such\
    \ as a [crawling claw](compendium/bestiary/undead/crawling-claw.md), [imp](compendium/bestiary/fiend/imp.md),\
    \ [pseudodragon](compendium/bestiary/dragon/pseudodragon.md), or [quasit](compendium/bestiary/fiend/quasit.md)),\
    \ [mage armor](compendium/spells/mage-armor.md), [magic missile](compendium/spells/magic-missile.md),\
    \ [shield](compendium/spells/shield.md)\n\n2nd level (3 slots): [misty step](compendium/spells/misty-step.md),\
    \ [suggestion](compendium/spells/suggestion.md)\n\n3rd level (3 slots): [counterspell](compendium/spells/counterspell.md),\
    \ [fireball](compendium/spells/fireball.md), [fly](compendium/spells/fly.md)\n\
    \n4th level (3 slots): [greater invisibility](compendium/spells/greater-invisibility.md),\
    \ [ice storm](compendium/spells/ice-storm.md)\n\n5th level (1 slots): [cone\
    \ of cold](compendium/spells/cone-of-cold.md)"
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