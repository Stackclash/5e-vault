---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: underwater
size: Large
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\1 2
  - monster\Environment\Underwater
  - monster\Size\Large
  - monster\Type\Beast
aliases:
  - Giant Sea Horse
---
# [[5. Mechanics\Bestiary\Beast\Giant Sea Horse.md|Giant Sea Horse]]
*Source: Monster Manual p. 328. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

Like their smaller kin, giant sea horses are shy, colorful fish with elongated bodies and curled tails. Aquatic elves train them as mounts.

```statblock
"name": "Giant Sea Horse"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "16"
"hit_dice": "3d10"
"stats":
- !!int "12"
- !!int "15"
- !!int "11"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "0 ft., swim 40 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "If the sea horse moves at least 20 feet straight toward a target and then\
    \ hits it with a ram attack on the same turn, the target takes an extra 7 (2d6)\
    \ bludgeoning damage. If the target is a creature, it must succeed on a DC 11\
    \ Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Charge"
- "desc": "The sea horse can breathe only underwater."
  "name": "Water Breathing"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Ram"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/giant-sea-horse.webp"
```
^statblock

## Environment

underwater

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
