---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/hill
- monster/environment/urban
- monster/size/medium
- monster/type/beast
statblock: inline
---
# Mastiff
*Source: Monster Manual p. 332, Curse of Strahd, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Dragonlance: Shadow of the Dragon Queen, Keys from the Golden Vault*  

Mastiffs are impressive hounds prized by humanoids for their loyalty and keen senses. Mastiffs can be trained as guard dogs, hunting dogs, and war dogs. Halflings and other Small humanoids ride them as mounts.

```statblock
"name": "Mastiff"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "5"
"hit_dice": "1d8 + 1"
"stats":
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mastiff has advantage on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) piercing damage. If the target is a creature,\
    \ it must succeed on a DC 11 Strength saving throw or be knocked [[6. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Bite"
"source":
- "MM"
- "CoS"
- "SKT"
- "TftYP"
- "WDH"
- "BGDIA"
- "ERLW"
- "EGW"
- "DSotDQ"
- "KftGV"
"image": "6. Mechanics/Bestiary/Beast/token/mastiff.png"
```
^statblock

## Environment

forest, hill, urban