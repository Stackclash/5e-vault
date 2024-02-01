---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/1-2
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Thug"]
---
# [[5. Mechanics/Bestiary/Humanoid/Thug.md|Thug]]
*Source: Monster Manual p. 350, Tasha's Cauldron of Everything, Curse of Strahd. Available in the SRD and the Basic Rules.*  

Thugs are ruthless enforcers skilled at intimidation and violence. They work for money and have few scruples.

```statblock
"name": "Thug"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "11"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"stats":
- !!int "15"
- !!int "11"
- !!int "14"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Intimidation": !!int "2"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "1/2"
"traits":
- "desc": "The thug has advantage on an attack roll against a creature if at least\
    \ one of the thug's allies is within 5 feet of the creature and the ally isn't\
    \ [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Pack Tactics"
"actions":
- "desc": "The thug makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) bludgeoning damage."
  "name": "Mace"
- "desc": "Ranged Weapon Attack: dice: d20+2 (+2 to hit), range 100/400 ft., one\
    \ target. Hit: dice: 1d10|avg (1d10) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "MM"
- "PotA"
- "SKT"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DIP"
- "SLW"
- "BGDIA"
- "EGW"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "CoS"
- "CRCotN"
- "JttRC"
- "LoX"
- "KftGV"
- "ToFW"
- "BMT"
- "GHLoE"
- "DoDk"
"image": "5. Mechanics/Bestiary/Humanoid/token/thug.png"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```