---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/1-8
  - monster/environment/coastal
  - monster/size/medium
  - monster/type/beast
statblock: inline
aliases:
  - Giant Crab
---
# [[5. Mechanics\Bestiary\Beast\Giant Crab.md|Giant Crab]]
*Source: Monster Manual p. 324. Available in the SRD and the Basic Rules.*

```statblock
"name": "Giant Crab"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "13"
- !!int "15"
- !!int "11"
- !!int "1"
- !!int "9"
- !!int "3"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
"senses": "blindsight 30 ft., passive Perception 9"
"languages": ""
"cr": "1/8"
"traits":
- "desc": "The crab can breathe air and water."
  "name": "Amphibious"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage, and the target is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 11). The crab has two claws, each of which can grapple only one target."
  "name": "Claw"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "WDMM"
- "GoS"
- "DIP"
- "BGDIA"
- "EGW"
- "MOT"
- "CM"
"image": "5. Mechanics/Bestiary/Beast/token/giant-crab.webp"
```
^statblock

## Environment

coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
