---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: underwater
size: Large
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\2
  - monster\Environment\Underwater
  - monster\Size\Large
  - monster\Type\Beast
aliases:
  - Hunter Shark
---
# [[5. Mechanics\Bestiary\Beast\Hunter Shark.md|Hunter Shark]]
*Source: Monster Manual p. 330. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

Smaller than a giant shark but larger and fiercer than a reef shark, a hunter shark haunts deep waters. It usually hunts alone, but multiple hunter sharks might feed in the same area. A fully grown hunter shark is 15 to 20 feet long.

```statblock
"name": "Hunter Shark"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "18"
- !!int "13"
- !!int "15"
- !!int "1"
- !!int "10"
- !!int "4"
"speed": "swim 40 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "blindsight 30 ft., passive Perception 12"
"languages": ""
"cr": "2"
"traits":
- "desc": "The shark has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
- "desc": "The shark can breathe only underwater."
  "name": "Water Breathing"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) piercing damage."
  "name": "Bite"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/hunter-shark.webp"
```
^statblock

## Environment

underwater

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
