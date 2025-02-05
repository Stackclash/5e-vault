---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: urban
size: Medium
tags:
- compendium/src/5e/mm
- monster/cr/2
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Priest"]
---
# [Priest](compendium\bestiary\humanoid/priest.md)
*Source: Monster Manual p. 348, Curse of Strahd, Tasha's Cauldron of Everything, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

Priests bring the teachings of their gods to the common folk. They are the spiritual leaders of temples and shrines and often hold positions of influence in their communities. Evil priests might work openly under a tyrant, or they might be the leaders of religious sects hidden in the shadows of good society, overseeing depraved rites. A priest typically has one or more acolytes to help with religious ceremonies and other sacred duties.

```statblock
"name": "Priest"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "[chain shirt](compendium/items/chain-shirt.md)"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "13"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "7"
  "Religion": !!int "5"
  "Persuasion": !!int "3"
"senses": "passive Perception 13"
"languages": "any two languages"
"cr": "2"
"traits":
- "desc": "The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 13, +5 to hit with spell attacks). The priest has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [light](compendium/spells/light.md),\
    \ [sacred flame](compendium/spells/sacred-flame.md), [thaumaturgy](compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 slots): [cure wounds](compendium/spells/cure-wounds.md), [guiding\
    \ bolt](compendium/spells/guiding-bolt.md), [sanctuary](compendium/spells/sanctuary.md)\n\
    \n2nd level (3 slots): [lesser restoration](compendium/spells/lesser-restoration.md),\
    \ [spiritual weapon](compendium/spells/spiritual-weapon.md)\n\n3rd level (2\
    \ slots): [dispel magic](compendium/spells/dispel-magic.md), [spirit guardians](compendium/spells/spirit-guardians.md)"
  "name": "Spellcasting"
- "desc": "As a bonus action, the priest can expend a spell slot to cause its melee\
    \ weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target\
    \ on a hit. This benefit lasts until the end of the turn. If the priest expends\
    \ a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each\
    \ level above 1st."
  "name": "Divine Eminence"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage."
  "name": "Mace"
"source":
- "MM"
- "CoS"
- "TCE"
- "VEoR"
"image": "compendium/bestiary/humanoid/token/priest.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```