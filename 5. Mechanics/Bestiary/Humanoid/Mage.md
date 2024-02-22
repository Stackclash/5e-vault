---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/6
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Mage"]
---
# [[5. Mechanics\Bestiary\Humanoid\Mage.md|Mage]]
*Source: Monster Manual p. 347, Curse of Strahd, Eberron: Rising from the Last War, Tasha's Cauldron of Everything. Available in the SRD and the Basic Rules.*  

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
    \ (spell save DC 14, dice: d20+6 (+6 to hit) with spell attacks). The mage has\
    \ the following wizard spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Fire Bolt.md|fire bolt]],\
    \ [[5. Mechanics/Spells/Light.md|light]], [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
    \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n1st level (4\
    \ slots): [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]],\
    \ [[5. Mechanics/Spells/Magic Missile.md|magic missile]], [[5. Mechanics/Spells/Shield.md|shield]]\n\
    \n2nd level (3 slots): [[5. Mechanics/Spells/Misty Step.md|misty step]], [[5. Mechanics/Spells/Suggestion.md|suggestion]]\n\
    \n3rd level (3 slots): [[5. Mechanics/Spells/Counterspell.md|counterspell]],\
    \ [[5. Mechanics/Spells/Fireball.md|fireball]], [[5. Mechanics/Spells/Fly.md|fly]]\n\
    \n4th level (3 slots): [[5. Mechanics/Spells/Greater Invisibility.md|greater invisibility]],\
    \ [[5. Mechanics/Spells/Ice Storm.md|ice storm]]\n\n5th level (1 slots): [cone\
    \ of cold](compendium/spells/cone-of-cold.md)"
  "name": "spells"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
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
- "PSI"
- "PaBTSO"
- "AATM"
- "SatO"
- "ToFW"
- "BMT"
- "GHLoE"
- "DoDk"
"image": "5. Mechanics/Bestiary/Humanoid/token/mage.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```