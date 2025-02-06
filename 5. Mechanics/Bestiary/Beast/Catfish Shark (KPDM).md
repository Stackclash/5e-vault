---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: null
size: Tiny
tags:
  - 5. Mechanics\Src\5e\(KPDM)
  - monster\Cr\0
  - monster\Size\Tiny
  - monster\Type\Beast
aliases:
  - Catfish Shark
---
# [[5. Mechanics\Bestiary\Beast\Catfish Shark (KPDM).md|Catfish Shark]]
*Source: Deep Magic p. 292*

The catfish shark lives in deep water. Most species are less than 1 foot long and range from pale orange to silvery white in color. Some are also bioluminescent. The catfish shark is an ideal familiar for a spellcaster who operates underwater.

```statblock
"name": "Catfish Shark (KPDM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "3"
- !!int "12"
- !!int "10"
- !!int "1"
- !!int "8"
- !!int "2"
"speed": "0 ft., swim 40 ft."
"skillsaves":
  "Stealth": !!int "3"
"senses": "darkvision 90 ft., passive Perception 9"
"languages": ""
"cr": "0"
"traits":
- "desc": "The catfish shark can cause its body to glow with orange light, providing\
    \ dim light in a 5-foot radius."
  "name": "Bioluminescent"
- "desc": "The catfish shark can breathe only underwater."
  "name": "Water Breathing"
"actions":
- "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage."
  "name": "Bite"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
