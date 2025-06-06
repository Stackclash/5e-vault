---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: null
size: Huge
tags:
  - compendium/src/5e/bam
  - monster/cr/5
  - monster/size/huge
  - monster/type/monstrosity
aliases:
  - Night Scavver
---
# [[5. Mechanics\Bestiary\Monstrosity\Night Scavver (BAM).md|Night Scavver]]
*Source: Boo's Astral Menagerie p. 49, Vecna: Eve of Ruin*

Night scavvers are 15 feet long. Their coloration resembles that of Wildspace itself: white spots (representing stars) sprinkled amid dark patches and patterns of color. They fearlessly invade the air envelopes of spelljamming ships and attack crew members on deck.

Cooked night scavver meat is a popular offering in taverns across Wildspace.

```statblock
"name": "Night Scavver (BAM)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d12 + 36"
"modifier": !!int "2"
"stats":
  - !!int "20"
  - !!int "15"
  - !!int "17"
  - !!int "1"
  - !!int "10"
  - !!int "1"
"speed": "0 ft., fly 40 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+8"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": ""
"cr": "5"
"traits":
  - "desc": "The scavver doesn't require air."
    "name": "Unusual Nature"
"actions":
  - "desc": "Melee Weapon Attack: +8 to hit (with advantage if the target is a creature\
      \ that is missing any hit points), reach 10 ft., one target. Hit: 27 (4d10\
      \ + 5) piercing damage."
    "name": "Bite"
"source":
  - "BAM"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Monstrosity/token/night-scavver-bam.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
