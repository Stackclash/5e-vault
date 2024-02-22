---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/forest
  - monster/environment/swamp
  - monster/size/medium
  - monster/type/beast
statblock: inline
aliases:
  - Giant Frog
---
# [[5. Mechanics\Bestiary\Beast\Giant Frog.md|Giant Frog]]
*Source: Monster Manual p. 325. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Giant Frog"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "12"
- !!int "13"
- !!int "11"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "2"
"senses": "darkvision 30 ft., passive Perception 12"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The frog can breathe air and water."
  "name": "Amphibious"
- "desc": "The frog's long jump is up to 20 feet and its high jump is up to 10 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) piercing damage, and the target is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 11). Until this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]],\
    \ and the frog can't bite another target."
  "name": "Bite"
- "desc": "The frog makes one bite attack against a Small or smaller target it is\
    \ grappling. If the attack hits, the target is swallowed, and the grapple ends.\
    \ The swallowed target is [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]] and\
    \ [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]], it has total cover\
    \ against attacks and other effects outside the frog, and it takes dice: 2d4|avg\
    \ (2d4) acid damage at the start of each of the frog's turns. The frog can have\
    \ only one target swallowed at a time. If the frog dies, a swallowed creature\
    \ is no longer [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]] by it\
    \ and can escape from the corpse using 5 feet of movement, exiting [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Swallow"
"source":
- "MM"
- "HotDQ"
- "TftYP"
- "ToA"
- "WDMM"
- "GoS"
- "EGW"
- "WBtW"
- "PSA"
"image": "5. Mechanics/Bestiary/Beast/token/giant-frog.webp"
```
^statblock

## Environment

forest, swamp

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
