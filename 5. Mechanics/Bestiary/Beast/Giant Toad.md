---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/1
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/size/large
- monster/type/beast
statblock: inline
aliases: ["Giant Toad"]
---
# [[5. Mechanics\Bestiary\Beast\Giant Toad.md|Giant Toad]]
*Source: Monster Manual p. 329, Tasha's Cauldron of Everything. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Giant Toad"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "39"
"hit_dice": "6d10 + 6"
"stats":
- !!int "15"
- !!int "13"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "20 ft., swim 40 ft."
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "1"
"traits":
- "desc": "The toad can breathe air and water."
  "name": "Amphibious"
- "desc": "The toad's long jump is up to 20 feet and its high jump is up to 10 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d10 + 2|avg (1d10 + 2) piercing damage plus dice: 1d10|avg\
    \ (1d10) poison damage, and the target is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 13). Until this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]],\
    \ and the toad can't bite another target."
  "name": "Bite"
- "desc": "The toad makes one bite attack against a Medium or smaller target it is\
    \ grappling. If the attack hits, the target is swallowed, and the grapple ends.\
    \ The swallowed target is [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]] and\
    \ [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]], it has total cover\
    \ against attacks and other effects outside the toad, and it takes dice: 3d6|avg\
    \ (3d6) acid damage at the start of each of the toad's turns. The toad can have\
    \ only one target swallowed at a time.\n\nIf the toad dies, a swallowed creature\
    \ is no longer [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]] by it\
    \ and can escape from the corpse using 5 feet of movement, exiting [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Swallow"
"source":
- "MM"
- "WDMM"
- "GoS"
- "EGW"
- "TCE"
- "WBtW"
- "KftGV"
"image": "compendium/bestiary/beast/token/giant-toad.png"
```
^statblock

## Environment

underdark, forest, swamp, desert, coastal

## Harvester Table
```dataviewjs
await dv.view("monsterHarvesterTable", {current: dv.current()})
```