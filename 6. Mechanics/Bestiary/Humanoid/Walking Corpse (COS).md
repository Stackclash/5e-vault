---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/arctic
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
statblock: true
statblock-link: "#^statblock"
"name": "Walking Corpse"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "walk 20 ft."
"condition_immunities": "charmed, frightened"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "0"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When a corpse is reduced to 0 hit points, it splits open, disgorging a\
    \ [[/6. Mechanics/Bestiary/Beast/Swarm Of Poisonous Snakes.md\|swarm of poisonous snakes]].\
    \ The snakes are hungry and fight until slain."
  "name": "Violent Death"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4|avg (1d4) bludgeoning damage."
  "name": "Club"
"source":
- "CoS"
"image": "/compendium/bestiary/humanoid/token/walking-corpse.png"
aliases: ["Walking Corpse"]
---
# Walking Corpse
*Source: Curse of Strahd p. 165, Derived from Commoner (MM)*  

```ad-statblock
title: Walking Corpse
![[/6. Mechanics/Bestiary/Humanoid/Token/walking-corpse.png#token]]
*Medium humanoid(any race), Any alignment*

- **Armor Class** 10 
- **Hit Points** `dice: 1d8|text(4)` (1d8) 
- **Speed** walk 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|10 (+0)|10 (+0)|10 (+0)|10 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 10
- **Condition Immunities** charmed, frightened
- **Languages** any one language (usually Common)
- **Challenge** 0

## Traits

***Violent Death.*** When a corpse is reduced to 0 hit points, it splits open, disgorging a [[/6. Mechanics/Bestiary/Beast/Swarm Of Poisonous Snakes.md\|swarm of poisonous snakes]]. The snakes are hungry and fight until slain.

## Actions

***Club.*** *Melee Weapon Attack:* `dice: d20+2` (+2 to hit), reach 5 ft., one target. Hit: `dice: 1d4` (`1d4`) bludgeoning damage.
```
^statblock

## Environment

arctic, desert, coastal, grassland, hill, urban, forest