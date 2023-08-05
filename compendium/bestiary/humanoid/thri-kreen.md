---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/grassland
- monster/size/medium
- monster/type/humanoid/thri-kreen
statblock: true
statblock-link: "#^statblock"
"name": "Thri-kreen"
"size": "Medium"
"type": "humanoid"
"subtype": "thri-kreen"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "12"
- !!int "15"
- !!int "13"
- !!int "8"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Thri-kreen"
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The thri-kreen can change the color of its carapace to match the color\
    \ and texture of its surroundings. As a result, it has advantage on Dexterity\
    \ (Stealth) checks made to hide."
  "name": "Chameleon Carapace"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The thri-kreen's long jump is up to 30 feet and its high jump is up to\
    \ 15 feet, with or without a running start."
  "name": "Standing Leap"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The thri-kreen makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) piercing damage, and the target must succeed\
    \ on a DC 11 Constitution saving throw or be [poisoned](compendium/rules/conditions.md#poisoned)\
    \ for 1 minute. If the saving throw fails by 5 or more, the target is also [paralyzed](compendium/rules/conditions.md#paralyzed)\
    \ while [poisoned](compendium/rules/conditions.md#poisoned) in this way. The [poisoned](compendium/rules/conditions.md#poisoned)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 1|avg (2d4 + 1) slashing damage."
  "name": "Claws"
"source":
- "MM"
- "JttRC"
- "LoX"
"image": "/compendium/bestiary/humanoid/token/thri-kreen.png"
aliases: ["Thri-kreen"]
---
# Thri-kreen
*Source: Monster Manual p. 288, Journeys through the Radiant Citadel, Light of Xaryxis*  

Thri-kreen wander the deserts and savannas of the world, avoiding all other races.

## Thri-Kreen Communication

Thri-kreen employ a language without words. To show emotion and reaction, a thri-kreen clacks its mandibles and waves its antennae, giving other thri-kreen a sense of what it is thinking and feeling. Other creatures find this manner of communication difficult to interpret and impossible to duplicate.

When forced to interact with creatures of other intelligent species, thri-kreen employ alternative methods of communication, such as drawing pictures in sand or making pictures out of twigs or blades of grass.

## Limited Emotions

Thri-kreen experience the full range of emotions but aren't as prone to emotional outbursts as humans. Thri-kreen with psionic ability often demonstrate a wider range of emotions, particularly if they live near or interact with humans or other highly emotional creatures.

## Isolationists and Wanderers

Thri-kreen consider all other living creatures as potential nourishment, and they love the taste of elf flesh in particular. If a creature might be useful for something other than food, the thri-kreen aren't likely to attack it on sight. Thri-kreen kill to survive, never for sport.

## Sleepless

Thri-kreen don't require sleep and can rest while remaining alert and performing light tasks. Their inability to sleep is thought to be the reason why thri-kreen have such short lifespans, the average thri-kreen life expectancy being only thirty years.

## Stat Block

```ad-statblock
title: Thri-kreen
![](/compendium/bestiary/humanoid/token/thri-kreen.png#token)
*Medium humanoid(thri-kreen), Chaotic Neutral*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 6d8 + 6|text(33)` (6d8 + 6) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|15 (+2)|13 (+1)| 8 (-1)|12 (+1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +4, Survival +3
- **Senses** darkvision 60 ft., passive Perception 13
- **Languages** Thri-kreen
- **Challenge** 1

## Traits

***Chameleon Carapace.*** The thri-kreen can change the color of its carapace to match the color and texture of its surroundings. As a result, it has advantage on Dexterity (Stealth) checks made to hide.

***Standing Leap.*** The thri-kreen's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start.

## Actions

***Multiattack.*** The thri-kreen makes two attacks: one with its bite and one with its claws.

***Bite.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one creature. Hit: `dice: 1d6 + 1|avg` (`1d6 + 1`) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or be [poisoned](compendium/rules/conditions.md#poisoned) for 1 minute. If the saving throw fails by 5 or more, the target is also [paralyzed](compendium/rules/conditions.md#paralyzed) while [poisoned](compendium/rules/conditions.md#poisoned) in this way. The [poisoned](compendium/rules/conditions.md#poisoned) target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

***Claws.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 2d4 + 1|avg` (`2d4 + 1`) slashing damage.
```
^statblock

## Environment

grassland, desert