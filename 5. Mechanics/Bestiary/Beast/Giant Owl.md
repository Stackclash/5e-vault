---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/arctic
- monster/environment/forest
- monster/environment/hill
- monster/size/large
- monster/type/beast
statblock: inline
---
# Giant Owl
*Source: Monster Manual p. 327, Storm King's Thunder, Eberron: Rising from the Last War, Infernal Machine Rebuild, Explorer's Guide to Wildemount*  

Giant owls often befriend fey and other sylvan creatures and are guardians of their woodland realms.

```statblock
"name": "Giant Owl"
"size": "Large"
"type": "beast"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "13"
- !!int "15"
- !!int "12"
- !!int "8"
- !!int "13"
- !!int "10"
"speed": "walk 5 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Giant Owl, understands Common, Elvish, and Sylvan but can't speak them"
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The owl has advantage on Wisdom ([[5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 1|avg (2d6 + 1) slashing damage."
  "name": "Talons"
"source":
- "MM"
- "SKT"
- "ERLW"
- "IMR"
- "EGW"
"image": "5. Mechanics/Bestiary/Beast/token/giant-owl.png"
```
^statblock

## Environment

forest, hill, arctic