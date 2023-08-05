---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/arctic
- monster/environment/coastal
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/human
statblock: true
statblock-link: "#^statblock"
"name": "Ismark Kolyanovich"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "17"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "3"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ismark makes two longsword attacks. If it has a shortsword drawn, it can\
    \ also make a shortsword attack."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) slashing damage, or 8 (dice: 1d10 + 3|avg\
    \ (1d10 + 3)) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+3 (+3 to hit), range 100/400 ft., one\
    \ target. Hit: dice: 1d10 + 1|avg (1d10 + 1) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "CoS"
"image": "/compendium/bestiary/npc/token/ismark-kolyanovich.png"
aliases: ["Ismark Kolyanovich"]
---
# Ismark Kolyanovich
*Source: Curse of Strahd p. 43, Derived from Veteran (MM)*  

```ad-statblock
title: Ismark Kolyanovich
![[/6. Mechanics/Bestiary/Npc/Token/ismark-kolyanovich.png#token]]
*Medium humanoid(human), Lawful Good*

- **Armor Class** 17 ([[/6. Mechanics/Items/splint-armor.md\|splint armor]])
- **Hit Points** `dice: 9d8 + 18|text(58)` (9d8 + 18) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|13 (+1)|14 (+2)|10 (+0)|11 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Athletics +5, Perception +2
- **Senses** passive Perception 12
- **Languages** any one language (usually Common)
- **Challenge** 3

## Actions

***Multiattack.*** Ismark makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.

***Longsword.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 3` (`1d8 + 3`) slashing damage, or 8 (`dice: 1d10 + 3` (`1d10 + 3`)) slashing damage if used with two hands.

***Shortsword.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 3` (`1d6 + 3`) piercing damage.

***Heavy Crossbow.*** *Ranged Weapon Attack:* `dice: d20+3` (+3 to hit), range 100/400 ft., one target. Hit: `dice: 1d10 + 1` (`1d10 + 1`) piercing damage.
```
^statblock

## Environment

coastal, mountain, grassland, hill, arctic, urban, forest, underdark