---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: underwater
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\1 2
  - monster\Environment\Underwater
  - monster\Size\Medium
  - monster\Type\Beast
aliases:
  - Reef Shark
---
# [[5. Mechanics\Bestiary\Beast\Reef Shark.md|Reef Shark]]
*Source: Monster Manual p. 336. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

Smaller than giant sharks and hunter sharks, reef sharks inhabit shallow waters and coral reefs, gathering in small packs to hunt. A full-grown specimen measures 6 to 10 feet long.

```statblock
"name": "Reef Shark"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "14"
- !!int "13"
- !!int "13"
- !!int "1"
- !!int "10"
- !!int "4"
"speed": "swim 40 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "blindsight 30 ft., passive Perception 12"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The shark has advantage on an attack roll against a creature if at least\
    \ one of the shark's allies is within 5 feet of the creature and the ally isn't\
    \ [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
  "name": "Pack Tactics"
- "desc": "The shark can breathe only underwater."
  "name": "Water Breathing"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/reef-shark.webp"
```
^statblock

## Environment

underwater

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
