---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/size/medium
- monster/type/fey
statblock: inline
---
# Blink Dog
*Source: Monster Manual p. 318, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Eberron: Rising from the Last War, Mythic Odysseys of Theros, Tasha's Cauldron of Everything, The Wild Beyond the Witchlight*  

A blink dog takes its name from its ability to blink in and out of existence, a talent it uses to aid its attacks and to avoid harm. Blink dogs harbor a long-standing hatred for displacer beasts and attack them on sight.

```statblock
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
  "desc": "The dog has advantage on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]])\
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
"image": "6. Mechanics/Bestiary/Fey/token/blink-dog.png"
```
^statblock

## Environment

forest