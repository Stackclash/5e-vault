---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
---
# Acolyte
*Source: Monster Manual p. 342, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel, Spelljammer Academy, Dragonlance: Shadow of the Dragon Queen*  

Acolytes are junior members of a clergy, usually answerable to a priest. They perform a variety of functions in a temple and are granted minor spellcasting power by their deities.

```statblock
"name": "Acolyte"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "14"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Medicine": !!int "4"
  "Religion": !!int "2"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 12, dice: d20+4 (+4 to hit) with spell attacks). The acolyte\
    \ has following cleric spells prepared:\n\nCantrips (at will): [[/6. Mechanics/Spells/Light.md|light]],\
    \ [[/6. Mechanics/Spells/Sacred Flame.md|sacred flame]], [[/6. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
    \n1st level (3 1st-level slots): [[/6. Mechanics/Spells/Bless.md|bless]], [cure\
    \ wounds](/compendium/spells/cure-wounds.md), [[/6. Mechanics/Spells/Sanctuary.md|sanctuary]]"
  "name": "spells"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4|avg (1d4) bludgeoning damage."
  "name": "Club"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "SKT"
- "ToA"
- "WDH"
- "GoS"
- "BGDIA"
- "ERLW"
- "EGW"
- "MOT"
- "IDRotF"
- "CM"
- "CRCotN"
- "JttRC"
- "SjA"
- "DSotDQ"
"image": "6. Mechanics/Bestiary/Humanoid/token/acolyte.png"
```
^statblock

## Environment

urban