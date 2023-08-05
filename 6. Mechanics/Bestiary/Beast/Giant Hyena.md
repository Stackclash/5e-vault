---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/large
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Giant Hyena"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "walk 50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the hyena reduces a creature to 0 hit points with a melee attack on\
    \ its turn, the hyena can take a bonus action to move up to half its speed and\
    \ make a bite attack."
  "name": "Rampage"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) piercing damage."
  "name": "Bite"
"source":
- "MM"
- "TftYP"
- "GoS"
- "BGDIA"
"image": "/compendium/bestiary/beast/token/giant-hyena.png"
aliases: ["Giant Hyena"]
---
# Giant Hyena
*Source: Monster Manual p. 326, Tales from the Yawning Portal, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus*  

```ad-statblock
title: Giant Hyena
![[/6. Mechanics/Bestiary/Beast/Token/giant-hyena.png#token]]
*Large beast, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 6d10 + 12|text(45)` (6d10 + 12) 
- **Speed** walk 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|14 (+2)|14 (+2)| 2 (-4)|12 (+1)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3
- **Senses** passive Perception 13
- **Languages** —
- **Challenge** 1

## Traits

***Rampage.*** When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 3` (`2d6 + 3`) piercing damage.
```
^statblock

## Environment

grassland, forest, hill, desert