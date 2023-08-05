---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/arctic
- monster/environment/mountain
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Armored Saber-Toothed Tiger"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "84"
"hit_dice": "7d10 + 14"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "3"
- !!int "12"
- !!int "8"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The tiger has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the tiger moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 14 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone).\
    \ If the target is [prone](compendium/rules/conditions.md#prone), the tiger can\
    \ make one bite attack against it as a bonus action."
  "name": "Pounce"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d10 + 5|avg (1d10 + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 5|avg (2d6 + 5) slashing damage."
  "name": "Claw"
"source":
- "CoS"
"image": "/compendium/bestiary/beast/token/armored-saber-toothed-tiger.png"
aliases: ["Armored Saber-Toothed Tiger"]
---
# Armored Saber-Toothed Tiger
*Source: Curse of Strahd p. 115, Derived from Saber-Toothed Tiger (MM)*  

```ad-statblock
title: Armored Saber-Toothed Tiger
![](/compendium/bestiary/beast/token/armored-saber-toothed-tiger.png#token)
*Large beast, Unaligned*

- **Armor Class** 17 ([half plate armor](/compendium/items/half-plate-armor.md))
- **Hit Points** `dice: 7d10 + 14|text(84)` (7d10 + 14) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|14 (+2)|15 (+2)| 3 (-4)|12 (+1)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +6
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 3

## Traits

***Keen Smell.*** The tiger has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on smell.

***Pounce.*** If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone). If the target is [prone](compendium/rules/conditions.md#prone), the tiger can make one bite attack against it as a bonus action.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d10 + 5|avg` (`1d10 + 5`) piercing damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 5|avg` (`2d6 + 5`) slashing damage.
```
^statblock

## Environment

mountain, arctic