---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/1-2
- monster/environment/swamp
- monster/environment/urban
- monster/size/large
- monster/type/beast
statblock: inline
aliases: ["Crocodile"]
---
# [[5. Mechanics\Bestiary\Beast\Crocodile.md|Crocodile]]
*Source: Monster Manual p. 320. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Crocodile"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "20 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "2"
"senses": "passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The crocodile can hold its breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d10 + 2|avg (1d10 + 2) piercing damage, and the target is\
    \ [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]] (escape DC 12). Until this\
    \ grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]],\
    \ and the crocodile can't bite another target"
  "name": "Bite"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "ToA"
- "GoS"
- "DIP"
- "SLW"
- "IMR"
- "EGW"
- "WBtW"
- "PSX"
- "PSA"
"image": "compendium/bestiary/beast/token/crocodile.png"
```
^statblock

## Environment

swamp, urban

## Harvester Table
```dataviewjs
await dv.view("monsterHarvesterTable", {current: dv.current()})
```