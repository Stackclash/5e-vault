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
- monster/environment/mountain
- monster/environment/swamp
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/any-race
statblock: true
statblock-link: "#^statblock"
"name": "Barovian Scout"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "13"
- !!int "11"
"speed": "walk 30 ft."
"skillsaves":
  "Nature": !!int "4"
  "Stealth": !!int "6"
  "Perception": !!int "5"
  "Survival": !!int "5"
"senses": "passive Perception 15"
"languages": "any one language (usually Common)"
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The scout has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]])\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The scout makes two melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), ranged 80/320 ft., one\
    \ target. Hit: dice: 1d8 + 2|avg (1d8 + 2) piercing damage."
  "name": "Light Crossbows"
"source":
- "CoS"
"image": "/compendium/bestiary/humanoid/token/barovian-scout.png"
aliases: ["Barovian Scout"]
---
# Barovian Scout
*Source: Curse of Strahd p. 29, Derived from Scout (MM)*  

```ad-statblock
title: Barovian Scout
![[/6. Mechanics/Bestiary/Humanoid/Token/barovian-scout.png#token]]
*Medium humanoid(any race), Any alignment*

- **Armor Class** 13 ([[/6. Mechanics/Items/leather-armor.md\|leather armor]])
- **Hit Points** `dice: 3d8 + 3|text(16)` (3d8 + 3) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|14 (+2)|12 (+1)|11 (+0)|13 (+1)|11 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Nature +4, Perception +5, Stealth +6, Survival +5
- **Senses** passive Perception 15
- **Languages** any one language (usually Common)
- **Challenge** 1/2

## Traits

***Keen Hearing and Sight.*** The scout has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on hearing or sight.

## Actions

***Multiattack.*** The scout makes two melee attacks or two ranged attacks.

***Shortsword.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2` (`1d6 + 2`) piercing damage.

***Light Crossbows.*** *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), ranged 80/320 ft., one target. Hit: `dice: 1d8 + 2` (`1d8 + 2`) piercing damage.
```
^statblock

## Environment

coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert