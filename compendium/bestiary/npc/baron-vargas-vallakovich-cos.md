---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/human
statblock: true
statblock-link: "#^statblock"
"name": "Baron Vargas Vallakovich"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "12"
- !!int "11"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Insight": !!int "4"
  "Persuasion": !!int "5"
"senses": "passive Perception 12"
"languages": "any two languages"
"cr": "1/8"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 1|avg (1d8 + 1) piercing damage."
  "name": "Rapier"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Vargas adds 2 to its AC against one melee attack that would hit it. To\
    \ do so, Vargas must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "CoS"
"image": "/compendium/bestiary/npc/token/baron-vargas-vallakovich.png"
aliases: ["Baron Vargas Vallakovich"]
---
# Baron Vargas Vallakovich
*Source: Curse of Strahd p. 105, Derived from Noble (MM)*  

```ad-statblock
title: Baron Vargas Vallakovich
![](/compendium/bestiary/npc/token/baron-vargas-vallakovich.png#token)
*Medium humanoid(human), Neutral Evil*

- **Armor Class** 15 ([breastplate](/compendium/items/breastplate.md))
- **Hit Points** `dice: 2d8|text(9)` (2d8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|12 (+1)|11 (+0)|12 (+1)|14 (+2)|16 (+3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Deception +5, Insight +4, Persuasion +5
- **Senses** passive Perception 12
- **Languages** any two languages
- **Challenge** 1/8

## Actions

***Rapier.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 1|avg` (`1d8 + 1`) piercing damage.

## Reactions

***Parry.*** Vargas adds 2 to its AC against one melee attack that would hit it. To do so, Vargas must see the attacker and be wielding a melee weapon.
```
^statblock

## Environment

urban