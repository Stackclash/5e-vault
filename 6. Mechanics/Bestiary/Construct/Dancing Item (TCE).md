---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/large
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
"name": "Dancing Item"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"stats":
- !!int "18"
- !!int "14"
- !!int "16"
- !!int "4"
- !!int "10"
- !!int "6"
"speed": "walk 30 ft., fly 30 ft. (hover)"
"damage_immunities": "poison, psychic"
"condition_immunities": "charmed, exhaustion, poisoned, frightened"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The item is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When any creature starts its turn within 10 feet of the item, the item\
    \ can increase or decrease (your choice) the walking speed of that creature by\
    \ 10 feet until the end of the turn, provided the item isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]."
  "name": "Irrepressible Dance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target you can see. Hit: 1d10 + PB force damage."
  "name": "Force-Empowered Slam"
"source":
- "TCE"
"image": "/compendium/bestiary/construct/token/dancing-item.png"
aliases: ["Dancing Item"]
---
# Dancing Item
*Source: Tasha's Cauldron of Everything p. 29*  

```ad-statblock
title: Dancing Item
![[/6. Mechanics/Bestiary/Construct/Token/dancing-item.png#token]]
*Large construct, Unaligned*

- **Armor Class** 16 (natural armor)
- **Hit Points** null  (10 + five times your bard level)
- **Speed** walk 30 ft., fly 30 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|14 (+2)|16 (+3)| 4 (-3)|10 (+0)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Immunities** poison, psychic
- **Condition Immunities** charmed, exhaustion, poisoned, frightened
- **Languages** understands the languages you speak
- **Challenge** 

## Traits

***Immutable Form.*** The item is immune to any spell or effect that would alter its form.

***Irrepressible Dance.*** When any creature starts its turn within 10 feet of the item, the item can increase or decrease (your choice) the walking speed of that creature by 10 feet until the end of the turn, provided the item isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

## Actions

***Force-Empowered Slam.*** *Melee Weapon Attack:* the summoner's spell attack modifier to hit, reach 5 ft., one target you can see. Hit: `1d10 + PB` force damage.
```
^statblock