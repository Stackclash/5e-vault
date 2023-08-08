---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/small
- monster/type/beast
statblock: inline
---
# Octopus
*Source: Monster Manual p. 333, Storm King's Thunder, Ghosts of Saltmarsh, Infernal Machine Rebuild, Icewind Dale: Rime of the Frostmaiden, The Wild Beyond the Witchlight*  

```statblock
"name": "Octopus"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "3"
"hit_dice": "1d6"
"stats":
- !!int "4"
- !!int "15"
- !!int "11"
- !!int "3"
- !!int "10"
- !!int "4"
"speed": "walk 5 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"senses": "darkvision 30 ft., passive Perception 12"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While out of water, the octopus can hold its breath for 30 minutes."
  "name": "Hold Breath"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The octopus has advantage on Dexterity ([[6. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
    \ checks made while underwater."
  "name": "Underwater Camouflage"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The octopus can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: 1 bludgeoning damage, and the target is [[6. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 10). Until this grapple ends, the octopus can't use its tentacles\
    \ on another target."
  "name": "Tentacles"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater.\
    \ The area is heavily obscured for 1 minute, although a significant current can\
    \ disperse the ink. After releasing the ink, the octopus can use the Dash action\
    \ as a bonus action."
  "name": "Ink Cloud (Recharges after a Short or Long Rest)"
"source":
- "MM"
- "SKT"
- "GoS"
- "IMR"
- "IDRotF"
- "WBtW"
"image": "6. Mechanics/Bestiary/Beast/token/octopus.png"
```
^statblock