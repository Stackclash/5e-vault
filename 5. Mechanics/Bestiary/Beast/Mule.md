---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/8
environments: 'hill, urban, desert'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1-8
  - monster/environment/desert
  - monster/environment/hill
  - monster/environment/urban
  - monster/size/medium
  - monster/type/beast
aliases:
  - Mule
---
# [[5. Mechanics/Bestiary/Beast/Mule.md|Mule]]
*Source: Monster Manual p. 333, Curse of Strahd. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Mule"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "14"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
- "desc": "The mule is considered to be a Large animal for the purpose of determining\
    \ its carrying capacity."
  "name": "Beast of Burden"
- "desc": "The mule has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Sure-Footed"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) bludgeoning damage."
  "name": "Hooves"
"source":
- "MM"
- "CoS"
"image": "5. Mechanics/Bestiary/Beast/token/mule.webp"
```
^statblock

## Environment

hill, urban, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
