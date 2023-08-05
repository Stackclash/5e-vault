---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/small
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Beast of the Sky"
"size": "Small"
"type": "beast"
"alignment": "Neutral"
"stats":
- !!int "6"
- !!int "16"
- !!int "13"
- !!int "8"
- !!int "14"
- !!int "11"
"speed": "walk 10 ft., fly 60 ft."
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The beast doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "You can add your proficiency bonus to any ability check or saving throw\
    \ that the beast makes."
  "name": "Primal Bond"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d4 + 3 + PB slashing damage"
  "name": "Shred"
"source":
- "TCE"
"image": "/compendium/bestiary/beast/token/beast-of-the-sky.png"
aliases: ["Beast of the Sky"]
---
# Beast of the Sky
*Source: Tasha's Cauldron of Everything p. 61*  

```ad-statblock
title: Beast of the Sky
![[/6. Mechanics/Bestiary/Beast/Token/beast-of-the-sky.png#token]]
*Small beast, Neutral*

- **Armor Class** (13 + PB (natural armor))
- **Hit Points** null  (4 + four times your ranger level (the beast has a number of Hit Dice [d6s] equal to your ranger level))
- **Speed** walk 10 ft., fly 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6 (-2)|16 (+3)|13 (+1)| 8 (-1)|14 (+2)|11 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 12
- **Languages** understands the languages you speak
- **Challenge** 

## Traits

***Flyby.*** The beast doesn't provoke opportunity attacks when it flies out of an enemy's reach.

***Primal Bond.*** You can add your proficiency bonus to any ability check or saving throw that the beast makes.

## Actions

***Shred.*** *Melee Weapon Attack:* the summoner's spell attack modifier to hit, reach 5 ft., one target. Hit: `1d4 + 3 + PB` slashing damage
```
^statblock