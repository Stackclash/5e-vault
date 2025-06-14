---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 0
environments: null
size: Tiny
tags:
  - compendium/src/5e/mm
  - monster/cr/0
  - monster/size/tiny
  - monster/type/beast
aliases:
  - Frog
---
# [[5. Mechanics\Bestiary\Beast\Frog.md|Frog]]
*Source: Monster Manual p. 322, Curse of Strahd. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

A frog has no effective attacks. It feeds on small insects and typically dwells near water, in trees, or underground. The frog's statistics can also be used to represent a toad.

```statblock
"name": "Frog"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"modifier": !!int "1"
"stats":
  - !!int "1"
  - !!int "13"
  - !!int "8"
  - !!int "1"
  - !!int "8"
  - !!int "3"
"speed": "20 ft., swim 20 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+1"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+3"
"senses": "darkvision 30 ft., passive Perception 11"
"languages": ""
"cr": "0"
"traits":
  - "desc": "The frog can breathe air and water."
    "name": "Amphibious"
  - "desc": "The frog's long jump is up to 10 feet and its high jump is up to 5 feet,\
      \ with or without a running start."
    "name": "Standing Leap"
"source":
  - "MM"
  - "CoS"
"image": "5. Mechanics/Bestiary/Beast/token/frog.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
