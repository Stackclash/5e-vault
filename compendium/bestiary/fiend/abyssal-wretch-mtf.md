---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mtf
- monster/size/medium
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
"name": "Abyssal Wretch"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "9"
- !!int "12"
- !!int "11"
- !!int "5"
- !!int "8"
- !!int "5"
"speed": "walk 20 ft."
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 9"
"languages": "understands Abyssal but can't speak"
"cr": "1/4"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 1|avg (1d8 + 1) slashing damage."
  "name": "Bite"
"source":
- "MTF"
- "BGDIA"
"image": "/compendium/bestiary/fiend/token/abyssal-wretch.png"
aliases: ["Abyssal Wretch"]
---
# Abyssal Wretch
*Source: Mordenkainen's Tome of Foes p. 136, Baldur's Gate: Descent Into Avernus*  

```ad-statblock
title: Abyssal Wretch
![](/compendium/bestiary/fiend/token/abyssal-wretch.png#token)
*Medium fiend(demon), Chaotic Evil*

- **Armor Class** 11 
- **Hit Points** `dice: 4d8|text(18)` (4d8) 
- **Speed** walk 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 (-1)|12 (+1)|11 (+0)| 5 (-3)| 8 (-1)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 9
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** poison
- **Condition Immunities** charmed, frightened, poisoned
- **Languages** understands Abyssal but can't speak
- **Challenge** 1/4

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 1|avg` (`1d8 + 1`) slashing damage.
```
^statblock