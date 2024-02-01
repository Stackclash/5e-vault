---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/1
- monster/environment/desert
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/large
- monster/type/beast
statblock: inline
aliases: ["Giant Spider"]
---
# [[5. Mechanics\Bestiary\Beast\Giant Spider.md|Giant Spider]]
*Source: Monster Manual p. 328, Curse of Strahd, Eberron: Rising from the Last War, Tasha's Cauldron of Everything. Available in the SRD and the Basic Rules.*  

To snare its prey, a giant spider spins elaborate webs or shoots sticky strands of webbing from its abdomen. Giant spiders are most commonly found underground, making their lairs on ceilings or in dark, web-filled crevices. Such lairs are often festooned with web cocoons holding past victims.

```statblock
"name": "Giant Spider"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"stats":
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "2"
- !!int "11"
- !!int "4"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "7"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1"
"traits":
- "desc": "The spider can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "While in contact with a web, the spider knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- "desc": "The spider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) piercing damage, and the target must\
    \ make a DC 11 Constitution saving throw, taking dice: 2d8|avg (2d8) poison\
    \ damage on a failed save, or half as much damage on a successful one. If the\
    \ poison damage reduces the target to 0 hit points, the target is stable but [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ for 1 hour, even after regaining hit points, and is [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] in this way."
  "name": "Bite"
- "desc": "Ranged Weapon Attack: dice: d20+5 (+5 to hit), range 30/60 ft., one\
    \ creature. Hit: The target is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ by webbing. As an action, the [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ target can make a DC 12 Strength check, bursting the webbing on a success. The\
    \ webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire\
    \ damage; immunity to bludgeoning, poison, and psychic damage)."
  "name": "Web (Recharge 5-6)"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "LMoP"
- "RoT"
- "SKT"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DIP"
- "BGDIA"
- "ERLW"
- "RMBRE"
- "EGW"
- "MOT"
- "TCE"
- "CRCotN"
- "DSotDQ"
- "PSX"
- "HftT"
- "PaBTSO"
- "BMT"
"image": "compendium/bestiary/beast/token/giant-spider.png"
```
^statblock

## Environment

underdark, forest, swamp, urban, desert

## Harvester Table
```dataviewjs
await dv.view("monsterHarvesterTable", {current: dv.current()})
```