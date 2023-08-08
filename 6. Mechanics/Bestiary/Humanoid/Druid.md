---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
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
statblock: inline
---
# Druid
*Source: Monster Manual p. 346, Curse of Strahd, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation, Ghosts of Saltmarsh, Dragon of Icespire Peak, Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, The Wild Beyond the Witchlight, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel*  

Druids dwell in forests and other secluded wilderness locations, where they protect the natural world from monsters and the encroachment of civilization. Some are tribal shamans who heal the sick, pray to animal spirits, and provide spiritual guidance.

```statblock
"name": "Druid"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "12"
- !!int "15"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Medicine": !!int "4"
  "Nature": !!int "3"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Druidic plus any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 12, dice: d20+4 (+4 to hit) with spell attacks). It has the\
    \ following druid spells prepared:\n\nCantrips (at will): [[/6. Mechanics/Spells/Druidcraft.md|druidcraft]],\
    \ [[/6. Mechanics/Spells/Produce Flame.md|produce flame]], [[/6. Mechanics/Spells/Shillelagh.md|shillelagh]]\n\
    \n1st level (4 1st-level slots): [[/6. Mechanics/Spells/Entangle.md|entangle]],\
    \ [[/6. Mechanics/Spells/Longstrider.md|longstrider]], [[/6. Mechanics/Spells/Speak With Animals.md|speak with animals]],\
    \ [[/6. Mechanics/Spells/Thunderwave.md|thunderwave]]\n\n2nd level (3 2nd-level\
    \ slots): [[/6. Mechanics/Spells/Animal Messenger.md|animal messenger]], [[/6. Mechanics/Spells/Barkskin.md|barkskin]]"
  "name": "spells"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit) (dice: d20+4 (+4 to\
    \ hit) with shillelagh), reach 5 ft., one target. Hit: dice: 1d6|avg (1d6)\
    \ bludgeoning damage, 4 (dice: 1d8|avg (1d8)) bludgeoning damage if wielded\
    \ with two hands, or 6 (dice: 1d8 + 2|avg (1d8 + 2)) bludgeoning damage with\
    \ [[/6. Mechanics/Spells/Shillelagh.md|shillelagh]]."
  "name": "Quarterstaff"
"source":
- "MM"
- "CoS"
- "PotA"
- "RoT"
- "SKT"
- "ToA"
- "GoS"
- "DIP"
- "SDW"
- "BGDIA"
- "EGW"
- "MOT"
- "IDRotF"
- "CM"
- "WBtW"
- "CRCotN"
- "JttRC"
"image": "6. Mechanics/Bestiary/Humanoid/token/druid.png"
```
^statblock

## Environment

coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert