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
# Mage
*Source: Monster Manual p. 347, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Divine Contention, Dragon of Icespire Peak, Storm Lord's Wrath, Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, The Wild Beyond the Witchlight, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel, Light of Xaryxis, Dragonlance: Shadow of the Dragon Queen, Keys from the Golden Vault*  

Mages spend their lives in the study and practice of magic. Good-aligned mages offer counsel to nobles and others in power, while evil mages dwell in isolated sites to perform unspeakable experiments without interference.

```statblock
"name": "Mage"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
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
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, dice: d20+6 (+6 to hit) with spell attacks). The mage has\
    \ the following wizard spells prepared:\n\nCantrips (at will): [[/5. Mechanics/Spells/Fire Bolt.md|fire bolt]],\
    \ [[/5. Mechanics/Spells/Light.md|light]], [[/5. Mechanics/Spells/Mage Hand.md|mage hand]],\
    \ [[/5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n1st level (4\
    \ 1st-level slots): [[/5. Mechanics/Spells/Detect Magic.md|detect magic]], [mage\
    \ armor](/compendium/spells/mage-armor.md), [[/5. Mechanics/Spells/Magic Missile.md|magic missile]],\
    \ [[/5. Mechanics/Spells/Shield.md|shield]]\n\n2nd level (3 2nd-level slots):\
    \ [[/5. Mechanics/Spells/Misty Step.md|misty step]], [[/5. Mechanics/Spells/Suggestion.md|suggestion]]\n\
    \n3rd level (3 3rd-level slots): [[/5. Mechanics/Spells/Counterspell.md|counterspell]],\
    \ [[/5. Mechanics/Spells/Fireball.md|fireball]], [[/5. Mechanics/Spells/Fly.md|fly]]\n\
    \n4th level (3 4th-level slots): [[/5. Mechanics/Spells/Greater Invisibility.md|greater invisibility]],\
    \ [[/5. Mechanics/Spells/Ice Storm.md|ice storm]]\n\n5th level (1 5th-level slots):\
    \ [[/5. Mechanics/Spells/Cone Of Cold.md|cone of cold]]"
  "name": "spells"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "RoT"
- "SKT"
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
- "WBtW"
- "CRCotN"
- "JttRC"
- "LoX"
- "DSotDQ"
- "KftGV"
"image": "5. Mechanics/Bestiary/Humanoid/token/mage.png"
```
^statblock

## Environment

urban