---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/3
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/underdark
- monster/environment/urban
- monster/size/large
- monster/type/monstrosity
statblock: inline
aliases: ["Phase Spider"]
---
# [[5. Mechanics/Bestiary/Monstrosity/Phase Spider.md|Phase Spider]]
*Source: Monster Manual p. 334. Available in the SRD and the Basic Rules.*  

A phase spider possesses the magical ability to phase in and out of the Ethereal Plane. It seems to appear out of nowhere and quickly vanishes after attacking. Its movement on the Ethereal Plane before coming back to the Material Plane makes it seem like it can teleport.

```statblock
"name": "Phase Spider"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "32"
"hit_dice": "5d10 + 5"
"stats":
- !!int "15"
- !!int "15"
- !!int "12"
- !!int "6"
- !!int "10"
- !!int "6"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "6"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "3"
"traits":
- "desc": "As a bonus action, the spider can magically shift from the Material Plane\
    \ to the Ethereal Plane, or vice versa."
  "name": "Ethereal Jaunt"
- "desc": "The spider can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "The spider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d10 + 2|avg (1d10 + 2) piercing damage, and the target must\
    \ make a DC 11 Constitution saving throw, taking dice: 4d8|avg (4d8) poison\
    \ damage on a failed save, or half as much damage on a successful one. If the\
    \ poison damage reduces the target to 0 hit points, the target is stable but [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ for 1 hour, even after regaining hit points, and is [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] in this way."
  "name": "Bite"
"source":
- "MM"
- "WDMM"
- "GoS"
- "DIP"
- "SDW"
- "MOT"
- "IDRotF"
- "PaBTSO"
- "BMT"
- "DoDk"
"image": "5. Mechanics/Bestiary/Monstrosity/token/phase-spider.png"
```
^statblock

## Environment

underdark, grassland, forest, hill, urban, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```