---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/2
  - monster/environment/arctic
  - monster/environment/coastal
  - monster/environment/desert
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/hill
  - monster/environment/mountain
  - monster/environment/swamp
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Druid
---
# [[5. Mechanics/Bestiary/Humanoid/Druid.md|Druid]]
*Source: Monster Manual p. 346, Curse of Strahd, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Druids dwell in forests and other secluded wilderness locations, where they protect the natural world from monsters and the encroachment of civilization. Some are tribal shamans who heal the sick, pray to animal spirits, and provide spiritual guidance.

```statblock
"name": "Druid"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "11"
"ac_class": "16 with [[5. Mechanics/Spells/Barkskin.md|barkskin]]"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "12"
- !!int "15"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "4"
  "Nature": !!int "3"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Druidic plus any two languages"
"cr": "2"
"traits":
- "desc": "The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 12, +4 to hit with spell attacks). It has the following druid\
    \ spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Druidcraft.md|druidcraft]],\
    \ [[5. Mechanics/Spells/Produce Flame.md|produce flame]], [[5. Mechanics/Spells/Shillelagh.md|shillelagh]]\n\
    \n1st level (4 slots): [[5. Mechanics/Spells/Entangle.md|entangle]], [[5. Mechanics/Spells/Longstrider.md|longstrider]],\
    \ [[5. Mechanics/Spells/Speak With Animals.md|speak with animals]], [[5. Mechanics/Spells/Thunderwave.md|thunderwave]]\n\
    \n2nd level (3 slots): [[5. Mechanics/Spells/Animal Messenger.md|animal messenger]],\
    \ [[5. Mechanics/Spells/Barkskin.md|barkskin]]"
  "name": "Spellcasting"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit (+4 to hit with shillelagh), reach 5 ft.,\
    \ one target. Hit: 3 (1d6) bludgeoning damage, 4 (1d8) bludgeoning damage if\
    \ wielded with two hands, or 6 (1d8 + 2) bludgeoning damage with [[5. Mechanics/Spells/Shillelagh.md|shillelagh]]."
  "name": "Quarterstaff"
"source":
- "MM"
- "CoS"
- "VEoR"
"image": "5. Mechanics/Bestiary/Humanoid/token/druid.webp"
```
^statblock

## Environment

coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
