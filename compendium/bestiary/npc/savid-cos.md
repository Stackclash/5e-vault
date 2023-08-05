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
- monster/type/humanoid/dusk-elf
statblock: true
statblock-link: "#^statblock"
"name": "Savid"
"size": "Medium"
"type": "humanoid"
"subtype": "Dusk elf"
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
  "desc": "Savid has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Savid makes two melee attacks or two ranged attacks."
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
"image": "/compendium/bestiary/npc/token/savid.png"
aliases: ["Savid"]
---
# Savid
*Source: Curse of Strahd p. 133, Derived from Scout (MM)*  

```ad-statblock
title: Savid
![](/compendium/bestiary/npc/token/savid.png#token)
*Medium humanoid(Dusk elf), Neutral*

- **Armor Class** 13 ([leather armor](/compendium/items/leather-armor.md))
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

***Keen Hearing and Sight.*** Savid has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on hearing or sight.

## Actions

***Multiattack.*** Savid makes two melee attacks or two ranged attacks.

***Shortsword.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage.

***Longbow.*** *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), ranged 150/600 ft., one target. Hit: `dice: 1d8 + 2|avg` (`1d8 + 2`) piercing damage.
```
^statblock

## Environment

coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert