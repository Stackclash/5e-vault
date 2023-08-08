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
# Priest
*Source: Monster Manual p. 348, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Divine Contention, Dragon of Icespire Peak, Storm Lord's Wrath, Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel, Dragonlance: Shadow of the Dragon Queen*  

Priests bring the teachings of their gods to the common folk. They are the spiritual leaders of temples and shrines and often hold positions of influence in their communities. Evil priests might work openly under a tyrant, or they might be the leaders of religious sects hidden in the shadows of good society, overseeing depraved rites. A priest typically has one or more acolytes to help with religious ceremonies and other sacred duties.

```statblock
"name": "Priest"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "13"
"speed": "walk 30 ft."
"skillsaves":
  "Medicine": !!int "7"
  "Religion": !!int "5"
  "Persuasion": !!int "3"
"senses": "passive Perception 13"
"languages": "any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 13, dice: d20+5 (+5 to hit) with spell attacks). The priest\
    \ has the following cleric spells prepared:\n\nCantrips (at will): [[/6. Mechanics/Spells/Light.md|light]],\
    \ [[/6. Mechanics/Spells/Sacred Flame.md|sacred flame]], [[/6. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
    \n1st level (4 1st-level slots): [[/6. Mechanics/Spells/Cure Wounds.md|cure wounds]],\
    \ [[/6. Mechanics/Spells/Guiding Bolt.md|guiding bolt]], [[/6. Mechanics/Spells/Sanctuary.md|sanctuary]]\n\
    \n2nd level (3 2nd-level slots): [[/6. Mechanics/Spells/Lesser Restoration.md|lesser restoration]],\
    \ [[/6. Mechanics/Spells/Spiritual Weapon.md|spiritual weapon]]\n\n3rd level (2\
    \ 3rd-level slots): [[/6. Mechanics/Spells/Dispel Magic.md|dispel magic]], [spirit\
    \ guardians](/compendium/spells/spirit-guardians.md)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "As a bonus action, the priest can expend a spell slot to cause its melee\
    \ weapon attacks to magically deal an extra 10 (dice: 3d6|avg (3d6)) radiant\
    \ damage to a target on a hit. This benefit lasts until the end of the turn. If\
    \ the priest expends a spell slot of 2nd level or higher, the extra damage increases\
    \ by dice: 1d6|avg (1d6) for each level above 1st."
  "name": "Divine Eminence"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6|avg (1d6) bludgeoning damage."
  "name": "Mace"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "SKT"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DC"
- "DIP"
- "SLW"
- "SDW"
- "BGDIA"
- "ERLW"
- "EGW"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "CRCotN"
- "JttRC"
- "DSotDQ"
"image": "6. Mechanics/Bestiary/Humanoid/token/priest.png"
```
^statblock

## Environment

urban