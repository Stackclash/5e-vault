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
  - Hedgehog
---
# [[5. Mechanics\Bestiary\Beast\Hedgehog (KPDM).md|Hedgehog]]
*Source: Deep Magic p. 292*

The hedgehog is a small terrestrial mammal that eats insects and worms. Its body is covered in hollow spines that it can extend as a defense mechanism. Hedgehogs are often used as familiars by gnomes and halflings.

```statblock
"name": "Hedgehog (KPDM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "3"
- !!int "10"
- !!int "8"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "20 ft., burrow 5 ft."
"skillsaves":
  "Stealth": !!int "2"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "0"
"traits":
- "desc": "The hedgehog has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
"reactions":
- "desc": "As a reaction, a hedgehog can roll into a spiny ball to protect its body\
    \ from harm. The hedgehog uses this reaction whenever a creature makes an attack\
    \ roll against it but before the roll takes place. A creature that attacks the\
    \ hedgehog must succeed on a DC 10 Dexterity check or take 1 piercing damage.\
    \ A creature that uses a reach weapon or a ranged weapon against the hedgehog\
    \ is unaffected by this ability."
  "name": "Spiked Roll"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
