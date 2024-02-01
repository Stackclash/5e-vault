---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/5
- monster/environment/swamp
- monster/size/huge
- monster/type/beast
statblock: inline
aliases: ["Giant Crocodile"]
---
# [[5. Mechanics\Bestiary\Beast\Giant Crocodile.md|Giant Crocodile]]
*Source: Monster Manual p. 324. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Giant Crocodile"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
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
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 3d10 + 5|avg (3d10 + 5) piercing damage, and the target is\
    \ [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]] (escape DC 16). Until this\
    \ grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]],\
    \ and the crocodile can't bite another target."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 10 ft., one target\
    \ not [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]] by the crocodile. Hit:\
    \ dice: 2d8 + 5|avg (2d8 + 5) bludgeoning damage. If the target is a creature,\
    \ it must succeed on a DC 16 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Tail"
"source":
- "MM"
- "PotA"
- "ToA"
- "DIP"
- "SLW"
- "JttRC"
- "ToFW"
- "GHLoE"
- "DoDk"
"image": "compendium/bestiary/beast/token/giant-crocodile.png"
```
^statblock

## Environment

swamp

```dataviewjs
await dv.view("monsterHarvesterTable", {current: dv.current()})
```