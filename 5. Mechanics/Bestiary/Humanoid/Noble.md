---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/1-8
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid/any-race
statblock: inline
aliases:
  - Noble
---
# [[5. Mechanics\Bestiary\Humanoid\Noble.md|Noble]]
*Source: Monster Manual p. 348, Curse of Strahd, Eberron: Rising from the Last War. Available in the SRD.*

Nobles wield great authority and influence as members of the upper class, possessing wealth and connections that can make them as powerful as monarchs and generals. A noble often travels in the company of guards, as well as servants who are commoners.

The noble's statistics can also be used to represent courtiers who aren't of noble birth.

```statblock
"name": "Noble"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "[[5. Mechanics/Items/Breastplate.md|breastplate]]"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "12"
- !!int "11"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Insight": !!int "4"
  "Persuasion": !!int "5"
"senses": "passive Perception 12"
"languages": "any two languages"
"cr": "1/8"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 1|text(5) (1d8 + 1) piercing damage."
  "name": "Rapier"
"reactions":
- "desc": "The noble adds 2 to its AC against one melee attack that would hit it.\
    \ To do so, the noble must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "RoT"
- "SKT"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DC"
- "DIP"
- "BGDIA"
- "ERLW"
- "IMR"
- "EGW"
- "MOT"
- "IDRotF"
- "CM"
- "WBtW"
- "CRCotN"
- "JttRC"
- "DSotDQ"
- "KftGV"
- "SatO"
- "ToFW"
- "BMT"
- "GHLoE"
- "DoDk"
"image": "5. Mechanics/Bestiary/Humanoid/token/noble.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
