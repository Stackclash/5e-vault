---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/1
- monster/environment/underwater
- monster/size/large
- monster/type/beast
statblock: inline
aliases: ["Giant Octopus"]
---
# [[5. Mechanics/Bestiary/Beast/Giant Octopus.md|Giant Octopus]]
*Source: Monster Manual p. 326, Tasha's Cauldron of Everything. Available in the SRD and the Basic Rules.*  

```statblock
"name": "Giant Octopus"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "52"
"hit_dice": "8d10 + 8"
"stats":
- !!int "17"
- !!int "13"
- !!int "13"
- !!int "4"
- !!int "10"
- !!int "4"
"speed": "10 ft., swim 60 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "1"
"traits":
- "desc": "While out of water, the octopus can hold its breath for 1 hour."
  "name": "Hold Breath"
- "desc": "The octopus has advantage on Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
    \ checks made while underwater."
  "name": "Underwater Camouflage"
- "desc": "The octopus can breathe only underwater."
  "name": "Water Breathing"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 15 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) bludgeoning damage. If the target is\
    \ a creature, it is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]] (escape\
    \ DC 16). Until this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]],\
    \ and the octopus can't use its tentacles on another target."
  "name": "Tentacles"
- "desc": "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater.\
    \ The area is heavily obscured for 1 minute, although a significant current can\
    \ disperse the ink. After releasing the ink, the octopus can use the Dash action\
    \ as a bonus action."
  "name": "Ink Cloud (Recharges after a Short or Long Rest)"
"source":
- "MM"
- "PotA"
- "RoT"
- "GoS"
- "EGW"
- "MOT"
- "TCE"
- "CRCotN"
- "DSotDQ"
- "PaBTSO"
"image": "5. Mechanics/Bestiary/Beast/token/giant-octopus.png"
```
^statblock

## Environment

underwater

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```