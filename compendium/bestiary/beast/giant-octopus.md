---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underwater
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
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
"speed": "walk 10 ft., swim 60 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While out of water, the octopus can hold its breath for 1 hour."
  "name": "Hold Breath"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The octopus has advantage on Dexterity ([Stealth](compendium/rules/skills.md#Stealth))\
    \ checks made while underwater."
  "name": "Underwater Camouflage"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The octopus can breathe only underwater."
  "name": "Water Breathing"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 15 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) bludgeoning damage. If the target is a\
    \ creature, it is [grappled](compendium/rules/conditions.md#grappled) (escape\
    \ DC 16). Until this grapple ends, the target is [restrained](compendium/rules/conditions.md#restrained),\
    \ and the octopus can't use its tentacles on another target."
  "name": "Tentacles"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater.\
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
"image": "/compendium/bestiary/beast/token/giant-octopus.png"
aliases: ["Giant Octopus"]
---
# Giant Octopus
*Source: Monster Manual p. 326, Princes of the Apocalypse, The Rise of Tiamat, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Tasha's Cauldron of Everything, Critical Role: Call of the Netherdeep, Dragonlance: Shadow of the Dragon Queen*  

```ad-statblock
title: Giant Octopus
![](/compendium/bestiary/beast/token/giant-octopus.png#token)
*Large beast, Unaligned*

- **Armor Class** 11 
- **Hit Points** `dice: 8d10 + 8|text(52)` (8d10 + 8) 
- **Speed** walk 10 ft., swim 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|13 (+1)|13 (+1)| 4 (-3)|10 (+0)| 4 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +4, Stealth +5
- **Senses** darkvision 60 ft., passive Perception 14
- **Languages** —
- **Challenge** 1

## Traits

***Hold Breath.*** While out of water, the octopus can hold its breath for 1 hour.

***Underwater Camouflage.*** The octopus has advantage on Dexterity ([Stealth](compendium/rules/skills.md#Stealth)) checks made while underwater.

***Water Breathing.*** The octopus can breathe only underwater.

## Actions

***Tentacles.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 15 ft., one target. Hit: `dice: 2d6 + 3|avg` (`2d6 + 3`) bludgeoning damage. If the target is a creature, it is [grappled](compendium/rules/conditions.md#grappled) (escape DC 16). Until this grapple ends, the target is [restrained](compendium/rules/conditions.md#restrained), and the octopus can't use its tentacles on another target.

***Ink Cloud (Recharges after a Short or Long Rest).*** A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.
```
^statblock

## Environment

underwater