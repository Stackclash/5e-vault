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
- monster/type/humanoid/human
statblock: true
statblock-link: "#^statblock"
"name": "Yevgeni Krushkin"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral"
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
  "desc": "Yevgeni has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]])\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Yevgeni makes two melee attacks or two ranged attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), ranged 150/600 ft.,\
    \ one target. Hit: dice: 1d8 + 2|avg (1d8 + 2) piercing damage."
  "name": "Longbow"
"source":
- "CoS"
"image": "/compendium/bestiary/npc/token/yevgeni-krushkin.png"
aliases: ["Yevgeni Krushkin"]
---
# Yevgeni Krushkin
*Source: Curse of Strahd p. 100, Derived from Scout (MM)*  

```ad-statblock
title: Yevgeni Krushkin
![[/6. Mechanics/Bestiary/Npc/Token/yevgeni-krushkin.png#token]]
*Medium humanoid(human), Neutral*

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

***Keen Hearing and Sight.*** Yevgeni has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on hearing or sight.

## Actions

***Multiattack.*** Yevgeni makes two melee attacks or two ranged attacks.

***Shortsword.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2` (`1d6 + 2`) piercing damage.

***Longbow.*** *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), ranged 150/600 ft., one target. Hit: `dice: 1d8 + 2` (`1d8 + 2`) piercing damage.
```
^statblock

## Environment

coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert