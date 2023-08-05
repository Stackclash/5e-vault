---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/grassland
- monster/environment/swamp
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
"name": "Sword Wraith Warrior"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "18"
- !!int "12"
- !!int "17"
- !!int "6"
- !!int "9"
- !!int "10"
"speed": "walk 30 ft."
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, frightened, poisoned, unconscious"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "the languages it knew in life"
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The warrior doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) slashing damage, or 9 (dice: 1d10 + 4|avg\
    \ (1d10 + 4)) slashing damage if used with two hands."
  "name": "Battleaxe"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+3 (+3 to hit), range 150/600 ft., one\
    \ target. Hit: dice: 1d8 + 1|avg (1d8 + 1) piercing damage."
  "name": "Longbow"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The warrior makes one Battleaxe or Longbow attack, and attack rolls against\
    \ it have advantage until the start of its next turn."
  "name": "Martial Fury"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/undead/token/sword-wraith-warrior.png"
aliases: ["Sword Wraith Warrior"]
---
# Sword Wraith Warrior
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 239, Mordenkainen's Tome of Foes p. 241*  

Sword wraith warriors are most often found on ancient battlefields where soldiers were hemmed in and slaughtered without quarter.

## Sword Wraiths

When glory-obsessed warriors die in battle without honor, they might haunt the site as sword wraiths.

## Stat Block

```ad-statblock
title: Sword Wraith Warrior
![[/6. Mechanics/Bestiary/Undead/Token/sword-wraith-warrior.png#token]]
*Medium undead, Lawful Evil*

- **Armor Class** 16 ([[/6. Mechanics/Items/chain-shirt.md\|chain shirt]], [[/6. Mechanics/Items/shield.md\|shield]])
- **Hit Points** `dice: 6d8 + 18|text(45)` (6d8 + 18) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|12 (+1)|17 (+3)| 6 (-2)| 9 (-1)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 9
- **Damage Resistances** necrotic; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** exhaustion, frightened, poisoned, unconscious
- **Languages** the languages it knew in life
- **Challenge** 3

## Traits

***Unusual Nature.*** The warrior doesn't require air, food, drink, or sleep.

## Actions

***Battleaxe.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 4` (`1d8 + 4`) slashing damage, or 9 (`dice: 1d10 + 4` (`1d10 + 4`)) slashing damage if used with two hands.

***Longbow.*** *Ranged Weapon Attack:* `dice: d20+3` (+3 to hit), range 150/600 ft., one target. Hit: `dice: 1d8 + 1` (`1d8 + 1`) piercing damage.

## Bonus Actions

***Martial Fury.*** The warrior makes one Battleaxe or Longbow attack, and attack rolls against it have advantage until the start of its next turn.
```
^statblock

## Environment

grassland, swamp