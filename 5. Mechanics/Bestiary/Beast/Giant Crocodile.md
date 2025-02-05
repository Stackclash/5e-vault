---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: swamp
size: Huge
tags:
  - compendium/src/5e/mm
  - monster/cr/5
  - monster/environment/swamp
  - monster/size/huge
  - monster/type/beast
aliases:
  - Giant Crocodile
---
# [[5. Mechanics\Bestiary\Beast\Giant Crocodile.md|Giant Crocodile]]
*Source: Monster Manual p. 324. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Giant Crocodile"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "9d12 + 27"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "30 ft., swim 50 ft."
"skillsaves":
  "Stealth": !!int "5"
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- "desc": "The crocodile can hold its breath for 30 minutes."
  "name": "Hold Breath"
"actions":
- "desc": "The crocodile makes two attacks: one with its bite and one with its tail."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10\
    \ + 5) piercing damage, and the target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ (escape DC 16). Until this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
    \ and the crocodile can't bite another target."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ by the crocodile. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a\
    \ creature, it must succeed on a DC 16 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Tail"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Beast/token/giant-crocodile.webp"
```
^statblock

## Environment

swamp

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
