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
statblock: true
statblock-link: "#^statblock"
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
  "desc": "The owl has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
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
"image": "/compendium/bestiary/beast/token/giant-owl.png"
aliases: ["Giant Owl"]
---
# Giant Owl
*Source: Monster Manual p. 327, Storm King's Thunder, Eberron: Rising from the Last War, Infernal Machine Rebuild, Explorer's Guide to Wildemount*  

Giant owls often befriend fey and other sylvan creatures and are guardians of their woodland realms.

```ad-statblock
title: Giant Owl
![](/compendium/bestiary/beast/token/giant-owl.png#token)
*Large beast, Neutral*

- **Armor Class** 12 
- **Hit Points** `dice: 3d10 + 3|text(19)` (3d10 + 3) 
- **Speed** walk 5 ft., fly 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|13 (+1)|15 (+2)|12 (+1)| 8 (-1)|13 (+1)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +5, Stealth +4
- **Senses** darkvision 120 ft., passive Perception 15
- **Languages** Giant Owl, understands Common, Elvish, and Sylvan but can't speak them
- **Challenge** 1/4

## Traits

***Flyby.*** The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach.

***Keen Hearing and Sight.*** The owl has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on hearing or sight.

## Actions

***Talons.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 1|avg` (`2d6 + 1`) slashing damage.
```
^statblock

## Environment

forest, hill, arctic