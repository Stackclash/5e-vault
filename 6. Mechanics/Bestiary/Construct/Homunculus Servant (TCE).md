---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/tiny
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
"name": "Homunculus Servant"
"size": "Tiny"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"stats":
- !!int "4"
- !!int "15"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "7"
"speed": "walk 20 ft., fly 30 ft."
"saves":
  "Dexterity": !!int "0"
"skillsaves":
  "Stealth": !!int "0"
  "Perception": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 0"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the homunculus is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, it instead takes no damage if it succeeds\
    \ on the saving throw, and only half damage if it fails. It can't use this trait\
    \ if it's [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]."
  "name": "Evasion"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: the summoner's spell attack modifier to hit, range\
    \ 30 ft., one target you can see. Hit: 1d4 + PB force damage."
  "name": "Force Strike"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The homunculus delivers a spell you cast that has a range of touch. The\
    \ homunculus must be within 120 feet of you."
  "name": "Channel Magic"
"source":
- "TCE"
- "ERLW"
"image": "/compendium/bestiary/construct/token/homunculus-servant.png"
aliases: ["Homunculus Servant"]
---
# Homunculus Servant
*Source: Tasha's Cauldron of Everything p. 22, Eberron: Rising from the Last War p. 62*  

```ad-statblock
title: Homunculus Servant
![[/6. Mechanics/Bestiary/Construct/Token/homunculus-servant.png#token]]
*Tiny construct, Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** null  (1 + your Intelligence modifier + your artificer level (the homunculus has a number of Hit Dice [d4s] equal to your artificer level))
- **Speed** walk 20 ft., fly 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 4 (-3)|15 (+2)|12 (+1)|10 (+0)|10 (+0)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** Dexterity 0
- **Skills** Perception 0, Stealth 0
- **Senses** darkvision 60 ft., passive Perception 0
- **Damage Immunities** poison
- **Condition Immunities** exhaustion, poisoned
- **Languages** understands the languages you speak
- **Challenge** 

## Traits

***Evasion.*** If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can't use this trait if it's [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

## Actions

***Force Strike.*** *Ranged Weapon Attack:* the summoner's spell attack modifier to hit, range 30 ft., one target you can see. Hit: `1d4 + PB` force damage.

## Reactions

***Channel Magic.*** The homunculus delivers a spell you cast that has a range of touch. The homunculus must be within 120 feet of you.
```
^statblock