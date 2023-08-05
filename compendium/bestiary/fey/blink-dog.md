---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/size/medium
- monster/type/fey
statblock: true
statblock-link: "#^statblock"
"name": "Blink Dog"
"size": "Medium"
"type": "fey"
"alignment": "Lawful Good"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "12"
- !!int "17"
- !!int "12"
- !!int "10"
- !!int "13"
- !!int "11"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": "Blink Dog, understands Sylvan but can't speak it"
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dog has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dog magically teleports, along with any equipment it is wearing or\
    \ carrying, up to 40 feet to an unoccupied space it can see. Before or after teleporting,\
    \ the dog can make one bite attack."
  "name": "Teleport (Recharge 4-6)"
"source":
- "MM"
- "WDMM"
- "GoS"
- "ERLW"
- "MOT"
- "TCE"
- "WBtW"
"image": "/compendium/bestiary/fey/token/blink-dog.png"
aliases: ["Blink Dog"]
---
# Blink Dog
*Source: Monster Manual p. 318, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Eberron: Rising from the Last War, Mythic Odysseys of Theros, Tasha's Cauldron of Everything, The Wild Beyond the Witchlight*  

A blink dog takes its name from its ability to blink in and out of existence, a talent it uses to aid its attacks and to avoid harm. Blink dogs harbor a long-standing hatred for displacer beasts and attack them on sight.

```ad-statblock
title: Blink Dog
![](/compendium/bestiary/fey/token/blink-dog.png#token)
*Medium fey, Lawful Good*

- **Armor Class** 13 
- **Hit Points** `dice: 4d8 + 4|text(22)` (4d8 + 4) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|17 (+3)|12 (+1)|10 (+0)|13 (+1)|11 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +5
- **Senses** passive Perception 13
- **Languages** Blink Dog, understands Sylvan but can't speak it
- **Challenge** 1/4

## Traits

***Keen Hearing and Smell.*** The dog has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on hearing or smell.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 1|avg` (`1d6 + 1`) piercing damage.

***Teleport (Recharge 4-6).*** The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 feet to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack.
```
^statblock

## Environment

forest