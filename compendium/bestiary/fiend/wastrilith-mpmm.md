---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/underwater
- monster/size/large
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
"name": "Wastrilith"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"stats":
- !!int "19"
- !!int "18"
- !!int "21"
- !!int "19"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft., swim 80 ft."
"saves":
  "Strength": !!int "9"
  "Constitution": !!int "10"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, telepathy 120 ft."
"cr": "13"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The wastrilith can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "At the start of each of the wastrilith's turns, exposed water within 30\
    \ feet of it is befouled. Underwater, this effect lightly obscures the area until\
    \ a current clears it away. Water in containers remains corrupted until it evaporates.\n\
    \nA creature that consumes this foul water or swims in it must make a DC 18 Constitution\
    \ saving throw. On a successful save, the creature is immune to the foul water\
    \ for 24 hours. On a failed save, the creature takes dice: 4d6|avg (4d6) poison\
    \ damage and is [poisoned](compendium/rules/conditions.md#poisoned) for 1 minute.\
    \ At the end of this time, the [poisoned](compendium/rules/conditions.md#poisoned)\
    \ creature must repeat the saving throw. On a failure, the creature takes dice:\
    \ 4d8|avg (4d8) poison damage and is [poisoned](compendium/rules/conditions.md#poisoned)\
    \ until it finishes a long rest.\n\nIf another demon drinks the foul water as\
    \ an action, it gains 11 (dice: 2d10|avg (2d10)) temporary hit points."
  "name": "Corrupt Water"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The wastrilith has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The wastrilith makes one Bite attack and two Claw attacks, and it uses\
    \ Grasping Spout."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 10 ft., one target.\
    \ Hit: dice: 4d12 + 4|avg (4d12 + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 10 ft., one target.\
    \ Hit: dice: 4d6 + 4|avg (4d6 + 4) slashing damage."
  "name": "Claws"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The wastrilith magically launches a spout of water at one creature it can\
    \ see within 60 feet of it. The target must make a DC 17 Strength saving throw,\
    \ and it has disadvantage if it's underwater. On a failed save, it takes dice:\
    \ 4d8 + 4|avg (4d8 + 4) acid damage and is pulled up to 60 feet toward the\
    \ wastrilith. On a successful save, it takes half as much damage and isn't pulled."
  "name": "Grasping Spout"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the wastrilith is underwater, it causes all water within 60 feet of\
    \ it to be difficult terrain for other creatures until the start of its next turn."
  "name": "Undertow"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/fiend/token/wastrilith.png"
aliases: ["Wastrilith"]
---
# Wastrilith
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 258, Mordenkainen's Tome of Foes p. 139*  

Found in the waters of the Abyss and other bodies of water contaminated by that plane's fell influence, wastriliths establish themselves as lords of the deep and rule their dominions with cruelty.

A wastrilith pollutes the waters around it. Its noxious presence even affects nearby sources of water when the demon travels on land. The corrupted water, which contains a measure of the demon's essence, responds to the wastrilith's commands—perhaps hardening to prevent foes from escaping or erupting in a surge that drags victims into its reach.

Creatures that ingest water corrupted by a wastrilith risk their very souls. Those who drink the poisonous liquid might wither away until they finally die, or they remain alive only to become thralls of chaos and evil. To represent this defilementchapter 2 of the Dungeon Master's Guide, you can use the Optional Rule: Abyssal Corruption; Abyssal Corruption in "chapter 2 of the Dungeon Master's Guide", causing the poisoned creature to be corrupted.

```ad-statblock
title: Wastrilith
![](/compendium/bestiary/fiend/token/wastrilith.png#token)
*Large fiend(demon), Chaotic Evil*

- **Armor Class** 18 (natural armor)
- **Hit Points** `dice: 15d10 + 75|text(157)` (15d10 + 75) 
- **Speed** walk 30 ft., swim 80 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)|18 (+4)|21 (+5)|19 (+4)|12 (+1)|14 (+2)|

- **Proficiency Bonus** +5
- **Saving Throws** Strength +9, Constitution +10
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 11
- **Damage Resistances** cold; fire; lightning; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** Abyssal, telepathy 120 ft.
- **Challenge** 13

## Traits

***Amphibious.*** The wastrilith can breathe air and water.

***Corrupt Water.*** At the start of each of the wastrilith's turns, exposed water within 30 feet of it is befouled. Underwater, this effect lightly obscures the area until a current clears it away. Water in containers remains corrupted until it evaporates.

A creature that consumes this foul water or swims in it must make a DC 18 Constitution saving throw. On a successful save, the creature is immune to the foul water for 24 hours. On a failed save, the creature takes `dice: 4d6|avg` (`4d6`) poison damage and is [poisoned](compendium/rules/conditions.md#poisoned) for 1 minute. At the end of this time, the [poisoned](compendium/rules/conditions.md#poisoned) creature must repeat the saving throw. On a failure, the creature takes `dice: 4d8|avg` (`4d8`) poison damage and is [poisoned](compendium/rules/conditions.md#poisoned) until it finishes a long rest.

If another demon drinks the foul water as an action, it gains 11 (`dice: 2d10|avg` (`2d10`)) temporary hit points.

***Magic Resistance.*** The wastrilith has advantage on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The wastrilith makes one Bite attack and two Claw attacks, and it uses Grasping Spout.

***Bite.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 10 ft., one target. Hit: `dice: 4d12 + 4|avg` (`4d12 + 4`) piercing damage.

***Claws.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 10 ft., one target. Hit: `dice: 4d6 + 4|avg` (`4d6 + 4`) slashing damage.

***Grasping Spout.*** The wastrilith magically launches a spout of water at one creature it can see within 60 feet of it. The target must make a DC 17 Strength saving throw, and it has disadvantage if it's underwater. On a failed save, it takes `dice: 4d8 + 4|avg` (`4d8 + 4`) acid damage and is pulled up to 60 feet toward the wastrilith. On a successful save, it takes half as much damage and isn't pulled.

## Bonus Actions

***Undertow.*** If the wastrilith is underwater, it causes all water within 60 feet of it to be difficult terrain for other creatures until the start of its next turn.
```
^statblock

## Environment

coastal, swamp, underdark, underwater